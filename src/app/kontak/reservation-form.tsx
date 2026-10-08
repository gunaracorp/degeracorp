"use client";

import { useState } from "react";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { SERVICES } from "@/lib/degerasia-data";
import { useToast } from "@/hooks/use-toast";

/** Opsi layanan: konsultasi umum + seluruh treatment klinik + produk. */
const SERVICE_OPTIONS = ["Konsultasi Umum", ...SERVICES.map((s) => s.name), "Produk DEGERA"];

type FormState = "idle" | "loading";

const INITIAL = { name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" };

/** Formulir reservasi satu-halaman untuk halaman /kontak (POST /api/contact). */
export function ReservationForm() {
  const [form, setForm] = useState(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validasi sederhana di sisi klien (API memvalidasi ulang).
    if (form.name.trim().length < 2) {
      toast({
        title: "Nama belum lengkap",
        description: "Mohon isi nama lengkap Anda.",
        variant: "destructive",
      });
      return;
    }
    if (form.phone.trim().length < 6) {
      toast({
        title: "Nomor WhatsApp tidak valid",
        description: "Contoh format: 0822-3600-0715.",
        variant: "destructive",
      });
      return;
    }

    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("gagal");
      setForm(INITIAL);
      toast({
        title: "Reservasi terkirim ✦",
        description: "Tim Degerasia akan menghubungi Anda dalam 1×24 jam.",
      });
    } catch {
      toast({
        title: "Gagal mengirim",
        description: "Silakan coba lagi atau hubungi WhatsApp kami.",
        variant: "destructive",
      });
    } finally {
      setState("idle");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-fern bg-porcelain px-4 py-3.5 text-sm font-light text-forest placeholder:text-moss/50 outline-none transition-all duration-300 focus:border-leaf focus:ring-2 focus:ring-leaf/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[28px] border border-fern bg-card p-7 shadow-[0_40px_90px_-40px_rgba(15,36,21,0.4)] md:p-10"
      aria-label="Formulir reservasi konsultasi"
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sage blur-2xl" />

      <h2 className="relative font-display text-2xl font-medium text-forest md:text-3xl">
        Formulir <em className="text-leaf-deep">Reservasi</em>
      </h2>
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
            Pilih Layanan
          </span>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputCls}
            name="service"
          >
            {SERVICE_OPTIONS.map((s) => (
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
  );
}
