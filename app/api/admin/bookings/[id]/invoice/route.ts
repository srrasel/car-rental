
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        // Add admin check here

        const { id } = await params;

        const booking = await prisma.booking.findUnique({
            where: { id },
            include: { user: true }
        });

        if (!booking) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }

        // Calculate final amount with extra mileage
        const car = allCars.find(c => c.id === booking.carId);
        const limitPerDay = (car as any)?.dailyMileageLimit || 100;
        const extraCostPerKm = (car as any)?.extraMileageCost || 0.50;

        const startM = booking.startMileage || 0;
        const endM = booking.endMileage || 0;
        const distanceDriven = Math.max(0, endM - startM);
        
        const days = Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1;
        const limit = days * limitPerDay;
        const excessDistance = Math.max(0, distanceDriven - limit);
        const extraCost = excessDistance * extraCostPerKm;
        const finalTotal = booking.totalPrice + extraCost;

        // Mock invoice sending logic
        console.log(`
            [INVOICE SENT]
            To: ${booking.user.email}
            Booking ID: ${booking.id}
            Car: ${car?.name}
            --------------------------------
            Base Rental: CHF ${booking.totalPrice.toFixed(2)}
            Distance: ${distanceDriven}km (Limit: ${limit}km)
            Excess: ${excessDistance}km @ CHF ${extraCostPerKm}/km
            Extra Cost: CHF ${extraCost.toFixed(2)}
            --------------------------------
            TOTAL: CHF ${finalTotal.toFixed(2)}
        `);

        // In a real app, you would generate a PDF and email it here
        
        return NextResponse.json({ 
            success: true, 
            message: "Invoice sent successfully",
            details: {
                basePrice: booking.totalPrice,
                extraMileageCost: extraCost,
                totalPrice: finalTotal
            }
        });
    } catch (error) {
        console.error("Error sending invoice:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
