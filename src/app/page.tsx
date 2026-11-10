import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
