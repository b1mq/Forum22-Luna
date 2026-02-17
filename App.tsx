
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeeklyProgram from './pages/WeeklyProgram';
import Contact from './pages/Contact';
import ServicePrices from './pages/ServicePrices';
import AboutJobs from './pages/AboutJobs';
import Vouchers from './pages/Vouchers';
import CinemaInfo from './pages/CinemaInfo';
import CafeInfo from './pages/CafeInfo';
import TeamInfo from './pages/TeamInfo';
import SpecialEvents from './pages/SpecialEvents';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/': return <Home />;
      case '#/weekly': return <WeeklyProgram />;
      case '#/contact': return <Contact />;
      case '#/about/jobs': return <AboutJobs />;
      case '#/about/cinema': return <CinemaInfo />;
      case '#/about/cafe': return <CafeInfo />;
      case '#/about/team': return <TeamInfo />;
      case '#/service/prices': return <ServicePrices />;
      case '#/service/vouchers': return <Vouchers />;
      case '#/service/special-events': return <SpecialEvents />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#7cb342] selection:text-white">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }

        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }

        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }

        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .rotate-x-6 { transform: rotateX(6deg); }
      `}</style>
    </div>
  );
};

export default App;
