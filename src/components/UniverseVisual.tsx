"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UniverseVisual({ isInView }: { isInView: boolean }) {
  const [index, setIndex] = useState(0);

  const content = [
    {
      title: "Creative Developer",
      description:
        "Building expressive, responsive, and motion-inspired web interfaces.",
    },
    {
      title: "Interface Engineer", 
      description:
        "I bring designs to life using clean code, smooth animation, and scalable components.",
    },
  ];

  const sizes = {
    sm: [160, 220, 280], 
    md: [180, 240, 300]
  };

  const radiusSizes = {
    sm: [170, 230, 290],
    md: [190, 250, 310],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative w-full min-w-[320px] h-[440px] flex items-center justify-center overflow-x-hidden"
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[var(--accent)] blur-2xl opacity-30"
      />

      {sizes.sm.map((size, index) => (
        <div
          key={index}
          className="absolute border border-[var(--accent)]/20 rounded-full md:hidden"
          style={{ width: size, height: size }}
        />
      ))}

      {sizes.md.map((size, index) => (
        <div
          key={`md-${index}`}
          className="absolute hidden md:block border border-[var(--accent)]/20 rounded-full"
          style={{ width: size, height: size }}
        />
      ))}

      {radiusSizes.sm.map((radius, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute md:hidden"
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--accent)] rounded-full shadow-md" />
          </div>
        </motion.div>
      ))}

      {radiusSizes.md.map((radius, i) => (
        <motion.div
          key={`md-${i}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute hidden md:block"
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--accent)] rounded-full shadow-md" />
          </div>
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="absolute text-center px-4 w-[280px] sm:w-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
        >
          <div className="text-xl font-bold text-[var(--text)]">
            {content[index].title}
          </div>
          <div className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
            {content[index].description}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
