import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferCarousel from './components/OfferCarousel';
import ProductMarquee from './components/ProductMarquee';
import BrandsSection, { BRANDS as DEFAULT_BRANDS } from './components/BrandsSection';
import OperatorModal from './components/OperatorModal';
import { SHOP_INFO } from './data/defaultData';
import LoadingScreen from './components/LoadingScreen';
import ThemeDecorations from './components/ThemeDecorations';
import Footer from './components/Footer';
import { saveSlides, loadSlides } from './utils/db';

/* No default slides — operator adds real banners via Operator Portal */
const DEFAULT_SLIDES = [];

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

  /* Carousel slides — start with defaults, then load from IndexedDB on mount */
  const [slides, setSlides] = useState(DEFAULT_SLIDES);
  const [slidesReady, setSlidesReady] = useState(false);

  /* Load slides from IndexedDB on first mount */
  useEffect(() => {
    loadSlides().then((saved) => {
      if (Array.isArray(saved) && saved.length > 0) {
        setSlides(
          saved.map((s) => ({
            ...s,
            image: s.image || s.media || '',
            media: s.media || s.image || '',
            mediaType: s.mediaType || (s.image && typeof s.image === 'string' && s.image.endsWith('.mp4') ? 'video' : 'image'),
            active: s.active !== false,
          }))
        );
      }
      setSlidesReady(true);
    });
  }, []);

  /* Persist slides to IndexedDB whenever they change (after initial load) */
  useEffect(() => {
    if (!slidesReady) return; // don't overwrite DB with defaults before load finishes
    saveSlides(slides);
  }, [slides, slidesReady]);

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

            {/* Automatic Right-to-Left Product Showcase Ticker */}
            <ProductMarquee lang={lang} />

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
