import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  crumbs: Crumb[];
}

/** Header band mewah untuk seluruh sub-halaman DEGERASIA. */
export function PageHeader({ eyebrow, title, italic, description, crumbs }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-forest pb-16 pt-32 text-porcelain md:pb-24 md:pt-44">
      {/* Dekorasi latar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-mint/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-20 h-64 w-64 rounded-full border border-mint/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
      />
      <div aria-hidden className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-light uppercase tracking-[0.22em] text-porcelain/50">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-mint/60" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-mint">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-mint">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-mint">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.08] md:text-6xl">
          {title}{" "}
          {italic && <em className="text-mint">{italic}</em>}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-porcelain/65 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
