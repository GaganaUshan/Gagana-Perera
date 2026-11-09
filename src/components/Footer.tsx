"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/works", label: "WORKS" },
  { href: "/services", label: "SERVICES" },
  { href: "/contact", label: "CONTACT" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandRow}>
          <Link href="/" className={styles.brandName}>
            GAGANA YUSHAN PERERA
          </Link>
          <button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className={styles.navRow}>
          <div className={styles.linksList}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className={styles.navLink}
            >
              CV (PDF)
            </a>
          </div>

          <div className={styles.contactSnippets}>
            <span className={styles.snippet}>gaganaushan16@gmail.com</span>
            <span className={styles.dot}>•</span>
            <span className={styles.snippet}>+94 77 365 0313</span>
            <span className={styles.dot}>•</span>
            <span className={styles.snippet}>Sri Lanka</span>
          </div>
        </div>

        <div className={styles.copyrightRow}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} GAGANA YUSHAN PERERA. ALL RIGHTS RESERVED.
          </p>
          <div className={styles.credits}>
            <span>PROJECT MANAGEMENT • BUSINESS ANALYSIS • CREATIVE TECH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
