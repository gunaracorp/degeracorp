"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#degera", label: "Produk DEGERA" },
  { href: "#perjalanan", label: "Perjalanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-gold/15 bg-ivory/85 shadow-[0_10px_40px_-18px_rgba(36,27,18,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
        >
          {/* Brand */}
          <a href="#beranda" className="group flex items-center gap-3" aria-label="Kembali ke beranda">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-espresso text-sm font-logo text-champagne transition-transform duration-500 group-hover:rotate-[360deg] md:h-10 md:w-10">
              FI
            </span>
            <span className="leading-none">
              <span className="block font-logo text-lg tracking-[0.22em] text-espresso md:text-xl">
                DEGERASIA
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.4em] text-gold-deep md:text-[10px]">
                by Dr. Fatri Idana
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[13px] font-medium uppercase tracking-[0.18em] text-cocoa transition-colors hover:text-espresso"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className="group relative hidden overflow-hidden rounded-full bg-espresso px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-500 md:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-deep via-gold to-gold-deep transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Reservasi
              </span>
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu navigasi"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ivory/70 text-espresso backdrop-blur lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-espresso text-ivory"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
              <span className="font-logo text-lg tracking-[0.22em] text-champagne">DEGERASIA</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu navigasi"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-champagne/30"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.15, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-4xl font-light italic text-ivory transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="#kontak"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-deep to-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-ivory"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Buat Reservasi
                </a>
              </motion.li>
            </ul>
            <p className="px-8 pb-10 text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              Klinik Degerasia — The Art of Refined Beauty
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
