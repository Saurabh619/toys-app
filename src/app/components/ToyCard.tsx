'use client';

import { FC, useMemo } from 'react';
import Link from 'next/link';

interface ToyCardProps {
  id: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  bgClass: string;
}

const ToyCard: FC<ToyCardProps> = ({ id = '', title, description, path, tags, bgClass }) => {
  // Memoize the version number calculation to prevent unnecessary recalculations
  const version = useMemo(() => {
    if (!id) return '0.0.0';
    
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const major = (hash % 10) + 1;
    const minor = ((hash * 7) % 100);
    const patch = ((hash * 13) % 100);
    return `${major}.${minor}.${patch}`;
  }, [id]);

  return (
    <Link 
      href={path}
      className={`group relative overflow-hidden ${bgClass} border border-emerald-500/30 rounded-md hover:scale-[1.02] transition-all duration-300 p-6 h-full flex flex-col`}
    >
      <div className="absolute -right-2 -top-2 opacity-40 font-mono text-[0.65rem] rotate-12 bg-black/80 text-emerald-400 p-1 rounded">
        {version}
      </div>
      
      <h3 className="text-xl font-mono mb-2 text-emerald-400 font-bold tracking-tight group-hover:text-emerald-300 transition-colors">
        &gt;_ {title}
      </h3>
      
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-black/30 border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded-sm font-mono">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="absolute bottom-2 right-2 opacity-30 group-hover:opacity-100 transition-opacity">
        <span className="text-emerald-500 font-mono text-xs">&gt; RUN</span>
      </div>
    </Link>
  );
};

export default ToyCard; 