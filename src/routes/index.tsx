import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Globe2,
  Code2,
  Zap,
  Sparkles,
  ArrowRight,
  Instagram,
  MessageCircle,
  Gift,
  QrCode,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conheça a Elyon — Tecnologia, design e propósito" },
      {
        name: "description",
        content:
          "Uma carta aberta da Elyon: sites, sistemas e automações para empresas que querem crescer com excelência.",
      },
      { property: "og:title", content: "Conheça a Elyon" },
      {
        property: "og:description",
        content: "Tecnologia, design e automação para empresas que querem crescer.",
      },
    ],
  }),
  component: ElyonPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold"
    >
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </motion.div>
  );
}

function ElyonPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.84 0.09 82 / 0.12), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, oklch(0.84 0.09 82 / 0.06), transparent 70%)",
        }}
      />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-gradient text-[13px] font-display font-semibold text-background shadow-gold">
            E
          </span>
          <span className="font-display text-lg tracking-tight">Elyon</span>
        </a>
        <a
          href="#cta"
          className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          Falar conosco →
        </a>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-16 text-center sm:px-10 sm:pt-24 lg:pt-32"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-10 grid h-20 w-20 place-items-center rounded-3xl border border-gold/20 bg-card shadow-elegant sm:h-24 sm:w-24"
          >
            <span className="font-display text-4xl text-gold-gradient sm:text-5xl">E</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] uppercase tracking-[0.32em] text-gold"
          >
            Olá! Somos a Elyon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mx-auto mt-6 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Construindo soluções que{" "}
            <span className="text-gold-gradient italic">impulsionam</span> negócios.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Nosso propósito é ajudar empresas a crescerem através da tecnologia,
            design e automação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <a
              href="#quem-somos"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-gold/60 hover:bg-card/80"
            >
              Conheça nossa história
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative hairline */}
        <div className="mt-24 h-px w-full max-w-xs hairline" />
      </section>

      {/* QUEM SOMOS */}
      <section
        id="quem-somos"
        className="relative mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <SectionLabel>Quem somos</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-5xl"
        >
          Dois jovens apaixonados por{" "}
          <span className="text-gold-gradient">tecnologia</span> e por servir
          pessoas.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={2}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Acreditamos que cada empresa possui um potencial extraordinário — e
          queremos ajudar empresários a se tornarem mais profissionais,
          organizados e preparados para crescer.
        </motion.p>
      </section>

      {/* COMO SERVIMOS */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Como podemos servir você</SectionLabel>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-5xl"
          >
            Soluções pensadas para{" "}
            <span className="text-gold-gradient">cada estágio</span> do seu
            negócio.
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {[
            {
              icon: Globe2,
              title: "Sites Profissionais",
              desc: "Landing pages modernas e de alta conversão, construídas com cuidado em cada detalhe.",
            },
            {
              icon: Code2,
              title: "Sistemas Personalizados",
              desc: "Softwares sob medida, desenvolvidos para resolver problemas reais do seu dia a dia.",
            },
            {
              icon: Zap,
              title: "Automações",
              desc: "Menos trabalho manual, mais eficiência. Liberamos seu tempo para o que importa.",
            },
            {
              icon: Sparkles,
              title: "Presença Digital",
              desc: "Estratégias claras para fortalecer sua marca e gerar autoridade online.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group relative bg-background p-8 transition-colors hover:bg-card sm:p-10"
            >
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl border border-gold/20 bg-card text-gold transition-all group-hover:border-gold/50 group-hover:shadow-gold">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPROMISSO */}
      <section className="relative mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
        <SectionLabel>Nosso compromisso</SectionLabel>
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="font-display mt-8 text-2xl font-light leading-[1.3] tracking-tight sm:text-4xl"
        >
          “Não queremos apenas vender. Queremos{" "}
          <span className="text-gold-gradient italic">construir relacionamentos</span>,
          gerar valor e utilizar aquilo que Deus nos capacitou a fazer para
          ajudar pessoas e empresas a prosperarem.”
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 h-px origin-left bg-gold/40"
        />
      </section>

      {/* PRESENTE */}
      <section className="relative mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-card p-8 shadow-elegant sm:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(0.84 0.09 82 / 0.25), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-gold">
              <Gift className="h-3.5 w-3.5" />
              Um presente para você
            </div>

            <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              Uma <span className="text-gold-gradient">conversa estratégica</span>{" "}
              gratuita.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Como forma de agradecimento por fazer parte desta história,
              gostaríamos de oferecer um café virtual com você.
            </p>

            <ul className="mt-8 space-y-3 text-[15px] text-foreground/90">
              {[
                "Sem compromisso",
                "Sem venda forçada",
                "Apenas para entender seu negócio e descobrir como podemos servir",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
        <SectionLabel>Vamos conversar?</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="font-display mx-auto mt-6 max-w-2xl text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl"
        >
          Será uma honra{" "}
          <span className="text-gold-gradient italic">servir você</span>.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium text-background shadow-gold transition-transform hover:scale-[1.02]"
          >
            Falar com a Elyon
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:border-gold/40 hover:text-foreground"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              Instagram
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:border-gold/40 hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-muted-foreground">
              <QrCode className="h-4 w-4" strokeWidth={1.5} />
              QR Code
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-6 pb-12 pt-8 sm:px-10">
        <div className="mb-8 h-px w-full hairline" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-gradient text-[10px] font-display font-semibold text-background">
              E
            </span>
            <span className="font-display tracking-tight text-foreground/80">Elyon</span>
          </div>
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Elyon — Feito com propósito.
          </p>
        </div>
      </footer>
    </main>
  );
}
