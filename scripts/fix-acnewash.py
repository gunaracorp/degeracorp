#!/usr/bin/env python3
"""Perbaiki acne-wash: jangan upscale jika satu dimensi sudah >= min_side."""
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import os

SRC = "/tmp/ig-photos"
OUT = "/home/z/my-project/public/images"

def save(im, name, q=88):
    path = os.path.join(OUT, name)
    im.convert("RGB").save(path, "JPEG", quality=q, optimize=True)
    print(f"OK {name}: {im.size[0]}x{im.size[1]} {os.path.getsize(path)//1024}KB")

def pad_square_blur(im, out_name, target=1000, q=88):
    w, h = im.size
    # scale agar sisi terpanjang ~ target
    longest = max(w, h)
    f = target / longest
    if abs(f - 1.0) > 0.05:
        im = im.resize((int(w * f), int(h * f)), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=55, threshold=3))
        w, h = im.size
    side = max(w, h)
    canvas = Image.new("RGB", (side, side))
    bg = ImageOps.mirror(im).resize((side, side), Image.LANCZOS).filter(ImageFilter.GaussianBlur(26))
    canvas.paste(bg, (0, 0))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2))
    canvas = ImageEnhance.Sharpness(canvas).enhance(1.06)
    save(canvas, out_name, q)

im = Image.open(f"{SRC}/testimoni-2-full.jpg")
W, H = im.size
cw = im.crop((int(0.318 * W), int(0.248 * H), int(0.520 * W), int(0.818 * H)))
pad_square_blur(cw, "produk-asli-acne-wash.jpg")
print("SELESAI")
