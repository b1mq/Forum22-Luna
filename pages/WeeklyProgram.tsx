
import React, { useState } from 'react';
import { MOVIES, SHOWTIMES, WEEK_DATES } from '../constants';
import MovieDetailModal from '../components/MovieDetailModal';
import BookingModal from '../components/BookingModal';
import { Movie } from '../types';

const WeeklyProgram: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(WEEK_DATES[0].fullDate);
  const [detailMovie, setDetailMovie] = useState<Movie | null>(null);
  const [bookingData, setBookingData] = useState<{ movie: Movie; time: string } | null>(null);

  // Фильтруем фильмы на выбранный день
  const filteredMovies = MOVIES.filter(movie => 
    SHOWTIMES.some(s => s.movieId === movie.id && s.fullDate === selectedDate)
  );

  const activeDateObj = WEEK_DATES.find(d => d.fullDate === selectedDate);

  return (
    <div className="pt-24 pb-24 bg-[#f8f9f5] min-h-screen">
      {/* Multiplex-style Date Bar */}
      <div className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-2 overflow-x-auto py-4 no-scrollbar">
            {WEEK_DATES.map((date) => (
              <button
                key={date.fullDate}
                onClick={() => setSelectedDate(date.fullDate)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-2xl transition-all duration-300 ${
                  selectedDate === date.fullDate
                    ? 'bg-[#1d3a28] text-white shadow-xl -translate-y-1'
                    : 'bg-transparent text-gray-400 hover:bg-gray-50 hover:text-[#1d3a28]'
                }`}
              >
                <span className={`text-[10px] uppercase font-black tracking-widest mb-1 ${selectedDate === date.fullDate ? 'text-[#9ccc65]' : ''}`}>
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
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-display font-bold text-[#1d3a28] mb-2 tracking-tight">Spielplan</h1>
            <p className="text-gray-500 text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {activeDateObj?.dayLabel}, {activeDateObj?.dateStr}.2024
            </p>
          </div>
          <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center text-xs font-bold text-gray-400">
              <span className="w-3 h-3 bg-[#7cb342] rounded-full mr-2"></span> HIGHLIGHT
            </div>
            <div className="flex items-center text-xs font-bold text-gray-400">
              <span className="w-3 h-3 bg-gray-100 border border-gray-200 rounded-full mr-2"></span> NORMAL
            </div>
          </div>
        </header>

        {filteredMovies.length > 0 ? (
          <div className="space-y-10">
            {filteredMovies.map(movie => {
              const todaysTimes = SHOWTIMES.filter(s => s.movieId === movie.id && s.fullDate === selectedDate);
              
              return (
                <div key={movie.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col lg:flex-row p-6 lg:p-10 gap-10 group">
                  {/* Poster Side */}
                  <div 
                    className="w-full lg:w-64 aspect-[2/3] lg:aspect-auto h-auto lg:h-[380px] rounded-[30px] overflow-hidden relative cursor-pointer"
                    onClick={() => setDetailMovie(movie)}
                  >
                    <img src={movie.posterUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={movie.title} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-md text-[#1d3a28] px-6 py-2 rounded-full font-bold text-sm">Details</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 flex flex-col py-2">
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {movie.labels?.map(l => (
                          <span key={l} className="text-[10px] font-black uppercase tracking-widest text-[#7cb342] bg-[#7cb342]/5 px-2 py-1 rounded">
                            {l}
                          </span>
                        ))}
                      </div>
                      <h2 
                        className="text-4xl font-display font-bold text-[#1d3a28] mb-4 cursor-pointer hover:text-[#7cb342] transition-colors"
                        onClick={() => setDetailMovie(movie)}
                      >
                        {movie.title}
                      </h2>
                      <p className="text-gray-400 text-sm mb-6 flex items-center gap-3">
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-[#1d3a28] font-bold">FSK {movie.fsk}</span>
                        <span>{movie.genre}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{movie.duration} Min.</span>
                      </p>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {movie.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-xs font-black text-gray-300 uppercase tracking-[0.2em] mb-4">Vorstellungen:</h4>
                      <div className="flex flex-wrap gap-4">
                        {todaysTimes.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setBookingData({ movie, time: s.time })}
                            className={`px-10 py-4 rounded-2xl font-display font-bold text-2xl transition-all border-2 transform hover:-translate-y-1 ${
                              s.highlighted
                                ? 'bg-[#7cb342] border-[#7cb342] text-white shadow-lg shadow-[#7cb342]/20 hover:bg-[#9ccc65]'
                                : 'bg-gray-50 border-gray-100 text-[#1d3a28] hover:border-[#1d3a28] hover:bg-white'
                            }`}
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
          <div className="bg-white rounded-[50px] p-24 text-center border border-dashed border-gray-200">
            <div className="text-7xl mb-8">🍿</div>
            <h3 className="text-3xl font-display font-bold text-[#1d3a28] mb-4">Keine Vorstellungen heute</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-10 text-lg">
              Für diesen Tag sind derzeit keine Filme geplant. Schauen Sie doch an einem anderen Tag vorbei!
            </p>
            <button 
              onClick={() => setSelectedDate(WEEK_DATES[0].fullDate)} 
              className="bg-[#1d3a28] text-white px-10 py-4 rounded-full font-bold hover:bg-[#7cb342] transition-all"
            >
              Zum heutigen Programm
            </button>
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
