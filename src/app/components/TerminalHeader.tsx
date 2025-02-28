'use client';

import { FC, useEffect, useState } from 'react';

interface TerminalHeaderProps {
  title: string;
  subtitle: string;
}

const TerminalHeader: FC<TerminalHeaderProps> = ({ title, subtitle }) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [titleComplete, setTitleComplete] = useState(false);

  useEffect(() => {
    // Type out title
    if (displayedTitle.length < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(title.substring(0, displayedTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!titleComplete) {
      setTitleComplete(true);
    }
  }, [displayedTitle, title, titleComplete]);

  useEffect(() => {
    // Type out subtitle after title is complete
    if (titleComplete && displayedSubtitle.length < subtitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedSubtitle(subtitle.substring(0, displayedSubtitle.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayedSubtitle, subtitle, titleComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="bg-gray-900 rounded-t-md border-b-0 border-gray-700 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400 font-mono">
          terminal@user:~/toys
        </div>
      </div>
      
      <div className="bg-black/90 border border-gray-700 p-6 font-mono rounded-b-md">
        <div className="mb-2 flex items-center">
          <span className="text-emerald-500 mr-2">$</span>
          <span className="text-white">sudo ./access_experiments.sh</span>
        </div>
        
        <div className="mb-6 text-gray-400 text-sm">
          [sudo] password for user: ********<br />
          Authenticating...<br />
          Access granted. Loading experimental lab...
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
          {displayedTitle}
          {!titleComplete && showCursor && <span className="text-emerald-400">▋</span>}
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl">
          {displayedSubtitle}
          {titleComplete && showCursor && <span className="text-emerald-400">▋</span>}
        </p>
      </div>
    </div>
  );
};

export default TerminalHeader; 