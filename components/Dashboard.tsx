
import React, { useState } from 'react';
import { PageType } from '../types';
import Hero from './Hero';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ScheduleSection from './sections/ScheduleSection';
import CampSection from './sections/CampSection';
import ContactSection from './sections/ContactSection';
import ConductSection from './sections/ConductSection';
import PrivacySection from './sections/PrivacySection';
import TermsSection from './sections/TermsSection';
import Footer from './Footer';
import { Menu, X, MapPin } from 'lucide-react';

interface DashboardProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: PageType }[] = [
    { label: 'Home', id: 'HOME' },
    { label: 'About Us', id: 'ABOUT' },
    { label: 'Boxing Schedule', id: 'SCHEDULE' },
    { label: 'Boxing Camp', id: 'CAMP' },
  ];

  const handlePageChange = (page: PageType) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch(activePage) {
      case 'HOME': return <HomeSection setActivePage={handlePageChange} />;
      case 'ABOUT': return <AboutSection />;
      case 'SCHEDULE': return <ScheduleSection />;
      case 'CAMP': return <CampSection setActivePage={handlePageChange} />;
      case 'CONTACT': return <ContactSection />;
      case 'CONDUCT': return <ConductSection />;
      case 'PRIVACY': return <PrivacySection />;
      case 'TERMS': return <TermsSection />;
      default: return <HomeSection setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a0a0a] font-inter">
      {/* Sticky Header - White Theme */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl px-6 py-4 flex justify-between items-center border-b border-[#e5e5e5]">
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => handlePageChange('HOME')}>
          {/* Red Circle Logo */}
          <div className="w-10 h-10 bg-[#b91c1c] rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-sm font-oswald font-bold italic text-white tracking-tighter">SBA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-oswald font-bold uppercase tracking-widest text-[#0a0a0a] leading-none">
              Silva Boxing Academy
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400/80 tracking-wider mt-[6px] leading-none">
              Precision Boxing Skills and Pad Training
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-[#b91c1c]" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              Hamburg, DE
            </span>
          </div>
          
          <div className="h-4 w-[1px] bg-[#e5e5e5] hidden sm:block" />

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0a0a0a] hover:text-[#b91c1c] transition-colors p-2 z-[60]"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay - White Theme */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[45] bg-white animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="h-full flex flex-col items-center justify-start pt-24 p-6 overflow-y-auto">
            <nav className="flex flex-col space-y-4 md:space-y-8 text-center w-full max-w-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`text-5xl md:text-7xl font-oswald uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                    activePage === item.id ? 'text-[#b91c1c]' : 'text-[#0a0a0a] hover:text-[#b91c1c]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-[#e5e5e5] my-4" />
              <button 
                onClick={() => handlePageChange('CONTACT')}
                className="bg-[#b91c1c] text-white px-12 py-5 font-oswald uppercase tracking-widest font-bold text-xl hover:bg-[#991b1b] transition-all transform hover:scale-105 shadow-xl shadow-red-900/10"
              >
                Apply for Boxing Camp
              </button>
            </nav>
            <div className="mt-12 flex flex-col items-center pb-12">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 mb-2">Hamburg Based Academy</span>
              <div className="w-16 h-[2px] bg-[#b91c1c]" />
            </div>
          </div>
        </div>
      )}

      {/* Header Spacer - Reduced for HOME page to lift content */}
      <div className={activePage === 'HOME' ? "h-[76px]" : "h-[76px]"} />

      {/* Hero Content (Preserved Dark Branding) */}
      {activePage === 'HOME' && <Hero setActivePage={handlePageChange} />}

      {/* Dynamic Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>

      <Footer setActivePage={handlePageChange} />
    </div>
  );
};

export default Dashboard;
