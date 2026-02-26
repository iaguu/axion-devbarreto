import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import projectsData from "../data/projects.json";

// GET /api/projects - Usando dados locais (JSON) para garantir funcionamento no Netlify/cPanel
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      // Simula delay de rede para manter animação de loading
      await new Promise(resolve => setTimeout(resolve, 500));
      return projectsData;
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