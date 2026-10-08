import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Reveal } from "@/components/landing/reveal";
import { ProductGrid } from "./product-grid";

export const metadata: Metadata = {
  title: "Koleksi Produk | Klinik Degerasia",
  description:
    "Koleksi skincare DEGERA karya dr. Fatri Idana — 21 produk resmi terdaftar BPOM (2022–2025), dirumuskan dengan standar farmasi estetika untuk memperpanjang hasil treatment di rumah.",
};

export default function ProdukPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Skincare Resmi BPOM"
          title="Koleksi Produk"
          italic="DEGERA"
          description="Koleksi skincare resmi karya dr. Fatri Idana — 21 produk terdaftar BPOM yang membawa standar farmasi estetika ke ritual harian rumah Anda."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Produk" }]}
        />

        {/* Grid produk + filter */}
        <ProductGrid />

        {/* Strip edukasi BPOM */}
        <section aria-label="Edukasi BPOM" className="border-y border-fern bg-sage py-10 md:py-12">
          <Reveal className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-7 sm:text-left">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-mint">
                <ShieldCheck className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg font-light leading-snug text-forest md:text-xl">
                  Setiap nomor registrasi BPOM dapat diverifikasi melalui aplikasi resmi{" "}
                  <em className="font-medium text-leaf-deep">cek BPOM Kemenkes</em>
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-moss">
                  Keamanan Anda adalah prioritas kami — semua produk DEGERA terdaftar resmi
                  2022–2025 dengan komposisi yang tercantum transparan.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <CtaBand
          eyebrow="Ritual Kecantikan Harian"
          title="Bawa Pulang Keajaiban"
          italic="DEGERA"
          description="Tidak yakin produk mana yang tepat untuk kulit Anda? Konsultasikan langsung — kami bantu susun rutinitas homecare yang selaras dengan treatment klinik Anda."
        />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
