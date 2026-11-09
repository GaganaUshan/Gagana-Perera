import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Briefcase, Award, Users, Calendar, ArrowRight, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import styles from "./experience.module.css";

export const metadata: Metadata = {
  title: "Experience | Gagana Yushan Perera",
  description: "Professional experience in Project Management, Business Analysis, Creative Design, and 4 years of leadership in AIESEC in SLIIT.",
};

const workExperiences = [
  {
    role: "Project Management & Business Analysis Intern",
    company: "1BillionTech Pvt Ltd",
    period: "March 2026 – Present",
    location: "Colombo, Sri Lanka",
    overview:
      "Driving cross-functional project coordination, stakeholder communication, requirement engineering, and delivery tracking for enterprise web applications.",
    responsibilities: [
      "Gather and manage project requirements by working with stakeholders and understanding business needs.",
      "Translate business requirements into actionable user stories and sprint tasks for engineering teams.",
      "Coordinate project activities, milestone priorities, and release timelines.",
      "Maintain project documentation, follow-ups, and progress reports.",
      "Proactively identify project blockers, risks, and delivery bottlenecks to ensure smooth execution.",
      "Support strategic decision-making and maintain alignment between business stakeholders and technical developers.",
      "Participate actively in requirement clarification discussions, sprint reviews, and implementation tracking."
    ],
    keyProject: {
      name: "MillionSpaces",
      desc: "A digital property platform where I contribute to project coordination and delivery management, bridging business stakeholders and development teams.",
      stack: "Java Spring Boot, React.js, AWS, Jira, Microsoft Excel, Google Workspace, Google AI."
    },
    tools: ["Jira", "Excel", "Google AI", "Spring Boot", "React.js", "AWS"]
  },
  {
    role: "Production Associate",
    company: "Innodata Lanka Pvt Ltd",
    period: "August 2025 – October 2025",
    location: "Colombo, Sri Lanka",
    overview:
      "Executed critical production operations involving large-scale data organization, web scraping workflows, and cloud-based file management environments.",
    responsibilities: [
      "Organized, validated, and managed collected datasets using advanced Microsoft Excel techniques.",
      "Processed web-scraped data and structured file information according to rigorous schema requirements.",
      "Uploaded and managed files securely through AWS-based virtual machine environments.",
      "Identified and corrected data discrepancies, corrupted records, and formatting anomalies.",
      "Maintained zero-defect data accuracy and consistency across rapid production cycles."
    ],
    tools: ["AWS Virtual Machines", "Web Scraping", "Microsoft Excel", "Cloud Storage"]
  },
  {
    role: "Creative Designer",
    company: "Avantous Global",
    period: "February 2025 – July 2025",
    location: "Remote / Colombo",
    overview:
      "Collaborated with content strategists and marketing teams to conceptualize and craft visual identities, promotional animations, and client digital assets.",
    responsibilities: [
      "Designed creative materials strictly aligned with client objectives and brand style guides.",
      "Collaborated closely with copywriters, content strategists, and UI/UX design teams.",
      "Created motion animations and short-form video assets for digital marketing and audience engagement.",
      "Contributed to visual communication, social campaign rollouts, and creative asset delivery."
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe After Effects"]
  }
];

const aiesecRoles = [
  {
    title: "Art Director",
    portfolio: "Creative & Brand Direction",
    period: "July 2025 – February 2026",
    bullets: [
      "Led creative direction and design-related initiatives across the local committee.",
      "Supported the development of cohesive visual identities and marketing collateral for flagship events.",
      "Mentored junior creatives to maintain consistent brand aesthetics across all touchpoints.",
      "Contributed to the creative conception and execution of organizational recruitment and promotional campaigns."
    ]
  },
  {
    title: "Business-to-Consumer (B2C) Team Lead",
    portfolio: "Customer Operations & Growth",
    period: "January 2025 – July 2025",
    bullets: [
      "Supported, coordinated, and tracked B2C customer attraction and engagement funnels.",
      "Aligned team members to achieve measurable organizational KPI targets and exchange numbers.",
      "Contributed to customer-oriented service delivery and enhanced overall team operational performance."
    ]
  },
  {
    title: "Outgoing Global Teacher – B2C Creative Force",
    portfolio: "Marketing & Creative Production",
    period: "2024 – 2025",
    bullets: [
      "Contributed directly to the marketing and creative promotional campaigns of the Outgoing Global Teacher program.",
      "Crafted promotional brochures, social media carousels, and testimonials highlighting global teaching exchanges."
    ]
  }
];

const eventContributions = [
  {
    event: "Corporate Connect 2025",
    role: "OCVP Logistics",
    desc: "Coordinated logistics operations and vendor relations. Supported high-stakes partnership execution, successfully securing a Silver Partnership with Superloop valued at LKR 75,000."
  },
  {
    event: "Global Village 4.0",
    role: "OCVP Marketing",
    desc: "Directed marketing direction and omni-channel promotional activities for the flagship cultural exchange festival, maximizing audience reach and event registration."
  },
  {
    event: "EFB iComm & Systems Manager / Knowledge Manager",
    role: "Term 25.26",
    desc: "Spearheaded internal information management and knowledge architecture. Supported the development, testing, and rollout of an internal EFB dashboard in collaboration with the development team."
  }
];

const achievements = [
  {
    title: "Best Showcaser",
    organization: "AIESEC in SLIIT",
    note: "Recognized for outstanding visual communication and brand showcasing excellence."
  },
  {
    title: "Member of the Month",
    organization: "AIESEC in SLIIT • September 2024",
    note: "Awarded for exceptional commitment, team leadership, and cross-functional project support."
  },
  {
    title: "Four-Year Leadership Milestone",
    organization: "AIESEC in SLIIT • 2023 – 2026",
    note: "Sustained commitment to global youth leadership development and organizational impact."
  }
];

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <PageHeader
        number="02 / EXPERIENCE"
        title="EXPERIENCE & LEADERSHIP"
        subtitle="PROFESSIONAL CAREER & FOUR-YEAR AIESEC JOURNEY"
        description="A proven track record spanning project coordination, requirements elicitation, production workflows, creative brand execution, and youth leadership."
      />

      {/* Professional Experience Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">INDUSTRY ROLES</span>
              <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
            </div>
            <span className={styles.headerSubtitle}>
              PROJECT COORDINATION • BUSINESS ANALYSIS • DATA PRODUCTION
            </span>
          </div>

          <div className={styles.workList}>
            {workExperiences.map((exp, idx) => (
              <div key={idx} className={styles.workCard}>
                <div className={styles.workCardHeader}>
                  <div className={styles.roleBox}>
                    <span className={styles.workPeriod}>{exp.period}</span>
                    <h3 className={styles.workRole}>{exp.role}</h3>
                    <h4 className={styles.workCompany}>
                      {exp.company} <span className={styles.companyLoc}>• {exp.location}</span>
                    </h4>
                  </div>
                  <div className={styles.toolsCloud}>
                    {exp.tools.map((t, i) => (
                      <span key={i} className={styles.toolTag}>{t}</span>
                    ))}
                  </div>
                </div>

                <p className={styles.workOverview}>{exp.overview}</p>

                <div className={styles.respSection}>
                  <h5 className={styles.respHeading}>Key Responsibilities & Contributions:</h5>
                  <ul className={styles.respList}>
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                {exp.keyProject && (
                  <div className={styles.keyProjectBox}>
                    <div className={styles.kpHeader}>
                      <span className={styles.kpTag}>FEATURED PROJECT</span>
                      <h4 className={styles.kpTitle}>{exp.keyProject.name}</h4>
                    </div>
                    <p className={styles.kpDesc}>{exp.keyProject.desc}</p>
                    <div className={styles.kpStack}>
                      <strong>Technologies & Tools:</strong> {exp.keyProject.stack}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIESEC in SLIIT - 4-Year Leadership Journey */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <div>
              <span className="section-tag">ORGANIZATIONAL DEVELOPMENT</span>
              <h2 className="section-title">AIESEC IN SLIIT</h2>
            </div>
            <p className={styles.headerQuote}>
              &ldquo;Four-Year Leadership & Volunteering Journey (2023 – 2026) building resilience, empathy, and strategic coordination.&rdquo;
            </p>
          </div>

          <div className={styles.aiesecIntroCard}>
            <p>
              AIESEC has served as a foundational pillar of my professional and personal growth. Over four continuous years of involvement, I had the privilege of coordinating high-performing teams, leading brand transformations as Art Director, managing B2C operations, and negotiating corporate sponsorships that created lasting value for the student community.
            </p>
          </div>

          {/* Sub-Roles Grid */}
          <div className={styles.aiesecRolesGrid}>
            {aiesecRoles.map((role, idx) => (
              <div key={idx} className={styles.aiesecRoleCard}>
                <span className={styles.rolePeriod}>{role.period}</span>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <span className={styles.rolePortfolio}>{role.portfolio}</span>
                <ul className={styles.aiesecBulletList}>
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Event Contributions */}
          <div className={styles.eventsBlock}>
            <h3 className={styles.eventsHeading}>ADDITIONAL ORGANIZATIONAL CONTRIBUTIONS</h3>
            <div className={styles.eventsGrid}>
              {eventContributions.map((ev, idx) => (
                <div key={idx} className={styles.eventCard}>
                  <span className={styles.eventRole}>{ev.role}</span>
                  <h4 className={styles.eventName}>{ev.event}</h4>
                  <p className={styles.eventDesc}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={styles.achieveBlock}>
            <h3 className={styles.eventsHeading}>HONORS & ACHIEVEMENTS</h3>
            <div className={styles.achieveGrid}>
              {achievements.map((ach, idx) => (
                <div key={idx} className={styles.achieveCard}>
                  <Award size={22} className={styles.achieveIcon} />
                  <h4 className={styles.achieveTitle}>{ach.title}</h4>
                  <span className={styles.achieveOrg}>{ach.organization}</span>
                  <p className={styles.achieveNote}>{ach.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Works Page */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.nextPageBanner}>
            <div>
              <span className="section-tag">NEXT DESTINATION</span>
              <h3 className={styles.nextTitle}>EXPLORE PROJECTS & CASE STUDIES</h3>
              <p className={styles.nextDesc}>
                Discover the digital systems, AI platforms, and web applications I&apos;ve engineered and coordinated.
              </p>
            </div>
            <Link href="/works" className="btn-primary">
              VIEW PROJECTS & WORKS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

