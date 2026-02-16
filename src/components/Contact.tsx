'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">04.</span> Get In Touch
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Let's build something amazing together.</h3>
          <p className="text-gray-400 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a 
              href="mailto:contact@satish.dev" 
              className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-neon-cyan/20 transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="font-mono">contact@satish.dev</span>
            </a>
            
            <div className="flex gap-6 mt-8 pt-6 border-t border-white/10">
              <a href="https://github.com" className="text-2xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><FaGithub /></a>
              <a href="https://linkedin.com" className="text-2xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><FaLinkedin /></a>
              <a href="https://twitter.com" className="text-2xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><FaTwitter /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-tech-gray border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-tech-gray border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-tech-gray border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
              placeholder="Hello Satish..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-neon-cyan text-black font-bold py-4 rounded-lg hover:bg-neon-blue transition-colors flex items-center justify-center gap-2"
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
