import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OfferCarousel from "./components/OfferCarousel";
import ProductMarquee from "./components/ProductMarquee";
import BrandsSection from "./components/BrandsSection";
import OperatorModal from "./components/OperatorModal";
import LoadingScreen from "./components/LoadingScreen";
import ThemeDecorations from "./components/ThemeDecorations";
import Footer from "./components/Footer";
import { subscribeToSlides, subscribeToSettings } from "./utils/cloudStorage";

export default function App() {
  const [lang, setLang] = useState("en");
  const [isLoading, setIsLoading] = useState(true);
  const [isOperatorOpen, setIsOperatorOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("tejesh_theme") || "default"; }
    catch (_) { return "default"; }
  });

  const [sparkleDensity, setSparkleDensity] = useState(() => {
    try { return localStorage.getItem("tejesh_sparkle_density") || "medium"; }
    catch (_) { return "medium"; }
  });

  useEffect(() => {
    try { localStorage.setItem("tejesh_theme", theme); } catch (_) {}
  }, [theme]);

  useEffect(() => {
    try { localStorage.setItem("tejesh_sparkle_density", sparkleDensity); } catch (_) {}
  }, [sparkleDensity]);

  const [slides, setSlides] = useState(() => {
    try {
      const saved = localStorage.getItem("tejesh_slides");
      return saved ? JSON.parse(saved) : [];
    } catch (_) {
      return [];
    }
  });

  /* Real-time Firebase listeners - fires on all devices the moment anything changes */
  useEffect(() => {
    const unsub = subscribeToSlides((cloudSlides) => {
      setSlides(cloudSlides);
      try { localStorage.setItem("tejesh_slides", JSON.stringify(cloudSlides)); } catch (_) {}
    });
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = subscribeToSettings(({ theme: t, sparkleDensity: d }) => {
      if (t) setTheme(t);
      if (d) setSparkleDensity(d);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      {!isLoading && (
        <div className="min-h-screen bg-[#FFF9F0] text-slate-900 font-sans flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
          
          <ThemeDecorations theme={theme} density={sparkleDensity} />

          <Header lang={lang} setLang={setLang} theme={theme} />

          <main className="flex-1 space-y-6 sm:space-y-8 py-4 sm:py-8 relative z-10">
            
            <Hero lang={lang} />

            <OfferCarousel slides={slides} />

            <ProductMarquee lang={lang} />

            <BrandsSection lang={lang} />
          </main>

          <Footer onOpenOperator={() => setIsOperatorOpen(true)} />

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