"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Gem, Layers, ScanFace, Sparkles, Sun, Waves } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";

const SERVICES = [
  {
    icon: Gem,
    title: "Facial Regeneratif Degerasia",
    desc: "Ritual wajah signature yang menggabungkan medical-grade active, massage limfatik, dan teknologi regeneratif untuk kilau sehat yang bertahan lama.",
    tag: "Signature",
  },
  {
    icon: ScanFace,
    title: "Anti-Aging & Botox Presisi",
    desc: "Penghalusan garis ekspresif dengan dosing presisi — hasil natural, ekspresi tetap hidup, tanpa kesan beku.",
    tag: "Most Loved",
  },
  {
    icon: Layers,
    title: "Filler & Kontur Wajah",
    desc: "Sculpting volume pada pipi, dagu, dan bibir dengan estetika proporsi Asia yang dipelajari bertahun-tahun.",
    tag: "Advanced",
  },
  {
    icon: Sun,
    title: "Laser & Rejuvenasi Kulit",
    desc: "Solusi pigmen, bekas jerawat, dan tekstur kulit dengan platform laser terkini yang aman untuk kulit tropis.",
    tag: "Technology",
  },
  {
    icon: Waves,
    title: "Thread Lift Halus",
    desc: "Efek angkat instan tanpa operasi besar — kontur V-line yang elegan dengan masa pemulihan minimal.",
    tag: "Lunchtime",
  },
  {
    icon: Sparkles,
    title: "Glow Program 90 Hari",
    desc: "Program terencana personal: kombinasi in-klinik treatment, DEGERA homecare, dan pendampingan gizi kulit.",
    tag: "Program",
  },
];

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="layanan" aria-label="Layanan Klinik Degerasia" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(217,195,154,0.3),transparent_60%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Layanan Klinik Degerasia</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-espresso md:text-5xl">
              Perawatan yang Dirancang{" "}
              <em className="font-medium text-gold-gradient">Seperti Karya Seni</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base font-light leading-relaxed text-cocoa">
              Setiap tindakan dimulai dari konsultasi mendalam bersama Dr. Fatri —
              karena tidak ada dua kulit yang bercerita sama.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={reduce ? undefined : { opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[24px] border border-sand bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_30px_60px_-25px_rgba(150,112,58,0.5)]"
            >
              {/* Ornamen nomor */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-light text-sand/70 transition-colors duration-500 group-hover:text-champagne"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-cream text-gold-deep transition-all duration-500 group-hover:rotate-6 group-hover:bg-espresso group-hover:text-champagne">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>

                <span className="ml-3 inline-block rounded-full border border-gold/30 px-3 py-1 align-middle text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-deep">
                  {s.tag}
                </span>

                <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-espresso">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-cocoa">{s.desc}</p>

                <a
                  href="#kontak"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-deep transition-all duration-300 hover:gap-3.5 hover:text-espresso"
                  aria-label={`Reservasi ${s.title}`}
                >
                  Reservasi
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-champagne transition-all duration-700 group-hover:w-full"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
