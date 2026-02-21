import { Terminal, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-white/5 p-2 rounded-lg border border-white/10">
              <Terminal className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="font-mono text-muted-foreground text-sm">
              © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> usando React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
