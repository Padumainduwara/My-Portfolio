import { Github, Star, GitFork, ArrowUpRight, Code2 } from 'lucide-react';

// GitHub Username
const GITHUB_USERNAME = "Padumainduwara";

// Interface for Repo Data
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

// Language Color Mapping
const getLangColor = (lang: string) => {
  switch (lang) {
    case 'TypeScript': return 'bg-blue-500 text-blue-500';
    case 'JavaScript': return 'bg-yellow-400 text-yellow-400';
    case 'Python': return 'bg-green-500 text-green-500';
    case 'CSS': return 'bg-pink-500 text-pink-500';
    case 'HTML': return 'bg-orange-500 text-orange-500';
    case 'Java': return 'bg-red-500 text-red-500';
    case 'C#': return 'bg-purple-500 text-purple-500';
    default: return 'bg-gray-400 text-gray-400';
  }
};

// Bento Grid Classes
const getGridClass = (index: number) => {
  switch (index) {
    case 0: return "md:col-span-3 md:row-span-2"; // Large Featured
    case 1: return "md:col-span-3 md:row-span-1"; // Top Right Wide
    case 2: return "md:col-span-1 md:row-span-1"; // Bottom Small 1
    case 3: return "md:col-span-1 md:row-span-1"; // Bottom Small 2
    case 4: return "md:col-span-1 md:row-span-1"; // Bottom Small 3
    default: return "md:col-span-3 md:row-span-1";
  }
};

// Server Component (Async Function)
export default async function GithubRepos() {
  let repos: Repo[] = [];
  
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=5`, {
      next: { revalidate: 3600 } // Revalidate every 1 hour
    });
    if (!res.ok) throw new Error('Failed to fetch data');
    repos = await res.json();
  } catch (error) {
    console.error("Error fetching repos:", error);
    // You could fallback to empty array or some mock data here
  }

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-6">
            <Github size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Open Source</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Latest on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">GitHub</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contributions to the developer community. Automatically updated from my repositories.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(160px,auto)]">
            {repos.map((repo, index) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between ${getGridClass(index)}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${getLangColor(repo.language).split(' ')[0]}`} />

                {/* Top Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                        <Code2 size={18} />
                      </div>
                      <h3 className="font-bold text-white text-lg tracking-tight group-hover:underline decoration-white/30 underline-offset-4 line-clamp-1">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>

                  {index < 2 && (
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors mt-2">
                      {repo.description || "Check the code on GitHub for more details."}
                    </p>
                  )}
                </div>

                {/* Bottom Meta Data */}
                <div className="relative z-10 flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${getLangColor(repo.language).split(' ')[0]}`} />
                    <span className="text-xs font-medium text-gray-300">{repo.language || 'Code'}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 text-xs font-mono">
                    <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold hover:bg-white/10 hover:text-white transition-all duration-300 hover:border-purple-500/30"
          >
            <Github size={16} />
            <span>Explore All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}