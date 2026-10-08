"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

/** Tombol WhatsApp mengambang + tombol kembali ke atas. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 600));

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf/30 bg-porcelain/90 text-forest shadow-lg backdrop-blur transition-colors hover:bg-forest hover:text-mint"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/6282236000715"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Klinik Degerasia"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-leaf-deep to-leaf text-porcelain shadow-[0_15px_35px_-10px_rgba(30,122,52,0.7)]"
      >
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-leaf/40 [animation-duration:2.4s]" />
        <MessageCircle className="relative h-6 w-6" aria-hidden />
      </motion.a>
    </div>
  );
}
