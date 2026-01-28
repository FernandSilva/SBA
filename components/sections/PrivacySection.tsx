
import React from 'react';

const PrivacySection: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-oswald uppercase mb-4 text-[#0a0a0a]">Privacy <span className="text-[#b91c1c]">Policy</span></h1>
        <p className="text-gray-400 font-oswald uppercase tracking-widest text-sm mb-12 border-b border-[#e5e5e5] pb-6">Information Protection & Usage</p>
        
        <div className="space-y-12 text-gray-600 text-lg leading-relaxed">
          <section>
            <p>
              Silva Boxing Academy (SBA) respects the privacy of its members and visitors. This Privacy Policy outlines how personal information is collected, used, and protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Information We Collect</h2>
            <p className="mb-4">SBA may collect limited personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm uppercase tracking-widest font-bold text-gray-500">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Training preferences or experience level</li>
            </ul>
            <p className="mt-4">This information is collected solely for the purpose of communication, scheduling, and administration of training sessions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Use of Information</h2>
            <p className="mb-4">Personal information is used only to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm uppercase tracking-widest font-bold text-gray-500">
              <li>Manage bookings and participation</li>
              <li>Communicate training updates</li>
              <li>Respond to enquiries</li>
              <li>Administer membership or camp participation</li>
            </ul>
            <p className="mt-4 font-bold text-[#b91c1c]">SBA does not sell, rent, or share personal information with third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Data Protection</h2>
            <p>
              SBA takes reasonable steps to protect personal information from unauthorised access, misuse, or disclosure. Access to stored information is limited to authorised individuals only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Third Parties</h2>
            <p>
              SBA operates as a private club and does not engage in marketing data sharing, advertising networks, or third-party data resale. Any external services used (such as website hosting or email communication) are selected with privacy and data protection in mind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-oswald uppercase text-[#0a0a0a] mb-4">Your Rights</h2>
            <p className="mb-4">Members may request:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm uppercase tracking-widest font-bold text-gray-500">
              <li>Access to their personal data</li>
              <li>Correction of inaccurate information</li>
              <li>Removal of their personal data from SBA records</li>
            </ul>
            <p className="mt-4">Requests can be made by contacting SBA directly via the contact form or provided email.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
