import projectsData from "@/data/projects.json";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  seed: string; // used for the generated cover art
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const profile = {
  name: "Alex Rivers",
  role: "Software Engineer",
  tagline: "I build fast, thoughtful products for the web.",
  location: "Remote / Earth",
  email: "hello@example.com",
  avatarSeed: "alex-rivers-nextgen",
  bio: "I'm a software engineer who loves turning complex problems into simple, elegant interfaces. Currently focused on performant web apps, developer tooling, and the occasional 3D experiment.",
  resumeUrl: "#",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Framer Motion",
  "Tailwind CSS",
  "Rust",
  "WebGL",
  "Python",
  "Redis",
  "Kubernetes",
];

// Projects are loaded from src/data/projects.json — edit that file to add,
// remove, or reorder project cards without touching any component code.
export const projects: Project[] = projectsData;

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    org: "Northlight Labs",
    period: "2023 — Present",
    description:
      "Leading the platform team building the core editor experience used by 200k+ monthly users.",
  },
  {
    role: "Software Engineer",
    org: "Ferrous Systems",
    period: "2021 — 2023",
    description:
      "Shipped performance-critical services in Rust and TypeScript, reduced infra costs by 40%.",
  },
  {
    role: "Frontend Engineer",
    org: "Studio Nine",
    period: "2019 — 2021",
    description:
      "Built motion-heavy marketing sites and internal tools for a design-led product agency.",
  },
];

export const seo = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};
