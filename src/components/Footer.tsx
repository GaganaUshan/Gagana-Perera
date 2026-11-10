"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Service" },
  { href: "/experience", label: "Resume" },
  { href: "/works", label: "Project" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandBadge}>G</span>
            <span className={styles.brandName}>Gagana Yushan</span>
          </Link>

          <div className={styles.linksNav}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Gagana Yushan Perera. All rights reserved.
          </p>
          <div className={styles.tagline}>
            Project Management • Business Analysis • Creative Tech
          </div>
        </div>
      </div>
    </footer>
  );
}
