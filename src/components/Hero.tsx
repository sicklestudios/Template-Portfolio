"use client";

import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { profile } from "@/lib/config";

const name = profile.name.split("");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="grid-bg absolute inset-0" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 45%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-3) 0%, var(--accent) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 mb-8"
      >
        <div className="relative rounded-full p-[3px]" style={{ background: "var(--gradient)" }}>
          <div className="rounded-full bg-bg p-1">
            <Avatar seed={profile.avatarSeed} size={104} className="rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="relative z-10 mb-4 flex items-center gap-2 text-sm text-fg-dim"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
        </span>
        Available for select projects
      </motion.p>

      <h1 className="relative z-10 flex flex-wrap justify-center overflow-hidden text-center font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
        <motion.span
          variants={container}
          initial="hidden"
          animate="show"
          className="inline-flex flex-wrap justify-center"
        >
          {name.map((char, i) => (
            <span key={i} className="overflow-hidden pb-2">
              <motion.span variants={letter} className="inline-block">
                {char === " " ? " " : char}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 mt-4 text-center text-xl text-fg-dim sm:text-2xl"
      >
        <span className="text-gradient font-medium">{profile.role}</span> &mdash;{" "}
        {profile.tagline}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="relative z-10 mt-10 flex gap-4"
      >
        <a
          href="#work"
          className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--accent-2)]"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="glass rounded-full px-6 py-3 text-sm font-medium text-fg transition-all hover:scale-105 hover:border-accent-2/50"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.6 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-fg-dim"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-fg-dim to-transparent" />
      </motion.div>
    </section>
  );
}
