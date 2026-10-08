"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section aria-label="Ajakan reservasi" className="relative overflow-hidden">
      {/* Latar sutra */}
      <div className="absolute inset-0">
        <Image
          src="/images/silk-texture.png"
          alt=""
          role="presentation"
          fill
          className="animate-kenburns object-cover"
          sizes="100vw"
        />
        <div aria-hidden className="absolute inset-0 bg-forest/72" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center text-porcelain md:px-8 md:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-3 rounded-full border border-mint/40 bg-porcelain/10 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-mint backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Slot Konsultasi Terbatas Setiap Pekan
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-8 font-display text-4xl font-light leading-tight md:text-6xl">
            Cerita kecantikan Anda berikutnya,{" "}
            <em className="font-medium text-mint">dimulai dari satu langkah kecil.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-porcelain/80 md:text-base">
            Reservasi konsultasi privat bersama Dr. Fatri Idana — dan rasakan perawatan
            yang dirancang hanya untuk Anda.
          </p>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kontak"
              className="group relative inline-flex overflow-hidden rounded-full bg-mint px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-forest shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative">Pesan Jadwal Sekarang</span>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-porcelain/40 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-porcelain transition-all duration-500 hover:border-mint hover:text-mint"
            >
              Chat WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
