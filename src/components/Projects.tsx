'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  demoUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects and blog posts.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    techs: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    demoUrl: 'https://github.com/yogeesh-s/portfolio',
    repoUrl: 'https://github.com/yogeesh-s/portfolio',
  },
  {
    title: 'College Staff Data Management',
    description:
      'System for staff data entry, dynamic reports & analysis using PHP, MySQL & JS.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    techs: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/yogeesh-s',
  },
  {
    title: 'Multivendor E‑commerce Platform', 
    description:
      'Buyer/seller/admin modules built with PHP, MySQL, JS & CSS.',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    techs: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
  },
  {
    title: 'Microservices & Authentication',
    description:
      'Auth, profiles & notifications microservices with Google OAuth.',
    image:
      'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop',
    techs: ['Node.js', 'Express', 'Docker', 'OAuth'],
  },
  {
    title: 'Movie Data Scraping & Analysis',
    description:
      'Scraped 48K+ movie records using Selenium; performed EDA with Python.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    techs: ['Python', 'Selenium', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Colorizer App (Deep Learning)',
    description:
      'CNN-based app to colorize grayscale images, deployed via Streamlit.',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    techs: ['Python', 'TensorFlow', 'Streamlit'],
  },
  {
    title: 'Sports Event Management System',
    description:
      'Full-stack sports event platform with scheduling & dashboards.',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    techs: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  },
  {
    title: '30+ IoT Projects',
    description:
      'Various IoT solutions with sensor integration & data logging.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    techs: ['Arduino', 'Raspberry Pi', 'MQTT'],
  },
  {
    title: 'SGPA Calculator',
    description:
      'Seminar GPA calculator based on grades & credits.',
    image:
      'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://github.com/yogeesh-s',
    repoUrl: 'https://github.com/yogeesh-s',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Current weather + 7‑day forecast using OpenWeather API.',
    image:
      'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop',
    techs: ['React', 'API', 'CSS'],
    demoUrl: 'https://github.com/yogeesh-s',
    repoUrl: 'https://github.com/yogeesh-s',
  },
  {
    title: 'BMI Calculator',
    description:
      'UI-driven BMI calculator with instant results.',
    image:
      'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=800&h=600&fit=crop',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://github.com/yogeesh-s',
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
    <section id="projects" className="relative px-6 py-24 bg-[var(--surface)] overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-[var(--text)] mb-12">Projects</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300"
            style={{ height: '420px' }}
          >
            <motion.div variants={imageVariants} className="relative w-full h-48 overflow-hidden">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </motion.div>

            <div className="flex flex-col justify-between flex-grow p-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[var(--text)] line-clamp-2">{p.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">{p.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 mt-auto">
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] text-sm font-medium hover:underline">
                    Demo →
                  </a>
                )}
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] text-sm font-medium hover:underline">
                    Code ↗
                  </a>
                )}
              </div>
            </div>

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

