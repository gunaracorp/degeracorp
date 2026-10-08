"use client";

import { CalendarCheck, ScanFace, Sparkles, Waves } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "Langkah 01",
    title: "Konsultasi Personal",
    desc: "Duduk bersama Dr. Fatri dalam sesi 30 menit — mendengar cerita, kebiasaan, dan harapan Anda tanpa terburu-buru.",
  },
  {
    icon: ScanFace,
    step: "Langkah 02",
    title: "Analisis Kulit Mendalam",
    desc: "Skin analysis berbasis perangkat + tatapan klinis 15 tahun: memetakan kebutuhan kulit Anda lapis demi lapis.",
  },
  {
    icon: Sparkles,
    step: "Langkah 03",
    title: "Treatment Terencana",
    desc: "Protokol khusus dirancang dengan prioritas kenyamanan: mulai dari yang paling lembut menuju hasil maksimal.",
  },
  {
    icon: Waves,
    step: "Langkah 04",
    title: "Perawatan Berkelanjutan",
    desc: "Dampingan jangka panjang — jadwal evaluasi rutin, homecare DEGERA, dan akses konsultasi kapan pun dibutuhkan.",
  },
];

export function Journey() {
  return (
    <section id="perjalanan" aria-label="Perjalanan perawatan bersama Dr. Fatri Idana" className="relative overflow-hidden bg-porcelain py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 brand-hairline" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Perjalanan Anda</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
              Empat Babak Menuju{" "}
              <em className="font-medium text-leaf-gradient">Versi Terbaik Anda</em>
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Garis timeline desktop */}
          <span aria-hidden className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-leaf/50 to-transparent lg:block" />

          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-leaf/30 bg-sage text-leaf-deep shadow-[0_0_0_10px_rgba(251,247,240,1)] transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-mint">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-leaf-deep">{s.step}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-forest">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-moss">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
