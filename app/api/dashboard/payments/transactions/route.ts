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
          email: session.user.email,
        },
        paymentStatus: {
          in: ["PAID", "REFUNDED"]
        }
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const enrichedTransactions = bookings.map(booking => {
        const car = allCars.find(c => c.id === booking.carId);
        return {
            id: booking.id,
            description: `Rental - ${car?.name || "Unknown Car"}`,
            date: booking.createdAt,
            amount: booking.totalPrice,
            status: booking.paymentStatus, // PAID, REFUNDED
            type: "DEBIT" // Just assuming rentals are debits
        };
    });

    return NextResponse.json(enrichedTransactions);
  } catch (error) {
    console.error("[TRANSACTIONS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
