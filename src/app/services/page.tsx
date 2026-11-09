import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Award, CheckCircle2, ArrowRight, Layers, Layout, Cpu, Kanban, Wrench, ShieldCheck } from "lucide-react";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services & Expertise | Gagana Yushan Perera",
  description: "Explore services, skills matrix, and professional certifications in Project Management, Business Analysis, Creative Design, and Software Technologies.",
};

const servicePillars = [
  {
    num: "01",
    title: "PROJECT MANAGEMENT & DELIVERY",
    subtitle: "From Scoping to Delivery Execution",
    description:
      "Structured oversight of digital initiatives using Agile, Scrum, and Kanban frameworks. I align timelines, lead task breakdowns in Jira, manage team velocity, eliminate bottlenecks, and ensure smooth delivery against stakeholder milestones.",
    deliverables: [
      "Sprint Planning, Grooming & Velocity Tracking",
      "Kanban & Jira Workflow Board Configuration",
      "Risk Mitigation & Blocker Clearance",
      "Stakeholder Status Reports & Retrospectives",
      "Milestone Tracking & Resource Alignment"
    ]
  },
  {
    num: "02",
    title: "BUSINESS ANALYSIS & REQUIREMENTS",
    subtitle: "Translating Needs into Functional Architecture",
    description:
      "Bridging the language gap between executive stakeholders, clients, and software developers. Eliciting clear business requirements, producing user stories with unambiguous acceptance criteria, and constructing process flow models.",
    deliverables: [
      "Stakeholder Interviews & Requirements Elicitation",
      "Functional & Technical Specification Documents",
      "Business Process Flow & Data Mapping",
      "User Story Mapping with Gherkin Acceptance Criteria",
      "Feasibility Analysis & Implementation Roadmaps"
    ]
  },
  {
    num: "03",
    title: "UI/UX & CREATIVE DESIGN",
    subtitle: "Intuitive Interfaces & Cohesive Visual Brand Systems",
    description:
      "Combining aesthetic intuition with user empathy. Designing high-fidelity interactive prototypes in Figma, designing marketing assets across Adobe Creative Suite, and crafting engaging animations and video content.",
    deliverables: [
      "Wireframing & Interactive Prototypes (Figma)",
      "UI Component Libraries & Design Systems",
      "Brand Visual Identities & Marketing Collateral",
      "Motion Graphics & Promotional Animations (After Effects)",
      "Digital Campaign Asset Creation (Photoshop & Illustrator)"
    ]
  },
  {
    num: "04",
    title: "TECHNICAL IMPLEMENTATION & CLOUD",
    subtitle: "Full-Stack Development & Cloud Operations",
    description:
      "Hands-on technical engineering experience across modern web stacks. From building responsive React/Next.js client experiences and Java Spring Boot services to configuring AWS cloud environments and structuring data collections.",
    deliverables: [
      "Modern React.js & Next.js Web Interfaces",
      "Java Spring Boot & Node.js Backend Integration",
      "MongoDB & SQL Database Schema Design",
      "AWS Virtual Machine & File Operations",
      "Web Scraping, Data Cleaning & Automation Scripts"
    ]
  }
];

const skillsMatrix = [
  {
    category: "PROJECT & BUSINESS",
    icon: Kanban,
    skills: [
      "Project Management",
      "Business Analysis",
      "Requirement Gathering",
      "Stakeholder Management",
      "Task Coordination",
      "Project Documentation",
      "Team Collaboration",
      "Problem-Solving",
      "Agile & Kanban Methodologies"
    ]
  },
  {
    category: "TECHNICAL SKILLS",
    icon: Cpu,
    skills: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Java Spring Boot",
      "AWS (Amazon Web Services)",
      "Docker & Kubernetes (Foundations)",
      "Cloud Computing",
      "Git & GitHub"
    ]
  },
  {
    category: "CREATIVE & DESIGN",
    icon: Layout,
    skills: [
      "UI/UX Design",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Visual Communication",
      "Creative Direction",
      "Motion Graphics"
    ]
  },
  {
    category: "TOOLS & PRODUCTIVITY",
    icon: Wrench,
    skills: [
      "Jira",
      "Microsoft Excel (Advanced)",
      "Microsoft Project",
      "Azure DevOps (Basic)",
      "Notion",
      "Microsoft Office 365",
      "Google Workspace",
      "GitHub Projects"
    ]
  }
];

const certifications = [
  {
    issuer: "Google",
    title: "Foundations of Project Management",
    desc: "Mastery of project management lifecycles, project initiation documentation, work breakdown structures (WBS), risk management, stakeholder communication, and Agile fundamentals.",
    skillsGained: ["Project Lifecycles", "Risk Management", "Stakeholder Communication", "Sprint Planning"]
  },
  {
    issuer: "SAP",
    title: "SAP Business Analyst (Foundations)",
    desc: "Foundational understanding of enterprise business processes, ERP workflows, requirement elicitation frameworks, and system optimization methodologies within business environments.",
    skillsGained: ["Enterprise Business Analysis", "Process Optimization", "Requirements Engineering", "ERP Concepts"]
  },
  {
    issuer: "Google AI",
    title: "Google AI Professional",
    desc: "Professional education covering the foundations of artificial intelligence, modern generative AI tools, prompt engineering, and practical machine learning applications in digital products.",
    skillsGained: ["Generative AI Applications", "Prompt Engineering", "AI Productivity Pipelines", "Model Integration"]
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        number="04 / SERVICES"
        title="SERVICES & EXPERTISE"
        subtitle="CAPABILITIES • SKILLS MATRIX • CERTIFIED CREDENTIALS"
        description="Comprehensive breakdown of project coordination, business analysis frameworks, creative design competencies, technical stacks, and professional certifications."
      />

      {/* Services Breakdown Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">CORE OFFERINGS</span>
              <h2 className="section-title">SERVICE PILLARS</h2>
            </div>
            <span className={styles.headerSubtitle}>
              END-TO-END VALUE ACROSS PRODUCT LIFECYCLES
            </span>
          </div>

          <div className={styles.pillarsList}>
            {servicePillars.map((pillar) => (
              <div key={pillar.num} className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarNumBox}>
                    <span className={styles.pillarNum}>{pillar.num}.</span>
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <h4 className={styles.pillarSub}>{pillar.subtitle}</h4>
                  </div>
                </div>

                <p className={styles.pillarDesc}>{pillar.description}</p>

                <div className={styles.deliverablesBox}>
                  <h5 className={styles.delivHeading}>KEY DELIVERABLES:</h5>
                  <div className={styles.delivGrid}>
                    {pillar.deliverables.map((d, i) => (
                      <div key={i} className={styles.delivItem}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">TECHNICAL & STRATEGIC MATRIX</span>
              <h2 className="section-title">SKILLS & EXPERTISE</h2>
            </div>
            <span className={styles.headerSubtitle}>CATEGORIZED COMPETENCIES</span>
          </div>

          <div className={styles.matrixGrid}>
            {skillsMatrix.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className={styles.matrixCard}>
                  <div className={styles.matrixCardHeader}>
                    <Icon size={20} className={styles.matrixIcon} />
                    <h3 className={styles.matrixTitle}>{cat.category}</h3>
                  </div>
                  <div className={styles.matrixPills}>
                    {cat.skills.map((skill, i) => (
                      <span key={i} className={styles.matrixPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Certifications Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">VERIFIED CREDENTIALS</span>
              <h2 className="section-title">PROFESSIONAL CERTIFICATIONS</h2>
            </div>
            <span className={styles.headerSubtitle}>GOOGLE & SAP ACCREDITATIONS</span>
          </div>

          <div className={styles.certsGrid}>
            {certifications.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <div className={styles.certTop}>
                  <Award size={24} className={styles.awardIcon} />
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certDescription}>{cert.desc}</p>
                <div className={styles.skillsGainedBox}>
                  <span className={styles.gainedLabel}>CORE DOMAINS:</span>
                  <div className={styles.gainedTags}>
                    {cert.skillsGained.map((s, i) => (
                      <span key={i} className={styles.gainedTag}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Destination: Contact */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.nextBanner}>
            <div>
              <span className="section-tag">READY TO COLLABORATE?</span>
              <h3 className={styles.nextHeading}>LET&apos;S WORK TOGETHER</h3>
              <p className={styles.nextText}>
                Whether you have an upcoming project, are seeking a PM/BA intern, or need creative design support, let&apos;s start the discussion.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              GET IN TOUCH <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
