import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT_DIR = "/home/z/my-project/public/images";

const TASKS: Array<{ file: string; size: string; prompt: string }> = [
  {
    file: "hero-portrait.png",
    size: "768x1344",
    prompt:
      "Professional editorial portrait photograph of an elegant Indonesian female aesthetic doctor in her early 40s, warm confident subtle smile, wearing an immaculate white doctor coat over a champagne silk blouse, luxurious beauty clinic background softly blurred with cream and warm beige tones, soft golden rim lighting on her hair, glowing flawless skin, high-end fashion magazine photography, luxury aesthetic, sharp focus on face, professional color grading, high quality, detailed",
  },
  {
    file: "about-doctor.png",
    size: "864x1152",
    prompt:
      "Editorial photograph of an elegant Indonesian female doctor wearing a white coat, standing confidently in a luxury aesthetic clinic hallway with arched windows and warm daylight, holding a clipboard, cream walls with champagne gold accents, minimalist luxury medical spa ambiance, professional photography, warm ivory color palette, high quality, detailed",
  },
  {
    file: "clinic-interior.png",
    size: "1344x768",
    prompt:
      "Interior photography of an ultra-luxurious aesthetic beauty clinic lounge, cream ivory walls, champagne gold accents, elegant arched doorways, marble reception desk with warm brass lighting, plush beige velvet armchairs, elegant dried pampas grass decor, soft diffused natural light, high-end architectural photography, serene luxury spa atmosphere, warm color palette, high quality, detailed",
  },
  {
    file: "treatment-moment.png",
    size: "1344x768",
    prompt:
      "Serene elegant woman with glowing skin receiving a luxurious facial treatment in a high-end beauty clinic, eyes closed in relaxation, gentle hands of a therapist applying golden serum, cream and gold treatment room, soft warm candle-like lighting, petals and orchids nearby, luxury spa editorial photography, warm ivory tones, high quality, detailed",
  },
  {
    file: "product-serum.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, elegant frosted glass dropper serum bottle with brushed gold cap and a blank minimal cream label, standing on a beige travertine stone pedestal, cream silk fabric drapery background, soft dried flowers and thin gold arch accent, warm studio lighting, high-end cosmetic advertising photography, elegant minimal composition, warm ivory palette, high quality, detailed",
  },
  {
    file: "product-cream.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, white ceramic moisturizer cream jar with brushed gold lid and a blank minimal label, on a cream marble surface with soft morning shadows, white orchid flowers beside it, warm ivory background, premium cosmetic advertisement style, elegant minimal composition, studio lighting, high quality, detailed",
  },
  {
    file: "product-sunscreen.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, sleek white and gold sunscreen tube with a blank minimal cream label, resting on warm sand-colored stone, soft golden sunlight and palm leaf shadow on a cream wall, elegant minimal composition, premium cosmetic advertisement photography, warm ivory palette, high quality, detailed",
  },
  {
    file: "product-toner.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, tall elegant glass toner bottle with gold collar cap and a blank minimal cream label, water droplets on glass, on a rippled water surface reflection, cream and champagne background, soft warm lighting, premium cosmetic advertisement style, elegant minimal, high quality, detailed",
  },
  {
    file: "silk-texture.png",
    size: "1440x720",
    prompt:
      "Macro photography of flowing champagne gold silk fabric waves, elegant luxurious smooth texture, soft warm light with gentle shadows, cream and gold tones, abstract elegant background, high quality, detailed",
  },
];

async function main() {
  const zai = await ZAI.create();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const CONCURRENCY = 3;
  const results: string[] = [];
  let index = 0;

  async function worker(id: number) {
    while (index < TASKS.length) {
      const task = TASKS[index++];
      const outPath = path.join(OUT_DIR, task.file);
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 50000) {
        console.log(`[worker ${id}] skip existing ${task.file}`);
        results.push(task.file);
        continue;
      }
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          console.log(`[worker ${id}] generating ${task.file} (${task.size}) attempt ${attempt}`);
          const res = await zai.images.generations.create({
            prompt: task.prompt,
            size: task.size,
          });
          const b64 = res?.data?.[0]?.base64;
          if (!b64) throw new Error("empty base64 response");
          fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
          console.log(`[worker ${id}] OK ${task.file} (${Math.round(b64.length / 1024)}KB b64)`);
          results.push(task.file);
          break;
        } catch (err) {
          console.error(`[worker ${id}] FAIL ${task.file} attempt ${attempt}:`, (err as Error).message);
          if (attempt === 3) console.error(`[worker ${id}] GIVE UP ${task.file}`);
          await new Promise((r) => setTimeout(r, 1500 * attempt));
        }
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));
  console.log(`DONE. generated=${results.length}/${TASKS.length}`);
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
