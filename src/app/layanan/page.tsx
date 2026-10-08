import type { Metadata } from "next";
import { Gem, Layers, ScanFace, Stethoscope } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/degerasia-data";
import { ServiceGrid } from "./service-grid";

export const metadata: Metadata = {
  title: "Layanan Klinik | Klinik Degerasia",
  description:
    "Rangkaian perawatan estetika premium Klinik Degerasia Sumbawa — treatment signature dr. Fatri, perawatan wajah & kulit, hingga anti-aging & kontur, ditangani langsung oleh dokter.",
};

/** Deskripsi editorial per kategori (hanya copy tampilan, bukan data bisnis). */
const CATEGORY_META: Record<
  (typeof SERVICE_CATEGORIES)[number],
  { icon: typeof Gem; desc: string }
> = {
  "Signature dr. Fatri": {
    icon: Gem,
    desc: "Empat protokol eksklusif yang dirancang dan dikalibrasi langsung oleh dr. Fatri Idana — identitas estetika DEGERASIA yang tidak Anda temukan di tempat lain.",
  },
  "Perawatan Wajah & Kulit": {
    icon: ScanFace,
    desc: "Facial medis, chemical peeling, skin booster, hingga program jerawat dan pencerah — merawat kesehatan kulit dari lapisan terdalam.",
  },
  "Anti-Aging & Kontur": {
    icon: Layers,
    desc: "Botox presisi, dermal filler, thread lift, dan HIFU — membentuk kontur muda yang natural tanpa mengorbankan ekspresi.",
  },
};

export default function LayananPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Perawatan Estetika Premium"
          title="Layanan"
          italic="Degerasia"
          description="Tiga belas treatment pilihan dalam tiga kurasi kategori — setiap sesi dirancang personal, dimulai dari konsultasi mendalam bersama dr. Fatri Idana."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]}
        />

        {/* Sambutan + 3 kategori */}
        <section aria-label="Kategori layanan" className="relative overflow-hidden bg-porcelain py-20 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.28),transparent_60%)] blur-2xl"
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <Eyebrow>Kurasi Tiga Kategori</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
                  Sains Medis, Dibingkai{" "}
                  <em className="font-medium text-leaf-gradient">Seni Kecantikan</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 text-base font-light leading-relaxed text-moss">
                  Selamat datang di menu perawatan DEGERASIA. Jelajahi setiap kategori,
                  temukan treatment yang paling dekat dengan cerita kulit Anda — atau biarkan
                  kami memetakannya bersama Anda saat konsultasi.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICE_CATEGORIES.map((cat, i) => {
                const meta = CATEGORY_META[cat];
                const count = SERVICES.filter((s) => s.category === cat).length;
                return (
                  <Reveal key={cat} delay={i * 0.12} className="h-full">
                    <article className="group relative h-full overflow-hidden rounded-3xl border border-fern bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_30px_60px_-25px_rgba(30,122,52,0.45)]">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-2 -top-5 font-display text-7xl font-light text-fern/70 transition-colors duration-500 group-hover:text-mint"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="relative">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-leaf/25 bg-sage text-leaf-deep transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-mint">
                          <meta.icon className="h-6 w-6" aria-hidden />
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-forest">
                          {cat}
                        </h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-moss">{meta.desc}</p>
                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-leaf-deep">
                          {count} Treatment
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grid layanan + filter */}
        <ServiceGrid />

        {/* Strip kepercayaan */}
        <section aria-label="Kepercayaan klinik" className="border-y border-fern bg-sage py-10 md:py-12">
          <Reveal className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-7 sm:text-left">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-mint">
                <Stethoscope className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl font-light leading-snug text-forest md:text-2xl">
                  Ditangani langsung oleh{" "}
                  <em className="font-medium text-leaf-deep">dr. Fatri Idana, M.Biomed., AAM</em>
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-moss">
                  Senior Dokter Kecantikan · Founder Klinik Degerasia &amp; Brand DEGERA —
                  tanpa perantara, tanpa kompromi pada standar medis.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
