'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiDocker, SiGit, SiMongodb, SiPostman, SiVercel 
} from 'react-icons/si';

const allSkills = [
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
];

const SkillIcon = ({ item, index }: { item: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.05,
      type: "spring",
      stiffness: 100 
    }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300 group relative"
  >
    {/* Subtle Glow on Hover */}
    <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/5 blur-xl transition-all duration-300 -z-10" />
    
    <item.icon className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }} />
    <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors tracking-wide">
      {item.name}
    </span>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan text-glow">02.</span> Technical Arsenal
        </h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-neon-cyan to-neon-blue mx-auto rounded-full shadow-[0_0_15px_rgba(0,243,255,0.4)]" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
        {allSkills.map((skill, index) => (
          <SkillIcon key={skill.name} item={skill} index={index} />
        ))}
      </div>

      {/* Floating labels background effect (optional/aesthetic) */}
      <div className="mt-20 opacity-20 pointer-events-none select-none overflow-hidden h-12 flex items-center gap-12 whitespace-nowrap animate-marquee">
        {allSkills.concat(allSkills).map((s, i) => (
          <span key={i} className="text-4xl font-mono font-bold text-white/10 uppercase tracking-[1em]">
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}
