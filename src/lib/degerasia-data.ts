/**
 * ─────────────────────────────────────────────────────────────
 *  DEGERASIA — Single Source of Truth (Data Tersentralisasi)
 *  Klinik Kecantikan & Anti-Aging — Sumbawa, NTB
 *  Data produk riil dari List Produk BPOM DEGERA (2022–2025)
 * ─────────────────────────────────────────────────────────────
 */

/* ── Tipe Data ─────────────────────────────────────────────── */

export interface SiteInfo {
  name: string;
  brand: string;
  tagline: string;
  doctorName: string;
  doctorTitle: string;
  phoneDisplay: string;
  whatsappUrl: string;
  facebookUrl: string;
  address: string;
  addressShort: string;
  landmark: string;
  hours: { day: string; time: string }[];
  waGreeting: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  signature: boolean;
  tagline: string;
  desc: string;
  benefits: string[];
  steps: { title: string; detail: string }[];
  duration: string;
  downtime: string;
  priceFrom: string;
  image: string;
  faq: ServiceFaq[];
}

export type ServiceCategory =
  | "Signature dr. Fatri"
  | "Perawatan Wajah & Kulit"
  | "Anti-Aging & Kontur";

export interface Product {
  slug: string;
  name: string;
  bpom: string;
  registered: string;
  category: ProductCategory;
  packaging: string;
  price: number;
  desc: string;
  usage: string;
  ingredients: string;
  image: string;
  badge?: string;
}

export type ProductCategory =
  | "Cleanser"
  | "Toner"
  | "Serum"
  | "Cream"
  | "Sunscreen"
  | "Istimewa";

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  author: string;
  sections: { heading: string; body: string[] }[];
}

export interface Testimonial {
  name: string;
  city: string;
  treatment: string;
  quote: string;
}

export interface Promo {
  title: string;
  subtitle: string;
  description: string;
  valid: string;
  slug: string;
  icon: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
  tag: string;
}

/* ── Info Situs & Kontak Riil ──────────────────────────────── */

export const SITE: SiteInfo = {
  name: "KLINIK DEGERASIA",
  brand: "DEGERASIA",
  tagline: "Seni & Sains Kecantikan Botani",
  doctorName: "Dr. Fatri Idana, M.Biomed., AAM",
  doctorTitle: "Senior Dokter Kecantikan · Founder Klinik Degerasia & Brand DEGERA",
  phoneDisplay: "+62 822-3600-0715",
  whatsappUrl: "https://wa.me/6282236000715",
  facebookUrl: "https://web.facebook.com/klinik.gerasia",
  address:
    "Jl. Sultan Kaharuddin, Dusun Sering, Desa Kerato, Kec. Unter Iwes, Kab. Sumbawa, Nusa Tenggara Barat 84316",
  addressShort: "Sumbawa, Nusa Tenggara Barat",
  landmark: "Di depan Masjid Sering / Perempatan Sering",
  hours: [
    { day: "Senin – Jumat", time: "09.00 – 17.00 WITA" },
    { day: "Sabtu", time: "09.00 – 15.00 WITA" },
    { day: "Minggu & Libur", time: "Dengan Perjanjian" },
  ],
  waGreeting:
    "Halo Klinik Degerasia, saya ingin berkonsultasi & melakukan reservasi perawatan. Terima kasih.",
};

export function waLink(message?: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message ?? SITE.waGreeting)}`;
}

/* ── Layanan (13 Tindakan) ─────────────────────────────────── */

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Signature dr. Fatri",
  "Perawatan Wajah & Kulit",
  "Anti-Aging & Kontur",
];

export const SERVICES: Service[] = [
  {
    slug: "f-silk-glow",
    name: "F-Silk Glow",
    category: "Signature dr. Fatri",
    signature: true,
    tagline: "Ritual glowing eksklusif yang dirancang langsung oleh dr. Fatri Idana.",
    desc: "F-Silk Glow adalah treatment andalan DEGERASIA yang memadukan gentle exfoliasi medis, infus nutrisi kulit, dan masker botani DEGERA dalam satu sesi mewah. Dirancang khusus oleh dr. Fatri untuk menghadirkan kulit sehalus sutra dengan sinar alami — tanpa downtime, cocok bahkan bagi pemula.",
    benefits: [
      "Kulit langsung tampak cerah dan glowing sejak sesi pertama",
      "Tekstur kulit lebih halus dan lembut seperti sutra",
      "Menyamarkan bekas jerawat dan noda ringan",
      "Hidrasi mendalam dengan bahan botani premium",
      "Aman untuk semua jenis kulit, tanpa downtime",
    ],
    steps: [
      { title: "Konsultasi & Analisis Kulit", detail: "dr. Fatri menganalisis kondisi kulit Anda untuk menentukan formula F-Silk Glow yang paling tepat." },
      { title: "Pembersihan Mendalam", detail: "Kulit dibersihkan dengan rangkaian DEGERA cleanser untuk menyiapkan kanvas sempurna." },
      { title: "Eksfoliasi Lembut Medis", detail: "Sel-sel kulit mati diangkat dengan formula eksfoliasi lembut yang aman." },
      { title: "Infus Nutrisi & Masker Botani", detail: "Serum DEGERA diinfuskan ke lapisan kulit, ditutup masker botani menenangkan." },
    ],
    duration: "± 75 menit",
    downtime: "Tidak ada",
    priceFrom: "Rp 350.000",
    image: "/images/service-facial.png",
    faq: [
      { q: "Apakah F-Silk Glow bisa langsung memancarkan efek glowing?", a: "Ya, mayoritas pasien merasakan kulit lebih cerah dan lembut segera setelah sesi pertama. Efek optimal tercapai setelah 3 sesi rutin." },
      { q: "Sesering apa sebaiknya menjalani treatment ini?", a: "Kami merekomendasikan 2–4 minggu sekali sebagai perawatan rutin, disesuaikan dengan kondisi kulit Anda." },
    ],
  },
  {
    slug: "f-peeling-pro",
    name: "F-Peeling Pro",
    category: "Signature dr. Fatri",
    signature: true,
    tagline: "Chemical peeling presisi untuk kulit yang diperbarui dari dalam.",
    desc: "F-Peeling Pro adalah chemical peeling medis dengan level keasaman yang dikalibrasi personal oleh dr. Fatri. Prosedur ini mengangkat lapisan kulit mati dan merangsang regenerasi sel baru sehingga kulit lebih halus, cerah, dan kencang. Efektif memperbaiki garis halus, keriput awal, pigmentasi tidak rata, hingga bekas jerawat — dapat dikerjakan pada wajah, leher, ketiak, dan lipatan paha.",
    benefits: [
      "Memperbarui sel kulit untuk tampilan lebih muda",
      "Memudarkan noda hitam, bekas jerawat, dan pigmentasi",
      "Menghaluskan tekstur dan menyamarkan pori besar",
      "Merangsang produksi kolagen alami",
      "Dapat disesuaikan levelnya untuk kulit sensitif",
    ],
    steps: [
      { title: "Evaluasi Tipe Kulit", detail: "Penentuan level peeling (light, medium) berdasarkan analisis dr. Fatri." },
      { title: "Degreasing", detail: "Permukaan kulit disiapkan agar larutan peeling merata menembus." },
      { title: "Aplikasi Larutan Peeling", detail: "Larutan medis diaplikasikan presisi dengan waktu kontrol ketat." },
      { title: "Netralisasi & Penenangan", detail: "Larutan dinetralkan, dilanjutkan soothing gel dan sunblock DEGERA." },
    ],
    duration: "± 45 menit",
    downtime: "1–5 hari (peeling ringan)",
    priceFrom: "Rp 450.000",
    image: "/images/service-peeling.png",
    faq: [
      { q: "Apakah kulit akan mengelupas banyak?", a: "Tergantung level peeling. Light peeling umumnya hampir tak terlihat; medium peeling mengalami pengelupasan halus 2–4 hari yang dapat ditutupi moisturizer." },
      { q: "Kapan boleh pakai makeup lagi?", a: "Setelah kulit selesai mengelupas, umumnya 3–5 hari. Kami sarankan makeup mineral yang aman." },
    ],
  },
  {
    slug: "f-plasma-rejuv",
    name: "F-Plasma Rejuv",
    category: "Signature dr. Fatri",
    signature: true,
    tagline: "Terapi plasma & PRP: memperbaiki kulit dengan kekuatan tubuh Anda sendiri.",
    desc: "F-Plasma Rejuv memanfaatkan platelet-rich plasma (PRP) dari darah Anda sendiri yang diolah menjadi kekuatan regenerasi kulit. Kombinasi microneedling dan PRP ini merangsang kolagen dari dalam — memperbaiki tekstur, bekas jerawat, kerutan, dan turgor kulit secara alami tanpa bahan asing.",
    benefits: [
      "Regenerasi kulit dengan bahan alami dari tubuh sendiri",
      "Memperbaiki bekas jerawat dan tekstur kasar",
      "Mengencangkan dan meremajakan kulit secara bertahap",
      "Merangsang kolagen & elastin dari dalam",
      "Hasil yang terus membaik hingga 3 bulan",
    ],
    steps: [
      { title: "Pengambilan Darah", detail: "Sampel darah kecil diambil dengan standar medis steril." },
      { title: "Sentrifugasi Plasma", detail: "Plasma kaya trombosit dipisahkan dengan sentrifuse medis." },
      { title: "Microneedling", detail: "Micro-channel dibuat pada kulit untuk penyerapan optimal." },
      { title: "Aplikasi PRP", detail: "Plasma emas diaplikasikan menembus ke lapisan dermis." },
    ],
    duration: "± 60 menit",
    downtime: "1–3 hari (kemerahan ringan)",
    priceFrom: "Rp 750.000",
    image: "/images/service-injection.png",
    faq: [
      { q: "Apakah prosedurnya menyakitkan?", a: "Kami mengaplikasikan krim biang numbing 30 menit sebelumnya sehingga nyeri minimal. Pasien umumnya hanya merasakan sensasi keringat dingin ringan." },
      { q: "Berapa sesi yang dibutuhkan?", a: "Untuk bekas jerawat: 3–4 sesi dengan jarak 4 minggu. Untuk rejuvenasi umum: 2–3 sesi sudah terasa signifikan." },
    ],
  },
  {
    slug: "f-lift-ultra",
    name: "F-Lift Ultra",
    category: "Signature dr. Fatri",
    signature: true,
    tagline: "Kombinasi thread & HIFU untuk pengencangan wajah tanpa bedah.",
    desc: "F-Lift Ultra adalah protokol lifting eksklusif DEGERASIA yang menggabungkan kekuatan thread lift biokompatibel dan HIFU (High-Intensity Focused Ultrasound). Hasilnya: kontur wajah terangkat, garis rahang tegas, dan efek V-shape alami — tanpa pisau bedah dan tanpa masa pemulihan panjang.",
    benefits: [
      "Efek lifting segera yang terus membaik 2–3 bulan",
      "Kontur V-shape dan garis rahang lebih tegas",
      "Merangsang kolagen baru secara berkelanjutan",
      "Tanpa operasi, tanpa luka besar",
      "Hasil bertahan 12–18 bulan",
    ],
    steps: [
      { title: "Pemetaan Area Lifting", detail: "dr. Fatri memetakan titik dan vektor pengangkatan sesuai anatomi wajah." },
      { title: "Anestesi Lokal", detail: "Area treatment dibiaskan agar prosedur nyaman." },
      { title: "Penempatan Thread", detail: "Thread PDO yang aman ditempatkan presisi di bawah kulit." },
      { title: "Finishing dengan HIFU", detail: "HIFU mengunci hasil dengan pengencangan pada lapisan SMAS." },
    ],
    duration: "± 90 menit",
    downtime: "2–7 hari (bengkak ringan)",
    priceFrom: "Rp 3.500.000",
    image: "/images/service-contour.png",
    faq: [
      { q: "Apakah hasilnya langsung terlihat?", a: "Ya, efek pengangkatan langsung terlihat setelah prosedur, lalu membaik maksimal pada bulan ke-2–3 seiring pembentukan kolagen baru." },
      { q: "Apakah thread perlu diambil kembali?", a: "Tidak. Thread PDO yang kami gunakan terdegradasi alami dalam 6–9 bulan, namun efek kolagennya bertahan jauh lebih lama." },
    ],
  },
  {
    slug: "signature-facial",
    name: "DEGERASIA Signature Facial",
    category: "Perawatan Wajah & Kulit",
    signature: false,
    tagline: "Facial medis mewah dengan sentuhan botani DEGERA.",
    desc: "Facial klasik dengan standar medis: pembersihan mendalam, ekstraksi higienis, pijatan limfatik, dan masker botani. Ritual 60 menit yang mengembalikan kesegaran kulit sekaligus relaksasi pikiran.",
    benefits: [
      "Mengangkat komedo dan kotoran membandel",
      "Melancarkan sirkulasi darah wajah",
      "Kulit bersih, segar, dan bercahaya",
      "Relaksasi otot wajah yang tegang",
    ],
    steps: [
      { title: "Double Cleansing", detail: "Pembersihan menyeluruh dengan rangkaian DEGERA." },
      { title: "Ekstraksi Higienis", detail: "Komedo dan blackhead diangkat dengan teknik steril." },
      { title: "Pijat Limfatik", detail: "Pijatan wajah meredakan bengkak dan menyegarkan." },
      { title: "Masker & Pelembap", detail: "Ditutup masker botani dan hidrasi DEGERA." },
    ],
    duration: "± 60 menit",
    downtime: "Tidak ada",
    priceFrom: "Rp 250.000",
    image: "/images/service-facial.png",
    faq: [
      { q: "Bisa sekamar berdua dengan teman?", a: "Bisa! Kami memiliki suite facial ganda — cocok untuk momen self-care bersama." },
    ],
  },
  {
    slug: "hydra-glow-booster",
    name: "Hydra Glow Skin Booster",
    category: "Perawatan Wajah & Kulit",
    signature: false,
    tagline: "Hidrasi mendalam hingga lapisan dermis untuk kulitkenyal kenyal.",
    desc: "Skin booster berbahan dasar hyaluronic acid non-crosslinked yang diinjeksikan mikro ke seluruh wajah. Hasilnya bukan sekadar lembap di permukaan, melainkan hidrasi sejati dari dalam: kulit kenyal, glowing, dan pori tampak halus.",
    benefits: [
      "Hidrasi ekstra dari lapisan dalam kulit",
      "Kulit lebih kenyal dan glowing",
      "Memperbaiki kulit kusam dan dehidrasi",
      "Menyamarkan pori dan garis halus",
    ],
    steps: [
      { title: "Numbing Cream", detail: "Krim biang diaplikasikan 20–30 menit." },
      { title: "Mikroinjeksi HA", detail: "Injeksi mikro titik-titik strategis di seluruh wajah." },
      { title: "Penenangan", detail: "Soothing masker untuk meredakan kemerahan." },
    ],
    duration: "± 45 menit",
    downtime: "1–2 hari (titik suntik kecil)",
    priceFrom: "Rp 1.200.000",
    image: "/images/service-injection.png",
    faq: [
      { q: "Berapa lama hasilnya bertahan?", a: "6–9 bulan. Perawatan lanjutan setiap 6 bulan menjaga efek optimal." },
    ],
  },
  {
    slug: "acne-solution",
    name: "DEGERA Acne Solution",
    category: "Perawatan Wajah & Kulit",
    signature: false,
    tagline: "Program komprehensif menangani jerawat dari akar penyebabnya.",
    desc: "Program medis holistik untuk kulit berjerawat: kombinasi tindakan klinik, produk DEGERA Acne Line (Acne Wash, Toner Acne, Milk Cleanser Acne), dan penyesuaian gaya hidup. Dengan pendekatan bertahap, jerawat diredakan, bekasnya diperbaiki, dan kulit kembali sehat.",
    benefits: [
      "Menekan aktivitas jerawat aktif secara medis",
      "Mencegah bekas dan flek hitam",
      "Memperbaiki tekstur kulit pasca-jerawat",
      "Homecare DEGERA yang konsisten dengan tindakan klinik",
    ],
    steps: [
      { title: "Konsultasi Akar Masalah", detail: "Analisis hormonal, gaya hidup, dan kondisi kulit." },
      { title: "Tindakan Klinik", detail: "Komedo ekstraksi medis dan/atau peeling jerawat." },
      { title: "Homecare DEGERA", detail: "Rangkaian Acne Line dirumuskan khusus untuk kulit berjerawat." },
      { title: "Evaluasi Berkala", detail: "Progress di-monitor tiap 2–4 minggu oleh dr. Fatri." },
    ],
    duration: "Program 4–12 minggu",
    downtime: "Sesuai tindakan",
    priceFrom: "Rp 550.000",
    image: "/images/treatment-moment.png",
    faq: [
      { q: "Apakah harus beli produk DEGERA juga?", a: "Kami sangat menyarankan, karena konsistensi homecare menentukan 60% keberhasilan program. Produk dapat dipilih sesuai budget." },
    ],
  },
  {
    slug: "brightening-program",
    name: "Brightening & Pigmentation",
    category: "Perawatan Wajah & Kulit",
    signature: false,
    tagline: "Mencerahkan dengan aman, menyamarkan noda secara medis.",
    desc: "Program pencerahan bertahap untuk melasma, flek hitam, dan kulit kusam: kombinasi laser lembut, mesotherapy pencerah, skincare aktif, dan proteksi matahari. Semua dengan protokol aman untuk kulit tropis Indonesia.",
    benefits: [
      "Memudarkan melasma dan flek hitam bertahap",
      "Mencerahkan tone kulit merata",
      "Mencegah pigmentasi kambuh",
      "Protokol aman untuk iklim tropis",
    ],
    steps: [
      { title: "Analisis Pigmentasi", detail: "Identifikasi kedalaman dan tipe noda." },
      { title: "Tindakan Klinik", detail: "Laser / mesotherapy / peeling sesuai indikasi." },
      { title: "Skincare Aktif", detail: "Serum dan night cream DEGERA dengan bahan pencerah." },
      { title: "Sun Protection", detail: "Edukasi dan sunscreen DEGERA wajib." },
    ],
    duration: "Program 6–12 minggu",
    downtime: "Minimal",
    priceFrom: "Rp 650.000",
    image: "/images/service-peeling.png",
    faq: [
      { q: "Apakah melasma bisa hilang total?", a: "Melasma bersifat kronis — kami berupaya memudarkannya signifikan dan menjaganya stabil, bukan sekadar perbaikan sesaat." },
    ],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Perawatan Wajah & Kulit",
    signature: false,
    tagline: "Bebas dari bulu tak diinginkan dengan laser yang nyaman.",
    desc: "Penghilangan bulu permanen jangka panjang dengan teknologi laser yang dilengkapi pendingin kulit sehingga nyaman bahkan untuk area sensitif. Cocok untuk wajah, ketiak, kaki, tangan, dan area kewanitaan.",
    benefits: [
      "Penurunan pertumbuhan bulu jangka panjang",
      "Tidak ada iritasi seperti mencukur/waxing",
      "Nyaman dengan sistem pendingin",
      "Cocok untuk berbagai area tubuh",
    ],
    steps: [
      { title: "Cukur Area", detail: "Area treatment dicukur bersih sebelum sesi." },
      { title: "Aplikasi Laser", detail: "Laser diarahkan menyeluruh dengan pendinginan." },
      { title: "Soothing Gel", detail: "Gel penenangan dan instruksi perawatan pasca." },
    ],
    duration: "15–60 menit",
    downtime: "Tidak ada",
    priceFrom: "Rp 300.000",
    image: "/images/service-laser.png",
    faq: [
      { q: "Berapa sesi sampai bulu berhenti tumbuh?", a: "Umumnya 6–8 sesi dengan jarak 4–6 minggu untuk hasil optimal, karena siklus tumbuh bulu bertahap." },
    ],
  },
  {
    slug: "botox",
    name: "Botox & Anti-Wrinkle",
    category: "Anti-Aging & Kontur",
    signature: false,
    tagline: "Haluskan garis ekspresi, tampil segar tetap natural.",
    desc: "Injeksi botulinum toxin berteknologi terkini untuk merelaksasi garis ekspresi: dahi, sekitar mata, dan sekitar mulut. Dosis presisi dr. Fatri menjaga ekspresi tetap hidup — tidak kaku, tidak aneh, cukup segar dan bersih.",
    benefits: [
      "Menghaluskan kerutan dahi dan crow's feet",
      "Efek mulai terlihat 3–7 hari, penuh 2 minggu",
      "Dosis presisi — ekspresi tetap natural",
      "Mencegah kerutan lebih dalam di masa depan",
    ],
    steps: [
      { title: "Analisis Ekspresi", detail: "Pemetaan otot saat bergerak agar hasil natural." },
      { title: "Injeksi Presisi", detail: "Suntikan mikro dengan dosis terukur." },
      { title: "Instruksi Pasca", detail: "Edukasi posisi tidur & larangan 4 jam pertama." },
    ],
    duration: "± 30 menit",
    downtime: "Tidak ada",
    priceFrom: "Rp 900.000",
    image: "/images/service-injection.png",
    faq: [
      { q: "Berapa lama bertahan?", a: "4–6 bulan. Pengulangan rutin membuat efek semakin efisien karena otot 'terlatih' rileks." },
      { q: "Apakah wajah jadi kaku?", a: "Tidak, jika dosis dan titiknya tepat. Ini keahlian dr. Fatri: hasil fresh tanpa ekspresi beku." },
    ],
  },
  {
    slug: "dermal-filler",
    name: "Dermal Filler & Kontur",
    category: "Anti-Aging & Kontur",
    signature: false,
    tagline: "Bentuk bibir, dagu, dan pipi sesuai rasio kecantikan Anda.",
    desc: "Dermal filler hyaluronic acid premium untuk menambah volume dan membentuk kontur: bibir fuller alami, dagu lebih tegas, pipi proporsional, serta mengoreksi wajah asimetris. Semua dihitung dengan rasio estetika personal.",
    benefits: [
      "Bibir fuller dengan hasil natural",
      "Dagu dan garis rahang lebih tegas",
      "Koreksi asimetri wajah",
      "Hasil instan dan bertahan 9–18 bulan",
    ],
    steps: [
      { title: "Desain Kontur", detail: "Simulasi dan diskusi bentuk yang Anda inginkan." },
      { title: "Anestesi", detail: "Krim numbing atau blok kecil untuk kenyamanan." },
      { title: "Injeksi Filler", detail: "Teknik kanula/needle sesuai area, presisi per layer." },
      { title: "Evaluasi Hasil", detail: "Cek simetri dan koreksi final di tempat." },
    ],
    duration: "± 45 menit",
    downtime: "1–3 hari (bengkak ringan)",
    priceFrom: "Rp 1.500.000",
    image: "/images/service-contour.png",
    faq: [
      { q: "Apakah bibir akan terlihat 'over'?", a: "Tidak — prinsip kami adalah natural enhancement. Anda bisa mulai 0.5–1 ml lalu evaluasi." },
      { q: "Apakah filler bisa dilepas?", a: "Ya, filler HA dapat dilarutkan dengan enzim hialuronidase bila diperlukan." },
    ],
  },
  {
    slug: "thread-lift",
    name: "Thread Lift",
    category: "Anti-Aging & Kontur",
    signature: false,
    tagline: "Pengangkatan wajah instan tanpa pisau bedah.",
    desc: "Thread lift menggunakan benang PDO yang ditempatkan di bawah kulit untuk mengangkat jaringan yang mengendur sekaligus merangsang kolagen. Efek lifting terlihat segera dan membaik seiring waktu.",
    benefits: [
      "Efek terangkat langsung setelah prosedur",
      "Merangsang produksi kolagen sendiri",
      "Alternatif mini face-lift tanpa operasi",
      "Hasil bertahan 12–18 bulan",
    ],
    steps: [
      { title: "Pemetaan Vektor", detail: "Arah pengangkatan disesuaikan anatomi." },
      { title: "Anestesi Lokal", detail: "Area kerja dibiaskan penuh." },
      { title: "Penempatan Thread", detail: "Thread dimasukkan dan dikunci presisi." },
    ],
    duration: "± 60 menit",
    downtime: "3–7 hari",
    priceFrom: "Rp 2.500.000",
    image: "/images/service-contour.png",
    faq: [
      { q: "Apakah ada bekas luka?", a: "Tidak ada bekas — hanya titik masuk jarum kecil yang sembuh beberapa hari." },
    ],
  },
  {
    slug: "hifu-lifting",
    name: "HIFU Ultra Lifting",
    category: "Anti-Aging & Kontur",
    signature: false,
    tagline: "Ultrasound fokus yang mengencangkan dari lapisan SMAS.",
    desc: "HIFU menembus energi ultrasound tepat ke lapisan SMAS — lapisan yang diangkat dalam operasi facelift — tanpa melukai permukaan. Satu sesi memberi efek pengencangan progresif hingga 3 bulan.",
    benefits: [
      "Pengencangan dari lapisan terdalam",
      "Sesi tunggal dengan hasil progresif",
      "Tidak ada jeda aktivitas sama sekali",
      "Efektif untuk wajah & leher",
    ],
    steps: [
      { title: "Pemetaan Treatment", detail: "Grid area diwajah dan leher." },
      { title: "Penembakan HIFU", detail: "Energi diarahkan ke kedalaman SMAS." },
      { title: "Selesai & Aktivitas Normal", detail: "Langsung bisa beraktivitas seperti biasa." },
    ],
    duration: "± 60–90 menit",
    downtime: "Tidak ada",
    priceFrom: "Rp 1.800.000",
    image: "/images/service-laser.png",
    faq: [
      { q: "Kapan hasilnya terlihat maksimal?", a: "Sedikit terasa setelah sesi, optimal pada bulan ke-2–3 seiring pembentukan kolagen baru." },
    ],
  },
];

/* ── Produk DEGERA (21 Produk BPOM Riil) ───────────────────── */

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Cleanser",
  "Toner",
  "Serum",
  "Cream",
  "Sunscreen",
  "Istimewa",
];

export const PRODUCTS: Product[] = [
  {
    slug: "bb-cream",
    name: "Degera BB Cream",
    bpom: "NA18220300328",
    registered: "2022",
    category: "Istimewa",
    packaging: "Botol 10 g / 15 g / 30 g",
    price: 85000,
    desc: "BB cream 2-in-1 yang merawat sambil menutupi. Perlindungan ringan dengan finish natural — kulit tampak sehat merata tanpa kesan tebal.",
    usage: "Aplikasikan secukupnya di wajah setelah moisturizer, ratakan merata.",
    ingredients: "Titanium Dioxide, Niacinamide, Vitamin E",
    image: "/images/degera-bbcream.png",
    badge: "Terlaris",
  },
  {
    slug: "jra-cream",
    name: "Degera J'Ra Cream",
    bpom: "NA18220106439",
    registered: "2022",
    category: "Cream",
    packaging: "Pot 12,5 g / 15 g",
    price: 55000,
    desc: "Cream siang formula J'Ra legendaris: mencerahkan, melembapkan, dan melindungi kulit dari polusi. Aroma botani khas yang menenangkan.",
    usage: "Gunakan tiap pagi setelah toner, di area wajah dan leher.",
    ingredients: "Niacinamide, Rice Extract, Allantoin",
    image: "/images/degera-cream.png",
    badge: "Favorit",
  },
  {
    slug: "sunscreen-free-oily",
    name: "Degera Sunscreen Free Oily",
    bpom: "NA18221701115",
    registered: "2022",
    category: "Sunscreen",
    packaging: "Pot 12,5 g / 15 g",
    price: 55000,
    desc: "Dirancang khusus kulit berminyak: oil-free, matte finish, dan tidak menyumbat pori. Perlindungan UV penuh tanpa rasa lengket.",
    usage: "Aplikasikan tiap pagi dan ulangi setiap 3–4 jam saat aktivitas luar ruangan.",
    ingredients: "Octinoxate, Zinc Oxide, Niacinamide",
    image: "/images/degera-sunscreen.png",
  },
  {
    slug: "milk-cleanser",
    name: "Degera Milk Cleanser",
    bpom: "NA18221204376",
    registered: "2022",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Cleanser susu lembut yang melarutkan makeup dan kotoran tanpa merusak moisture barrier. Sensasi lembut seperti perawatan spa.",
    usage: "Oleskan pada wajah kering, pijat lembut, bilas atau angkat dengan kapas.",
    ingredients: "Milk Protein, Glycerin, Aloe Vera",
    image: "/images/degera-cleanser.png",
  },
  {
    slug: "aha-cleanser-cair",
    name: "Degera AHA Cleanser Cair",
    bpom: "NA18221204379",
    registered: "2022",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Pembersih dengan AHA lembut yang mengeksfoliasi saat mencuci — tekstur kulit lebih halus dan tone merata sejak pemakaian rutin.",
    usage: "Gunakan 1–2x sehari, pijat 30–60 detik lalu bilas.",
    ingredients: "Glycolic Acid, Lactic Acid, Glycerin",
    image: "/images/degera-cleanser.png",
  },
  {
    slug: "toner-2-in-1",
    name: "Degera Toner 2 IN 1",
    bpom: "NA18221204375",
    registered: "2022",
    category: "Toner",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Dua fungsi dalam satu botol: menyeimbangkan pH setelah cuci muka sekaligus mengecilkan tampilan pori. Dasar sempurna sebelum serum.",
    usage: "Tuang di kapas, tepuk lembut ke wajah setelah membersihkan.",
    ingredients: "Witch Hazel, Niacinamide, Panthenol",
    image: "/images/degera-toner.png",
  },
  {
    slug: "cleanser-gel",
    name: "Degera Cleanser Gel",
    bpom: "NA18221204954",
    registered: "2022",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Gel pembersih segar yang mengangkat minyak berlebih tanpa membuat kulit tertarik-ketarik. Ideal untuk kulit kombinasi dan berminyak.",
    usage: "Gunakan pagi dan malam, bilas dengan air hangat.",
    ingredients: "Salicylic Acid, Tea Tree, Glycerin",
    image: "/images/degera-cleanser.png",
  },
  {
    slug: "serum-gold",
    name: "Degera Serum Gold",
    bpom: "NA18222000387",
    registered: "2022",
    category: "Serum",
    packaging: "Botol 15 mL / 20 mL",
    price: 120000,
    desc: "Mahakarya DEGERA: serum emas dengan peptida dan antioksidan premium yang memperbaiki kulit semalaman. Bangun dengan kulit lebih kenyal dan berkilau sehat.",
    usage: "Teteskan 3–4 tetes di malam hari setelah toner, tepuk hingga menyerap.",
    ingredients: "Peptide Complex, Gold Colloid, Vitamin C",
    image: "/images/degera-serum.png",
    badge: "Premium",
  },
  {
    slug: "glowing-bb-cream",
    name: "Degera Glowing BB Cream",
    bpom: "NA18220300590",
    registered: "2022",
    category: "Istimewa",
    packaging: "Pot 10 g",
    price: 85000,
    desc: "Versi glowing dari BB cream ikonik kami — finish luminous dewy seperti baru selesai treatment di klinik. Coverage ringan yang terasa seperti tak ada.",
    usage: "Aplikasikan setelah skincare pagi, ratakan dengan spons atau jari.",
    ingredients: "Niacinamide, Mica, Vitamin E",
    image: "/images/degera-bbcream.png",
  },
  {
    slug: "toner-acne",
    name: "Degera Toner Acne",
    bpom: "NA18231206431",
    registered: "2023",
    category: "Toner",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Toner khusus kulit berjerawat dengan bahan anti-bakteri alami yang menenangkan kemerahan dan mencegah jerawat baru muncul.",
    usage: "Tepukkan dengan kapas pada area jerawat, 2x sehari.",
    ingredients: "Salicylic Acid, Tea Tree, Centella Asiatica",
    image: "/images/degera-toner.png",
  },
  {
    slug: "acne-wash",
    name: "Degera Acne Wash",
    bpom: "NA18231206432",
    registered: "2023",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Pembersih medis untuk kulit berjerawat aktif. Membersihkan bakteri penyebab jerawat sambil menjaga keseimbangan kulit.",
    usage: "Gunakan 2x sehari pada wajah yang lembap, bilas hingga bersih.",
    ingredients: "Salicylic Acid, Tea Tree Oil, Zinc PCA",
    image: "/images/degera-cleanser.png",
  },
  {
    slug: "milk-cleanser-acne",
    name: "Degera Milk Cleanser Acne",
    bpom: "NA18211204004",
    registered: "2024",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 55000,
    desc: "Untuk kulit berjerawat sekaligus kering: kelembutan susu yang membersihkan tanpa mengeringkan, diformulasikan aman untuk kulit sensitif.",
    usage: "Gunakan pada malam hari, ikuti dengan Toner Acne.",
    ingredients: "Milk Protein, Centella, Allantoin",
    image: "/images/degera-cleanser.png",
  },
  {
    slug: "sunblock-n",
    name: "Degera Sunblock N",
    bpom: "NA18241702963",
    registered: "2024",
    category: "Sunscreen",
    packaging: "Pot 10 g",
    price: 65000,
    desc: "Sunblock netral untuk semua jenis kulit dengan proteksi spektrum luas. Ringan, cepat serap, cocok sebagai lapisan terakhir skincare pagi.",
    usage: "Aplikasikan setiap pagi sebagai langkah terakhir.",
    ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E",
    image: "/images/degera-sunscreen.png",
  },
  {
    slug: "jra-night-cream",
    name: "Degera JRA Night Cream",
    bpom: "NA18240116611",
    registered: "2024",
    category: "Cream",
    packaging: "Pot 10 g",
    price: 65000,
    desc: "Formula malam J'Ra yang bekerja saat Anda tidur: memperbaiki, mencerahkan, dan meremajakan. Pagi hari kulit terasa lebih plump dan cerah.",
    usage: "Oleskan pada malam hari setelah serum.",
    ingredients: "Retinyl Palmitate, Niacinamide, Squalane",
    image: "/images/degera-nightcream.png",
  },
  {
    slug: "night-cream",
    name: "Degera Night Cream",
    bpom: "NA18240116613",
    registered: "2024",
    category: "Cream",
    packaging: "Pot 10 g",
    price: 75000,
    desc: "Night cream klasik DEGERA yang dipercaya ribuan pasien: nutrisi mendalam semalaman untuk kulit lembut, cerah, dan terawat.",
    usage: "Gunakan setiap malam setelah toner/serum.",
    ingredients: "Vitamin C, Collagen, Aloe Vera",
    image: "/images/degera-nightcream.png",
    badge: "Favorit",
  },
  {
    slug: "night-lotion-premium",
    name: "Degera Night Lotion Premium",
    bpom: "NA18240117037",
    registered: "2024",
    category: "Cream",
    packaging: "Botol 100 mL",
    price: 150000,
    desc: "Lotion malam premium dengan tekstur ringan namun nutrisi melimpah. Perawatan anti-aging menyeluruh untuk wajah dan leher.",
    usage: "Oleskan merata pada wajah dan leher tiap malam.",
    ingredients: "Peptide, Hyaluronic Acid, Ceramide",
    image: "/images/degera-lotion.png",
    badge: "Premium",
  },
  {
    slug: "facial-foam",
    name: "Degera Facial Foam",
    bpom: "NA18241209795",
    registered: "2024",
    category: "Cleanser",
    packaging: "Botol 100 mL",
    price: 85000,
    desc: "Busa lembut yang melimpah membersihkan hingga ke pori, meninggalkan rasa bersih segar tanpa kesan tertarik.",
    usage: "Bentuk busa dengan air, pijat wajah, bilas bersih.",
    ingredients: "Amino Acid Surfactant, Glycerin, Green Tea",
    image: "/images/degera-facialfoam.png",
  },
  {
    slug: "cleansing-toner",
    name: "Degera Cleansing Toner",
    bpom: "NA18241209796",
    registered: "2024",
    category: "Toner",
    packaging: "Botol 100 mL",
    price: 60000,
    desc: "Toner pembersih yang menyisir sisa makeup dan kotoran yang lolos — langkah terakhir pembersihan, sekaligus persiapan penyerapan maksimal.",
    usage: "Basahi kapas, usapkan lembut menyeluruh setelah cuci muka.",
    ingredients: "Cucumber Extract, Panthenol, Allantoin",
    image: "/images/degera-toner.png",
  },
  {
    slug: "body-whitening-premium",
    name: "Degera Body Whitening Premium",
    bpom: "NA18240117016",
    registered: "2024",
    category: "Istimewa",
    packaging: "Botol 100 mL",
    price: 75000,
    desc: "Lotion pencerah badan premium untuk kulit tubuh yang lebih cerah, lembut, dan beraroma botani mewah. Pilihan favorit pasien program glowing.",
    usage: "Aplikasikan pada badan setelah mandi, fokus area gelap.",
    ingredients: "Niacinamide, Kojic Acid, Shea Butter",
    image: "/images/degera-lotion.png",
  },
  {
    slug: "jra-serum",
    name: "Degera JRA Serum",
    bpom: "NA18250104738",
    registered: "2025",
    category: "Serum",
    packaging: "Botol 10 mL",
    price: 100000,
    desc: "Seri J'Ra terbaru: serum konsentrat dengan bahan aktif pencerah dan anti-aging dalam botol mungil. Perawatan intensif untuk area yang butuh fokus.",
    usage: "Teteskan pada area bermasalah atau seluruh wajah di malam hari.",
    ingredients: "Niacinamide, Peptide, Alpha Arbutin",
    image: "/images/degera-serum.png",
    badge: "Baru",
  },
  {
    slug: "sunscreen-moist",
    name: "Degera Sunscreen Moist",
    bpom: "NA18251700876",
    registered: "2025",
    category: "Sunscreen",
    packaging: "Pot 10 g",
    price: 65000,
    desc: "Untuk kulit kering dan normal: sunscreen dengan kelembapan ekstra yang membuat kulit tetap nyaman, sehat, dan bercahaya sepanjang hari.",
    usage: "Gunakan tiap pagi, ulangi setelah 3–4 jam.",
    ingredients: "Hyaluronic Acid, Zinc Oxide, Squalane",
    image: "/images/degera-sunscreen.png",
    badge: "Baru",
  },
];

/* ── Artikel / Journal ─────────────────────────────────────── */

export const ARTICLES: Article[] = [
  {
    slug: "urutan-skincare-malam",
    title: "Urutan Skincare Malam yang Benar: Panduan dari Dokter Kecantikan",
    category: "Edukasi Skincare",
    excerpt:
      "Rangkaian skincare yang bagus bisa sia-sia jika urutannya salah. dr. Fatri menjelaskan urutan malam yang benar beserta alasannya.",
    date: "2025-01-12",
    readTime: "6 menit",
    cover: "/images/article-skincare.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Mengapa Urutan Itu Penting",
        body: [
          "Kulit kita menyerap bahan aktif dengan aturan: yang paling tipis dulu, yang paling tebal belakangan. Ketika urutan terbalik — misalnya cream dipakai sebelum serum — molekul besar di cream akan 'mengunci' dan mencegah serum bekerja optimal.",
          "Prinsipnya sederhana: pembersihan → penyeimbangan → perbaikan (serum aktif) → pelembapan (cream) → perlindungan (jika pagi). Malam hari adalah saat regenerasi kulit puncak, sehingga produk perbaikan paling efektif diaplikasikan di sini.",
        ],
      },
      {
        heading: "Urutan Malam yang Kami Rekomendasikan",
        body: [
          "Langkah 1 — Makeup Remover / Cleansing: untuk pengguna makeup atau sunscreen tahan air, mulailah dengan cleansing oil atau Degera Milk Cleanser, lalu lanjut facial foam atau cleanser gel.",
          "Langkah 2 — Toner: Degera Toner 2 IN 1 menyeimbangkan pH yang tergeser setelah mencuci muka, sekaligus mempersiapkan kulit menyerap serum lebih baik.",
          "Langkah 3 — Serum Aktif: Di sinilah perbaikan terjadi. Degera Serum Gold dengan peptida untuk anti-aging, atau JRA Serum untuk pencerahan fokus. Tepuk lembut, tunggu 1–2 menit.",
          "Langkah 4 — Night Cream: Degera Night Cream atau Night Lotion Premium mengunci semua bahan aktif sebelumnya dan memberi nutrisi semalaman.",
        ],
      },
      {
        heading: "Kesalahan yang Saya Temui di Klinik",
        body: [
          "Kesalahan paling umum: terlalu banyak produk sekaligus. Kulit yang 'jenuh' akan bereaksi dengan iritasi atau jerawat. Mulailah minimalis — cleanser, toner, satu serum, night cream — lalu tambahkan bertahap.",
          "Kesalahan kedua: tidak konsisten. Bahan aktif bekerja dengan siklus regenerasi kulit 28 hari. Beri setiap produk waktu minimal 4–6 minggu sebelum menilai hasilnya.",
        ],
      },
      {
        heading: "Penutup",
        body: [
          "Skincare yang benar bukan soal produk termahal, melainkan urutan yang tepat dan konsistensi. Jika Anda ragu dengan kondisi kulit sendiri, konsultasi di klinik akan memangkas waktu pencobaan bertahun-tahun menjadi satu rencana yang jelas.",
        ],
      },
    ],
  },
  {
    slug: "sunscreen-investasi-kulit",
    title: "Sunscreen: Investasi Anti-Aging Paling Murah yang Sering Diabaikan",
    category: "Proteksi Kulit",
    excerpt:
      "80% penuaan kulit berasal dari paparan matahari. Inilah alasan mengapa sunscreen adalah produk paling penting di rak Anda.",
    date: "2025-01-28",
    readTime: "5 menit",
    cover: "/images/article-sunscreen.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Fakta yang Sering Mengagetkan Pasien",
        body: [
          "Dalam praktik sehari-hari, saya sering melihat pasien berinvestasi besar pada serum mahal dan treatment klinik, namun melewatkan sunscreen. Padahal radiasi UV adalah penyumbang 80–90% tanda penuaan terlihat: flek hitam, kerutan, kehilangan kenyal, hingga pembuluh darah pecah.",
          "UV ada di mana-mana — menembus awan, kaca jendela mobil, bahkan lampu ruangan tertentu. Di iklim tropis Indonesia dengan indeks UV tinggi sepanjang tahun, perlindungan harian bukan pilihan, melainkan kebutuhan.",
        ],
      },
      {
        heading: "Memilih Sunscreen yang Tepat",
        body: [
          "Untuk kulit berminyak: pilih formula oil-free dengan finish matte seperti Degera Sunscreen Free Oily. Untuk kulit kering: formula dengan pelembap seperti Degera Sunscreen Moist. Sunblock fisik (zinc oxide) lebih cocok untuk kulit sensitif.",
          "Yang penting bukan angka SPF semata, tetapi pemakaian yang cukup dan berulang. Dua jari penuh untuk wajah-leher, diulang setiap 3–4 jam saat beraktivitas di luar.",
        ],
      },
      {
        heading: "Sunscreen di Dalam Ruangan?",
        body: [
          "Ya, jika Anda dekat jendela atau bekerja di depan layar dalam durasi panjang. UVA menembus kaca. Kebiasaan sederhana: sunscreen pagi hari menjadi langkah terakhir yang tidak boleh dilewat, apa pun agenda Anda.",
        ],
      },
    ],
  },
  {
    slug: "mengenal-chemical-peeling",
    title: "Mengenal Chemical Peeling: Prosedur, Manfaat, dan Masa Pemulihan",
    category: "Treatment Klinik",
    excerpt:
      "Salah satu prosedur paling populer di klinik kecantikan — apa yang sebenarnya terjadi pada kulit Anda selama dan setelah peeling?",
    date: "2025-02-08",
    readTime: "7 menit",
    cover: "/images/article-peeling.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Apa Itu Chemical Peeling",
        body: [
          "Chemical peeling adalah prosedur mengangkat lapisan kulit mati menggunakan larutan asam terkontrol. Ketika lapisan lama terangkat, kulit merespons dengan memperbarui sel dan merangsang kolagen baru — inilah mengapa kulit tampak lebih cerah, halus, dan kencang setelahnya.",
          "Peeling berbagi level: light peeling (AHA ringan, tanpa downtime) untuk glow dan tekstur; medium peeling (TCA) untuk noda dan bekas jerawat; deep peeling jarang dilakukan dan hanya untuk kasus khusus.",
        ],
      },
      {
        heading: "Siapa yang Membutuhkan",
        body: [
          "Peeling efektif untuk: kulit kusam, tekstur kasar, bekas jerawat ringan-menengah, flek hitam, pori besar, dan garis halus awal. Pada DEGERASIA, protokol F-Peeling Pro dikalibrasi personal oleh dr. Fatri — level keasaman, jenis asam, dan durasi disesuaikan kondisi kulit Anda.",
          "Peeling juga dapat dikerjakan di luar wajah: leher, ketiak, dan lipatan paha untuk mencerahkan area yang sering tergesek.",
        ],
      },
      {
        heading: "Masa Pemulihan & Perawatan Pasca",
        body: [
          "Light peeling: hampir tanpa pengelupasan terlihat, bisa beraktivitas normal. Medium peeling: pengelupasan halus hari ke-2 hingga ke-5. Yang penting: jangan dicabut kulit yang mengelupas, hindari sinar matahari langsung, dan sunscreen wajib.",
          "Hindari bahan aktif keras (retinol, AHA/BHA lain) selama 5–7 hari pasca prosedur. Kami memberikan panduan tertulis lengkap setiap pasca treatment di klinik.",
        ],
      },
    ],
  },
  {
    slug: "botox-vs-filler",
    title: "Botox vs Filler: Mana yang Tepat untuk Kebutuhan Anda?",
    category: "Anti-Aging",
    excerpt:
      "Dua injeksi paling populer di dunia estetika sering tertukar. Kenali perbedaannya agar Anda tidak salah memilih treatment.",
    date: "2025-02-20",
    readTime: "6 menit",
    cover: "/images/article-botox.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Dua Bahan, Dua Tugas Berbeda",
        body: [
          "Botox (botulinum toxin) bekerja dengan merelaksasi otot. Tugasnya: menghaluskan garis ekspresi yang muncul saat otot bergerak — kerutan dahi, crow's feet di sudut mata, dan garis sekitar mulut.",
          "Filler (hyaluronic acid) bekerja dengan mengisi volume. Tugasnya: membentuk dan menambah — bibir fuller, dagu tegas, pipi proporsional, dan mengisi lekukan yang mengendors seiring usia.",
        ],
      },
      {
        heading: "Aturan Praktis Memilih",
        body: [
          "Jika keluhan Anda muncul 'saat berekspresi' (mengerutkan dahi, menyipit) — itu wilayah Botox. Jika keluhan muncul 'secara statis' (nasolabial fold terlihat saat wajah tenang, bibir tipis) — itu wilayah Filler.",
          "Banyak pasien justru membutuhkan kombinasi keduanya dalam dosis kecil untuk hasil menyeluruh yang natural. Di konsultasi DEGERASIA, kami memetakan kebutuhan Anda berdasarkan anatomi, bukan tren.",
        ],
      },
      {
        heading: "Soal Keamanan & Hasil Natural",
        body: [
          "Kedua prosedur aman jika dilakukan dokter berpengalaman dengan produk asli. Wajah 'bezu' atau bibir 'over' adalah hasil dosis dan teknik yang keliru — bukan sifat bahan aslinya. Prinsip kami: orang lain melihat Anda segar, bukan melihat 'sesuatu yang baru Anda lakukan'.",
        ],
      },
    ],
  },
  {
    slug: "rahasia-night-cream",
    title: "Rahasia Night Cream: Mengapa Perawatan Malam Menentukan Kulit Anda",
    category: "Edukasi Skincare",
    excerpt:
      "Regenerasi kulit mencapai puncaknya saat Anda tidur. Beginilah cara memaksimalkan 'jam emas' perbaikan kulit malam hari.",
    date: "2025-03-02",
    readTime: "5 menit",
    cover: "/images/article-night.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Jam Emas Regenerasi",
        body: [
          "Antara jam 22.00 hingga 02.00, laju regenerasi sel kulit berada di titik tertinggi — hampir dua kali lipat dibanding siang hari. Aliran darah ke kulit meningkat, permeabilitas membaik, dan produksi kolagen berjalan penuh. Inilah mengapa produk yang tepat di malam hari bekerja jauh lebih efektif.",
        ],
      },
      {
        heading: "Bahan Aktif Andalan Malam",
        body: [
          "Retinoid merangsang pergantian sel dan kolagen — bintang anti-aging yang paling terbukti secara ilmiah. Peptida membangun blok penyusun kulit. Niacinamide mencerahkan dan menenangkan. Ketiganya ada dalam rangkaian malam DEGERA: Night Cream dan Night Lotion Premium dirancang bekerja sinergis dengan jam emas ini.",
        ],
      },
      {
        heading: "Kebiasaan Malam yang Melengkapi",
        body: [
          "Tidur cukup 7–8 jam pada sarapan bantal yang bersih, posisi tidur terlentang mengurangi garis tidur, dan ruangan yang sejuk membantu kualitas tidur mendalam. Skincare terbaik pun kalah oleh kurang tidur kronis — istirahat adalah bagian dari resep kecantikan.",
        ],
      },
    ],
  },
  {
    slug: "jerawat-dewasa",
    title: "Jerawat di Usia Dewasa: Penyebab yang Sering Terlewat & Solusi Klinisnya",
    category: "Acne Care",
    excerpt:
      "Jerawat di usia 25–40 tahun punya pemicu berbeda dari masa remaja. Kenali akar masalahnya sebelum membeli produk berikutnya.",
    date: "2025-03-15",
    readTime: "7 menit",
    cover: "/images/article-acne.jpg",
    author: "Dr. Fatri Idana, M.Biomed., AAM",
    sections: [
      {
        heading: "Kenapa Masih Berjerawat di Usia Dewasa?",
        body: [
          "Jerawat dewasa umumnya bersifat hormonal dan inflamasi dalam. Pemicunya: fluktuasi hormon (siklus haid, stres, PCOS), pola tidur buruk, diet tinggi glikemik, dan — jebakan terbesar — penggunaan produk yang terlalu keras sehingga merusak barrier dan memicu jerawat balik.",
          "Lokasinya juga khas: di rahang bawah dan dagu (pola hormonal), serta pipi. Berbeda dari jerawat remaja yang lebih menyebar di zona-T.",
        ],
      },
      {
        heading: "Pendekatan Medis yang Berlapis",
        body: [
          "Di DEGERASIA, program Acne Solution kami berlapis: tindakan klinik (ekstraksi medis, peeling anti-jerawat), pengaturan homecare (Degera Acne Wash, Toner Acne, Milk Cleanser Acne), dan koreksi faktor pemicu — mulai dari stres hingga sarisipan kosmetik yang Anda pakai.",
          "Kunci keberhasilan: kesabaran dan konsistensi. Perbaikan signifikan membutuhkan 6–12 minggu, bukan 6–12 hari. Kami memandu Anda tiap langkah dengan evaluasi berkala.",
        ],
      },
      {
        heading: "Yang Harus Dihindari",
        body: [
          "Mencoba terlalu banyak produk sekaligus, mencuci wajah berlebihan (>3x/hari), menekan jerawat dengan tangan, dan memakai produk 'resep' tanpa penilaian dokter. Semua memperparah peradangan dan mempercepat pembentukan bekas.",
        ],
      },
    ],
  },
];

/* ── Testimoni ─────────────────────────────────────────────── */

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Siti Rahmadewi",
    city: "Sumbawa",
    treatment: "F-Silk Glow",
    quote:
      "Pertama kali facial di Degerasia langsung jatuh cinta. Kulit terasa beda sejak keluar ruang treatment — halus, cerah, dan caranya dr. Fatri menjelaskan sangat meyakinkan.",
  },
  {
    name: "Andini Pratama",
    city: "Bima",
    treatment: "Program Acne Solution",
    quote:
      "Tiga tahun berjuang dengan jerawat, baru di Degerasia kulit saya benar-benar tenang. Produk Degera Acne Wash-nya juara, dan evaluasi rutinnya bikin saya disiplin.",
  },
  {
    name: "Maria Lestari",
    city: "Mataram",
    treatment: "Botox & Filler",
    quote:
      "Hasilnya natural banget! Teman-teman bilang saya tampak segar, bukan tampak 'sesuatu'. dr. Fatri sangat hati-hati dengan dosis — ini yang bikin saya kembali lagi.",
  },
  {
    name: "Rizka Amelia",
    city: "Sumbawa Besar",
    treatment: "Brightening Program",
    quote:
      "Flek hitam yang membandel bertahun-tahun perlahan memudar dalam 2 bulan program. Tidak ada miracle instan, tapi hasil yang benar-benar bertahan.",
  },
  {
    name: "Dewi Anggraini",
    city: "Dompu",
    treatment: "HIFU Ultra Lifting",
    quote:
      "Sekali sesi langsung terasa wajah lebih tegas. Yang paling saya suka: tidak ada downtime sama sekali, langsung kerja seperti biasa.",
  },
  {
    name: "Fathimah Zahra",
    city: "Sumbawa",
    treatment: "Degera Night Cream",
    quote:
      "Mulai dari beli night cream, sekarang seluruh rangkaian saya DEGERA. Harga sangat masuk akal tapi kualitasnya setara produk luar yang lebih mahal.",
  },
  {
    name: "Nurul Hidayah",
    city: "Alas",
    treatment: "F-Plasma Rejuv",
    quote:
      "Sempat ragu dengan PRP, ternyata prosedurnya jauh lebih nyaman dari bayangan. Tiga bulan kemudian bekas jerawat saya memudar signifikan.",
  },
  {
    name: "Kartika Sari",
    city: "Sape",
    treatment: "Signature Facial",
    quote:
      "Clinic-nya mewah, bersih, dan stafnya ramah semua. Dari Sape ke Sumbawa memang agak jauh, tapi untuk hasil ini sangat sepadan.",
  },
];

/* ── Promo & Program ───────────────────────────────────────── */

export const PROMOS: Promo[] = [
  {
    title: "Konsultasi Kulit Gratis",
    subtitle: "Untuk Pasien Baru",
    description:
      "Analisis kulit langsung bersama dr. Fatri Idana — gratis tanpa syarat untuk kunjungan pertama Anda. Termasuk rekomendasi treatment dan homecare yang dipersonalisasi.",
    valid: "Berlaku setiap hari operasional",
    slug: "konsultasi-gratis",
    icon: "sparkles",
  },
  {
    title: "Paket Glow 3+1",
    subtitle: "F-Silk Glow Series",
    description:
      "Ikuti 3 sesi F-Silk Glow dan dapatkan 1 sesi gratis. Program pencerahan berkelanjutan untuk hasil glowing yang maksimal dan bertahan lama.",
    valid: "Pendaftaran hingga akhir bulan ini",
    slug: "paket-glow",
    icon: "gem",
  },
  {
    title: "Bundle DEGERA Starter",
    subtitle: "Rangkaian Homecare",
    description:
      "Dapatkan diskon spesial untuk pembelian bundle: Cleanser + Toner + Serum Gold + Night Cream. Perawatan lengkap satu bulan dengan harga terbaik.",
    valid: "Stok terbatas setiap bulan",
    slug: "bundle-starter",
    icon: "package",
  },
  {
    title: "Program Referral Degerasia",
    subtitle: "Ajak Sahabat, Dapat Benefit",
    description:
      "Rekomendasikan sahabat Anda untuk treatment pertama — ia mendapat konsultasi gratis dan Anda menerima voucher treatment senilai Rp 100.000.",
    valid: "Program berjalan sepanjang tahun",
    slug: "referral",
    icon: "heart",
  },
];

/* ── FAQ ───────────────────────────────────────────────────── */

export const FAQS: Faq[] = [
  {
    q: "Apakah saya perlu membuat janji sebelum datang?",
    a: "Sangat disarankan. Reservasi melalui WhatsApp 0822-3600-0715 memastikan dr. Fatri menyiapkan waktu penuh untuk konsultasi Anda tanpa menunggu.",
  },
  {
    q: "Bagaimana cara reservasi treatment?",
    a: "Klik tombol Reservasi di situs ini, hubungi WhatsApp kami, atau datang langsung ke klinik di Jl. Sultan Kaharuddin, Dusun Sering, Sumbawa (di depan Masjid Sering / perempatan Sering).",
  },
  {
    q: "Apakah konsultasi pertama dikenakan biaya?",
    a: "Tidak. Konsultasi kulit untuk pasien baru adalah gratis — termasuk analisis kulit dan rekomendasi treatment yang dipersonalisasi.",
  },
  {
    q: "Apakah semua treatment dilakukan langsung oleh dr. Fatri?",
    a: "Ya. dr. Fatri Idana, M.Biomed., AAM sebagai Senior Dokter Kecantikan dan Founder Klinik, secara pribadi menangani setiap pasien — dari konsultasi hingga tindakan.",
  },
  {
    q: "Apakah produk DEGERA aman?",
    a: "Seluruh produk DEGERA terdaftar resmi di BPOM (dapat dicek melalui aplikasi cek BPOM dengan nomor registrasi di setiap halaman produk kami).",
  },
  {
    q: "Apakah treatment menyakitkan?",
    a: "Kami menerapkan standar kenyamanan maksimal: krim biang untuk injeksi, teknik lembut, dan penjelasan setiap langkah. Mayoritas pasien merasa jauh lebih nyaman dari yang dibayangkan.",
  },
  {
    q: "Berapa lama hasil treatment terlihat?",
    a: "Berbeda per treatment: facial memberi efek segera; peeling 5–7 hari; injeksi 3–14 hari; program jerawat/pencerahan 6–12 minggu. dr. Fatri menjelaskan estimasi realistis di setiap konsultasi.",
  },
  {
    q: "Metode pembayaran apa yang diterima?",
    a: "Tunai, transfer bank, dan QRIS untuk semua treatment dan produk DEGERA.",
  },
  {
    q: "Apakah klinik melayani pasien dari luar kota?",
    a: "Ya. Kami rutin melayani pasien dari Bima, Dompu, Mataram, dan Lombok. Tim kami membantu merencanakan jadwal treatment efisien untuk kunjungan Anda.",
  },
  {
    q: "Apakah ada program perawatan berkelanjutan?",
    a: "Ada. Setelah konsultasi awal, dr. Fatri menyusun peta perawatan personal (roadmap kulit) — kombinasi treatment klinik berkala dan homecare DEGERA untuk hasil jangka panjang.",
  },
];

/* ── Galeri ────────────────────────────────────────────────── */

export const GALLERY: GalleryItem[] = [
  { src: "/images/clinic-interior.png", caption: "Lobi Klinik Degerasia", tag: "Fasilitas" },
  { src: "/images/gallery-treatment-room.png", caption: "Ruang Treatment Premium", tag: "Fasilitas" },
  { src: "/images/treatment-moment.png", caption: "Momensi Perawatan Bersama dr. Fatri", tag: "Treatment" },
  { src: "/images/tim-degerasia.jpg", caption: "Tim Besar Keluarga Degerasia", tag: "Tim" },
  { src: "/images/gallery-facial-suite.png", caption: "Facial Suite dengan Sentuhan Botani", tag: "Fasilitas" },
  { src: "/images/doctor-about.png", caption: "dr. Fatri Idana, M.Biomed., AAM", tag: "Dokter" },
  { src: "/images/gallery-product-bar.png", caption: "Koleksi Produk DEGERA Resmi BPOM", tag: "Produk" },
  { src: "/images/tumbler-degera.jpg", caption: "Merchandise Eksklusif Degerasia", tag: "Gaya Hidup" },
];

/* ── Statistik Klinik ──────────────────────────────────────── */

export const CLINIC_STATS = [
  { value: 21, suffix: "+", label: "Produk DEGERA Terdaftar BPOM" },
  { value: 13, suffix: "+", label: "Treatment Klinik Premium" },
  { value: 3, suffix: " Tahun", label: "Riset & Pengembangan Produk" },
  { value: 100, suffix: "%", label: "Ditangani Langsung dr. Fatri" },
];

/* ── Timeline Perjalanan Klinik ────────────────────────────── */

export const JOURNEY = [
  {
    year: "Fondasi",
    title: "Pendidikan Kedokteran & Magister Biomedis",
    detail:
      "Dr. Fatri Idana menyelesaikan pendidikan kedokteran dan melanjutkan studi Magister Biomedis (M.Biomed) — pondasi ilmiah yang menjadi DNA setiap treatment dan produk Degerasia.",
  },
  {
    year: "Sertifikasi",
    title: "Ahli Anti-Aging Medicine (AAM)",
    detail:
      "Sertifikasi AAM memperkuat spesialisasi dr. Fatri dalam kedokteran anti-aging: memahami penuaan dari akar biologi, bukan sekadar meredam gejala di permukaan.",
  },
  {
    year: "2022",
    title: "Lahirnya DEGERA — 7 Produk Pertama Terdaftar BPOM",
    detail:
      "Merek DEGERA resmi terdaftar dan tujuh produk pertama mendapat izin edar BPOM: BB Cream, J'Ra Cream, Sunscreen, hingga Serum Gold. Riset botani tropis Indonesia menjadi jantung formulanya.",
  },
  {
    year: "2023",
    title: "Ekspansi Lini Acne & Klinik Degerasia",
    detail:
      "Lini khusus kulit berjerawat (Acne Wash, Toner Acne) melengkapi katalog, seiring lahirnya Klinik Degerasia di Sumbawa sebagai pusat perawatan estetika premium NTB.",
  },
  {
    year: "2024",
    title: "9 Produk Baru — Lini Premium & Body Care",
    detail:
      "Night Lotion Premium, Facial Foam, Body Whitening Premium, dan 6 inovasi lain memperluas DEGERA menjadi ekosistem perawatan lengkap dari kepala hingga kaki.",
  },
  {
    year: "2025",
    title: "JRA Serum & Sunscreen Moist — Generasi Terbaru",
    detail:
      "21 produk terdaftar BPOM. DEGERA kini dipercaya ribuan pelanggan dan menjadi homecare resmi yang direkomendasikan di setiap program treatment Degerasia.",
  },
];

/* ── Utilitas ──────────────────────────────────────────────── */

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function formatDate(iso: string): string {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
