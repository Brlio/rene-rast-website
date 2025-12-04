import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h2 className="font-display font-black text-3xl italic text-white mb-6">
              RENÉ<span className="text-primary">RAST</span>
            </h2>

            <p className="font-body text-muted-foreground mb-8 max-w-xs">
              Hub digital oficial do Tricampeão DTM René Rast. Acompanhe a jornada dentro e fora das pistas.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Instagram, link: "https://www.instagram.com/renerast/" },
                { icon: Twitter, link: "https://x.com/ReneRastRacing" },
                { icon: Facebook, link: "https://www.facebook.com/rene.rast.10/" },
                { icon: Youtube, link: "https://www.youtube.com/@RastRene" }
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors p-2 border border-white/10 hover:border-primary/50 rounded-none"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-mono text-white font-bold mb-6 tracking-widest text-sm">MAPA DO SITE</h3>
            <ul className="space-y-4">
              {[
                { name: "Início", href: "/" },
                { name: "Carreira", href: "/career" },
                { name: "Estatísticas", href: "/stats" },
                { name: "Parceiros", href: "/partners" },
                { name: "Loja", href: "/store" },
                { name: "Contato", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

           
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 RENÉ RAST. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-white">
              POLÍTICA DE PRIVACIDADE
            </a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-white">
              IMPRESSÃO
            </a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-white">
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
