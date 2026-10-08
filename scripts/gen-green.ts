import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT_DIR = "/home/z/my-project/public/images";

/** Regenerasi potret dokter agar serasi dengan tema hijau DEGERASIA. */
const TASKS: Array<{ file: string; size: string; prompt: string }> = [
  {
    file: "hero-portrait.png",
    size: "768x1344",
    prompt:
      "Professional editorial portrait photograph of an elegant Indonesian female aesthetic doctor in her early 40s, warm confident subtle smile, wearing an immaculate white doctor coat over a deep emerald green silk blouse, luxurious beauty clinic background softly blurred with sage green walls and emerald velvet accents, soft daylight rim lighting on her hair, glowing flawless skin, high-end fashion magazine photography, luxury aesthetic, sharp focus on face, professional color grading with fresh green tones, high quality, detailed",
  },
  {
    file: "about-doctor.png",
    size: "864x1152",
    prompt:
      "Editorial photograph of an elegant Indonesian female doctor wearing a white coat, standing confidently in a luxury aesthetic clinic hallway with arched windows and soft daylight, holding a clipboard, sage green walls with brass gold accents, potted tropical green plants, minimalist luxury medical spa ambiance, professional photography, fresh botanical green and ivory color palette, high quality, detailed",
  },
];

async function main() {
  const zai = await ZAI.create();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const task of TASKS) {
    const outPath = path.join(OUT_DIR, task.file);
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        console.log(`generating ${task.file} (${task.size}) attempt ${attempt}`);
        const res = await zai.images.generations.create({
          prompt: task.prompt,
          size: task.size,
        });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error("empty base64 response");
        fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
        console.log(`OK ${task.file} (${Math.round(b64.length / 1024)}KB b64)`);
        ok = true;
      } catch (err) {
        console.error(`FAIL ${task.file} attempt ${attempt}:`, (err as Error).message);
        if (attempt < 3) await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
    if (!ok) process.exitCode = 1;
  }
  console.log("DONE.");
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
