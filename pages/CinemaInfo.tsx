
import React from 'react';

const CinemaInfo: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Tradition & Technik</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Das Forum 22 <br /><span className="italic font-normal">in Bad Urach.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ein preisgekröntes Juwel der Kinokultur, betrieben mit Leidenschaft vom Stadtjugendring Urach e.V. seit über 40 Jahren.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Geschichte & Leidenschaft</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Gegründet im Jahr 1983, hat sich das Forum 22 von einer mutigen Idee zu einem festen Bestandteil der regionalen Kulturlandschaft entwickelt. Wir sind stolz darauf, ein Programmkino zu sein, das regelmäßig von der MFG Filmförderung Baden-Württemberg und dem Bund für sein herausragendes Jahresprogramm ausgezeichnet wird.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <p className="italic text-[#1d3a28] font-medium">
                 "Kino ist für uns nicht nur Abspielstätte, sondern ein Ort der Begegnung und des Diskurses."
               </p>
               <p className="mt-4 text-xs font-bold text-[#7cb342] uppercase tracking-widest">— Stadtjugendring Urach e.V.</p>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl animate-fadeInRight h-[400px]">
             <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cinema Interior" />
          </div>
        </div>

        <div className="bg-[#1d3a28] rounded-[50px] p-12 md:p-20 text-white shadow-2xl">
          <h2 className="text-4xl font-display mb-12 text-center text-[#7cb342]">Technische Exzellenz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl mb-6">📽️</div>
              <h3 className="text-xl font-bold">4K Laser Projektion</h3>
              <p className="text-white/60 text-sm">Kristallklare Bilder und brillante Farben durch modernste Laser-Technologie.</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl mb-6">🔊</div>
              <h3 className="text-xl font-bold">Dolby Digital 7.1</h3>
              <p className="text-white/60 text-sm">Immersiver Raumklang, der Sie mitten in das Geschehen auf der Leinwand zieht.</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl mb-6">💺</div>
              <h3 className="text-xl font-bold">Boutique-Atmosphäre</h3>
              <p className="text-white/60 text-sm">90 bequeme Sitzplätze mit viel Beinfreiheit für ein exklusives Filmerlebnis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaInfo;
