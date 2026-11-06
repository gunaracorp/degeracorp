import fs from "fs";
import path from "path";

const OUT_DIR = "/tmp/ig-photos";
fs.mkdirSync(OUT_DIR, { recursive: true });

// [nama-file, url] — dari og:image & DOM IG
const FILES: Array<[string, string]> = [
  ["umroh-makkah-640.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t39.30808-6/515067443_24361193330145641_6449144838623271061_n.jpg?stp=c144.0.432.432a_dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=kcdineHFYHUQ7kNvwGeUSgd&_nc_oc=Ado_1QNnUWIIPz2lzqZPdYRCylgIOkyFSnLBMkKhe-KpbfYucUgOYRK8wrMCAzArYM0&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=IDUqfTJ0ACvKfE0wmCG-gQ&_nc_ss=7f689&oh=00_AQRWBbnrp3TRV85jy1r6PxPj-0PI6hAKYBRzb6HZeBdkZQ&oe=6AF37C2A"],
  ["korea-starfield-640.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t39.30808-6/514408140_24361152666816374_2713807296825617462_n.jpg?stp=c192.0.576.576a_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=82nLnW8mZdMQ7kNvwFfcShb&_nc_oc=AdqAvQng3s9OntN8XN1ndKPlUhgqprme2MVSd1wRd8SqmahZ5mBZ5uAZC1Wa8bSovkU&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=hctuvlytHDeEzCWmnFXQ_Q&_nc_ss=7f689&oh=00_AQRHt-8VZ-cX1an1O68ZRAN11MifLYmmi_mxYSH-mP7Y7A&oe=6AF372AA"],
  ["april2019-hotel-640.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/639575442_18560514307010493_8079425527173256400_n.jpg?stp=c172.0.519.518a_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=IKSxiaCxxrgQ7kNvwFsvSAW&_nc_oc=AdqmYdtqfwIBV_2Z-_V6j2G37FWFljEzupU9MLcCfPpg6KqyAsyGHNR4UCqwugvpz7o&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=wkY9IQESjtMBKRMDRzZsIw&_nc_ss=7f689&oh=00_AQS6yyFFfyWZ78zg_zKOP448MmBzFt9QBYoaNni3PVrVZA&oe=6AF35D61"],
  ["april2019-unud-640.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-15/627528414_18325880971217050_6806258548622272831_n.jpg?stp=c162.0.486.486a_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=DiwGxTWqmEcQ7kNvwEyVLzA&_nc_oc=Adpu6XXkMvstPqjALeWvJew0AwPEgZfa9EtYjH8OkaYKghhRvFymj4VKdbA1g-F0pOM&_nc_zt=23&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=50tWN2CfuWYXnPdSvxhFsQ&_nc_ss=7f689&oh=00_AQQ5Vth72WzLpo9QDf_jdCAdHqK4yu8WBjGdm8fh_zg5IQ&oe=6AF38A70"],
  // carousel testimoni — full res (tanpa crop)
  ["testimoni-1-full.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-15/587518754_18539743303044759_8320209664660626197_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzc3NjkxMTk2MzIwMTk2MjAxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8l30hI_puz0Q7kNvwGNmgjj&_nc_oc=Adp1YZlcGKmLx_qgUBf9kkroRFlqKj7gfy4oEjIKsKQ_jpaczCNW-OU0TXyfJKHEc-Q&_nc_zt=23&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQR2QhmE6Bm49C5JuRVc9F_432zec5e6Oq34Hl1IwOpVng&oe=6AF35C88"],
  ["testimoni-2-full.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/587617905_18539743333044759_2763520801213703890_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_ZYdnqVWpdcQ7kNvwG28x5R&_nc_oc=AdpcI2au-v5Mp7HI0L5HAdMnF1ckXXBqJxon551CjmZJ9smBkBl-zVGGwEK-yl9WEr4&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQT6Spb55FvStpBKEmfMZBWDq-XqGkfNyzNHTT3YCziJiw&oe=6AF37DB8"],
  // more posts (thumbnails 640)
  ["more-1-clips.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/881797863_18641452192044759_2197509356751770839_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=bK1Qg4jfr4AQ7kNvwE-EIqy&_nc_oc=AdqtGt_ho27A1C2EzHb7o7cZdBPuEH8yqk9KlCfNaEjUx09BwDoIEfZlpJ8eUbROmew&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQRZLggXiAmMCessh57bBEjlkQPxDgzmH09zIFyZquawNw&oe=6AF37F6A"],
  ["more-2-clips.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-15/881345126_18641178265044759_5492736696608232060_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=gPuwEVnQTa8Q7kNvwG-Qf78&_nc_oc=AdpqwWhrD0EK8teJLv4Pbw72NVbWikeyVzO4Jh7l0WjNjb7uwtujKiqW-IkdQ5IvUQ4&_nc_zt=23&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQTlbGp760bqZB3JYJPGN4bV4TruJ9Nf4oTD5YbSY2bGIw&oe=6AF3587C"],
  ["more-3-clips.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.71878-15/886881895_2527615370977435_1690234243741455364_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=ttHxbsTx01cQ7kNvwGn3HPv&_nc_oc=AdrPp6nzgCtQwSmgEKCCEOIwd4COUrHE-hJxIgJQVLZ07EsRBhx4Yq3djfA1NO4MMHk&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQQyW3-GaN7H6p5OZqLQZU4-vXvLQFjIvS-XLxeSAqUTYQ&oe=6AF36626"],
  ["more-4-carousel.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-15/876265966_18640456303044759_1313305624263022379_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=M3MVJWhOdw0Q7kNvwH7RLBx&_nc_oc=Adr6T2bcrL4Rud5LA4-FnEmPvpW84XXXgVY5odRXgYWonK1MypLEpgRfbJ5YdOEMKSw&_nc_zt=23&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQQFd4C6TvoBbd7T6f3d26J0pxgHY5Aya6DHyHQx738FKQ&oe=6AF3876A"],
  ["more-5-carousel.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/877612929_18640017580044759_711340480313972540_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=z2gFUcxwXJMQ7kNvwGipULh&_nc_oc=AdrgUWMLmQ54oVW2z1ajGQ_PwJD9Gp3AYPL_1Cqu6z8uOB3PmY9txY9JffKL99cHU7c&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQQD4bWoe5RElgGCKgyRhW-QwLxbKJtEAe6rYhjSnNC6LQ&oe=6AF3807B"],
  ["more-6-carousel.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/863494556_18639575626044759_7179761527398990594_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=bROHEwRxMBsQ7kNvwEftxcF&_nc_oc=AdqsRw-w6UMlg7iZtAKTVzj5tSW1inc0dOwE4v6kU33RbQ1zm-wgT_aterQezBItYbE&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQTEgTCqcC-vq2giQC5z7EXJC53ALL3k_tn8lblRArLVhQ&oe=6AF37624"],
  ["more-7-carousel.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-15/870398393_18639235441044759_7673887920827806455_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=aYKpv9a4KC4Q7kNvwHUEvq-&_nc_oc=Adrb23BIivvV_vmpM1kvJYK4X6hu3qs1dc3mzDRTBIJtHw3DYnc14GMAU052PBy0_vo&_nc_zt=23&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQQNMUWBj29yeSLvETUv845OGZ16emx2Y1k1FbK-u0ZzAQ&oe=6AF35EE8"],
  ["more-8-carousel.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/874491972_18638870206044759_1551284044229876435_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=i6PhaJMO0gkQ7kNvwHw5pwD&_nc_oc=Adro6krL-6pRca6B1LxzGhsgNNQZhKumG5iPTrR8sZ36s8mJWTLuPUb9QA1eX2KKkms&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQRT9nM3xqtyl4p3oG-Mcryn4v0xij2DHVfSKAv6U6UPtw&oe=6AF3876D"],
  ["more-9-carousel.jpg", "https://scontent-hkg4-1.cdninstagram.com/v/t51.82787-15/877223283_18638531497044759_2164629261255550210_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=CwrDFEptJ8YQ7kNvwG2E7oU&_nc_oc=AdoOZoxmr8tShvV1LKge3afC2TUjV_7Rp3GT4mT6BnmjO0RzloCklf8ydt_NyaCFI-k&_nc_zt=23&_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQRQsdx-bIN0rzmgs0muVUYHDWlT84Psso3uX7wfXSVPZA&oe=6AF3890E"],
  // profil pics
  ["profil-dr-fatri-150.jpg", "https://scontent-hkg1-1.cdninstagram.com/v/t51.82787-19/831641287_18629499901044759_8428936657769881535_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ig_cache_key=GMfWkTEX6PFzbi9CAL9fpFg7mfl0bmNDAQAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45NDYuQzMifQ%3D%3D&_nc_ohc=Dil4g27VuR4Q7kNvwFiXrL9&_nc_oc=AdotD4MgHe9WPajJgq7udReJyySwsd5b5Hac1NCmPLL5b4KIyL7Fr59HG_w21MfRqU8&_nc_zt=24&_nc_ht=scontent-hkg1-1.cdninstagram.com&_nc_gid=bQbbMcj0bs25h3_vPng-fg&_nc_ss=7f689&oh=00_AQTb9Qv0oQbil9bdCLDZqDvgu42isCV3G9mee6cR04PO8g&oe=6AF36F3C"],
];

// koreksi URL more-5 (typo saat menulis: AdrgUWMLmQ54oVW2z1ajGQ → seharusnya sesuai asli)
async function download(name: string, url: string) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) {
      console.log(`FAIL ${name}: HTTP ${res.status}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) {
      console.log(`FAIL ${name}: too small (${buf.length}b)`);
      return;
    }
    fs.writeFileSync(path.join(OUT_DIR, name), buf);
    console.log(`OK   ${name}: ${(buf.length / 1024).toFixed(0)} KB`);
  } catch (e) {
    console.log(`FAIL ${name}: ${(e as Error).message}`);
  }
}

async function main() {
  for (const [name, url] of FILES) {
    await download(name, url);
  }
  console.log("DONE");
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
