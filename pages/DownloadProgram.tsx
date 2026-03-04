
import React from 'react';

const DownloadProgram: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Immer aktuell</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Das Programm <br /><span className="italic font-normal">als PDF.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Laden Sie sich unser aktuelles Monatsprogramm bequem als PDF herunter и behalten Sie alle Vorstellungen im Blick.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white rounded-[60px] p-12 md:p-20 shadow-xl border border-gray-100 text-center">
          <div className="w-32 h-32 bg-[#7cb342]/10 rounded-full flex items-center justify-center text-5xl mx-auto mb-10">
            📄
          </div>
          <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Monatsprogramm</h2>
          <p className="text-gray-500 mb-12">
            Alle Filme, Termine и Informationen kompakt zusammengefasst für Sie zum Ausdrucken oder digitalen Lesen.
          </p>
          <button className="w-full bg-[#1d3a28] text-white py-6 rounded-3xl font-bold text-xl hover:bg-[#7cb342] transition-all shadow-xl flex items-center justify-center gap-4 group">
            <span>PDF Herunterladen</span>
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
          <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
            Stand: März 2026 · 1.2 MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadProgram;
