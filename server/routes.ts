import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.projects.list.path, async (req, res) => {
    try {
      const allProjects = await storage.getProjects();
      res.json(allProjects);
    } catch (e) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Seed the database
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Axion Dev Studio",
      description: "Plataforma de aceleração de produtos digitais com IA aplicada em produto, código e crescimento.",
      imageUrl: "https://pdv.axionenterprise.cloud/images/pdv-real/pdv-dashboard.png",
      techStack: ["IA", "React", "Node.js", "Telemetria"],
      demoUrl: "https://dev.axionenterprise.cloud/",
      githubUrl: "https://github.com/iaguu",
    });
    await storage.createProject({
      title: "Axion Flow",
      description: "Marketing orientado por IA para crescer com previsibilidade, conectando criativos e automações.",
      imageUrl: "https://flow.axionenterprise.cloud/images/flow-hero.png",
      techStack: ["IA", "N8N", "Marketing Automation", "CRM"],
      demoUrl: "https://flow.axionenterprise.cloud/",
      githubUrl: "https://github.com/iaguu",
    });
    await storage.createProject({
      title: "Axion PDV",
      description: "PDV moderno com Electron para operações offline, gestão de pedidos e impressão profissional.",
      imageUrl: "https://pdv.axionenterprise.cloud/images/pdv-real/pdv-pedidos.png",
      techStack: ["Electron", "React", "SQLite", "Node.js"],
      demoUrl: "https://pdv.axionenterprise.cloud/",
      githubUrl: "https://github.com/iaguu",
    });
    await storage.createProject({
      title: "Anne & Tom - Pizzaria",
      description: "Ecossistema completo com site, PDV desktop e app mobile para gestão de pizzaria.",
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
      techStack: ["Next.js", "Electron", "React Native", "Express"],
      demoUrl: "https://devbarreto.com/",
      githubUrl: "https://github.com/iaguu",
    });
  }
}
