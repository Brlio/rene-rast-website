import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const seasonStats = [
  { season: "2025", wins: 8, poles: 6, podiums: 14, points: 285 },
  { season: "2024", wins: 9, poles: 7, podiums: 15, points: 302 },
  { season: "2023", wins: 9, poles: 5, podiums: 13, points: 298 },
];

const trackStats = [
  { track: "Norisring", wins: 4, poles: 3, podiums: 6 },
  { track: "Nürburgring", wins: 3, poles: 2, podiums: 5 },
  { track: "Oschersleben", wins: 3, poles: 2, podiums: 4 },
  { track: "Zandvoort", wins: 2, poles: 1, podiums: 3 },
  { track: "Hockenheim", wins: 2, poles: 1, podiums: 3 },
  { track: "Brands Hatch", wins: 2, poles: 1, podiums: 3 },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/10 to-background border-b border-white/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-black text-6xl md:text-7xl italic text-white mb-6">
                ANÁLISE DE <span className="text-primary">PERFORMANCE</span>
              </h1>
              <p className="font-body text-muted-foreground text-lg max-w-2xl">
                Dados detalhados de desempenho ao longo das temporadas e análise por circuito.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Season Stats */}
        <section className="py-24 border-b border-white/10">
          <div className="container" ref={ref}>
            <h2 className="font-display font-black text-4xl text-white mb-12">ESTATÍSTICAS POR TEMPORADA</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-mono text-primary text-sm tracking-widest">TEMPORADA</th>
                    <th className="text-center py-4 px-4 font-mono text-primary text-sm tracking-widest">VITÓRIAS</th>
                    <th className="text-center py-4 px-4 font-mono text-primary text-sm tracking-widest">POLES</th>
                    <th className="text-center py-4 px-4 font-mono text-primary text-sm tracking-widest">PÓDIOS</th>
                    <th className="text-center py-4 px-4 font-mono text-primary text-sm tracking-widest">PONTOS</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonStats.map((stat, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 font-display font-bold text-white">{stat.season}</td>
                      <td className="text-center py-4 px-4 font-mono text-primary text-lg font-bold">{stat.wins}</td>
                      <td className="text-center py-4 px-4 font-mono text-primary text-lg font-bold">{stat.poles}</td>
                      <td className="text-center py-4 px-4 font-mono text-primary text-lg font-bold">{stat.podiums}</td>
                      <td className="text-center py-4 px-4 font-mono text-primary text-lg font-bold">{stat.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Track Performance */}
        <section className="py-24">
          <div className="container">
            <h2 className="font-display font-black text-4xl text-white mb-12">DESEMPENHO POR CIRCUITO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackStats.map((track, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-card/50 border border-white/10 p-6 hover:border-primary/50 transition-all group"
                >
                  <h3 className="font-display font-bold text-xl text-white mb-6 group-hover:text-primary transition-colors">{track.track}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-muted-foreground">VITÓRIAS</span>
                      <span className="font-display font-bold text-2xl text-primary">{track.wins}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-muted-foreground">POLES</span>
                      <span className="font-display font-bold text-2xl text-primary">{track.poles}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-muted-foreground">PÓDIOS</span>
                      <span className="font-display font-bold text-2xl text-primary">{track.podiums}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-24 border-t border-white/10 bg-black/50">
          <div className="container">
            <h2 className="font-display font-black text-4xl text-white mb-12">MÉTRICAS PRINCIPAIS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "TAXA DE VITÓRIA", value: "17.3%", desc: "Vitórias por corrida disputada" },
                { label: "MÉDIA DE PÓDIOS", value: "34.7%", desc: "Pódios por corrida disputada" },
                { label: "CONSISTÊNCIA", value: "94.2%", desc: "Pontos marcados por temporada" },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 p-8 text-center"
                >
                  <div className="font-display font-black text-5xl text-primary mb-2">{metric.value}</div>
                  <div className="font-display font-bold text-white mb-2">{metric.label}</div>
                  <div className="font-mono text-xs text-muted-foreground">{metric.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
