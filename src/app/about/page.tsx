import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, Award, Compass, Sparkles, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Gagana Yushan Perera",
  description: "Learn about Gagana Yushan Perera - IT undergraduate at SLIIT, Project Management & Business Analysis enthusiast, and creative problem solver.",
};

const academicSubjects = [
  "Software Engineering",
  "Web Application Development",
  "Database Management",
  "Cloud Computing",
  "Project Management",
  "Business Analysis",
  "UI/UX Design",
  "Information Systems"
];

const englishCertificates = [
  { exam: "Cambridge PET", desc: "Preliminary English Test • Certificate in English", year: "2014" },
  { exam: "Cambridge KET", desc: "Key English Test • Certificate in English", year: "2013" },
  { exam: "Cambridge Flyers", desc: "Young Learners English • Certificate in English", year: "2012" },
  { exam: "Cambridge Movers", desc: "Young Learners English • Certificate in English", year: "2011" },
];

const valuePillars = [
  {
    title: "TECHNICAL UNDERSTANDING",
    desc: "An IT engineering foundation that helps me grasp system architectures, API workflows, technical constraints, and developer perspectives with ease."
  },
  {
    title: "PROJECT COORDINATION",
    desc: "Practical experience breaking complex deliverables into manageable sprint tasks, aligning cross-functional teams, mitigating risks, and safeguarding deadlines."
  },
  {
    title: "CREATIVE THINKING",
    desc: "A graphic and motion design background that allows me to approach business challenges visually, envision intuitive UX, and design beyond the obvious."
  },
  {
    title: "LEADERSHIP & COLLABORATION",
    desc: "Four years in AIESEC spearheading teams, negotiating corporate partnerships, and managing communications across multifaceted talent groups."
  },
  {
    title: "CONTINUOUS LEARNING",
    desc: "A relentless curiosity to master emerging methodologies, AI-assisted productivity pipelines, cloud infrastructures, and modern agile toolsets."
  }
];

const careerInterests = [
  "Project Management",
  "Business Analysis",
  "Product Management",
  "Digital Transformation",
  "UI/UX Design",
  "Business Process Improvement",
  "Technology Consulting",
  "Creative Problem-Solving"
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        number="01 / ABOUT"
        title="ABOUT GAGANA"
        subtitle="PROJECT MANAGEMENT • BUSINESS ANALYSIS • CREATIVE TECH"
        description="Bridging technology, business, and creativity to build meaningful digital solutions."
      />

      {/* Main Biography Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.portraitBox}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={500}
                  height={650}
                  className={styles.portrait}
                  priority
                />
              </div>
              <div className={styles.portraitMeta}>
                <h3>GAGANA YUSHAN PERERA</h3>
                <p>📍 Sri Lanka • Available for Project Management & BA Roles</p>
              </div>
            </div>

            <div className={styles.bioContent}>
              <span className="section-tag">THE JOURNEY</span>
              <h2 className={styles.subHeading}>
                ORGANIZING PEOPLE, PROCESSES, AND PURPOSE.
              </h2>
              
              <div className={styles.prose}>
                <p>
                  I&apos;m Gagana Yushan Perera, an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a strong focus on Project Management, Business Analysis, technology, and creative problem-solving.
                </p>
                <p>
                  My journey combines technical knowledge, project coordination, business-oriented thinking, and creative experience. Through professional opportunities, academic projects, and four years of involvement in AIESEC, I&apos;ve developed the ability to work with diverse teams, understand stakeholder requirements, coordinate projects, and transform ideas into practical solutions.
                </p>
                <p>
                  I&apos;ve gained industry experience in Project Management and Business Analysis at 1BillionTech, Production Operations at Innodata Lanka, and Creative Design at Avantous Global — allowing me to understand different stages of the digital product development process.
                </p>
                <p>
                  I particularly enjoy understanding problems, identifying opportunities, organizing people and processes, and finding effective ways to turn ideas into solutions. I&apos;m continuously exploring how technology, business strategy, and creativity can work together to create meaningful impact.
                </p>
              </div>

              <div className={styles.bioHighlights}>
                <div className={styles.highlightCard}>
                  <h4>SLIIT MALABE</h4>
                  <p>BSc (Hons) in Information Technology (2023–2026)</p>
                </div>
                <div className={styles.highlightCard}>
                  <h4>AIESEC IN SLIIT</h4>
                  <p>4-Year Leadership Journey & Art Director</p>
                </div>
                <div className={styles.highlightCard}>
                  <h4>INDUSTRY ROLES</h4>
                  <p>1BillionTech • Innodata Lanka • Avantous Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Academic Rigor */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">ACADEMIC FOUNDATION</span>
              <h2 className="section-title">EDUCATION</h2>
            </div>
            <span className={styles.headerNote}>2023 – 2026 • FACULTY OF COMPUTING</span>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.eduMain}>
              <div className={styles.eduIconBox}>
                <GraduationCap size={28} />
              </div>
              <div className={styles.eduDetails}>
                <span className={styles.eduDegree}>BSc (Hons) in Information Technology</span>
                <h3 className={styles.eduInstitution}>
                  Sri Lanka Institute of Information Technology (SLIIT)
                </h3>
                <p className={styles.eduCampus}>Faculty of Computing | Malabe, Sri Lanka</p>
              </div>
            </div>

            <div className={styles.academicFocus}>
              <h4 className={styles.focusTitle}>Core Academic Disciplines</h4>
              <div className={styles.subjectGrid}>
                {academicSubjects.map((subject, idx) => (
                  <div key={idx} className={styles.subjectItem}>
                    <span className={styles.subjectDot}>/</span>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Language Qualifications */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">COMMUNICATION PROFICIENCY</span>
              <h2 className="section-title">ENGLISH QUALIFICATIONS</h2>
            </div>
            <span className={styles.headerNote}>BRITISH COUNCIL / CAMBRIDGE ENGLISH</span>
          </div>

          <div className={styles.cambridgeGrid}>
            {englishCertificates.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <div className={styles.certTop}>
                  <BookOpen size={20} className={styles.certIcon} />
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
                <h3 className={styles.certExam}>{cert.exam}</h3>
                <p className={styles.certDesc}>{cert.desc}</p>
                <span className={styles.certBody}>Cambridge English Qualifications</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring To The Table */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">VALUE PROPOSITION</span>
              <h2 className="section-title">WHAT I BRING TO THE TABLE</h2>
            </div>
            <p className={styles.headerQuote}>
              &ldquo;A distinctive combination of technical logic, project structure, and creative intuition.&rdquo;
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {valuePillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <span className={styles.pillarNumber}>{`0${idx + 1}`}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Interests & Long-Term Ambitions */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.ambitionBox}>
            <div className={styles.ambitionText}>
              <span className="section-tag">CAREER INTERESTS & AMBITION</span>
              <h2 className={styles.ambitionTitle}>
                THE INTERSECTION OF TECH, STRATEGY, & PRODUCT LEADERSHIP.
              </h2>
              <p className={styles.ambitionDesc}>
                I&apos;m particularly interested in growing within the intersection of technology, business, and product development. My long-term ambition is to become a multifaceted professional who can fluently understand both the business requirements and engineering constraints of a product, leading teams toward impactful, scalable solutions.
              </p>

              <div className={styles.interestPills}>
                {careerInterests.map((interest, idx) => (
                  <span key={idx} className={styles.interestPill}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.ambitionActions}>
              <Link href="/experience" className="btn-primary" style={{ width: "100%" }}>
                EXPLORE PROFESSIONAL EXPERIENCE <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline" style={{ width: "100%" }}>
                GET IN TOUCH FOR OPPORTUNITIES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

