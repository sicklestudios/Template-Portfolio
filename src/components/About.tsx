"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-32">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-2"
      >
        About
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-2xl leading-relaxed text-fg sm:text-4xl sm:leading-snug"
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.15 }}
        className="mt-10 flex flex-wrap gap-4 text-sm text-fg-dim"
      >
        <span className="glass rounded-full px-4 py-2">📍 {profile.location}</span>
        <span className="glass rounded-full px-4 py-2">✉️ {profile.email}</span>
      </motion.div>
    </section>
  );
}
