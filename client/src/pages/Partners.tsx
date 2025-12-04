import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const partners = [
  {
    name: "BMW M Motorsport",
    category: "Fabricante",
    description: "Parceiro técnico principal fornecendo o BMW M4 GT3 para competições DTM",
    logo: "🏎️",
    link: "https://www.bmw-m.com",
  },
  {
    name: "Ravenol",
    category: "Óleos & Fluidos",
    description: "Fornecedor de óleos de motor e fluidos de alta performance",
    logo: "⚙️",
    link: "https://www.ravenol.de/en",
  },
  {
    name: "H&R",
    category: "Suspensão",
    description: "Especialista em sistemas de suspensão e componentes de chassis",
    logo: "🔧",
    link: "https://www.hrsprings.com",
  },
  {
    name: "Puma",
    category: "Vestuário",
    description: "Fornecedor oficial de equipamento e vestuário de corrida",
    logo: "👕",
    link: "https://www.puma.com",
  },
  {
    name: "Sparco",
    category: "Segurança",
    description: "Equipamento de segurança e trajes de corrida de qualidade profissional",
    logo: "🛡️",
    link: "https://www.sparco-official.com",
  },
  {
    name: "OKX",
    category: "Tecnologia",
    description: "Plataforma de tecnologia blockchain e criptografia",
    logo: "💻",
    link: "https://www.okx.com",
  },
];

export default function Partners() {
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
                NOSSOS <span className="text-primary">PARCEIROS</span>
              </h1>
              <p className="font-body text-muted-foreground text-lg max-w-2xl">
                Empresas e marcas que compartilham nossa paixão por excelência e inovação no automobilismo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24">
          <div className="container" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-card/50 border border-white/10 p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Logo */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </div>

                    {/* Category Badge */}
                    <span className="inline-block font-mono text-xs text-primary tracking-widest mb-3 bg-primary/10 px-3 py-1">
                      {partner.category}
                    </span>

                    {/* Name */}
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Divider */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-primary hover:text-white transition-colors tracking-widest"
                      >
                        SAIBA MAIS →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-24 border-t border-white/10 bg-black/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-black text-4xl text-white mb-6">
                OPORTUNIDADES DE PARCERIA
              </h2>

              <p className="font-body text-muted-foreground text-lg mb-8">
                Interessado em se tornar parceiro oficial de René Rast? Entramos em contato com marcas que compartilham nossos valores de excelência, inovação e performance.
              </p>

              {/* Botão corrigido */}
              <a
                href="mailto:info@rene-rast.de"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-4 font-display font-bold tracking-wider transition-all duration-300 inline-block"
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
