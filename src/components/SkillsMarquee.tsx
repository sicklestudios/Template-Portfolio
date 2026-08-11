"use client";

import { skills } from "@/lib/config";

export function SkillsMarquee() {
  const loop = [...skills, ...skills];
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-soft py-10">
      <div
        className="marquee-track"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        {loop.map((skill, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display text-3xl font-semibold text-fg-dim/80 transition-colors hover:text-fg sm:text-4xl"
          >
            {skill}
            <span className="text-accent-2">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
