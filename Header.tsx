import React from 'react';
import { Sparkles, Laptop, Activity, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center -space-x-1">
              <Sparkles className="w-6 h-6 text-indigo-600 transform -rotate-12" />
              <Laptop className="w-6 h-6 text-indigo-500" />
              <Activity className="w-6 h-6 text-indigo-400 transform rotate-12" />
            </div>
            <span className="text-xl font-bold text-gray-900">SiteForge</span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}