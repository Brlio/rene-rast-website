import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "INÍCIO", href: "/" },
    { name: "CARREIRA", href: "/career" },
    { name: "ESTATÍSTICAS", href: "/stats" },
    { name: "PARCEIROS", href: "/partners" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <a className="font-display font-black text-2xl tracking-tighter italic hover:text-primary transition-colors duration-300">
            RENÉ<span className="text-primary">RAST</span>
            <span className="text-xs font-mono text-muted-foreground block -mt-1 tracking-widest not-italic">OFICIAL</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="font-mono text-sm font-bold tracking-widest hover:text-primary transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="hidden md:flex rounded-none border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 group">
            <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button className="hidden md:flex rounded-none bg-primary text-primary-foreground font-display font-bold tracking-wider hover:bg-primary/90 clip-diagonal px-6" onClick={() => window.open('https://www.youtube.com/user/RastRene', '_blank')}>
            INSCREVER-SE
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-xl border-l border-primary/20 p-0">
              <div className="flex flex-col h-full justify-center items-center gap-8">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a 
                      className="font-display text-4xl font-black italic hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
                <Button className="mt-8 rounded-none bg-primary text-primary-foreground font-display font-bold text-xl px-8 py-6 clip-diagonal" onClick={() => window.open('https://www.youtube.com/user/ReneRastRacing', '_blank')}>
                  INSCREVER-SE
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
