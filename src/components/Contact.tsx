"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:gaganaushan16@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      showToast("Opening your email client...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={`container ${styles.contactContainer}`}>
        {/* Top Header matching Mahen Jay */}
        <div className={styles.headerBlock}>
          <span className="mil-suptitle">04. Contact</span>
          <h2 className={styles.contactHeadline}>
            Let&apos;s <span className="mil-thin">Talk</span>
          </h2>
          <p className={styles.headerSub}>
            Have an exciting opportunity, require Project Management / Business Analysis coordination, or want to discuss a new digital initiative? Reach out directly.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info Cards */}
          <div className={styles.infoCol}>
            <div className={styles.contactCard}>
              <div className={styles.cardIconWrap}>
                <Mail size={20} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Direct Email</span>
                <span className={styles.cardValue}>gaganaushan16@gmail.com</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("gaganaushan16@gmail.com", "Email")}
                className={styles.copyBtn}
                aria-label="Copy Email"
              >
                {copiedField === "Email" ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIconWrap}>
                <Phone size={20} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Phone / WhatsApp</span>
                <span className={styles.cardValue}>+94 77 365 0313</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("+94 77 365 0313", "Phone")}
                className={styles.copyBtn}
                aria-label="Copy Phone"
              >
                {copiedField === "Phone" ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIconWrap}>
                <MapPin size={20} />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Location</span>
                <span className={styles.cardValue}>Sri Lanka (Open to Remote &amp; Onsite)</span>
              </div>
            </div>

            {/* Availability Box */}
            <div className={styles.availabilityBox}>
              <div className={styles.availStatusHeader}>
                <span className={styles.availDot} />
                <span className={styles.availTitle}>Current Availability</span>
              </div>
              <p className={styles.availDesc}>
                Currently serving as Project Management &amp; Business Analysis Intern at 1BillionTech. Open to select consulting, freelance initiatives, and future PM / BA opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form (Ashley style) */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Project Inquiry / Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, or objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.formTextarea}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mil-button ${styles.submitBtn}`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Floating Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className={styles.toast}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
