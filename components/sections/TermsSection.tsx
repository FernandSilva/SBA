
import React from 'react';

const TermsSection: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-oswald uppercase mb-4 text-[#0a0a0a]">Terms, Conditions & <span className="text-[#b91c1c]">Disclaimer</span></h1>
        <p className="text-gray-400 font-oswald uppercase tracking-widest text-sm mb-12 border-b border-[#e5e5e5] pb-6">Participation Agreement & Liability</p>
        
        <div className="space-y-12 text-gray-600 text-lg leading-relaxed">
          <section>
            <p className="font-bold text-[#0a0a0a]">
              By participating in any training session, camp, or activity organised by Silva Boxing Academy (SBA), you agree to the following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Nature of the Club</h2>
            <p>
              SBA is a private boxing training club and is not a registered public gym, professional boxing federation, or medical facility. Training is recreational and educational in nature.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Assumption of Risk</h2>
            <p>
              Boxing and physical training carry inherent risks, including but not limited to injury, strain, or physical discomfort. All participants acknowledge that they take part entirely at their own risk.
            </p>
          </section>

          <section className="bg-red-50 p-8 border-l-4 border-[#b91c1c]">
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law, SBA, its coaches, organisers, and venue partners shall not be held liable for:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm uppercase tracking-widest font-bold text-gray-500">
              <li>Injuries sustained during training</li>
              <li>Loss or damage to personal property</li>
              <li>Accidents occurring before, during, or after sessions</li>
            </ul>
            <p className="mt-6 text-sm italic">Participants are responsible for their own health, safety, and insurance coverage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Medical Disclaimer</h2>
            <p>
              SBA does not provide medical advice or supervision. Participants are encouraged to consult a medical professional before engaging in high-intensity physical training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Changes & Updates</h2>
            <p>
              SBA reserves the right to update training structures, schedules, pricing, and policies at any time without prior notice. Continued participation constitutes acceptance of any updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
