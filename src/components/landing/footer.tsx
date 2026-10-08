"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, MapPin, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/degerasia-data";

const MAIN_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Dr. Fatri" },
  { href: "/layanan", label: "Layanan Klinik" },
  { href: "/produk", label: "Produk DEGERA" },
  { href: "/galeri", label: "Galeri" },
  { href: "/artikel", label: "Artikel & Journal" },
];

const MORE_LINKS = [
  { href: "/promo", label: "Promo & Program" },
  { href: "/faq", label: "Pertanyaan Umum" },
  { href: "/kontak", label: "Reservasi & Kontak" },
];

const SOCIALS = [
  {
    icon: MessageCircle,
    label: "WhatsApp Klinik Degerasia",
    href: waLink(),
  },
  {
    icon: Facebook,
    label: "Facebook Klinik Degerasia",
    href: SITE.facebookUrl,
  },
  {
    icon: MapPin,
    label: "Lokasi Klinik di Google Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Klinik+Degerasia+Jl.+Sultan+Kaharuddin+Dusun+Sering+Desa+Kerato+Unter+Iwes+Kabupaten+Sumbawa+NTB",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-forest text-porcelain">
      <div aria-hidden className="h-px w-full brand-hairline" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:px-8 md:py-20 lg:gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Klinik Degerasia — Beranda">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-porcelain p-1.5 shadow-md">
              <Image
                src="/images/logo-degerasia.png"
                alt="Logo DEGERASIA — Skincare & Anti-Aging"
                width={40}
                height={22}
                className="h-7 w-auto"
              />
            </span>
            <span>
              <span className="block font-logo text-xl tracking-[0.22em]">DEGERASIA</span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.4em] text-mint">
                by Dr. Fatri Idana
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-porcelain/60">
            Rumah kecantikan terintegrasi di bawah naungan Dr. Fatri Idana, M.Biomed., AAM —
            mempersatukan presisi sains medis estetika dengan seni keanggunan botani alami.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-porcelain/20 text-porcelain/70 transition-all duration-300 hover:border-mint hover:text-mint"
              >
                <s.icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {/* Navigasi utama */}
        <nav aria-label="Navigasi footer">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mint">
            Jelajahi
          </h2>
          <ul className="mt-6 space-y-3.5">
            {MAIN_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm font-light text-porcelain/70 transition-colors hover:text-mint"
                >
                  <span aria-hidden className="h-px w-0 bg-mint transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Link lebih banyak */}
        <nav aria-label="Navigasi footer tambahan">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mint">
            Perusahaan
          </h2>
          <ul className="mt-6 space-y-3.5">
            {MORE_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-sm font-light text-porcelain/70 transition-colors hover:text-mint"
                >
                  <span aria-hidden className="h-px w-0 bg-mint transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Jam operasional */}
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mint">
            Jam Kunjungan
          </h2>
          <ul className="mt-6 space-y-3.5 text-sm font-light text-porcelain/70">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-right text-porcelain/90">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-2xl border border-porcelain/10 bg-porcelain/5 p-4 text-[13px] font-light leading-relaxed text-porcelain/60">
            Jl. Sultan Kaharuddin, Dusun Sering, Desa Kerato,
            Kec. Unter Iwes, Kab. Sumbawa, NTB 84316 — di depan
            Masjid Sering / Perempatan Sering.
            <br />
            <span className="text-mint">{SITE.phoneDisplay}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-porcelain/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[11px] font-light tracking-wide text-porcelain/40 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Klinik Degerasia &amp; DEGERA — Dr. Fatri Idana, M.Biomed., AAM.</p>
          <p className="font-logo text-[11px] tracking-[0.3em] text-mint/70">
            THE ART OF REFINED BEAUTY
          </p>
        </div>
      </div>
    </footer>
  );
}
