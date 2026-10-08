"use client";

import { useState } from "react";
import { Clock, Instagram, Loader2, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const SERVICES_OPTIONS = [
  "Konsultasi Umum",
  "Facial Regeneratif Degerasia",
  "Anti-Aging & Botox",
  "Filler & Kontur Wajah",
  "Laser & Rejuvenasi",
  "Thread Lift",
  "Glow Program 90 Hari",
  "Produk DEGERA",
];

const INFO = [
  {
    icon: MapPin,
    title: "Alamat Klinik",
    lines: ["Jl. Kemang Raya No. 88", "Jakarta Selatan, 12730"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: ["Senin — Sabtu: 10.00 — 19.00", "Minggu: dengan perjanjian"],
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    lines: ["+62 812-3456-7890", "(021) 719-8866"],
  },
  {
    icon: Instagram,
    title: "Instagram",
    lines: ["@dr.fatriidana", "@klinikdegerasia"],
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES_OPTIONS[0], message: "" });
  const [state, setState] = useState<FormState>("idle");
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("gagal");
      setState("success");
      setForm({ name: "", phone: "", service: SERVICES_OPTIONS[0], message: "" });
      toast({
        title: "Reservasi terkirim ✦",
        description: "Tim Degerasia akan menghubungi Anda dalam 1×24 jam.",
      });
    } catch {
      setState("error");
      toast({
        title: "Gagal mengirim",
        description: "Silakan coba lagi atau hubungi WhatsApp kami.",
        variant: "destructive",
      });
    } finally {
      if (state === "loading") setState("idle");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-fern bg-porcelain px-4 py-3.5 text-sm font-light text-forest placeholder:text-moss/50 outline-none transition-all duration-300 focus:border-leaf focus:ring-2 focus:ring-leaf/25";

  return (
    <section id="kontak" aria-label="Kontak dan reservasi" className="relative overflow-hidden bg-porcelain py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(163,217,119,0.3),transparent_60%)] blur-2xl" />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* ── Info ─────────────────────────────── */}
        <div>
          <Reveal>
            <Eyebrow>Reservasi &amp; Kunjungan</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
              Kami Menanti Kehadiran{" "}
              <em className="font-medium text-leaf-gradient">Anda</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-moss">
              Kirim permintaan reservasi melalui formulir, atau hubungi kami langsung.
              Setiap pertanyaan akan dibalas dengan hangat oleh tim Degerasia.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {INFO.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-fern bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-leaf/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage text-leaf-deep transition-colors duration-500 group-hover:bg-forest group-hover:text-mint">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                    {item.title}
                  </h3>
                  {item.lines.map((l) => (
                    <p key={l} className="mt-1 text-[13px] font-light leading-relaxed text-moss">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Formulir ─────────────────────────── */}
        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[28px] border border-fern bg-card p-7 shadow-[0_40px_90px_-40px_rgba(15,36,21,0.4)] md:p-10"
            aria-label="Formulir reservasi konsultasi"
          >
            <div aria-hidden className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sage blur-2xl" />

            <h3 className="relative font-display text-2xl font-medium text-forest md:text-3xl">
              Formulir <em className="text-leaf-deep">Reservasi</em>
            </h3>
            <p className="relative mt-2 text-[13px] font-light text-moss">
              Isi data berikut — balasan dalam 1×24 jam kerja.
            </p>

            <div className="relative mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
                    Nama Lengkap *
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama Anda"
                    className={inputCls}
                    name="name"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
                    Nomor WhatsApp *
                  </span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="08xx-xxxx-xxxx"
                    inputMode="tel"
                    className={inputCls}
                    name="phone"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
                  Layanan yang Diminati
                </span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputCls}
                  name="service"
                >
                  {SERVICES_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-moss">
                  Pesan
                </span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ceritakan singkat kebutuhan atau keluhan kulit Anda…"
                  className={`${inputCls} resize-none`}
                  name="message"
                />
              </label>

              <button
                type="submit"
                disabled={state === "loading"}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-forest py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-porcelain transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(15,36,21,0.6)] disabled:opacity-70"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-leaf-deep via-leaf to-leaf-deep transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-2.5">
                  {state === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Mengirim…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      Kirim Reservasi
                    </>
                  )}
                </span>
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-[11px] font-light text-moss/70">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                Data Anda aman &amp; hanya digunakan untuk keperluan reservasi.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
