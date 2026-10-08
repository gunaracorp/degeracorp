"use client";

import Image from "next/image";
import { Eyebrow, Reveal } from "./reveal";

/** Kutipan filosofi besar di atas latar krem dengan aksen foto treatment. */
export function Philosophy() {
  return (
    <section aria-label="Filosofi perawatan" className="relative overflow-hidden bg-sage py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[28px] border border-leaf/25 shadow-[0_40px_80px_-35px_rgba(15,36,21,0.5)]">
            <Image
              src="/images/treatment-moment.png"
              alt="Momen perawatan wajah mewah di Klinik Degerasia"
              width={1344}
              height={768}
              className="h-72 w-full object-cover md:h-96"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent" />
          </div>
          <div aria-hidden className="absolute -bottom-5 left-1/2 h-10 w-10 -translate-x-1/2 rotate-45 rounded-[6px] border border-leaf/40 bg-sage" />
        </Reveal>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <Reveal>
            <Eyebrow>Filosofi Degerasia</Eyebrow>
          </Reveal>
          <Reveal delay={0.12}>
            <blockquote className="mt-6 font-display text-3xl font-light leading-snug text-forest md:text-[2.6rem] md:leading-[1.25]">
              “Saya tidak mengubah wajah Anda. Saya{" "}
              <em className="font-medium text-leaf-deep">memoles kembali</em> cerita
              yang sudah ada — hingga dunia melihat{" "}
              <em className="font-medium text-leaf-deep">versi paling bercahaya</em>{" "}
              dari diri Anda.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 text-sm font-light leading-relaxed text-moss md:text-base">
              Setiap protokol di Klinik Degerasia dibangun di atas tiga pilar:{" "}
              <strong className="font-medium text-forest">ketepatan diagnosis</strong>,{" "}
              <strong className="font-medium text-forest">teknik paling halus</strong>, dan{" "}
              <strong className="font-medium text-forest">hasil yang alami</strong> —
              sebab kecantikan terbaik adalah yang tidak terlihat seperti &lsquo;dibuat&rsquo;.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
