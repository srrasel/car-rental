import { NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth();

    const { amount, currency = "usd" } = await req.json();

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    // Load Stripe secret from Settings (fallback to env)
    const settings = await prisma.settings.findFirst();
    const secretKey = settings?.stripeSecretKey || process.env.STRIPE_SECRET_KEY || "sk_test_placeholder";
    const stripe = new Stripe(secretKey, {
      apiVersion: "2025-12-15.clover" as any,
    });

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects cents
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        ...(session?.user?.id ? { userId: session.user.id! } : {}),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
