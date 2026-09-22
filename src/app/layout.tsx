import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// The Inter font complements the clean, modern look of Soft UI
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}