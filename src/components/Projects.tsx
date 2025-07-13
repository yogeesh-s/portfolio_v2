'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Project Aurora',
    description:
      'A responsive, AI-driven portfolio template with real-time theming and dark mode toggle.',
    image:
      'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=800&h=600&fit=crop',
    demoUrl: 'https://aurora.example.com',
    repoUrl: 'https://github.com/your/aurora',
  },
  {
    title: 'Cosmic Commerce',
    description:
      'E‑commerce frontend with micro-interactions, product filtering, and Framer-based animations.',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/your/cosmic-commerce',
  },
  {
    title: 'Motion Maps',
    description:
      'Interactive map tool with animated route plotting, zoom transitions, and location clustering.',
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop',
    demoUrl: 'https://maps.example.com',
    repoUrl: 'https://github.com/your/motion-maps',
  },
  {
    title: 'UIverse',
    description:
      'A collection of reusable UI components built with accessibility and theming in mind.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    demoUrl: '',
    repoUrl: 'https://github.com/your/uiverse',
  },
  {
    title: 'Nova Docs',
    description:
      'Documentation system with markdown rendering, versioning support, and live preview editor.',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',    demoUrl: '',
    repoUrl: 'https://github.com/your/novadocs',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
  },
};

const imageVariants: Variants = {
  hover: { scale: 1.05 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 bg-[var(--surface)] overflow-hidden"
    >
      <h2 className="text-center text-4xl font-bold text-[var(--text)] mb-12">
        Projects
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300"
            style={{ height: '400px' }}
          >
            <motion.div
              variants={imageVariants}
              className="relative w-full h-48 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-between flex-grow p-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[var(--text)] line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 pt-4 mt-auto">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] text-sm font-medium hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] text-sm font-medium hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            {/* Hover accent bar */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)]"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Ambient Orbs */}
      <div className="absolute w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl -top-10 -left-10 z-0" />
      <div className="absolute w-80 h-80 bg-[var(--accent-dark)]/10 rounded-full blur-3xl -bottom-24 -right-20 z-0" />
    </section>
  );
}
