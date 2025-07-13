'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const initialForm = { name: '', email: '', message: '' };
const initialErrors = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { ...initialErrors };
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setTimeout(() => {
      setForm(initialForm);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-24 bg-[var(--surface)] overflow-hidden"
    >
      {/* Heading OUTSIDE the card */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center text-4xl font-bold text-[var(--text)] mb-12"
      >
        Get in Touch
      </motion.h2>

      {/* Card START */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-10 space-y-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`peer w-full bg-transparent border rounded-lg px-4 pt-6 pb-2 text-sm text-[var(--text)] placeholder-transparent focus:outline-none focus:border-[var(--accent)] ${
                errors.name ? 'border-red-500' : 'border-white/20'
              }`}
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-xs text-[var(--text-secondary)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Your Name
            </label>
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`peer w-full bg-transparent border rounded-lg px-4 pt-6 pb-2 text-sm text-[var(--text)] placeholder-transparent focus:outline-none focus:border-[var(--accent)] ${
                errors.email ? 'border-red-500' : 'border-white/20'
              }`}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-xs text-[var(--text-secondary)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Email
            </label>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`peer w-full bg-transparent border rounded-lg px-4 pt-6 pb-2 text-sm text-[var(--text)] placeholder-transparent focus:outline-none focus:border-[var(--accent)] resize-none ${
                errors.message ? 'border-red-500' : 'border-white/20'
              }`}
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-xs text-[var(--text-secondary)] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Message
            </label>
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button type="submit" variant="primary" disabled={submitted}>
              {submitted ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        
        {/* Contact Info Icons */}
<div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/10 mt-4">
  <a
    href="mailto:you@example.com"
    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
    aria-label="Email"
  >
    <FaEnvelope className="text-[var(--accent)]" />
    you@example.com
  </a>

  <a
    href="tel:+1234567890"
    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
    aria-label="Phone"
  >
    <FaPhoneAlt className="text-[var(--accent)]" />
    +1 (234) 567‑890
  </a>

  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
    <FaMapMarkerAlt className="text-[var(--accent)]" />
    San Francisco, CA
  </div>

  <a
    href="https://linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition"
    aria-label="LinkedIn"
  >
    <FaLinkedin className="text-[var(--accent)]" />
    LinkedIn
  </a>
</div>
      </motion.div>
      


      {/* Background Orbs */}
      <div className="absolute w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl -top-24 -left-16 z-0" />
      <div className="absolute w-96 h-96 bg-[var(--accent-dark)]/10 rounded-full blur-3xl -bottom-32 -right-20 z-0" />
    </section>
  );
}
