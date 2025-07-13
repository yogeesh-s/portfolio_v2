'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'TechFlow',
    title: 'Frontend Developer',
    period: '2023 - Present',
    description:
      'Developed dynamic UI with React, Framer Motion, and Tailwind CSS. Collaborated on scalable design systems and optimized performance.',
  },
  {
    company: 'DesignSpark',
    title: 'UI/UX Engineer',
    period: '2021 - 2023',
    description:
      'Built accessible, visually expressive interfaces with smooth animations and Figma-based collaboration.',
  },
  {
    company: 'WebHive',
    title: 'Junior Developer',
    period: '2020 - 2021',
    description:
      'Gained strong frontend foundations through real-world client work with modern JavaScript and responsive design.',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 bg-[var(--background)] overflow-hidden"
    >
      <h2 className="text-center text-4xl font-bold text-[var(--text)] mb-16">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[var(--accent)]/30 -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-16 relative z-10">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative flex md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="relative w-full md:w-[calc(50%-32px)] bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md shadow-md hover:shadow-lg transition"
                >
                  {/* Dot */}
                  <div
                    className="absolute top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-white shadow-md z-10 hidden md:block"
                    style={{
                      left: isLeft ? '100%' : 'auto',
                      right: isLeft ? 'auto' : '100%',
                      marginLeft: isLeft ? '1.55rem' : undefined,
                      marginRight: isLeft ? undefined : '1.55rem',
                    }}
                  />

                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {exp.title}{' '}
                    <span className="text-[var(--accent)]">@ {exp.company}</span>
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">
                    {exp.period}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background glows */}
      <div className="absolute w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl -top-10 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl -bottom-20 -right-32 z-0" />
    </section>
  );
}
