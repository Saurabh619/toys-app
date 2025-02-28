'use client';

import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [uptime, setUptime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startTime = Date.now();
    
    const updateUptime = () => {
      const diff = Math.floor((Date.now() - startTime) / 1000);
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setUptime({ hours, minutes, seconds });
    };

    // Update immediately
    updateUptime();
    
    // Then update every second
    const interval = setInterval(updateUptime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between mb-8 px-2 py-1 bg-black/50 border border-emerald-500/20 rounded text-xs font-mono">
      <div className="flex items-center gap-4">
        <span className="flex items-center">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
          SYSTEM ONLINE
        </span>
        <span className="text-gray-400">
          UPTIME: {String(uptime.hours).padStart(3, '0')}:{String(uptime.minutes).padStart(2, '0')}:{String(uptime.seconds).padStart(2, '0')}
        </span>
      </div>
      <div className="text-emerald-400">
        API STATUS: OPERATIONAL
      </div>
    </div>
  );
} 