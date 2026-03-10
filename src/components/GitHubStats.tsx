'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const MOCK_GITHUB = {
  login: "sahusateesh8737",
  avatar_url: "https://github.com/sahusateesh8737.png",
  public_repos: 0,
  followers: 0,
  following: 0,
  topRepos: [] as any[]
};

export default function GitHubStats() {
  const [stats, setStats] = useState(MOCK_GITHUB);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // Fetch User Data
        const userRes = await fetch('https://api.github.com/users/sahusateesh8737');
        
        if (userRes.status === 403) {
            throw new Error("Rate Limit Exceeded");
        }

        const userData = await userRes.json();
        
        // Fetch Repos
        const reposRes = await fetch('https://api.github.com/users/sahusateesh8737/repos?sort=updated&per_page=5');
        const reposData = await reposRes.json();

        setStats({
          login: userData.login,
          avatar_url: userData.avatar_url,
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          topRepos: Array.isArray(reposData) ? reposData : []
        });
        setError(false);
      } catch (e) {
        console.error("GitHub fetch failed", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  if (loading) {
      return (
        <div className="bg-[#0d1117] p-8 rounded-xl border border-white/10 flex items-center justify-center min-h-[300px]">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      );
  }

  return (
    <div className="bg-[#0d1117] p-8 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <FaGithub className="text-9xl text-white" />
        </div>

        <div className="relative z-10 flex flex-col gap-8 flex-1">
            {/* Header */}
            <div className="flex items-center gap-6">
                <img 
                    src={stats.avatar_url} 
                    alt={stats.login} 
                    className="w-20 h-20 rounded-full border-2 border-white/20"
                />
                <div>
                    <div className="flex items-center gap-3">
                        <FaGithub className="text-2xl text-white" />
                        <h3 className="text-2xl font-bold text-white mb-1">{stats.login}</h3>
                    </div>
                    {error ? (
                        <span className="text-xs text-yellow-500 font-mono">Live stats unavailable (Rate Limit)</span>
                    ) : (
                        <div className="flex gap-4 text-sm text-gray-400">
                            <span><strong className="text-white">{stats.followers}</strong> followers</span>
                            <span><strong className="text-white">{stats.following}</strong> following</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Repos Grid */}
            <div className="space-y-4 flex-1">
                <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                    {error ? "Featured Repositories" : "Top Repositories"}
                </h4>
                
                {stats.topRepos.length > 0 ? (
                    <div className="grid gap-4">
                        {stats.topRepos.map((repo: any) => (
                            <a 
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/repo"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold text-neon-cyan group-hover/repo:underline">{repo.name}</span>
                                    <span className="text-xs text-gray-400 truncate max-w-[200px]">{repo.description || "No description"}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <FaCircle className="text-[8px] text-yellow-400" /> {repo.language || 'Code'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 bg-white/5 rounded-lg">
                        <FaCodeBranch className="text-4xl text-gray-600" />
                        <p className="text-gray-400 text-sm max-w-[250px]">
                            {error 
                                ? "GitHub API rate limit exceeded. Click below to view repositories directly." 
                                : "No public repositories found."}
                        </p>
                    </div>
                )}
            </div>

            <a 
                href={`https://github.com/${stats.login}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-white/5 hover:bg-white/10 rounded-lg text-white font-mono text-sm transition-colors border border-white/10 mt-auto"
            >
                View GitHub Profile
            </a>
        </div>
    </div>
  );
}
