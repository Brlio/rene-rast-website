import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function FocusTactics() {
  return (
    <>
      <Helmet>
        <title>Foco e Táticas | René Rast</title>
      </Helmet>

      <Header />

      <main className="container py-12 min-h-screen space-y-12">
        {/* Título principal */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Táticas de Foco e Preparação Mental
          </h1>
          <p className="text-lg">
            O foco é a chave para o sucesso no automobilismo. Pilotos de elite como René Rast utilizam técnicas avançadas de preparação mental para manter a concentração em alta velocidade e sob pressão extrema.
          </p>
          <p className="text-lg">
            A meditação, a visualização e a rotina pré-corrida são elementos essenciais. A capacidade de "entrar na zona" e bloquear distrações é o que separa os campeões.
          </p>
        </section>

        {/* Galeria de técnicas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/meditation.webp"
              alt="Meditação"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Meditação e Respiração
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/visualization.jpg"
              alt="Visualização"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Visualização da Pista
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/pre-race.png"
              alt="Rotina Pré-Corrida"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Rotina Pré-Corrida
            </div>
          </div>
        </section>

        {/* Técnicas de foco detalhadas */}
        <section className="bg-card p-6 rounded-lg shadow-lg border border-border space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Técnicas de Foco</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>Visualização: Percorrer mentalmente cada curva e ultrapassagem antes da corrida.</li>
            <li>Respiração Controlada: Reduz a frequência cardíaca e mantém a calma.</li>
            <li>Rotina Pré-Corrida: Estabelece hábitos consistentes que sinalizam ao cérebro que é hora de competir.</li>
            <li>Treino Mental: Exercícios diários para melhorar memória espacial e tempo de reação.</li>
            <li>Mindfulness: Aumenta a consciência do corpo e do carro durante a corrida.</li>
          </ul>
        </section>

        {/* Tabela com dicas */}
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-4">Dicas Práticas</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-border">
              <thead>
                <tr className="bg-background/80">
                  <th className="border border-border px-4 py-2 text-left">Técnica</th>
                  <th className="border border-border px-4 py-2 text-left">Benefício</th>
                  <th className="border border-border px-4 py-2 text-left">Duração Recomendada</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Meditação</td>
                  <td className="border border-border px-4 py-2">Reduz estresse, melhora foco</td>
                  <td className="border border-border px-4 py-2">10-15 minutos</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="border border-border px-4 py-2">Visualização</td>
                  <td className="border border-border px-4 py-2">Antecipação de curvas e movimentos</td>
                  <td className="border border-border px-4 py-2">5-10 minutos</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Rotina Pré-Corrida</td>
                  <td className="border border-border px-4 py-2">Consistência e confiança</td>
                  <td className="border border-border px-4 py-2">15-20 minutos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <p className="text-lg mb-4">
            Quer ver mais sobre a preparação dos pilotos e seus equipamentos? Confira a galeria completa.
          </p>
          <Button
            variant="secondary"
            className="inline-flex items-center gap-2"
            onClick={() => (window.location.href = "/equipment")}
          >
            VER EQUIPAMENTOS <ArrowUpRight className="h-4 w-4" />
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
}
