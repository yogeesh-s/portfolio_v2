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

  // Switch content every 3s
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
      className="relative w-full h-[440px] flex items-center justify-center"
    >
      {/* Center Glow */}
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
        className="absolute w-40 h-40 rounded-full bg-[var(--accent)] blur-2xl opacity-30"
      />

      {/* Orbit Rings */}
      {[200, 270, 340].map((size, index) => (
        <div
          key={index}
          className="absolute border border-[var(--accent)]/20 rounded-full"
          style={{ width: size, height: size }}
        />
      ))}

      {/* Orbiting Dots */}
      {[210, 280, 350].map((radius, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--accent)] rounded-full shadow-md" />
          </div>
        </motion.div>
      ))}

      {/* Animated Content Switcher */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="absolute text-center px-4 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
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
