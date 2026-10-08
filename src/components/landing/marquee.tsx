"use client";

const WORDS = ["Kecantikan", "Sains Medis", "Elegansi", "Kepercayaan Diri", "Seni Estetika", "Degerasia"];

/** Pita berjalan bergaya editorial di atas latar forest. */
export function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div aria-hidden className="relative overflow-hidden border-y border-mint/15 bg-forest py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap pl-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((word, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-2xl font-light italic text-porcelain/90 md:text-3xl">{word}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-mint/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
