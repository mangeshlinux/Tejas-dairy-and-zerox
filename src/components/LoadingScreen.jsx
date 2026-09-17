import React from 'react';
import { Loader2 } from 'lucide-react';
import { SHOP_INFO } from '../data/defaultData';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-1 shadow-2xl animate-pulse">
          <img src="/logo.jpg" alt="Tejesh Logo" className="w-full h-full rounded-[20px] object-cover" />
        </div>
        <div className="flex flex-col items-center">
           <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight">
             {SHOP_INFO.nameEn}
           </h1>
           <p className="text-slate-500 font-mono mt-2 text-sm">Loading amazing experiences...</p>
        </div>
        <Loader2 className="w-8 h-8 text-amber-500 animate-spin mt-4" />
      </div>
    </div>
  );
}
