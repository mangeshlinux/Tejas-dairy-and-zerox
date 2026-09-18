import React from 'react';

export const FEATURED_PRODUCTS = [
  {
    id: 'amul_curd',
    name: 'Amul Masti Curd',
    image: '/products/amul_curd.png',
    category: 'Amul Dairy',
  },
  {
    id: 'pepsi_range',
    name: 'PepsiCo Soft Drinks',
    image: '/products/pepsi_range.jpg',
    category: 'Cold Drinks',
  },
  {
    id: 'diet_coke',
    name: 'Diet Coke Can',
    image: '/products/diet_coke.jpg',
    category: 'Soft Drinks',
  },
  {
    id: 'natural_amrakhand',
    name: 'Natural Real Mango Amrakhand',
    image: '/products/natural_amrakhand.png',
    category: 'Natural Dairy',
  },
  {
    id: 'natural_lassi',
    name: 'Natural Vanilla Lassi',
    image: '/products/natural_lassi.jpg',
    category: 'Fresh Lassi',
  },
  {
    id: 'amul_icecream',
    name: 'Amul TriCone Ice Cream',
    image: '/products/amul_icecream.jpg',
    category: 'Ice Creams',
  },
  {
    id: 'natural_milk_pouch',
    name: 'Natural Amrut Gold Milk',
    image: '/products/natural_milk_pouch.png',
    category: 'Fresh Milk',
  },
  {
    id: 'natural_ghee',
    name: 'Natural Pure Shuddha Ghee',
    image: '/products/natural_ghee.png',
    category: 'Pure Ghee',
  },
  {
    id: 'chakote_bakery',
    name: 'Chakote Bakery & Snacks',
    image: '/products/chakote_bakery.png',
    category: 'Bakery Specials',
  },
];

export default function ProductMarquee({ lang = 'en' }) {
  const isMr = lang === 'mr';
  // Duplicate array for seamless 360-degree infinite loop
  const marqueeItems = [...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS];

  return (
    <section className="w-full py-4 my-2 overflow-hidden" aria-label="Featured Product Showcase">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-amber-200/60">
          <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center gap-2">
            <span>✨</span>
            <span>{isMr ? 'लोकप्रिय उत्पादने' : 'Featured Product Collection'}</span>
          </h2>
          <span className="text-xs font-semibold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {isMr ? 'ताजी आवक' : 'Daily Fresh Stock'}
          </span>
        </div>

        {/* Marquee Wrapper - Seamlessly merged into page background */}
        <div className="relative w-full overflow-hidden group py-2">
          {/* Left edge fade matching page background */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FFF9F0] to-transparent z-10 pointer-events-none" />
          
          {/* Right edge fade matching page background */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FFF9F0] to-transparent z-10 pointer-events-none" />

          {/* Marquee track moving right-to-left */}
          <div className="flex items-center gap-5 sm:gap-8 animate-marquee-rtl group-hover:[animation-play-state:paused] w-max py-1">
            {marqueeItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex flex-col items-center shrink-0 p-2.5 rounded-2xl transition-all duration-300 hover:-translate-y-1 w-[150px] sm:w-[175px] cursor-default group/card"
              >
                {/* Product Image Container */}
                <div className="w-full h-28 sm:h-32 flex items-center justify-center p-2 rounded-xl bg-white/70 border border-amber-200/40 shadow-xs group-hover/card:shadow-md group-hover/card:border-amber-300 transition-all duration-300 mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Name Only */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 text-center leading-tight line-clamp-1 group-hover/card:text-amber-600 transition-colors">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
