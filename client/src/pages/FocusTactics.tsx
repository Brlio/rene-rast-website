import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function FocusTactics() {
  return (
    <>
      <Helmet>
        <title>Foco e Táticas | René Rast</title>
      </Helmet>
      <Header />
      <main className="container py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-primary">Táticas de Foco e Preparação Mental</h1>
        <p className="text-lg mb-4">
          O foco é a chave para o sucesso no automobilismo. Pilotos de elite como René Rast utilizam técnicas avançadas de preparação mental para manter a concentração em alta velocidade e sob pressão extrema.
        </p>
        <p className="text-lg mb-4">
          A meditação, a visualização e a rotina pré-corrida são elementos essenciais. A capacidade de "entrar na zona" e bloquear distrações é o que separa os campeões.
        </p>
        <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
          <h2 className="text-2xl font-semibold text-accent mb-3">Técnicas de Foco</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Visualização: Percorrer a pista mentalmente antes da corrida.</li>
            <li>Respiração Controlada: Manter a calma e reduzir a frequência cardíaca.</li>
            <li>Rotina: Seguir um ritual consistente para sinalizar ao cérebro que é hora de competir.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
