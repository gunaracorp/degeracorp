"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, BadgeCheck, GraduationCap, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 40, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section
      id="beranda"
      aria-label="Perkenalan Dr. Fatri Idana"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-porcelain pt-24 pb-16 md:pt-28"
    >
      {/* Lingkaran cahaya emas dekoratif */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.4),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(47,158,68,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute left-1/2 top-24 hidden h-px w-[70%] -translate-x-1/2 brand-hairline lg:block" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ── Kolom teks ─────────────────────────────── */}
        <div className="text-center lg:text-left">
          <motion.div {...fadeUp(0.15)}>
            <span className="inline-flex items-center gap-3 rounded-full border border-leaf/30 bg-sage/80 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-leaf-deep md:text-[11px]">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf" />
              Klinik Degerasia — Sumbawa, NTB
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.3)}
            className="mt-7 font-display text-[2.9rem] font-light leading-[1.04] text-forest sm:text-6xl md:text-7xl xl:text-[5.4rem]"
          >
            Seni Menemukan
            <span className="block">
              <em className="text-leaf-gradient font-medium not-italic">
                Keanggunan Alami
              </em>
            </span>
            <span className="block italic text-moss">Wajah Anda.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.45)}
            className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-moss md:text-lg lg:mx-0"
          >
            <strong className="font-medium text-forest">
              Dr. Fatri Idana, M.Biomed., AAM
            </strong>{" "}
            — Senior Dokter Kecantikan & Founder Klinik Degerasia di Sumbawa,
            mempersatukan presisi sains medis estetika dengan rasa seni, untuk
            hasil yang memancar dari dalam.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#kontak"
              className="group relative inline-flex overflow-hidden rounded-full bg-forest px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-porcelain shadow-[0_18px_40px_-16px_rgba(15,36,21,0.6)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-leaf-deep via-leaf to-leaf-deep transition-transform duration-700 group-hover:translate-x-0" />
              <span className="relative">Konsultasi Privat</span>
            </a>
            <a
              href="#degera"
              className="inline-flex items-center gap-3 rounded-full border border-leaf/50 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-forest transition-all duration-500 hover:border-leaf hover:bg-sage"
            >
              Jelajahi DEGERA
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" aria-hidden />
            </a>
          </motion.div>

          {/* Kredensial singkat */}
          <motion.ul {...fadeUp(0.75)} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
            <li className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-moss">
              <GraduationCap className="h-4 w-4 text-leaf" aria-hidden />
              M. Biomed &amp; AAM
            </li>
            <li className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-moss">
              <BadgeCheck className="h-4 w-4 text-leaf" aria-hidden />
              Senior Aesthetic Doctor
            </li>
            <li className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-moss">
              <Star className="h-4 w-4 text-leaf" aria-hidden />
              Owner DEGERA Brand
            </li>
          </motion.ul>
        </div>

        {/* ── Kolom potret ───────────────────────────── */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Cincin dekoratif berputar */}
          <div
            aria-hidden
            className="absolute -inset-6 animate-[spin_38s_linear_infinite] rounded-full border border-dashed border-leaf/30 md:-inset-10"
          />
          <div aria-hidden className="absolute -inset-2 rounded-t-full rounded-b-3xl border border-leaf/25" />

          {/* Potret lengkung galeri */}
          <div className="arch-frame relative overflow-hidden shadow-[0_50px_90px_-30px_rgba(15,36,21,0.55)]">
            <Image
              src="/images/doctor-hero.png"
              alt="Potret editorial Dr. Fatri Idana, senior dokter kecantikan, di Klinik Degerasia"
              width={768}
              height={1344}
              priority
              className="h-[30rem] w-full object-cover object-top md:h-[38rem] lg:h-[42rem]"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
          </div>

          {/* Kartu melayang: pengalaman */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-16 rounded-2xl border border-leaf/20 bg-porcelain/90 px-5 py-4 shadow-xl backdrop-blur-md md:-left-10"
          >
            <p className="font-display text-3xl font-medium text-leaf-deep">15+</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-moss">Tahun Pengalaman</p>
          </motion.div>

          {/* Kartu melayang: pasien */}
          <motion.div
            animate={reduce ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-3 bottom-14 rounded-2xl border border-leaf/20 bg-forest/95 px-5 py-4 text-porcelain shadow-xl backdrop-blur-md md:-right-8"
          >
            <div className="flex items-center gap-1" aria-label="Rating lima bintang">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-mint text-mint" aria-hidden />
              ))}
            </div>
            <p className="mt-1.5 font-display text-xl font-medium">10.000+ <span className="text-sm font-light">pasien</span></p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-mint/80">Dipercaya &amp; Bahagia</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Indikator gulir */}
      <motion.a
        href="#tentang"
        aria-label="Gulir ke bagian tentang"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-moss md:flex"
      >
        Gulir
        <motion.span animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4 text-leaf" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
