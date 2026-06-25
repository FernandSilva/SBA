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
  const bookingOptions = useMemo(
    () => [
      {
        id: 'group-classes',
        title: 'Group Classes',
        startLabel: 'Dates to be confirmed',
        details: [
          'Group-class schedule will be announced once the next intake is confirmed',
          'Register your interest now to get priority when dates are released',
          'Designed for structured group coaching in Barcelona'
        ],
        schedule: [
          'One-hour sessions',
          'Timetable released on confirmation',
          'Barcelona location shared after booking'
        ],
        status: 'Taking bookings',
        capacityText: 'Max 8 participants'
      },
      {
        id: 'private-sessions',
        title: 'Private Sessions',
        startLabel: 'Available now',
        details: [
          'Private-session bookings are open immediately',
          'Sessions can be arranged around client availability',
          'Ideal for focused technical work, fitness, and padwork'
        ],
        schedule: [
          'One-hour sessions',
          'Booked directly by request',
          'Flexible scheduling in Barcelona'
        ],
        status: 'Available now',
        capacityText: '1-to-1 coaching'
      }
    ],
    []
  );

  const WHATSAPP_NUMBER_DISPLAY = '+49 1520 4219 720';
  // IMPORTANT: wa.me expects digits only, no +, spaces, or parentheses
  const WHATSAPP_NUMBER_E164 = '4915204219720';

  const WHATSAPP_TEXT = encodeURIComponent("Hi SBA — I'd like to book a session. Can you tell me about private-session availability and upcoming group classes?");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WHATSAPP_TEXT}`;
  const emailHref = `mailto:silvaboxingacademy@gmail.com?subject=${encodeURIComponent('SBA Booking Request')}`;

  // ✅ Status color coding:
  // - Fully booked => RED
  // - Limited spaces => YELLOW
  // - Taking bookings => GREEN
  const getStatusBadgeClass = (status: string) => {
    const s = status.toLowerCase();

    if (s.includes('fully')) {
      return 'bg-red-500/15 text-red-400 border border-red-500/25';
    }

    if (s.includes('limited')) {
      return 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25';
    }

    if (s.includes('taking') || s.includes('available')) {
      return 'bg-green-500/15 text-green-400 border border-green-500/25';
    }

    // fallback
    return 'bg-gray-500/15 text-gray-300 border border-gray-500/25';
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-24 max-w-7xl mx-auto px-4 bg-[#0a0a0a]">
      {/* Header / Purpose */}
      <div className="mb-14">
        <h2 className="text-5xl font-oswald uppercase mb-4 text-white">
          Join <span className="text-[#b91c1c]">SBA</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          SBA is now taking bookings in Barcelona for both{' '}
          <span className="text-white font-semibold">private sessions</span> and{' '}
          <span className="text-white font-semibold">upcoming group classes</span>. Private sessions can be arranged directly,
          while the next group-class schedule will be confirmed once dates are finalised.
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
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-medium break-words hover:text-[#b91c1c] transition-colors"
                    aria-label="Open SBA WhatsApp chat"
                  >
                    SBA WhatsApp Line
                  </a>
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
              <span className="text-gray-300">experience level</span>, and whether you want{' '}
              <span className="text-gray-300">private sessions or group classes</span>.
            </div>
          </div>

          {/* How booking works */}
          <div className="mt-8 p-6 bg-[#111111] border border-[#222222] rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-3">How booking works</p>

            <div className="space-y-4">
              {[
                { title: '1) Choose your session type', desc: 'Let us know whether you want private coaching or the next group-class intake.' },
                {
                  title: '2) Message us to confirm availability',
                  desc: 'We’ll reply quickly with private-session options or group-class updates as soon as dates are confirmed.'
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
              <p className="text-xs text-gray-500">Fastest: WhatsApp. Best for longer booking notes: Email.</p>
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

        {/* Right: Booking cards */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-oswald uppercase text-white">
              Upcoming <span className="text-[#b91c1c]">Bookings</span>
            </h3>
            <div className="hidden sm:flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-[0.25em] font-bold">
              <Users className="w-4 h-4 text-[#b91c1c]" />
              <span>Barcelona-based coaching</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bookingOptions.map((c) => (
              <div
                key={c.id}
                className="bg-[#111111] border border-[#222222] rounded-sm p-6 md:p-8 hover:border-[#b91c1c] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{c.title}</p>
                    <p className="text-xl font-oswald uppercase text-white mt-2">{c.startLabel}</p>
                  </div>

                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${getStatusBadgeClass(
                      c.status
                    )}`}
                  >
                    {c.status}
                  </span>
                </div>

                <div className="mt-6 space-y-3 text-sm text-gray-300">
                  {c.details.map((detail) => (
                    <div key={detail} className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#b91c1c]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-sm bg-black/30 px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-3">Booking Notes</p>
                  <div className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-300">
                    {c.schedule.map((slot) => (
                      <div key={slot} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                        <span>{slot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-gray-400">{c.capacityText}</div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-10 bg-[#111111] border border-[#222222] rounded-sm p-7">
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-2xl font-oswald uppercase text-white">
                Pricing <span className="text-[#b91c1c]">Overview</span>
              </h4>
              <BadgeEuro className="w-6 h-6 text-[#b91c1c]" />
            </div>

            <div className="border border-[#222222] rounded-sm p-6 bg-black/30">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">Simple Session Rate</p>
              <p className="text-4xl font-oswald uppercase text-white mt-3">€10 per session</p>
              <p className="text-sm text-white/90 mt-3 font-semibold">One clear price for both private sessions and group classes.</p>
              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                Group classes are released when the next schedule is confirmed. Private sessions can be arranged directly based on availability in Barcelona.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="grid lg:grid-cols-2 gap-20">
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
