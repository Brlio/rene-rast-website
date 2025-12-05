// src/pages/Equipment.tsx
import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Equipment() {
  return (
    <Fragment>
      <Helmet>
        <title>Equipamentos | René Rast</title>
      </Helmet>

      <Header />

      <main className="container py-12 min-h-screen space-y-12">
        {/* Título principal */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Tecnologia e Equipamentos de Ponta
          </h1>
          <p className="text-lg">
            O equipamento de um piloto é a extensão de sua segurança e performance.
            Cada peça é projetada para suportar forças extremas e garantir precisão na pista.
          </p>
          <p className="text-lg">
            Do capacete ao macacão, tudo é desenvolvido com materiais de alta
            tecnologia e padrões de segurança máximos.
          </p>
        </section>

        {/* Galeria de imagens */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/helmet-detail.jpg"
              alt="Capacete"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Capacete de Fibra de Carbono
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/racing-suit.webp"
              alt="Macacão"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Macacão Nomex
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/hans-device.png"
              alt="Sistema HANS"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Sistema HANS
            </div>
          </div>
        </section>

        {/* Componentes Essenciais */}
        <section className="bg-card p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-accent mb-3">Componentes Essenciais</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>Capacete: Proteção máxima, comunicação integrada e ventilação.</li>
            <li>Sistema HANS: Reduz risco de lesões no pescoço e coluna.</li>
            <li>Macacão de Nomex: Resistência ao fogo, conforto térmico e leveza.</li>
            <li>Luvas e Botas: Sensibilidade e aderência aos pedais e volante.</li>
          </ul>
        </section>

        {/* Tabela de especificações */}
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-4">Especificações Técnicas</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-border">
              <thead>
                <tr className="bg-background/80">
                  <th className="border border-border px-4 py-2 text-left">Equipamento</th>
                  <th className="border border-border px-4 py-2 text-left">Material</th>
                  <th className="border border-border px-4 py-2 text-left">Peso</th>
                  <th className="border border-border px-4 py-2 text-left">Proteção</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Capacete</td>
                  <td className="border border-border px-4 py-2">Fibra de carbono</td>
                  <td className="border border-border px-4 py-2">1.2 kg</td>
                  <td className="border border-border px-4 py-2">Impacto e fogo</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="border border-border px-4 py-2">Macacão</td>
                  <td className="border border-border px-4 py-2">Nomex</td>
                  <td className="border border-border px-4 py-2">0.8 kg</td>
                  <td className="border border-border px-4 py-2">Fogo</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Sistema HANS</td>
                  <td className="border border-border px-4 py-2">Composto de carbono e titânio</td>
                  <td className="border border-border px-4 py-2">1.5 kg</td>
                  <td className="border border-border px-4 py-2">Pescoço e coluna</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
       
      </main>

      <Footer />
    </Fragment>
  );
}
