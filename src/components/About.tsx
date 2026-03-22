'use client';

import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const education = [
    {
      year: '2023 - Present',
      title: 'B.Tech Computer Science & Engineering',
      institution: 'Lovely Professional University',
      description: 'Specializing in Full Stack Development.',
      icon: FaUniversity,
    },
    {
      year: '2020 - 2021',
      title: 'Higher Secondary Education',
      institution: 'UP Board',
      description: 'Focus on Physics, Chemistry, and Mathematics.',
      icon: FaGraduationCap,
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Dynamic Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a5a_2px,transparent_2px)] bg-[length:2rem_2rem] opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none" />
      
      {/* Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-neon-cyan">01.</span> About Me
          </h2>
          <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 hover:border-neon-cyan/30 transition-colors shadow-2xl relative group"
          >
            {/* Top-left decorative corner */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <p>
              Hello! I'm <span className="text-white font-bold text-glow">Satish Sahu</span>, a passionate software engineer currently pursuing my B.Tech in CSE from <span className="text-neon-cyan">Lovely Professional University</span>.
            </p>
            <p>
              My journey in tech is driven by curiosity and a relentless desire to build things that matter. 
              I specialize in the <span className="text-white font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js) and have a strong foundation in C++ and Python.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, participating in coding contests, or brainstorming the next big idea.
            </p>
            
            {/* Bottom-right decorative corner */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <div className="space-y-8 relative pl-8 border-l border-white/20">
            {/* Glowing line overlay */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-px bg-linear-to-b from-neon-cyan via-neon-blue to-transparent transform -translate-x-1/2" 
            />

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 60, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute -left-[45px] top-1 bg-[#0a0a0a] border border-neon-cyan p-2.5 rounded-full group-hover:bg-neon-cyan/20 transition-colors duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                  <item.icon className="text-neon-cyan text-sm" />
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/40 hover:bg-white/10 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                  <span className="text-sm text-neon-cyan font-mono mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-gray-300 mb-3 text-sm font-medium">{item.institution}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
