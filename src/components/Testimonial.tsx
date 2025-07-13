'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    quote:
      'Working with this team has been incredible. Their attention to detail and innovative solutions have consistently exceeded my expectations.',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
  },
  {
    name: 'Priyanka Mehta', 
    role: 'Product Manager',
    quote:
      "I've been amazed by the quality of work and dedication shown by the team. They don't just deliver solutions, they shape strategy.",
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
  },
  {
    name: 'Amit Sharma',
    role: 'UX Designer', 
    quote:
      'The level of professionalism and technical expertise is outstanding. Their UX thinking made a big impact.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    name: 'Neha Patel',
    role: 'Frontend Developer',
    quote:
      'Working alongside this talented team has been a fantastic experience. Clean code and creativity everywhere.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71',
  },
  {
    name: 'Vikram Singh',
    role: 'Backend Developer',
    quote:
      'The architecture and code quality standards are impressive. A great team that delivers robust solutions.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857',
  },
  {
    name: 'Deepak Verma',
    role: 'DevOps Engineer',
    quote:
      'Their infrastructure and deployment practices are state-of-the-art. Really enjoyed collaborating with the team.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    name: 'Anjali Gupta',
    role: 'QA Engineer',
    quote:
      'The attention to quality and testing is remarkable. They ensure every feature is thoroughly validated.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Rahul Malhotra',
    role: 'Solutions Architect',
    quote:
      'Their system design and architectural decisions are always well thought out. A pleasure to work with.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Meera Reddy',
    role: 'Technical Lead',
    quote:
      'The team consistently delivers high-quality solutions while maintaining excellent communication throughout.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
  },
  {
    name: 'Arjun Nair',
    role: 'System Administrator',
    quote:
      'Their infrastructure management and system optimization skills are top-notch. Really reliable team.',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyles = (i: number) => {
    const diff = (i - index + testimonials.length) % testimonials.length;

    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 3,
        opacity: 1,
      };
    } else if (diff === 1 || (index === testimonials.length - 1 && i === 0)) {
      return {
        x: 180,
        scale: 0.9,
        rotateY: -25,
        zIndex: 2,
        opacity: 0.5,
      };
    } else if (diff === testimonials.length - 1 || (index === 0 && i === testimonials.length - 1)) {
      return {
        x: -180,
        scale: 0.9,
        rotateY: 25,
        zIndex: 2,
        opacity: 0.5,
      };
    } else {
      return {
        x: 0,
        scale: 0.8,
        rotateY: 0,
        zIndex: 1,
        opacity: 0,
      };
    }
  };

  return (
    <section
      id="testimonials"
      className="relative px-6 py-24 overflow-hidden"
      style={{
        backgroundColor: 'var(--surface)',
        color: 'var(--text)',
      }}
    >
      <h2 className="text-center text-4xl font-bold mb-16">Testimonials</h2>

      <div className="relative max-w-4xl mx-auto h-[420px]" style={{ perspective: '1200px' }}>
        {testimonials.map((item, i) => {
          const style = getCardStyles(i);

          return (
            <motion.div
              key={i}
              animate={style}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute w-full max-w-md left-1/2 top-0 -translate-x-1/2"
              style={{
                transformStyle: 'preserve-3d',
                zIndex: style.zIndex,
                opacity: style.opacity,
              }}
            >
              <div
                className="p-8 rounded-2xl shadow-xl transition-all"
                style={{
                  transform: `translateX(${style.x}px) scale(${style.scale}) rotateY(${style.rotateY}deg)`,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <FaQuoteLeft style={{ color: 'var(--accent)', fontSize: '1.75rem', marginBottom: '1.5rem' }} />
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {item.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden border-2 shadow-lg"
                    style={{
                      borderColor: 'rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.125rem' }}>{item.name}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="mt-12 flex justify-center gap-6">
        <button
          onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="p-3 rounded-full border transition-colors"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <IoIosArrowBack style={{ color: 'var(--accent)', fontSize: '1.75rem' }} />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
          className="p-3 rounded-full border transition-colors"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <IoIosArrowForward style={{ color: 'var(--accent)', fontSize: '1.75rem' }} />
        </button>
      </div>

      {/* Glows */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl -bottom-32 -left-20 pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 0.1 }}
      />
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl -top-40 -right-30 pointer-events-none"
        style={{ background: 'var(--accent-dark)', opacity: 0.1 }}
      />
    </section>
  );
}
