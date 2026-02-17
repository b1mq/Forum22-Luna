
import React from 'react';
import { Movie } from '../types';

interface Props {
  movie: Movie;
  onClose: () => void;
}

const MovieDetailModal: React.FC<Props> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#1d3a28]/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-black/10 hover:bg-black/20 p-3 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-[#1d3a28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
          <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.labels?.map(l => (
              <span key={l} className="px-3 py-1 bg-[#7cb342]/10 text-[#7cb342] text-[10px] font-bold uppercase rounded-md">
                {l}
              </span>
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1d3a28] mb-6">{movie.title}</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8 border-y border-gray-100 py-6">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Regie</p>
              <p className="text-[#1d3a28] font-medium">{movie.director || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Dauer</p>
              <p className="text-[#1d3a28] font-medium">{movie.duration} Minuten</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Handlung</h4>
            <p className="text-gray-600 leading-relaxed italic">
              {movie.fullSynopsis || movie.description}
            </p>
          </div>

          {movie.cast && (
            <div>
              <h4 className="text-lg font-bold text-[#1d3a28] mb-3">Besetzung</h4>
              <p className="text-gray-500">{movie.cast.join(', ')}</p>
            </div>
          )}

          <div className="mt-12 flex gap-4">
             <button onClick={onClose} className="bg-[#1d3a28] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7cb342] transition-colors">
               Tickets reservieren
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
