import React from 'react';
import { IMAGES } from '../../constants';

const AboutSection: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 3-Image Collage Narrative Block */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 items-start">
          {/* Primary Image Center: coachHero */}
          <div className="md:col-span-6 relative group">
            <div className="absolute -inset-2 bg-[#b91c1c]/10 rounded-lg blur group-hover:blur-xl transition-all" />
            <img
              src={IMAGES.coachHero}
              alt="Fernando Silva in the ring — Head Coach, Silva Boxing Academy"
              className="relative rounded-lg shadow-2xl w-full aspect-[4/5] object-cover border border-[#e5e5e5]"
              loading="lazy"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-4 border-b-4 border-[#b91c1c] shadow-xl w-[90%] text-center">
              <h3 className="text-3xl font-oswald uppercase text-[#0a0a0a]">Fernando Silva</h3>
              <p className="text-[#b91c1c] uppercase tracking-widest text-xs font-bold">Head Coach & Founder</p>
            </div>
          </div>

          {/* Right Column: stack two images on desktop, single image on mobile */}
          <div className="md:col-span-3 space-y-6">
            {/* Existing second image (kept exactly as-is visually) */}
            <img
              src={IMAGES.coachHero2}
              alt="In-ring boxing action — timing, distance, and execution"
              className="rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[3/4] object-cover border border-[#e5e5e5]"
              loading="lazy"
            />

            {/* NEW: third image (desktop only) to balance sizing */}
            <img
              src={IMAGES.fightAction8}
              alt="Additional in-ring action — SBA training intensity"
              className="hidden md:block rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[3/4] object-cover border border-[#e5e5e5]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Coach Biography */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald uppercase mb-8 text-[#0a0a0a] text-center">
            The <span className="text-[#b91c1c]">Fernando Silva</span> Methodology
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
            <p>
              Fernando Silva is the founder and head coach of Silva Boxing Academy. He built SBA with a simple philosophy: boxing is a
              craft, and craft demands standards. After years in the sport as a competitive boxer and student of the game, Fernando
              transitioned into coaching with a focus on fundamentals, ring IQ, and disciplined intensity.
            </p>
            <p>
              His coaching style is direct, technical, and supportive. Fernando is known for precision padwork, structured progressions,
              and the ability to translate complex skills into simple, repeatable actions. He trains athletes the way professionals train—while
              still meeting beginners exactly where they are.
            </p>
            <p>
              At SBA, Fernando leads every camp session and oversees each athlete’s development. The goal is never to “survive a workout.”
              The goal is to build real boxing: better balance, better decisions, better defence, and conditioning that holds up when pressure rises.
            </p>
            <p>
              SBA is Fernando’s long-term project—an academy built on pride, accountability, and the belief that anyone can improve rapidly
              with the right coaching and commitment.
            </p>
          </div>

          <div className="bg-[#f9fafb] p-10 border border-[#e5e5e5] rounded-xl mb-16">
            <h3 className="text-2xl font-oswald uppercase mb-8 border-b border-[#e5e5e5] pb-4 text-[#0a0a0a]">Coaching Principles</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {[
                'Fundamentals first, always',
                'Train with purpose: every round has a goal',
                'Defence is non-negotiable',
                'Conditioning that matches boxing demands',
                'Consistency and accountability create confidence'
              ].map((p, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 uppercase tracking-widest text-xs font-bold leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The SBA Story */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-oswald uppercase mb-8">
            The SBA <span className="text-[#b91c1c]">Story</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed italic font-light">
            "SBA started as a small circle of committed athletes who wanted training that felt honest—boxing that was technical, structured,
            and challenging without being chaotic. Word spread quickly because the sessions delivered results. Today, SBA continues to grow
            with the same standards: serious coaching, a respectful culture, and an environment where people work hard and improve fast."
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
