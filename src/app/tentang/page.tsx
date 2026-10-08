import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";
import { PageHeader } from "@/components/landing/page-header";
import { CtaBand } from "@/components/landing/cta-band";
import { Eyebrow, Reveal } from "@/components/landing/reveal";
import { CLINIC_STATS, JOURNEY } from "@/lib/degerasia-data";

export const metadata: Metadata = {
  title: "Tentang Kami | Klinik Degerasia",
  description:
    "Mengenal dr. Fatri Idana, M.Biomed., AAM — Senior Dokter Kecantikan, Founder Klinik Degerasia & brand DEGERA — beserta visi, misi, dan perjalanan klinik kecantikan premium di Sumbawa, NTB.",
};

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "Dokter Kecantikan Senior",
    desc: "Praktik estetika wajah & kulit dengan pengalaman bertahun-tahun menangani beragam kondisi kulit tropis.",
  },
  {
    icon: GraduationCap,
    title: "M.Biomed — Magister Biomedis",
    desc: "Landasan sains biomedis yang mendalam, menjadi DNA setiap protokol treatment dan formula DEGERA.",
  },
  {
    icon: Award,
    title: "AAM — Ahli Anti-Aging Medicine",
    desc: "Sertifikasi kedokteran anti-aging: memahami penuaan dari akar biologi, bukan sekadar meredam gejala.",
  },
  {
    icon: Sparkles,
    title: "Founder & Formulator DEGERA (21 produk BPOM)",
    desc: "Memimpin riset & pengembangan 21 produk skincare yang seluruhnya terdaftar resmi di BPOM.",
  },
];

const VALUES = [
  {
    icon: FlaskConical,
    title: "Didukung Riset",
    desc: "Setiap treatment dan formula berpijak pada bukti ilmiah — dari magister biomedis hingga uji formulasi yang telaten. Kami tidak menjual janji; kami merancang hasil yang dapat dijelaskan.",
  },
  {
    icon: Leaf,
    title: "Botani & Alami",
    desc: "Kekayaan botani tropis Indonesia adalah gudang bahan terbaik kami. Presisi laboratorium bertemu kelembutan alam, menghadirkan perawatan yang efektif namun tetap lembut pada kulit.",
  },
  {
    icon: HeartHandshake,
    title: "Personal & Integritas",
    desc: "Tidak ada rekomendasi yang tidak Anda butuhkan. Setiap pasien mendengar kebenaran yang jujur dari dr. Fatri — karena keputusan terbaik lahir dari pemahaman, bukan tekanan.",
  },
];

export default function TentangPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="Cerita di Balik Degerasia"
          title="Bertemu dengan"
          italic="dr. Fatri Idana"
          description="Di balik setiap treatment dan setiap botol DEGERA, ada satu nama yang memastikan standar ilmiah dan keanggunannya terjaga."
          crumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]}
        />

        {/* ── Profil Dokter ─────────────────────────── */}
        <section
          aria-label="Profil dr. Fatri Idana"
          className="relative overflow-hidden bg-porcelain py-24 md:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-8%] top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(123,201,111,0.28),transparent_65%)] blur-2xl"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Foto arch-frame */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-t-full rounded-b-3xl border border-leaf/25"
              />
              <div className="arch-frame relative overflow-hidden bg-sage shadow-[0_50px_90px_-30px_rgba(15,36,21,0.5)]">
                <Image
                  src="/images/doctor-about.png"
                  alt="Potret dr. Fatri Idana, M.Biomed., AAM — Founder Klinik Degerasia"
                  width={864}
                  height={1152}
                  priority
                  className="h-[30rem] w-full object-cover object-top md:h-[36rem]"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-fern bg-forest px-6 py-3 text-center shadow-xl">
                <p className="font-logo text-sm tracking-[0.24em] text-mint">DEGERASIA</p>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.32em] text-porcelain/60">
                  The Art of Refined Beauty
                </p>
              </div>
            </Reveal>

            {/* Narasi & kredensial */}
            <div>
              <Reveal>
                <Eyebrow>Profil Dokter</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
                  dr. Fatri Idana,{" "}
                  <em className="font-medium text-leaf-gradient">M.Biomed., AAM</em>
                </h2>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-moss">
                  Senior Dokter Kecantikan · Founder Klinik Degerasia &amp; Brand DEGERA
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-moss md:text-lg">
                  <p>
                    Perjalanan dr. Fatri berawal dari satu keyakinan: kecantikan sejati lahir
                    ketika sains bertemu kepekaan seni. Setelah menyelesaikan pendidikan
                    kedokteran, ia melanjutkan studi{" "}
                    <span className="font-medium text-forest">Magister Biomedis</span> dan
                    menyempurnakan keahliannya melalui sertifikasi{" "}
                    <span className="font-medium text-forest">Anti-Aging Medicine</span> —
                    kombinasi yang menjadikan setiap keputusan klinisnya berpijak pada bukti,
                    bukan tren sesaat.
                  </p>
                  <p>
                    Dari keyakinan itulah Klinik Degerasia lahir di Sumbawa — rumah kecantikan
                    premium yang membawa standar perawatan estetika kelas atas ke Nusa Tenggara
                    Barat — disusul lahirnya{" "}
                    <span className="font-medium text-forest">DEGERA</span>, lini perawatan
                    kulit yang ia formulasi sendiri. Kini 21 produk DEGERA seluruhnya terdaftar
                    resmi di BPOM, mempersatukan ekstrak botani tropis Indonesia dengan presisi
                    sains biomedis.
                  </p>
                  <p>
                    Bagi dr. Fatri, setiap pasien bukan sekadar kunjungan, melainkan cerita yang
                    didengarkan. Ia memetakan kebutuhan kulit setiap individu lapis demi lapis,
                    lalu menyusun peta perawatan yang jujur, terukur, dan berkelanjutan — karena
                    hasil terbaik hanya lahir dari pemahaman yang utuh.
                  </p>
                </div>
              </Reveal>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {CREDENTIALS.map((c, i) => (
                  <Reveal key={c.title} delay={0.1 + i * 0.08}>
                    <li className="group h-full rounded-3xl border border-fern bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-[0_20px_40px_-20px_rgba(30,122,52,0.45)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                        <c.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-3.5 text-sm font-semibold leading-snug text-forest">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] font-light leading-relaxed text-moss">
                        {c.desc}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Visi & Misi ───────────────────────────── */}
        <section
          aria-label="Visi dan misi Klinik Degerasia"
          className="relative overflow-hidden bg-sage py-24 md:py-32"
        >
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 brand-hairline" />
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <Eyebrow>Visi &amp; Misi</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
                  Tiga Nilai yang Kami{" "}
                  <em className="font-medium text-leaf-gradient">Pegang Teguh</em>
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-5 text-base font-light leading-relaxed text-moss">
                  Misi Degerasia sederhana namun menuntut: menghadirkan perawatan kecantikan
                  yang ilmiah, alami, dan berintegritas — tanpa kompromi pada salah satunya.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.12}>
                  <article className="group h-full rounded-3xl border border-fern bg-porcelain p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(15,36,21,0.35)]">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-leaf/25 bg-sage text-leaf-deep transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-mint">
                      <v.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-medium text-forest">
                      {v.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-moss">{v.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Perjalanan Degerasia ──────────────────── */}
        <section
          aria-label="Perjalanan Degerasia"
          className="relative overflow-hidden bg-forest py-24 text-porcelain md:py-32"
        >
          <div aria-hidden className="grain absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-leaf/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow tone="light">Jejak Langkah</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
                  Perjalanan <em className="text-mint">Degerasia</em>
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-5 text-base font-light leading-relaxed text-porcelain/65">
                  Dari ruang kuliah biomedis hingga klinik premium di Sumbawa — setiap babak
                  membentuk standar yang kami pegang hari ini.
                </p>
              </Reveal>
            </div>

            {/* Timeline vertikal */}
            <ol className="relative mt-16 max-w-3xl space-y-12 border-l border-mint/20 pl-8 md:pl-12">
              {JOURNEY.map((j, i) => (
                <li key={j.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-mint/50 bg-forest md:-left-[57px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  </span>
                  <Reveal delay={i * 0.06}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-mint">
                      {j.year}
                    </p>
                    <h3 className="mt-2.5 font-display text-2xl font-medium leading-snug text-porcelain md:text-[1.7rem]">
                      {j.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-porcelain/70 md:text-base">
                      {j.detail}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Foto Tim ──────────────────────────────── */}
        <section aria-label="Tim Klinik Degerasia" className="bg-porcelain py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <figure className="group relative overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgba(15,36,21,0.45)]">
                <Image
                  src="/images/tim-degerasia.jpg"
                  alt="Keluarga besar Klinik Degerasia berfoto bersama di lobi klinik"
                  width={1512}
                  height={1008}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03] md:aspect-[21/9]"
                  sizes="(max-width: 1280px) 92vw, 1200px"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest/85 via-forest/30 to-transparent"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1 p-6 md:p-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-mint">
                    Satu Tim, Satu Standar
                  </span>
                  <span className="font-display text-2xl font-light text-porcelain md:text-3xl">
                    Keluarga Besar Klinik Degerasia
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            {/* Strip angka */}
            <dl className="mt-16 grid grid-cols-2 gap-6 md:mt-20 lg:grid-cols-4">
              {CLINIC_STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="rounded-3xl border border-fern bg-card p-7 text-center md:p-8">
                    <dd className="font-display text-4xl font-light text-forest md:text-5xl">
                      {s.value}
                      <span className="text-leaf-deep">{s.suffix}</span>
                    </dd>
                    <dt className="mt-3 text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-moss">
                      {s.label}
                    </dt>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
