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

    const bookings = await prisma.booking.findMany({
      where: {
        user: {
          email: session.user.email
        }
      },
      orderBy: { createdAt: "desc" }
    });

    const enrichedBookings = bookings.map(booking => {
      const car = allCars.find(c => c.id === booking.carId);
      return {
        ...booking,
        carName: car?.name || "Unknown Car",
        carImage: car?.image || "/assets/1.jpg",
        pickupLocation: car?.location || "Lausanne",
        category: car?.category || "Standard"
      };
    });

    return NextResponse.json(enrichedBookings);

  } catch (error) {
    console.error("[DASHBOARD_RENTALS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
