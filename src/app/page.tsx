import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ServicesSection } from "@/components/ServicesSection";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ServicesSection />
      <Experience />
      <Contact />
    </main>
  );
}
