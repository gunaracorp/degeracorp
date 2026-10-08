"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FlaskConical, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";

const PRODUCTS = [
  {
    img: "/images/degera-serum.png",
    name: "Degera Serum Gold",
    role: "Serum pencerah nan emas",
    note: "Peptida + Gold Colloid — memperbaiki kulit semalaman",
    href: "/produk/serum-gold",
    price: "Rp 120.000",
  },
  {
    img: "/images/degera-cream.png",
    name: "Degera J'Ra Cream",
    role: "Krim siang legendaris",
    note: "Niacinamide + Rice Extract — mencerahkan & melindungi",
    href: "/produk/jra-cream",
    price: "Rp 55.000",
  },
  {
    img: "/images/degera-sunscreen.png",
    name: "Degera Sunscreen Free Oily",
    role: "Tabir surya oil-free",
    note: "Finish matte tanpa whitecast — untuk kulit berminyak",
    href: "/produk/sunscreen-free-oily",
    price: "Rp 55.000",
  },
  {
    img: "/images/degera-toner.png",
    name: "Degera Toner 2 IN 1",
    role: "Penyeimbang dua fungsi",
    note: "Witch Hazel + Panthenol — pori tampak halus",
    href: "/produk/toner-2-in-1",
    price: "Rp 55.000",
  },
];

const PILLARS = [
  { icon: FlaskConical, label: "Teruji Klinis" },
  { icon: Leaf, label: "Sensus Halus" },
  { icon: ShieldCheck, label: "Aman & Hypoalergenik" },
  { icon: Sparkles, label: "Diformulasikan Dokter" },
];

export function Products() {
  const reduce = useReducedMotion();

  return (
    <section id="degera" aria-label="Produk DEGERA" className="grain relative overflow-hidden bg-forest py-24 text-porcelain md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(47,158,68,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[5%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow tone="light">Lini Perawatan Rumah</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-logo text-4xl tracking-[0.14em] text-mint md:text-5xl">
              DEGERA
            </h2>
            <p className="mt-3 font-display text-2xl font-light italic text-porcelain/90 md:text-3xl">
              Di mana sains menjadi ritual kecantikan harian.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm font-light leading-relaxed text-porcelain/70 md:text-base">
              Dirumuskan langsung di bawah supervisi Dr. Fatri Idana — memperpanjang
              hasil perawatan klinik ke rumah Anda, dengan standar farmasi estetika.
            </p>
          </Reveal>
        </div>

        {/* Pilar keunggulan */}
        <Reveal delay={0.25}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {PILLARS.map((p) => (
              <li
                key={p.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-porcelain/5 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-mint backdrop-blur"
              >
                <p.icon className="h-4 w-4" aria-hidden />
                {p.label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Kartu produk */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((prod, i) => (
            <motion.article
              key={prod.name}
              initial={reduce ? undefined : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: (i % 4) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[24px] border border-mint/20 bg-gradient-to-b from-porcelain/[0.07] to-porcelain/[0.02] p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-mint/50 hover:shadow-[0_35px_60px_-25px_rgba(0,0,0,0.8)]"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={prod.img}
                  alt={`${prod.name} — ${prod.role} dari brand DEGERA`}
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent opacity-70" />
                <span className="absolute left-3 top-3 rounded-full bg-forest/80 px-3.5 py-1.5 font-logo text-[10px] tracking-[0.3em] text-mint backdrop-blur">
                  DEGERA
                </span>
              </div>

              <div className="px-2 pb-2 pt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-mint/80">{prod.role}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-porcelain">{prod.name}</h3>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-porcelain/65">{prod.note}</p>
                <Link
                  href={prod.href}
                  className="mt-4 inline-flex items-center gap-2 border-b border-mint/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-mint transition-all duration-300 hover:gap-3.5 hover:border-mint"
                  aria-label={`Lihat detail ${prod.name}`}
                >
                  {prod.price}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/produk"
              className="group inline-flex items-center gap-3 rounded-full border border-mint/40 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-mint transition-all duration-500 hover:bg-mint hover:text-forest"
            >
              Lihat 21 Produk Terdaftar BPOM
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden />
            </Link>
          </div>
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-porcelain/40">
            Tersedia eksklusif di Klinik Degerasia &amp; apotek mitra terverifikasi
          </p>
        </Reveal>
      </div>
    </section>
  );
}
