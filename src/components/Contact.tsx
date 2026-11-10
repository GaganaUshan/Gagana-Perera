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
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
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
    <section className="section-wrapper" id="contact" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="badge-pill" style={{ marginBottom: "1rem" }}>
            Let&apos;s Connect
          </span>
          <h2 className="section-heading">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, are seeking a PM/BA intern, or want to discuss creative technology, my inbox is open.
          </p>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactGrid}>
            {/* Left Column: Direct Channels & Socials */}
            <div className={styles.channelsCol}>
              <h3 className={styles.colTitle}>Direct Contact Channels</h3>
              <p className={styles.colDesc}>
                Feel free to reach out via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className={styles.channelList}>
                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Mail size={18} />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>Email Address</span>
                    <a href="mailto:gaganaushan16@gmail.com" className={styles.channelVal}>
                      gaganaushan16@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("gaganaushan16@gmail.com", "Email")}
                    className={styles.copyBtn}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <Phone size={18} />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>Phone &amp; WhatsApp</span>
                    <a href="tel:+94773650313" className={styles.channelVal}>
                      +94 77 365 0313
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("+94773650313", "Phone number")}
                    className={styles.copyBtn}
                    title="Copy Phone"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelIcon}>
                    <MapPin size={18} />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>Location</span>
                    <span className={styles.channelVal}>Sri Lanka (GMT+5:30)</span>
                  </div>
                </div>
              </div>

              <div className={styles.cvDownloadBox}>
                <a
                  href="/CV.pdf"
                  download="Gagana_Perera_CV.pdf"
                  className="btn-white-pill"
                  style={{ width: "100%" }}
                >
                  Download Full CV (PDF) <FileDown size={16} />
                </a>
              </div>

              <div className={styles.socialsRow}>
                <a
                  href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <span className={styles.dot}>•</span>
                <a
                  href="https://github.com/GaganaUshan"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.formCol}>
              <h3 className={styles.colTitle}>Send a Message</h3>
              <p className={styles.colDesc}>
                Fill out the form below to kick off a conversation.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +94 77 000 0000"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry or collaboration idea..."
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-orange"
                  style={{ width: "100%" }}
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"} <Send size={16} />
                </button>
              </form>
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
            <CheckCircle2 size={16} color="#f9532d" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
