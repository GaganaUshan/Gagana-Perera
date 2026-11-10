"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, FileDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/works", label: "WORK" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/contact", label: "CONTACT" },
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
      <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Brand Logo */}
          <Link href="/" className={styles.logo} aria-label="Gagana Yushan Perera">
            <span className={styles.logoText}>GP</span>
            <span className={styles.logoDot}>.</span>
          </Link>

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

          {/* Right Action: Theme Toggle + "LET'S TALK ->" Button */}
          <div className={styles.rightGroup}>
            <ThemeToggle />

            <Link href="/contact" className={styles.talkBtn}>
              <span>LET&apos;S TALK</span>
              <ArrowRight size={14} className={styles.arrowIcon} />
            </Link>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileContent}>
          <div className={styles.mobileTop}>
            <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.logoText}>GP</span>
              <span className={styles.logoDot}>.</span>
            </Link>
            <button
              className={styles.closeBtn}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className={styles.mobileNavLinks}>
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNum}>0{idx + 1}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileActions}>
            <ThemeToggle />
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className="btn-red"
              style={{ width: "100%", textAlign: "center" }}
            >
              DOWNLOAD CV <FileDown size={15} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
