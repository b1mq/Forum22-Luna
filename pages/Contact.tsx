
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Kontakt & Anfahrt</span>
          <h1 className="text-5xl md:text-6xl font-display text-[#1d3a28] mb-8 leading-tight">Zwei Kinos, <br /><span className="italic font-normal">ein Erlebnis.</span></h1>
          <p className="text-gray-500 text-lg">
            Ob Arthouse-Kultur in Bad Urach oder Blockbuster-Spaß in Metzingen – wir freuen uns auf Ihren Besuch.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Forum 22 - Bad Urach Section */}
          <div className="flex flex-col animate-fadeInLeft">
            <div className="bg-[#1d3a28] rounded-[40px] p-10 md:p-12 text-white h-full shadow-2xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7cb342] opacity-10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#7cb342] rounded-2xl flex items-center justify-center text-white text-xl font-bold">22</div>
                <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.3em]">Forum 22 · Bad Urach</span>
              </div>

              <h2 className="text-4xl font-display mb-10">Programmkino <br />Bad Urach</h2>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-50">📍</span>
                  <div>
                    <h4 className="font-bold text-[#7cb342] mb-1">Adresse</h4>
                    <p className="text-white/80 leading-relaxed">Stadtjugendring Urach e.V.<br />Ulmer Str. 24, 72574 Bad Urach</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-50">📞</span>
                  <div>
                    <h4 className="font-bold text-[#7cb342] mb-1">Telefon</h4>
                    <a href="tel:071257707" className="text-2xl font-display hover:text-[#7cb342] transition-colors">07125 / 7707</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-50">✉️</span>
                  <div>
                    <h4 className="font-bold text-[#7cb342] mb-1">E-Mail</h4>
                    <a href="mailto:info@forum22.de" className="hover:text-[#7cb342] transition-colors">info@forum22.de</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-50">🚉</span>
                  <div>
                    <h4 className="font-bold text-[#7cb342] mb-1">Anfahrt</h4>
                    <p className="text-white/80 text-sm">Ermstalbahn: Haltestelle Wasserfall (ca. 5 Min Fußweg). Parkplätze direkt am Haus vorhanden.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Ulmer+Str.+24,+72574+Bad+Urach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#7cb342] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1d3a28] transition-all group"
                >
                  In Google Maps öffnen
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Luna - Metzingen Section */}
          <div className="flex flex-col animate-fadeInRight">
            <div className="bg-[#ffc107] rounded-[40px] p-10 md:p-12 text-[#1d3a28] h-full shadow-xl relative overflow-hidden flex flex-col border border-[#ffb300]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-[80px] -mr-32 -mt-32"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#1d3a28] rounded-2xl flex items-center justify-center text-[#ffc107] text-xl font-bold">L</div>
                <span className="text-[#1d3a28] font-black text-xs uppercase tracking-[0.3em]">Luna · Metzingen</span>
              </div>

              <h2 className="text-4xl font-display mb-10">Filmtheater <br />Metzingen</h2>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-40">📍</span>
                  <div>
                    <h4 className="font-bold text-[#1d3a28]/60 mb-1 uppercase text-[10px] tracking-widest">Adresse</h4>
                    <p className="text-[#1d3a28]/80 leading-relaxed font-medium">Eisenbahnstraße 19<br />72555 Metzingen</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-40">📞</span>
                  <div>
                    <h4 className="font-bold text-[#1d3a28]/60 mb-1 uppercase text-[10px] tracking-widest">Telefon</h4>
                    <a href="tel:0712360766" className="text-2xl font-display hover:underline transition-all">07123 - 60766</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-40">🕒</span>
                  <div>
                    <h4 className="font-bold text-[#1d3a28]/60 mb-1 uppercase text-[10px] tracking-widest">Kassenöffnung</h4>
                    <p className="text-[#1d3a28]/80 font-medium">Täglich eine Stunde vor der ersten Vorstellung.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <span className="text-3xl shrink-0 opacity-40">🚗</span>
                  <div>
                    <h4 className="font-bold text-[#1d3a28]/60 mb-1 uppercase text-[10px] tracking-widest">Parken</h4>
                    <p className="text-[#1d3a28]/80 text-sm">Parkhäuser "Zentrum" oder "P&R am Bahnhof" in unmittelbarer Nähe.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Eisenbahnstraße+19,+72555+Metzingen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1d3a28] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1d3a28] transition-all group"
                >
                  In Google Maps öffnen
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Map Section */}
        <div className="mt-20 h-64 md:h-96 rounded-[50px] overflow-hidden relative group shadow-inner border border-gray-200 animate-fadeIn">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover filter grayscale opacity-20" 
            alt="Stilized Map Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9f5] via-transparent to-[#f8f9f5]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-4">Besuchen Sie uns bald!</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Zwei Standorte, dieselbe Leidenschaft für das Kino. Wir freuen uns auf Ihren Besuch in Bad Urach oder Metzingen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
