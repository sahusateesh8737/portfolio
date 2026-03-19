'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SnapPDF - All-in-One PDF Utility Suite',
    description: 'SnapPDF is a high-performance, privacy-focused web app that allows you to merge, split, and compress documents directly in your browser. By utilizing WebAssembly for client-side processing, it ensures your sensitive files stay on your device rather than being uploaded to a server.',
    tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Docker' ,'PostgreSQL' , 'bcryptjs'],
    github: 'https://github.com/sahusateesh8737/snapPDF',
    demo: 'https://snap-pdf-web.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#00f3ff_0%,#0066ff_100%)]',
    glow: 'bg-cyan-500/20',
  },
  {
    title: 'NEEV - MHRD Dashboard',
    description: 'A full-stack web application built for the Ministry of Human Resource Development (MHRD) dashboard initiatives, featuring a modern responsive UI and a robust backend API. It includes JWT-based authentication and a Node/Express + PostgreSQL backend with a clean, scalable frontend–backend separation.',
    tags: ['React', 'Vite' ,'TypeScript', 'TailwindCSS' ,'React-Router', 'Lucide-React', 'Framer-Motion', 'Node.js' ,'Express.js' ,'PostgreSQL', 'pg' ,'JWT'],
    github: 'https://github.com/sahusateesh8737/NEEV-MHRD_Dashboard',
    demo: 'https://neev-mhrd-dashboard.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#ff00ff_0%,#00ffff_100%)]',
    glow: 'bg-fuchsia-500/20',
  },
  {
    title: 'MealCart',
    description: 'MealCart is an AI-powered recipe and grocery list generator that helps you plan meals faster and shop smarter. It streamlines cooking by turning your meal ideas into recipes and an organized grocery list',
    tags: ['Node.js', 'Express', 'MongoDB/Mongoose', 'JWT', 'Google Gemini', 'Docker/Compose', 'GitHub Actions'],
    github: 'https://github.com/sahusateesh8737/MealCart',
    demo: 'https://meal-cart-theta.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#00ff00_0%,#006600_100%)]',
    glow: 'bg-green-500/20',
  },
];

const ProjectsParticlesWrapper = dynamic(() => import('./ProjectsParticles'), { ssr: false });

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        y: yProgress
      }}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center w-full min-h-[400px] group`}
    >
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${project.glow} blur-[100px] -z-10 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />

      {/* Project Mockup / Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full lg:w-3/5 relative z-10"
      >
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl relative">
          {/* Mac Window Header */}
          <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {/* Content Area - Live Preview */}
          <div className="relative w-full aspect-video bg-[#0a0a0a] overflow-hidden group/iframe">
            
            {/* Loading Indicator (shows beneath iframe) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-0">
               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neon-cyan mb-4"></div>
               <span className="text-xs font-mono">Loading Interactive Preview...</span>
            </div>

            {/* The Live Interactive App */}
            <iframe 
               src={project.demo} 
               title={`${project.title} Live Preview`}
               className="relative z-10 w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/iframe:pointer-events-auto"
               loading="lazy"
               sandbox="allow-scripts allow-same-origin"
            />
            
            {/* Overlay to prevent accidental scrolling when just scrolling past the portfolio */}
            <div className="absolute inset-0 z-20 bg-black/20 group-hover/iframe:opacity-0 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
               <span className="opacity-0 group-hover:opacity-100 bg-black/80 text-white border border-neon-cyan/50 px-4 py-2 rounded-full font-mono text-sm shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all transform scale-95 group-hover:scale-100 group-hover/iframe:hidden">
                 Hover to Interact
               </span>
            </div>
            
            {/* Glossy reflection effect overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none bg-linear-to-tr from-white/0 via-white/5 to-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </motion.div>

      {/* Project Info */}
      <div className={`w-full lg:w-2/5 flex flex-col justify-center relative z-10 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
        <div className={`flex items-center gap-4 mb-4 ${!isEven && 'lg:justify-end'}`}>
           <span className="text-neon-cyan font-mono text-sm tracking-wider">Featured Project {index > 8 ? index + 1 : `0${index + 1}`}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-neon-cyan transition-colors cursor-pointer">
          {project.title}
        </h3>
        
        <div className="bg-tech-gray/90 backdrop-blur-md p-6 rounded-xl border border-white/5 shadow-xl mb-6 relative z-20">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left">
            {project.description}
          </p>
        </div>
        
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 text-sm font-mono text-gray-400 ${!isEven && 'lg:justify-end'}`}>
          {project.tags.map((tag: string) => (
            <li key={tag} className="hover:text-neon-cyan transition-colors cursor-default drop-shadow-md">
              {tag}
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-6 ${!isEven && 'lg:justify-end'}`}>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-neon-cyan transition-colors transform hover:scale-110"
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-neon-cyan transition-colors transform hover:scale-110"
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* === Cosmic Background Layer === */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Purple/Magenta glow orb - left side */}
        <div
          className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full opacity-30 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(139,92,246,0.3) 30%, rgba(124,58,237,0.1) 60%, transparent 80%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Cyan/Blue glow orb - right side */}
        <div
          className="absolute top-1/2 right-1/6 w-[450px] h-[450px] rounded-full opacity-25 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(59,130,246,0.3) 30%, rgba(99,102,241,0.1) 60%, transparent 80%)',
            filter: 'blur(60px)',
            animationDelay: '2s',
          }}
        />
        {/* Deep purple secondary glow */}
        <div
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full opacity-20 animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(217,70,239,0.4) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* === Particles Layer === */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <ProjectsParticlesWrapper />
      </div>

      {/* === Content === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
