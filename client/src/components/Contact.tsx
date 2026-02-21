import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertMessageSchema, type MessageInput } from "@shared/routes";
import { useSendMessage } from "@/hooks/use-portfolio";
import { Loader2, Send, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const mutation = useSendMessage();
  
  const form = useForm<MessageInput>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: MessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem uma ideia de projeto ou quer apenas bater um papo? 
            Sinta-se à vontade para entrar em contato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-white">Informações de Contato</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-muted-foreground">contato@seuportfolio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5511933331462" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    (11) 93333-1462
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Terminal Quote */}
            <div className="bg-[#1e1e1e] rounded-xl border border-white/10 p-4 font-mono text-sm shadow-lg">
              <p className="text-green-400">$ echo "Vamos construir algo incrível juntos!"</p>
              <p className="text-gray-400 mt-2">Vamos construir algo incrível juntos!</p>
              <span className="animate-pulse text-primary">_</span>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Nome</label>
                <input
                  {...form.register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                  placeholder="Seu nome completo"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                  placeholder="seu@email.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Mensagem</label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Como posso te ajudar?"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
