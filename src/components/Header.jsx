import React from 'react';
import { SHOP_INFO } from '../data/defaultData';

export default function Header({ lang, setLang, onOpenOperator }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/30 shadow-2xl text-white">
      
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-start gap-4">
        {/* Brand Details */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="Tejesh Xerox and Dairy Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-md border-2 border-amber-400 object-cover" 
          />

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight text-white leading-tight">
              {SHOP_INFO.nameEn}
            </h1>
          </div>
        </div>
      </div>

    </header>
  );
}
