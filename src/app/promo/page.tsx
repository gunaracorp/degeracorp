import type { Metadata } from "next";
import { Clock, Gem, Heart, MessageCircle, Package, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Reveal } from "@/components/landing/reveal";
import { PROMOS, waLink } from "@/lib/degerasia-data";

export const metadata: Metadata = {
  title: "Promo & Program | Klinik Degerasia",
  description:
    "Penawaran spesial Klinik Degerasia: konsultasi gratis untuk pasien baru, Paket Glow 3+1, bundle homecare DEGERA, dan program referral — Sumbawa, NTB.",
};

/** Pemetaan ikon string dari data → komponen Lucide. */
const ICONS = {
  sparkles: Sparkles,
  gem: Gem,
  package: Package,
  heart: Heart,
} as const;

export default function PromoPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Penawaran Spesial"
          title="Promo &"
          italic="Program"
          description="Cara paling lembut untuk memulai — penawaran dan program berkelanjutan yang kami rancang agar perawatan terbaik lebih mudah dijangkau."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Promo" }]}
        />

        <section aria-label="Daftar promo dan program" className="bg-porcelain py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {PROMOS.map((p, i) => {
                const Icon = ICONS[p.icon as keyof typeof ICONS] ?? Sparkles;
                return (
                  <Reveal key={p.slug} delay={(i % 2) * 0.1} className="h-full">
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-fern bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(15,36,21,0.4)] md:p-10">
                      {/* Dekorasi sudut */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sage transition-transform duration-700 group-hover:scale-150"
                      />

                      <div className="relative">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                            <Icon className="h-6 w-6" aria-hidden />
                          </span>
                          <span className="rounded-full border border-leaf/25 bg-sage px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-leaf-deep">
                            Promo {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.3em] text-mint">
                          {p.subtitle}
                        </p>
                        <h2 className="mt-2.5 font-display text-2xl font-medium leading-snug text-forest md:text-3xl">
                          {p.title}
                        </h2>
                        <p className="mt-4 text-sm font-light leading-relaxed text-moss md:text-[15px]">
                          {p.description}
                        </p>

                        <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.2em] text-moss/80">
                          <Clock className="h-3.5 w-3.5 text-leaf" aria-hidden />
                          {p.valid}
                        </p>

                        <div className="mt-8">
                          <a
                            href={waLink(
                              `Halo Klinik Degerasia, saya tertarik dengan promo ${p.title}. Terima kasih.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_18px_40px_-15px_rgba(15,36,21,0.6)]"
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden />
                            Klaim via WhatsApp
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Banner strip */}
            <Reveal delay={0.1}>
              <aside
                aria-label="Catatan konsultasi gratis"
                className="relative mt-14 overflow-hidden rounded-3xl bg-forest px-8 py-12 text-center text-porcelain md:px-16 md:py-14"
              >
                <div aria-hidden className="grain absolute inset-0" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-leaf/15 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-mint/10 blur-3xl"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-mint">
                    Catatan Kami
                  </p>
                  <p className="mx-auto mt-5 max-w-2xl font-display text-2xl font-light leading-relaxed md:text-[1.75rem]">
                    Konsultasi pertama selalu{" "}
                    <em className="text-mint">gratis</em> — karena kami percaya
                    keputusan terbaik lahir dari pemahaman.
                  </p>
                </div>
              </aside>
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
