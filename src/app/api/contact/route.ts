import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const service = typeof body?.service === "string" ? body.service.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "Nama wajib diisi." }, { status: 400 });
    }
    if (!phone || phone.length < 6) {
      return NextResponse.json({ ok: false, error: "Nomor WhatsApp tidak valid." }, { status: 400 });
    }
    if (name.length > 120 || phone.length > 40 || service.length > 120 || message.length > 2000) {
      return NextResponse.json({ ok: false, error: "Data terlalu panjang." }, { status: 400 });
    }

    const saved = await db.contactMessage.create({
      data: { name, phone, service: service || null, message },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("[/api/contact] error:", error);
    return NextResponse.json(
      { ok: false, error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
