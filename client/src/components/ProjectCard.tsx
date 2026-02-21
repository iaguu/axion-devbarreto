import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectResponse } from "@shared/routes";

type Project = ProjectResponse[0];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground font-mono">Sem imagem</span>
          </div>
        )}
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              <Github className="w-4 h-4" /> Código
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
