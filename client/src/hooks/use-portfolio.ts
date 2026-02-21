import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type ProjectResponse, type MessageInput, type MessageResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Dados estáticos para o portfólio (Netlify Compatibility)
const STATIC_PROJECTS: ProjectResponse = [
  {
    id: 1,
    title: "AXION PAY",
    description: "Plataforma de pagamentos integrada com múltiplos provedores (PSP) e suporte a Pix, Cartão e Cripto. Dashboard analítico em tempo real.",
    imageUrl: "/assets/axion-pay-main.png",
    techStack: ["Node.js", "Express", "React", "PostgreSQL", "Vite"],
    demoUrl: "https://axion-pay.netlify.app",
    githubUrl: "https://github.com/iaguu/axion-pay",
  },
  {
    id: 2,
    title: "AXION IA PANEL",
    description: "Painel de controle centralizado para orquestração de agentes de IA, automação de fluxos multimodais e gestão de prompts.",
    imageUrl: "/assets/axion-ia-panel.png",
    techStack: ["React", "TypeScript", "Vite", "OpenAI API", "Tailwind CSS"],
    demoUrl: "https://axion-ia-panel.netlify.app",
    githubUrl: "https://github.com/iaguu/axion-ia-panel",
  },
  {
    id: 3,
    title: "ANNE & TOM",
    description: "Aplicação interativa personalizada com sistema de mensagens, galeria de fotos e integração de bots para automação de tarefas.",
    imageUrl: "/assets/anne-tom.png",
    techStack: ["React", "Express", "Node.js", "Vite", "Framer Motion"],
    demoUrl: "https://anne-tom.netlify.app",
    githubUrl: "https://github.com/iaguu/anne-tom",
  },
  {
    id: 4,
    title: "AXION IDE",
    description: "Ambiente de desenvolvimento integrado (IDE) baseado em web para edição rápida e colaborativa de código no ecossistema AXION.",
    imageUrl: "/assets/axion-ide.png",
    techStack: ["React", "Monaco Editor", "Vite", "Node.js"],
    demoUrl: "https://axion-ide.netlify.app",
    githubUrl: "https://github.com/iaguu/axion-ide",
  }
];

// GET /api/projects - Usando dados estáticos para garantir funcionamento no Netlify
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      // Simula delay de rede para manter animação de loading
      await new Promise(resolve => setTimeout(resolve, 500));
      return STATIC_PROJECTS;
    },
  });
}

// POST /api/messages - Nota: Em deploys estáticos (Netlify) o envio de formulário requer backend ou Netlify Forms.
export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      // Validamos mas não enviamos para o backend inexistente no Netlify
      const validated = api.messages.create.input.parse(data);
      console.log("Mensagem recebida (Mock):", validated);
      
      // Simula sucesso
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { id: 1, ...validated, createdAt: new Date() } as MessageResponse;
    },
    onSuccess: () => {
      toast({
        title: "Mensagem simulada!",
        description: "Em ambiente estático, o contato via backend está desativado. Use os links sociais.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}