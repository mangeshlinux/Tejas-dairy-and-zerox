import React, { useState, useEffect, useCallback, useRef } from 'react';

/* Auto-rotation interval in milliseconds */
const AUTO_PLAY_INTERVAL = 4500;

export default function OfferCarousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  /* Filter only active slides */
  const activeSlides = slides.filter((s) => s.active !== false);
  const total = activeSlides.length;

  /* Reset current slide if slides array shrinks */
  useEffect(() => {
    if (current >= total && total > 0) setCurrent(0);
  }, [total, current]);

  /* Go to a specific slide */
  const goTo = useCallback(
    (index, dir = 'next') => {
      if (isAnimating || total === 0) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(((index % total) + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [total, isAnimating]
  );

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  /* Stable ref so the interval always calls the latest `next` without restarting */
  const nextRef = useRef(null);
  nextRef.current = next;

  /* Auto-rotation timer — only resets when paused or slide count changes */
  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setInterval(() => nextRef.current(), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused, total]);

  if (total === 0) {
    return (
      <section className="offer-carousel empty-carousel max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center p-12 bg-amber-50/50 rounded-3xl border border-amber-200/80 text-center">
          <span className="text-4xl mb-2">🏷️</span>
          <p className="text-amber-900 font-bold text-lg">Special Offers & Banners Coming Soon!</p>
          <p className="text-amber-700/80 text-sm mt-1">Check back daily for fresh discounts at Tejesh Dairy & Parlour.</p>
        </div>
      </section>
    );
  }

  /* Get badge color gradient */
  const getBadgeClass = (style) => {
    switch (style) {
      case 'red':
        return 'badge-style-red';
      case 'emerald':
        return 'badge-style-emerald';
      case 'cyan':
        return 'badge-style-cyan';
      case 'purple':
        return 'badge-style-purple';
      case 'gold':
      default:
        return 'badge-style-gold';
    }
  };

  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Promotional Billboard Banners">
      <div
        className="offer-carousel offer-billboard shadow-2xl rounded-3xl overflow-hidden relative group border border-amber-300/40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides viewport */}
        <div className="carousel-viewport">
          {activeSlides.map((slide, i) => {
            const mediaSrc = slide.media || slide.image || '';
            const isVideo =
              slide.mediaType === 'video' ||
              (typeof mediaSrc === 'string' &&
                (mediaSrc.startsWith('data:video') || mediaSrc.match(/\.(mp4|webm|ogg)$/i)));

            return (
              <div
                key={i}
                className={`carousel-slide ${i === current ? 'active' : ''} ${
                  i === current ? `slide-${direction}` : ''
                }`}
                aria-hidden={i !== current}
              >
                {/* Media background (Image or Video) */}
                {isVideo ? (
                  <video
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="carousel-slide-img"
                  />
                ) : (
                  <img
                    src={mediaSrc}
                    alt={slide.title}
                    className="carousel-slide-img"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                )}

                {/* Gradient dark overlay */}
                <div className="carousel-overlay bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Offer title caption */}
                <div className="carousel-caption p-6 sm:p-8">
                  <h3 className="text-xl sm:text-3xl font-black text-white leading-tight font-display tracking-tight drop-shadow-md">
                    {slide.title}
                  </h3>
                </div>

                {/* Offer Discount badge */}
                {slide.badge && (
                  <div className={`carousel-badge ${getBadgeClass(slide.badgeStyle)}`}>
                    <span>{slide.badge}</span>
                    <div className="badge-shine" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button className="carousel-arrow carousel-arrow--left" onClick={prev} aria-label="Previous slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="carousel-arrow carousel-arrow--right" onClick={next} aria-label="Previous slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {total > 1 && (
          <div className="carousel-dots">
            {activeSlides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
