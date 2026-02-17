
import React, { useState } from 'react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d3a28]/90 backdrop-blur-md shadow-lg py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="text-white text-2xl font-bold font-display tracking-tight hover:text-[#9ccc65] transition-colors">
          Forum 22
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((link) => (
            <div key={link.label} className="relative group">
              <a 
                href={`#${link.href}`}
                className="text-white/90 hover:text-[#9ccc65] text-sm uppercase font-semibold tracking-wider transition-colors"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1d3a28] border border-[#7cb342]/20 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.dropdown.map(item => (
                    <a 
                      key={item.label}
                      href={`#${item.href}`}
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-[#7cb342]/20 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1d3a28] absolute top-full left-0 right-0 py-6 px-6 border-t border-white/10">
          <div className="flex flex-col space-y-4">
            {NAVIGATION.map((link) => (
              <a 
                key={link.label} 
                href={`#${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
