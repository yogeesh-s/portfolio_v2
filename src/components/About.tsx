'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FaBolt, FaPalette, FaCode, FaUsers } from 'react-icons/fa';
import UniverseVisual from './UniverseVisual';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.4,
    once: false,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen px-6 py-20 flex items-center justify-center bg-[var(--surface)]"
    >
      {/* Decorative Gradient Circles */}
      <div className="absolute top-10 right-10 w-36 h-36 rounded-full bg-[var(--accent)] opacity-20 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-[var(--accent)] opacity-20 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* === Left Animated Content === */}
        <div className="space-y-6">
          <motion.h2
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text)]"
          >
            About Me
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
          >
            I’m a frontend engineer focused on clean design systems, motion UX, and performant experiences. I love building UI that feels alive, clear, and fast.
          </motion.p>

          {/* ✅ Extra paragraph */}
          <motion.p
            custom={2.5}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
          >
            With a strong understanding of accessibility and a designer’s eye for clarity, I aim to make web interfaces that feel intuitive and effortless.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            {[
              {
                icon: <FaBolt className="text-[var(--accent)] text-lg" />,
                label: 'Fast UI with motion focus',
              },
              {
                icon: <FaPalette className="text-[var(--accent)] text-lg" />,
                label: 'Design + dev integration',
              },
              {
                icon: <FaCode className="text-[var(--accent)] text-lg" />,
                label: 'Reusable React components',
              },
              {
                icon: <FaUsers className="text-[var(--accent)] text-lg" />,
                label: 'Built for teams & scale',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={4 + i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeIn}
                className="bg-white/5 rounded-lg border border-white/10 p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition"
              >
                {item.icon}
                <span className="text-sm text-[var(--text-secondary)]">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* === Right Universe Visual === */}
        <UniverseVisual isInView={isInView} />
      </div>
    </section>
  );
}
