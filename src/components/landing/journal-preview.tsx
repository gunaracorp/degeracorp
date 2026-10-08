"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Gem, Gift, Heart, Package, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";
import { ARTICLES, PROMOS, formatDate } from "@/lib/degerasia-data";

const PROMO_ICONS: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  gem: Gem,
  package: Package,
  heart: Heart,
};

/** Section gabungan: Promo strip + preview Journal (artikel terbaru). */
export function JournalPreview() {
  const reduce = useReducedMotion();
  const latest = ARTICLES.slice(0, 3);
  const featuredPromos = PROMOS.slice(0, 3);

  return (
    <section
      id="journal"
      aria-label="Promo dan artikel terbaru"
      className="relative overflow-hidden bg-porcelain py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[30%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.25),transparent_60%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ── Promo strip ── */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow>Penawaran Waktu Ini</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-light text-forest md:text-4xl">
                Program &amp; <em className="text-leaf-gradient">Keistimewaan</em> Berjalan
              </h2>
            </div>
            <Link
              href="/promo"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-all duration-300 hover:gap-3.5 hover:text-forest"
            >
              Semua Promo
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredPromos.map((p, i) => {
            const Icon = PROMO_ICONS[p.icon] ?? Sparkles;
            return (
              <motion.div
                key={p.slug}
                initial={reduce ? undefined : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[24px] border border-fern bg-sage p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_25px_50px_-25px_rgba(30,122,52,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-mint">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-leaf-deep">
                    {p.subtitle}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-forest">{p.title}</h3>
                <p className="mt-3 line-clamp-2 text-[13px] font-light leading-relaxed text-moss">
                  {p.description}
                </p>
                <Link
                  href="/promo"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-all duration-300 hover:gap-3.5"
                  aria-label={`Lihat promo ${p.title}`}
                >
                  Lihat Program
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Journal preview ── */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <Eyebrow>Degerasia Journal</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light text-forest md:text-4xl">
                  Ilmu Kecantikan, <em className="text-leaf-gradient">Dibagikan</em>
                </h2>
              </div>
              <Link
                href="/artikel"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-all duration-300 hover:gap-3.5 hover:text-forest"
              >
                Semua Artikel
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latest.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={reduce ? undefined : { opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[24px] border border-fern bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]"
              >
                <Link href={`/artikel/${a.slug}`} className="block" aria-label={`Baca artikel: ${a.title}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={a.cover}
                      alt={`Ilustrasi artikel — ${a.title}`}
                      width={1440}
                      height={960}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 90vw, 30vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-mint backdrop-blur">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium leading-snug text-forest transition-colors group-hover:text-leaf-deep">
                      {a.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-[13px] font-light leading-relaxed text-moss">
                      {a.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.16em] text-moss/80">
                      <span>{formatDate(a.date)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" aria-hidden />
                        {a.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
