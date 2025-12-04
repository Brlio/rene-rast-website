import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="René Rast Racing Helmet" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-mono text-primary tracking-widest mb-4 text-sm md:text-base flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary inline-block"></span>
              TRICAMPEÃO DTM
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl italic leading-[0.9] tracking-tighter text-white mb-6"
          >
            MOVIDO PELA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">PRECISÃO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mb-10 border-l-2 border-primary/50 pl-6"
          >
            Redefinindo os limites do automobilismo com excelência técnica e determinação implacável. Bem-vindo ao hub digital oficial de René Rast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 font-display font-bold text-lg tracking-wider clip-diagonal group" onClick={() => window.location.href = '/stats'}>
              ÚLTIMOS RESULTADOS
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 py-6 font-mono font-bold text-lg tracking-wider" onClick={() => window.location.href = '/career'}>
              VER CARREIRA
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs tracking-[0.3em]">ROLA</span>
        <ChevronDown className="animate-bounce h-6 w-6 text-primary" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-[2px] bg-gradient-to-l from-primary to-transparent opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50"></div>
    </section>
  );
}
