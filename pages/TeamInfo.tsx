
import React from 'react';

const TeamInfo: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto animate-fadeInUp">
          <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Herz & Seele</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Hinter den <br /><span className="italic font-normal">Kulissen.</span></h1>
          <p className="text-gray-500 text-lg">
            Lernen Sie die Menschen kennen, die das Forum 22 mit Leben füllen. Alles hier geschieht ehrenamtlich und aus Liebe zum Film.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { name: "Der Programmrat", role: "Filmauswahl & Kuration", icon: "🍿" },
            { name: "Die Technik-Crew", role: "Projektion & Sound", icon: "🎞️" },
            { name: "Der Kinodienst", role: "Service & Kasse", icon: "🎟️" }
          ].map((member, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="text-5xl mb-6">{member.icon}</div>
              <h3 className="text-xl font-bold text-[#1d3a28] mb-2">{member.name}</h3>
              <p className="text-[#7cb342] text-sm font-bold uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <header className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-display text-[#1d3a28] mb-4">Der Vorstand</h2>
            <p className="text-gray-500">Die strategische Leitung des Stadtjugendring Urach e.V.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex items-center gap-8">
              <div className="w-20 h-20 bg-[#7cb342]/10 rounded-full flex items-center justify-center text-3xl">👤</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1d3a28]">Thorsten Hail</h3>
                <p className="text-[#7cb342] font-black text-xs uppercase tracking-widest mt-1">1. Vorsitzender</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex items-center gap-8">
              <div className="w-20 h-20 bg-[#7cb342]/10 rounded-full flex items-center justify-center text-3xl">👤</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1d3a28]">Achim Störmer</h3>
                <p className="text-[#7cb342] font-black text-xs uppercase tracking-widest mt-1">2. Vorsitzender</p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white/50 p-10 rounded-[40px] border border-gray-100">
            <p className="text-center text-gray-500 text-sm italic">
              Weitere Vorstandsmitglieder: Carsten Gaßner, Eva Notz, Susanne Sauer, Yannick Penka, Maximilian Straßer (Stand: August 2025)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[50px] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
            <div className="w-64 h-64 bg-[#7cb342] rounded-full" />
          </div>
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#7cb342]/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-[#7cb342] rounded-full animate-pulse" />
              <span className="text-[#7cb342] font-black text-[10px] uppercase tracking-widest">Trägerverein</span>
            </div>
            <h2 className="text-4xl font-display text-[#1d3a28] mb-8">Stadtjugendring Urach e.V.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Das Forum 22 ist kein kommerzielles Kino. Es ist ein Projekt des Stadtjugendrings Bad Urach e.V. Über 50 ehrenamtliche Mitarbeiter engagieren sich in verschiedenen Bereichen, um Ihnen dieses besondere Kinoerlebnis zu ermöglichen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/about/jobs" className="bg-[#1d3a28] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7cb342] transition-all text-center">
                Teil des Teams werden
              </a>
              <a href="https://stadtjugendring-urach.de" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-100 text-[#1d3a28] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-center">
                Mehr über den SJR erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
