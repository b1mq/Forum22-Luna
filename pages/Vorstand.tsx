import React, { useState } from 'react';
import AboutSidebar from '../components/AboutSidebar';

const members = [
  { name: 'Thorsten Hail', role: '1. Vorsitzender', emoji: '🧑‍💼' },
  { name: 'Achim Störmer', role: '2. Vorsitzender', emoji: '🧑‍💼' },
  { name: 'Carsten Gaßner', role: '', emoji: '🧑‍🎬' },
  { name: 'Eva Notz', role: '', emoji: '👩‍💼' },
  { name: 'Susanne Sauer', role: '', emoji: '👩‍💼' },
  { name: 'Yannick Penka', role: '', emoji: '🧑‍🎓' },
  { name: 'Maximilian Straßer', role: '', emoji: '🧑‍🎓' },
];

const MemberCard: React.FC<{ member: (typeof members)[number] }> = ({ member }) => (
  <div className="flex flex-col items-center text-center bg-[#f8f9f5] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-xs lg:w-60">
    <div className="relative mb-4">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#ef4444] via-[#7b001f] to-[#1d3a28] flex items-center justify-center text-3xl md:text-4xl text-white shadow-lg">
        {member.emoji}
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#7cb342] border-2 border-white shadow-md" />
    </div>
    <div className="space-y-1">
      <p className="font-display text-[#1d3a28] text-lg">
        {member.name}
      </p>
      {member.role && (
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-black">
          {member.role}
        </p>
      )}
    </div>
  </div>
);

const Vorstand: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <AboutSidebar onToggle={setSidebarOpen} />
      <div className="container mx-auto px-6">
        <div className="flex flex-col">
          <header className="mb-16 max-w-3xl mx-auto text-center animate-fadeInUp">
          <span className="text-[#ef4444] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Vorstand
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-[#5a0017] mb-6 leading-tight">
            Stadtjugendring <br />
            <span className="italic font-normal">Urach e.V.</span>
          </h1>
        </header>

        <section className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-xl border border-gray-100 p-10 md:p-14 animate-fadeIn">
          <div className="text-center mb-10">
            <div className="text-4xl text-[#ef4444] mb-4">„</div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Gemeinsam tragen wir Verantwortung dafür, dass Kino und Kultur in Bad Urach und Metzingen lebendig bleiben –
              als Begegnungsorte für alle Generationen.
            </p>
          </div>

          <div className="space-y-10">
            {/* First row: two chairpersons centered (desktop), single column on mobile */}
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-8 md:gap-10">
              {members.slice(0, 2).map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Second row: three members, centered on desktop */}
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-8 md:gap-10">
              {members.slice(2, 5).map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Third row: last two members centered on desktop, stacked on mobile */}
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-8 md:gap-10">
              {members.slice(5).map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
          </div>
      </div>
    </div>
  );
};

export default Vorstand;

