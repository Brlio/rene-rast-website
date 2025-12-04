import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { useEffect } from "react";

export default function Home() {
  // Force dark mode for this page as per design requirement
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <GallerySection />
        
        {/* Partners Marquee Placeholder */}
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
          <div className="container">
            <p className="font-mono text-center text-muted-foreground text-xs tracking-[0.5em] mb-8">OFFICIAL PARTNERS</p>
            <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for partner logos */}
              <div className="font-display font-bold text-2xl text-white">BMW M MOTORSPORT</div>
              <div className="font-display font-bold text-2xl text-white">RAVENOL</div>
              <div className="font-display font-bold text-2xl text-white">H&R</div>
              <div className="font-display font-bold text-2xl text-white">PUMA</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
