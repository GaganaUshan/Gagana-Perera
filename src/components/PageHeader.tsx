import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHeader({ number, title, subtitle, description }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Breadcrumb line */}
          <div className={styles.breadcrumbBar}>
            <Link href="/" className={styles.breadcrumbLink}>HOME</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>{number}</span>
          </div>

          <h1 className={styles.title}>{title}</h1>

          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}

          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      </div>
    </header>
  );
}
