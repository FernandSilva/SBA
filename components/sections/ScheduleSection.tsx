
import React from 'react';
import { SCHEDULE_BREAKDOWN, CAMP_DATA } from '../../constants';
import { Clock, Info, Calendar } from 'lucide-react';

const ScheduleSection: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-7xl mx-auto px-4 py-24">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left Column: Context & Info */}
        <div className="lg:col-span-5">
          <h2 className="text-5xl font-oswald uppercase mb-8 text-[#0a0a0a]">Weekly Training <span className="text-[#b91c1c]">Format</span></h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
            <p>
              Each SBA session is carefully structured to balance technical learning, conditioning, and recovery. The goal is not to exhaust athletes randomly, but to develop boxing skill, endurance, and confidence progressively within a one-hour format.
            </p>
            <p>
              SBA operates as a structured group training session that takes place weekly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#e5e5e5] shadow-sm space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <Calendar className="w-6 h-6 text-[#b91c1c]" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Day</p>
                <p className="text-xl font-oswald uppercase text-[#0a0a0a]">{CAMP_DATA.day}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-[#b91c1c]" />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Time / Duration</p>
                <p className="text-xl font-oswald uppercase text-[#0a0a0a]">{CAMP_DATA.time} (60 min)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-lg border-l-4 border-[#b91c1c] flex items-start space-x-4">
            <Info className="w-6 h-6 text-[#b91c1c] flex-shrink-0" />
            <div>
              <h4 className="font-oswald uppercase text-[#0a0a0a] mb-2 tracking-widest text-sm">What to Bring</h4>
              <p className="text-gray-500 text-xs leading-relaxed italic">Hand wraps, mouthguard, water bottle, towel. Gloves available for first-timers (limited).</p>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Breakdown */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-oswald uppercase mb-12 tracking-widest text-[#0a0a0a] pb-4 border-b border-[#e5e5e5]">Session Breakdown</h3>
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#e5e5e5]" />
            
            {SCHEDULE_BREAKDOWN.map((step, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-[#b91c1c] bg-white flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full" />
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] shadow-sm hover:border-[#b91c1c] transition-colors group">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-oswald uppercase text-[#0a0a0a] group-hover:text-[#b91c1c] transition-colors">{step.title}</h4>
                    <span className="text-[#b91c1c] font-oswald uppercase text-xs tracking-widest font-bold px-3 py-1 bg-red-50 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
