
import React from 'react';

const CinemaAdvertising: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5] min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Präsenz zeigen</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Werbung <br /><span className="italic font-normal">im Kino.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Bringen Sie Ihre Botschaft auf die große Leinwand. Nutzen Sie die ungeteilte Aufmerksamkeit unseres Publikums für Ihre Werbung.
          </p>
        </header>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-12 rounded-[50px] shadow-xl border border-gray-100 flex flex-col justify-center">
            <h2 className="text-3xl font-display text-[#1d3a28] mb-6">Ihre Werbung bei uns</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Wir bieten Ihnen die Möglichkeit, Ihre Werbung auf unseren Leinwänden in Bad Urach и Metzingen zu platzieren. Erreichen Sie eine kulturinteressierte Zielgruppe in einem emotionalen Umfeld.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#f8f9f5] rounded-2xl">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Direkter Kontakt</p>
                  <p className="font-bold text-[#1d3a28]">07125 - 7707 <span className="text-xs font-normal text-gray-400">(9-16 Uhr)</span></p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#f8f9f5] rounded-2xl">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">E-Mail</p>
                  <a href="mailto:info@forum22.de" className="font-bold text-[#7cb342] hover:underline">info@forum22.de</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1d3a28] p-12 rounded-[50px] shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-3xl font-display text-[#7cb342] mb-6">Unsere Werbepartner</h2>
            <p className="text-white/60 leading-relaxed mb-10">
              Für überregionale oder professionell koordinierte Kampagnen können Sie sich auch direkt an unsere spezialisierten Partner wenden:
            </p>
            <div className="space-y-6">
              <a href="http://www.werbeweischer.de/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                <h4 className="font-bold text-white mb-1 group-hover:text-[#7cb342]">WerbeWeischer</h4>
                <p className="text-xs text-white/40">www.werbeweischer.de</p>
              </a>
              <a href="http://www.kinowerbung-regional.de/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                <h4 className="font-bold text-white mb-1 group-hover:text-[#7cb342]">Kinowerbung Regional</h4>
                <p className="text-xs text-white/40">www.kinowerbung-regional.de</p>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-12 rounded-[60px] border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <div className="text-4xl mb-6">🎬</div>
          <h3 className="text-2xl font-display text-[#1d3a28] mb-4">Warum Kinowerbung?</h3>
          <p className="text-gray-500 leading-relaxed">
            Kinowerbung wird im Gegensatz zu anderen Werbeformen als Teil des Erlebnisses wahrgenommen. Die hohe Bild- и Tonqualität sorgt für eine maximale Werbewirkung и bleibt nachhaltig im Gedächtnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CinemaAdvertising;
