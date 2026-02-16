'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaDatabase, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'SQL', icon: FaDatabase, color: '#FFFFFF' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">02.</span> Technical Arsenal
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: skill.color 
            }}
            className="group flex flex-col items-center justify-center p-6 bg-tech-gray rounded-xl border border-white/5 transition-all duration-300 cursor-default"
          >
            <skill.icon 
              className="text-5xl mb-4 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
              style={{ color: skill.color }} 
            />
            <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
