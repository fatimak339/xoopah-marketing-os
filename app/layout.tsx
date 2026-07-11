import type { Metadata } from "next";
import { Lexend, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xoopah Marketing OS",
  description: "Fatima's internal marketing operating system for Xoopah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${bricolage.variable}`}>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
