import React from 'react';
import { SHOP_INFO } from '../data/defaultData';

export default function Header({ lang, setLang, onOpenOperator }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/30 shadow-2xl text-white">
      
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 flex items-center justify-start gap-4">
        {/* Brand Details */}
        <div className="flex items-center gap-4">
          <img 
            src="/logo.jpg" 
            alt="Tejesh Xerox and Dairy Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg border-4 border-amber-400 object-cover" 
          />

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white leading-tight">
              {SHOP_INFO.nameEn}
            </h1>
          </div>
        </div>
      </div>

    </header>
  );
}
