
import React, { useState } from 'react';
import { MOVIES, SHOWTIMES, WEEK_DATES } from '../constants';
import MovieDetailModal from '../components/MovieDetailModal';
import BookingModal from '../components/BookingModal';
import { Movie, CinemaLocation } from '../types';

const WeeklyProgram: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(WEEK_DATES[0].fullDate);
  const [selectedLocation, setSelectedLocation] = useState<CinemaLocation>('forum');
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null);
  const [bookingData, setBookingData] = useState<{ movie: Movie; time: string } | null>(null);

  // Filter shows based on location AND date
  const showsOnSelectedDayAndLocation = SHOWTIMES.filter(s => 
    s.fullDate === selectedDate && s.location === selectedLocation
  );

  // Get movies that have shows on this day at this location
  const filteredMovies = MOVIES.filter(movie => 
    showsOnSelectedDayAndLocation.some(s => s.movieId === movie.id)
  );

  const activeDateObj = WEEK_DATES.find(d => d.fullDate === selectedDate);

  // Dynamic Theme Values
  const isForum = selectedLocation === 'forum';
  const themeColor = isForum ? '#7cb342' : '#ffc107';
  const themeBg = isForum ? 'bg-[#1d3a28]' : 'bg-[#ffc107]';
  const themeText = isForum ? 'text-[#7cb342]' : 'text-[#1d3a28]';
  const cinemaName = isForum ? 'Forum 22' : 'Luna Metzingen';
  const cinemaSub = isForum ? 'Programmkino · Bad Urach' : 'Filmtheater · Metzingen';

  return (
    <div className={`pt-24 pb-24 transition-colors duration-500 min-h-screen ${isForum ? 'bg-[#f8f9f5]' : 'bg-[#fffdf5]'}`}>
      
      {/* Cinema Switcher */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-xl mx-auto bg-gray-100 p-1.5 rounded-[30px] flex shadow-inner relative overflow-hidden">
          {/* Slider background */}
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

      {/* Multiplex-style Date Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-2 overflow-x-auto py-4 no-scrollbar">
            {WEEK_DATES.map((date) => (
              <button
                key={date.fullDate}
                onClick={() => setSelectedDate(date.fullDate)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-2xl transition-all duration-300 ${
                  selectedDate === date.fullDate
                    ? `${themeBg} text-${isForum ? 'white' : '[#1d3a28]'} shadow-xl -translate-y-1`
                    : 'bg-transparent text-gray-400 hover:bg-gray-50 hover:text-[#1d3a28]'
                }`}
              >
                <span className={`text-[10px] uppercase font-black tracking-widest mb-1 ${selectedDate === date.fullDate ? (isForum ? 'text-[#9ccc65]' : 'text-[#1d3a28]/60') : ''}`}>
                  {date.dayLabel}
                </span>
                <span className="text-2xl font-display font-bold">{date.dateStr.split('.')[0]}</span>
                <span className="text-[10px] opacity-60 font-medium">{date.dateStr.split('.')[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <header className="mb-12 animate-fadeInUp">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className={`font-black text-[10px] uppercase tracking-[0.4em] mb-2 block ${themeText}`}>{cinemaSub}</span>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-[#1d3a28] mb-2 tracking-tight">{cinemaName}</h1>
              <p className="text-gray-500 text-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {activeDateObj?.dayLabel}, {activeDateObj?.dateStr}.2024
              </p>
            </div>
            
            <div className="flex items-center gap-6 bg-white px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: themeColor }}></span> Highlight
              </div>
              <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="w-3 h-3 bg-gray-100 border border-gray-200 rounded-full mr-2"></span> Normal
              </div>
            </div>
          </div>
        </header>

        {filteredMovies.length > 0 ? (
          <div className="space-y-10">
            {filteredMovies.map((movie, movieIdx) => {
              const todaysTimes = showsOnSelectedDayAndLocation.filter(s => s.movieId === movie.id);
              
              return (
                <div 
                  key={movie.id} 
                  className={`bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col lg:flex-row p-6 lg:p-10 gap-10 group animate-fadeInUp`}
                  style={{ animationDelay: `${movieIdx * 100}ms` }}
                >
                  {/* Poster Side */}
                  <div 
                    className="w-full lg:w-64 aspect-[2/3] lg:aspect-auto h-auto lg:h-[380px] rounded-[30px] overflow-hidden relative cursor-pointer shadow-lg"
                    onClick={() => setDetailMovie(movie)}
                  >
                    <img src={movie.posterUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={movie.title} />
                    <div className={`absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                      <span className="bg-white text-[#1d3a28] px-8 py-3 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Details ansehen
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 flex flex-col py-2">
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {movie.labels?.map(l => (
                          <span key={l} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 ${themeText}`}>
                            {l}
                          </span>
                        ))}
                      </div>
                      <h2 
                        className="text-4xl md:text-5xl font-display font-bold text-[#1d3a28] mb-4 cursor-pointer hover:opacity-70 transition-all leading-tight"
                        onClick={() => setDetailMovie(movie)}
                      >
                        {movie.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-[#1d3a28] font-bold">FSK {movie.fsk}</span>
                        <span className="font-medium">{movie.genre}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="font-medium">{movie.duration} Min.</span>
                      </div>
                      <p className="text-gray-500 leading-relaxed max-w-2xl text-lg">
                        {movie.description}
                      </p>
                    </div>

                    <div className="mt-auto border-t border-gray-50 pt-8">
                      <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-6">Vorstellungen heute:</h4>
                      <div className="flex flex-wrap gap-4">
                        {todaysTimes.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setBookingData({ movie, time: s.time })}
                            className={`px-12 py-5 rounded-3xl font-display font-bold text-3xl transition-all border-2 transform hover:-translate-y-1.5 active:scale-95 ${
                              s.highlighted
                                ? `text-${isForum ? 'white' : '[#1d3a28]'} shadow-xl shadow-${isForum ? '[#7cb342]/20' : '[#ffc107]/20'} border-transparent`
                                : 'bg-gray-50 border-gray-100 text-[#1d3a28] hover:border-[#1d3a28] hover:bg-white'
                            }`}
                            style={{ 
                              backgroundColor: s.highlighted ? themeColor : undefined 
                            }}
                          >
                            {s.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[60px] p-20 md:p-32 text-center border border-dashed border-gray-200 animate-fadeIn shadow-sm">
            <div className="text-8xl mb-8 grayscale opacity-50">🎟️</div>
            <h3 className="text-4xl font-display font-bold text-[#1d3a28] mb-4">Keine Vorstellungen</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-12 text-lg leading-relaxed">
              Für diesen Tag sind derzeit keine Filme im <strong>{cinemaName}</strong> geplant. Versuchen Sie es mit einem anderen Datum oder dem anderen Standort!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setSelectedDate(WEEK_DATES[0].fullDate)} 
                className={`px-10 py-5 rounded-full font-bold text-white shadow-lg transition-all transform hover:scale-105 ${isForum ? 'bg-[#1d3a28]' : 'bg-[#1d3a28]'}`}
              >
                Heute anzeigen
              </button>
              <button 
                onClick={() => setSelectedLocation(isForum ? 'luna' : 'forum')} 
                className={`px-10 py-5 rounded-full font-bold border-2 transition-all hover:bg-gray-50 ${isForum ? 'border-[#ffc107] text-[#1d3a28]' : 'border-[#7cb342] text-[#1d3a28]'}`}
              >
                Zum anderen Standort
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {detailMovie && (
        <MovieDetailModal movie={detailMovie} onClose={() => setDetailMovie(null)} />
      )}
      {bookingData && (
        <BookingModal 
          movie={bookingData.movie} 
          time={bookingData.time} 
          date={activeDateObj?.dateStr || ''}
          onClose={() => setBookingData(null)} 
        />
      )}
    </div>
  );
};

export default WeeklyProgram;
