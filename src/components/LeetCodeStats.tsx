'use client';

import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { useEffect, useState } from 'react';

// Mock data to simulate API response if fetch fails or for initial state
const MOCK_DATA = {
  totalSolved: 0,
  easySolved: 0,
  mediumSolved: 0,
  hardSolved: 0,
  recentSubmissions: [] as { title: string; difficulty: string; timestamp: string }[]
};

export default function LeetCodeStats() {
  const [stats, setStats] = useState(MOCK_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/sahusateesh8737');
        const data = await response.json();

        if (data.errors) throw new Error('Failed to fetch');

        // Process recent submissions: Filter for Accepted and take top 5
        const recentSubs = (data.recentSubmissions || [])
            .filter((sub: any) => sub.statusDisplay === 'Accepted')
            .slice(0, 5)
            .map((sub: any) => ({
                title: sub.title,
                difficulty: "Solved", // API doesn't provide difficulty in recentSubmissions list, but imply solved
                timestamp: new Date(parseInt(sub.timestamp) * 1000).toLocaleDateString()
            }));

        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          recentSubmissions: recentSubs
        });

      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
     return (
        <div className="bg-tech-gray p-8 rounded-xl border border-white/5 flex items-center justify-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-cyan"></div>
        </div>
     )
  }

  return (
    <div className="bg-tech-gray p-8 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <SiLeetcode className="text-9xl text-[#FFA116]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-12">
        {/* Left: Overall Stats */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <SiLeetcode className="text-4xl text-[#FFA116]" />
            <h3 className="text-3xl font-bold text-white">LeetCode</h3>
          </div>

          <div className="mb-8">
            <div className="text-6xl font-mono font-bold text-white mb-2">
              {stats.totalSolved}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Total Problems Solved
            </div>
          </div>

          <div className="space-y-4">
            {/* Easy */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Easy</span>
                <span className="text-[#00B8A3] font-mono">{stats.easySolved}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(stats.easySolved / stats.totalSolved) * 100}%` }}
                  className="h-full bg-[#00B8A3]"
                />
              </div>
            </div>

            {/* Medium */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Medium</span>
                <span className="text-[#FFC01E] font-mono">{stats.mediumSolved}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(stats.mediumSolved / stats.totalSolved) * 100}%` }}
                  className="h-full bg-[#FFC01E]"
                />
              </div>
            </div>

            {/* Hard */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Hard</span>
                <span className="text-[#FF375F] font-mono">{stats.hardSolved}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(stats.hardSolved / stats.totalSolved) * 100}%` }}
                  className="h-full bg-[#FF375F]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Recent Activity / Profile Link */}
        <div className="flex-1 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0 flex flex-col justify-center">
          <h4 className="text-xl font-bold text-white mb-4">View Full Profile</h4>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Check out my detailed submissions, badges, and contest ratings directly on LeetCode.
          </p>
          
          <a 
            href="https://leetcode.com/u/sahusateesh8737/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FFA116] hover:text-white transition-colors text-lg font-mono border border-[#FFA116] hover:border-white px-6 py-3 rounded-lg w-fit"
          >
            <SiLeetcode /> sahusateesh8737
          </a>
        </div>
      </div>
    </div>
  );
}
