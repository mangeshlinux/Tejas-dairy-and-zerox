import React from 'react';

export const BRANDS = [
  {
    id: 'amul',
    name: 'Amul',
    descEn: 'Ice Cream, Milk & Dairy Products',
    descMr: 'आईस्क्रीम, दूध व दुग्धजन्य पदार्थ',
    logo: '/brands/amul.png',
  },
  {
    id: 'gowardhan',
    name: 'Gowardhan',
    descEn: 'Pure Cow Milk, Ghee & Butter',
    descMr: 'शुद्ध गाईचे दूध, साजूक तूप व लोणी',
    logo: '/brands/gowardhan.png',
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
    descEn: 'Soft Drinks & Energy Drinks',
    descMr: 'सॉफ्ट ड्रिंक्स व एनर्जी ड्रिंक्स',
    logo: '/brands/pepsi.png',
  },
];

export default function BrandsSection({ lang = 'en' }) {
  const isMr = lang === 'mr';

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-4" aria-label="Brand Partners">
      {/* Subtle top & bottom border container for a clean corporate look */}
      <div className="border-y border-amber-200/60 py-10 px-4 sm:px-8 bg-white/40 rounded-2xl backdrop-blur-xs">
        
        {/* Centered Plain Bold Text & Guarantee */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-slate-900">
            {isMr ? 'आमचे अधिकृत ब्रँड पार्टनर्स' : 'Our Official Brand Partners'}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-widest">
            {isMr ? '१००% ताजे व ओरिजिनल प्रॉडक्ट्सची खात्री' : '100% Genuine, Fresh & Authentic Products Guaranteed'}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm pt-1">
            {isMr
              ? 'तेजेश डेअरी & पार्लरवर दररोज मिळणारे कंपनी गॅरंटीड ब्रँडेड प्रॉडक्ट्स.'
              : 'Daily fresh stock from authorized distributors available at Tejesh Dairy & Parlour.'}
          </p>
        </div>

        {/* Plain Brand Logos & Names — No Widgets / No Heavy Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-center justify-items-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center text-center group cursor-default transition-all duration-300"
            >
              {/* Plain Logo — Clean image with smooth hover scale */}
              <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2 mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="max-h-full max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Plain Brand Name & Subtext */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-sans">
                {isMr ? brand.descMr : brand.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


