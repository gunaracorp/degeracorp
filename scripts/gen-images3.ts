import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT_DIR = "/home/z/my-project/public/images";

const TASKS: Array<{ file: string; size: string; prompt: string }> = [
  /* ── Produk baru (5) ── */
  {
    file: "degera-cleanser.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, elegant white pump bottle cleanser with brushed gold pump head and a blank minimal sage green label, standing on a light green marble pedestal, soft botanical leaves and eucalyptus in background, creamy ivory backdrop with green tint, soft warm studio lighting, premium cosmetic advertisement, elegant minimal composition, high quality, detailed",
  },
  {
    file: "degera-facialfoam.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, sleek white squeeze tube with gold cap and a blank minimal sage green label for facial foam, placed beside soft white foam swirl on pale green stone surface, botanical leaf shadows on ivory wall, warm studio lighting, premium cosmetic advertising style, elegant minimal, high quality, detailed",
  },
  {
    file: "degera-bbcream.png",
    size: "1024x1024",
    prompt:
      "Luxury cosmetics product photography, elegant beige-gold makeup tube with gold cap and blank minimal sage green label, standing on travertine stone with a soft makeup swatch smear in warm beige tone beside it, ivory green tinted background, botanical leaves accent, warm studio lighting, premium advertising style, minimal elegant, high quality, detailed",
  },
  {
    file: "degera-nightcream.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, deep emerald green glass cream jar with brushed gold lid and a blank minimal gold label, on dark green silk fabric with soft moonlight, night botanical flowers and gold crescent accent, moody elegant lighting, premium cosmetic advertisement, high quality, detailed",
  },
  {
    file: "degera-lotion.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, tall elegant white body lotion bottle with gold collar and blank minimal sage green label, water droplets on glass, standing among fresh botanical leaves on pale green marble, ivory background with soft sunlight, premium cosmetic advertisement, minimal elegant composition, high quality, detailed",
  },
  /* ── Service hero (5) ── */
  {
    file: "service-facial.png",
    size: "1440x1024",
    prompt:
      "Serene elegant Indonesian woman with glowing skin receiving a luxurious facial treatment in a premium botanical beauty clinic, eyes closed in relaxation, gentle hands applying serum, sage green and cream treatment room with plants and gold accents, soft diffused daylight, luxury spa editorial photography, elegant botanical atmosphere, high quality, detailed",
  },
  {
    file: "service-peeling.png",
    size: "1440x1024",
    prompt:
      "Professional aesthetic clinic treatment scene, close-up of a gloved doctor hand applying a gentle cleansing solution with a soft brush on a relaxed beautiful woman's face, botanical emerald green clinic room with cream walls, soft warm lighting, medical spa editorial photography, premium atmosphere, high quality, detailed",
  },
  {
    file: "service-injection.png",
    size: "1440x1024",
    prompt:
      "Elegant female aesthetic doctor in white coat performing a precise gentle aesthetic injection treatment on a relaxed beautiful Indonesian woman in a luxury clinic, emerald green and cream interior with gold accents and botanical plants, soft professional lighting, medical aesthetic editorial photography, premium clean atmosphere, high quality, detailed",
  },
  {
    file: "service-contour.png",
    size: "1440x1024",
    prompt:
      "Beautiful elegant Indonesian woman with sculpted V-shaped facial contour touching her jawline confidently, luxury botanical beauty clinic background in emerald green and cream tones with arch architecture, soft golden light, premium beauty editorial photography, sophisticated atmosphere, high quality, detailed",
  },
  {
    file: "service-laser.png",
    size: "1440x1024",
    prompt:
      "Modern aesthetic laser treatment in a luxury botanical clinic, professional device with soft glowing light being used on a beautiful relaxed Indonesian woman's cheek by a female doctor in white coat, emerald green and cream room with gold details, futuristic yet warm atmosphere, medical aesthetic editorial photography, high quality, detailed",
  },
  /* ── Galeri (3) ── */
  {
    file: "gallery-treatment-room.png",
    size: "1440x1024",
    prompt:
      "Interior photography of an ultra-luxurious single treatment room in a botanical beauty clinic, elegant cream treatment bed with sage green throw, arched wall niche with plants, gold wall sconces, emerald green accent wall, soft diffused daylight through sheer curtains, high-end architectural photography, serene premium spa atmosphere, high quality, detailed",
  },
  {
    file: "gallery-facial-suite.png",
    size: "1440x1024",
    prompt:
      "Interior photography of a luxury facial suite for couples in a botanical beauty clinic, two elegant cream treatment beds side by side, hanging plants and botanical decor, emerald green and ivory color palette with gold accents, large arched window with garden view, soft natural light, high-end architectural photography, serene luxury, high quality, detailed",
  },
  {
    file: "gallery-product-bar.png",
    size: "1440x1024",
    prompt:
      "Luxury skincare retail display bar in a botanical beauty clinic, shelves of elegant white and emerald green cosmetic bottles with gold details, backlit arch shelving, cream marble counter, botanical plants decoration, soft warm spotlighting, premium retail interior photography, elegant minimal, high quality, detailed",
  },
  /* ── Artikel (6) ── */
  {
    file: "article-skincare.jpg",
    size: "1440x960",
    prompt:
      "Elegant flat lay photography of luxury skincare routine products: dropper serum bottle, cream jar, toner bottle with sage green and gold packaging (blank labels), arranged on cream linen fabric with botanical eucalyptus leaves, soft morning light, premium editorial style, minimal elegant composition, high quality, detailed",
  },
  {
    file: "article-sunscreen.jpg",
    size: "1440x960",
    prompt:
      "Elegant summer photography of a white and gold sunscreen tube with blank sage green label on warm sand-colored stone, bright soft sunlight with tropical palm leaf shadows on cream wall, beach vacation luxury mood, premium cosmetic editorial photography, high quality, detailed",
  },
  {
    file: "article-peeling.jpg",
    size: "1440x960",
    prompt:
      "Beauty editorial photography of a beautiful Indonesian woman with fresh glowing renewed skin touching her cheek gently, soft green botanical clinic background, concept of skin renewal and chemical peeling, soft diffused light, premium beauty magazine style, elegant and clean, high quality, detailed",
  },
  {
    file: "article-botox.jpg",
    size: "1440x960",
    prompt:
      "Sophisticated editorial photography of an elegant female aesthetic doctor in white coat holding a fine syringe with professional confidence, luxury emerald green and cream clinic interior with gold accents softly blurred, premium medical aesthetic magazine style, soft lighting, high quality, detailed",
  },
  {
    file: "article-night.jpg",
    size: "1440x960",
    prompt:
      "Moody elegant night skincare photography, deep emerald green glass cream jar with gold lid on dark silk fabric, crescent moon light through window, night botanical flowers, candles softly glowing in background, premium cosmetic editorial style, luxurious calm atmosphere, high quality, detailed",
  },
  {
    file: "article-acne.jpg",
    size: "1440x960",
    prompt:
      "Clean beauty editorial photography of a young Indonesian woman with clear fresh healthy skin smiling softly, natural botanical green clinic background with plants, concept of acne healing journey, soft daylight, premium beauty magazine style, hopeful fresh mood, high quality, detailed",
  },
];

async function main() {
  const zai = await ZAI.create();
  let done = 0;
  const failed: string[] = [];

  const worker = async (queue: typeof TASKS) => {
    while (queue.length) {
      const task = queue.shift();
      if (!task) return;
      const out = path.join(OUT_DIR, task.file);
      if (fs.existsSync(out)) {
        console.log(`skip (ada): ${task.file}`);
        done++;
        continue;
      }
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const res = await zai.images.generations.create({
            prompt: task.prompt,
            size: task.size as `${number}x${number}`,
          });
          const b64 = res.data?.[0]?.base64;
          if (!b64) throw new Error("kosong");
          fs.writeFileSync(out, Buffer.from(b64, "base64"));
          console.log(`OK: ${task.file} (${++done}/${TASKS.length})`);
          break;
        } catch (e) {
          console.error(`GAGAL attempt ${attempt}: ${task.file}`, (e as Error).message);
          if (attempt === 3) failed.push(task.file);
          await new Promise((r) => setTimeout(r, 2500 * attempt));
        }
      }
    }
  };

  const q = [...TASKS];
  await Promise.all([worker(q), worker(q), worker(q)]);
  console.log(`\nSelesai: ${done}/${TASKS.length}. Gagal: ${failed.length ? failed.join(", ") : "tidak ada"}`);
}

main();
