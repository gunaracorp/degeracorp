"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FlaskConical, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";

const PRODUCTS = [
  {
    img: "/images/product-serum.png",
    name: "Degera Radiance Serum",
    role: "Serum pencerah nan emas",
    note: "Peptida + Niacinamide — untuk kilau sehat yang merata",
  },
  {
    img: "/images/product-cream.png",
    name: "Degera Barrier Cream",
    role: "Krim pemulih lapisan kulit",
    note: "Ceramida kompleks — mengunci kelembapan 72 jam",
  },
  {
    img: "/images/product-sunscreen.png",
    name: "Degera Veil Sunscreen",
    role: "Tabir surya velvety SPF 50",
    note: "Finish satin tanpa whitecast — aman untuk kulit tropis",
  },
  {
    img: "/images/product-toner.png",
    name: "Degera Dewy Toner",
    role: "Esensi pelembap ringan",
    note: "Hyaluronic multi-weight — siapkan kulit menyerap active",
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
    <section id="degera" aria-label="Produk DEGERA" className="grain relative overflow-hidden bg-espresso py-24 text-ivory md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(185,138,74,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[5%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,195,154,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow tone="light">Lini Perawatan Rumah</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-logo text-4xl tracking-[0.14em] text-champagne md:text-5xl">
              DEGERA
            </h2>
            <p className="mt-3 font-display text-2xl font-light italic text-ivory/90 md:text-3xl">
              Di mana sains menjadi ritual kecantikan harian.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm font-light leading-relaxed text-ivory/70 md:text-base">
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
                className="inline-flex items-center gap-2.5 rounded-full border border-champagne/25 bg-ivory/5 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-champagne backdrop-blur"
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
              className="group relative overflow-hidden rounded-[24px] border border-champagne/20 bg-gradient-to-b from-ivory/[0.07] to-ivory/[0.02] p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-champagne/50 hover:shadow-[0_35px_60px_-25px_rgba(0,0,0,0.8)]"
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
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-70" />
                <span className="absolute left-3 top-3 rounded-full bg-espresso/80 px-3.5 py-1.5 font-logo text-[10px] tracking-[0.3em] text-champagne backdrop-blur">
                  DEGERA
                </span>
              </div>

              <div className="px-2 pb-2 pt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-champagne/80">{prod.role}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ivory">{prod.name}</h3>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-ivory/65">{prod.note}</p>
                <a
                  href="#kontak"
                  className="mt-4 inline-flex items-center gap-2 border-b border-champagne/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-champagne transition-all duration-300 hover:gap-3.5 hover:border-champagne"
                  aria-label={`Pesan ${prod.name}`}
                >
                  Pesan via Klinik
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-[11px] uppercase tracking-[0.3em] text-ivory/40">
            Tersedia eksklusif di Klinik Degerasia &amp; apotek mitra terverifikasi
          </p>
        </Reveal>
      </div>
    </section>
  );
}
