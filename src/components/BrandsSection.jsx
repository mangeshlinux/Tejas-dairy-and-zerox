import React from 'react';

export const BRANDS = [
  {
    id: 'amul',
    name: 'Amul',
    descEn: 'Ice Cream, Milk & Dairy',
    descMr: 'आईस्क्रीम, दूध व दुग्धजन्य पदार्थ',
    logo: '/brands/amul.png',
  },
  {
    id: 'natural_milk',
    name: 'Natural Milk',
    descEn: 'Fresh & Pure Farm Milk',
    descMr: 'ताजे व सकस नॅचरल दूध',
    logo: '/brands/natural_milk.png',
  },
  {
    id: 'cocacola',
    name: 'Coca-Cola',
    descEn: 'Chilled Soft Drinks & Refreshments',
    descMr: 'थंडगार सॉफ्ट ड्रिंक्स व कोल्ड ड्रिंक्स',
    logo: '/brands/cocacola.png',
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    descEn: 'Soft Drinks & Juices',
    descMr: 'सॉफ्ट ड्रिंक्स व ज्युस',
    logo: '/brands/pepsi.png',
  },
  {
    id: 'sprite',
    name: 'Sprite',
    descEn: 'Lemon-Lime Refreshing Drink',
    descMr: 'थंडगार लेमन-लाईम सॉफ्ट ड्रिंक',
    logo: '/brands/sprite.png',
  },
  {
    id: 'redbull',
    name: 'Red Bull',
    descEn: 'Energy Drink & Vitalizer',
    descMr: 'एनर्जी ड्रिंक व व्हिटॅलाईझर',
    logo: '/brands/redbull.png',
  },
  {
    id: 'monster',
    name: 'Monster Energy',
    descEn: 'Chilled Energy Drink',
    descMr: 'थंडगार एनर्जी ड्रिंक',
    logo: '/brands/monster.png',
  },
  {
    id: 'sting',
    name: 'Sting Energy',
    descEn: 'Power Energy Refreshment',
    descMr: 'स्टिंग एनर्जी ड्रिंक',
    logo: '/brands/sting.png',
  },
  {
    id: 'chakote',
    name: 'Chakote Group',
    descEn: 'Bakery & Snacks Specials',
    descMr: 'बेकरी व स्नॅक्स प्रॉडक्ट्स',
    logo: '/brands/chakote.png',
  },
];

export default function BrandsSection({ lang = 'en' }) {
  const isMr = lang === 'mr';
  const displayBrands = BRANDS;

  // Split into 4 on top row, 5 on bottom row if 9 brands total
  const isNineBrands = displayBrands.length === 9;
  const topRow = isNineBrands ? displayBrands.slice(0, 4) : [];
  const bottomRow = isNineBrands ? displayBrands.slice(4) : [];

  const renderBrandCard = (brand) => (
    <div
      key={brand.id || brand.name}
      className="flex flex-col items-center text-center group cursor-default transition-all duration-300 w-full py-1"
    >
      {/* Plain Logo Container */}
      <div className="h-12 sm:h-14 w-full flex items-center justify-center p-1 mb-1">
        <img
          src={brand.logo}
          alt={`${brand.name} Logo`}
          className="max-h-full max-w-[115px] sm:max-w-[135px] object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
          loading="lazy"
        />
      </div>

      {/* Brand Name & Subtext */}
      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
        {brand.name}
      </h3>
      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-sans line-clamp-1">
        {isMr ? (brand.descMr || brand.descEn) : (brand.descEn || brand.descMr)}
      </p>
    </div>
  );

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 my-1" aria-label="Brand Partners">
      {/* Compact container to prevent covering excess vertical space */}
      <div className="border-y border-amber-200/60 py-5 px-4 sm:px-8 bg-white/40 rounded-2xl backdrop-blur-xs">
        
        {/* Centered Plain Bold Text & Guarantee */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-5">
          <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900">
            {isMr ? 'आमचे अधिकृत ब्रँड पार्टनर्स' : 'Our Official Brand Partners'}
          </h2>
          <p className="text-[11px] sm:text-xs font-semibold text-amber-700 uppercase tracking-widest">
            {isMr ? '१००% ताजे व ओरिजिनल प्रॉडक्ट्सची खात्री' : '100% Genuine, Fresh & Authentic Products Guaranteed'}
          </p>
          <p className="text-slate-500 text-[11px] sm:text-xs pt-0.5">
            {isMr
              ? 'तेजेश डेअरी & पार्लरवर दररोज मिळणारे कंपनी गॅरंटीड ब्रँडेड प्रॉडक्ट्स.'
              : 'Daily fresh stock from authorized distributors available at Tejesh Dairy & Parlour.'}
          </p>
        </div>

        {/* 4 Brands on First Row, 5 Brands on Second Row */}
        {isNineBrands ? (
          <div className="space-y-4 sm:space-y-5">
            {/* First Row — 4 Brand Names */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto items-center justify-items-center">
              {topRow.map(renderBrandCard)}
            </div>

            {/* Second Row — 5 Brand Names */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full items-center justify-items-center">
              {bottomRow.map(renderBrandCard)}
            </div>
          </div>
        ) : (
          /* Fallback grid for custom brand counts */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
            {displayBrands.map(renderBrandCard)}
          </div>
        )}

      </div>
    </section>
  );
}



