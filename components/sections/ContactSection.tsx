import React, { useMemo, useState } from 'react';
import { FAQS, CAMP_DATA, IMAGES } from '../../constants';
import {
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
  Calendar,
  Users,
  BadgeEuro,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // --- Booking model (UI only) ---
  const cycleOptions = useMemo(
    () => [
      {
        id: 'cycle-1',
        title: 'Next Cycle',
        startLabel: 'Thu 12 Feb',
        weeks: ['Thu 12 Feb', 'Thu 19 Feb', 'Thu 26 Feb'],
        status: 'Limited spaces available',
        capacityText: 'Max 6 participants'
      },
      {
        id: 'cycle-2',
        title: 'Following Cycle',
        startLabel: 'Thu 05 Mar',
        weeks: ['Thu 05 Mar', 'Thu 12 Mar', 'Thu 19 Mar'],
        status: 'Limited spaces available',
        capacityText: 'Max 6 participants'
      },
      {
        id: 'cycle-3',
        title: 'Next After That',
        startLabel: 'Thu 26 Mar',
        weeks: ['Thu 26 Mar', 'Thu 02 Apr', 'Thu 9 Apr'],
        status: 'Taking bookings',
        capacityText: 'Max 6 participants'
      }
    ],
    []
  );

  // ✅ UPDATED PRICING (removed 9-class option, added 1-session option)
  const packageOptions = useMemo(
    () => [
      {
        id: 'p6',
        label: 'Recommended — 6 Classes (2 Cycles)',
        priceLabel: '€80 total',
        headline: 'About €13.33 per class',
        subline: 'Best balance of value + consistency (recommended for real progress).',
        note: 'Ideal if you want enough sessions to build rhythm, technique, and conditioning properly.'
      },
      {
        id: 'p3',
        label: 'Starter — 3 Classes (1 Cycle)',
        priceLabel: '€50 total',
        headline: 'About €16.67 per class',
        subline: 'A full 3-week cycle to learn the fundamentals and get integrated with the team.',
        note: 'Good for new members who want to try SBA with a complete cycle.'
      },
      {
        id: 'p1',
        label: 'Single Session — 1 Class (Drop-in)',
        priceLabel: '€20 total',
        headline: '€20 per class',
        subline: 'Best for visitors or a one-off session. For the real SBA experience, book a cycle.',
        note: 'We strongly recommend booking at least 3 classes so coaching can actually compound.'
      }
    ],
    []
  );

  // ✅ Restored website number (as requested to keep it as-is for now)
  const WHATSAPP_NUMBER_DISPLAY = '+49 176 5912 4336';
  // IMPORTANT: wa.me expects digits only, no +, spaces, or parentheses
  const WHATSAPP_NUMBER_E164 = '4917659124336';

  const WHATSAPP_TEXT = encodeURIComponent("Hi SBA — I'd like to book a place. Which cycle has availability?");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WHATSAPP_TEXT}`;
  const emailHref = `mailto:silvaboxingacademy@gmail.com?subject=${encodeURIComponent('SBA Booking Request')}`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-24 max-w-7xl mx-auto px-4 bg-[#0a0a0a]">
      {/* Header / Purpose */}
      <div className="mb-14">
        <h2 className="text-5xl font-oswald uppercase mb-4 text-white">
          Join <span className="text-[#b91c1c]">SBA</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          This is the sign-up page for SBA’s three-week cycles. Each cycle runs for{' '}
          <span className="text-white font-semibold">3 Thursdays</span>, with a maximum of{' '}
          <span className="text-white font-semibold">6 participants</span> per cycle.
          <span className="text-white font-semibold"> Booking is handled via WhatsApp or email</span>{' '}
          for fast confirmation and a real human reply.
        </p>
      </div>

      {/* Hero image + booking cycles */}
      <div className="grid lg:grid-cols-12 gap-10 mb-16 items-start">
        {/* Left: Image + direct contact CTA */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm border border-[#222222] shadow-2xl bg-black">
            <img
              src={IMAGES.coachHero2}
              alt="SBA in-ring action"
              className="w-full h-[38vh] lg:h-[46vh] object-cover object-top"
              loading="lazy"
            />
          </div>

          <div className="mt-8 p-6 bg-[#111111] border border-[#222222] rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-2">Book your place</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              For now, all bookings are confirmed via WhatsApp or email. Message us and we’ll reply with availability,
              what to bring, and how to secure your spot.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Phone / WhatsApp</p>
                  <p className="text-white font-medium break-words">{WHATSAPP_NUMBER_DISPLAY}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Email</p>
                  <p className="text-white font-medium break-words">silvaboxingacademy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Location</p>
                  <p className="text-white font-medium break-words">{CAMP_DATA.location}</p>
                  <p className="text-xs text-gray-500">Exact address provided after inquiry</p>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp to Book</span>
              </a>

              <a
                href={emailHref}
                className="w-full bg-transparent hover:bg-white/5 text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3 border border-[#222222] hover:border-[#b91c1c]"
              >
                <Mail className="w-4 h-4 text-[#b91c1c]" />
                <span>Email Request</span>
              </a>
            </div>

            <div className="mt-5 text-[11px] text-gray-500 leading-relaxed">
              Tip: include your <span className="text-gray-300">name</span>,{' '}
              <span className="text-gray-300">experience level</span>, and which{' '}
              <span className="text-gray-300">cycle</span> you want.
            </div>
          </div>

          {/* Replacement for removed form: “How booking works” */}
          <div className="mt-8 p-6 bg-[#111111] border border-[#222222] rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-3">How booking works</p>

            <div className="space-y-4">
              {[
                { title: '1) Choose a cycle', desc: 'Pick one of the upcoming 3-week blocks shown on the right.' },
                {
                  title: '2) Message us to confirm availability',
                  desc: 'We’ll reply quickly and confirm whether there’s space (max 6).'
                },
                { title: '3) Secure your spot', desc: 'We’ll send payment details and your onboarding instructions.' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-9 h-9 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c] font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-white font-oswald uppercase tracking-widest text-sm">{step.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <p className="text-xs text-gray-500">Fastest: WhatsApp. Best for structured details: Email.</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="text-[#b91c1c] font-oswald uppercase tracking-widest text-xs font-bold flex items-center space-x-2"
              >
                <span>Start booking</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Cycle cards */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-oswald uppercase text-white">
              Upcoming <span className="text-[#b91c1c]">Cycles</span>
            </h3>
            <div className="hidden sm:flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-[0.25em] font-bold">
              <Users className="w-4 h-4 text-[#b91c1c]" />
              <span>Max 6 per cycle</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cycleOptions.map((c) => (
              <div
                key={c.id}
                className="bg-[#111111] border border-[#222222] rounded-sm p-6 hover:border-[#b91c1c] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{c.title}</p>
                    <p className="text-xl font-oswald uppercase text-white mt-2">{c.startLabel}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-[#b91c1c]/15 text-[#b91c1c] rounded-full">
                    {c.status}
                  </span>
                </div>

                <div className="mt-5 space-y-2 text-sm text-gray-300">
                  {c.weeks.map((w) => (
                    <div key={w} className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#b91c1c]" />
                      <span>{w} • 18:00–19:00</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-gray-400">{c.capacityText}</div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-10 bg-[#111111] border border-[#222222] rounded-sm p-7">
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-2xl font-oswald uppercase text-white">
                Pricing <span className="text-[#b91c1c]">Options</span>
              </h4>
              <BadgeEuro className="w-6 h-6 text-[#b91c1c]" />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {packageOptions.map((p) => (
                <div
                  key={p.id}
                  className="border border-[#222222] rounded-sm p-5 bg-black/30 hover:border-[#b91c1c] transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">{p.label}</p>

                  <p className="text-2xl font-oswald uppercase text-white mt-2">{p.priceLabel}</p>
                  <p className="text-sm text-white/90 mt-2 font-semibold">{p.headline}</p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">{p.subline}</p>

                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-5">
              Note: the single-session option is available, but the best experience comes from booking a cycle (or two cycles) so we can actually build progress.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ (expanded purpose, no form) */}
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left: FAQ */}
        <div>
          <h3 className="text-2xl font-oswald uppercase mb-6 text-white">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-[#222222] rounded-sm overflow-hidden bg-[#111111]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#1a1a1a] transition-colors text-left"
                >
                  <span className="font-bold text-sm tracking-wide text-white uppercase">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#b91c1c]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-black/40 border-t border-[#222222] text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#111111] border border-[#222222] rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-2">Booking advice</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              For fast confirmation, use WhatsApp. For longer notes or scheduling constraints, use email. We reply within 24 hours.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={emailHref}
                className="w-full bg-transparent hover:bg-white/5 text-white py-4 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3 border border-[#222222] hover:border-[#b91c1c]"
              >
                <Mail className="w-4 h-4 text-[#b91c1c]" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
