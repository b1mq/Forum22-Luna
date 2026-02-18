
import React from 'react';
import { Movie } from '../types';

interface Props {
  movie: Movie;
  onClose: () => void;
}

const MovieDetailModal: React.FC<Props> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 bg-[#1d3a28]/95 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full h-full md:h-auto md:max-w-5xl md:max-h-[90vh] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/10 hover:bg-black/20 p-2 md:p-3 rounded-full transition-colors backdrop-blur-md"
        >
          <svg className="w-6 h-6 text-[#1d3a28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-2/5 h-72 md:h-auto overflow-hidden shrink-0">
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 p-6 md:p-12 overflow-y-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.labels?.map(l => (
              <span key={l} className="px-3 py-1 bg-[#7cb342]/10 text-[#7cb342] text-[10px] font-bold uppercase rounded-md">
                {l}
              </span>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1d3a28] mb-4 md:mb-6 leading-tight">{movie.title}</h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8 border-y border-gray-100 py-4 md:py-6">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Regie</p>
              <p className="text-[#1d3a28] font-medium text-sm md:text-base">{movie.director || 'N/A'}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Dauer</p>
              <p className="text-[#1d3a28] font-medium text-sm md:text-base">{movie.duration} Minuten</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Handlung</h4>
            <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
              {movie.fullSynopsis || movie.description}
            </p>
          </div>

          {movie.cast && (
            <div className="mb-10">
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Besetzung</h4>
              <p className="text-gray-500 text-sm md:text-base">{movie.cast.join(', ')}</p>
            </div>
          )}

          <div className="mt-auto pb-4 md:pb-0">
             <button 
                onClick={onClose} 
                className="w-full md:w-auto bg-[#1d3a28] text-white px-10 py-4 rounded-full font-bold hover:bg-[#7cb342] transition-colors shadow-lg"
             >
               Tickets reservieren
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
