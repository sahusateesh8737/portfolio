'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const coreSkills = [
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
];

const frameworks = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
];

const toolsAndBackend = [
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
];

const OrbitRing = ({ radius, speed, items, reverse = false }: { radius: number, speed: number, items: any[], reverse?: boolean }) => {
  const directionClass = reverse ? '[animation-direction:reverse]' : '';
  const counterDirectionClass = reverse ? '' : '[animation-direction:reverse]';

  return (
    <div 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-neon-cyan/30 rounded-full animate-spin ${directionClass} group-hover/galaxy:[animation-play-state:paused]`}
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, animationDuration: `${speed}s` }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div 
            key={item.name}
            className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12"
            style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
          >
            {/* Counter-rotation to keep icons upright */}
            <div style={{ transform: `rotate(-${angle}deg)` }} className="w-full h-full">
              <div 
                className={`w-full h-full animate-spin ${counterDirectionClass} group-hover/galaxy:[animation-play-state:paused]`}
                style={{ animationDuration: `${speed}s` }}
              >
                <div 
                   className="relative flex flex-col items-center justify-center w-full h-full bg-tech-gray rounded-full border border-white/10 hover:border-neon-cyan transition-all hover:scale-125 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] cursor-pointer group/item z-20"
                >
                   <item.icon className="text-2xl" style={{ color: item.color }} />
                   
                   {/* Tooltip */}
                   <div 
                     className="absolute opacity-0 group-hover/item:opacity-100 top-14 text-xs font-mono whitespace-nowrap bg-black/90 backdrop-blur px-3 py-1.5 rounded border border-neon-cyan/40 text-white pointer-events-none transition-opacity shadow-lg z-50"
                   >
                     {item.name}
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
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

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center group/galaxy"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.8] md:scale-100">
          
          {/* Central Core Glowing Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-tech-gray border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)] z-10">
            <span className="font-mono font-bold text-white tracking-widest text-sm">SKILLS</span>
          </div>

          <OrbitRing radius={110} speed={25} items={coreSkills} />
          <OrbitRing radius={190} speed={35} items={frameworks} reverse />
          <OrbitRing radius={270} speed={45} items={toolsAndBackend} />
          
        </div>
      </motion.div>
    </section>
  );
}
