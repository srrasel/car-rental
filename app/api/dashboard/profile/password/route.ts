import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hash, compare } from "bcryptjs";

export async function PUT(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { currentPassword, newPassword } = body;

    if (!newPassword || newPassword.length < 6) {
      return new NextResponse("New password must be at least 6 characters", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // If user has a password, verify current password
    if (user.password) {
      if (!currentPassword) {
        return new NextResponse("Current password is required", { status: 400 });
      }
      
      const isValid = await compare(currentPassword, user.password);
      if (!isValid) {
        return new NextResponse("Invalid current password", { status: 400 });
      }
    }

    const hashedPassword = await hash(newPassword, 10);

    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedPassword },
    });

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("[PASSWORD_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
