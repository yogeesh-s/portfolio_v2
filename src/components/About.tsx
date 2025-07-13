'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FaBolt, FaServer, FaCode, FaCogs } from 'react-icons/fa';
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
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-36 h-36 rounded-full bg-[var(--accent)] opacity-20 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-[var(--accent)] opacity-20 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Left Text */}
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
            I’m a full-stack developer who brings clean UI, fast performance, and strong backend architecture together.
            I love building interfaces that are both technically solid and visually intuitive — whether it’s a dynamic frontend or a scalable backend.
          </motion.p>

          <motion.p
            custom={2.5}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
          >
            I specialize in React, Next.js, Node.js, and Django — with hands-on experience in building REST APIs and working with databases like PostgreSQL and MongoDB.
            From reusable components to backend services and deployment, I focus on delivering maintainable, production-ready code.
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
                label: 'Performant, responsive UI',
              },
              {
                icon: <FaCode className="text-[var(--accent)] text-lg" />,
                label: 'Reusable components & clean code',
              },
              {
                icon: <FaServer className="text-[var(--accent)] text-lg" />,
                label: 'REST API & backend development',
              },
              {
                icon: <FaCogs className="text-[var(--accent)] text-lg" />,
                label: 'Integrated Git, CI/CD & AWS flow',
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

        {/* Right Visual */}
        <UniverseVisual isInView={isInView} />
      </div>
    </section>
  );
}
