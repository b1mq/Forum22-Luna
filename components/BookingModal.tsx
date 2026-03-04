
import React, { useState } from 'react';
import { Movie, BookingState } from '../types';

interface Props {
  movie: Movie;
  time: string;
  date: string;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ movie, time, date, onClose }) => {
  const [tickets, setTickets] = useState(1);
  const [step, setStep] = useState<'selection' | 'success'>('selection');

  const pricePerTicket = 9.00;
  const totalPrice = (tickets * pricePerTicket).toFixed(2);

  const handleConfirm = () => {
    // Here we would normally send to a backend
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl">
        <div className="p-8 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1d3a28]">Tickets reservieren</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-[#1d3a28] transition-colors p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="bg-[#f8f9f5] p-5 rounded-3xl mb-10 flex gap-6 items-center">
             <div className="w-20 h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
               <img src={movie.posterUrl} className="w-full h-full object-cover" alt={movie.title} />
             </div>
             <div>
               <h4 className="text-xl font-display font-bold text-[#1d3a28] mb-1">{movie.title}</h4>
               <p className="text-sm text-gray-500 font-medium">{date} · <span className="text-[#7cb342]">{time} Uhr</span></p>
               <div className="mt-2 flex gap-2">
                 <span className="text-[10px] font-black uppercase tracking-widest bg-white px-2 py-1 rounded-md text-gray-400 border border-gray-100">Bad Urach</span>
               </div>
             </div>
          </div>

          {step === 'selection' ? (
            <>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center bg-gray-50 p-6 rounded-3xl">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1d3a28]">Standard Ticket</span>
                    <span className="text-xs text-gray-400">Regulärer Preis: {pricePerTicket.toFixed(2)} €</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <button 
                      onClick={() => setTickets(Math.max(1, tickets - 1))} 
                      className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-[#1d3a28] font-bold"
                    >
                      −
                    </button>
                    <span className="font-display font-bold text-2xl w-6 text-center">{tickets}</span>
                    <button 
                      onClick={() => setTickets(tickets + 1)} 
                      className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-[#1d3a28] font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center px-4">
                  <span className="text-gray-500 font-medium">Gesamtsumme</span>
                  <span className="text-3xl font-display font-bold text-[#1d3a28]">{totalPrice} €</span>
                </div>
              </div>
              
              <button 
                onClick={handleConfirm}
                className="w-full bg-[#1d3a28] text-white py-5 rounded-3xl font-bold text-lg hover:bg-[#7cb342] transition-all transform active:scale-95 shadow-[0_10px_20px_rgba(29,58,40,0.2)]"
              >
                Reservierung abschließen
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-bold">
                Zahlung bequem an der Abendkasse
              </p>
            </>
          ) : (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-20 h-20 bg-[#7cb342]/10 text-[#7cb342] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-[#1d3a28] mb-3">Vielen Dank!</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Deine <span className="font-bold text-[#1d3a28]">{tickets} Tickets</span> sind reserviert. Bitte hole sie bis spätestens 20 Minuten vor Filmstart ab.
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-[#1d3a28] text-white py-4 rounded-2xl font-bold hover:bg-[#7cb342] transition-colors"
              >
                Fertig
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
