'use client';

import { motion } from 'framer-motion';
import { SiGeeksforgeeks } from 'react-icons/si';
import { FaTrophy, FaCode } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const MOCK_GFG = {
  username: "sahusate1wtr",
  totalProblemsSolved: 0,
  instituteRank: "N/A",
  globalRank: "N/A",
  codingScore: 0
};

export default function GeeksforGeeksStats() {
  const [stats, setStats] = useState(MOCK_GFG);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGFG = async () => {
      try {
        // Unofficial API for GFG Stats
        const response = await fetch('https://geeks-for-geeks-stats-api.vercel.app/?userName=sahusate1wtr');
        const data = await response.json();

        if (data.error) throw new Error('Failed to fetch');

        setStats({
          username: "sahusate1wtr",
          totalProblemsSolved: data.totalProblemsSolved || 0,
          instituteRank: data.instituteRank || "N/A",
          globalRank: "N/A", // API might not provide this directly or named differently
          codingScore: data.codingScore || 0
        });
        setError(false);
      } catch (e) {
        console.error("GFG fetch failed", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGFG();
  }, []);

  if (loading) {
      return (
        <div className="bg-[#2F8D46]/5 p-8 rounded-xl border border-[#2F8D46]/20 flex items-center justify-center min-h-[300px]">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2F8D46]"></div>
        </div>
      );
  }

  return (
    <div className="bg-[#2F8D46]/5 p-8 rounded-xl border border-[#2F8D46]/20 hover:border-[#2F8D46]/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <SiGeeksforgeeks className="text-9xl text-[#2F8D46]" />
        </div>

        <div className="relative z-10 flex flex-col gap-8 flex-1">
            {/* Header */}
            <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-full text-[#2F8D46]">
                    <SiGeeksforgeeks className="text-4xl" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">GeeksforGeeks</h3>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <span className="font-mono">@{stats.username}</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid - Only show if data is valid and no error */}
            {!error && stats.totalProblemsSolved > 0 ? (
                <div className="space-y-6 flex-1">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                            <div className="text-3xl font-bold text-[#2F8D46] mb-1">{stats.totalProblemsSolved}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                                 <FaCode /> Problems Solved
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                            <div className="text-3xl font-bold text-[#2F8D46] mb-1">{stats.codingScore}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                                 <FaTrophy /> Coding Score
                            </div>
                        </div>
                     </div>

                     {stats.instituteRank !== "N/A" && (
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                            <span className="text-gray-300 text-sm">Institute Rank: </span>
                            <span className="text-white font-bold ml-2">#{stats.instituteRank}</span>
                        </div>
                     )}
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 bg-white/5 rounded-lg p-6 border border-white/5">
                    <SiGeeksforgeeks className="text-4xl text-gray-600" />
                    <p className="text-gray-400 text-sm">
                        {error ? "Live stats unavailable." : "No public stats found."}
                    </p>
                    <p className="text-xs text-gray-500">Click below to view full profile.</p>
                </div>
            )}
            
            <a 
                href={`https://auth.geeksforgeeks.org/user/${stats.username}/`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-[#2F8D46] hover:bg-[#259140] text-white font-bold rounded-lg transition-colors mt-auto"
            >
                View GFG Profile
            </a>
        </div>
    </div>
  );
}
