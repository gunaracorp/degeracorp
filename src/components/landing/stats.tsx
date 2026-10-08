"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const STATS = [
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
  { value: 10000, suffix: "+", label: "Pasien Terlayani" },
  { value: 25, suffix: "+", label: "Sertifikasi & Pelatihan" },
  { value: 98, suffix: "%", label: "Tingkat Kepuasan" },
];

function formatNumber(v: number) {
  return new Intl.NumberFormat("id-ID").format(Math.round(v));
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  const shown = reduce && inView ? value : display;

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(shown)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Pencapaian dalam angka" className="relative overflow-hidden bg-espresso py-16 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 grain" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(185,138,74,0.25),transparent_65%)] blur-2xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,195,154,0.16),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 md:grid-cols-4 md:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-5xl font-light text-champagne md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <div aria-hidden className="mx-auto mt-4 h-px w-12 gold-hairline" />
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/70 md:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
