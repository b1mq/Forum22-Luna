
import React, { useState, useEffect } from 'react';
import { MOVIES, SHOWTIMES } from '../constants';
import MovieCard from '../components/MovieCard';
import MovieDetailModal from '../components/MovieDetailModal';
import { Movie } from '../types';

const Home: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(true);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanClose(true);
    }, 1500); // wait 1.5 seconds before showing close button
    return () => clearTimeout(timer);
  }, []);

  const handleBooking = (movieId: string, time: string) => {
    alert(`Tickets für Film ${movieId} um ${time} reserviert! (Simulation)`);
  };

  const openDetails = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    if (canClose) {
      setShowModal(false);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Dual Hero Section - Added pt-[72px] for fixed navbar */}
      <section className="relative min-h-screen md:min-h-[90vh] pt-[72px] md:pt-0 flex flex-col md:flex-row overflow-hidden">
        {/* Forum 22 Side (Deep Green) */}
        <div className="relative flex-1 group overflow-hidden transition-all duration-700 ease-in-out md:hover:flex-[1.2]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517604401157-5903553fd3ca?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2416]/95 via-[#162e1e]/85 to-[#162e1e]/95" />
          
          <div className="relative h-full flex flex-col justify-center items-center text-center p-10 z-10 py-16 md:py-10">
            <div className="mb-6 animate-fadeInUp flex flex-col items-center">
              <span className="text-[#a2d149] font-black text-[11px] uppercase tracking-[0.5em] mb-3">Programmkino · Bad Urach</span>
              <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-white/60 text-[9px] uppercase font-black tracking-[0.2em]">Ein Projekt des Stadtjugendring Urach e.V.</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg">Forum 22</h1>
            <p className="text-white/70 max-w-sm mb-12 font-light text-lg leading-relaxed">
              Entdecken Sie die Welt des anspruchsvollen Films in gemütlicher Atmosphäre.
            </p>
            <a 
              href="#/weekly/forum" 
              className="group/btn bg-[#7cb342] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#1d3a28] transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(124,179,66,0.3)] flex items-center gap-3"
            >
              Aktuelles Programm
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#7cb342] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Luna Metzingen Side (Amber Gold) */}
        <div className="relative flex-1 group overflow-hidden transition-all duration-700 ease-in-out md:hover:flex-[1.2]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffb300]/95 via-[#ffc107]/85 to-[#ffca28]/95" />
          
          <div className="relative h-full flex flex-col justify-center items-center text-center p-10 z-10 py-16 md:py-10">
            <div className="mb-6 animate-fadeInUp flex flex-col items-center">
              <span className="text-[#1d3a28] font-black text-[11px] uppercase tracking-[0.5em] mb-3">Filmtheater · Metzingen</span>
              <div className="px-4 py-1.5 bg-[#1d3a28]/10 backdrop-blur-md rounded-full border border-[#1d3a28]/10">
                <span className="text-[#1d3a28]/60 text-[9px] uppercase font-black tracking-[0.2em]">Ein Projekt des Stadtjugendring Urach e.V.</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-bold text-[#1d3a28] mb-6 drop-shadow-sm">Luna</h1>
            <p className="text-[#1d3a28]/70 max-w-sm mb-12 font-light text-lg leading-relaxed">
              Großes Kino, modernste Technik und die neuesten Blockbuster für die ganze Familie.
            </p>
            <a 
              href="#/weekly/luna" 
              className="group/btn bg-[#1d3a28] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#ffb300] hover:text-[#1d3a28] transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(29,58,40,0.2)] flex items-center gap-3"
            >
              Aktuelles Programm
              <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1d3a28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </section>

      {/* Dual About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gray-100 hidden lg:block" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* About Forum 22 (Left) */}
            <div className="flex flex-col items-start animate-fadeInLeft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#7cb342]/10 rounded-2xl flex items-center justify-center text-[#7cb342] text-xl font-bold">22</div>
                <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.3em]">Kultur in Bad Urach</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display text-[#1d3a28] mb-8 leading-tight">
                Ein Ort für <br /><span className="italic font-normal">wahre Filmkunst.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Das Forum 22 wird seit 1983 mit viel Herzblut vom <strong>Stadtjugendring Urach e.V.</strong> betrieben. Als preisgekröntes Programmkino bieten wir Raum für Filme, die bewegen, inspirieren und nachwirken – <span className="text-[#7cb342] font-semibold italic">100% ehrenamtlich, 100% Kultur.</span>
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border-l-2 border-[#7cb342] pl-4">
                  <h4 className="font-bold text-[#1d3a28] text-sm uppercase mb-1">Arthouse</h4>
                  <p className="text-xs text-gray-400 font-medium">Prämierte Weltklasse</p>
                </div>
                <div className="border-l-2 border-[#7cb342] pl-4">
                  <h4 className="font-bold text-[#1d3a28] text-sm uppercase mb-1">Community</h4>
                  <p className="text-xs text-gray-400 font-medium">100% Ehrenamtlich</p>
                </div>
              </div>
              <a href="#/contact" className="group text-[#1d3a28] font-bold border-b-2 border-[#7cb342] pb-1 hover:text-[#7cb342] transition-all">
                Besuchen Sie uns in Bad Urach
              </a>
            </div>

            {/* About Luna Metzingen (Right) */}
            <div className="flex flex-col items-start animate-fadeInRight">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center text-[#ffc107] text-xl font-bold">L</div>
                <span className="text-[#ffc107] font-black text-xs uppercase tracking-[0.3em]">Kino in Metzingen</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display text-[#1d3a28] mb-8 leading-tight">
                Modernes Kino <br /><span className="italic font-normal">mit Tradition.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Das Luna Filmtheater in der Eisenbahnstraße ist die erste Adresse für Filmfans in Metzingen. Hier verbinden wir den Charme eines klassischen Kinos mit modernster Sound- und Projektionstechnik für das perfekte Erlebnis.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border-l-2 border-[#ffc107] pl-4">
                  <h4 className="font-bold text-[#1d3a28] text-sm uppercase mb-1">Blockbuster</h4>
                  <p className="text-xs text-gray-400 font-medium">Täglich aktuell</p>
                </div>
                <div className="border-l-2 border-[#ffc107] pl-4">
                  <h4 className="font-bold text-[#1d3a28] text-sm uppercase mb-1">Technik</h4>
                  <p className="text-xs text-gray-400 font-medium">Digital 4K & Dolby</p>
                </div>
              </div>
              <a href="#/contact" className="group text-[#1d3a28] font-bold border-b-2 border-[#ffc107] pb-1 hover:text-[#ffc107] transition-all">
                Besuchen Sie uns in Metzingen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Club Philosophy Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#7cb342] font-black text-xs uppercase tracking-[0.4em] mb-6 block">Unsere Philosophie</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#1d3a28] mb-10 leading-tight">
              Kino ist für uns <br /><span className="italic font-normal">soziale Verantwortung.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Der Stadtjugendring Urach e.V. betreibt das Forum 22 и das Luna Filmtheater nicht aus kommerziellem Interesse. Wir sind ein gemeinnütziger Verein, der Kultur erlebbar macht и Jugendlichen einen Raum zur Entfaltung bietet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#f8f9f5] rounded-[40px] text-center">
                <div className="text-3xl mb-4">🤝</div>
                <h4 className="font-bold text-[#1d3a28] mb-2">Ehrenamt</h4>
                <p className="text-xs text-gray-500">Getragen von über 50 engagierten Menschen.</p>
              </div>
              <div className="p-8 bg-[#f8f9f5] rounded-[40px] text-center">
                <div className="text-3xl mb-4">🌱</div>
                <h4 className="font-bold text-[#1d3a28] mb-2">Jugendarbeit</h4>
                <p className="text-xs text-gray-500">Verantwortung lernen и Kinoluft schnuppern.</p>
              </div>
              <div className="p-8 bg-[#f8f9f5] rounded-[40px] text-center">
                <div className="text-3xl mb-4">🎭</div>
                <h4 className="font-bold text-[#1d3a28] mb-2">Kultur pur</h4>
                <p className="text-xs text-gray-500">Ausgezeichnetes Programm für die Region.</p>
              </div>
            </div>
            <div className="mt-12">
              <a href="#/about/philosophy" className="text-[#7cb342] font-bold border-b-2 border-[#7cb342] pb-1 hover:text-[#1d3a28] transition-all">
                Mehr über unsere Geschichte erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Weekly Preview */}
      <section className="py-24 bg-[#f8f9f5]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display text-[#1d3a28] mb-4">Programm Highlights</h2>
              <p className="text-gray-500 italic">Die besten Filme aus beiden Kinos für Sie ausgewählt</p>
            </div>
            <a href="#/weekly" className="bg-[#1d3a28] text-white px-10 py-4 rounded-full hover:bg-[#7cb342] transition-colors font-bold shadow-lg">
              Gesamtes Programm
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOVIES.slice(0, 3).map(movie => (
              <div key={movie.id} onClick={() => openDetails(movie)} className="cursor-pointer">
                <MovieCard 
                  movie={movie} 
                  showtimes={SHOWTIMES.filter(s => s.movieId === movie.id).slice(0, 3)} 
                  onBook={handleBooking}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-24 bg-[#1d3a28] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342] rounded-full filter blur-[120px] opacity-10 -mr-48 -mt-48" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-12 leading-tight">
            Verschenken Sie <br />
            <span className="text-[#a2d149]">magische Kinomomente.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href="#/service/vouchers" className="bg-[#7cb342] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#1d3a28] transition-all shadow-xl">
               Gutschein kaufen
             </a>
             <a href="#/service/prices" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
               Eintrittspreise
             </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 max-w-md md:max-w-lg mx-4 relative">
            {canClose && (
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 z-50"
                style={{ transform: 'translate(50%, -50%)' }}
              >
                ✕
              </button>
            )}
            <div className="text-center pt-6">
              <p className="text-lg text-gray-800 mb-6">
                Möchten Sie die Kinos in Bad Urach und Metzingen besuchen?
              </p>
              <a
                href="#/about/philosophy"
                className="inline-flex items-center gap-2 bg-[#ef4444] text-white px-6 py-3 rounded-full font-bold hover:bg-[#d13b3b] transition-colors"
              >
                Wissen
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {selectedMovie && (
        <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Home;
