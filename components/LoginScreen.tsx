
import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-[#e5e7eb] p-8 rounded-xl shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-[#b91c1c] rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl font-oswald font-bold italic tracking-tighter text-white">SBA</span>
          </div>
          <h1 className="text-3xl font-oswald uppercase tracking-widest text-[#0a0a0a]">Member Access</h1>
          <p className="text-gray-500 mt-2 text-sm text-center">Silva Boxing Academy — Training Registry</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Enter Your Full Name
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., John Doe"
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-4 py-3 text-[#0a0a0a] focus:outline-none focus:border-[#b91c1c] transition-colors"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-oswald uppercase tracking-widest py-4 rounded-lg font-bold transition-all transform hover:scale-[1.02]"
          >
            Enter Academy
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#f3f4f6] flex items-start space-x-3 text-xs text-gray-400">
          <ShieldAlert className="w-4 h-4 text-[#b91c1c] flex-shrink-0" />
          <p>By entering, you agree to uphold the SBA standards of discipline, respect, and technical commitment.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
