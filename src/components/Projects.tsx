'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Fitness Tracker',
    description: 'A comprehensive fitness tracking application powered by AI. Features real-time posture correction, workout plans, and nutrition tracking.',
    tags: ['React', 'TensorFlow.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-[linear-gradient(45deg,#00f3ff_0%,#0066ff_100%)]',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce solution with microservices architecture. Includes inventory management, payment gateway integration, and admin dashboard.',
    tags: ['Next.js', 'Go', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'bg-[linear-gradient(45deg,#ff00ff_0%,#00ffff_100%)]',
  },
  {
    title: 'Smart Home IoT Dashboard',
    description: 'Centralized control panel for IoT devices. Supports MQTT protocol for real-time communication and energy usage analytics.',
    tags: ['Vue.js', 'Python', 'MQTT', 'InfluxDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
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
