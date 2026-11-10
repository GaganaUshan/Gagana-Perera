import { Hero } from "@/components/Hero";
import { AboutCarousel } from "@/components/AboutCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutCarousel />
      <ServicesSection />
      <SkillsSection />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
