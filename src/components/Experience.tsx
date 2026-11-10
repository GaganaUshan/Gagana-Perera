"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Calendar, CheckCircle2, Sparkles, Award } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "1BillionTech Pvt Ltd",
    period: "March 2026 – Present",
    role: "Project Management & Business Analysis Intern",
    tag: "Property Tech • Enterprise Delivery",
    logo: "/logos/1billiontech.png",
    productLogo: "/logos/millionspaces.jpg",
    productName: "MillionSpaces",
    desc: "Gathering and managing project requirements by working directly with stakeholders. Translating complex business needs into actionable sprint tasks and monitoring delivery timelines on MillionSpaces commercial platform.",
    highlights: [
      "Translating business needs into actionable tasks for engineering teams",
      "Monitoring sprint progress, milestone priorities, and blocker resolution",
      "Ensuring cross-alignment between business stakeholders and developers"
    ],
    tools: ["Jira", "Excel", "Google AI", "Spring Boot", "React.js", "AWS"],
    image: "/gagana-tie-adjust.jpg",
    imageCaption: "Executive Delivery & Coordination",
    isFeatured: true
  },
  {
    company: "Avantous Global",
    period: "February 2025 – July 2025",
    role: "Creative Designer",
    tag: "Visual Design & Brand Identity",
    logo: "/logos/avantous.png",
    desc: "Collaborated with content strategists and design teams to craft bespoke digital assets, vector illustrations, and high-impact motion animations tailored to client brand guides.",
    highlights: [
      "Crafted custom vector illustrations, marketing visuals, and brand guidelines",
      "Produced motion graphics and animations for digital client engagement",
      "Maintained aesthetic consistency across client campaign deliverables"
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects", "Vector Art"],
    image: "/gagana-vector-art.jpg", // EXPLICIT REQUIREMENT
    imageCaption: "Featured Vector Flame Illustration Artwork",
    isFeatured: true,
    isVectorArt: true
  },
  {
    company: "Innodata Lanka Pvt Ltd",
    period: "August 2025 – October 2025",
    role: "Production Associate",
    tag: "Production Ops & Cloud Systems",
    logo: "/logos/innodata.png",
    desc: "Executed high-volume data production operations, managing web scraping workflows and uploading structured files through AWS virtual machine environments with zero-defect QA.",
    highlights: [
      "Structured and validated complex datasets with advanced Excel modeling",
      "Uploaded and managed files securely across AWS-hosted virtual machines",
      "Identified and rectified corrupted file structures to ensure data consistency"
    ],
    tools: ["AWS Virtual Machines", "Web Scraping", "Microsoft Excel", "Cloud Ops"],
    image: "/gagana-black-suit.jpg",
    imageCaption: "Cloud Infrastructure & Production QA",
    isFeatured: false
  },
  {
    company: "AIESEC in SLIIT",
    period: "2023 – 2026 (4-Year Journey)",
    role: "Art Director & B2C Team Lead",
    tag: "Leadership & Organizational Impact",
    logo: "/logos/aiesec.png",
    desc: "Spearheaded creative direction, coordinated B2C customer funnels, and executed milestone event partnerships including a Silver Partnership with Superloop valued at LKR 75,000.",
    highlights: [
      "Art Director: Led brand consistency and marketing campaign visual identities",
      "B2C Team Lead: Coordinated customer attraction funnels and team KPI targets",
      "Corporate Connect 2025 OCVP: Closed LKR 75,000 Superloop Silver Partnership",
      "Honored with Best Showcaser & Member of the Month (September 2024)"
    ],
    tools: ["Creative Direction", "B2C Operations", "Event Logistics", "Partnership Sales"],
    image: "/gagana-sunset-side.jpg",
    imageCaption: "4-Year Leadership & Creative Direction",
    isFeatured: false
  }
];

export function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={`container ${styles.experienceContainer}`}>
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div>
            <span className="mil-suptitle">02. Career Experience</span>
            <h2 className={styles.experienceHeadline}>
              Professional <span className="mil-thin">Experience</span> &amp; Impact
            </h2>
            <p className={styles.headerSub}>
              A track record of coordinating projects, clarifying requirements, and driving creative and operational output.
            </p>
          </div>

          <Link href="/experience" className="mil-button">
            <span>Explore Full Timeline</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Experience Showcase List */}
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`${styles.experienceCard} ${exp.isVectorArt ? styles.vectorCardHighlight : ""}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardMainGrid}>
                {/* Visual Image Column */}
                <div className={styles.imageCol}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={exp.image}
                      alt={`${exp.role} - ${exp.company}`}
                      width={480}
                      height={400}
                      className={`${styles.cardImg} ${exp.isVectorArt ? styles.vectorArtImg : ""}`}
                    />
                    <div className={styles.imageOverlay} />
                    <span className={styles.imageCaptionBadge}>{exp.imageCaption}</span>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={styles.detailsCol}>
                  <div className={styles.cardTopMeta}>
                    <div className={styles.companyBadgeGroup}>
                      <div className={styles.companyLogoCapsule}>
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={110}
                          height={30}
                          className={styles.companyLogoImg}
                        />
                      </div>
                      <span className={styles.companyPill}>{exp.company}</span>
                      {exp.productLogo && (
                        <div className={styles.productBadge}>
                          <span className={styles.productLabel}>Product:</span>
                          <div className={styles.productLogoCapsule}>
                            <Image
                              src={exp.productLogo}
                              alt={exp.productName || "Product"}
                              width={70}
                              height={22}
                              className={styles.productLogoImg}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <span className={styles.periodText}>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <span className={styles.tagText}>{exp.tag}</span>

                  <p className={styles.roleDesc}>{exp.desc}</p>

                  <div className={styles.bulletList}>
                    {exp.highlights.map((item, bIdx) => (
                      <div key={bIdx} className={styles.bulletItem}>
                        <CheckCircle2 size={15} className={styles.bulletIcon} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.toolsRow}>
                    {exp.tools.map((tool, tIdx) => (
                      <span key={tIdx} className={styles.toolBadge}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
