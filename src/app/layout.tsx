import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Italiana, Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dr. Fatri Idana, M.Biomed., AAM — Klinik Degerasia | Senior Dokter Kecantikan",
  description:
    "Personal branding resmi Dr. Fatri Idana, M.Biomed., AAM — Senior Dokter Kecantikan, Owner Klinik Degerasia & Founder Brand DEGERA. Seni kecantikan yang dipersatukan dengan sains medis estetika.",
  keywords: [
    "Dr. Fatri Idana",
    "Klinik Degerasia",
    "DEGERA",
    "dokter kecantikan",
    "aesthetic doctor",
    "klinik kecantikan",
    "skincare DEGERA",
  ],
  authors: [{ name: "Dr. Fatri Idana, M.Biomed., AAM" }],
  openGraph: {
    title: "Dr. Fatri Idana, M.Biomed., AAM — Klinik Degerasia",
    description:
      "Senior Dokter Kecantikan & Founder DEGERA. Menggabungkan presisi sains medis dengan seni keanggunan alami.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#241b12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${cormorant.variable} ${italiana.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
