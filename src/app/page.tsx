import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Marquee } from "@/components/landing/marquee";
import { About } from "@/components/landing/about";
import { Stats } from "@/components/landing/stats";
import { Philosophy } from "@/components/landing/philosophy";
import { Services } from "@/components/landing/services";
import { Products } from "@/components/landing/products";
import { JournalPreview } from "@/components/landing/journal-preview";
import { Journey } from "@/components/landing/journey";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaBanner } from "@/components/landing/cta";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { FloatingActions } from "@/components/landing/floating-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Philosophy />
        <Services />
        <Products />
        <JournalPreview />
        <Journey />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
