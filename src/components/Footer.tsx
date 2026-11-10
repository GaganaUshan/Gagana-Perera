"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Main Footer Columns */}
        <div className={styles.mainGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>GP</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.brandTagline}>
              Bridging technology, business, and creativity to build meaningful digital solutions. Information Technology undergraduate at SLIIT.
            </p>
            <div className={styles.socialsRow}>
              <a
                href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                title="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="https://github.com/GaganaUshan"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                title="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href="mailto:gaganaushan16@gmail.com"
                className={styles.socialLink}
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>QUICK LINKS</h4>
            <div className={styles.linksList}>
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/services">Services</Link>
              <Link href="/works">Work</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>SERVICES</h4>
            <div className={styles.linksList}>
              <Link href="/services">Project Management</Link>
              <Link href="/services">Business Analysis</Link>
              <Link href="/services">Product Strategy</Link>
              <Link href="/services">UI/UX &amp; Creative Tech</Link>
            </div>
          </div>

          {/* Resources */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>RESOURCES</h4>
            <div className={styles.linksList}>
              <a href="/CV.pdf" download="Gagana_Perera_CV.pdf">Download CV (PDF)</a>
              <Link href="/works">Case Studies</Link>
              <Link href="/experience">AIESEC Journey</Link>
              <Link href="/services">Certifications</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Gagana Yushan Perera. All rights reserved.
          </p>

          <button onClick={scrollToTop} className={styles.topBtn}>
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
