import React, { useState, useEffect } from 'react';

const WORDS_EN = ['Xerox', 'Dairy', 'Milk', 'Ice Cream'];
const WORDS_MR = ['झेरॉक्स', 'डेअरी', 'दूध', 'आईस्क्रीम'];

export default function Hero({ lang }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS_EN.length);
        setAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 px-4 bg-transparent">
      <div className="w-full relative z-10 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left — Text content */}
        <div className="flex-1 text-left space-y-6 min-w-0">
          <div className="space-y-4 transform transition-all hover:scale-[1.02] duration-500 origin-left">
            {/* English heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                Tejesh{' '}
              </span>
              <span className="hero-word-wrapper">
                <span
                  className={`hero-word text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 ${
                    animating ? 'hero-word-exit' : 'hero-word-enter'
                  }`}
                >
                  {WORDS_EN[index]}
                </span>
              </span>
            </h2>

            {/* Marathi heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-marathi tracking-tight leading-tight">
              <span className="text-slate-800">तेजेश </span>
              <span className="hero-word-wrapper hero-word-wrapper--mr">
                <span
                  className={`hero-word text-amber-600 ${
                    animating ? 'hero-word-exit' : 'hero-word-enter'
                  }`}
                >
                  {WORDS_MR[index]}
                </span>
              </span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Your one-stop shop for Amul ice cream, fresh milk, paneer, curd, lassi &amp; all dairy products. We also provide high-speed xerox, lamination, binding &amp; online government/college form filling services.
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-marathi">
            अमूलचे आईस्क्रीम, ताजे दूध, पनीर, दही, लस्सी आणि सर्व दुग्धजन्य पदार्थ आमच्याकडे उपलब्ध आहेत. तसेच हाय-स्पीड झेरॉक्स, लॅमिनेशन, बाइंडिंग आणि सर्व ऑनलाइन शासकीय/कॉलेज फॉर्म्स भरून मिळतील.
          </p>
        </div>

        {/* Right — Shop image */}
        <div className="hero-image-wrapper flex-shrink-0 w-full lg:w-[420px]">
          <div className="hero-image-frame">
            <img
              src="/shop_photo_1.png"
              alt="Tejesh Xerox & Dairy Shop"
              className="hero-image"
            />
            {/* Decorative badge */}
            <div className="hero-image-badge">
              <span>📍 Killari</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
