"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Works" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Ashley Top Scroll Progress Track */}
      <div className="mil-progress-track" aria-hidden="true">
        <div
          className="mil-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`${styles.navbarWrapper} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.navBarInner}>
            {/* Ashley Frame Logo */}
            <Link href="/" className={styles.logoLink} aria-label="Gagana Yushan Perera">
              <span className={styles.logoText}>Gagana<span className={styles.logoDot}>.</span></span>
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
                    <span>{link.label}</span>
                    {isActive && <span className={styles.activeDot} />}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Pill CTA + Theme Toggle */}
            <div className={styles.rightGroup}>
              <ThemeToggle />

              <Link href="/contact" className={styles.letsTalkBtn}>
                <span>Let&apos;s Talk</span>
                <span className={styles.arrowIcon}>
                  <ArrowUpRight size={15} />
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
            <Link href="/" className={styles.logoLink} onClick={() => setMobileMenuOpen(false)}>
              <span className={styles.logoText}>Gagana<span className={styles.logoDot}>.</span></span>
            </Link>
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
                  className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className={styles.mobileLinkArrow} />
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileBottom}>
            <Link href="/contact" className={styles.mobileTalkBtn}>
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} />
            </Link>
            <p className={styles.mobileContactNote}>
              gaganaushan16@gmail.com • Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
