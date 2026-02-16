'use client';

import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const education = [
    {
      year: '2022 - Present',
      title: 'B.Tech Computer Science & Engineering',
      institution: 'Lovely Professional University',
      description: 'Specializing in Full Stack Development. Active member of coding clubs and hackathons.',
      icon: FaUniversity,
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary Education',
      institution: 'CBSE Board',
      description: 'Focus on Physics, Chemistry, and Mathematics.',
      icon: FaGraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">01.</span> About Me
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-gray-400 leading-relaxed"
        >
          <p>
            Hello! I'm <span className="text-white font-bold">Satish Sahu</span>, a passionate software engineer currently pursuing my B.Tech in CSE from <span className="text-neon-cyan">Lovely Professional University</span>.
          </p>
          <p>
            My journey in tech is driven by curiosity and a relentless desire to build things that matter. 
            I specialize in the <span className="text-white">MERN stack</span> (MongoDB, Express, React, Node.js) and have a strong foundation in C++ and Python.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, participating in coding contests, or brainstorming the next big idea.
          </p>
        </motion.div>

        <div className="space-y-8 relative pl-8 border-l-2 border-neon-cyan/20">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] bg-black border-2 border-neon-cyan p-2 rounded-full">
                <item.icon className="text-neon-cyan text-sm" />
              </div>
              
              <div className="bg-tech-gray p-6 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors">
                <span className="text-sm text-neon-cyan font-mono mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-gray-400 mb-3 text-sm">{item.institution}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
