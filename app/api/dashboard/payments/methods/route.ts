import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const paymentMethods = await prisma.paymentMethod.findMany({
      where: {
        user: {
          email: session.user.email,
        },
      },
      orderBy: {
        isDefault: "desc",
      },
    });

    return NextResponse.json(paymentMethods);
  } catch (error) {
    console.error("[PAYMENT_METHODS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { type, last4, expiryMonth, expiryYear } = body;

    // Simple validation
    if (!type || !last4 || !expiryMonth || !expiryYear) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if this is the first card, if so make it default
    const count = await prisma.paymentMethod.count({
      where: { user: { email: session.user.email } },
    });

    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        user: { connect: { email: session.user.email } },
        type,
        last4,
        expiryMonth: parseInt(expiryMonth),
        expiryYear: parseInt(expiryYear),
        isDefault: count === 0,
      },
    });

    return NextResponse.json(paymentMethod);
  } catch (error) {
    console.error("[PAYMENT_METHODS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
    try {
        const session = await auth();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!session || !session.user || !session.user.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!id) {
            return new NextResponse("Missing ID", { status: 400 });
        }

        // Verify ownership
        const method = await prisma.paymentMethod.findUnique({
            where: { id },
            include: { user: true }
        });

        if (!method || method.user.email !== session.user.email) {
            return new NextResponse("Not found or unauthorized", { status: 404 });
        }

        await prisma.paymentMethod.delete({
            where: { id },
        });

        return new NextResponse(null, { status: 200 });

    } catch (error) {
        console.error("[PAYMENT_METHODS_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
