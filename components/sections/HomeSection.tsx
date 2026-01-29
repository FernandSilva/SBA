import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IMAGES, VIDEOS } from '../../constants';
import { PageType } from '../../types';
import { Camera, Zap, Target, Activity, Trophy, MapPin, ArrowRight, Play } from 'lucide-react';

interface HomeSectionProps {
  setActivePage: (page: PageType) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ setActivePage }) => {
  // Video list (shared by mobile + desktop)
  const videoItems = useMemo(
    () => [
      { key: 'vid4', src: VIDEOS.vid4, label: 'Action' },
      { key: 'vid1', src: VIDEOS.vid1, label: 'Intensity' },
      { key: 'vid5', src: VIDEOS.vid5, label: 'The Gym' },
      { key: 'vid2', src: VIDEOS.vid2, label: 'Technique' }
    ],
    []
  );

  // Single active video at a time (both mobile + desktop)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  const togglePlay = async (key: string) => {
    const current = videoRefs.current[key];
    if (!current) return;

    // Pause anything else that might be playing
    if (playingKey && playingKey !== key) {
      const prev = videoRefs.current[playingKey];
      if (prev) {
        prev.pause();
        try {
          prev.currentTime = 0;
        } catch {}
      }
    }

    // Toggle play/pause on current
    if (!current.paused) {
      current.pause();
      setPlayingKey(null);
      return;
    }

    // Ensure inline playback + user-initiated play
    current.muted = false;
    current.playsInline = true;

    try {
      await current.play();
      setPlayingKey(key);
    } catch {
      setPlayingKey(null);
    }
  };

  const onEnded = (key: string) => {
    if (playingKey === key) setPlayingKey(null);
  };

  // --- Mobile-only slider for the 4 proof images under the italic statement ---
  const proofImages = useMemo(
    () => [
      { src: IMAGES.fightAction3, alt: 'High Intensity Conditioning' },
      { src: IMAGES.fightAction2, alt: 'Sparring Proficiency' },
      { src: IMAGES.fightAction7, alt: 'Amateur boxing' },
      { src: IMAGES.fightAction8, alt: 'Ringside guidance' },
      { src: IMAGES.fightAction, alt: 'Professional boxing' },
      { src: IMAGES.coachDetail5, alt: 'White-collar boxing' },
      { src: IMAGES.venueWide, alt: 'SBA Venue Proof' },
      { src: IMAGES.groupIntensity, alt: 'Technical Instruction' },
      
    ],
    []
  );

  const [proofSlide, setProofSlide] = useState(0);

  // Auto-slide logic (mobile only section is shown via CSS, but timer is lightweight)
  useEffect(() => {
    const timer = setInterval(() => {
      setProofSlide((prev) => (prev + 1) % proofImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [proofImages.length]);

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
          <img src={IMAGES.coachSparing} alt="SBA Boxing Community" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-left">
              <h3 className="text-2xl font-oswald uppercase text-[#0a0a0a]">Boxing sessions Built <span className="text-[#b91c1c]">on Structure and Intensity</span>
              </h3>
              <p>
                Silva Boxing Academy is a boxing club delivering high-intensity group training through structured three-week programs.
                Each session is designed to build boxing skill, conditioning, and confidence through a combination of padwork, cardio,
                strength training, and technical drills.
              </p>
              <p>
                Training is suitable for complete beginners, experienced amateurs, and professional fighters, with coaching adapted to
                different levels within the same group environment.
              </p>
              <p className="font-bold text-[#0a0a0a] border-l-4 border-[#b91c1c] pl-6 py-4 bg-[#f9fafb] italic">
                SBA is not a drop-in fitness class. It is a boxing academy focused on real progression, discipline, and performance.
              </p>

              {/* UPDATED (MOBILE ONLY): Proof Images Slider (FULL WIDTH on mobile) */}
              <div className="block lg:hidden mt-8">
                <div className="w-full mx-auto">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#e5e5e5] shadow-xl bg-black">
                    {proofImages.map((img, idx) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          proofSlide === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3">
                          <p className="text-white font-oswald uppercase text-[10px] tracking-widest text-center">{img.alt}</p>
                        </div>
                      </div>
                    ))}

                    {/* Slider Dots */}
                    <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
                      {proofImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            proofSlide === idx ? 'bg-[#b91c1c] w-4' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagery Proof Grid (DESKTOP unchanged) */}
            <div className= "hidden lg:grid grid-cols-2 gap-4">
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
                  src={IMAGES.fightAction8}
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
            <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-4">
              How Training <span className="text-[#b91c1c]">Works</span>
            </h2>
            <p className="text-gray-500 max-w-2xl">
              A systematic approach to boxing. We don't just workout; we build skills through repetition and intensity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Three-week training programs', icon: <Target className="w-8 h-8" />, desc: 'Structured blocks designed for measurable skill and fitness progression.' },
              { title: 'One-hour high-intensity group sessions', icon: <Zap className="w-8 h-8" />, desc: 'High-intensity group sessions balancing technique, conditioning, and recovery.' },
              { title: 'Focus on boxing fundamentals and padwork', icon: <Activity className="w-8 h-8" />, desc: 'Precision combinations and real-ring application coached in every session.' },
              { title: 'Cardio and strength built into every session', icon: <Trophy className="w-8 h-8" />, desc: 'Functional conditioning built into boxing rounds for peak performance.' },
              { title: 'Group energy with individual coaching cues', icon: <Zap className="w-8 h-8" />, desc: 'Group energy with specific coaching cues tailored to your skill level.' },
              { title: 'Rotating venues selected for optimal training conditions', icon: <MapPin className="w-8 h-8" />, desc: 'Training environments selected for optimal focus and performance results.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#e5e5e5] hover:border-[#b91c1c] transition-all group shadow-sm">
                <div className="text-[#b91c1c] mb-6 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-oswald uppercase text-[#0a0a0a] mb-3 tracking-widest">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-start">
            <button
              onClick={() => setActivePage('SCHEDULE')}
              className="flex items-center space-x-2 text-[#0a0a0a] hover:text-[#b91c1c] transition-colors font-oswald uppercase tracking-widest text-sm font-bold"
            >
              <span>View Full Schedule Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Built for Every Level */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-16 text-center">
          Built for <span className="text-[#b91c1c]">Every Level</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { lvl: 'Beginners', img: IMAGES.technicalGroup, desc: 'Learn proper boxing fundamentals, padwork, and conditioning in a structured environment.' },
            { lvl: 'Amateurs', img: IMAGES.fightAction7, desc: 'Sharpen technique, endurance, and consistency through focused group sessions.' },
            { lvl: 'Professionals', img: IMAGES.coachDetail2, desc: 'Maintain sharpness, intensity, and conditioning with high-level padwork.' }
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
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${IMAGES.venueWide})` }} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-oswald uppercase text-white mb-8">
            Rotating Venues. <br />
            <span className="text-[#b91c1c]">Consistent Standards.</span>
          </h2>
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
            <h2 className="text-4xl md:text-5xl font-oswald uppercase text-[#0a0a0a] mb-4">
              Action <span className="text-[#b91c1c]">Gallery</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">Real boxing. Real training. Real progress. Every Thursday in Hamburg.</p>
          </div>

          {/* Shared: horizontal scroll, standardized square tiles, click-to-play */}
          <div className="w-full">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">Video Gallery</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">{videoItems.length} clips</p>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
              {videoItems.map((item) => (
                <div
                  key={item.key}
                  className="
                    snap-start flex-shrink-0
                    w-[60vw] max-w-[360px]
                    md:w-[220px]
                  "
                >
                  <button
                    type="button"
                    onClick={() => togglePlay(item.key)}
                    className="relative w-full aspect-square overflow-hidden rounded-sm border border-[#e5e5e5] bg-black shadow-lg group"
                    aria-label={`Play video: ${item.label}`}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[item.key] = el;
                      }}
                      src={item.src}
                      preload="metadata"
                      playsInline
                      className="w-full h-full object-cover"
                      onEnded={() => onEnded(item.key)}
                    />

                    {playingKey !== item.key && (
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity group-hover:bg-black/35">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 text-[#b91c1c]" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-left">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">{item.label}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-gray-500">Scroll left/right to browse. Tap a video to play. Tap again to pause.</p>
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
