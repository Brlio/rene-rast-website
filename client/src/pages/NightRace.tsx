import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function NightRace() {
  return (
    <>
      <Helmet>
        <title>Corrida Noturna | René Rast</title>
      </Helmet>

      <Header />

      <main className="container py-12 min-h-screen space-y-12">
        {/* Título principal */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            Estratégias de Corrida Noturna
          </h1>
          <p className="text-lg">
            Corridas noturnas exigem adaptação completa. A visibilidade reduzida, a iluminação artificial e a queda de temperatura da pista criam desafios únicos para pilotos e equipes.
          </p>
          <p className="text-lg">
            A chave é a adaptação rápida e o uso das referências visuais limitadas. Além disso, a gestão dos pneus é essencial, pois a temperatura mais baixa pode reduzir a aderência.
          </p>
        </section>

        {/* Galeria de imagens */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/night-race-1.jpg"
              alt="Corrida Noturna"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Treino Noturno
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/night-race-2.png"
              alt="Luzes da Pista"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
            . Iluminação da Pista
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-border group relative">
            <img
              src="/images/night-race-3.jpg"
              alt="Equipe e Estratégia"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black/50 text-white font-mono text-sm">
              Estratégia da Equipe
            </div>
          </div>
        </section>

        {/* Desafios e Estratégias */}
        <section className="bg-card p-6 rounded-lg shadow-lg border border-border space-y-4">
          <h2 className="text-2xl font-semibold text-accent">Principais Desafios</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li>Visibilidade: Adaptação aos faróis e luzes da pista.</li>
            <li>Temperatura da Pista: Gestão da aderência e desgaste dos pneus.</li>
            <li>Fadiga: Manter a concentração durante longos períodos noturnos.</li>
            <li>Estratégia de Pit Stop: Planejamento cuidadoso para evitar surpresas.</li>
            <li>Comunicação: Ajustes rápidos entre piloto e equipe em ambiente limitado.</li>
          </ul>
        </section>

        {/* Tabela de dicas práticas */}
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-4">Dicas Práticas</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-border">
              <thead>
                <tr className="bg-background/80">
                  <th className="border border-border px-4 py-2 text-left">Aspecto</th>
                  <th className="border border-border px-4 py-2 text-left">Dica</th>
                  <th className="border border-border px-4 py-2 text-left">Importância</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Visibilidade</td>
                  <td className="border border-border px-4 py-2">Treinar com luzes artificiais e usar referências da pista</td>
                  <td className="border border-border px-4 py-2">Alta</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="border border-border px-4 py-2">Gestão de Pneus</td>
                  <td className="border border-border px-4 py-2">Monitorar temperatura e desgaste continuamente</td>
                  <td className="border border-border px-4 py-2">Alta</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Foco Mental</td>
                  <td className="border border-border px-4 py-2">Uso de visualização e respiração controlada</td>
                  <td className="border border-border px-4 py-2">Média</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="border border-border px-4 py-2">Comunicação</td>
                  <td className="border border-border px-4 py-2">Check-ins frequentes com a equipe para ajustes rápidos</td>
                  <td className="border border-border px-4 py-2">Alta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <p className="text-lg mb-4">
            Explore mais estratégias, equipamentos e táticas do René Rast em nossas outras seções.
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
