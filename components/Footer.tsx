import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  setActivePage: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-[#f9fafb] border-t border-[#e5e5e5] py-20">
      {/* Container restricted to max-6xl for better desktop fit */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start">
        
        {/* Branding Column - Left aligned on desktop */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-4 mb-4">
            {/* Red Circle Logo matches Header */}
            <div className="w-12 h-12 bg-[#b91c1c] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-sm font-oswald font-bold italic text-white tracking-tighter">SBA</span>
            </div>
            <span className="text-xl md:text-2xl font-oswald font-bold uppercase tracking-widest text-[#0a0a0a] leading-none">
              Silva Boxing Academy
            </span>
          </div>
          
          <p className="text-gray-500 text-[11px] leading-relaxed max-w-[280px]">
            Hamburg's premier destination for technical boxing, elite padwork, and disciplined athletic growth.
          </p>
        </div>

        {/* Legal Column - Balanced Center alignment */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-oswald uppercase text-[#b91c1c] mb-6 tracking-widest text-[11px] font-bold">Legal & Policies</h4>
          <ul className="text-gray-500 text-[11px] space-y-3 uppercase tracking-widest font-bold">
            <li 
              onClick={() => setActivePage('PRIVACY')}
              className="hover:text-[#b91c1c] cursor-pointer transition-colors"
            >
              Privacy Policy
            </li>
            <li 
              onClick={() => setActivePage('TERMS')}
              className="hover:text-[#b91c1c] cursor-pointer transition-colors"
            >
              Terms & Disclaimer
            </li>
            <li 
              onClick={() => setActivePage('CONDUCT')}
              className="hover:text-[#b91c1c] cursor-pointer transition-colors"
            >
              Member Conduct
            </li>
          </ul>
        </div>

        {/* Social Column - Balanced Right alignment (not sticking to edge) */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="font-oswald uppercase text-[#b91c1c] mb-6 tracking-widest text-[11px] font-bold">Social Media</h4>
          <ul className="text-gray-500 text-[11px] space-y-3 uppercase tracking-widest font-bold">
            <li className="hover:text-[#b91c1c] cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-[#b91c1c] cursor-pointer transition-colors">YouTube</li>
            <li className="hover:text-[#b91c1c] cursor-pointer transition-colors">Facebook</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20 pt-8 border-t border-[#e5e5e5] text-center text-[10px] text-gray-400 uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Silva Boxing Academy (SBA). Hamburg, Germany.
      </div>
    </footer>
  );
};

export default Footer;