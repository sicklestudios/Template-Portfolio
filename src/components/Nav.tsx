"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/config";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="text-sm font-semibold tracking-tight text-fg">
          {profile.name.split(" ")[0]}
          <span className="text-accent-2">.</span>
        </a>
        <ul className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-fg-dim transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-fg px-4 py-1.5 text-xs font-medium text-bg transition-transform hover:scale-105"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
