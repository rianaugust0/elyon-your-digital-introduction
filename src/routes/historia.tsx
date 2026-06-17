import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Compass, Rocket, Sparkles, Heart } from "lucide-react";
import { Logo, LogoMark } from "@/components/elyon/Logo";
import { SectionLabel, fadeUp } from "@/components/elyon/SectionLabel";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa história — Elyon Corporate" },
      {
        name: "description",
        content:
          "A jornada da Elyon Corporate: como dois jovens transformaram fé, tecnologia e propósito em soluções que servem empresários.",
      },
      { property: "og:title", content: "Nossa história — Elyon" },
      {
        property: "og:description",
        content:
          "A jornada da Elyon: fé, tecnologia e propósito a serviço de empresários.",
      },
    ],
  }),
  component: HistoriaPage,
});

const timeline = [
  {
    year: "O início",
    icon: Compass,
    title: "Uma convicção",
    desc: "Tudo começou com uma certeza simples: tecnologia bem feita pode mudar a vida de empresários. Unimos fé, talento técnico e disciplina para servir.",
  },
  {
    year: "Primeiros passos",
    icon: Sparkles,
    title: "Os primeiros projetos",
    desc: "Construímos sites e sistemas para amigos e parceiros. A cada entrega, aprendemos o valor de unir excelência estética e funcionalidade real.",
  },
  {
    year: "Hoje",
    icon: Rocket,
    title: "Elyon Corporate",
    desc: "Atendemos empresários que buscam crescer com profissionalismo. Sites, sistemas, automações e presença digital — sob medida, sem ruído.",
  },
  {
    year: "Sempre",
    icon: Heart,
    title: "O propósito permanece",
    desc: "Servir pessoas, construir relacionamentos e gerar valor real. É isso que move cada linha de código e cada decisão de design.",
  },
];

const highlights = [
  {
    title: "Sites Profissionais",
    desc: "Identidade visual coesa, performance e copy que converte.",
  },
  {
    title: "Sistemas Sob Medida",
    desc: "Painéis administrativos, dashboards e ferramentas internas.",
  },
  {
    title: "Automações",
    desc: "Integrações que eliminam tarefas repetitivas do seu time.",
  },
  {
    title: "Presença Digital",
    desc: "Estratégia, conteúdo e autoridade para o longo prazo.",
  },
];

function HistoriaPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -10%, oklch(0.84 0.09 82 / 0.14), transparent 60%)",
        }}
      />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-10 sm:py-6">
        <Logo />
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Voltar</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-10 text-center sm:px-10 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <LogoMark size={88} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[10px] uppercase tracking-[0.32em] text-gold sm:text-[11px]"
        >
          Nossa história
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-5 max-w-3xl text-[2rem] font-light leading-[1.08] tracking-tight sm:mt-6 sm:text-6xl"
        >
          Fé, tecnologia e{" "}
          <span className="text-gold-gradient italic">propósito</span> — em cada
          linha que escrevemos.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
        >
          A Elyon não é apenas uma empresa de tecnologia. É um chamado para
          servir empresários através daquilo que fazemos com excelência.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="relative mx-auto max-w-3xl px-5 py-16 sm:px-10 sm:py-24">
        <SectionLabel>Linha do tempo</SectionLabel>
        <h2 className="font-display mt-5 text-[1.75rem] font-light leading-[1.15] tracking-tight sm:text-5xl">
          De uma{" "}
          <span className="text-gold-gradient">convicção</span> a uma jornada.
        </h2>

        <ol className="relative mt-12 sm:mt-16">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent sm:left-[19px]"
          />
          {timeline.map((item, i) => (
            <motion.li
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="relative mb-10 pl-12 last:mb-0 sm:pl-16"
            >
              <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-gold/40 bg-card text-gold shadow-gold sm:h-10 sm:w-10">
                <item.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={1.5} />
              </span>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold sm:text-[11px]">
                {item.year}
              </p>
              <h3 className="font-display mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Destaques */}
      <section className="relative mx-auto max-w-5xl px-5 py-16 sm:px-10 sm:py-24">
        <div className="text-center">
          <SectionLabel>Destaques de serviços</SectionLabel>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-[1.75rem] font-light leading-[1.15] tracking-tight sm:text-5xl">
            O que entregamos com{" "}
            <span className="text-gold-gradient">excelência</span>.
          </h2>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="bg-background p-7 transition-colors hover:bg-card sm:p-9"
            >
              <h3 className="font-display text-lg font-medium tracking-tight sm:text-xl">
                {h.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-10 sm:py-28">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-[1.75rem] font-light leading-[1.1] tracking-tight sm:text-5xl"
        >
          Pronto para escrever{" "}
          <span className="text-gold-gradient italic">o próximo capítulo</span>{" "}
          com a gente?
        </motion.h2>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            hash="cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-background shadow-gold transition-transform hover:scale-[1.02]"
          >
            Quero conversar com a Elyon
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <footer className="relative mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8">
        <div className="mb-8 h-px w-full hairline" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <Logo size={28} />
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Elyon Corporate
          </p>
        </div>
      </footer>
    </main>
  );
}
