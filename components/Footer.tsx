
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white/70 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-[#9ccc65] font-display text-xl mb-6">Forum 22</h4>
            <p className="mb-4">Ulmer Str. 24<br />72574 Bad Urach</p>
            <p>Tel: 07125 / 7707<br />info@forum22.de</p>
          </div>
          <div>
            <h4 className="text-[#9ccc65] font-display text-xl mb-6">Öffnungszeiten</h4>
            <p>Täglich eine Stunde vor der ersten Vorstellung</p>
            <p className="mt-4 text-sm italic">Einlass: 30 Min vor Beginn</p>
          </div>
          <div>
            <h4 className="text-[#9ccc65] font-display text-xl mb-6">Partnerkino</h4>
            <h5 className="text-white font-medium mb-2">Luna Filmtheater</h5>
            <p>Eisenbahnstr. 19<br />72555 Metzingen<br />Tel: 07123-60766</p>
          </div>
          <div>
            <h4 className="text-[#9ccc65] font-display text-xl mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Erhalten Sie das Programm per E-Mail.</p>
            <button className="bg-[#7cb342] text-white px-6 py-2 rounded-full hover:bg-[#9ccc65] transition-colors">
              Abonnieren
            </button>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stadtjugendring Urach e.V.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" target="_blank" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
