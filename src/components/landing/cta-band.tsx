import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/degerasia-data";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  italic?: string;
  description?: string;
}

/** Band ajakan konsultasi yang dipakai di seluruh sub-halaman. */
export function CtaBand({
  eyebrow = "Mulai Perjalanan Kecantikan Anda",
  title = "Konsultasi Personal Bersama",
  italic = "dr. Fatri Idana",
  description = "Setiap kulit memiliki cerita yang unik. Ceritakan milik Anda — kami siapkan peta perawatan yang dirancang khusus, tanpa drama, tanpa tekanan.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-porcelain md:py-28">
      <div aria-hidden className="grain absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-leaf/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-mint">{eyebrow}</p>
        <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
          {title} <em className="text-mint">{italic}</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-porcelain/65">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-leaf-deep to-leaf px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-porcelain shadow-[0_18px_40px_-12px_rgba(30,122,52,0.6)] transition-transform duration-500 hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Reservasi WhatsApp
          </a>
          <Link
            href="/kontak"
            className="group inline-flex items-center gap-3 rounded-full border border-porcelain/25 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-porcelain/85 transition-all duration-500 hover:border-mint hover:text-mint"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Form Reservasi
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
