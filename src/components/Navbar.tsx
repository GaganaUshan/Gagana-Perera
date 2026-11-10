"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import styles from "./Navbar.module.css";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Service" },
];

const rightLinks = [
  { href: "/experience", label: "Resume" },
  { href: "/works", label: "Project" },
  { href: "/contact", label: "Contact Us" },
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
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navPillWrapper}>
          <nav className={styles.navPill} aria-label="Main Navigation">
            {/* Left Nav Links */}
            <div className={styles.navGroup}>
              {leftLinks.map((link) => {
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
            </div>

            {/* Center Brand Logo (Orange badge + Name) */}
            <Link href="/" className={styles.brand} aria-label="Gagana Yushan Perera">
              <span className={styles.brandBadge}>G</span>
              <span className={styles.brandName}>Gagana</span>
            </Link>

            {/* Right Nav Links */}
            <div className={styles.navGroup}>
              {rightLinks.map((link) => {
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
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileNavCard}>
          <div className={styles.mobileHeader}>
            <Link href="/" className={styles.brand} onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.brandBadge}>G</span>
              <span className={styles.brandName}>Gagana</span>
            </Link>
            <button
              className={styles.closeBtn}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className={styles.mobileLinks}>
            <Link
              href="/"
              className={`${styles.mobileLink} ${pathname === "/" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileLink} ${pathname === "/about" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${styles.mobileLink} ${pathname === "/services" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Service
            </Link>
            <Link
              href="/experience"
              className={`${styles.mobileLink} ${pathname === "/experience" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume & Experience
            </Link>
            <Link
              href="/works"
              className={`${styles.mobileLink} ${pathname === "/works" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              href="/contact"
              className={`${styles.mobileLink} ${pathname === "/contact" ? styles.mobileLinkActive : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div className={styles.mobileFooterActions}>
            <a
              href="/CV.pdf"
              download="Gagana_Perera_CV.pdf"
              className="btn-orange"
              style={{ width: "100%" }}
            >
              Download Resume <FileDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
