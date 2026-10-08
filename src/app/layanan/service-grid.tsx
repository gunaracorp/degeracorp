"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/landing/reveal";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/degerasia-data";

type Filter = "Semua" | (typeof SERVICE_CATEGORIES)[number];

const FILTERS: Filter[] = ["Semua", ...SERVICE_CATEGORIES];

/** Grid layanan dengan filter kategori (client-side). */
export function ServiceGrid() {
  const [active, setActive] = useState<Filter>("Semua");
  const filtered =
    active === "Semua" ? SERVICES : SERVICES.filter((s) => s.category === active);

  const countOf = (f: Filter) =>
    f === "Semua" ? SERVICES.length : SERVICES.filter((s) => s.category === f).length;

  return (
    <section aria-label="Daftar layanan" className="bg-porcelain py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Tab filter kategori */}
        <div
          role="tablist"
          aria-label="Filter kategori layanan"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 md:px-6 md:py-3 md:text-[11px]",
                active === f
                  ? "border-forest bg-forest text-porcelain shadow-[0_14px_30px_-14px_rgba(16,39,26,0.7)]"
                  : "border-fern bg-card text-moss hover:border-leaf/40 hover:text-forest"
              )}
            >
              {f}
              <span
                className={cn(
                  "text-[9px] font-medium",
                  active === f ? "text-mint" : "text-leaf-deep/70"
                )}
              >
                {countOf(f)}
              </span>
            </button>
          ))}
        </div>

        {/* Grid kartu layanan */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-fern bg-card transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} — ${service.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent opacity-60"
                  />
                  {service.signature && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-mint backdrop-blur">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      Signature dr. Fatri
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-leaf-deep">
                    {service.category}
                  </p>
                  <h3 className="mt-2.5 font-display text-2xl font-medium leading-snug text-forest">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-moss">
                    {service.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-fern pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-light text-moss">
                      <Clock className="h-3.5 w-3.5 text-leaf-deep" aria-hidden />
                      {service.duration}
                    </span>
                    <span className="text-xs font-light text-moss">
                      Mulai{" "}
                      <span className="text-sm font-medium text-leaf-deep">{service.priceFrom}</span>
                    </span>
                  </div>

                  <Link
                    href={`/layanan/${service.slug}`}
                    aria-label={`Lihat detail ${service.name}`}
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-all duration-300 hover:gap-3.5 hover:text-forest"
                  >
                    Lihat Detail
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
