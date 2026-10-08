import type { Metadata } from "next";
import Image from "next/image";
import { Expand } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Reveal } from "@/components/landing/reveal";
import { GALLERY } from "@/lib/degerasia-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Galeri | Klinik Degerasia",
  description:
    "Menyusuri suasana Klinik Degerasia — ruang treatment premium, lobi botani, momen perawatan bersama dr. Fatri Idana, dan koleksi produk DEGERA di Sumbawa, NTB.",
};

/** Pola tinggi kartu untuk kesan masonry: index ini mengambil 2 baris. */
const TALL_INDEXES = new Set([0, 3, 6]);

export default function GaleriPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Suasana Klinik"
          title="Galeri"
          italic="Degerasia"
          description="Setiap sudut Klinik Degerasia dirancang sebagai ruang tenang — tempat sains, botani, dan kenyamanan bertemu."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Galeri" }]}
        />

        <section aria-label="Galeri foto klinik" className="bg-porcelain py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <ul className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:gap-5 md:auto-rows-[210px] lg:grid-cols-3">
              {GALLERY.map((g, i) => (
                <li
                  key={g.src}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-fern bg-sage",
                    TALL_INDEXES.has(i) && "row-span-2"
                  )}
                >
                  <Reveal delay={(i % 3) * 0.08} className="h-full w-full">
                    <Image
                      src={g.src}
                      alt={`${g.caption} — ${g.tag} Klinik Degerasia`}
                      fill
                      priority={i === 0}
                      className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 30vw"
                    />
                    {/* Overlay gradient muncul on-hover */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div
                      aria-hidden
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-porcelain/30 bg-forest/40 text-porcelain opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100"
                    >
                      <Expand className="h-4 w-4" aria-hidden />
                    </div>
                    {/* Caption + tag */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-6">
                      <span className="inline-block rounded-full border border-mint/40 bg-forest/50 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-mint backdrop-blur">
                        {g.tag}
                      </span>
                      <p className="mt-2.5 font-display text-lg font-light leading-snug text-porcelain md:text-xl">
                        {g.caption}
                      </p>
                    </div>
                    {/* Caption untuk screen reader */}
                    <span className="sr-only">
                      {g.caption} — {g.tag}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-14 max-w-xl text-center text-sm font-light leading-relaxed text-moss">
                Ingin melihat langsung suasana yang Anda lihat di atas?
                Reservasi kunjungan Anda — kami siapkan tur klinik singkat sebelum konsultasi.
              </p>
            </Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
