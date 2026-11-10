"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, FileDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.navbarWrapper} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.navPillBar}>
            {/* Desktop Navigation Links */}
            <nav className={styles.desktopNav} aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Pill CTA + Theme Toggle */}
            <div className={styles.rightGroup}>
              <ThemeToggle />

              <Link href="/contact" className={styles.talkPillBtn}>
                <span>Get in Touch</span>
                <span className={styles.arrowCap}>
                  <ArrowRight size={13} />
                </span>
              </Link>

              <button
                className={styles.mobileToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileContent}>
          <div className={styles.mobileTop}>
            <span className={styles.mobileTitle}>Navigation</span>
            <button
              className={styles.closeBtn}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={15} />
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileActions}>
            <ThemeToggle />
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className="btn-pill-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Download CV</span>
              <span className="btn-pill-icon-cap">
                <FileDown size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
