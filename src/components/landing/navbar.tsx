"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Gift, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES, SERVICES, waLink } from "@/lib/degerasia-data";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/produk", label: "Produk" },
  { href: "/galeri", label: "Galeri" },
  { href: "/artikel", label: "Artikel" },
  { href: "/kontak", label: "Kontak" },
];

const EXTRA_LINKS = [
  { href: "/promo", label: "Promo & Program" },
  { href: "/faq", label: "Pertanyaan Umum" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileLayanan, setMobileLayanan] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || megaOpen
            ? "border-b border-leaf/15 bg-porcelain/85 shadow-[0_10px_40px_-18px_rgba(15,36,21,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Klinik Degerasia — Beranda">
            <span className="flex items-center rounded-xl bg-porcelain/90 px-2.5 py-1.5 shadow-sm ring-1 ring-fern transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src="/images/logo-degerasia.png"
                alt="Logo DEGERASIA — Skincare & Anti-Aging"
                width={72}
                height={39}
                priority
                className="h-8 w-auto md:h-9"
              />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="mt-0.5 block text-[9px] uppercase tracking-[0.34em] text-leaf-deep md:text-[10px]">
                by Dr. Fatri Idana
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-8">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors",
                    isActive(link.href) ? "text-forest" : "text-moss hover:text-forest"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-leaf transition-all duration-500",
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}

            {/* Layanan — mega menu */}
            <li
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                href="/layanan"
                aria-expanded={megaOpen}
                className={cn(
                  "group relative flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors",
                  isActive("/layanan") ? "text-forest" : "text-moss hover:text-forest"
                )}
              >
                Layanan
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform duration-300", megaOpen && "rotate-180")}
                  aria-hidden
                />
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-leaf transition-all duration-500",
                    isActive("/layanan") ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full z-50 w-[860px] -translate-x-1/2 pt-5"
                  >
                    <div className="grid grid-cols-4 gap-6 rounded-3xl border border-fern bg-porcelain/98 p-7 shadow-[0_30px_70px_-20px_rgba(15,36,21,0.4)] backdrop-blur-xl">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <div key={cat}>
                          <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-leaf-deep">
                            {cat}
                          </h3>
                          <ul className="mt-4 space-y-2.5">
                            {SERVICES.filter((s) => s.category === cat).map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/layanan/${s.slug}`}
                                  onClick={() => setMegaOpen(false)}
                                  className="group/item block rounded-lg px-2 py-1.5 transition-colors hover:bg-sage"
                                >
                                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-forest transition-colors group-hover/item:text-leaf-deep">
                                    {s.signature && <Sparkles className="h-3 w-3 text-leaf" aria-hidden />}
                                    {s.name}
                                  </span>
                                  <span className="mt-0.5 block line-clamp-1 text-[11px] font-light text-moss">
                                    {s.tagline}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Kolom promo */}
                      <div className="flex flex-col justify-between rounded-2xl bg-forest p-5 text-porcelain">
                        <div>
                          <Gift className="h-6 w-6 text-mint" aria-hidden />
                          <h3 className="mt-3 font-display text-xl font-light italic">
                            Promo &amp; Program
                          </h3>
                          <p className="mt-2 text-[12px] font-light leading-relaxed text-porcelain/60">
                            Konsultasi gratis pasien baru, Paket Glow 3+1, dan referral berhadiah.
                          </p>
                        </div>
                        <ul className="mt-5 space-y-2">
                          {EXTRA_LINKS.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                onClick={() => setMegaOpen(false)}
                                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-mint transition-colors hover:text-porcelain"
                              >
                                {l.label}
                                <span aria-hidden>→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {NAV_LINKS.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative text-[13px] font-medium uppercase tracking-[0.18em] transition-colors",
                    isActive(link.href) ? "text-forest" : "text-moss hover:text-forest"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-leaf transition-all duration-500",
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/kontak"
              className="group relative hidden overflow-hidden rounded-full bg-forest px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-porcelain transition-colors duration-500 md:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-leaf-deep via-leaf to-leaf-deep transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Reservasi
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu navigasi"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-leaf/30 bg-porcelain/70 text-forest backdrop-blur lg:hidden"
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
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-forest text-porcelain"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
              <span className="flex items-center rounded-xl bg-porcelain px-2.5 py-1.5">
                <Image
                  src="/images/logo-degerasia.png"
                  alt="Logo DEGERASIA"
                  width={64}
                  height={34}
                  className="h-7 w-auto"
                />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu navigasi"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mint/30"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-start justify-center gap-1 px-8 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.15, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 font-display text-3xl font-light italic text-porcelain transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              {/* Accordion Layanan */}
              <motion.li
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full"
              >
                <button
                  type="button"
                  onClick={() => setMobileLayanan((v) => !v)}
                  aria-expanded={mobileLayanan}
                  className="flex items-center gap-3 py-1.5 font-display text-3xl font-light italic text-porcelain"
                >
                  Layanan
                  <ChevronDown
                    className={cn("h-6 w-6 text-mint transition-transform duration-300", mobileLayanan && "rotate-180")}
                    aria-hidden
                  />
                </button>
                <AnimatePresence>
                  {mobileLayanan && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden pl-2"
                    >
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/layanan/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm font-light text-porcelain/70 transition-colors hover:text-mint"
                          >
                            {s.signature && "✦ "}
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {EXTRA_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.58 + 0.06 * i, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 font-display text-2xl font-light italic text-porcelain/80 transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="mt-7"
              >
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-leaf-deep to-leaf px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-porcelain"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Reservasi via WhatsApp
                </a>
              </motion.li>
            </ul>

            <p className="px-8 pb-10 text-[11px] uppercase tracking-[0.3em] text-porcelain/40">
              Klinik Degerasia — Sumbawa, Nusa Tenggara Barat
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
