import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function GET(req: Request) {
    try {
        const session = await auth();
        // Add admin check here
        
        const users = await prisma.user.findMany({
            include: {
                _count: {
                    select: { bookings: true }
                },
                bookings: {
                    select: {
                        createdAt: true,
                        totalPrice: true,
                        status: true
                    },
                    orderBy: { createdAt: 'desc' }
                }
            },
            orderBy: {
                id: 'desc'
            }
        });

        // Transform data to include relevant stats
        const customers = users.map(user => {
            const totalSpent = user.bookings
                .filter(b => b.status !== 'CANCELLED') // Only count valid bookings
                .reduce((sum, b) => sum + (b.totalPrice || 0), 0);

            return {
                id: user.id,
                name: user.name || "Unknown",
                email: user.email,
                role: user.role,
                image: user.image,
                totalBookings: user._count.bookings,
                lastActive: user.bookings[0]?.createdAt || null,
                totalSpent: totalSpent
            };
        });

        return NextResponse.json(customers);
    } catch (error) {
        console.error("Error fetching customers:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        // Add admin check here
        
        const body = await req.json();
        const { name, email, password, role } = body;

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || "user",
                image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "User")}&background=random`
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error creating customer:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
