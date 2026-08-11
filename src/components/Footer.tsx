import { profile } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-fg-dim sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
