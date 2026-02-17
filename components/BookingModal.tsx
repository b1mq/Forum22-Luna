
import React, { useState } from 'react';
import { Movie } from '../types';

interface Props {
  movie: Movie;
  time: string;
  date: string;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ movie, time, date, onClose }) => {
  const [tickets, setTickets] = useState(1);
  const [step, setStep] = useState(1);

  const price = 9.00;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-display font-bold text-[#1d3a28]">Tickets reservieren</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="bg-[#f8f9f5] p-4 rounded-2xl mb-8 flex gap-4">
             <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
               <img src={movie.posterUrl} className="w-full h-full object-cover" alt={movie.title} />
             </div>
             <div>
               <h4 className="font-bold text-[#1d3a28]">{movie.title}</h4>
               <p className="text-sm text-gray-500">{date} · {time} Uhr</p>
               <p className="text-xs text-[#7cb342] font-bold mt-1 uppercase">Forum 22 Bad Urach</p>
             </div>
          </div>

          {step === 1 ? (
            <>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Anzahl der Plätze</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setTickets(Math.max(1, tickets - 1))} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">-</button>
                    <span className="font-bold w-4 text-center">{tickets}</span>
                    <button onClick={() => setTickets(tickets + 1)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-gray-500">Gesamtpreis</span>
                  <span className="text-xl font-bold text-[#1d3a28]">{(tickets * price).toFixed(2)} €</span>
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-[#1d3a28] text-white py-4 rounded-2xl font-bold hover:bg-[#7cb342] transition-colors"
              >
                Weiter zur Reservierung
              </button>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#7cb342]/10 text-[#7cb342] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Erfolgreich reserviert!</h3>
              <p className="text-gray-500 mb-8">Ihre Plätze sind bis 20 Minuten vor Vorstellungsbeginn an der Abendkasse für Sie hinterlegt.</p>
              <button 
                onClick={onClose}
                className="w-full bg-[#1d3a28] text-white py-4 rounded-2xl font-bold hover:bg-[#7cb342] transition-colors"
              >
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
