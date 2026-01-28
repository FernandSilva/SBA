
import React from 'react';
import { PageType } from '../types';
import { IMAGES } from '../constants';

interface HeroProps {
  setActivePage: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Hero background: Local training proof image with fallback color */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[#0a0a0a]"
        style={{ backgroundImage: `url(${IMAGES.gymClassProof})` }}
      />
      
      {/* Moody Blue-Gray Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* SBA Transparent Box with Red Border - Smaller & Centered */}
        <div className="mb-10 animate-in fade-in zoom-in duration-1000">
          <div className="bg-transparent border-2 border-[#b91c1c] px-6 py-8 inline-flex flex-col items-center shadow-2xl relative">
            <div className="absolute -top-[2px] -left-[2px] w-2 h-2 bg-[#b91c1c]" />
            <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 bg-[#b91c1c]" />
            
            <span className="text-6xl md:text-7xl font-oswald font-bold italic tracking-tighter text-white leading-none">SBA</span>
            <div className="h-[1px] w-12 bg-white/40 my-3" />
            <span className="text-[10px] font-oswald font-bold tracking-[0.4em] text-white uppercase">Silva Boxing Academy</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tight text-white mb-6 leading-none">
          Silva Boxing Academy
        </h1>
        
        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-3xl font-oswald uppercase tracking-widest text-white leading-tight">
            High-Intensity Boxing Training. <br className="md:hidden" />
            <span className="text-[#b91c1c]">Three-Week Programs.</span> Real Coaching.
          </p>
          <p className="text-sm md:text-xl font-light text-gray-300 max-w-3xl mx-auto">
            Group-based sessions focused on padwork, conditioning, and boxing fundamentals for beginners, amateurs, and professionals.
          </p>
        </div>

        <button 
          onClick={() => setActivePage('CONTACT')}
          className="w-full sm:w-auto bg-[#b91c1c] hover:bg-[#991b1b] text-white px-20 py-6 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-900/40"
        >
          Apply for Boxing Camp
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Hero;
