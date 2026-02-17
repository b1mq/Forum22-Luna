
import React from 'react';

const AboutJobs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block animate-fadeInUp">Stadtjugendring Urach e.V.</span>
          <h1 className="text-5xl md:text-6xl font-display text-[#1d3a28] mb-8 leading-tight">Mitarbeiten im <br /><span className="italic font-normal">Forum 22.</span></h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Unser Kino ist ein ehrenamtliches Projekt. Das bedeutet: Alles, was Sie hier sehen – vom Popcornverkauf bis zur Filmauswahl – wird von Menschen gemacht, die Kino lieben. 
            <strong> Wir suchen Verstärkung!</strong>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Kinodienst */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-16 h-16 bg-[#7cb342]/10 rounded-2xl flex items-center justify-center text-[#7cb342] text-3xl mb-8 group-hover:scale-110 transition-transform">🍿</div>
            <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-4">Kinodienst</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Sie sind das Gesicht des Kinos. Sie verkaufen Tickets, Getränke und das beste Popcorn der Stadt. Hier treffen Sie auf unsere Gäste und sorgen für die richtige Atmosphäre.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>• Ticketverkauf & Kasse</li>
              <li>• Einlass & Gästebetreuung</li>
              <li>• Snack- & Getränkeausgabe</li>
            </ul>
          </div>

          {/* Card 2: Vorführtechnik */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-16 h-16 bg-[#1d3a28]/10 rounded-2xl flex items-center justify-center text-[#1d3a28] text-3xl mb-8 group-hover:scale-110 transition-transform">📽️</div>
            <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-4">Vorführung</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Sie blicken hinter die Kulissen. Sie bedienen unsere digitale 4K-Projektionsanlage und sorgen dafür, dass Ton und Bild perfekt auf der Leinwand landen.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>• Bedienung der Projektoren</li>
              <li>• Technik-Check vor Filmstart</li>
              <li>• Verantwortung für den Saal</li>
            </ul>
          </div>

          {/* Card 3: Programmrat */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-16 h-16 bg-[#fbc02d]/10 rounded-2xl flex items-center justify-center text-[#fbc02d] text-3xl mb-8 group-hover:scale-110 transition-transform">✨</div>
            <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-4">Programmrat</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Sie bestimmen, was läuft. Im Programmrat diskutieren wir über neue Filme, Arthouse-Perlen und planen besondere Events wie Regiegespräche oder Themenwochen.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>• Filmauswahl & Sichtung</li>
              <li>• Event-Organisation</li>
              <li>• Marketing & Social Media</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1d3a28] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7cb342] opacity-10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Interesse geweckt?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
            Wir sind ein offenes Team und freuen uns über jedes neue Gesicht. Egal ob Schüler, Student oder Rentner – jeder ist willkommen. Melden Sie sich einfach bei uns!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:jobs@forum22.de" className="bg-[#7cb342] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#1d3a28] transition-all shadow-xl">
              E-Mail schreiben
            </a>
            <a href="#/contact" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Kino besuchen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJobs;
