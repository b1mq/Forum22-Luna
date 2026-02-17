
import React from 'react';

const Vouchers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      {/* Page Hero */}
      <section className="mb-20 text-center container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block animate-fadeInUp">Geschenke & Service</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-6 leading-tight">Kinogutscheine</h1>
          <p className="text-gray-500 text-xl leading-relaxed">
            Schenken Sie unvergessliche Filmmomente – das perfekte Geschenk für jeden Anlass.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-display text-[#1d3a28] mb-6">Das perfekte Geschenk für Filmliebhaber</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              An unseren Kinokassen können Sie unsere neuen Kinowertgutscheine erwerben. Der Wert des Gutscheins kann von Ihnen frei gewählt werden. Ob Arthouse-Perlen im Forum 22 oder Blockbuster im Luna – unsere Gutscheine öffnen Türen zu neuen Welten.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                 <span className="text-2xl">🍿</span>
                 <span className="text-sm font-bold text-[#1d3a28]">Snacks inklusive</span>
               </div>
               <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                 <span className="text-2xl">🎫</span>
                 <span className="text-sm font-bold text-[#1d3a28]">Freie Filmwahl</span>
               </div>
            </div>
          </div>

          {/* Animated Voucher Sample */}
          <div className="relative group perspective-1000 animate-fadeInRight">
            <div className="bg-gradient-to-br from-[#1d3a28] to-[#7cb342] p-10 md:p-16 rounded-[40px] shadow-2xl text-white transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="flex justify-between items-center mb-12 border-b border-white/20 pb-6 border-dashed">
                <span className="font-display font-bold text-3xl">Forum 22</span>
                <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Wertgutschein</span>
              </div>
              
              <div className="text-center my-10">
                <p className="text-white/70 italic mb-4">Kinogenuss verschenken</p>
                <div className="text-6xl md:text-7xl font-display font-bold tracking-tighter">
                  XX,00 €
                </div>
              </div>
              
              <div className="text-center pt-8 border-t border-white/20 border-dashed">
                <p className="text-xs font-medium opacity-60">Einlösbar im Forum 22 Bad Urach & Luna Metzingen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="mb-24">
          <h2 className="text-4xl font-display text-[#1d3a28] mb-12 text-center">So erhalten Sie Ihren Gutschein</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Option 1 */}
            <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-[#7cb342]/10 rounded-2xl flex items-center justify-center text-[#7cb342] text-2xl font-bold mb-8">1</div>
              <h3 className="text-3xl font-display font-bold text-[#1d3a28] mb-6">An der Kinokasse</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Besuchen Sie uns einfach an unserer Abendkasse und erwerben Sie Ihren Gutschein direkt vor Ort. Wir beraten Sie gerne!
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-gray-500"><span className="text-[#7cb342]">✔</span> Sofortige Verfügbarkeit</li>
                <li className="flex items-center gap-3 text-gray-500"><span className="text-[#7cb342]">✔</span> Persönliche Beratung</li>
                <li className="flex items-center gap-3 text-gray-500"><span className="text-[#7cb342]">✔</span> Freie Wertwahl</li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#7cb342]">
                <p className="text-sm font-bold text-[#1d3a28]">Öffnungszeiten:</p>
                <p className="text-sm text-gray-500">Täglich eine Stunde vor der ersten Vorstellung</p>
              </div>
            </div>

            {/* Option 2: Featured */}
            <div className="bg-[#1d3a28] p-10 md:p-12 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-6 right-6 bg-[#7cb342] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">Bequem</div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#7cb342] text-2xl font-bold mb-8">2</div>
              <h3 className="text-3xl font-display font-bold mb-6">Per Post bestellen</h3>
              <p className="text-white/70 mb-10 leading-relaxed">
                Sie haben keine Zeit vorbeizukommen? Bestellen Sie Ihre Gutscheine bequem von zu Hause aus:
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="text-3xl shrink-0">✉️</span>
                  <div>
                    <h4 className="font-bold mb-1">1. E-Mail senden</h4>
                    <p className="text-sm text-white/50">Schreiben Sie an <a href="mailto:info@forum22.de" className="text-[#7cb342] hover:underline">info@forum22.de</a> mit Name, Adresse, Anzahl und Wert der Gutscheine.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="text-3xl shrink-0">💳</span>
                  <div>
                    <h4 className="font-bold mb-1">2. Überweisung tätigen</h4>
                    <div className="bg-white/5 p-4 rounded-xl mt-3 text-sm">
                      <p className="mb-2 font-mono text-white/80 uppercase text-[10px] tracking-widest">Bankverbindung</p>
                      <p>Kreissparkasse Reutlingen</p>
                      <p className="font-mono mt-1">IBAN: DE28 6405 0000 0000 3011 70</p>
                    </div>
                    <p className="text-xs text-white/40 mt-3 italic">Porto: 0,85 € (bis 5 Stk.) / 1,00 € (ab 6 Stk.)</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="text-3xl shrink-0">📬</span>
                  <div>
                    <h4 className="font-bold mb-1">3. Gutscheine erhalten</h4>
                    <p className="text-sm text-white/50">Nach Zahlungseingang werden die Gutscheine per Post an Ihre Adresse verschickt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <h2 className="text-4xl font-display text-[#1d3a28] mb-12 text-center">Häufig gestellte Fragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-l-4 border-l-[#7cb342]">
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Wie lange sind die Gutscheine gültig?</h4>
              <p className="text-gray-500 leading-relaxed">Unsere Kinogutscheine haben in der Regel eine Gültigkeit von 3 Jahren ab Ende des Kaufjahres, sofern nicht anders angegeben.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-l-4 border-l-[#7cb342]">
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Auch für Snacks einlösbar?</h4>
              <p className="text-gray-500 leading-relaxed">Ja, unsere Wertgutscheine können sowohl für Kinokarten als auch für Getränke und Snacks an unserer Kinokasse eingelöst werden.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-l-4 border-l-[#7cb342]">
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Mindest- oder Höchstsumme?</h4>
              <p className="text-gray-500 leading-relaxed">Nein, Sie können den Wert Ihres Gutscheins frei wählen. Ab 10,00 € ist jeder Betrag möglich.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm border-l-4 border-l-[#7cb342]">
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Was passiert mit Restbeträgen?</h4>
              <p className="text-gray-500 leading-relaxed">Wird der Gutschein nicht vollständig eingelöst, bleibt das Restguthaben erhalten und kann beim nächsten Besuch genutzt werden.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1d3a28] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342] opacity-10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-8">Bereit, Kinofreude zu verschenken?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Besuchen Sie uns an der Kinokasse oder bestellen Sie ganz einfach per E-Mail. Wir freuen uns darauf, Ihnen zu helfen!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:info@forum22.de?subject=Kinogutschein%20Bestellung" className="bg-[#7cb342] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#1d3a28] transition-all shadow-xl">
              Per E-Mail bestellen
            </a>
            <a href="#/contact" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Kontakt & Anfahrt
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vouchers;
