
import React from 'react';

const ProgrammAboForm: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Immer informiert</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Programm <br /><span className="italic font-normal">Abonnement.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Bestellen Sie unser Programm per E-Mail и verpassen Sie keine Vorstellung mehr. Wir senden Ihnen monatlich alle Termine и Highlights direkt in Ihr Postfach.
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white rounded-[60px] p-12 md:p-20 shadow-xl border border-gray-100 text-center">
          <div className="w-32 h-32 bg-[#7cb342]/10 rounded-full flex items-center justify-center text-5xl mx-auto mb-10">
            📧
          </div>
          <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Programm-Abo Formular</h2>
          <p className="text-gray-500 mb-12">
            Laden Sie das Anmeldeformular herunter, füllen Sie es aus и senden Sie es uns zu, um unser Programm monatlich per Post oder E-Mail zu erhalten.
          </p>
          <button className="w-full bg-[#1d3a28] text-white py-6 rounded-3xl font-bold text-xl hover:bg-[#7cb342] transition-all shadow-xl flex items-center justify-center gap-4 group">
            <span>Antrag Herunterladen</span>
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
          <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
            Antrag_Programmabo.pdf · 380 KB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammAboForm;
