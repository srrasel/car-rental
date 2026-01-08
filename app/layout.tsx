import type { Metadata } from "next";
import { Geist, Geist_Mono, Inconsolata, Sora, Epilogue } from "next/font/google"; // Added Inconsolata, Sora, Epilogue
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  display: 'swap',
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: 'swap',
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  display: 'swap',
  weight: "400", // Ensure weight 400 is available
});

export const metadata: Metadata = {
  title: "LuxeDrive - Premium Car Rental",
  description: "Experience the thrill of the drive with our premium fleet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} ${sora.variable} ${epilogue.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
