"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/config";

function hashSeed(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h;
}
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTES = [
  ["#9b5cff", "#4fe0ff"],
  ["#ff8a5c", "#ff5c8a"],
  ["#5cff9b", "#5c7bff"],
  ["#ff5c5c", "#9b5cff"],
];

function CoverArt({ seed }: { seed: string }) {
  const rand = mulberry32(hashSeed(seed));
  const palette = PALETTES[Math.floor(rand() * PALETTES.length)];
  const blobs = Array.from({ length: 3 }).map((_, i) => ({
    cx: 20 + rand() * 60,
    cy: 20 + rand() * 60,
    r: 20 + rand() * 30,
    key: i,
  }));
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pg-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="100%" stopColor={palette[1]} />
        </linearGradient>
        <filter id={`blur-${seed}`}>
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <rect width="100" height="100" fill="#0b0b14" />
      <g filter={`url(#blur-${seed})`} opacity="0.7">
        {blobs.map((b) => (
          <circle key={b.key} cx={b.cx} cy={b.cy} r={b.r} fill={`url(#pg-${seed})`} />
        ))}
      </g>
    </svg>
  );
}

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
      style={{ perspective: 800 }}
    >
      <motion.a
        href={project.link}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass group relative block overflow-hidden rounded-3xl"
      >
        <div className="relative h-56 overflow-hidden">
          <motion.div
            style={{ transform: "translateZ(30px)" }}
            className="h-full w-full transition-transform duration-500 group-hover:scale-110"
          >
            <CoverArt seed={project.seed} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
          {featured && (
            <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent-2">
              Featured
            </span>
          )}
        </div>
        <div style={{ transform: "translateZ(20px)" }} className="relative p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-fg">{project.title}</h3>
            <span className="text-xs text-fg-dim">{project.year}</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-fg-dim">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-fg-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "0 0 0 1px var(--accent), 0 20px 60px -20px var(--accent)" }} />
      </motion.a>
    </motion.div>
  );
}
