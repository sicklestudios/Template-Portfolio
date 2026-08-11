"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/config";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-16"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-2">
          Selected work
        </p>
        <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects I&apos;m proud of
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
