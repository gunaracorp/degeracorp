import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Reveal } from "@/components/landing/reveal";
import { FAQS, SITE, waLink } from "@/lib/degerasia-data";

export const metadata: Metadata = {
  title: "Pertanyaan Umum | Klinik Degerasia",
  description:
    "Jawaban atas pertanyaan yang paling sering diajukan seputar reservasi, konsultasi, treatment, produk DEGERA, dan kunjungan ke Klinik Degerasia di Sumbawa.",
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Pusat Bantuan"
          title="Pertanyaan"
          italic="Umum"
          description="Sepuluh hal yang paling sering ditanyakan pasien kami. Jika jawaban Anda belum ada di sini, tim Degerasia siap menjawab langsung."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "FAQ" }]}
        />

        <section aria-label="Daftar pertanyaan umum" className="bg-porcelain py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-fern bg-card px-6 shadow-[0_30px_60px_-35px_rgba(15,36,21,0.35)] md:px-10">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((f, i) => (
                    <AccordionItem key={f.q} value={`faq-${i}`} className="border-fern/70">
                      <AccordionTrigger className="py-6 text-left text-[15px] font-medium leading-snug text-forest hover:no-underline md:text-base [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-leaf-deep">
                        <span className="flex items-baseline gap-3.5 pr-2">
                          <span
                            aria-hidden
                            className="font-display text-sm font-light text-leaf/70"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-7 pl-8 text-sm font-light leading-relaxed text-moss md:pl-9 md:text-[15px]">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>

            {/* Kartu bantuan lanjutan */}
            <Reveal delay={0.12}>
              <aside
                aria-label="Masih ada pertanyaan"
                className="relative mt-12 overflow-hidden rounded-3xl bg-forest px-8 py-12 text-center text-porcelain md:px-14"
              >
                <div aria-hidden className="grain absolute inset-0" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-leaf/15 blur-3xl"
                />
                <div className="relative">
                  <h2 className="font-display text-3xl font-light leading-snug md:text-4xl">
                    Masih ada <em className="text-mint">pertanyaan?</em>
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-porcelain/65 md:text-base">
                    Jangan ragu — ceritakan kebutuhan Anda. dr. Fatri atau tim klinik kami akan
                    membalas dengan hangat dan tanpa menghakimi.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-leaf-deep to-leaf px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain shadow-[0_18px_40px_-12px_rgba(30,122,52,0.6)] transition-transform duration-500 hover:scale-[1.03]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      Chat WhatsApp
                    </a>
                    <a
                      href={`tel:${SITE.whatsappUrl.replace("https://wa.me/", "+")}`}
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-porcelain/25 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-porcelain/85 transition-all duration-500 hover:border-mint hover:text-mint"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {SITE.phoneDisplay}
                    </a>
                  </div>
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
