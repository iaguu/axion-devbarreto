import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-lg border border-primary/50 group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-300">
            <Terminal className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tighter">
            Dev<span className="text-primary">Barreto</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/5511933331462"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary/10 border border-primary/50 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]"
          >
            Vamos conversar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="container px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511933331462"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
