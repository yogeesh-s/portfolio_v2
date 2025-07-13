'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import Profilepic from '@/assets/profile.jpeg';
import Typewriter from 'typewriter-effect';

// Animation Variant for fade-up
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden px-6 pt-[80px] sm:pt-[100px]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-[var(--accent)] opacity-20 blur-[180px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[65%_35%] items-center gap-12">
        {/* Left: Text Section */}
        <div className="space-y-6">
          <motion.h1
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[var(--text)] leading-tight"
          >
            Hi, I&apos;m <span className="text-[var(--accent)]">Yogeesh S</span>
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--accent)] min-h-[40px] sm:h-[40px]"
          >
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'UI/UX Enthusiast', 
                  'Creative Coder',
                  'React & Tailwind Specialist',
                  'Performance Optimizer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="text-[var(--text-secondary)] max-w-xl leading-relaxed"
          >
            I&apos;m a passionate frontend developer who loves turning ideas into smooth, performant, and visually compelling interfaces. With a deep focus on accessibility, animations, and user-centric design — I build things that not only work, but feel right.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)] pt-2">
            {[
              '🚀 5+ Projects with advanced UI/UX animations',
              '🌐 Optimized websites for Lighthouse 95+ scores',
              '📦 Built custom UI libraries and design tokens',
              '📈 Passionate about clean code & performance',
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i + 4}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                className="bg-white/5 p-4 rounded-md border border-white/10"
              >
                {text}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            custom={8}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button variant="primary" as="link" href="#projects">
              View Projects
            </Button>
            <Button variant="secondary" as="link" href="#contact">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Right: Profile + Triangle + Badge comment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.6 }}
            className="mb-4 bg-[var(--surface)] text-sm px-4 py-1 rounded-full border border-[var(--border)] text-[var(--accent)] shadow pointer-events-none"
          >
            React • Tailwind • Framer Motion
          </motion.div>

          {/* Triangle + Image */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full z-0 -translate-y-1.5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22c55e" />
                </filter>
              </defs>
              <path
                d="M 5 5 L 95 5 L 50 95 Z"
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="2"
                filter="url(#neon-glow)"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative z-10 w-[200px] h-[200px] rounded-full border-2 border-white/10 bg-white/5 overflow-hidden shadow-lg">
              <Image
                src={Profilepic}
                alt="Profile picture"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Left + Right Neon Lines */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="absolute w-[2px] h-[130%] bg-[var(--accent)] opacity-80"
                style={{
                  left: `${16 + i * 24}px`,
                  top: '-40%',
                  transform: 'rotate(25deg)',
                  zIndex: 20,
                }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="absolute w-[2px] h-[130%] bg-[var(--accent-dark)] opacity-80"
                style={{
                  right: `${16 + i * 24}px`,
                  bottom: '-30%',
                  transform: 'rotate(25deg)',
                  zIndex: 20,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
