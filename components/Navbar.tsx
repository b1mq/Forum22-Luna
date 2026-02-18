
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Fix: Automatically close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is Tailwind's 'md' breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#1d3a28]/95 backdrop-blur-xl shadow-lg h-[72px] flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        <a href="#/" onClick={closeMenu} className="flex items-center gap-3 group relative z-[110]">
          <div className="w-10 h-10 bg-[#7cb342] rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            22
          </div>
          <span className="text-white text-xl md:text-2xl font-bold font-display tracking-tight group-hover:text-[#9ccc65] transition-colors">
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

        {/* Mobile toggle button - Raised Z-index */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-[110] text-white p-2 outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4/5'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-2.5' : 'w-2/3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#1d3a28] z-[100] transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-10 overflow-y-auto">
          <div className="flex flex-col space-y-8">
            {NAVIGATION.map((link) => (
              <div key={link.label} className="flex flex-col space-y-4">
                <a 
                  href={`#${link.href}`}
                  onClick={closeMenu}
                  className="text-white text-3xl font-display font-bold hover:text-[#7cb342] transition-colors"
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#7cb342]/30">
                    {link.dropdown.map(item => (
                      <a 
                        key={item.label}
                        href={`#${item.href}`}
                        onClick={closeMenu}
                        className="text-white/50 hover:text-white transition-colors text-lg"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-auto mb-12 pt-10">
            <a 
              href="#/weekly" 
              onClick={closeMenu}
              className="block w-full text-center bg-[#7cb342] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl"
            >
              Tickets Buchen
            </a>
            <div className="mt-8 flex justify-center space-x-6 grayscale opacity-50">
               <span className="text-white text-xs">Instagram</span>
               <span className="text-white text-xs">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
