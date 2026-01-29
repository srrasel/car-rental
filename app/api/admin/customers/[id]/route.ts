import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        // Add admin check here
        
        const { id } = await params;

        const user = await prisma.user.findUnique({
            where: { id },
            include: {
                bookings: {
                    orderBy: { createdAt: 'desc' },
                    include: {
                        // Include car details if possible, but car is just carId int
                        // We might need to fetch car details separately or rely on frontend to map it
                    }
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
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
        
        // Prevent changing own role or sensitive fields if needed
        // For now allow updating name, email, role
        
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name: body.name,
                email: body.email,
                role: body.role
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        // Add admin check here
        
        const { id } = await params;

        // Check if user has bookings? Maybe just delete and cascade?
        // Schema says: user User @relation(fields: [userId], references: [id], onDelete: Cascade)
        // So bookings will be deleted.

        await prisma.user.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
