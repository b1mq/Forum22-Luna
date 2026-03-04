
import React from 'react';

const PatenschaftForm: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Unterstützen Sie uns</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Antrag <br /><span className="italic font-normal">Patenschaft.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Werden Sie Pate и unterstützen Sie unser Programmkino mit einer jährlichen Spende. Als Dank erhalten Sie Freikarten и Nennung auf der Leinwand.
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white rounded-[60px] p-12 md:p-20 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Vorteile einer Patenschaft</h2>
              <div className="space-y-6">
                {[
                  { title: "10 Freikarten pro Jahr", desc: "Genießen Sie Filme in unseren Kinos." },
                  { title: "Leinwand-Präsenz", desc: "Ihr Name wird (auf Wunsch) vor jeder Vorstellung gezeigt." },
                  { title: "Kultur erhalten", desc: "Ihr Beitrag sichert die Zukunft des Forum 22." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-[#7cb342]/10 rounded-2xl flex items-center justify-center shrink-0 text-[#7cb342]">✓</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-[#f8f9f5] rounded-3xl border border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  "Eine Patenschaft kostet 100 € pro Jahr и ist steuerlich absetzbar. Sie unterstützen damit direkt die ehrenamtliche Arbeit des Stadtjugendrings."
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#7cb342]/10 rounded-full flex items-center justify-center text-5xl mx-auto mb-10">
                ✍️
              </div>
              <h3 className="text-2xl font-display text-[#1d3a28] mb-6">Antrag Herunterladen</h3>
              <p className="text-gray-500 mb-12">
                Füllen Sie den Antrag aus и senden Sie ihn uns per Post oder E-Mail zu.
              </p>
              <button className="w-full bg-[#1d3a28] text-white py-6 rounded-3xl font-bold text-xl hover:bg-[#7cb342] transition-all shadow-xl flex items-center justify-center gap-4 group">
                <span>PDF Herunterladen</span>
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </button>
              <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
                Antrag_Patenschaft.pdf · 450 KB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatenschaftForm;
