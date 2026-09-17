import React, { useRef, useState, useEffect, useCallback } from 'react';

/**
 * SideScrollBar — a horizontal scrolling image gallery.
 *
 * Props:
 *   items  – array of { image, label } objects.
 *            If no items are provided, 8 blank placeholders render.
 *   title  – optional section heading (default: "Gallery")
 */

const DEFAULT_ITEMS = Array.from({ length: 8 }, (_, i) => ({
  image: '',
  label: '',
  id: i,
}));

export default function SideScrollBar({ items, title = 'Gallery' }) {
  const list = items && items.length > 0 ? items : DEFAULT_ITEMS;
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* ---------- check scroll position for arrow visibility ---------- */
  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, list.length]);

  /* ---------- drag-to-scroll handlers ---------- */
  const onPointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const onPointerUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  /* ---------- arrow scroll ---------- */
  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.65;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="side-scroll-section" aria-label={title}>
      {/* Section heading */}
      <div className="side-scroll-header">
        <h2 className="side-scroll-title">{title}</h2>
        <div className="side-scroll-title-line" />
      </div>

      {/* Scroll container */}
      <div className="side-scroll-wrapper">
        {/* Left gradient fade */}
        <div
          className={`side-scroll-fade side-scroll-fade--left ${canScrollLeft ? 'visible' : ''}`}
        />

        {/* Left arrow */}
        {canScrollLeft && (
          <button
            className="side-scroll-arrow side-scroll-arrow--left"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className={`side-scroll-track ${isDragging ? 'dragging' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {list.map((item, i) => (
            <div className="side-scroll-card" key={item.id ?? i}>
              <div className="side-scroll-card-inner">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label || `Image ${i + 1}`}
                    className="side-scroll-card-img"
                    draggable={false}
                  />
                ) : (
                  <div className="side-scroll-placeholder">
                    {/* Camera / image icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Image {i + 1}</span>
                  </div>
                )}
              </div>
              {item.label && <p className="side-scroll-card-label">{item.label}</p>}
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {canScrollRight && (
          <button
            className="side-scroll-arrow side-scroll-arrow--right"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        )}

        {/* Right gradient fade */}
        <div
          className={`side-scroll-fade side-scroll-fade--right ${canScrollRight ? 'visible' : ''}`}
        />
      </div>
    </section>
  );
}
