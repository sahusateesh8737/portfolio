'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ''; // Restore scrolling
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#050505] border-b border-neon-cyan/20 origin-top"
        >
          {/* Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 text-4xl md:text-5xl mb-12"
          >
            <FaCode className="text-neon-cyan animate-pulse" />
            <span className="font-mono font-bold tracking-tighter text-white">
              SATISH<span className="text-neon-cyan">.DEV</span>
            </span>
          </motion.div>
          
          {/* High-tech Progress Bar */}
          <div className="w-64 max-w-[80vw] h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {/* Loading Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 font-mono text-neon-cyan/70 text-sm flex gap-2"
          >
            <span>INITIALIZING SYSTEM</span>
            <span className="animate-pulse">...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
