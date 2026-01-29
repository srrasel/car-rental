import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { allCars } from "@/lib/data";
import { auth } from "@/lib/auth";

export async function GET(req: Request) {
    try {
        const session = await auth();
        // In a real app, verify admin role here
        
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // Fetch all bookings to calculate stats
        // Optimally we would use aggregate queries but for complexity with dates and status, fetching relevant subsets is fine
        
        // 1. Active Rentals: Confirmed bookings where today is between start and end date
        const activeRentalsCount = await prisma.booking.count({
            where: {
                status: "CONFIRMED",
                startDate: { lte: now },
                endDate: { gte: now }
            }
        });

        // 2. Active Rentals started today (for the +X today badge)
        const activeRentalsNewToday = await prisma.booking.count({
            where: {
                status: "CONFIRMED",
                startDate: { 
                    gte: startOfDay,
                    lt: new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000)
                }
            }
        });

        // 3. Monthly Revenue: Sum of totalPrice for bookings in current month (Confirmed or Paid)
        // Let's assume CONFIRMED bookings count as revenue
        const currentMonthRevenue = await prisma.booking.aggregate({
            _sum: {
                totalPrice: true
            },
            where: {
                status: "CONFIRMED",
                createdAt: { gte: startOfMonth }
            }
        });

        // Previous month revenue for comparison
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        
        const lastMonthRevenue = await prisma.booking.aggregate({
            _sum: {
                totalPrice: true
            },
            where: {
                status: "CONFIRMED",
                createdAt: {
                    gte: startOfLastMonth,
                    lte: endOfLastMonth
                }
            }
        });

        // 4. Pending Requests
        const pendingRequestsCount = await prisma.booking.count({
            where: { status: "PENDING" }
        });

        // 5. Recent Activity (Last 5 bookings)
        const recentBookings = await prisma.booking.findMany({
            take: 5,
            orderBy: { createdAt: "desc" },
            include: {
                user: {
                    select: { name: true, email: true, image: true }
                }
            }
        });

        // 6. Fleet Utilization
        const totalCars = allCars.length;
        const utilizationRate = totalCars > 0 ? (activeRentalsCount / totalCars) * 100 : 0;

        // 7. Fleet Status (Available vs Rented vs Maintenance)
        // Maintenance is not tracked in DB yet, so we'll assume 0 for now or random for demo if needed, but let's keep it 0.
        const rentedCars = activeRentalsCount;
        const availableCars = Math.max(0, totalCars - rentedCars);

        return NextResponse.json({
            stats: {
                activeRentals: activeRentalsCount,
                activeRentalsNewToday,
                monthlyRevenue: currentMonthRevenue._sum.totalPrice || 0,
                lastMonthRevenue: lastMonthRevenue._sum.totalPrice || 0,
                pendingRequests: pendingRequestsCount,
                fleetUtilization: Math.round(utilizationRate),
                totalFleet: totalCars,
                availableCars,
                rentedCars
            },
            recentActivity: recentBookings.map(booking => {
                const car = allCars.find(c => c.id === booking.carId);
                return {
                    id: booking.id,
                    user: booking.user,
                    carName: car ? car.name : "Unknown Car",
                    carImage: car ? car.image : null,
                    status: booking.status,
                    totalPrice: booking.totalPrice,
                    createdAt: booking.createdAt,
                    dateRange: `${new Date(booking.startDate).toLocaleDateString()} - ${new Date(booking.endDate).toLocaleDateString()}`
                };
            })
        });

    } catch (error) {
        console.error("Dashboard API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
