'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SnapPDF - All-in-One PDF Utility Suite',
    description: 'SnapPDF is a high-performance, privacy-focused web app that allows you to merge, split, and compress documents directly in your browser. By utilizing WebAssembly for client-side processing, it ensures your sensitive files stay on your device rather than being uploaded to a server.',
    tags: ['TypeScript', 'JavaScript', 'Tailwind CSS', 'Docker' ,'PostgreSQL' , 'bcryptjs'],
    github: 'https://github.com/sahusateesh8737/snapPDF',
    demo: 'https://snap-pdf-web.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#00f3ff_0%,#0066ff_100%)]',
  },
  {
    title: 'NEEV - MHRD Dashboard',
    description: 'A full-stack web application built for the Ministry of Human Resource Development (MHRD) dashboard initiatives, featuring a modern responsive UI and a robust backend API. It includes JWT-based authentication and a Node/Express + PostgreSQL backend with a clean, scalable frontend–backend separation.',
    tags: ['React', 'Vite' ,'TypeScript', 'TailwindCSS' ,'React-Router', 'Lucide-React', 'Framer-Motion', 'Node.js' ,'Express.js' ,'PostgreSQL', 'pg' ,'JWT' ,'Helmet' ,'CORS' ,'bcryptjs'],
    github: 'https://github.com/sahusateesh8737/NEEV-MHRD_Dashboard',
    demo: 'https://neev-mhrd-dashboard.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#ff00ff_0%,#00ffff_100%)]',
  },
  {
    title: 'MealCart',
    description: 'MealCart is an AI-powered recipe and grocery list generator that helps you plan meals faster and shop smarter. It streamlines cooking by turning your meal ideas into recipes and an organized grocery list',
    tags: ['Node.js', 'Express', 'MongoDB/Mongoose', 'JWT+bcryptjs', 'Google Gemini', 'Spoonacular/Unsplash', 'Docker/Compose', 'GitHub Actions'],
    github: 'https://github.com/sahusateesh8737/MealCart',
    demo: 'https://meal-cart-theta.vercel.app/',
    image: 'bg-[linear-gradient(45deg,#00ff00_0%,#006600_100%)]',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-tech-gray rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300"
          >
            {/* Project Image Placeholder */}
            <div className={`h-48 w-full ${project.image} opacity-80 group-hover:opacity-100 transition-opacity`} />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
