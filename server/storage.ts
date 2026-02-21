import {
  projects,
  messages,
  type Project,
  type InsertProject,
  type Message,
  type InsertMessage,
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private messages: Map<number, Message>;
  private currentId: number = 1;
  private messageId: number = 1;

  constructor() {
    this.projects = new Map();
    this.messages = new Map();
    this.seedProjects();
  }

  private seedProjects() {
    const initialProjects: InsertProject[] = [
      {
        title: "AXION PAY",
        description: "Plataforma de pagamentos integrada com múltiplos provedores (PSP) e suporte a Pix, Cartão e Cripto. Dashboard analítico em tempo real.",
        imageUrl: "/assets/axion-pay-main.png",
        techStack: ["Node.js", "Express", "React", "PostgreSQL", "Vite"],
        demoUrl: "https://axion-pay.netlify.app",
        githubUrl: "https://github.com/iaguu/axion-pay",
      },
      {
        title: "AXION IA PANEL",
        description: "Painel de controle centralizado para orquestração de agentes de IA, automação de fluxos multimodais e gestão de prompts.",
        imageUrl: "/assets/axion-ia-panel.png",
        techStack: ["React", "TypeScript", "Vite", "OpenAI API", "Tailwind CSS"],
        demoUrl: "https://axion-ia-panel.netlify.app",
        githubUrl: "https://github.com/iaguu/axion-ia-panel",
      },
      {
        title: "ANNE & TOM",
        description: "Aplicação interativa personalizada com sistema de mensagens, galeria de fotos e integração de bots para automação de tarefas.",
        imageUrl: "/assets/anne-tom.png",
        techStack: ["React", "Express", "Node.js", "Vite", "Framer Motion"],
        demoUrl: "https://anne-tom.netlify.app",
        githubUrl: "https://github.com/iaguu/anne-tom",
      },
      {
        title: "AXION IDE",
        description: "Ambiente de desenvolvimento integrado (IDE) baseado em web para edição rápida e colaborativa de código no ecossistema AXION.",
        imageUrl: "/assets/axion-ide.png",
        techStack: ["React", "Monaco Editor", "Vite", "Node.js"],
        demoUrl: "https://axion-ide.netlify.app",
        githubUrl: "https://github.com/iaguu/axion-ide",
      }
    ];

    initialProjects.forEach((p) => {
      const id = this.currentId++;
      this.projects.set(id, { ...p, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentId++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.messageId++;
    const newMessage = { ...message, id, createdAt: new Date() };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();