import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Reveal } from "@/components/landing/reveal";
import { ARTICLES, formatDate } from "@/lib/degerasia-data";

export const metadata: Metadata = {
  title: "Artikel & Journal | Klinik Degerasia",
  description:
    "Degerasia Journal — edukasi skincare, anti-aging, dan perawatan kulit klinis yang ditulis langsung oleh dr. Fatri Idana, M.Biomed., AAM.",
};

/** Kartu artikel editorial (server component). */
function ArticleCard({
  article,
  delay = 0,
}: {
  article: (typeof ARTICLES)[number];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-fern bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_30px_60px_-30px_rgba(15,36,21,0.35)]">
        <Link
          href={`/artikel/${article.slug}`}
          className="relative block aspect-[3/2] overflow-hidden bg-sage"
          aria-label={`Baca artikel: ${article.title}`}
        >
          <Image
            src={article.cover}
            alt={`Ilustrasi artikel: ${article.title}`}
            fill
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 30vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-mint backdrop-blur">
            {article.category}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h2 className="font-display text-xl font-medium leading-snug text-forest transition-colors duration-300 group-hover:text-leaf-deep md:text-[1.35rem]">
            <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
          </h2>
          <p className="mt-3 line-clamp-3 text-sm font-light leading-relaxed text-moss">
            {article.excerpt}
          </p>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-4 text-[11px] font-light uppercase tracking-[0.18em] text-moss/80">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-leaf" aria-hidden />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-leaf" aria-hidden />
                {article.readTime}
              </span>
            </div>
            <Link
              href={`/artikel/${article.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf-deep transition-colors duration-300 hover:text-forest"
            >
              Baca Artikel
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ArtikelPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Berbagi Ilmu"
          title="Degerasia"
          italic="Journal"
          description="Catatan klinis, edukasi skincare, dan panduan anti-aging — ditulis langsung oleh dr. Fatri Idana agar Anda memutuskan dengan pemahaman, bukan iklan."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Artikel" }]}
        />

        <section aria-label="Daftar artikel" className="bg-porcelain py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sorted.map((a, i) => (
                <ArticleCard key={a.slug} article={a} delay={(i % 3) * 0.1} />
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
