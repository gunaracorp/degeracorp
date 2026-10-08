import type { Metadata } from "next";
import { Clock, Facebook, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import { ReservationForm } from "./reservation-form";
import { SITE, waLink } from "@/lib/degerasia-data";

export const metadata: Metadata = {
  title: "Reservasi & Kontak | Klinik Degerasia",
  description:
    "Reservasi konsultasi dan treatment di Klinik Degerasia Sumbawa — formulir online, WhatsApp, alamat Jl. Sultan Kaharuddin Dusun Sering, dan jam operasional WITA.",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Klinik+Degerasia+Jl.+Sultan+Kaharuddin+Dusun+Sering+Desa+Kerato+Unter+Iwes+Kabupaten+Sumbawa+NTB";

export default function KontakPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Kami Menanti Kehadiran Anda"
          title="Reservasi &"
          italic="Kontak"
          description="Pilih cara yang paling nyaman bagi Anda — formulir reservasi, WhatsApp, atau kunjungan langsung. Semuanya berawal dari percakapan yang hangat."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
        />

        {/* ── Formulir + Info ───────────────────────── */}
        <section
          aria-label="Reservasi dan informasi kontak"
          className="relative overflow-hidden bg-porcelain py-24 md:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(123,201,111,0.25),transparent_60%)] blur-2xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            {/* KIRI — Formulir reservasi */}
            <Reveal>
              <ReservationForm />
            </Reveal>

            {/* KANAN — Kartu info */}
            <div className="flex flex-col gap-5">
              <Reveal delay={0.08}>
                <Eyebrow>Hubungi Kami Langsung</Eyebrow>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-moss">
                  Lebih suka bicara langsung? Semua jalur di bawah ini dijawab oleh tim
                  Degerasia — bukan bot, bukan call center.
                </p>
              </Reveal>

              {/* Alamat */}
              <Reveal delay={0.14}>
                <article className="group rounded-3xl border border-fern bg-card p-6 transition-all duration-500 hover:border-leaf/40 hover:shadow-[0_20px_40px_-20px_rgba(30,122,52,0.4)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                        Alamat Klinik
                      </h3>
                      <p className="mt-2 text-[13px] font-light leading-relaxed text-moss">
                        {SITE.address}
                      </p>
                      <p className="mt-1.5 text-[13px] font-light italic text-leaf-deep">
                        {SITE.landmark}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* WhatsApp */}
              <Reveal delay={0.2}>
                <article className="group rounded-3xl border border-fern bg-card p-6 transition-all duration-500 hover:border-leaf/40 hover:shadow-[0_20px_40px_-20px_rgba(30,122,52,0.4)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                      <MessageCircle className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                        WhatsApp
                      </h3>
                      <p className="mt-2 text-[15px] font-medium tracking-wide text-forest">
                        {SITE.phoneDisplay}
                      </p>
                      <p className="mt-1 text-[13px] font-light text-moss">
                        Reservasi cepat, balasan di jam operasional.
                      </p>
                      <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-porcelain transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_15px_30px_-12px_rgba(15,36,21,0.6)]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                        Chat Sekarang
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Facebook */}
              <Reveal delay={0.26}>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi Facebook ${SITE.name}`}
                  className="group flex items-start gap-4 rounded-3xl border border-fern bg-card p-6 transition-all duration-500 hover:border-leaf/40 hover:shadow-[0_20px_40px_-20px_rgba(30,122,52,0.4)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                    <Facebook className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                      Facebook
                    </h3>
                    <p className="mt-2 text-[13px] font-light leading-relaxed text-moss">
                      Klinik Degerasia
                    </p>
                    <p className="mt-1 text-[13px] font-light text-leaf-deep underline-offset-4 group-hover:underline">
                      klinik.gerasia — kabar, promo &amp; edukasi terbaru
                    </p>
                  </div>
                </a>
              </Reveal>

              {/* Jam operasional */}
              <Reveal delay={0.32}>
                <article className="group rounded-3xl border border-fern bg-card p-6 transition-all duration-500 hover:border-leaf/40 hover:shadow-[0_20px_40px_-20px_rgba(30,122,52,0.4)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                        Jam Operasional
                      </h3>
                      <ul className="mt-2.5 space-y-1.5">
                        {SITE.hours.map((h) => (
                          <li
                            key={h.day}
                            className="flex items-baseline justify-between gap-4 text-[13px] font-light text-moss"
                          >
                            <span>{h.day}</span>
                            <span className="text-right font-medium text-forest">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Peta & Petunjuk Arah ──────────────────── */}
        <section aria-label="Lokasi dan petunjuk arah" className="bg-sage pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-fern bg-gradient-to-br from-sage via-porcelain to-sage px-8 py-14 text-center shadow-[0_40px_80px_-40px_rgba(15,36,21,0.35)] md:px-16 md:py-20">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-leaf/20"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-14 h-64 w-64 rounded-full border border-leaf/20"
                />

                <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-leaf/25 bg-forest text-mint shadow-[0_20px_40px_-15px_rgba(15,36,21,0.5)]">
                    <MapPin className="h-9 w-9" aria-hidden />
                  </span>
                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.4em] text-leaf-deep">
                    Temukan Kami
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-light leading-snug text-forest md:text-4xl">
                    Jl. Sultan Kaharuddin, Dusun Sering,{" "}
                    <em className="text-leaf-gradient">Sumbawa</em>
                  </h2>
                  <p className="mt-4 text-sm font-light leading-relaxed text-moss md:text-base">
                    Desa Kerato, Kec. Unter Iwes, Kab. Sumbawa, NTB 84316.
                    <br />
                    <span className="font-medium text-forest">{SITE.landmark}</span> — mudah
                    ditemukan, mudah dijangkau.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_18px_40px_-15px_rgba(15,36,21,0.6)]"
                  >
                    <Navigation className="h-4 w-4" aria-hidden />
                    Buka Google Maps
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Penutup elegan */}
            <Reveal delay={0.1}>
              <div className="mx-auto mt-20 max-w-2xl text-center">
                <div aria-hidden className="mx-auto h-px w-24 brand-hairline" />
                <p className="mt-8 font-display text-2xl font-light italic leading-relaxed text-forest md:text-3xl">
                  “Setiap kunjungan adalah ritual tenang untuk menghargai diri sendiri — kami
                  telah menyiapkan semuanya, Anda cukup datang.”
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-leaf-deep">
                  Keluarga Besar Klinik Degerasia
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
