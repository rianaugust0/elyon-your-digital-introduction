import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "5562982224691";
const INSTAGRAM_HANDLE = "elyon.corporate";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(80, "Nome muito longo"),
  business: z
    .string()
    .trim()
    .min(2, "Conte o nome da sua empresa")
    .max(80, "Nome muito longo"),
  channel: z.enum(["whatsapp", "instagram"]),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { channel: "whatsapp" },
  });

  const channel = watch("channel");

  const onSubmit = (data: FormData) => {
    setSubmitting(true);
    const message = `Olá, Elyon! Meu nome é ${data.name}, da ${data.business}. Gostaria de agendar a conversa estratégica gratuita.`;
    const url =
      data.channel === "whatsapp"
        ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
        : `https://instagram.com/${INSTAGRAM_HANDLE}`;
    toast.success("Tudo certo! Abrindo a conversa…");
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitting(false);
    }, 400);
  };

  const channels = [
    { id: "whatsapp" as const, label: "WhatsApp", icon: MessageCircle },
    { id: "instagram" as const, label: "Instagram", icon: Instagram },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-lg space-y-5 rounded-2xl border border-gold/20 bg-card/60 p-6 backdrop-blur sm:p-8"
      noValidate
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-[11px] uppercase tracking-[0.22em] text-gold"
        >
          Seu nome
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          maxLength={80}
          {...register("name")}
          className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="Como você gosta de ser chamado"
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="business"
          className="block text-[11px] uppercase tracking-[0.22em] text-gold"
        >
          Sua empresa
        </label>
        <input
          id="business"
          type="text"
          autoComplete="organization"
          maxLength={80}
          {...register("business")}
          className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
          placeholder="Nome do seu negócio"
        />
        {errors.business && (
          <p className="text-xs text-destructive">{errors.business.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <span className="block text-[11px] uppercase tracking-[0.22em] text-gold">
          Por onde prefere conversar?
        </span>
        <div className="grid grid-cols-2 gap-2">
          {channels.map((c) => {
            const active = channel === c.id;
            return (
              <button
                type="button"
                key={c.id}
                onClick={() => setValue("channel", c.id)}
                className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm transition-all ${
                  active
                    ? "border-gold/60 bg-gold/10 text-foreground shadow-gold"
                    : "border-border bg-background/40 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <c.icon className="h-4 w-4" strokeWidth={1.5} />
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-4 text-sm font-medium text-background shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Agendar minha conversa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Sem compromisso. Sem venda forçada. Apenas um café virtual.
      </p>
    </motion.form>
  );
}
