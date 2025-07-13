"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";
import Button from "./Button"; // Your custom Button component

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll spy + auto-close menu on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false); // Auto close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] px-6 py-3 flex justify-between items-center transition-all duration-300",
        menuOpen ? "rounded-t-xl rounded-b-none" : "rounded-xl"
      )}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-display text-[var(--accent)] font-bold tracking-wide"
      >
        Yogeesh S
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 relative">
        {navLinks.map((link) => {
          const isActive = active === link.href;
          return (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                )}
              >
                {link.label}
              </Link>
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--accent)] rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          );
        })}
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <Button variant="primary" as="link" href="#contact">
          Hire Me
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="md:hidden text-[var(--accent)] text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: menuOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-[var(--surface)]/95 backdrop-blur-md border border-t-0 border-[var(--border)] shadow-lg rounded-b-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "text-sm font-medium transition-colors",
                    active === link.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="primary"
                as="link"
                href="#contact"
                className="w-full text-center"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
