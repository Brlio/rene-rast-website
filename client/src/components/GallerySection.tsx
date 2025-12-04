import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function GallerySection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="font-display font-black text-4xl md:text-6xl text-white italic">
            LEGADO <span className="text-primary">VISUAL</span>
          </h2>
          <Button variant="link" className="text-white hover:text-primary font-mono tracking-widest group" onClick={() => window.location.href = '/gallery'}>
            VER GALERIA COMPLETA <ArrowUpRight className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          {/* Main Feature Image */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden border border-white/10">
            <img 
              src="/images/car-track.jpg" 
              alt="Racing Action" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-mono text-primary text-xs tracking-widest mb-2 block">NORISRING 2025</span>
              <h3 className="font-display font-bold text-2xl text-white">CORRIDA NOTURNA</h3>
            </div>
          </div>

          {/* Secondary Image 1 */}
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-white/10">
            <img 
              src="/images/driver-portrait.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-4">
              <span className="font-mono text-white text-xs bg-black/50 px-2 py-1 backdrop-blur-sm">FOCO</span>
            </div>
          </div>

          {/* Secondary Image 2 */}
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden border border-white/10">
            <img 
              src="/images/helmet-detail.jpg" 
              alt="Helmet Detail" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-4">
              <span className="font-mono text-white text-xs bg-black/50 px-2 py-1 backdrop-blur-sm">EQUIPAMENTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
