'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UniverseVisual({ isInView }: { isInView: boolean }) {
  const [index, setIndex] = useState(0);

  // 🔄 Add more content items here
  const content = [
    {
      title: 'Creative Developer',
      description:
        'Building expressive, responsive, and motion-inspired web interfaces.',
    },
    {
      title: 'Interface Engineer',
      description:
        'Bringing designs to life with clean code, smooth animations, and scalable components.',
    },
    {
      title: 'REST API Specialist',
      description:
        'Designing and implementing robust RESTful services with Node.js & Django.',
    },
    {
      title: 'Full-Stack Architect',
      description:
        'Connecting frontend and backend with PostgreSQL, MongoDB, and production-ready deployments.',
    },
    {
      title: 'Performance Optimizer',
      description:
        'Fine-tuning UIs for Lighthouse 95+ scores and backend endpoints for sub-100ms responses.',
    },
  ];

  // auto-rotate every 3s
  useEffect(() => {
    const iv = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 3000);
    return () => clearInterval(iv);
  }, [content.length]);

  // circle sizes
  const sizes = { sm: [160, 220, 280], md: [180, 240, 300] };
  const radii = { sm: [170, 230, 290], md: [190, 250, 310] };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="relative w-full min-w-[320px] h-[440px] flex items-center justify-center overflow-x-hidden"
    >
      {/* pulsating core */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[var(--accent)] blur-2xl opacity-30"
      />

      {/* static rings */}
      {sizes.sm.map((d, i) => (
        <div
          key={i}
          className="absolute border border-[var(--accent)]/20 rounded-full md:hidden"
          style={{ width: d, height: d }}
        />
      ))}
      {sizes.md.map((d, i) => (
        <div
          key={`md-${i}`}
          className="absolute hidden md:block border border-[var(--accent)]/20 rounded-full"
          style={{ width: d, height: d }}
        />
      ))}

      {/* rotating orbit dots */}
      {radii.sm.map((r, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
          className="absolute md:hidden"
          style={{ width: r, height: r }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--accent)] rounded-full shadow-md" />
        </motion.div>
      ))}
      {radii.md.map((r, i) => (
        <motion.div
          key={`md-${i}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear' }}
          className="absolute hidden md:block"
          style={{ width: r, height: r }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--accent)] rounded-full shadow-md" />
        </motion.div>
      ))}

      {/* rotating text content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="absolute text-center px-4 w-[280px] sm:w-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
        >
          <h3 className="text-xl font-bold text-[var(--text)]">
            {content[index].title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
            {content[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
