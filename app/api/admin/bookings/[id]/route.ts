
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        // Add admin check here if role exists
        
        const { id } = await params;

        const booking = await prisma.booking.findUnique({
            where: { id },
            include: {
                user: true
            }
        });

        if (!booking) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json(booking);
    } catch (error) {
        console.error("Error fetching booking:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        // Add admin check here
        
        const { id } = await params;
        
        const body = await req.json();
        const { status, startMileage, endMileage, paymentStatus } = body;

        const updateData: any = {};
        if (status) updateData.status = status;
        if (paymentStatus) updateData.paymentStatus = paymentStatus;
        if (startMileage !== undefined) updateData.startMileage = parseInt(startMileage);
        if (endMileage !== undefined) updateData.endMileage = parseInt(endMileage);

        const booking = await prisma.booking.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(booking);
    } catch (error) {
        console.error("Error updating booking:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
