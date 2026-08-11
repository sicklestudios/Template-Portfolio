"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/config";

export function Experience() {
  return (
    <section id="experience" className="relative bg-bg-soft px-6 py-32">
      <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-16"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-2">
          Career
        </p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Experience</h2>
      </motion.div>

      <div className="relative border-l border-border pl-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.role + item.org}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-2 shadow-[0_0_12px_var(--accent-2)]" />
            <p className="mb-1 text-xs uppercase tracking-widest text-fg-dim">{item.period}</p>
            <h3 className="text-xl font-semibold text-fg">
              {item.role} <span className="text-fg-dim">· {item.org}</span>
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-dim">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
