'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative mb-12 max-w-2xl mx-auto">
      <div className="relative">
        <input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="search experiments_"
          className="w-full bg-black/50 border border-emerald-500/30 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-mono"
        />
        <span 
          className={`absolute right-3 top-3 text-emerald-400 transition-opacity duration-100 ${
            cursorVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ▋
        </span>
      </div>
      <div className="absolute -bottom-6 left-0 text-xs text-gray-500 font-mono">
        <span className="text-emerald-500">&gt;</span> access_level: admin | encryption: enabled | connected_nodes: {7 + query.length}
      </div>
    </div>
  );
} 