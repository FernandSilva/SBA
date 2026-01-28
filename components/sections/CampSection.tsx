
import React from 'react';
import { CAMP_DATA, IMAGES } from '../../constants';
import { Check, Calendar, MapPin, Users, Target, Clock } from 'lucide-react';

interface CampSectionProps {
  setActivePage?: (page: any) => void;
}

const CampSection: React.FC<CampSectionProps> = ({ setActivePage }) => {
  const handleApply = () => {
    if (setActivePage) setActivePage('CONTACT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Camp Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.gymClassProof})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-8xl font-oswald uppercase text-white mb-6">Three-Week <span className="text-[#b91c1c]">Boxing Camp</span></h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-2xl font-light">
            Mandatory introduction for beginners. High-focus skills for returning athletes.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Concept Explanation */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h3 className="text-4xl font-oswald uppercase mb-8 text-[#0a0a0a]">The SBA <span className="text-[#b91c1c]">Camp Format</span></h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At SBA, we believe proper boxing fundamentals — especially padwork — require consistency and repetition over time. A three-week structure allows the coach to work with each participant long enough to build technique, confidence, and understanding, rather than rushing progress in a single session.
              </p>
              <p className="font-bold text-[#b91c1c] p-6 bg-red-50 border-l-4 border-[#b91c1c]">
                For beginners, the three-week camp is mandatory as an introduction to SBA training standards.
              </p>
              <p>
                The SBA three-week boxing camp is designed to give participants a proper introduction to boxing training under professional coaching. Whether you are new to boxing or returning to sharpen your skills, the camp format ensures structured progression, focused padwork, and a supportive group environment.
              </p>
              <p className="text-sm italic">Places are limited to maintain coaching quality and individual attention.</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 border border-[#e5e5e5] rounded-xl bg-white shadow-sm flex flex-col items-center text-center">
              <Calendar className="w-8 h-8 text-[#b91c1c] mb-4" />
              <h4 className="font-oswald uppercase mb-2">Duration</h4>
              <p className="text-gray-500 text-sm">3 consecutive weeks</p>
            </div>
            <div className="p-8 border border-[#e5e5e5] rounded-xl bg-white shadow-sm flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-[#b91c1c] mb-4" />
              <h4 className="font-oswald uppercase mb-2">Frequency</h4>
              <p className="text-gray-500 text-sm">Once per week (Thursday)</p>
            </div>
            <div className="p-8 border border-[#e5e5e5] rounded-xl bg-white shadow-sm flex flex-col items-center text-center">
              <Target className="w-8 h-8 text-[#b91c1c] mb-4" />
              <h4 className="font-oswald uppercase mb-2">Day</h4>
              <p className="text-gray-500 text-sm">Every Thursday</p>
            </div>
            <div className="p-8 border border-[#e5e5e5] rounded-xl bg-white shadow-sm flex flex-col items-center text-center">
              <Clock className="w-8 h-8 text-[#b91c1c] mb-4" />
              <h4 className="font-oswald uppercase mb-2">Session length</h4>
              <p className="text-gray-500 text-sm">60 minutes</p>
            </div>
          </div>
        </div>

        {/* Pricing & Dates */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Beginner Entry */}
          <div className="relative bg-[#0a0a0a] text-white rounded-2xl p-10 overflow-hidden shadow-2xl flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b91c1c] -mr-16 -mt-16 rotate-45" />
            <h3 className="text-4xl font-oswald uppercase mb-4">Beginner Entry</h3>
            <p className="text-[#b91c1c] font-oswald uppercase tracking-widest text-sm mb-8 font-bold">First-Time Participants</p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-gray-300">Mandatory three-week sign-up</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-gray-300">One session per week (Thursday)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-gray-300">Foundational coaching intensive</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-auto">
              <p className="text-3xl font-oswald uppercase mb-6">{CAMP_DATA.pricing.beginner}</p>
              <button 
                onClick={handleApply}
                className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-widest transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Returning Participants */}
          <div className="bg-white border-2 border-[#e5e5e5] rounded-2xl p-10 shadow-lg flex flex-col">
            <h3 className="text-4xl font-oswald uppercase mb-4 text-[#0a0a0a]">Returning</h3>
            <p className="text-gray-400 font-oswald uppercase tracking-widest text-sm mb-8 font-bold">Existing SBA Athletes</p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-gray-600">{CAMP_DATA.pricing.returningSingle} (Single)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-[#b91c1c]" />
                <span className="text-gray-600">OR {CAMP_DATA.pricing.returningUpfront} (3 Weeks)</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 mt-auto">
              <button 
                onClick={handleApply}
                className="w-full bg-[#0a0a0a] hover:bg-black text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-widest transition-all mb-8"
              >
                Apply Now
              </button>
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <p className="text-xs font-bold uppercase tracking-widest text-[#b91c1c] mb-2">Next Camp Start Date</p>
                <p className="text-2xl font-oswald uppercase text-[#0a0a0a]">{CAMP_DATA.nextCampStart}</p>
                <p className="text-xs text-gray-400 mt-2 italic">Thursday, 18:00 – 19:00.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Session Gallery */}
        <section className="mb-24">
          <h3 className="text-3xl font-oswald uppercase text-center mb-12 text-[#0a0a0a]">Training Session Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={IMAGES.groupIntensity} alt="Group Conditioning" className="rounded-lg shadow-md aspect-video object-cover" loading="lazy" />
            <img src={IMAGES.technicalGroup} alt="Technical Class" className="rounded-lg shadow-md aspect-video object-cover" loading="lazy" />
            <img src={IMAGES.gymClassProof} alt="Boxing Gym Class" className="rounded-lg shadow-md aspect-video object-cover" loading="lazy" />
          </div>
        </section>
      </div>
      
      {/* Venue Section Main Image */}
      <section className="relative py-40 overflow-hidden border-t border-[#f0f0f0]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.venueWide})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 text-[#b91c1c] mb-4">
            <MapPin className="w-5 h-5" />
            <span className="uppercase tracking-[0.4em] font-bold text-xs">Rotating Venues</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-oswald uppercase mb-6 text-white">Locations Selected for <span className="text-[#b91c1c]">Performance</span></h2>
          <p className="text-gray-200 text-lg md:text-2xl font-light">
            We operate using a rotating venue model, selecting training locations based on the time of year and the type of sessions being delivered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CampSection;
