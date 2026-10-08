"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Membungkus konten dengan animasi fade-up elegan saat masuk viewport. */
export function Reveal({ children, delay = 0, y = 36, className, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow kecil bergaya editorial: garis emas + label letterspaced. */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-medium uppercase tracking-[0.35em] ${
        tone === "dark" ? "text-leaf-deep" : "text-mint"
      }`}
    >
      <span aria-hidden className={`h-px w-8 ${tone === "dark" ? "bg-leaf" : "bg-mint"}`} />
      {children}
    </span>
  );
}
