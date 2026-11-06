import ZAI from "z-ai-web-dev-sdk";

const GOTO_URLS = [
  // (label, url) — hasil web_search
  ["umroh-makkah-des2024-a", "https://www.google.com/goto?url=CAESZAHEIkXXC-s0naOmkKVVuwgYOvCZ-FwpoPEpfm57G5IeqidzgNU0AYEsIpC3xDOtjm7_KN3p5gBjI_h9wVRyYc-nNr66utW4xMedG6vEMiE9K2Y0UdvHAi7M8QTRAltwMzfiHII"],
  ["umroh-makkah-des2024-b", "https://www.google.com/goto?url=CAESZQHEIkXXbmnjToDEDQ1LzZ_Xo1lDPNUyvkcb64uuHTG8CvhGR9XriXSi9byNT00XcomcasHkd4Qk4giohicobfYZfbmxGvi2ddD4fJ8D_kkdYiGj54c7TWJb1n7Nr1o6o-B0WJ4Y&gsessionid=gtLgEAJITI9ZsaXMGMNppiHu7dTMxN2VJVNi9jpE9ReiAn7G980E_w"],
  ["umroh-des2025", "https://www.google.com/goto?url=CAESZwHEIkXXcEaErw3CYsrIt-YdtsJOSeAVwIWOQEB6gOUGATOngE0nK8gAxLBi2SsepP5gx19D8JEIq0_RMOSTbSPwiRjlF0oMZs_eOmN88Z89t8VwvRvthtx0OhBsxSw3TeUW4Zio2TA"],
  ["korea-starfield", "https://www.google.com/goto?url=CAESZQHEIkXX2rubnSAV-VbEJNPJW-QLpTZ7ElMEf8fpbKVYFk9sRLhBLug1YgtgAfuJqpk6nwlbcyhz-71GlZhbhNIzdiv8PdYep_F0J2XdeVpvdDfe3vNaQSqsT5cBYR8A5Nu-5I4S&gsessionid=gtLgEAJITI9ZsaXMGMNppiHu7dTMxN2VJVNi9jpE9ReiAn7G980E_w"],
  ["taif-des2024-a", "https://www.google.com/goto?url=CAESaAHEIkXXxm2pWmtizumSG2vgHqTufWsekgbIbKfFvCPS21dK2W--lG0rN2N6gJeystOuo6QZOooBj-Po9ECCsTI9olD99erSX-sKrIjHkbu1n1RI86g8kzqYel1fnzzczPOpi8A0T1cq"],
  ["taif-des2024-b", "https://www.google.com/goto?url=CAESaAHEIkXXULHK4Hhtazwf4HKL_VerZpUDXdQGR_VKK069JaOANt2Ufs6jvTFp14QPHiENJS53miL4-hm4jvVLnZQ_8h3wu7IPq7dvvovQ-72hNl28iPFAk0j0pWtyQ5BPd5SZYqYxmq5i"],
  ["april2019-a", "https://www.google.com/goto?url=CAESZQHEIkXXQUf4BTPU7NE53wfh4iYedQ0EgziTIWVatFk_kQqqoVbJyOMaULaNYmOxDtnX9ZZmJ1kBYZ0YinncI8neU4bfpAbyJi0_EDhYrTRaNk-tjplMAIdHn49vlCdyy421nF4U"],
  ["april2019-b", "https://www.google.com/goto?url=CAESZQHEIkXXZvKKozUPSxnc6pvioDUGAf25gsjTU_TLfI7kjCLLXYeKHiHL-oJb0t09Ekf2BNf_TCKxgU1HHbjE5PUqKkD05hKsHzRP0qAKl_1b9Zodnb9DoWqOhAbTuiuMrKYVs2G8"],
  ["testimoni-skincare", "https://www.google.com/goto?url=CAESZQHEIkXXtPiqmhwUKVRcexUYzpvNiOjZ9L454IY6cT9l7shzPhvT50jE7h0DaHavro0Y-xnAOarLm4AZTavuxXGMJhUjR7ZsdmH6hDLo_eXic7FcNk9mDNCBB-NEwdhpzTvoYnrB"],
];

async function resolve(label: string, url: string) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      signal: AbortSignal.timeout(20000),
    });
    console.log(`${label} => ${res.url}`);
  } catch (e) {
    console.log(`${label} => ERROR ${(e as Error).message}`);
  }
}

async function main() {
  for (const [label, url] of GOTO_URLS) {
    await resolve(label, url);
    await new Promise((r) => setTimeout(r, 400));
  }
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
