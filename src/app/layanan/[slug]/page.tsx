import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Clock,
  MessageCircle,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES, waLink } from "@/lib/degerasia-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Layanan Tidak Ditemukan | Klinik Degerasia" };
  return {
    title: `${service.name} | Klinik Degerasia`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = [
    ...SERVICES.filter(
      (s) => s.slug !== service.slug && s.category === service.category
    ),
    ...SERVICES.filter(
      (s) => s.slug !== service.slug && s.category !== service.category
    ),
  ].slice(0, 3);

  const waMessage = `Halo Klinik Degerasia, saya ingin reservasi ${service.name}. Terima kasih.`;

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow={service.signature ? "Signature dr. Fatri" : "Perawatan Estetika Premium"}
          title={service.name}
          description={service.tagline}
          crumbs={[
            { label: "Beranda", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: service.name },
          ]}
        />

        {/* a. Detail utama */}
        <section aria-label={`Detail ${service.name}`} className="relative overflow-hidden bg-porcelain py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-8%] top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.28),transparent_60%)] blur-2xl"
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Gambar arch-frame */}
              <Reveal>
                <div className="relative mx-auto w-full max-w-md">
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-[999px_999px_32px_32px] border border-fern"
                  />
                  <div className="arch-frame relative aspect-[4/5] overflow-hidden border border-fern bg-sage">
                    <Image
                      src={service.image}
                      alt={`${service.name} — treatment di Klinik Degerasia`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  {service.signature && (
                    <span className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-forest px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-mint shadow-[0_18px_35px_-15px_rgba(16,39,26,0.7)]">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      Signature dr. Fatri
                    </span>
                  )}
                </div>
              </Reveal>

              {/* Informasi treatment */}
              <Reveal delay={0.15}>
                <div>
                  <span className="inline-flex items-center rounded-full border border-leaf/30 bg-sage px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-leaf-deep">
                    {service.category}
                  </span>
                  <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
                    {service.name}
                  </h2>
                  <p className="mt-3 font-display text-xl font-light italic leading-relaxed text-moss">
                    {service.tagline}
                  </p>
                  <p className="mt-5 text-base font-light leading-relaxed text-moss">
                    {service.desc}
                  </p>

                  {/* Meta cards */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[
                      { icon: Clock, label: "Durasi", value: service.duration },
                      { icon: Sparkles, label: "Downtime", value: service.downtime },
                      { icon: Wallet, label: "Mulai dari", value: service.priceFrom },
                    ].map((meta) => (
                      <div
                        key={meta.label}
                        className="rounded-2xl border border-fern bg-sage p-4 text-center transition-colors duration-300 hover:border-leaf/40"
                      >
                        <meta.icon className="mx-auto h-5 w-5 text-leaf-deep" aria-hidden />
                        <p className="mt-2.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-moss">
                          {meta.label}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-snug text-forest">
                          {meta.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={waLink(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain shadow-[0_18px_40px_-14px_rgba(16,39,26,0.65)] transition-all duration-500 hover:scale-[1.03] hover:bg-leaf-deep"
                      aria-label={`Reservasi ${service.name} via WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      Reservasi Treatment Ini
                    </a>
                    <Link
                      href="/kontak"
                      className="group inline-flex items-center justify-center gap-3 rounded-full border border-fern bg-card px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-forest transition-all duration-500 hover:border-leaf/50 hover:text-leaf-deep"
                    >
                      Konsultasi Dulu
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* b. Manfaat & Keunggulan */}
        <section aria-label="Manfaat dan keunggulan" className="bg-porcelain pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <div className="rounded-3xl border border-fern bg-card p-8 md:p-12">
                <div className="text-center">
                  <Eyebrow>Manfaat &amp; Keunggulan</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-light leading-tight text-forest md:text-4xl">
                    Apa yang Anda <em className="font-medium text-leaf-gradient">Dapatkan</em>
                  </h2>
                </div>
                <ul className="mt-10 grid gap-x-8 gap-y-5 md:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3.5">
                      <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-sage p-1.5 text-leaf-deep">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-sm font-light leading-relaxed text-moss md:text-[15px]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* c. Proses Treatment */}
        <section aria-label="Proses treatment" className="border-y border-fern bg-sage py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Proses Treatment</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight text-forest md:text-4xl">
                  Perjalanan Anda di <em className="font-medium text-leaf-deep">DEGERASIA</em>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-moss md:text-base">
                  Empat tahap tenang dan terukur — setiap langkah diawasi langsung oleh dr. Fatri.
                </p>
              </div>
            </Reveal>

            <ol className="relative mx-auto mt-14 max-w-2xl">
              {/* Garis vertikal dekoratif */}
              <span
                aria-hidden
                className="absolute bottom-8 left-[27px] top-3 w-px bg-gradient-to-b from-leaf/60 via-fern to-transparent"
              />
              {service.steps.map((step, i) => (
                <li key={step.title} className="relative flex items-start gap-6 pb-10 last:pb-0">
                  <Reveal delay={i * 0.08} className="shrink-0">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-leaf/30 bg-forest font-display text-lg font-medium text-mint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Reveal>
                  <Reveal delay={i * 0.08 + 0.1} y={24} className="flex-1 pt-1.5">
                    <div className="rounded-2xl border border-fern bg-porcelain p-6 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_24px_45px_-22px_rgba(30,122,52,0.4)]">
                      <h3 className="font-display text-xl font-medium leading-snug text-forest md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-moss">
                        {step.detail}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* d. FAQ */}
        <section aria-label="Pertanyaan umum" className="bg-porcelain py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Pertanyaan Umum</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight text-forest md:text-4xl">
                  Sebelum Anda <em className="font-medium text-leaf-gradient">Bertanya</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Accordion type="single" collapsible className="mt-10 rounded-3xl border border-fern bg-card px-6 py-2 md:px-8">
                {service.faq.map((item, i) => (
                  <AccordionItem key={item.q} value={`faq-${i}`} className="border-fern">
                    <AccordionTrigger className="font-display text-lg font-medium text-forest hover:no-underline hover:text-leaf-deep">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-light leading-relaxed text-moss">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* e. Treatment Terkait */}
        <section aria-label="Treatment terkait" className="border-t border-fern bg-sage py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Treatment Terkait</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight text-forest md:text-4xl">
                  Lanjutkan Ritual <em className="font-medium text-leaf-deep">Kecantikan Anda</em>
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.1} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-fern bg-card transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.name} — ${item.tagline}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent opacity-60"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-leaf-deep">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium leading-snug text-forest">
                        {item.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-moss">
                        {item.tagline}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-fern pt-4">
                        <span className="text-xs font-light text-moss">
                          Mulai{" "}
                          <span className="text-sm font-medium text-leaf-deep">{item.priceFrom}</span>
                        </span>
                        <Link
                          href={`/layanan/${item.slug}`}
                          aria-label={`Lihat detail ${item.name}`}
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-leaf-deep transition-all duration-300 hover:gap-3 hover:text-forest"
                        >
                          Detail
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
