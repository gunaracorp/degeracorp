import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Font di-host sendiri di ./fonts (subset latin) karena next/font/google
// gagal di Turbopack saat Google Fonts membalas URL tanpa ekstensi
// (vercel/next.js#99114) — build produksi tidak boleh bergantung jaringan.
const jost = localFont({
  variable: "--font-jost",
  src: [{ path: "./fonts/jost-latin-variable.woff2", weight: "100 900", style: "normal" }],
  display: "swap",
});

const cormorant = localFont({
  variable: "--font-cormorant",
  src: [
    { path: "./fonts/cormorant-garamond-latin-variable.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-italic-variable.woff2", weight: "300 700", style: "italic" },
  ],
  display: "swap",
});

const italiana = localFont({
  variable: "--font-italiana",
  src: [{ path: "./fonts/italiana-latin-400.woff2", weight: "400", style: "normal" }],
  display: "swap",
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
