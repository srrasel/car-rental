import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { allCars } from "@/lib/data";

export async function GET() {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        bookings: {
          orderBy: { createdAt: "desc" },
          take: 1, // Get most recent for "active" display if status matches
          where: {
            status: { in: ["PENDING", "CONFIRMED"] },
            endDate: { gte: new Date() }
          }
        },
        _count: {
          select: { bookings: true }
        }
      }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const totalRentals = user._count.bookings;
    const loyaltyPoints = totalRentals * 150 + 50; // Mock calculation
    
    let memberStatus = "Silver";
    let progressToNext = 0;
    
    if (loyaltyPoints >= 3000) {
      memberStatus = "Platinum";
      progressToNext = 100;
    } else if (loyaltyPoints >= 1000) {
      memberStatus = "Gold";
      progressToNext = ((loyaltyPoints - 1000) / 2000) * 100;
    } else {
      memberStatus = "Silver";
      progressToNext = (loyaltyPoints / 1000) * 100;
    }

    // Get the active booking with car details
    let activeBooking = null;
    if (user.bookings.length > 0) {
      const booking = user.bookings[0];
      const car = allCars.find(c => c.id === booking.carId);
      
      activeBooking = {
        ...booking,
        carName: car?.name || "Unknown Car",
        carImage: car?.image || "/assets/1.jpg",
        pickupLocation: car?.location || "Lausanne"
      };
    }

    return NextResponse.json({
      stats: {
        totalRentals,
        loyaltyPoints,
        memberStatus,
        progressToNext
      },
      activeBooking
    });

  } catch (error) {
    console.error("[DASHBOARD_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
