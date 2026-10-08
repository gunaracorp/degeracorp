import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT_DIR = "/home/z/my-project/public/images";

const TASKS: Array<{ file: string; size: string; prompt: string }> = [
  {
    file: "product-serum.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, elegant frosted glass dropper serum bottle with deep forest green cap and a blank minimal white label with thin green border, standing on a beige travertine stone pedestal, soft sage green silk fabric drapery background, fresh eucalyptus leaves accent, warm studio lighting, high-end cosmetic advertising photography, elegant minimal composition, high quality, detailed",
  },
  {
    file: "product-cream.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, white ceramic moisturizer cream jar with deep forest green lid and a blank minimal white label, on cream marble surface with soft morning shadows, white orchid flowers and soft green leaves beside it, warm ivory background with sage green tint, premium cosmetic advertisement style, elegant minimal composition, studio lighting, high quality, detailed",
  },
  {
    file: "product-sunscreen.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, sleek white sunscreen tube with deep forest green cap and a blank minimal white label, resting on warm light stone, soft sunlight and tropical leaf shadow on a cream wall with subtle green tint, elegant minimal composition, premium cosmetic advertisement photography, high quality, detailed",
  },
  {
    file: "product-toner.png",
    size: "1024x1024",
    prompt:
      "Luxury skincare product photography, tall elegant clear glass toner bottle with deep forest green collar cap and a blank minimal white label, water droplets on glass, on a rippled water surface reflection, cream and soft sage green background, fresh green leaf floating nearby, soft warm lighting, premium cosmetic advertisement style, elegant minimal, high quality, detailed",
  },
  {
    file: "silk-texture.png",
    size: "1440x768",
    prompt:
      "Macro photography of flowing emerald green silk fabric waves, elegant luxurious smooth texture, soft light with gentle shadows, deep forest green and fresh leaf green tones, abstract elegant botanical background, high quality, detailed",
  },
];

async function main() {
  const zai = await ZAI.create();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const CONCURRENCY = 3;
  let index = 0;
  let done = 0;

  async function worker(id: number) {
    while (index < TASKS.length) {
      const task = TASKS[index++];
      const outPath = path.join(OUT_DIR, task.file);
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
          console.log(`[worker ${id}] OK ${task.file}`);
          done++;
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
  console.log(`DONE. generated=${done}/${TASKS.length}`);
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
