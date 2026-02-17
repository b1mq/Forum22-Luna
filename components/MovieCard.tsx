
import React from 'react';
import { Movie, Showtime } from '../types';

interface Props {
  movie: Movie;
  showtimes: Showtime[];
  onBook: (movieId: string, time: string) => void;
}

const MovieCard: React.FC<Props> = ({ movie, showtimes, onBook }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {movie.isNew && (
          <span className="absolute top-4 right-4 bg-[#7cb342] text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-lg">
            Neu
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p className="text-white text-sm font-medium">{movie.meta}</p>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-[#7cb342] text-xs font-bold uppercase tracking-widest mb-2">{movie.genre}</span>
        <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-3">{movie.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
          {movie.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {showtimes.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => onBook(movie.id, s.time)}
                className={`flex flex-col items-center justify-center min-w-[65px] p-2 rounded-lg border transition-all ${
                  s.highlighted 
                    ? 'bg-[#7cb342] border-[#7cb342] text-white' 
                    : 'bg-gray-50 border-gray-200 text-[#1d3a28] hover:border-[#7cb342] hover:bg-white'
                }`}
              >
                <span className="text-[10px] uppercase font-bold opacity-80">{s.day} {s.date}</span>
                <span className="text-lg font-display font-bold leading-none mt-1">{s.time}</span>
              </button>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-400 font-medium">{movie.duration} Min · FSK {movie.fsk}</span>
            <button className="text-[#7cb342] text-sm font-bold hover:translate-x-1 transition-transform">
              Details →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
