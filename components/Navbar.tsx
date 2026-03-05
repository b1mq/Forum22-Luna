
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';
import { Instagram, Facebook, Home as HomeIcon } from 'lucide-react';

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
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center w-full">
        {/* Home area (desktop + mobile) */}
        <div className="flex items-center gap-3 relative z-[110]">
          <a
            href="#/"
            onClick={closeMenu}
            className="flex items-center justify-center text-white hover:text-[#9ccc65] p-2 md:p-0 md:-ml-4 transition-colors"
            aria-label="Startseite"
          >
            <HomeIcon size={34} />
          </a>
          <a
            href="#/about/history"
            onClick={closeMenu}
            className="flex items-center justify-center text-white p-2 md:p-0 transition-colors"
            aria-label="History"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg border-2 border-white flex items-center justify-center transition-colors duration-200 hover:bg-[#ef4444] hover:border-[#ef4444]">
              <span className="font-display font-bold text-white text-xl leading-none">
                22
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav (without Startseite) */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-10">
          {NAVIGATION.filter(link => link.label !== 'Startseite').map((link) => (
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

        {/* Action Button & Socials (desktop) */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center space-x-4 border-r border-white/10 pr-6">
            <a
              href="https://www.instagram.com/kino.forum22?igsh=MXZ4ejZndW1rOTZjdw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#9ccc65] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/p/forum22-kino-caf%C3%A9-kultur-100063694627441/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#9ccc65] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
          <a href="#/weekly" className="bg-[#7cb342] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1d3a28] transition-all shadow-lg hover:shadow-xl">
            Tickets
          </a>
        </div>

        {/* Mobile toggle button - Raised Z-index */}
        <div className="md:hidden flex items-center gap-2 relative z-[110]">
          {/* Mobile toggle button - Raised Z-index */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4/5'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-2.5' : 'w-2/3'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#1d3a28] z-[100] transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-10 overflow-y-auto">
          <div className="flex flex-col space-y-8">
          {NAVIGATION.filter(link => link.label !== 'Startseite').map((link) => (
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

          <div className="mt-12 pt-8 border-t border-white/10">
            <span className="text-[#7cb342] font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">Wir in Social Media</span>
            <div className="flex space-x-8">
              <a
                href="https://www.instagram.com/kino.forum22?igsh=MXZ4ejZndW1rOTZjdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#9ccc65] transition-colors flex flex-col items-center gap-2"
              >
                <Instagram size={24} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/p/forum22-kino-caf%C3%A9-kultur-100063694627441/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#9ccc65] transition-colors flex flex-col items-center gap-2"
              >
                <Facebook size={24} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Facebook</span>
              </a>
            </div>
          </div>

          <div className="mt-auto mb-12 pt-10">
            <a
              href="#/weekly"
              onClick={closeMenu}
              className="block w-full text-center bg-[#7cb342] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl"
            >
              Tickets Buchen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
