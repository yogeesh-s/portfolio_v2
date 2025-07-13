'use client';

import { motion, Variants } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNodeJs,
  FaFigma,
  FaAws,
  FaPython,
  FaDatabase,
  FaDocker,
  FaBitbucket,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiExpress,
  SiRedux,
  SiJsonwebtokens,
} from 'react-icons/si';

const skills = [
  // Frontend
  { icon: <FaReact className="text-sky-400" />, name: 'React', tagline: 'UI built as components' },
  { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js', tagline: 'SSR & App routing magic' },
  { icon: <SiTypescript className="text-blue-600" />, name: 'TypeScript', tagline: 'Confident & scalable code' },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind CSS', tagline: 'Utility-first styling' },
  { icon: <SiFramer className="text-pink-500" />, name: 'Framer Motion', tagline: 'Expressive motion UI' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5', tagline: 'Semantic markup' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3', tagline: 'Layout & animations' },
  { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript', tagline: 'Interactive UI logic' },
  { icon: <SiRedux className="text-purple-500" />, name: 'Redux', tagline: 'State management' },

  // Backend
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js', tagline: 'Runtime & APIs' },
  { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express.js', tagline: 'Backend routing' },
  { icon: <SiDjango className="text-green-900 dark:text-green-300" />, name: 'Django', tagline: 'Secure Python backend' },
  { icon: <SiJsonwebtokens className="text-orange-400" />, name: 'JWT', tagline: 'Auth & API security' },

  // Databases & APIs
  { icon: <SiPostgresql className="text-blue-800" />, name: 'PostgreSQL', tagline: 'Relational database' },
  { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB', tagline: 'NoSQL document store' },
  { icon: <FaDatabase className="text-gray-400" />, name: 'REST API', tagline: 'Interface for data' },

  // Dev Tools
  { icon: <FaGitAlt className="text-red-500" />, name: 'Git', tagline: 'Version control' },
  { icon: <FaBitbucket className="text-blue-700" />, name: 'Bitbucket', tagline: 'Source & CI/CD' },
  { icon: <FaAws className="text-yellow-600" />, name: 'AWS', tagline: 'Cloud deployment' },
  { icon: <FaDocker className="text-blue-500" />, name: 'Docker', tagline: 'Containerization' },
  { icon: <FaPython className="text-yellow-400" />, name: 'Python', tagline: 'Core scripting logic' },
  { icon: <FaFigma className="text-pink-600" />, name: 'Figma', tagline: 'Design handoff' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-24 bg-[var(--surface)] overflow-hidden"
    >
      <h2 className="text-center text-4xl font-bold text-[var(--text)] mb-12">
        Skills & Tools
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // ✅ Animate each scroll-in
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl flex flex-col items-center justify-center text-center transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[var(--accent)]"
            style={{
              transformStyle: 'preserve-3d',
              perspective: 800,
            }}
          >
            <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <div className="text-[var(--text)] font-semibold">{skill.name}</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1 leading-tight">
              {skill.tagline}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative background blur elements */}
      <div className="absolute w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl top-16 -left-20 z-0" />
      <div className="absolute w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl bottom-10 -right-32 z-0" />
    </section>
  );
}
