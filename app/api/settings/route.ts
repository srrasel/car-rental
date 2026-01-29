import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let settings = await prisma.settings.findFirst();

    if (!settings) {
      settings = await prisma.settings.create({
        data: {
          platformName: "RentalAdmin",
          currency: "USD",
          timezone: "(GMT+00:00) UTC",
          language: "English (US)",
          dateFormat: "MM/DD/YYYY",
          maintenanceMode: false,
          supportEmail: "support@rentaladmin.com",
          supportPhone: "+1 (555) 123-4567",
        },
      });
    }

    return NextResponse.json({
      platformName: settings.platformName,
      currency: settings.currency,
      stripePublishableKey: settings.stripePublishableKey || null,
      stripeLiveMode: settings.stripeLiveMode || false,
      paypalClientId: settings.paypalClientId || null,
      paypalLiveMode: settings.paypalLiveMode || false,
    });
  } catch (error) {
    console.error("[PUBLIC_SETTINGS_GET]", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

