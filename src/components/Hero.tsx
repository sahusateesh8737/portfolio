'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg-grid', {
        backgroundPosition: '100px 100px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 hero-bg-grid" />
      
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block p-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/50 backdrop-blur-sm"
        >
          <FaCode className="text-4xl text-neon-cyan" />
        </motion.div>

        <motion.h1
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-mono"
        >
          {Array.from("SATISH SAHU").map((letter, index) => (
            <motion.span key={index} variants={typingLetter} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-mono">
            <span className="text-neon-cyan">&lt;</span> Full Stack Engineer <span className="text-neon-cyan">/&gt;</span>
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting high-performance digital experiences. B.Tech CSE Student at Lovely Professional University.
            Specializing in modern web technologies and scalable architectures.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-blue transition-colors border border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 243, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-transparent text-neon-cyan font-bold rounded-lg border border-neon-cyan/50 hover:border-neon-cyan transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-neon-blue/10 w-2 h-2 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
}
