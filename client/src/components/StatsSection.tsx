import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "CAMPEONATOS", value: "3", sub: "TÍTULOS DTM" },
  { label: "VITÓRIAS", value: "26", sub: "VITÓRIAS NA CARREIRA" },
  { label: "POLE POSITIONS", value: "24", sub: "DOMÍNIO EM QUALIFICAÇÃO" },
  { label: "PÓDIOS", value: "52", sub: "TOP 3 CHEGADAS" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-white/5">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white"></div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-mono text-primary tracking-widest mb-2 text-sm">ESTATÍSTICAS DE CARREIRA</h2>
            <h3 className="font-display font-black text-4xl md:text-5xl text-white uppercase italic">
              DOMÍNIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">NA PISTA</span>
            </h3>
          </div>
          <div className="font-mono text-right text-muted-foreground text-xs md:text-sm max-w-xs">
            DADOS ATUALIZADOS: <span className="text-primary">DEZ 2025</span><br/>
            FONTE: REGISTROS OFICIAIS FIA
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/50 border border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="font-display font-black text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2 group-hover:from-primary group-hover:to-primary/10 transition-all duration-500">
                {stat.value}
              </div>
              <div className="h-[1px] w-12 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
              <h4 className="font-display font-bold text-xl text-white mb-1">{stat.label}</h4>
              <p className="font-mono text-xs text-muted-foreground tracking-widest">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
