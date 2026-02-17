
import React from 'react';

const ServicePrices: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-display text-[#1d3a28] mb-4">Eintrittspreise</h1>
          <p className="text-gray-500">Fairer Kinogenuss für Bad Urach.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-[40px] shadow-sm">
            <h2 className="text-2xl font-display text-[#1d3a28] mb-8 border-b pb-4">Standardpreise</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-700">Erwachsene</span>
                <span className="font-bold text-[#1d3a28]">9,00 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-700">Ermäßigt*</span>
                <span className="font-bold text-[#1d3a28]">8,00 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-700">Kinder (bis 12 J.)</span>
                <span className="font-bold text-[#1d3a28]">6,00 €</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-400 leading-relaxed italic">
              * Ermäßigung gilt für Schüler, Studenten, Schwerbehinderte und Inhaber des Bad Urach Passes gegen Vorlage eines Ausweises.
            </p>
          </div>

          <div className="bg-[#1d3a28] p-10 rounded-[40px] text-white shadow-xl">
            <h2 className="text-2xl font-display text-[#9ccc65] mb-8 border-b border-white/10 pb-4">Besondere Angebote</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white text-lg">Kinotag (Montag)</h4>
                <p className="text-white/60 text-sm">Jeden Montag kosten alle Tickets nur <span className="text-[#9ccc65] font-bold">7,00 €</span>.</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Gildenpass</h4>
                <p className="text-white/60 text-sm">Inhaber des Gildenpasses erhalten zusätzlich <span className="text-[#9ccc65] font-bold">1,00 € Rabatt</span> auf den regulären Preis.</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">3D-Zuschlag</h4>
                <p className="text-white/60 text-sm">Bei 3D-Vorstellungen wird ein Zuschlag von <span className="text-[#9ccc65] font-bold">2,00 €</span> erhoben.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white p-10 rounded-[40px] border border-gray-100">
           <h3 className="text-2xl font-display text-[#1d3a28] mb-6">Hinweise</h3>
           <p className="text-gray-600 mb-4">
             Wir akzeptieren Barzahlung sowie Kartenzahlung (EC/Girocard, Visa, Mastercard). 
             Kinogutscheine können direkt an der Abendkasse erworben oder eingelöst werden.
           </p>
           <p className="text-gray-600">
             Einlass ist jeweils 30 Minuten vor Vorstellungsbeginn.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePrices;
