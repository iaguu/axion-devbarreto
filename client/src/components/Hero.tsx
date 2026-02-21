import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            CEO AxionEnterprise
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Iago Barreto <br />
            <span className="text-gradient">DevBarreto</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono h-20">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack & IA Prompt Engineer.",
                  "Especialista em Agentes RAG.",
                  "CEO AxionEnterprise.",
                  "Transformo ideias em operações.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)]"
            >
              Ver Projetos
            </a>
            <div className="flex items-center gap-4 px-6">
              <SocialLink href="https://github.com/iaguu" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://wa.me/5511933331462" icon={<FaWhatsapp className="w-5 h-5" />} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-xs text-muted-foreground">terminal — iaguu — 80x24</div>
            </div>
            <div className="p-6 text-gray-300 space-y-4">
              <p>
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">whoami</span>
              </p>
              <p className="text-gray-500">Iago Barreto (DevBarreto)</p>
              <p>
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">role</span>
              </p>
              <p className="text-gray-500">CEO @ AxionEnterprise | IA Engineer</p>
              <p>
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">stack</span> --list
              </p>
              <p className="text-gray-500">
                React, Node, Python, N8N, Gemini 3 Pro, Claude, Anthropic
              </p>
              <p>
                <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">status</span>
              </p>
              <p className="text-green-400">
                READY <span className="text-gray-300">Transformando ideias em código e lucro.</span>
              </p>
              <div className="animate-pulse">_</div>
            </div>
          </div>
          
          {/* Decorative code elements behind */}
          <div className="absolute -top-10 -right-10 w-full h-full border border-primary/20 rounded-xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-full h-full border border-secondary/20 rounded-xl -z-10" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-white transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-primary/50 text-muted-foreground hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
