import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const careerMilestones = [
  {
    year: "2025",
    title: "Temporada DTM Atual",
    description: "Competindo pelo terceiro título consecutivo com a BMW M4 GT3",
    highlight: true,
  },
  {
    year: "2024",
    title: "Bicampeão DTM",
    description: "Conquistou seu segundo título consecutivo na série DTM",
  },
  {
    year: "2023",
    title: "Campeão DTM",
    description: "Primeiro título na série Deutsche Tourenwagen Masters",
  },
  {
    year: "2022",
    title: "Fórmula E",
    description: "Participação em selecionadas corridas de Fórmula E",
  },
  {
    year: "2021",
    title: "Desenvolvimento BMW",
    description: "Trabalho como piloto de desenvolvimento para programas BMW",
  },
];

export default function Career() {
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
                JORNADA <span className="text-primary">PROFISSIONAL</span>
              </h1>
              <p className="font-body text-muted-foreground text-lg max-w-2xl">
                Conheça a trajetória de René Rast no automobilismo de elite, desde suas primeiras competições até se tornar tricampeão DTM.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container" ref={ref}>
            <div className="max-w-4xl mx-auto">
              {careerMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative pb-12 ${index !== careerMilestones.length - 1 ? "border-l-2 border-primary/30 pl-8" : "pl-8"}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-4 top-0 w-6 h-6 rounded-full border-2 ${milestone.highlight ? "bg-primary border-primary" : "bg-background border-primary"}`}></div>

                  {/* Content */}
                  <div className={`p-6 border ${milestone.highlight ? "border-primary bg-primary/5" : "border-white/10 bg-card/30"}`}>
                    <span className="font-mono text-primary text-sm tracking-widest">{milestone.year}</span>
                    <h3 className="font-display font-bold text-2xl text-white mt-2 mb-2">{milestone.title}</h3>
                    <p className="font-body text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-24 border-t border-white/10 bg-black/50">
          <div className="container">
            <h2 className="font-display font-black text-4xl text-white mb-12">NÚMEROS QUE FALAM</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "CORRIDAS", value: "150+" },
                { label: "VITÓRIAS", value: "26" },
                { label: "PÓDIOS", value: "52" },
                { label: "CAMPEONATOS", value: "3" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-card/50 border border-white/10 p-8 text-center hover:border-primary/50 transition-colors"
                >
                  <div className="font-display font-black text-5xl text-primary mb-2">{stat.value}</div>
                  <div className="font-mono text-sm text-muted-foreground tracking-widest">{stat.label}</div>
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
