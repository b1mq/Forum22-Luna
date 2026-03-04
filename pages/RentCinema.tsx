
import React from 'react';

const RentCinema: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Exklusive Events</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Kino & Café <br /><span className="italic font-normal">mieten.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Suchen Sie eine besondere Location für Ihre Feier? Ob Kindergeburtstag, Firmen- oder Privatfeier – wir machen Ihr Event unvergesslich.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Vielfältige Möglichkeiten</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Wir vermieten unsere Kinosäle и den gemütlichen Cafébereich für verschiedenste Anlässe. Dies ist sowohl außerhalb der regulären Öffnungszeiten (z.B. für Schulvorstellungen am Vormittag) als auch während des laufenden Betriebs möglich.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Kindergeburtstage",
                  "Firmenfeiern",
                  "Schulvorstellungen",
                  "Private Filmabende",
                  "Vorträge & Seminare",
                  "Jubiläen"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#7cb342] rounded-full" />
                    <span className="font-medium text-[#1d3a28]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl animate-fadeInRight h-[450px]">
            <img src="https://images.unsplash.com/photo-1517604401157-5903553fd3ca?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cinema Event" />
          </div>
        </div>

        <div className="bg-[#1d3a28] rounded-[60px] p-12 md:p-20 text-white shadow-2xl text-center">
          <h2 className="text-4xl font-display mb-8 text-[#7cb342]">Interesse geweckt?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Fragen Sie einfach nach – wir helfen Ihnen gerne bei der Planung и Umsetzung Ihrer individuellen Veranstaltung.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 w-full max-w-sm">
              <div className="text-3xl mb-4">📧</div>
              <h4 className="font-bold mb-2">E-Mail Kontakt</h4>
              <p className="text-sm text-white/50 mb-4">Allgemeine Anfragen:</p>
              <a href="mailto:info@forum22.de" className="text-[#7cb342] font-bold hover:underline">info@forum22.de</a>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 w-full max-w-sm">
              <div className="text-3xl mb-4">👤</div>
              <h4 className="font-bold mb-2">Ansprechpartner</h4>
              <p className="text-sm text-white/50 mb-4">Yannick Penka:</p>
              <a href="mailto:y.penka@forum22.de" className="text-[#7cb342] font-bold hover:underline">y.penka@forum22.de</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCinema;
