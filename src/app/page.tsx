import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorFX } from "@/components/CursorFX";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageEnter } from "@/components/PageEnter";

export default function Home() {
  return (
    <SmoothScroll>
      <PageEnter />
      <ScrollProgress />
      <CursorFX />
      <div className="noise-bg" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsMarquee />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
