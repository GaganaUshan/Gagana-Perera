import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Projects } from "@/components/Projects";
import { StatsSection } from "@/components/StatsSection";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesSection />
      <SkillsSection />
      <Projects />
      <StatsSection />
      <Experience />
      <Contact />
    </main>
  );
}
