import React, { useMemo, useState } from 'react';
import { FAQS, CAMP_DATA, IMAGES } from '../../constants';
import { Mail, MapPin, Phone, ChevronDown, ChevronUp, Send, Check, Calendar, Users, BadgeEuro } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // --- Booking model (UI only; still simulated submission) ---
  const cycleOptions = useMemo(
    () => [
      {
        id: 'cycle-1',
        title: 'Next Cycle',
        startLabel: 'Thu 15 Feb',
        weeks: ['Thu 15 Feb', 'Thu 22 Feb', 'Thu 29 Feb'],
        status: 'Taking bookings',
        capacityText: 'Max 10 participants'
      },
      {
        id: 'cycle-2',
        title: 'Following Cycle',
        startLabel: 'Thu 07 Mar',
        weeks: ['Thu 07 Mar', 'Thu 14 Mar', 'Thu 21 Mar'],
        status: 'Taking bookings',
        capacityText: 'Max 10 participants'
      },
      {
        id: 'cycle-3',
        title: 'Next After That',
        startLabel: 'Thu 28 Mar',
        weeks: ['Thu 28 Mar', 'Thu 04 Apr', 'Thu 11 Apr'],
        status: 'Taking bookings',
        capacityText: 'Max 10 participants'
      }
    ],
    []
  );

  const packageOptions = useMemo(
    () => [
      {
        id: 'p3',
        label: '3 Classes (1 Cycle)',
        priceLabel: '€50 total',
        note: 'Best for first-timers (recommended).'
      },
      {
        id: 'p6',
        label: '6 Classes (2 Cycles)',
        priceLabel: '€90 total',
        note: '€45 per cycle when booked upfront.'
      },
      {
        id: 'p9',
        label: '9 Classes (3 Cycles)',
        priceLabel: '€120 total',
        note: '€40 per cycle when booked upfront.'
      }
    ],
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Simulated submission (no backend yet)
    console.log(`SIGN-UP REQUEST (simulated) -> ${CAMP_DATA.contactEmail}`, data);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus('success');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-24 max-w-7xl mx-auto px-4 bg-[#0a0a0a]">
      {/* Header / Purpose */}
      <div className="mb-14">
        <h2 className="text-5xl font-oswald uppercase mb-4 text-white">
          Join <span className="text-[#b91c1c]">SBA</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          This is the sign-up page for SBA’s three-week cycles. Each cycle runs for <span className="text-white font-semibold">3 Thursdays</span>,
          with a maximum of <span className="text-white font-semibold">10 participants</span> per cycle. Book your place below or message us directly
          for a quick response.
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
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-2">Fastest way to book</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Want a quick human response? Message us on WhatsApp or email us and we’ll confirm availability and the next cycle within 24 hours.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Phone / WhatsApp</p>
                  <p className="text-white font-medium">+49 152 0421 9720</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Email</p>
                  <p className="text-white font-medium">silvaboxingacademy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#b91c1c] font-bold">Location</p>
                  <p className="text-white font-medium">{CAMP_DATA.location}</p>
                  <p className="text-xs text-gray-500">Exact address provided after inquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Cycle cards */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-oswald uppercase text-white">Upcoming <span className="text-[#b91c1c]">Cycles</span></h3>
            <div className="hidden sm:flex items-center space-x-2 text-gray-400 text-xs uppercase tracking-[0.25em] font-bold">
              <Users className="w-4 h-4 text-[#b91c1c]" />
              <span>Max 10 per cycle</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cycleOptions.map((c) => (
              <div key={c.id} className="bg-[#111111] border border-[#222222] rounded-sm p-6 hover:border-[#b91c1c] transition-colors">
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

                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-gray-400">
                  {c.capacityText}
                </div>
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
                <div key={p.id} className="border border-[#222222] rounded-sm p-5 bg-black/30">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">{p.label}</p>
                  <p className="text-2xl font-oswald uppercase text-white mt-2">{p.priceLabel}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-5">
              Beginners are recommended to start with a full 3-class cycle for proper progression.
            </p>
          </div>
        </div>
      </div>

      {/* Form + FAQ (kept in same theme, better flow) */}
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
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b91c1c] mb-2">Best booking advice</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If you want a fast confirmation, message WhatsApp first. If you prefer a structured sign-up and follow-up, use the form.
            </p>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="bg-[#111111] p-10 rounded-sm border border-[#222222] shadow-2xl h-fit">
          <div className="mb-10">
            <h3 className="text-3xl font-oswald uppercase mb-2 text-white">Cycle Booking Form</h3>
            <p className="text-gray-500 text-sm">
              This form is currently simulated (no email sending yet). It records the details and shows a confirmation screen.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#1a1a1a] border border-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#b91c1c]" />
              </div>
              <h4 className="text-2xl font-oswald uppercase text-white mb-2">Request Received</h4>
              <p className="text-gray-400">
                Your booking request has been recorded. We will confirm availability via email or WhatsApp within 24 hours.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-[#b91c1c] font-oswald uppercase text-xs tracking-widest font-bold underline underline-offset-8"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Booking selection */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">
                    Select Cycle
                  </label>
                  <select
                    name="cycle"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white appearance-none"
                    defaultValue={cycleOptions[0].id}
                    required
                  >
                    {cycleOptions.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} — starts {c.startLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">
                    Package
                  </label>
                  <select
                    name="package"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white appearance-none"
                    defaultValue={packageOptions[0].id}
                    required
                  >
                    {packageOptions.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label} — {p.priceLabel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Core details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Full Name</label>
                  <input
                    name="fullName"
                    required
                    type="text"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Email Address</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Experience Level</label>
                  <select
                    name="experience"
                    className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white appearance-none"
                    defaultValue="Novice"
                  >
                    <option value="Novice">Novice (First-Time Camp)</option>
                    <option value="Amateur">Amateur (Returning Participant)</option>
                    <option value="Advanced">Advanced / Professional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Primary Goals</label>
                <input
                  name="goals"
                  type="text"
                  placeholder="e.g., Technical growth, endurance, foundation building"
                  className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white resize-none"
                />
              </div>

              <button
                disabled={formStatus === 'sending'}
                type="submit"
                className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-5 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {formStatus === 'sending' ? (
                  <span className="animate-pulse italic">Processing...</span>
                ) : (
                  <>
                    <span>Request Booking</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-500 leading-relaxed">
                Prefer instant confirmation? WhatsApp is fastest. This form is best for structured follow-up and booking details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
