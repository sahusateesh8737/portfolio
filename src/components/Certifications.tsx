'use client';

import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const certifications = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    credentialId: 'f581447a167a',
    link: 'https://www.hackerrank.com/certificates/f581447a167a',
    icon: FaAward,
    color: 'from-[#FF9900] to-[#FF5252]', // AWS Orange to red
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    credentialId: 'fcc50b8bf8b-9a20-407c-adf9-befe9811e08d',
    link: 'https://www.freecodecamp.org/certification/fcc50b8bf8b-9a20-407c-adf9-befe9811e08d/responsive-web-design', // Placeholder
    icon: FaCertificate,
    color: 'from-[#006400] to-[#00f3ff]', // FCC Green to neon cyan
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'Nov 2024',
    credentialId: '88b561944130',
    link: 'https://www.hackerrank.com/certificates/88b561944130', // Placeholder
    icon: FaAward,
    color: 'from-[#00EA64] to-[#000000]', // HackerRank Green
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">04.</span> Certifications
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Top gradient border effect */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${cert.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
                <cert.icon className="text-2xl text-neon-cyan" />
              </div>
              <span className="text-xs font-mono text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">
                {cert.date}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-neon-cyan transition-colors">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">
              Issued by <span className="text-gray-300">{cert.issuer}</span>
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>Credential ID</span>
                <span className="text-gray-400 truncate max-w-[120px]" title={cert.credentialId}>
                  {cert.credentialId}
                </span>
              </div>
              
              <div className="h-px w-full bg-white/5 my-1" />
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-black/40 hover:bg-neon-cyan/10 text-gray-300 hover:text-neon-cyan rounded-lg border border-white/5 hover:border-neon-cyan/30 transition-all text-sm font-semibold"
                onClick={(e) => cert.link === '#' && e.preventDefault()}
              >
                <span>View Certificate</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
