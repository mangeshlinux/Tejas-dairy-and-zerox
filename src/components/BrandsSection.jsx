import React, { useState } from 'react';
import ColdDrinkModal from './ColdDrinkModal';
import { BRANDS, BRAND_EMOJI } from '../data/brands';
import { COLD_DRINK_BRANDS } from '../data/coldDrinks';

/* ============================================================
   BrandsSection — official brand partners grid.
   Clickable cold-drink / ice-cream brands open the receipt modal.
   ============================================================ */

export default function BrandsSection({ lang = 'en' }) {
  const isMr = lang === 'mr';
  const [activeBrand, setActiveBrand] = useState(null);

  const handleBrandClick = (brand) => {
    if (!brand.coldDrinkId) return;
    const found = COLD_DRINK_BRANDS.find((b) => b.id === brand.coldDrinkId);
    if (found) setActiveBrand(found);
  };

  const renderBrandCard = (brand) => {
    const isClickable = !!brand.coldDrinkId;
    const emoji = BRAND_EMOJI[brand.id] || '🥤';

    return (
      <div
        key={brand.id}
        className={`brands-card ${isClickable ? 'brands-card--clickable' : ''}`}
        onClick={() => handleBrandClick(brand)}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={isClickable
          ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleBrandClick(brand); }
          : undefined}
        aria-label={isClickable ? `View ${brand.name} products` : brand.name}
      >
        {/* Logo or emoji */}
        <div className="brands-card-logo-wrap">
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className="brands-card-logo-img"
              loading="lazy"
            />
          ) : (
            <span className="brands-card-logo-emoji">{emoji}</span>
          )}
        </div>

        {/* Name */}
        <h3 className="brands-card-name">{brand.name}</h3>

        {/* Description */}
        <p className="brands-card-desc">
          {isMr ? (brand.descMr || brand.descEn) : (brand.descEn || brand.descMr)}
        </p>

        {/* Tap hint arrow — visible on hover for clickable cards */}
        {isClickable && (
          <div className="brands-card-tap-hint">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span>View list</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 my-1"
        aria-label="Brand Partners"
      >
        <div className="border-y border-amber-200/60 py-5 px-4 sm:px-8 bg-white/40 rounded-2xl backdrop-blur-xs">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-5">
            <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900">
              {isMr ? 'आमचे अधिकृत ब्रँड पार्टनर्स' : 'Our Official Brand Partners'}
            </h2>
            <p className="text-[11px] sm:text-xs font-semibold text-amber-700 uppercase tracking-widest">
              {isMr
                ? '१००% ताजे व ओरिजिनल प्रॉडक्ट्सची खात्री'
                : '100% Genuine, Fresh & Authentic Products Guaranteed'}
            </p>
            <p className="text-slate-500 text-[11px] sm:text-xs pt-0.5">
              {isMr
                ? 'तेजेश डेअरी & पार्लरवर दररोज मिळणारे ब्रँडेड प्रॉडक्ट्स. 🥤 ब्रँड वर क्लिक करून यादी पाहा.'
                : 'Daily fresh stock from authorized distributors. Click a brand to view its full product list.'}
            </p>
          </div>

          {/* Brand grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 items-start justify-items-center">
            {BRANDS.map(renderBrandCard)}
          </div>

        </div>
      </section>

      {/* Product receipt modal */}
      <ColdDrinkModal
        brand={activeBrand}
        onClose={() => setActiveBrand(null)}
      />
    </>
  );
}
