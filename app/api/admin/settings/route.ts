import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // Find existing settings or create default
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

    return NextResponse.json(settings);
  } catch (error) {
    console.error("[SETTINGS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      platformName,
      supportEmail,
      supportPhone,
      currency,
      timezone,
      language,
      dateFormat,
      maintenanceMode,
      logo,
      stripePublishableKey,
      stripeSecretKey,
      stripeLiveMode,
      paypalClientId,
      paypalSecret,
      paypalLiveMode,
    } = body;

    // Check if settings exist
    const existingSettings = await prisma.settings.findFirst();

    let settings;
    if (existingSettings) {
      settings = await prisma.settings.update({
        where: { id: existingSettings.id },
        data: {
          platformName,
          supportEmail,
          supportPhone,
          currency,
          timezone,
          language,
          dateFormat,
          maintenanceMode,
          logo,
          stripePublishableKey,
          stripeSecretKey,
          stripeLiveMode,
          paypalClientId,
          paypalSecret,
          paypalLiveMode,
        },
      });
    } else {
      settings = await prisma.settings.create({
        data: {
          platformName,
          supportEmail,
          supportPhone,
          currency,
          timezone,
          language,
          dateFormat,
          maintenanceMode,
          logo,
          stripePublishableKey,
          stripeSecretKey,
          stripeLiveMode,
          paypalClientId,
          paypalSecret,
          paypalLiveMode,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error("[SETTINGS_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
