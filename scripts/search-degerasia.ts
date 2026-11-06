import ZAI from "z-ai-web-dev-sdk";

async function main() {
  const zai = await ZAI.create();
  const queries = [
    "dr Fatri Idana instagram klinik Degerasia Sumbawa",
    "klinikdegerasiasumbawa instagram dr fatri",
  ];
  for (const q of queries) {
    try {
      console.log(`\n===== QUERY: ${q} =====`);
      const res = await zai.functions.invoke("web_search", {
        query: q,
        num: 10,
      });
      const out = JSON.stringify(res, null, 2);
      console.log(out.slice(0, 4000));
    } catch (e) {
      console.error(`search failed for "${q}":`, (e as Error).message);
    }
  }
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
