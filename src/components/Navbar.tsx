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
  { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <FaCode className="text-2xl text-neon-cyan group-hover:rotate-12 transition-transform" />
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            SATISH<span className="text-neon-cyan">.DEV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                'relative font-mono text-sm uppercase tracking-wide transition-colors hover:text-neon-cyan',
                pathname === item.path ? 'text-neon-cyan' : 'text-gray-400'
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.path && (
                <motion.span
                  layoutId="nav-glow"
                  className="absolute inset-0 z-0 bg-neon-cyan/20 blur-lg rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="font-mono text-lg text-gray-300 hover:text-neon-cyan"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
