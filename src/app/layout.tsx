import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar"; // Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Micro-Health Tracker",
  description: "A tactile, stress-free daily logger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-softBg text-slate-700 min-h-screen flex flex-col`}>
        <Navbar /> {/* Insert the Navbar here */}
        {children}
      </body>
    </html>
  );
}