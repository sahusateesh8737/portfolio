'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import LeetCodeStats from './LeetCodeStats';
import GitHubStats from './GitHubStats';
import HackerRankStats from './HackerRankStats';
import GeeksforGeeksStats from './GeeksforGeeksStats';

const profiles = [
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    color: '#FFA116',
    stats: '500+ Problems Solved',
    link: 'https://leetcode.com',
    description: 'Consistent problem solver with a focus on DSA and optimization.'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    color: '#FFFFFF',
    stats: '1000+ Commits',
    link: 'https://github.com',
    description: 'Active open source contributor with multiple full-stack projects.'
  },
  {
    name: 'HackerRank',
    icon: FaHackerrank,
    color: '#2EC866',
    stats: '5 Star Gold Badge',
    link: 'https://hackerrank.com',
    description: 'Expertise in C++, Python, and Problem Solving mastery.'
  },
  {
    name: 'CodeChef',
    icon: SiCodechef,
    color: '#5B4638',
    stats: '3 Star Coder',
    link: 'https://codechef.com',
    description: 'Regular participant in Cook-offs and Long Challenges.'
  },
  {
    name: 'GeeksforGeeks',
    icon: SiGeeksforgeeks,
    color: '#2F8D46',
    stats: 'Institute Rank #10',
    link: 'https://auth.geeksforgeeks.org',
    description: 'Top contributor to technical articles and coding solutions.'
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
          <span className="text-neon-cyan">03.5</span> Coding Profiles
        </h2>
        <div className="h-1 w-20 bg-neon-cyan mx-auto rounded-full" />
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col gap-8"
      >
        <LeetCodeStats />
        <GitHubStats />
        <HackerRankStats />
        <GeeksforGeeksStats />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.filter(p => p.name !== 'LeetCode' && p.name !== 'GitHub' && p.name !== 'HackerRank').map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-tech-gray p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: `radial-gradient(circle at center, ${profile.color}, transparent 70%)` }}
            />

            <profile.icon 
              className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              style={{ color: profile.color }} 
            />
            
            <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
            <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-sm font-mono font-bold" style={{ color: profile.color }}>
                {profile.stats}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed z-10">
              {profile.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
