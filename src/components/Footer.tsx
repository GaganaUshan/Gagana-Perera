"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Works" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top Footer Row */}
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>Gagana<span className={styles.logoDot}>.</span></span>
            </Link>
            <p className={styles.brandTagline}>
              Bridging technology, business, and creativity to build meaningful digital solutions.
            </p>
          </div>

          <div className={styles.navCol}>
            <span className={styles.colTitle}>Navigation</span>
            <ul className={styles.linksList}>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Connect</span>
            <div className={styles.socialIconsRow}>
              <a
                href="https://www.linkedin.com/in/gagana-yushan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://github.com/GaganaUshan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="mailto:gaganaushan16@gmail.com"
                className={styles.socialBtn}
                aria-label="Email Gagana"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+94773650313"
                className={styles.socialBtn}
                aria-label="Call Gagana"
              >
                <Phone size={18} />
              </a>
            </div>
            <p className={styles.emailDirect}>gaganaushan16@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar with Back to Top (Ashley signature) */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Gagana Yushan Perera. All rights reserved.
          </p>

          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to top">
            <span>Back to top</span>
            <div className={styles.arrowIconWrap}>
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
