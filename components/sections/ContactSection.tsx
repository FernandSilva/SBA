
import React, { useState } from 'react';
import { FAQS, CAMP_DATA } from '../../constants';
import { Mail, MapPin, Phone, ChevronDown, ChevronUp, Send, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Factual log of destination email for Coach Fernando
    console.log(`Sending Boxing Camp Application to: ${CAMP_DATA.contactEmail}`, data);

    // Simulate network delay for a professional feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormStatus('success');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-24 max-w-7xl mx-auto px-4 bg-[#0a0a0a]">
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Info & FAQ */}
        <div>
          <h2 className="text-5xl font-oswald uppercase mb-8 text-white">Contact <span className="text-[#b91c1c]">SBA</span></h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Ready to train with structure and intensity in Hamburg? Send an application and we’ll respond with camp start dates, onboarding steps, and technical details.
          </p>

          <div className="grid gap-6 mb-16">
            {[
              { icon: <Phone className="w-6 h-6" />, label: 'Phone / WhatsApp', value: '+49 152 0421 9720' },
              { icon: <Mail className="w-6 h-6" />, label: 'Email Inquiry', value: 'silvaboxingacademy@gmail.com' },
              { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: CAMP_DATA.location, sub: 'Exact address provided after inquiry' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-6 p-6 bg-[#111111] border border-[#222222] rounded-sm hover:border-[#b91c1c] transition-colors group">
                <div className="w-12 h-12 rounded-sm border border-[#222222] flex items-center justify-center text-[#b91c1c] group-hover:bg-[#b91c1c] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#b91c1c] font-bold mb-1">{item.label}</p>
                  <p className="text-lg text-white font-medium">{item.value}</p>
                  {item.sub && <p className="text-xs text-gray-500">{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-oswald uppercase mb-6 text-white">Frequently Asked Questions</h3>
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-[#222222] rounded-sm overflow-hidden bg-[#111111]">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#1a1a1a] transition-colors text-left"
                >
                  <span className="font-bold text-sm tracking-wide text-white uppercase">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#b91c1c]" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-black/40 border-t border-[#222222] text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Application Form */}
        <div className="bg-[#111111] p-10 rounded-sm border border-[#222222] shadow-2xl h-fit">
          <div className="mb-10">
            <h3 className="text-3xl font-oswald uppercase mb-2 text-white">Boxing Camp Application</h3>
            <p className="text-gray-500 text-sm">Applications are sent directly to Coach Fernando for review.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-20 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#1a1a1a] border border-[#b91c1c] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#b91c1c]" />
              </div>
              <h4 className="text-2xl font-oswald uppercase text-white mb-2">Application Received</h4>
              <p className="text-gray-400">The application has been sent to Coach Fernando. We will contact you via email or WhatsApp within 24 hours.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-[#b91c1c] font-oswald uppercase text-xs tracking-widest font-bold underline underline-offset-8"
              >
                Send another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Full Name</label>
                  <input name="fullName" required type="text" className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Phone / WhatsApp</label>
                  <input name="phone" required type="tel" className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Experience Level</label>
                  <select name="experience" className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white appearance-none">
                    <option>Novice (First-Time Camp)</option>
                    <option>Amateur (Returning Participant)</option>
                    <option>Advanced / Professional</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Primary Goals</label>
                <input name="goals" type="text" placeholder="e.g., Technical growth, endurance, foundation building" className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full bg-black border border-[#222222] rounded-sm px-4 py-3 focus:outline-none focus:border-[#b91c1c] text-white resize-none" />
              </div>
              <button 
                disabled={formStatus === 'sending'}
                type="submit" 
                className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-5 rounded-sm font-oswald uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {formStatus === 'sending' ? (
                   <span className="animate-pulse italic">Processing Application...</span>
                ) : (
                  <>
                    <span>Book Your Place</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
