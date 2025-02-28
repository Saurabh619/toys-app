import Link from 'next/link';
import TerminalHeader from './components/TerminalHeader';
import ToyCard from './components/ToyCard';
import StatusBar from './components/StatusBar';
import { toyApps } from './data/toyApps';
import BackgroundWrapper from './components/BackgroundWrapper';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Matrix-style background */}
      <BackgroundWrapper />
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">
        {/* Terminal-style animated header */}
        <TerminalHeader 
          title="Web Experiments Lab" 
          subtitle="Explore cutting-edge toy applications featuring the latest web and ML APIs" 
        />
        
        {/* ASCII art logo */}
        <pre className="text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto my-8 opacity-80 hidden md:block">
{`
 __          __  _       _____                      _                      _       _          _     
 \\ \\        / / | |     |  ___|                    (_)                    | |     | |        | |    
  \\ \\  /\\  / /__| |__   | |____  ___ __   ___ _ __ _ _ __ ___   ___ _ __ | |_ ___| |     __ _| |__ 
   \\ \\/  \\/ / _ \\ '_ \\  |  __\\ \\/ / '_ \\ / _ \\ '__| | '_ \\ _ \\ / _ \\ '_ \\| __/ __| |    / _\` | '_ \\ 
    \\  /\\  /  __/ |_) | | |___>  <| |_) |  __/ |  | | | | | | |  __/ | | | |_\\__ \\ |___| (_| | |_) |
     \\/  \\/ \\___|_.__/  \\____/_/\\_\\ .__/ \\___|_|  |_|_| |_| |_|\\___|_| |_|\\__|___/______\\__,_|_.__/ 
                                   | |                                                             
                                   |_|                                                             
`}
        </pre>
        
        {/* Search bar with hacker aesthetic */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="search experiments_" 
              className="w-full bg-black/50 border border-emerald-500/30 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-mono"
            />
            <span className="absolute right-3 top-3 text-emerald-400 animate-pulse">▋</span>
          </div>
          <div className="absolute -bottom-6 left-0 text-xs text-gray-500 font-mono">
            <span className="text-emerald-500">&gt;</span> access_level: admin | encryption: enabled | connected_nodes: 7
          </div>
        </div>
        
        {/* Status bar */}
        <StatusBar />
        
        {/* App grid with cool hacker aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toyApps.map((app) => (
            <ToyCard
              key={app.id}
              id={app.id}
              title={app.title}
              description={app.description}
              path={app.path}
              tags={app.tags}
              bgClass={app.bgClass}
            />
          ))}
        </div>
        
        {/* Footer with hacker aesthetic */}
        <footer className="mt-20 border-t border-gray-800 pt-8 text-center">
          <div className="text-xs font-mono text-gray-400 mb-4">
            <span className="text-emerald-500">[</span> SECURE CONNECTION ESTABLISHED <span className="text-emerald-500">]</span>
          </div>
          
          <p className="text-gray-400 mb-6 text-sm">
            Explore cutting-edge web technologies and machine learning APIs in our experimental playground.
            <br />These toy applications demonstrate the latest capabilities of modern browsers.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Documentation
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              API Status
            </Link>
          </div>
          
          <div className="text-xs text-gray-600 font-mono pb-4">
            <span className="glitch-text">{'/* ACCESS GRANTED • SYSTEM VERSION 1.0.3 • ' + new Date().getFullYear() + ' */'}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
