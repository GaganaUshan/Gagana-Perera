"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, Copy, Send, ArrowUpRight, FileDown } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    // Create mailto fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:gaganaushan16@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      showToast("Opening your email client...");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className="section-tag">05 / GET IN TOUCH</span>
            <h2 className="section-title">CONTACT</h2>
          </div>
          <span className={styles.headerSubtitle}>
            AVAILABLE FOR PROJECT MANAGEMENT, BUSINESS ANALYSIS & CREATIVE ROLES
          </span>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Side: Contact Information & Quick Actions */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.metaBlock}>
              <h3 className={styles.metaHeading}>DIRECT CHANNELS</h3>
              <p className={styles.metaBio}>
                I&apos;m always open to discussing new opportunities, project collaborations, product strategy, or technology partnerships.
              </p>
            </div>

            <div className={styles.channelList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={16} />
                </div>
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>EMAIL</span>
                  <a href="mailto:gaganaushan16@gmail.com" className={styles.channelLink}>
                    gaganaushan16@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("gaganaushan16@gmail.com", "Email")}
                  className={styles.copyBtn}
                  title="Copy email"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Phone size={16} />
                </div>
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>PHONE & WHATSAPP</span>
                  <a href="tel:+94773650313" className={styles.channelLink}>
                    +94 77 365 0313
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("+94773650313", "Phone number")}
                  className={styles.copyBtn}
                  title="Copy phone"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <MapPin size={16} />
                </div>
                <div className={styles.channelContent}>
                  <span className={styles.channelLabel}>LOCATION</span>
                  <span className={styles.channelLink}>Sri Lanka (GMT+5:30)</span>
                </div>
              </div>
            </div>

            <div className={styles.actionsBox}>
              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className="btn-outline"
                style={{ width: "100%" }}
              >
                DOWNLOAD FULL CV (PDF) <FileDown size={15} />
              </a>
            </div>

            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                LINKEDIN <ArrowUpRight size={13} />
              </a>
              <span className={styles.socialDot}>•</span>
              <a
                href="https://github.com/GaganaUshan"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                GITHUB <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Editorial Minimal Contact Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>LET&apos;S GET STARTED!</h3>
              <p className={styles.formSubtitle}>
                Drop a message with your idea, inquiry, or opportunity details.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>YOUR PHONE (OPTIONAL)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +94 77 000 0000"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>YOUR MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or collaboration idea..."
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: "100%", padding: "1rem" }}
                >
                  {isSubmitting ? "PREPARING MESSAGE..." : "SUBMIT INQUIRY"} <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
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
