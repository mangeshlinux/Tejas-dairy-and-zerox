import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { SHOP_INFO } from '../data/defaultData';

export default function LanguageSelection({ onSelectLanguage }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 z-40 relative">
      <div className="max-w-md w-full bg-white border border-slate-200 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-1 shadow-lg mb-6 flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
            <Globe className="w-10 h-10 text-amber-500" />
          </div>
        </div>

        <h1 className="text-3xl font-black font-display text-slate-900 mb-2">Welcome</h1>
        <p className="text-slate-500 mb-8 font-mono text-sm">Please select your preferred language to continue</p>

        <div className="w-full space-y-4">
          <button
            onClick={() => onSelectLanguage('en')}
            className="w-full group relative flex items-center justify-between p-4 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 rounded-xl transition-all duration-300"
          >
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg text-slate-900 font-display">English</span>
              <span className="text-xs text-slate-500 font-mono">Continue in English</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </button>

          <button
            onClick={() => onSelectLanguage('mr')}
            className="w-full group relative flex items-center justify-between p-4 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 rounded-xl transition-all duration-300"
          >
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg text-slate-900 font-marathi">मराठी</span>
              <span className="text-xs text-slate-500 font-mono">मराठीमध्ये सुरू ठेवा</span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </div>
  );
}
