import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container-main py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            🎬 OneAct
          </div>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="hidden md:flex gap-12">
          <a href="#features" className="relative text-gray-700 font-semibold transition duration-200 group">
            <span>Features</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#security" className="relative text-gray-700 font-semibold transition duration-200 group">
            <span>Security</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#faq" className="relative text-gray-700 font-semibold transition duration-200 group">
            <span>FAQ</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};
