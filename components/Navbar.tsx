
import React, { useState } from 'react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d3a28]/95 backdrop-blur-xl shadow-lg py-4 transition-none">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#7cb342] rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            22
          </div>
          <span className="text-white text-2xl font-bold font-display tracking-tight group-hover:text-[#9ccc65] transition-colors">
            Forum 22
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAVIGATION.map((link) => (
            <div key={link.label} className="relative group">
              <a 
                href={`#${link.href}`}
                className="text-white/90 hover:text-[#9ccc65] text-xs uppercase font-bold tracking-[0.2em] transition-all flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                )}
              </a>
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 bg-white rotate-45"></div>
                  {link.dropdown.map(item => (
                    <a 
                      key={item.label}
                      href={`#${item.href}`}
                      className="block px-6 py-3 text-xs font-bold text-[#1d3a28]/70 hover:bg-[#f8f9f5] hover:text-[#7cb342] transition-colors uppercase tracking-wider"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a href="#/weekly" className="bg-[#7cb342] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1d3a28] transition-all shadow-lg hover:shadow-xl">
            Tickets
          </a>
        </div>

        {/* Mobile toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1d3a28] border-t border-white/10 transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen py-10 opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}>
        <div className="flex flex-col space-y-6 px-10">
          {NAVIGATION.map((link) => (
            <div key={link.label} className="flex flex-col space-y-3">
              <a 
                key={link.label} 
                href={`#${link.href}`}
                onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-display font-bold"
              >
                {link.label}
              </a>
              {link.dropdown && (
                <div className="flex flex-col space-y-2 pl-4 border-l border-[#7cb342]/30">
                  {link.dropdown.map(item => (
                    <a 
                      key={item.label}
                      href={`#${item.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/50 hover:text-white transition-colors py-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
