
import React from 'react';

const ConductSection: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-oswald uppercase mb-4 text-[#0a0a0a]">Member Conduct & <span className="text-[#b91c1c]">Club Guidelines</span></h1>
        <p className="text-gray-400 font-oswald uppercase tracking-widest text-sm mb-12 border-b border-[#e5e5e5] pb-6">Standards of Discipline & Respect</p>
        
        <div className="space-y-12 text-gray-600 text-lg leading-relaxed">
          <section>
            <p className="mb-6">
              Silva Boxing Academy (SBA) is a private boxing training club built on respect, discipline, and structured coaching. All members, participants, and visitors are expected to conduct themselves in a manner that supports a safe, focused, and professional training environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Respect & Behaviour</h2>
            <p>
              All participants must treat coaches, fellow members, and venue staff with respect at all times. Disruptive, aggressive, or disrespectful behaviour will not be tolerated and may result in removal from a session or termination of participation without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Safety & Training Environment</h2>
            <p>
              Boxing is a physically demanding activity. Members are expected to follow all coaching instructions, safety guidelines, and session rules. Ignoring instructions or engaging in unsafe behaviour places both the individual and others at risk.
            </p>
            <p className="mt-4">
              SBA reserves the right to refuse participation to any individual who is deemed unfit to train safely or who poses a risk to others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Personal Responsibility</h2>
            <p>
              Members are responsible for ensuring they are physically fit to participate in boxing training. This includes disclosing any injuries, medical conditions, or limitations prior to training.
            </p>
            <p className="mt-4 italic font-bold text-[#0a0a0a]">
              Participation in SBA sessions is entirely voluntary and undertaken at the individual’s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Equipment & Facilities</h2>
            <p>
              Members are expected to respect all equipment and facilities used during training. Damage caused through negligence or misuse may result in liability for repair or replacement.
            </p>
          </section>

          <section className="bg-[#f9fafb] p-8 border-l-4 border-[#b91c1c]">
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Attendance & Conduct Enforcement</h2>
            <p className="mb-4">SBA reserves the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm uppercase tracking-widest font-bold text-gray-500">
              <li>Modify training rules</li>
              <li>Enforce conduct standards</li>
              <li>Remove individuals from sessions</li>
              <li>Terminate participation for repeated or serious breaches</li>
            </ul>
            <p className="mt-6 text-sm italic">These measures exist to maintain a safe and productive training environment for all members.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConductSection;
