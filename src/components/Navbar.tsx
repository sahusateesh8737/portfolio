'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Certifications', path: '#certifications' },
  { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-black/40 backdrop-blur-xl border border-white rounded-full shadow-2xl px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <FaCode className="text-xl text-neon-cyan group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-lg font-bold tracking-tighter text-white">
            SATISH<span className="text-neon-cyan">.DEV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                'relative font-mono text-xs uppercase tracking-wider transition-colors hover:text-white',
                pathname === item.path ? 'text-neon-cyan font-bold' : 'text-gray-400'
              )}
            >
              <span className="relative z-10 px-2 py-1">{item.name}</span>
              {pathname === item.path && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 z-0 bg-neon-cyan/20 blur-sm rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl text-white shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }} // Note: Needs AnimatePresence for exit, but we'll stick to basic for now
          className="md:hidden absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-4 shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="font-mono text-lg text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
