// src/pages/Equipment.tsx
import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function Equipment() {
  return (
    <Fragment>
      <Helmet>
        <title>Equipamentos | René Rast</title>
      </Helmet>

      <Header />

      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-primary">
          Tecnologia e Equipamentos de Ponta
        </h1>

        <p className="text-lg mb-4">
          O equipamento de um piloto de corrida é uma extensão da sua segurança e
          performance. Cada peça é projetada com a mais alta tecnologia para
          suportar as forças G extremas e o calor da cabine.
        </p>

        <p className="text-lg mb-4">
          Desde o capacete de fibra de carbono até o sistema HANS (Head and Neck
          Support), a segurança é a prioridade. O macacão, feito de Nomex,
          oferece proteção contra fogo, enquanto as luvas e botas garantem a
          sensibilidade necessária para o controle preciso do carro.
        </p>

        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-accent mb-3">
            Componentes Essenciais
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Capacete: Proteção máxima e comunicação integrada.</li>
            <li>Sistema HANS: Reduz o risco de lesões no pescoço e coluna.</li>
            <li>Macacão de Nomex: Resistência ao fogo e conforto térmico.</li>
            <li>Luvas e Botas: Sensibilidade e aderência aos pedais e volante.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
