#!/usr/bin/env python3
"""Perbaikan crop: jar J'RA lebih longgar + upscale, hero tanpa sisa watermark."""
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import os

SRC = "/tmp/ig-photos"
OUT = "/home/z/my-project/public/images"

def save(im, name, q=88):
    path = os.path.join(OUT, name)
    im.convert("RGB").save(path, "JPEG", quality=q, optimize=True)
    print(f"OK {name}: {im.size[0]}x{im.size[1]} {os.path.getsize(path)//1024}KB")

def pad_square_blur(im, out_name, min_side=760, q=88):
    w, h = im.size
    side = max(w, h, min_side)
    # upscale dulu jika crop kecil
    if w < min_side:
        f = min_side / w
        im = im.resize((int(w * f), int(h * f)), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=55, threshold=3))
        w, h = im.size
        side = max(w, h)
    canvas = Image.new("RGB", (side, side))
    bg = ImageOps.mirror(im).resize((side, side), Image.LANCZOS).filter(ImageFilter.GaussianBlur(26))
    canvas.paste(bg, (0, 0))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2 if False else 0))
    canvas = ImageEnhance.Sharpness(canvas).enhance(1.06)
    save(canvas, out_name, q)

# Hero: buang 14px kiri lagi (sisa watermark)
im = Image.open(f"{SRC}/new-4.jpg")
hero = im.crop((72, 0, im.width, im.height))
hero = hero.resize((hero.width * 2, hero.height * 2), Image.LANCZOS)
hero = hero.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=3))
save(hero, "dr-fatri-taif-hero.jpg", q=90)

im = Image.open(f"{SRC}/testimoni-2-full.jpg")
W, H = im.size

def crop_frac(fx0, fy0, fx1, fy1):
    return im.crop((int(fx0 * W), int(fy0 * H), int(fx1 * W), int(fy1 * H)))

# J'RA Night Cream — lebih longgar & proporsional
pad_square_blur(crop_frac(0.522, 0.498, 0.838, 0.740), "produk-asli-jra-night-cream.jpg")
# J'RA Cream — sertakan tutup jar
pad_square_blur(crop_frac(0.485, 0.678, 0.806, 0.912), "produk-asli-jra-cream.jpg")
# Acne Wash — geser kanan sedikit agar jar tidak masuk
pad_square_blur(crop_frac(0.318, 0.248, 0.520, 0.818), "produk-asli-acne-wash.jpg")

print("SELESAI")
