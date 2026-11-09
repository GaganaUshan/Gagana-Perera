"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/works", label: "WORKS" },
  { href: "/services", label: "SERVICES" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo} aria-label="Gagana Yushan Perera">
            <span className={styles.logoMonogram}>GP</span>
            <span className={styles.logoDivider}>/</span>
            <span className={styles.logoName}>GAGANA YUSHAN</span>
          </Link>

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
                  {isActive && <span className={styles.activeDot} />}
                </Link>
              );
            })}
          </nav>

          <div className={styles.rightActions}>
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className={styles.cvBtn}
              title="Download CV (PDF)"
            >
              <FileDown size={14} />
              <span>CV</span>
            </a>

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
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          <Link
            href="/"
            className={`${styles.mobileNavLink} ${pathname === "/" ? styles.mobileNavActive : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>00</span> HOME
          </Link>
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavActive : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{`0${idx + 1}`}</span> {link.label}
              </Link>
            );
          })}
          <div className={styles.mobileActions}>
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className="btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              Download CV <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
