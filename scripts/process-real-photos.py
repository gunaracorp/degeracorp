#!/usr/bin/env python3
"""Proses foto asli IG dr. Fatri → aset siap pakai website Degerasia."""
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import os

SRC = "/tmp/ig-photos"
OUT = "/home/z/my-project/public/images"
os.makedirs(OUT, exist_ok=True)

def save(im, name, q=88):
    path = os.path.join(OUT, name)
    im = im.convert("RGB")
    im.save(path, "JPEG", quality=q, optimize=True)
    print(f"OK {name}: {im.size[0]}x{im.size[1]} {os.path.getsize(path)//1024}KB")

# ── 1. HERO: new-4 (dr. Fatri kereta gantung Taif) — buang watermark TikTok kiri ──
im = Image.open(f"{SRC}/new-4.jpg")  # 360x640
w, h = im.size
hero = im.crop((58, 0, w, h))  # buang kolom kiri ber-watermark
# upscale 2x + sharpen ringan
hero = hero.resize((hero.width * 2, hero.height * 2), Image.LANCZOS)
hero = hero.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=3))
save(hero, "dr-fatri-taif-hero.jpg", q=90)

# ── 2. PRODUK ASLI dari testimoni-2-full.jpg (1440x1818) ──
im = Image.open(f"{SRC}/testimoni-2-full.jpg")
W, H = im.size  # 1440x1818

def crop_frac(im, fx0, fy0, fx1, fy1):
    return im.crop((int(fx0 * W), int(fy0 * H), int(fx1 * W), int(fy1 * H)))

def pad_square_blur(im, out_name, q=88):
    """Pad ke square: sisi kiri/kanan diisi mirror+blur supaya produk utuh & estetik."""
    w, h = im.size
    side = max(w, h)
    canvas = Image.new("RGB", (side, side))
    # latar: mirror horizontal + blur kuat
    bg = ImageOps.mirror(im).resize((side, side), Image.LANCZOS).filter(ImageFilter.GaussianBlur(28))
    canvas.paste(bg, (0, 0))
    x = (side - w) // 2
    canvas.paste(im, (x, 0))
    canvas = ImageEnhance.Sharpness(canvas).enhance(1.08)
    save(canvas, out_name, q)

# Toner Acne (botol kiri putih)
toner = crop_frac(im, 0.018, 0.242, 0.320, 0.818)
pad_square_blur(toner, "produk-asli-toner-acne.jpg")

# Acne Wash (botol hijau)
acne = crop_frac(im, 0.312, 0.248, 0.528, 0.818)
pad_square_blur(acne, "produk-asli-acne-wash.jpg")

# J'RA Night Cream (jar putih atas)
jnc = crop_frac(im, 0.540, 0.512, 0.826, 0.728)
pad_square_blur(jnc, "produk-asli-jra-night-cream.jpg")

# J'RA Cream (jar kaca bawah)
jrc = crop_frac(im, 0.498, 0.700, 0.790, 0.895)
pad_square_blur(jrc, "produk-asli-jra-cream.jpg")

# Foto koleksi produk utuh (untuk galeri)
koleksi = im.copy()
koleksi = ImageEnhance.Color(koleksi).enhance(1.04)
save(koleksi, "produk-asli-koleksi.jpg", q=90)

# ── 3. GALERI: foto perjalanan & testimoni ──
save(Image.open(f"{SRC}/testimoni-1-full.jpg"), "testimoni-pasien-asli.jpg", q=88)
save(Image.open(f"{SRC}/korea-starfield-640.jpg"), "dr-fatri-korea-starfield.jpg", q=88)
save(Image.open(f"{SRC}/new-8.jpg"), "dr-fatri-makkah-umroh.jpg", q=88)
save(Image.open(f"{SRC}/new-7.jpg"), "umroh-keluarga-degerasia.jpg", q=88)
save(Image.open(f"{SRC}/new-5.jpg"), "dr-fatri-taif-sahabat.jpg", q=88)
save(Image.open(f"{SRC}/april2019-unud-640.jpg"), "dr-fatri-unud-konvos.jpg", q=88)
save(Image.open(f"{SRC}/new-2.jpg"), "dr-fatri-live-edukasi.jpg", q=88)

print("SELESAI")
