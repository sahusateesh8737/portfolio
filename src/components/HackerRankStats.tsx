'use client';

import { motion } from 'framer-motion';
import { FaHackerrank, FaStar, FaTrophy, FaMedal } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const MOCK_HACKERRANK = {
  username: "Sahusateesh8737",
  badges: [
    { name: "Problem Solving", stars: 5, icon: FaStar },
    { name: "C++", stars: 5, icon: FaStar },
    { name: "Python", stars: 4, icon: FaStar },
  ]
};

export default function HackerRankStats() {
  const [stats, setStats] = useState(MOCK_HACKERRANK);
  const [loading, setLoading] = useState(false); // Default to false since we use mock/fallback mostly

  // Note: HackerRank has no official public API. 
  // We can try to fetch from unofficial sources or just display the known highlights.
  // For now, we will display the high-value badges which are usually static achievements.

  return (
    <div className="bg-[#2EC866]/5 p-8 rounded-xl border border-[#2EC866]/20 hover:border-[#2EC866]/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <FaHackerrank className="text-9xl text-[#2EC866]" />
        </div>

        <div className="relative z-10 flex flex-col gap-8 flex-1">
            {/* Header */}
            <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-full text-[#2EC866]">
                    <FaHackerrank className="text-4xl" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">HackerRank</h3>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <span className="font-mono">@{stats.username}</span>
                    </div>
                </div>
            </div>

            {/* Badges Grid */}
            <div className="space-y-4 flex-1">
                <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                    <FaTrophy className="text-yellow-400" /> Top Badges
                </h4>
                
                <div className="grid gap-3">
                    {stats.badges.map((badge, idx) => (
                        <div 
                            key={idx}
                            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
                        >
                            <span className="font-bold text-white">{badge.name}</span>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={`text-xs ${i < badge.stars ? 'text-yellow-400' : 'text-gray-600'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <a 
                href={`https://www.hackerrank.com/profile/${stats.username}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-[#2EC866] hover:bg-[#25a554] text-black font-bold rounded-lg transition-colors mt-auto"
            >
                View HackerRank Profile
            </a>
        </div>
    </div>
  );
}
