import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectCard } from "@/components/ProjectCard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        
        {/* Projects Section */}
        <section id="projects" className="py-24 bg-background relative">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meus <span className="text-gradient">Projetos</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Uma seleção de projetos recentes que demonstram minhas habilidades técnicas e criativas.
              </p>
            </motion.div>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
            ) : projects && projects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-card/50">
                <p className="text-muted-foreground">Nenhum projeto encontrado. Adicione alguns no banco de dados.</p>
              </div>
            )}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
