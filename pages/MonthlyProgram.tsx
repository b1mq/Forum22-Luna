
import React, { useState } from 'react';
import { MOVIES, SHOWTIMES, MONTH_DATES } from '../constants';
import { CinemaLocation, Movie } from '../types';
import MovieDetailModal from '../components/MovieDetailModal';

const MonthlyProgram: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<CinemaLocation>('forum');
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null);

  const isForum = selectedLocation === 'forum';
  const themeText = isForum ? 'text-[#7cb342]' : 'text-[#1d3a28]';
  const themeBg = isForum ? 'bg-[#1d3a28]' : 'bg-[#ffc107]';
  const cinemaName = isForum ? 'Forum 22' : 'Luna Metzingen';

  // Find highlights for this month
  const monthlyHighlights = MOVIES.filter(m => m.featured);

  return (
    <div className={`pt-32 pb-24 transition-colors duration-500 min-h-screen ${isForum ? 'bg-[#f8f9f5]' : 'bg-[#fffdf5]'}`}>
      
      {/* Cinema Switcher */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-xl mx-auto bg-gray-100 p-1.5 rounded-[30px] flex shadow-inner relative overflow-hidden">
          <div 
            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] transition-all duration-500 ease-in-out rounded-[24px] shadow-lg ${isForum ? 'left-1.5 bg-[#1d3a28]' : 'left-1/2 bg-[#ffc107]'}`} 
          />
          <button 
            onClick={() => setSelectedLocation('forum')}
            className={`relative z-10 flex-1 py-4 text-sm font-black uppercase tracking-widest transition-colors duration-500 ${isForum ? 'text-white' : 'text-gray-400'}`}
          >
            Forum 22
          </button>
          <button 
            onClick={() => setSelectedLocation('luna')}
            className={`relative z-10 flex-1 py-4 text-sm font-black uppercase tracking-widest transition-colors duration-500 ${!isForum ? 'text-[#1d3a28]' : 'text-gray-400'}`}
          >
            Luna
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-4xl mx-auto animate-fadeInUp">
          <span className={`font-black text-xs uppercase tracking-[0.4em] mb-4 block ${themeText}`}>Vorschau · {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
          <h1 className="text-5xl md:text-7xl font-display text-[#1d3a28] mb-8 leading-tight">Das Monatsprogramm <br /><span className="italic font-normal">im {cinemaName}.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Planen Sie Ihren nächsten Kinobesuch im Voraus. Entdecken Sie unsere kuratierten Highlights und besonderen Filmreihen für diesen Monat.
          </p>
        </header>

        {/* Highlight Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display text-[#1d3a28]">Film-Highlights</h2>
            <div className={`h-px flex-1 ${isForum ? 'bg-[#7cb342]/20' : 'bg-[#ffc107]/40'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {monthlyHighlights.map((movie, idx) => (
              <div 
                key={movie.id}
                className="group relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${idx * 150}ms` }}
                onClick={() => setDetailMovie(movie)}
              >
                <img src={movie.posterUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={movie.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d3a28] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-12 text-white">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${isForum ? 'bg-[#7cb342]' : 'bg-[#ffc107] text-[#1d3a28]'}`}>
                    Empfehlung des Monats
                  </span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{movie.title}</h3>
                  <p className="text-white/70 max-w-md line-clamp-2">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chronological List / Grid */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display text-[#1d3a28]">Alle Termine</h2>
            <div className={`h-px flex-1 ${isForum ? 'bg-[#7cb342]/20' : 'bg-[#ffc107]/40'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MONTH_DATES.map((date, dateIdx) => {
              const showsOnThisDay = SHOWTIMES.filter(s => s.fullDate === date.fullDate && s.location === selectedLocation);
              
              return (
                <div 
                  key={date.fullDate} 
                  // Use border-2 instead of ring-2 to handle dynamic coloring via borderColor style property
                  className={`bg-white rounded-3xl p-6 border transition-all hover:shadow-xl hover:-translate-y-1 ${showsOnThisDay.length > 0 ? 'border-2 shadow-sm' : 'border-gray-100 opacity-60'}`}
                  // Fixed: Replaced invalid style property 'ringColor' with 'borderColor'
                  style={showsOnThisDay.length > 0 ? { borderColor: isForum ? '#7cb342' : '#ffc107' } : {}}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${themeText}`}>{date.dayLabel}</span>
                      <h4 className="text-2xl font-display font-bold text-[#1d3a28]">{date.dateStr}</h4>
                    </div>
                    {showsOnThisDay.length > 0 && (
                       <span className={`w-2 h-2 rounded-full ${isForum ? 'bg-[#7cb342]' : 'bg-[#ffc107]'}`}></span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {showsOnThisDay.length > 0 ? (
                      showsOnThisDay.map((show, sIdx) => {
                        const movie = MOVIES.find(m => m.id === show.movieId);
                        return (
                          <div key={sIdx} className="group/item cursor-pointer" onClick={() => movie && setDetailMovie(movie)}>
                            <p className="text-xs font-bold text-gray-400 mb-1">{show.time} Uhr</p>
                            <p className="text-sm font-bold text-[#1d3a28] group-hover/item:text-[#7cb342] transition-colors line-clamp-1">
                              {movie?.title}
                            </p>
                            {show.label && (
                              <span className="text-[8px] uppercase tracking-tighter text-[#7cb342] font-black">{show.label}</span>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-xs text-gray-300 italic">Keine Vorstellungen</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer info box */}
        <div className="mt-24 bg-[#1d3a28] rounded-[50px] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342] opacity-10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <h2 className="text-3xl md:text-5xl font-display mb-8">Programmheft als PDF?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Möchten Sie unser Programm klassisch zum Ausdrucken? Laden Sie sich hier das aktuelle Monatsprogramm als PDF-Dokument herunter.
          </p>
          <button className="bg-[#7cb342] text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-[#1d3a28] transition-all shadow-xl">
            PDF herunterladen
          </button>
        </div>
      </div>

      {detailMovie && (
        <MovieDetailModal movie={detailMovie} onClose={() => setDetailMovie(null)} />
      )}
    </div>
  );
};

export default MonthlyProgram;
