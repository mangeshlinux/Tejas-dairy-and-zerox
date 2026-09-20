import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/* ============================================================
   ColdDrinkModal — Physical Paper Document Style
   Single-column standard document width layout
   ============================================================ */

/* Category labels */
const CATEGORY_LABEL = {
  cold_drink: { icon: '🥤', label: 'Available Sizes' },
  ice_cream:  { icon: '🍦', label: 'Pack Sizes' },
  bakery:     { icon: '🍞', label: 'Pack' },
};

export default function ColdDrinkModal({ brand, onClose }) {
  const sheetRef = useRef(null);

  useEffect(() => {
    if (!brand) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [brand, onClose]);

  useEffect(() => {
    document.body.style.overflow = brand ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [brand]);

  if (!brand) return null;

  const catInfo = CATEGORY_LABEL[brand.category] || CATEGORY_LABEL.cold_drink;
  const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  return createPortal(
    <div
      className="doc-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} product list`}
    >
      <div className="doc-paper" ref={sheetRef}>
        
        {/* Close Button */}
        <button onClick={onClose} className="doc-close-btn" aria-label="Close">✕</button>

        {/* ══ BRAND INFO ══ */}
        <div className="doc-brand-section">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} className="doc-brand-logo" />
          ) : (
            <span className="doc-brand-emoji">{brand.emoji}</span>
          )}
          <div className="doc-brand-text">
            <h2 className="doc-brand-name">{brand.name}</h2>
            <p className="doc-brand-category">OFFICIAL STOCK LIST</p>
          </div>
        </div>

        {/* ══ META INFO ══ */}
        <div className="doc-meta-bar">
          <span>DATE: {today}</span>
          <span>TOTAL ITEMS: {brand.products.length}</span>
        </div>

        {/* ══ TABLE HEADER ══ */}
        <div className="doc-table-header">
          <div className="doc-col-num">SR.</div>
          <div className="doc-col-desc">ITEM DESCRIPTION</div>
          <div className="doc-col-sizes">{catInfo.label}</div>
        </div>

        {/* ══ PRODUCT LIST ══ */}
        <div className="doc-list-container">
          {brand.products.map((product, i) => (
            <div key={i} className="doc-row">
              <div className="doc-col-num">{i + 1}.</div>
              <div className="doc-col-desc">
                <span className="doc-item-name">{product.name}</span>
                {product.note && (
                  <span className="doc-item-note"> ({product.note})</span>
                )}
              </div>
              <div className="doc-col-sizes">
                {product.sizes.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* ══ FOOTER ══ */}
        <div className="doc-footer">
          <div className="doc-divider-thin"></div>
          <p>*** END OF DOCUMENT ***</p>
          <p>Printed on {today} · Prices subject to change without notice.</p>
        </div>

      </div>
    </div>,
    document.body
  );
}
