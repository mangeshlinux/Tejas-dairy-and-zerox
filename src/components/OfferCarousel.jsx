import React, { useState, useEffect, useCallback, useRef } from 'react';

/* Auto-rotation interval in milliseconds */
const AUTO_PLAY_INTERVAL = 4000;

export default function OfferCarousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const total = slides.length;

  /* Reset current slide if slides array shrinks */
  useEffect(() => {
    if (current >= total && total > 0) setCurrent(0);
  }, [total, current]);

  /* Go to a specific slide */
  const goTo = useCallback(
    (index, dir = 'next') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(((index % total) + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [total, isAnimating]
  );

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  /* Auto-rotation timer */
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused, next]);

  if (total === 0) {
    return (
      <section className="offer-carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <p style={{ color: '#94a3b8', fontWeight: 600 }}>No offers available right now.</p>
      </section>
    );
  }

  return (
    <section
      className="offer-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Offers"
    >
      {/* Slides viewport */}
      <div className="carousel-viewport">
        {slides.map((slide, i) => {
          const mediaSrc = slide.media || slide.image || '';
          const isVideo = slide.mediaType === 'video' || (typeof mediaSrc === 'string' && (mediaSrc.startsWith('data:video') || mediaSrc.match(/\.(mp4|webm|ogg)$/i)));

          return (
            <div
              key={i}
              className={`carousel-slide ${i === current ? 'active' : ''} ${
                i === current ? `slide-${direction}` : ''
              }`}
              aria-hidden={i !== current}
            >
              {/* Background image or video */}
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

              {/* Dark gradient overlay for text readability */}
              <div className="carousel-overlay" />

              {/* Offer title */}
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
              </div>

              {/* Discount badge with sparkle animation */}
              {slide.badge && (
                <div className="carousel-badge">
                  <span>{slide.badge}</span>
                  {/* Sparkle shine sweep */}
                  <div className="badge-shine" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Arrow navigation */}
      <button className="carousel-arrow carousel-arrow--left" onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="carousel-arrow carousel-arrow--right" onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
