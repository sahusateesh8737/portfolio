'use client';

import { motion } from 'framer-motion';
import { FaChrome, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const tools = [
  {
    title: 'lpu-wifi-autoLogin',
    description: 'lpu-wifi-autoLogin is a JavaScript-based browser extension built to automate logging into LPU Wi‑Fi.It streamlines the sign-in process by handling the login steps for you, so you can get connected faster without repeatedly entering details.',
    tags: ['JavaScript', 'HTML/CSS', 'Chrome API'],
    github: 'https://github.com/sahusateesh8737/lpu-wifi-autoLogin', // Placeholder
    demo: 'https://github.com/sahusateesh8737/lpu-wifi-autoLogin', // Placeholder for Chrome Web Store link
    icon: FaChrome,
    badge: 'Chrome Extension',
  },
  // Add more tools/extensions here
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">04.</span> Tools & Extensions
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-tech-gray rounded-xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                  <Icon className="text-4xl" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10">
                  {tool.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-gray-400 mb-8 text-sm leading-relaxed grow">
                {tool.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {tool.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={tool.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href={tool.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Extension Link"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
