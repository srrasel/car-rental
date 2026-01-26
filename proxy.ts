import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const token = req.auth;
  const path = req.nextUrl.pathname;

  // Protect Admin Routes
  if (path.startsWith("/admin") && token?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Protect Customer Routes (Dashboard)
  if (path.startsWith("/dashboard") && token?.user?.role !== "customer") {
    // Optional: Allow admins to view dashboard or redirect them to admin panel?
    // For now, strict separation as requested: "customer can access customer panel"
    if (token?.user?.role === "admin") {
       return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
