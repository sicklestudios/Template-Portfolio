"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/config";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-3) 0%, var(--accent) 45%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-2">
          Contact
        </p>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s build something <span className="text-gradient">great</span> together.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-fg-dim">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block rounded-full bg-fg px-8 py-4 text-sm font-medium text-bg"
        >
          {profile.email}
        </motion.a>
        <div className="mt-10 flex justify-center gap-6 text-sm text-fg-dim">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-fg">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
