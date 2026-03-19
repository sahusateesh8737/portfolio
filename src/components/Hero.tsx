'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animations removed
  }, []);

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2.2,
        staggerChildren: 0.1,
      },
    },
  };

  const typingContainerSubtitle = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 3.6,
        staggerChildren: 0.05,
      },
    },
  };

  const typingContainerBio = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 4.8,
        staggerChildren: 0.02,
      },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a5a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a5a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_0%_0%,#000_30%,transparent_100%),radial-gradient(ellipse_60%_60%_at_100%_100%,#000_30%,transparent_100%)] opacity-95 hero-bg-grid" />
      
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
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <motion.h2 
              variants={typingContainerSubtitle}
              initial="hidden"
              animate="show"
              className="text-2xl md:text-3xl text-gray-200 mb-6 font-mono flex flex-wrap justify-center md:justify-start"
            >
              <span className="text-neon-cyan mr-3">&lt;</span>
              {Array.from("Full Stack Engineer").map((letter, index) => (
                <motion.span key={index} variants={typingLetter} className="inline-block">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <span className="text-neon-cyan ml-3">/&gt;</span>
            </motion.h2>
            
            <motion.p 
              variants={typingContainerBio}
              initial="hidden"
              animate="show"
              className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-sans tracking-wide"
            >
              {[
                "Crafting high-performance digital experiences.",
                " B.Tech CSE Student at Lovely Professional University.",
                " Specializing in modern web technologies and scalable architectures.",
              ].map((sentence, sIdx) => (
                <span key={sIdx}>
                  {Array.from(sentence).map((letter, index) => (
                    <motion.span key={index} variants={typingLetter} className="inline-block">
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>

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
          transition={{ delay: 2.5, duration: 0.8, type: 'spring', stiffness: 100 }}
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
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
              />
            </div>
          </div>
          
          {/* Floating code icon badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 lg:bottom-4 lg:right-4 p-4 lg:p-5 rounded-full bg-black border border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.5)] z-20"
          >
            <FaCode className="text-2xl lg:text-3xl text-neon-cyan" />
          </motion.div>
        </motion.div>

      </div>

      {/* Corner Animations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-120 h-120 bg-neon-blue/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}
