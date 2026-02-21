import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Sparkles, Bot, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: <Bot className="w-6 h-6 text-secondary" />,
    title: "IA & Prompt Engineering",
    description: "Especialista em Agentes RAG, Codex, Gemini 3 Pro, Claude e Anthropic.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Automação Inteligente",
    description: "N8N, Bots para WhatsApp/Instagram e fluxos de trabalho autônomos.",
  },
  {
    icon: <Layout className="w-6 h-6 text-accent" />,
    title: "Full-Stack Development",
    description: "React, ReactNative/Expo, Node.js, Electron, TypeScript e Python.",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-400" />,
    title: "Visão de Produto",
    description: "Transformo ideias em operações reais com foco em ROI e escalabilidade.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-black/20 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              Sou Iago Barreto (DevBarreto), CEO da AxionEnterprise. Especialista em criar ecossistemas digitais completos que unem engenharia de software e inteligência artificial.
            </p>
            <p>
              Com formação na UNIFECAF/RocketSeat em IA e Automação, domino as ferramentas mais avançadas do mercado como Codex, Gemini, Windsurf e OpenClaw para acelerar o desenvolvimento e a entrega de valor.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
