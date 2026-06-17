import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function SectionLabel({ children }: { children: React.ReactNode }) {
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
