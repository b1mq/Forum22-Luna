
import React from 'react';

const CafeInfo: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Treffpunkt & Genuss</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Das Kino-Café <br /><span className="italic font-normal">Forum 22.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Vor dem Film, nach dem Film oder einfach so: Unser Café ist der gemütliche Mittelpunkt für alle, die gute Gespräche und regionale Produkte schätzen.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-square rounded-[50px] overflow-hidden shadow-2xl animate-fadeInLeft">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cafe atmosphere" />
          </div>
          <div className="animate-fadeInRight space-y-8">
            <h2 className="text-4xl font-display text-[#1d3a28]">Regional & Bio</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Wir legen Wert auf Qualität. Unsere Getränke und Snacks stammen vorwiegend aus der Region oder sind in Bio-Qualität. Genießen Sie ein Glas Wein aus den umliegenden Weinbergen oder ein kühles Bier einer lokalen Brauerei.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-[#1d3a28] mb-2">Weine</h4>
                 <p className="text-sm text-gray-500">Ausgewählte Tropfen regionaler Winzer.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-[#1d3a28] mb-2">Bierspezialitäten</h4>
                 <p className="text-sm text-gray-500">Frisch gezapft oder aus der Flasche.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-[#1d3a28] mb-2">Bio-Softdrinks</h4>
                 <p className="text-sm text-gray-500">Erfrischungen ohne schlechtes Gewissen.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="font-bold text-[#1d3a28] mb-2">Snacks</h4>
                 <p className="text-sm text-gray-500">Das beste Popcorn und feine Knabbereien.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-[#7cb342] rounded-[40px] p-12 text-center text-white">
          <h3 className="text-3xl font-display mb-4">Öffnungszeiten Café</h3>
          <p className="text-white/80 text-xl font-medium">Jeden Abend eine Stunde vor Vorstellungsbeginn geöffnet.</p>
        </div>
      </div>
    </div>
  );
};

export default CafeInfo;
