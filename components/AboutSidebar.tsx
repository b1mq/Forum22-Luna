import React, { useEffect, useState } from 'react';

const ABOUT_LINKS = [
  { label: 'Geschichte', href: '#/about/history' },
  { label: 'Philosophie & SJR', href: '#/about/philosophy' },
  { label: 'Vorstand', href: '#/about/vorstand' },
];

interface AboutSidebarProps {
  onToggle?: (isOpen: boolean) => void;
}

const AboutSidebar: React.FC<AboutSidebarProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash || '' : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <aside
        className={
          `fixed top-0 left-0 h-full z-20 transition-all duration-300
           ${isOpen ? 'w-3/4 md:w-64 lg:w-72' : 'w-0'}`
        }
      >
        <div
          className={`h-full bg-white rounded-r-3xl shadow-xl border border-gray-100
            overflow-hidden transition-all duration-300
            ${isOpen ? 'p-4 md:p-5' : 'p-0'}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
              {isOpen && (
                <span className="text-[10px] uppercase font-black tracking-[0.35em] text-gray-400">
                  Über Uns
                </span>
              )}
            </div>
            {isOpen && (
              <nav className="space-y-1 flex-1 overflow-y-auto pt-8">
                {ABOUT_LINKS.map(link => {
                  const isActive = currentPath === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={[
                        'block px-3 py-2 rounded-2xl text-sm font-semibold transition-all',
                        'flex items-center justify-between',
                        isActive
                          ? 'bg-[#3b0010] text-white shadow-md'
                          : 'text-gray-600 hover:bg-[#f8f9f5] hover:text-[#5a0017]',
                      ].join(' ')}
                    >
                      <span className="text-xs uppercase tracking-[0.2em]">
                        {link.label}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
                      )}
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </aside>

      {/* toggle button always fixed on left edge */}
      <button
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          if (onToggle) onToggle(next);
        }}
        aria-label={isOpen ? 'Navigation einklappen' : 'Navigation ausklappen'}
        className={`fixed top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full border border-gray-200
           bg-white shadow-sm flex items-center justify-center text-base text-gray-800 hover:bg-gray-50
           transition-transform duration-300
           ${isOpen ? 'left-[75%] -translate-x-1/2 md:left-[16rem] lg:left-[18rem]' : 'left-0'}`}
      >
        {isOpen ? '‹' : '›'}
      </button>
    </>
  );
};

export default AboutSidebar;

