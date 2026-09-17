import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferCarousel from './components/OfferCarousel';
import BrandsSection from './components/BrandsSection';
import OperatorModal from './components/OperatorModal';
import { SHOP_INFO } from './data/defaultData';
import LoadingScreen from './components/LoadingScreen';
import ThemeDecorations from './components/ThemeDecorations';
import Footer from './components/Footer';

/* Default slides — used if nothing is saved in localStorage */
const DEFAULT_SLIDES = [
  { image: '/offer_icecream.jpg', title: 'Fresh Ice Cream Combo Offer', badge: '20% OFF' },
  { image: '/offer_xerox.jpg', title: 'Xerox & Printing Services', badge: '₹2 / Page' },
  { image: '/offer_milk.jpg', title: 'Farm-Fresh Amul Milk – Daily', badge: '₹30 Only' },
  { image: '/offer_lamination.jpg', title: 'Lamination & Binding Services', badge: 'Flat 15% OFF' },
  { image: '/offer_lassi.jpg', title: 'Lassi & Buttermilk Specials', badge: 'Buy 2 Get 1' },
];

export default function App() {
  const [lang, setLang] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const [isOperatorOpen, setIsOperatorOpen] = useState(false);

  /* Website theme — persists in localStorage */
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tejesh_theme') || 'default';
    } catch { return 'default'; }
  });

  useEffect(() => {
    localStorage.setItem('tejesh_theme', theme);
  }, [theme]);

  /* Sparkle theme density level ('low' | 'medium' | 'high') — persists in localStorage */
  const [sparkleDensity, setSparkleDensity] = useState(() => {
    try {
      return localStorage.getItem('tejesh_sparkle_density') || 'medium';
    } catch { return 'medium'; }
  });

  useEffect(() => {
    localStorage.setItem('tejesh_sparkle_density', sparkleDensity);
  }, [sparkleDensity]);

  /* Carousel slides — load from localStorage or use defaults */
  const [slides, setSlides] = useState(() => {
    try {
      const saved = localStorage.getItem('tejesh_offer_slides');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((s) => ({
            ...s,
            image: s.image || s.media || '',
            media: s.media || s.image || '',
            mediaType: s.mediaType || (s.image && typeof s.image === 'string' && s.image.endsWith('.mp4') ? 'video' : 'image'),
          }));
        }
      }
    } catch (e) {
      console.error('Error loading slides from localStorage', e);
    }
    return DEFAULT_SLIDES;
  });

  /* Persist slides to localStorage on change */
  useEffect(() => {
    localStorage.setItem('tejesh_offer_slides', JSON.stringify(slides));
  }, [slides]);

  /* Loading timer */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      {!isLoading && (
        <div className="min-h-screen bg-[#FFF9F0] text-slate-900 font-sans flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
          
          {/* Theme decorations layer */}
          <ThemeDecorations theme={theme} density={sparkleDensity} />

          {/* Header Bar */}
          <Header lang={lang} setLang={setLang} theme={theme} />

          {/* Main Single Page Content */}
          <main className="flex-1 space-y-8 py-8 relative z-10">
            
            {/* Hero Section */}
            <Hero lang={lang} />

            {/* Promotional Offers Carousel */}
            <OfferCarousel slides={slides} />

            {/* Featured Brands Section */}
            <BrandsSection lang={lang} />
          </main>

          {/* Footer with Operator button */}
          <Footer onOpenOperator={() => setIsOperatorOpen(true)} />

          {/* Operator Portal Modal */}
          <OperatorModal
            isOpen={isOperatorOpen}
            onClose={() => setIsOperatorOpen(false)}
            slides={slides}
            setSlides={setSlides}
            theme={theme}
            setTheme={setTheme}
            sparkleDensity={sparkleDensity}
            setSparkleDensity={setSparkleDensity}
          />

        </div>
      )}
    </>
  );
}
