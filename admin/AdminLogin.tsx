
import React from 'react';
import { ArrowLeft, Lock, Mail } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack }) => {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-charcoal mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Menu</span>
        </button>

        <div className="mb-10 text-center">
          <div className="bg-amber w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="text-charcoal" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-charcoal">Admin Portal</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to manage your menu</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="email" 
                placeholder="admin@spiceroute.com"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all"
                defaultValue="admin@spiceroute.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-amber/50 transition-all"
                defaultValue="password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-amber focus:ring-amber" />
              <span className="text-xs text-gray-500">Remember me</span>
            </div>
            <button type="button" className="text-xs font-bold text-amber hover:underline">Forgot Password?</button>
          </div>

          <button 
            type="submit"
            className="w-full bg-amber text-charcoal py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-amber/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
      
      <p className="mt-8 text-cream/30 text-xs">Amber & Charcoal Menu System v1.0.4</p>
    </div>
  );
};

export default AdminLogin;
