'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const [particles, setParticles] = useState<{x: number, y: number, duration: number, delay: number}[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg-grid', {
        backgroundPosition: '100px 100px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    // Generate particles on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

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

      <div className="relative z-10 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16 pt-20 md:pt-0">
        
        {/* Text Section (Left on Desktop, Bottom on Mobile) */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-mono"
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
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-6 font-mono">
              <span className="text-neon-cyan">&lt;</span> Full Stack Engineer <span className="text-neon-cyan">/&gt;</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Crafting high-performance digital experiences. B.Tech CSE Student at Lovely Professional University.
              Specializing in modern web technologies and scalable architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-blue transition-colors border border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)] text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 243, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-transparent text-neon-cyan font-bold rounded-lg border border-neon-cyan/50 hover:border-neon-cyan transition-colors text-center"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Image Section (Right on Desktop, Top on Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className="relative shrink-0"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-2xl animate-pulse"></div>
          
          {/* Image container */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-neon-cyan/50 overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.3)] bg-black/50 p-1 sm:p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-tech-gray">
              <img 
                src="/satish.jpg" 
                alt="Satish Sahu" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Floating code icon badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 lg:bottom-4 lg:right-4 p-4 lg:p-5 rounded-full bg-black border border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.5)] z-20"
          >
            <FaCode className="text-2xl lg:text-3xl text-neon-cyan" />
          </motion.div>
        </motion.div>

      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-neon-blue/10 w-2 h-2 rounded-full"
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>
    </section>
  );
}
