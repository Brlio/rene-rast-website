import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function NightRace() {
  return (
    <>
      <Helmet>
        <title>Corrida Noturna | René Rast</title>
      </Helmet>
      <Header />
      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-primary">Estratégias de Corrida Noturna</h1>
        <p className="text-lg mb-4">
          As corridas noturnas exigem uma abordagem completamente diferente. A visibilidade reduzida, a queda de temperatura da pista e a iluminação artificial criam desafios únicos para os pilotos e suas equipes.
        </p>
        <p className="text-lg mb-4">
          O foco principal é a adaptação rápida. Os pilotos precisam confiar mais nos seus instintos e nas referências visuais limitadas. A gestão dos pneus é crucial, pois a temperatura mais baixa da pista pode afetar a aderência.
        </p>
        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-accent mb-3">Principais Desafios</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Visibilidade: Adaptação aos faróis e luzes da pista.</li>
            <li>Temperatura da Pista: Gerenciamento da aderência dos pneus.</li>
            <li>Fadiga: Manter a concentração em longos períodos de escuridão.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
