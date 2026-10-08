"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, BadgeCheck, HeartHandshake, Microscope } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "M. Biomed (Master of Biomedical Science)",
    desc: "Landasan sains biomedis yang mendalam di balik setiap protokol perawatan.",
  },
  {
    icon: Award,
    title: "AAM (Ahli Anti-Aging Medis)",
    desc: "Sertifikasi anti-aging medis dengan pendekatan regeneratif & preventif.",
  },
  {
    icon: Microscope,
    title: "Senior Dokter Kecantikan",
    desc: "Lebih dari 15 tahun menangani kasus estetika wajah dan kulit ter kompleks.",
  },
  {
    icon: HeartHandshake,
    title: "Owner Klinik Degerasia & DEGERA",
    desc: "Membangun rumah kecantikan terintegrasi: klinik premium + lini skincare ilmiah.",
  },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="tentang" aria-label="Tentang Dr. Fatri Idana" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(217,195,154,0.35),transparent_65%)] blur-2xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* ── Kolase foto ─────────────────────────── */}
        <div className="relative mx-auto w-full max-w-lg">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_40px_70px_-30px_rgba(36,27,18,0.5)]">
              <Image
                src="/images/about-doctor.png"
                alt="Dr. Fatri Idana dalam suasana praktik di Klinik Degerasia"
                width={864}
                height={1152}
                className="h-[26rem] w-full object-cover object-top md:h-[32rem]"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </Reveal>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-10 -right-2 w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-2xl sm:-right-8 sm:w-56"
          >
            <Image
              src="/images/clinic-interior.png"
              alt="Interior lounge mewah Klinik Degerasia"
              width={1344}
              height={768}
              className="h-28 w-full object-cover sm:h-36"
              sizes="240px"
            />
          </motion.div>

          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 -top-6 rounded-2xl border border-gold/25 bg-espresso px-6 py-4 text-center text-ivory shadow-xl sm:-left-8"
          >
            <p className="font-logo text-lg tracking-[0.2em] text-champagne">DEGERASIA</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-ivory/60">Home of Refined Beauty</p>
          </motion.div>
        </div>

        {/* ── Narasi ──────────────────────────────── */}
        <div>
          <Reveal>
            <Eyebrow>Tentang Dokter</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-espresso md:text-5xl">
              Dr. Fatri Idana,{" "}
              <em className="font-medium text-gold-gradient">M.Biomed., AAM</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base font-light leading-relaxed text-cocoa md:text-lg">
              Perjalanan saya berawal dari satu keyakinan sederhana:{" "}
              <em className="font-display text-xl italic text-espresso">
                kecantikan sejati lahir ketika sains bertemu kepekaan seni.
              </em>{" "}
              Sebagai dokter kecantikan dengan latar belakang biomedis, saya merancang
              setiap tindakan bukan sekadar prosedur — melainkan komposisi personal yang
              menghormati anatomi, karakter kulit, dan cerita setiap individu.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-4 text-base font-light leading-relaxed text-cocoa md:text-lg">
              Melalui <span className="font-medium text-espresso">Klinik Degerasia</span>, saya
              menghadirkan ruang aman bagi para perempuan — dan lelaki — yang ingin tampil
              sebagai versi terbaik dirinya. Melalui{" "}
              <span className="font-medium text-espresso">DEGERA</span>, saya memformulasikan
              skincare berbasis bukti ilmiah agar perawatan berlanjut di rumah dengan standar
              yang sama tingginya.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.08}>
                <li className="group h-full rounded-2xl border border-sand bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(150,112,58,0.45)]">
                  <c.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-espresso">{c.title}</h3>
                  <p className="mt-1.5 text-[13px] font-light leading-relaxed text-cocoa">{c.desc}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <p className="mt-10 font-display text-3xl italic text-gold-deep">— Fatri Idana</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
