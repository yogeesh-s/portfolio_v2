'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Efficient Capital Labs',
    title: 'Software Engineer – Full Stack',
    period: '2024 June – Present',
    description:
      'Leading full stack development of internal tools using React, Node.js, PostgreSQL, and AWS. Focused on scalable architecture, secure APIs, and team collaboration.',
  },
  {
    company: 'Efficient Capital Labs',
    title: 'Full Stack Developer Intern',
    period: '2023 Nov – 2023 Dec',
    description:
      'Built production features with React, Node.js, and PostgreSQL. Contributed to backend APIs, authentication, and performance optimizations in a fast-paced startup.',
  },
  {
    company: 'ArcSolar',
    title: 'Freelance Full Stack Developer (E-Commerce)',
    period: '2022 – 2023',
    description:
      'Developed and maintained a solar e-commerce platform using Next.js, MongoDB, and Tailwind CSS. Added product flows, admin panel, and handled deployment.',
  },
  {
    company: 'Bus Travel Website',
    title: 'Freelance Full Stack Developer',
    period: '2021 – 2022',
    description:
      'Built a responsive travel booking website with React and Express. Integrated location-based search, payment gateways, and backend APIs for admin and users.',
  },
  {
    company: 'Pooja Travels & Multiple Clients',
    title: 'Freelance Developer & SEO Specialist',
    period: '2019 – 2021',
    description:
      'Worked on WordPress websites, SEO optimization, Google Ads, and digital marketing strategies for small businesses. Delivered full-cycle websites and increased search visibility.',
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
        {/* Timeline line */}
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
                  {/* Timeline dot */}
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

      {/* Decorative glows */}
      <div className="absolute w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl -top-10 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl -bottom-20 -right-32 z-0" />
    </section>
  );
}
