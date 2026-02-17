
import React from 'react';

const SpecialEvents: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Exklusiv & Besonders</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Sondervorstellungen <br /><span className="italic font-normal">& Events.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ob Schulvorstellungen, private Mieten oder unsere beliebten Nachmittags-Specials – das Forum 22 bietet Raum für Ihre besonderen Wünsche.
          </p>
        </header>

        <div className="space-y-12 mb-24">
          {/* Section 1: Schools */}
          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 text-6xl text-center md:text-left">🎓</div>
            <div className="flex-1">
              <h3 className="text-3xl font-display text-[#1d3a28] mb-4">Schulvorstellungen</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kino als Bildungsort! Wir organisieren exklusive Vormittagsvorstellungen für Schulen zu vergünstigten Konditionen. Von aktuellen Literaturverfilmungen bis zu historisch relevanten Dokumentationen.
              </p>
              <a href="mailto:info@forum22.de?subject=Anfrage%20Schulvorstellung" className="text-[#7cb342] font-bold hover:underline">Anfrage senden →</a>
            </div>
          </div>

          {/* Section 2: Afternoon Cinema */}
          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/3 text-6xl text-center md:text-left">☕</div>
            <div className="flex-1">
              <h3 className="text-3xl font-display text-[#1d3a28] mb-4">Kultur am Nachmittag</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Einmal im Monat präsentieren wir ein ausgewähltes Programm am Nachmittag. Bei Kaffee und Kuchen in unserem Café wird das Kinoerlebnis zu einem gemütlichen gesellschaftlichen Event.
              </p>
              <a href="#/weekly" className="text-[#7cb342] font-bold hover:underline">Zum Programm →</a>
            </div>
          </div>

          {/* Section 3: Rentals */}
          <div className="bg-[#1d3a28] rounded-[40px] p-10 md:p-16 text-white shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 text-6xl text-center md:text-left">🏢</div>
            <div className="flex-1">
              <h3 className="text-3xl font-display text-[#7cb342] mb-4">Kino mieten</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Sie suchen einen besonderen Ort für Ihre Firmenfeier, einen Geburtstag oder eine private Filmvorführung? Unser Kinosaal mit 90 Plätzen und das angrenzende Café können gemietet werden.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-white/10 px-4 py-2 rounded-xl text-sm border border-white/10">4K Technik</div>
                 <div className="bg-white/10 px-4 py-2 rounded-xl text-sm border border-white/10">Catering möglich</div>
                 <div className="bg-white/10 px-4 py-2 rounded-xl text-sm border border-white/10">Beste Akustik</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
