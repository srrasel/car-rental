import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        emailNotifications: true,
        pushNotifications: true,
        marketingEmails: true,
        theme: true,
        language: true,
        twoFactorEnabled: true,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[SETTINGS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const {
      emailNotifications,
      pushNotifications,
      marketingEmails,
      theme,
      language,
      twoFactorEnabled,
    } = body;

    const user = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        emailNotifications,
        pushNotifications,
        marketingEmails,
        theme,
        language,
        twoFactorEnabled,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[SETTINGS_PUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
