"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/landing/reveal";
import {
  formatPrice,
  PRODUCTS,
  PRODUCT_CATEGORIES,
} from "@/lib/degerasia-data";

type Filter = "Semua" | (typeof PRODUCT_CATEGORIES)[number];

const FILTERS: Filter[] = ["Semua", ...PRODUCT_CATEGORIES];

/** Grid produk DEGERA dengan filter kategori (client-side). */
export function ProductGrid() {
  const [active, setActive] = useState<Filter>("Semua");
  const filtered =
    active === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const countOf = (f: Filter) =>
    f === "Semua" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f).length;

  return (
    <section aria-label="Koleksi produk DEGERA" className="bg-porcelain py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Tab filter kategori */}
        <div
          role="tablist"
          aria-label="Filter kategori produk"
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

        {/* Grid kartu produk */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 4) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-fern bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-sage">
                  <Image
                    src={product.image}
                    alt={`${product.name} — ${product.category} dari brand DEGERA`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                  />
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-porcelain backdrop-blur">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-moss">
                    {product.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-snug text-forest">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-base font-medium text-leaf-deep">
                    {formatPrice(product.price)}
                  </p>

                  <Link
                    href={`/produk/${product.slug}`}
                    aria-label={`Lihat detail produk ${product.name}`}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-all duration-300 hover:gap-3.5 hover:text-forest"
                  >
                    Detail Produk
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
