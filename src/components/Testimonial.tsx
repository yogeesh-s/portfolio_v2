'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Software Engineer", 
    quote: "Working with this team has been incredible. Their attention to detail and innovative solutions have consistently exceeded my expectations. The collaborative environment fosters creativity and growth.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Ravi Patel",
    role: "Product Manager",
    quote: "I've been amazed by the quality of work and dedication shown by the team. They don't just deliver solutions, they bring valuable insights that have helped shape our product strategy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Emily Chen", 
    role: "UX Designer",
    quote: "The level of professionalism and technical expertise is outstanding. They have a great eye for design and user experience, making them an invaluable partner in our projects.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Marcus Johnson",
    role: "Tech Lead",
    quote: "The team's ability to tackle complex challenges and deliver elegant solutions is remarkable. Their technical prowess and collaborative approach make them a joy to work with.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    quote: "Outstanding delivery and communication throughout our project. The team consistently demonstrates professionalism and technical excellence in everything they do.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    name: "David Kim",
    role: "Frontend Developer", 
    quote: "Working alongside this talented team has been a fantastic experience. Their attention to detail and commitment to quality is truly inspiring.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  },
  {
    name: "Lisa Anderson",
    role: "Product Designer",
    quote: "An exceptional team that combines creativity with technical expertise. They've consistently delivered beyond expectations and are a pleasure to collaborate with.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  }
];

const containerVariants: Variants = {
  enter: {
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut"
    }
  },
  exit: {
    transition: {
      ease: "easeInOut"
    }
  }
};

const cardVariants: Variants = {
  enter: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  center: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    x: 0,
    zIndex: 2,
    transition: {
      duration: 0.4
    }
  },
  left: {
    x: "-50%",
    scale: 0.85,
    opacity: 0.5,
    rotateY: 30,
    zIndex: 1,
    transition: {
      duration: 0.4
    }
  },
  right: {
    x: "50%",
    scale: 0.85,
    opacity: 0.5,
    rotateY: -30,
    zIndex: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

const switchVariants: Variants = {
  enter: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3
    }
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn" 
    }
  }
};

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([i]) => [(i + 1) % testimonials.length, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (index + 1) % testimonials.length;

  const ordering = [
    { idx: prevIndex, pos: 'left' },
    { idx: index, pos: 'center' },
    { idx: nextIndex, pos: 'right' },
  ];

  return (
    <section id="testimonials" className="relative px-6 py-24 bg-[var(--surface)] overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-[var(--text)] mb-16">Testimonials</h2>

      <div className="relative max-w-4xl mx-auto h-[380px] perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            variants={containerVariants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="w-full h-full relative preserve-3d"
          >
            {ordering.map(({ idx, pos }) => {
              const item = testimonials[idx];
              return (
                <motion.div
                  key={idx}
                  custom={direction}
                  variants={cardVariants}
                  initial="exit"
                  animate={pos}
                  exit="exit"
                  className="absolute top-0 left-0 right-0 mx-auto w-full h-full flex justify-center items-center"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    variants={switchVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`
                      bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl
                      ${pos === 'center' ? 'w-[400px] h-[420px]' : 'w-[360px] h-[400px]'}
                      transition-all duration-300
                      flex flex-col justify-between
                      hover:border-white/20 hover:bg-white/10
                    `}
                  >
                    <FaQuoteLeft className="text-[var(--accent)] text-3xl mb-6" />
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 flex-grow">
                      {item.quote}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--accent)]/20 shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[var(--text)] font-semibold text-lg">{item.name}</p>
                        <p className="text-[var(--text-secondary)] text-sm">{item.role}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-3xl" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setIndex(() => [prevIndex, -1])}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
        >
          <IoIosArrowBack className="text-[var(--accent)] text-2xl" />
        </button>
        <button
          onClick={() => setIndex(() => [nextIndex, 1])}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
        >
          <IoIosArrowForward className="text-[var(--accent)] text-2xl" />
        </button>
      </div>

      <div className="absolute w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl -bottom-32 -left-20" />
      <div className="absolute w-96 h-96 bg-[var(--accent-dark)]/10 rounded-full blur-3xl -top-40 -right-30" />
    </section>
  );
}
