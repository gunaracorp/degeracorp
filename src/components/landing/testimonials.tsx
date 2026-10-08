"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "Pertama kali di hidup saya merasa treatment wajah ini terasa seperti didengar, bukan sekadar dijalani. Dr. Fatri menjelaskan setiap detail dengan sabar — dan hasilnya? Kulit saya bercahaya tanpa terlihat 'dikerjakan'.",
    name: "Andini Prameswari",
    role: "Entrepreneur, Jakarta",
  },
  {
    quote:
      "Sudah 3 tahun rutin ke Degerasia untuk anti-aging. Yang membuat saya bertahan bukan cuma hasilnya yang konsisten, tapi rasa amannya. Tidak ada upselling, hanya rekomendasi yang benar-benar dibutuhkan.",
    name: "Maya Kusuma",
    role: "Ibu dua anak, BSD",
  },
  {
    quote:
      "DEGERA sunscreen mengubah rutinitas skincare saya. Ringan, tidak bikin jerkat, dan kulit terlihat sehat instan. Sekarang seluruh keluarga saya memakainya.",
    name: "Larissa Wijaya",
    role: "Content Creator",
  },
  {
    quote:
      "Sebagai pria, awalnya ragu ke klinik kecantikan. Tapi di Degerasia saya justru merasa welcome. Program 90 hari Glow benar-benar menata ulang kulit dan kebiasaan saya.",
    name: "Reza Mahendra",
    role: "Corporate Lawyer",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => (a + dir + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go, paused]);

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimoni"
      aria-label="Testimoni pasien"
      className="relative overflow-hidden bg-sage py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden className="pointer-events-none absolute left-[-8%] bottom-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.4),transparent_60%)] blur-2xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <Eyebrow>Kata Mereka</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
            Cerita yang Membuat Kami{" "}
            <em className="font-medium text-leaf-gradient">Bangga</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-14 rounded-[32px] border border-fern bg-porcelain/80 px-6 py-12 shadow-[0_40px_80px_-40px_rgba(15,36,21,0.4)] backdrop-blur md:px-16 md:py-16">
            <Quote aria-hidden className="mx-auto h-10 w-10 rotate-180 text-mint" />
            <div aria-live="polite" className="mt-6 min-h-[11rem] md:min-h-[9rem]">
              <blockquote key={active} className="font-display text-xl font-light italic leading-relaxed text-forest md:text-2xl">
                “{current.quote}”
              </blockquote>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-1" aria-label="Rating lima bintang">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-leaf text-leaf" aria-hidden />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold tracking-wide text-forest">{current.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.25em] text-moss">{current.role}</p>
              </div>
            </div>

            {/* Kontrol */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Testimoni sebelumnya"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-leaf/30 text-forest transition-all duration-300 hover:border-leaf hover:bg-forest hover:text-mint"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <div className="flex items-center gap-2.5" role="tablist" aria-label="Pilih testimoni">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimoni dari ${t.name}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-500",
                      i === active ? "w-8 bg-leaf" : "w-2 bg-fern hover:bg-mint"
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Testimoni berikutnya"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-leaf/30 text-forest transition-all duration-300 hover:border-leaf hover:bg-forest hover:text-mint"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
