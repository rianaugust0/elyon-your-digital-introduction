import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe2,
  Code2,
  Zap,
  Sparkles,
  Instagram,
  MessageCircle,
  Gift,
} from "lucide-react";
import { Logo, LogoMark } from "@/components/elyon/Logo";
import { SectionLabel, fadeUp } from "@/components/elyon/SectionLabel";
import { ContactForm } from "@/components/elyon/ContactForm";
import { QRBlock } from "@/components/elyon/QRBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conheça a Elyon — Tecnologia, design e propósito" },
      {
        name: "description",
        content:
          "Uma carta aberta da Elyon Corporate: sites, sistemas e automações para empresários que querem crescer com excelência e propósito.",
      },
      { property: "og:title", content: "Conheça a Elyon" },
      {
        property: "og:description",
        content:
          "Tecnologia, design e automação para empresas que querem crescer.",
      },
    ],
  }),
  component: ElyonPage,
});

function ElyonPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.84 0.09 82 / 0.14), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, oklch(0.84 0.09 82 / 0.06), transparent 70%)",
        }}
      />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-10 sm:py-6">
        <Logo />
        <a
          href="#cta"
          className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          Falar conosco →
        </a>
      </header>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-10 text-center sm:px-10 sm:pt-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <LogoMark size={104} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.32em] text-gold sm:text-[11px]"
        >
          Olá! Somos a Elyon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mx-auto mt-5 max-w-3xl text-[2rem] font-light leading-[1.08] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl"
        >
          Construindo soluções que{" "}
          <span className="text-gold-gradient italic">impulsionam</span>{" "}
          negócios.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:mt-8 sm:max-w-xl sm:text-lg"
        >
          Ajudamos visionários, negócios e ideias a ganharem vida e crescerem com tecnologia, design, tráfego e automação —
          unindo excelência técnica e propósito em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#cta"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-medium text-background shadow-gold transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Quero conversar
          </a>
          <Link
            to="/historia"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/30 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-gold/60 hover:bg-card/80 sm:w-auto"
          >
            Conheça nossa história
          </Link>
        </motion.div>

        <div className="mt-20 h-px w-full max-w-xs hairline sm:mt-24" />
      </section>

      {/* QUEM SOMOS */}
      <section
        id="quem-somos"
        className="relative mx-auto max-w-4xl px-5 py-20 sm:px-10 sm:py-32"
      >
        <SectionLabel>Quem somos</SectionLabel>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="font-display mt-5 text-[1.75rem] font-light leading-[1.15] tracking-tight sm:mt-6 sm:text-5xl"
        >
          Dois jovens apaixonados por{" "}
          <span className="text-gold-gradient">tecnologia</span> — e por servir
          pessoas com excelência.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={2}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
        >
          A Elyon nasceu da convicção de que toda pessoa e toda empresa carrega um potencial
          extraordinário. Nosso trabalho é traduzir esse potencial em realidade: 
          seja tirando o seu primeiro sonho do papel de forma didática, ou criando soluções 
          sob medida que tornam negócios mais profissionais e lucrativos.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={3}
          className="mt-6 border-l-2 border-gold/40 pl-4 sm:mt-8"
        >
          <p className="text-[15px] italic leading-relaxed text-muted-foreground/90">
            *Elyon é uma palavra de origem hebraica que significa <strong className="font-medium text-foreground">"Deus Altíssimo"</strong>. É sob essa inspiração que buscamos entregar o nível mais alto de excelência, propósito e cuidado em tudo o que fazemos.
          </p>
        </motion.div>
      </section>

      {/* COMO SERVIMOS */}
      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Como podemos servir você</SectionLabel>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="font-display mt-5 text-[1.75rem] font-light leading-[1.15] tracking-tight sm:mt-6 sm:text-5xl"
          >
            Soluções pensadas para{" "}
            <span className="text-gold-gradient">cada estágio</span> do seu
            negócio.
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 sm:grid-cols-2">
          {[
            {
              icon: Sparkles,
              title: "Tráfego Pago & Posicionamento",
              desc: "Sua empresa não é vista? Fazemos gestão estratégica de anúncios para colocar o seu negócio na frente de quem já quer comprar de você.",
            },
            {
              icon: Globe2,
              title: "Criação de Sites",
              desc: "Landing pages e institucionais premium, focados em conversão, construídos com extrema excelência em cada detalhe.",
            },
            {
              icon: Code2,
              title: "Sistemas & Softwares",
              desc: "Ferramentas desenhadas para resolver os problemas reais da sua operação — personalizadas, sem soluções genéricas.",
            },
            {
              icon: Zap,
              title: "Automações Inteligentes",
              desc: "Elimine o trabalho braçal e repetitivo. Conectamos suas ferramentas para liberar o seu tempo para o que realmente importa.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group relative bg-background p-7 transition-colors hover:bg-card sm:p-10"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-gold/20 bg-card text-gold transition-all group-hover:border-gold/50 group-hover:shadow-gold">
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

        {/* MENSAGEM COMUNIDADE / INICIANTES / INDICAÇÕES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-16 rounded-2xl border border-gold/20 bg-card/30 p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gold-gradient opacity-[0.03]" />
          <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl relative z-10">
            Ainda não é empresário? <span className="text-gold-gradient italic">Tudo bem.</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-relaxed text-muted-foreground relative z-10">
            Nós acreditamos no seu potencial. Se você tem uma ideia e quer tirá-la do papel de forma profissional, nós te ajudamos a estruturar tudo. E se você conhece alguém — um amigo ou familiar — que tem um negócio e precisa de divulgação, tráfego ou organização, <strong>indicar a Elyon também é uma forma de servir e abençoar a vida deles.</strong>
          </p>
        </motion.div>
      </section>

      {/* COMPROMISSO */}
      <section className="relative mx-auto max-w-4xl px-5 py-20 sm:px-10 sm:py-32">
        <SectionLabel>Nosso compromisso</SectionLabel>
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={1}
          className="font-display mt-7 text-[1.5rem] font-light leading-[1.3] tracking-tight sm:mt-8 sm:text-4xl"
        >
          “Não queremos apenas vender. Queremos{" "}
          <span className="text-gold-gradient italic">
            construir relacionamentos
          </span>
          , gerar valor real e usar tudo aquilo que Deus nos capacitou a fazer
          para ajudar pessoas e empresas a prosperarem.”
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px origin-left bg-gold/40 sm:mt-10"
        />
      </section>

      {/* PRESENTE */}
      <section className="relative mx-auto max-w-5xl px-5 py-20 sm:px-10 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-card p-7 shadow-elegant sm:p-14"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-gold sm:text-[11px]">
              <Gift className="h-3.5 w-3.5" />
              Um presente para você
            </div>

            <h2 className="font-display mt-5 text-[1.75rem] font-light leading-[1.15] tracking-tight sm:mt-6 sm:text-5xl">
              Uma{" "}
              <span className="text-gold-gradient">conversa estratégica</span>{" "}
              gratuita.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Como agradecimento por fazer parte desta história, queremos
              oferecer um café virtual com você — para entender o seu momento, sua ideia ou o seu negócio, e
              descobrir como podemos servir.
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-foreground/90 sm:mt-8">
              {[
                "Sem compromisso",
                "Sem venda forçada",
                "Para empreendedores, iniciantes ou quem quer indicar alguém",
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

      {/* CTA + FORM + QR */}
      <section
        id="cta"
        className="relative mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-32"
      >
        <div className="text-center">
          <SectionLabel>Vamos conversar?</SectionLabel>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="font-display mx-auto mt-5 max-w-2xl text-[2rem] font-light leading-[1.08] tracking-tight sm:mt-6 sm:text-6xl"
          >
            Será uma honra{" "}
            <span className="text-gold-gradient italic">servir você</span>.
          </motion.h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] text-muted-foreground sm:text-base">
            Conte um pouco sobre você e escolha o canal preferido — abrimos a
            conversa em segundos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-10">
          <ContactForm />
          <div className="lg:sticky lg:top-10">
            <QRBlock path="/" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/elyon.corporate/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:border-gold/40 hover:text-foreground"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Instagram
          </a>
          <a
            href="https://wa.me/5562982224691"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:border-gold/40 hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-10 sm:pb-12 sm:pt-8">
        <div className="mb-8 h-px w-full hairline" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <Logo size={28} />
          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/historia"
              className="transition-colors hover:text-foreground"
            >
              Nossa história
            </Link>
            <a href="#cta" className="transition-colors hover:text-foreground">
              Falar com a Elyon
            </a>
          </div>
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Elyon Corporate
          </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5562982224691"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-background shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
      </a>
    </main>
  );
}
