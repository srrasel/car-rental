import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json();
    const { carId, startDate, endDate, totalPrice, paymentMethod, user } = body;

    let userId = session?.user?.id;

    // If no session, try to find or create user from request body
    if (!userId && user && user.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (existingUser) {
        userId = existingUser.id;
      } else {
        const newUser = await prisma.user.create({
          data: {
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
          },
        });
        userId = newUser.id;
      }
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!carId || !startDate || !endDate || !totalPrice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: userId,
        carId: parseInt(carId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalPrice: parseFloat(totalPrice),
        paymentMethod: paymentMethod || "UNKNOWN",
        status: "PENDING",
        paymentStatus: "PENDING", // Will be updated after payment confirmation
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Booking creation error:", error);
    // @ts-ignore
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
