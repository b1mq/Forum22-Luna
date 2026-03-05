
import React from 'react';

const SJRPhilosophy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className="text-[#ef4444] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Unsere Wurzeln</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#5a0017] mb-8 leading-tight">Stadtjugendring <br /><span className="italic font-normal">Urach e.V.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Seit 1955 das Herz der Jugend- и Kulturarbeit in Bad Urach. Ein Verein, der aus Leidenschaft für den Film и die Gemeinschaft entstanden ist.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl font-display text-[#5a0017] mb-6">Geschichte & Entstehung</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Der Stadtjugendring Urach e.V. wurde 1955 gegründet и ist seit 1975 ein eingetragener Verein. Ursprünglich aus dem „Jugendfilmclub“ entstanden, beschloss der Verein nach der Schließung des damaligen Kinos in Bad Urach, dass auch weiterhin Bilder über eine große Leinwand laufen sollten.
              </p>
              <p>
                Nach einer dreijährigen Planungsphase и viel Eigenleistung eröffnete der Stadtjugendring im Oktober 1988 das Kulturzentrum <strong>"forum22"</strong> als Kino, Informations- и Kulturzentrum mit Cafébereich.
              </p>
              <p>
                Im Jahr 2004 übernahm der Stadtjugendring ebenfalls das <strong>luna filmtheater</strong> in Metzingen, um auch dort die Kinotradition zu bewahren и mit neuem Leben zu füllen.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[60px] shadow-xl border border-gray-100 animate-fadeInRight">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-[#f8f9f5] rounded-3xl">
                <div className="text-4xl font-display text-[#ef4444] mb-2">1955</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Gegründet</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9f5] rounded-3xl">
                <div className="text-4xl font-display text-[#ef4444] mb-2">1988</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Forum 22</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9f5] rounded-3xl">
                <div className="text-4xl font-display text-[#ef4444] mb-2">2004</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Luna</div>
              </div>
              <div className="text-center p-6 bg-[#f8f9f5] rounded-3xl">
                <div className="text-4xl font-display text-[#ef4444] mb-2">50+</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Ehrenamtliche</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#3b0010] rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7cb342]/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">Unsere <br /><span className="italic font-normal text-[#ef4444]">Philosophie.</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Wir betreiben unsere Kinos nicht aus kommerziellem Interesse, sondern aus Liebe zur Kultur и als Teil unserer sozialen Verantwortung.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Kultur für alle", desc: "Bereicherung des Freizeitangebotes и der Lebensqualität im ländlichen Raum." },
                  { title: "Offene Jugendarbeit", desc: "Jugendliche lernen Verantwortung zu übernehmen и gestalten den Betrieb aktiv mit." },
                  { title: "Ehrenamt", desc: "Ohne das Engagement unserer Mitglieder wäre dieser Betrieb nicht möglich." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-[#ef4444]">✓</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 border border-white/10">
              <h3 className="text-2xl font-display mb-6">Kino als Begegnungsort</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                In einer Zeit, in der die Freizeit immer mehr an Bedeutung gewinnt, hat eine Einrichtung wie diese eine wichtige Funktion: Einerseits soll durch kulturelle Angebote eine Bereicherung erreicht werden, andererseits soll Jugendlichen die Möglichkeit gegeben werden, sich in einem lockeren Rahmen zu treffen и Kontakte zu knüpfen.
              </p>
              <div className="p-6 bg-[#ef4444]/20 rounded-2xl border border-[#ef4444]/30">
                <p className="italic text-sm text-[#fecaca]">
                  "Wir schnuppern Kinoluft, lernen Verantwortung и teilen unsere Begeisterung für den Film."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-display text-[#5a0017] mb-8">Unterstützen Sie uns</h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Als gemeinnütziger Verein sind wir auf Ihre Unterstützung angewiesen. Werden Sie Pate, Mitglied im Förderverein oder engagieren Sie sich ehrenamtlich.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#/service/prices" className="bg-[#ef4444] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">Patenschaft & Förderung</a>
            <a href="#/about/jobs" className="bg-[#5a0017] text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">Ehrenamtlich mitwirken</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SJRPhilosophy;
