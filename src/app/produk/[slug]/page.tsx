import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import { formatPrice, PRODUCTS, waLink } from "@/lib/degerasia-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Produk Tidak Ditemukan | Klinik Degerasia" };
  return {
    title: `${product.name} | Klinik Degerasia`,
    description: product.desc,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = [
    ...PRODUCTS.filter(
      (p) => p.slug !== product.slug && p.category === product.category
    ),
    ...PRODUCTS.filter(
      (p) => p.slug !== product.slug && p.category !== product.category
    ),
  ].slice(0, 3);

  const waMessage = `Halo Klinik Degerasia, saya ingin memesan ${product.name}. Terima kasih.`;

  const details: { label: string; value: string }[] = [
    { label: "Isi Kemasan", value: product.packaging },
    { label: "Bahan Utama", value: product.ingredients },
    { label: "Cara Pakai", value: product.usage },
    { label: "Tahun Terdaftar", value: product.registered },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow={`Koleksi DEGERA · ${product.category}`}
          title={product.name}
          crumbs={[
            { label: "Beranda", href: "/" },
            { label: "Produk", href: "/produk" },
            { label: product.name },
          ]}
        />

        {/* Detail produk */}
        <section aria-label={`Detail ${product.name}`} className="relative overflow-hidden bg-porcelain py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-8%] top-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.28),transparent_60%)] blur-2xl"
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Gambar produk */}
              <Reveal>
                <div className="rounded-3xl border border-fern bg-sage p-8 md:p-10">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={`${product.name} — ${product.category} DEGERA, terdaftar BPOM ${product.bpom}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 42vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Informasi produk */}
              <Reveal delay={0.15}>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full border border-leaf/30 bg-sage px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-leaf-deep">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-porcelain">
                        <Sparkles className="h-3 w-3 text-mint" aria-hidden />
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 font-display text-3xl font-medium text-leaf-deep">
                    {formatPrice(product.price)}
                  </p>

                  {/* Badge BPOM */}
                  <p className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-fern bg-sage px-5 py-2.5 text-leaf-deep">
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                      Terdaftar BPOM
                    </span>
                    <span aria-hidden className="h-3 w-px bg-leaf/40" />
                    <span className="font-display text-sm font-medium tracking-wide">
                      {product.bpom}
                    </span>
                  </p>

                  <p className="mt-6 text-base font-light leading-relaxed text-moss">
                    {product.desc}
                  </p>

                  {/* Detail produk */}
                  <dl className="mt-8 overflow-hidden rounded-3xl border border-fern bg-card px-6 py-2 md:px-7">
                    {details.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col gap-1.5 border-b border-fern py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                      >
                        <dt className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-moss sm:pt-1">
                          {row.label}
                        </dt>
                        <dd className="text-sm font-light leading-relaxed text-forest sm:max-w-[62%] sm:text-right">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* CTA */}
                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={waLink(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain shadow-[0_18px_40px_-14px_rgba(16,39,26,0.65)] transition-all duration-500 hover:scale-[1.03] hover:bg-leaf-deep"
                      aria-label={`Pesan ${product.name} via WhatsApp`}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      Pesan via WhatsApp
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

        {/* Produk Terkait */}
        <section aria-label="Produk terkait" className="border-t border-fern bg-sage py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <Eyebrow>Produk Terkait</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight text-forest md:text-4xl">
                  Lengkapi Ritual <em className="font-medium text-leaf-deep">Homecare Anda</em>
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.1} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-fern bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-sage">
                      <Image
                        src={item.image}
                        alt={`${item.name} — ${item.category} dari brand DEGERA`}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                      />
                      {item.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-porcelain backdrop-blur">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-moss">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium leading-snug text-forest">
                        {item.name}
                      </h3>
                      <div className="mt-3 flex flex-1 items-end justify-between gap-3 border-t border-fern pt-4">
                        <span className="text-base font-medium text-leaf-deep">
                          {formatPrice(item.price)}
                        </span>
                        <Link
                          href={`/produk/${item.slug}`}
                          aria-label={`Lihat detail produk ${item.name}`}
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
