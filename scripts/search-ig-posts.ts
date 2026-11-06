import ZAI from "z-ai-web-dev-sdk";

async function main() {
  const zai = await ZAI.create();
  const queries = [
    "dr.fatriidana instagram post",
    "site:instagram.com dr.fatriidana",
    "Fatri Idana instagram korea",
    "Fatri Idana umroh makkah instagram",
    "instagram.com/p dr.fatriidana",
  ];
  for (const q of queries) {
    try {
      console.log(`\n===== QUERY: ${q} =====`);
      const res = (await zai.functions.invoke("web_search", {
        query: q,
        num: 10,
      })) as Array<{ url: string; name: string; snippet: string }>;
      for (const r of res ?? []) {
        console.log(`URL: ${r.url}`);
        console.log(`   ${r.name}`);
        console.log(`   ${(r.snippet ?? "").slice(0, 220)}`);
      }
    } catch (e) {
      console.error(`search failed for "${q}":`, (e as Error).message);
    }
  }
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
