'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import LeetCodeStats from './LeetCodeStats';
import GitHubStats from './GitHubStats';
import HackerRankStats from './HackerRankStats';

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
          <span className="text-neon-cyan">06.</span> Coding Profiles
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
      </motion.div>

    </section>
  );
}
