"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Layers, Sparkles } from "lucide-react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: "millionspaces",
    title: "MillionSpaces",
    subtitle: "Enterprise Digital Property Platform",
    category: "PROFESSIONAL",
    categoryLabel: "Property Tech • Enterprise",
    role: "Project Coordinator & BA Intern",
    desc: "A scalable commercial property booking platform where I contribute to project coordination, stakeholder requirement clarification, sprint task allocation, and AWS delivery management.",
    stack: ["Java Spring Boot", "React.js", "AWS", "Jira", "Excel"],
    image: "/carousel-pm.jpg",
    link: "/works"
  },
  {
    id: "study-bridge",
    title: "Study Bridge",
    subtitle: "Student Migration & University Management",
    category: "ACADEMIC",
    categoryLabel: "Academic • Team Lead",
    role: "Team Lead & Full-Stack Developer",
    desc: "A comprehensive web portal bridging global universities with aspiring students. Led the team with Kanban boards and engineered the Examination Management module end-to-end.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Kanban"],
    image: "/carousel-ba.jpg",
    link: "/works"
  },
  {
    id: "mailmind",
    title: "MailMind",
    subtitle: "AI-Powered Inbox Management Platform",
    category: "ACADEMIC",
    categoryLabel: "AI & Productivity",
    role: "Project Manager & Frontend Developer",
    desc: "An intelligent email management tool utilizing natural language AI to summarize, categorize, and prioritize communications, accelerating inbox workflow by 40%.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "AI APIs", "Stripe"],
    image: "/carousel-cloud.jpg",
    link: "/works"
  },
  {
    id: "smart-cv-analyzer",
    title: "Smart CV Analyzer",
    subtitle: "AI Career Diagnostics & Resume Assessment",
    category: "PERSONAL",
    categoryLabel: "AI & Career Tech",
    role: "Creator & Developer",
    desc: "Engineered an NLP-powered evaluation engine that parses resumes, scores alignment against specific job roles, and generates actionable improvement roadmaps.",
    stack: ["React.js", "Python", "NLP / AI", "REST API"],
    image: "/carousel-tech.jpg",
    link: "/works"
  },
  {
    id: "creative-showcase",
    title: "Avantous Creative & Vector Art",
    subtitle: "Visual Identity, Vector Art & Motion Graphics",
    category: "CREATIVE",
    categoryLabel: "Brand & Creative Design",
    role: "Creative Designer",
    desc: "Curated vector illustration campaigns, marketing assets, motion graphics, and brand styling for global client engagements at Avantous Global.",
    stack: ["Adobe Illustrator", "Photoshop", "After Effects", "Figma"],
    image: "/gagana-vector-art.jpg",
    link: "/works"
  }
];

const filterTabs = [
  { key: "ALL", label: "All Works" },
  { key: "PROFESSIONAL", label: "Professional" },
  { key: "ACADEMIC", label: "Academic & AI" },
  { key: "CREATIVE", label: "Creative & Vector" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = projectsData.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.category === activeTab;
  });

  return (
    <section className={styles.projectsSection} id="work">
      <div className={`container ${styles.projectsContainer}`}>
        {/* Top Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLeft}>
            <span className="mil-suptitle">03. Featured Portfolio</span>
            <h2 className={styles.projectsHeadline}>
              Selected <span className="mil-thin">Works</span> &amp; Case Studies
            </h2>
            <p className={styles.headerSub}>
              A showcase of enterprise coordination, full-stack systems, AI utilities, and creative direction.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={styles.filterPillsGroup}>
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`${styles.filterPill} ${activeTab === tab.key ? styles.filterPillActive : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.imageFrame}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={320}
                  className={styles.projectImg}
                />
                <div className={styles.imageOverlay} />
                <span className={styles.categoryBadge}>{item.categoryLabel}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.roleSubRow}>
                  <span className={styles.roleText}>{item.role}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>

                <div className={styles.stackPills}>
                  {item.stack.map((tech, idx) => (
                    <span key={idx} className={styles.stackPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActionRow}>
                  <Link href={item.link} className={styles.detailsLink}>
                    <span>View Case Study</span>
                    <div className={styles.circleArrow}>
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footerRow}>
          <Link href="/works" className="mil-button">
            <span>Explore All Projects</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
