import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IMAGES, VIDEOS } from '../../constants';
import { PageType } from '../../types';
import { Camera, Zap, Target, Activity, Trophy, MapPin, ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  setActivePage: (page: PageType) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ setActivePage }) => {
  // --- Mobile video slider logic (does not affect desktop grid) ---
  const videoItems = useMemo(
    () => [
      { key: 'vid1', src: VIDEOS.vid1, label: 'Intensity' },
      { key: 'vid2', src: VIDEOS.vid2, label: 'Technique' },
      { key: 'vid4', src: VIDEOS.vid4, label: 'Action' },
      { key: 'vid5', src: VIDEOS.vid5, label: 'The Gym' }
    ],
    []
  );

  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which slide is visible (mobile slider only)
  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('[data-slide]'));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible) return;

        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        root: track,
        threshold: [0.55, 0.7, 0.85]
      }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Only play the active video on mobile; pause others
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;

      if (i === activeIndex) {
        v.muted = true; // required for autoplay on mobile
        const p = v.play();
        if (p) p.catch(() => {});
      } else {
        v.pause();
        try {
          v.currentTime = 0;
        } catch {}
      }
    });
  }, [activeIndex]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      
      {/* Section 1: A Boxing Club Built for Community and Personal Growth */}
      <section className="pt-2 pb-24 max-w-7xl mx-auto px-4">
        <div className="mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald uppercase mb-8 text-[#0a0a0a] leading-tight text-left">
            A Boxing Club Built for <span className="text-[#b91c1c]">Community and Personal Growth</span>
          </h2>
        </div>
          
        {/* Primary Impact Image - Boxing proof */}
        <div className="w-full h-[50vh] md:h-[70vh] mb-16 overflow-hidden rounded-sm shadow-2xl border border-[#e5e5e5]">
          <img 
            src={IMAGES.fightAction} 
            alt="SBA Boxing Community" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-left">
              <h3 className="text-2xl font-oswald uppercase text-[#0a0a0a]">A Boxing Club Built on Structure and Intensity</h3>
              <p>
                Silva Boxing Academy is a boxing club delivering high-intensity group training through structured three-week programs. Each session is designed to build boxing skill, conditioning, and confidence through a combination of padwork, cardio, strength training, and technical drills.
              </p>
              <p>
                Training is suitable for complete beginners, experienced amateurs, and professional fighters, with coaching adapted to different levels within the same group environment.
              </p>
              <p className="font-bold text-[#0a0a0a] border-l-4 border-[#b91c1c] pl-6 py-4 bg-[#f9fafb] italic">
                SBA is not a drop-in fitness class. It is a boxing academy focused on real progression, discipline, and performance.
              </p>
            </div>
            
            {/* Imagery Proof Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={IMAGES.fightAction3} 
                  alt="High Intensity Conditioning" 
                  className="w-full h-64 object-cover rounded-sm border border-[#e5e5e5] shadow-lg"
                  loading="lazy"
                />
                <img 
                  src={IMAGES.groupIntensity} 
                  alt="Technical Instruction" 
                  className="w-full h-48 object-cover rounded-sm border border-[#e5e5e5] shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                 <img 
                  src={IMAGES.fightAction2} 
                  alt="Ring Credibility" 
                  className="w-full h-48 object-cover rounded-sm border border-[#e5e5e5] shadow-lg"
                  loading="lazy"
                />
                <img 
                  src={IMAGES.venueWide} 
                  alt="SBA Venue Proof" 
                  className="w-full h-64 object-cover rounded-sm border border-[#e5e5e5] shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How Training Works */}
      <section className="py-24 bg-[#f9fafb] border-y border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-4">How Training <span className="text-[#b91c1c]">Works</span></h2>
            <p className="text-gray-500 max-w-2xl">A systematic approach to boxing. We don't just workout; we build skills through repetition and intensity.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Three-week training programs", icon: <Target className="w-8 h-8" />, desc: "Structured blocks designed for measurable skill and fitness progression." },
              { title: "One-hour high-intensity group sessions", icon: <Zap className="w-8 h-8" />, desc: "High-intensity group sessions balancing technique, conditioning, and recovery." },
              { title: "Focus on boxing fundamentals and padwork", icon: <Activity className="w-8 h-8" />, desc: "Precision combinations and real-ring application coached in every session." },
              { title: "Cardio and strength built into every session", icon: <Trophy className="w-8 h-8" />, desc: "Functional conditioning built into boxing rounds for peak performance." },
              { title: "Group energy with individual coaching cues", icon: <Zap className="w-8 h-8" />, desc: "Group energy with specific coaching cues tailored to your skill level." },
              { title: "Rotating venues selected for optimal training conditions", icon: <MapPin className="w-8 h-8" />, desc: "Training environments selected for optimal focus and performance results." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#e5e5e5] hover:border-[#b91c1c] transition-all group shadow-sm">
                <div className="text-[#b91c1c] mb-6 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-oswald uppercase text-[#0a0a0a] mb-3 tracking-widest">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-start">
             <button onClick={() => setActivePage('SCHEDULE')} className="flex items-center space-x-2 text-[#0a0a0a] hover:text-[#b91c1c] transition-colors font-oswald uppercase tracking-widest text-sm font-bold">
                <span>View Full Schedule Breakdown</span>
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Every Level */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-16 text-center">Built for <span className="text-[#b91c1c]">Every Level</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { lvl: "Beginners", img: IMAGES.technicalGroup, desc: "Learn proper boxing fundamentals, padwork, and conditioning in a structured environment." },
            { lvl: "Amateurs", img: IMAGES.fightAction7, desc: "Sharpen technique, endurance, and consistency through focused group sessions." },
            { lvl: "Professionals", img: IMAGES.coachDetail2, desc: "Maintain sharpness, intensity, and conditioning with high-level padwork." }
          ].map((card, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-sm border border-[#e5e5e5] shadow-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={card.img} alt={card.lvl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end text-left text-white">
                <h4 className="text-3xl font-oswald uppercase mb-4">{card.lvl}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Rotating Venues. Consistent Standards. */}
      <section className="relative py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${IMAGES.venueWide})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-6xl font-oswald uppercase text-white mb-8">Rotating Venues. <br/><span className="text-[#b91c1c]">Consistent Standards.</span></h2>
           <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-12">
            SBA operates across a selection of training venues, rotating locations based on the season and the specific demands of each training block. This allows us to deliver the best possible environment for conditioning, padwork, and group sessions throughout the year.
           </p>
           <p className="text-[#b91c1c] font-oswald uppercase tracking-[0.3em] font-bold text-sm">Wherever we train, the standard remains the same.</p>
        </div>
      </section>

      {/* Section 5: Action Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center space-x-2 text-[#b91c1c] mb-2">
              <Camera className="w-5 h-5" />
              <span className="uppercase tracking-[0.2em] font-bold text-xs">The Academy in Motion</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-4">Action <span className="text-[#b91c1c]">Gallery</span></h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Real boxing. Real training. Real progress. Every Thursday in Hamburg.
            </p>
          </div>

          {/* MOBILE: 1 video per screen, swipe left/right */}
          <div className="md:hidden">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Video Gallery
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                {activeIndex + 1}/{videoItems.length}
              </p>
            </div>

            <div
              ref={mobileTrackRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide pb-2"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {videoItems.map((item, idx) => (
                <div
                  key={item.key}
                  data-slide
                  data-index={idx}
                  className="snap-center flex-shrink-0 w-[92vw] max-w-[520px]"
                >
                  <div className="aspect-[9/16] overflow-hidden rounded-sm border border-[#e5e5e5] bg-black shadow-lg">
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs font-oswald uppercase tracking-widest text-[#0a0a0a]">
                      {item.label}
                    </p>

                    <button
                      onClick={() => {
                        const v = videoRefs.current[idx];
                        if (!v) return;
                        if (v.paused) v.play().catch(() => {});
                        else v.pause();
                      }}
                      className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b91c1c]"
                    >
                      Play / Pause
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-gray-500">
              Swipe left/right to view videos.
            </p>
          </div>

          {/* DESKTOP/TABLET: original 4-up grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-[#e5e5e5]">
              <video
                src={VIDEOS.vid1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[4/5] overflow-hidden rounded-sm mt-12 border border-[#e5e5e5]">
              <video
                src={VIDEOS.vid2}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-[#e5e5e5]">
              <video
                src={VIDEOS.vid4}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[4/5] overflow-hidden rounded-sm mt-12 border border-[#e5e5e5]">
              <video
                src={VIDEOS.vid5}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
             <h3 className="text-3xl font-oswald uppercase text-[#0a0a0a] mb-8">Ready to Train with SBA?</h3>
             <button 
                onClick={() => setActivePage('CONTACT')}
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white px-12 py-5 font-oswald uppercase tracking-widest font-bold text-lg rounded-sm transition-all transform hover:scale-105"
             >
                Apply for Boxing Camp
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
