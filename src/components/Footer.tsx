// components/Footer.tsx
'use client';

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full px-6 py-6 bg-[var(--surface)]/80 backdrop-blur-md border-t border-[var(--border)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Made with love */}
        <p className="text-sm text-[var(--text-secondary)] text-center md:text-left">
          Made with ❤️ by{' '}
          <span className="text-[var(--accent)] font-medium">Yogeesh</span>
        </p>

        {/* Right: Social icons */}
        <div className="flex gap-5 text-[var(--text-secondary)]">
          <Link
            href="https://github.com/yogeesh-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--accent)] transition"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/yogeesh-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--accent)] transition"
          >
            <FaLinkedin size={18} />
          </Link>
          <Link
            href="https://x.com/yogeeshYu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-[var(--accent)] transition"
          >
            <FaXTwitter size={18} />
          </Link>
          <Link
            href="mailto:yogeesh.sryd@gmail.com"
            aria-label="Email"
            className="hover:text-[var(--accent)] transition"
          >
            <FaEnvelope size={18} />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
