import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import { ARTICLES, formatDate, getArticle } from "@/lib/degerasia-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artikel tidak ditemukan | Klinik Degerasia" };
  return {
    title: `${article.title} | Klinik Degerasia`,
    description: article.excerpt,
  };
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Artikel terkait: prioritaskan kategori yang sama, maksimal 3.
  const related = [
    ...ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category),
    ...ARTICLES.filter((a) => a.slug !== article.slug && a.category !== article.category),
  ].slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow={article.category}
          title="Degerasia"
          italic="Journal"
          crumbs={[
            { label: "Beranda", href: "/" },
            { label: "Artikel", href: "/artikel" },
            { label: article.title },
          ]}
        />

        <article className="bg-porcelain py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            {/* Meta */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-light uppercase tracking-[0.2em] text-moss">
                <span className="rounded-full bg-sage px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.24em] text-leaf-deep">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-leaf" aria-hidden />
                  {formatDate(article.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-leaf" aria-hidden />
                  {article.readTime} baca
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-light leading-[1.12] text-forest md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 border-l-2 border-leaf/40 pl-5 font-display text-xl font-light italic leading-relaxed text-moss md:text-2xl">
                {article.excerpt}
              </p>
            </Reveal>

            {/* Cover */}
            <Reveal delay={0.12}>
              <figure className="mt-12 overflow-hidden rounded-3xl border border-fern bg-sage shadow-[0_40px_80px_-40px_rgba(15,36,21,0.4)]">
                <Image
                  src={article.cover}
                  alt={`Ilustrasi artikel: ${article.title}`}
                  width={1600}
                  height={800}
                  priority
                  className="aspect-[2/1] w-full object-cover"
                  sizes="(max-width: 768px) 92vw, 768px"
                />
              </figure>
            </Reveal>

            {/* Isi artikel */}
            <div className="mt-14 space-y-12">
              {article.sections.map((section, i) => (
                <Reveal key={section.heading} delay={0.05}>
                  <section aria-label={section.heading}>
                    <h2 className="flex items-baseline gap-4 font-display text-2xl font-medium text-forest md:text-3xl">
                      <span
                        aria-hidden
                        className="font-display text-base font-light text-leaf/60"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4 pl-0 text-base font-light leading-relaxed text-moss md:pl-12">
                      {section.body.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            {/* Kotak penulis */}
            <Reveal delay={0.1}>
              <aside
                aria-label="Tentang penulis"
                className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-fern bg-sage p-7 sm:flex-row sm:items-center md:p-9"
              >
                <span
                  aria-hidden
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest font-display text-xl font-medium tracking-wider text-mint"
                >
                  FI
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-leaf-deep">
                    Ditulis oleh
                  </p>
                  <p className="mt-1.5 font-display text-2xl font-medium text-forest">
                    Dr. Fatri Idana, M.Biomed., AAM
                  </p>
                  <p className="mt-1 text-[13px] font-light leading-relaxed text-moss">
                    Senior Dokter Kecantikan · Founder Klinik Degerasia &amp; Brand DEGERA
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>

          {/* Artikel terkait */}
          <div className="mx-auto mt-24 max-w-7xl px-5 md:px-8">
            <Reveal>
              <Eyebrow>Lanjutkan Membaca</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-light text-forest md:text-4xl">
                Artikel <em className="font-medium text-leaf-gradient">Terkait</em>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.1} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-fern bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/40 hover:shadow-[0_30px_60px_-30px_rgba(15,36,21,0.35)]">
                    <Link
                      href={`/artikel/${a.slug}`}
                      className="relative block aspect-[3/2] overflow-hidden bg-sage"
                      aria-label={`Baca artikel: ${a.title}`}
                    >
                      <Image
                        src={a.cover}
                        alt={`Ilustrasi artikel: ${a.title}`}
                        fill
                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                        sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 30vw"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-mint backdrop-blur">
                        {a.category}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-medium leading-snug text-forest">
                        <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
                      </h3>
                      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-light uppercase tracking-[0.18em] text-moss/80">
                          <CalendarDays className="h-3.5 w-3.5 text-leaf" aria-hidden />
                          {formatDate(a.date)}
                        </span>
                        <Link
                          href={`/artikel/${a.slug}`}
                          aria-label={`Baca ${a.title}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-leaf/30 text-leaf-deep transition-all duration-300 hover:bg-forest hover:text-mint"
                        >
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </article>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
