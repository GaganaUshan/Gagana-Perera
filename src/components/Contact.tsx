"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Clock, Copy, Send } from "lucide-react";
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
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
      showToast("Opening email client...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Pill Badge */}
        <div className="pill-badge">
          <Mail className="pill-badge-icon" />
          <span>Get in Touch</span>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Form */}
          <div className={styles.leftCol}>
            <h2 className="headline-section" style={{ marginBottom: "1rem" }}>
              Let&apos;s build something great together.
            </h2>
            <p className={styles.formDesc}>
              Have an open project management or business analysis opportunity, or want to discuss a product idea? I&apos;d love to connect.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className={styles.input}
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className={styles.input}
                />
              </div>

              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject (e.g. Project Inquiry)"
                className={styles.input}
              />

              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
                className={styles.textarea}
              />

              <button type="submit" disabled={isSubmitting} className="btn-pill-primary" style={{ width: "fit-content" }}>
                <span>{isSubmitting ? "Preparing..." : "Send Message"}</span>
                <span className="btn-pill-icon-cap">
                  <Send size={14} />
                </span>
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info Cards */}
          <div className={styles.rightCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Mail size={18} />
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:gaganaushan16@gmail.com" className={styles.infoValue}>
                    gaganaushan16@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("gaganaushan16@gmail.com", "Email")}
                  className={styles.copyBtn}
                  title="Copy Email"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Phone size={18} />
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href="tel:+94773650313" className={styles.infoValue}>
                    +94 77 365 0313
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("+94773650313", "Phone")}
                  className={styles.copyBtn}
                  title="Copy Phone"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <MapPin size={18} />
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Colombo, Sri Lanka (GMT+5:30)</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <Clock size={18} />
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>Availability</span>
                  <span className={styles.infoValue}>Open for PM &amp; BA opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="toast-notification"
          >
            <CheckCircle2 size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
