import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Footer from "@/components/Footer";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room",
  description: "Discover innovative ways to decorate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={LeagueSpartan.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
