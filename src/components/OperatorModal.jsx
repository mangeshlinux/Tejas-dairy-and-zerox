import React, { useState, useRef } from 'react';

/* ============================================================
   OPERATOR PORTAL MODAL
   ============================================================
   Admin panel to manage advertisement banners and website theme.
   Features:
     - PIN gate (0081)
     - Manage Billboard Slides (Media upload, Badge styles, Active toggle)
     - Website theme & sparkles density switcher
     - Data persists in localStorage
   ============================================================ */

const OPERATOR_PIN = '0081';

/* Available website themes */
const THEMES = [
  { id: 'default', name: '🏪 Default', desc: 'Clean cream professional look' },
  { id: 'festival', name: '🌸 Festival', desc: 'Hanging flowers & diyas with falling petals' },
];

/* Badge color styles options */
const BADGE_STYLES = [
  { id: 'gold', name: '✨ Gold Sparkle', class: 'bg-amber-500 text-white' },
  { id: 'red', name: '🔥 Hot Red', class: 'bg-red-600 text-white' },
  { id: 'emerald', name: '🌿 Fresh Emerald', class: 'bg-emerald-600 text-white' },
  { id: 'cyan', name: '⚡ Electric Cyan', class: 'bg-cyan-600 text-white' },
  { id: 'purple', name: '🎁 Bonus Purple', class: 'bg-purple-600 text-white' },
];

export default function OperatorModal({
  isOpen,
  onClose,
  slides = [],
  setSlides,
  theme,
  setTheme,
  sparkleDensity = 'medium',
  setSparkleDensity,
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState('slides'); // 'slides' | 'theme'

  /* --- SLIDES FORM STATE --- */
  const [editingSlideIndex, setEditingSlideIndex] = useState(null);
  const [slideForm, setSlideForm] = useState({
    media: '',
    mediaType: 'image',
    title: '',
    badge: '',
    badgeStyle: 'gold',
    active: true,
  });
  const slideFileInputRef = useRef(null);

  if (!isOpen) return null;

  /* PIN verification */
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === OPERATOR_PIN) {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Try again.');
    }
  };

  /* Close & reset */
  const handleClose = () => {
    setIsAuthenticated(false);
    setPin('');
    setPinError('');
    setEditingSlideIndex(null);
    setSlideForm({ media: '', mediaType: 'image', title: '', badge: '', badgeStyle: 'gold', active: true });
    onClose();
  };

  /* ==================== SLIDES HANDLERS ==================== */
  const handleSlideFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');
    if (!isVideo && !isImage) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSlideForm({ ...slideForm, media: reader.result, mediaType: isVideo ? 'video' : 'image' });
    };
    reader.readAsDataURL(file);
  };

  const handleAddSlide = () => {
    if (!slideForm.title.trim()) return;
    const updated = [
      ...slides,
      { ...slideForm, image: slideForm.media },
    ];
    setSlides(updated);
    setSlideForm({ media: '', mediaType: 'image', title: '', badge: '', badgeStyle: 'gold', active: true });
    if (slideFileInputRef.current) slideFileInputRef.current.value = '';
  };

  const handleEditSlide = (index) => {
    setEditingSlideIndex(index);
    const s = slides[index];
    setSlideForm({
      media: s.media || s.image || '',
      mediaType: s.mediaType || 'image',
      title: s.title || '',
      badge: s.badge || '',
      badgeStyle: s.badgeStyle || 'gold',
      active: s.active !== false,
    });
  };

  const handleSaveSlide = () => {
    if (editingSlideIndex === null) return;
    const updated = [...slides];
    updated[editingSlideIndex] = {
      ...slideForm,
      image: slideForm.media,
    };
    setSlides(updated);
    setEditingSlideIndex(null);
    setSlideForm({ media: '', mediaType: 'image', title: '', badge: '', badgeStyle: 'gold', active: true });
    if (slideFileInputRef.current) slideFileInputRef.current.value = '';
  };

  const handleCancelSlide = () => {
    setEditingSlideIndex(null);
    setSlideForm({ media: '', mediaType: 'image', title: '', badge: '', badgeStyle: 'gold', active: true });
    if (slideFileInputRef.current) slideFileInputRef.current.value = '';
  };

  const handleDeleteSlide = (index) => {
    const updated = slides.filter((_, i) => i !== index);
    setSlides(updated);
    if (editingSlideIndex === index) handleCancelSlide();
  };

  const handleToggleSlideActive = (index) => {
    const updated = [...slides];
    updated[index] = { ...updated[index], active: updated[index].active !== false ? false : true };
    setSlides(updated);
  };

  const handleMoveSlide = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= slides.length) return;
    const updated = [...slides];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setSlides(updated);
  };

  const getMediaSrc = (slide) => slide.media || slide.image || '';
  const getMediaType = (slide) => slide.mediaType || 'image';

  return (
    <div className="operator-backdrop" onClick={handleClose}>
      <div className="operator-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="operator-header">
          <h2>🔧 Operator Portal</h2>
          <button onClick={handleClose} className="operator-close" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        {/* PIN Gate */}
        {!isAuthenticated ? (
          <form onSubmit={handlePinSubmit} className="operator-pin-form">
            <div className="operator-pin-icon">🔒</div>
            <p className="operator-pin-label">Enter Operator Security PIN</p>
            <input
              type="password"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              className="operator-pin-input"
              autoFocus
            />
            {pinError && <p className="operator-pin-error">{pinError}</p>}
            <button type="submit" className="operator-pin-btn">Unlock Admin Panel</button>
          </form>
        ) : (
          /* Dashboard */
          <div className="operator-dashboard">

            {/* Tab switcher */}
            <div className="operator-tabs">
              <button className={`operator-tab ${activeTab === 'slides' ? 'active' : ''}`} onClick={() => setActiveTab('slides')}>
                📢 Advertisements ({slides.length})
              </button>
              <button className={`operator-tab ${activeTab === 'theme' ? 'active' : ''}`} onClick={() => setActiveTab('theme')}>
                🎨 Website Theme
              </button>
            </div>

            {/* ==================== SLIDES TAB ==================== */}
            {activeTab === 'slides' && (
              <>
                {/* Slide list */}
                <div className="operator-section">
                  <h3>Current Advertisements & Billboard Banners</h3>
                  {slides.length === 0 && (
                    <p className="operator-empty">No slides added yet. Create one below.</p>
                  )}
                  <div className="operator-slide-list">
                    {slides.map((slide, i) => (
                      <div key={i} className={`operator-slide-item ${editingSlideIndex === i ? 'editing' : ''} ${slide.active === false ? 'opacity-50' : ''}`}>
                        <div className="operator-slide-thumb">
                          {getMediaSrc(slide) ? (
                            getMediaType(slide) === 'video' ? (
                              <video src={getMediaSrc(slide)} muted />
                            ) : (
                              <img src={getMediaSrc(slide)} alt={slide.title} />
                            )
                          ) : (
                            <div className="operator-slide-placeholder">No Media</div>
                          )}
                        </div>
                        <div className="operator-slide-info">
                          <div className="operator-slide-title flex items-center gap-2">
                            <span>{getMediaType(slide) === 'video' ? '🎬' : '🖼️'}</span>
                            <span className="font-bold">{slide.title}</span>
                            {slide.active === false && <span className="text-xs bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">(Paused)</span>}
                          </div>
                          {slide.badge && (
                            <div className="text-xs text-amber-700 font-semibold mt-0.5">
                              Badge: {slide.badge}
                            </div>
                          )}
                        </div>
                        <div className="operator-slide-actions">
                          <button onClick={() => handleToggleSlideActive(i)} title={slide.active === false ? 'Activate' : 'Pause'}>
                            {slide.active === false ? '▶️' : '⏸️'}
                          </button>
                          <button onClick={() => handleMoveSlide(i, -1)} title="Move up" disabled={i === 0}>↑</button>
                          <button onClick={() => handleMoveSlide(i, 1)} title="Move down" disabled={i === slides.length - 1}>↓</button>
                          <button onClick={() => handleEditSlide(i)} title="Edit" className="edit-btn">✏️</button>
                          <button onClick={() => handleDeleteSlide(i)} title="Delete" className="delete-btn">🗑️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add / Edit form */}
                <div className="operator-section">
                  <h3>{editingSlideIndex !== null ? `Edit Banner #${editingSlideIndex + 1}` : 'Add New Billboard Advertisement Banner'}</h3>
                  <div className="operator-form space-y-4">

                    {/* File upload */}
                    <div className="operator-field">
                      <label>Upload Banner Image or Video</label>
                      <input
                        ref={slideFileInputRef}
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleSlideFileUpload}
                        className="operator-file-input"
                      />
                      {slideForm.media && (
                        <div className="operator-media-preview mt-2">
                          {slideForm.mediaType === 'video' ? (
                            <video src={slideForm.media} controls muted className="operator-media-thumb" />
                          ) : (
                            <img src={slideForm.media} alt="uploaded" className="operator-media-thumb" />
                          )}
                          <button onClick={() => setSlideForm({ ...slideForm, media: '', mediaType: 'image' })} className="operator-media-remove" title="Remove">✕</button>
                        </div>
                      )}
                    </div>

                    <div className="operator-field">
                      <label>Offer Title *</label>
                      <input
                        type="text"
                        value={slideForm.title}
                        onChange={(e) => setSlideForm({ ...slideForm, title: e.target.value })}
                        placeholder="Fresh Amul Ice Cream Combo Offer"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="operator-field">
                        <label>Discount Badge Text</label>
                        <input
                          type="text"
                          value={slideForm.badge || ''}
                          onChange={(e) => setSlideForm({ ...slideForm, badge: e.target.value })}
                          placeholder="e.g. 20% OFF or Buy 2 Get 1"
                        />
                      </div>

                      <div className="operator-field">
                        <label>Badge Sparkle Color</label>
                        <select
                          value={slideForm.badgeStyle || 'gold'}
                          onChange={(e) => setSlideForm({ ...slideForm, badgeStyle: e.target.value })}
                          className="operator-select p-2 rounded-xl border border-slate-300"
                        >
                          {BADGE_STYLES.map((b) => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="operator-form-actions pt-2">
                      {editingSlideIndex !== null ? (
                        <>
                          <button onClick={handleSaveSlide} className="operator-btn-primary">Save Changes</button>
                          <button onClick={handleCancelSlide} className="operator-btn-secondary">Cancel</button>
                        </>
                      ) : (
                        <button onClick={handleAddSlide} className="operator-btn-primary" disabled={!slideForm.title.trim()}>+ Add Billboard Banner</button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ==================== THEME TAB ==================== */}
            {activeTab === 'theme' && (
              <div className="operator-section space-y-4">
                <h3>Choose Website Theme & Atmosphere</h3>
                <p className="operator-theme-hint">Select a theme to change the overall look, feel, and decorations of the website.</p>
                <div className="operator-theme-grid">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      className={`operator-theme-card ${theme === t.id ? 'active' : ''}`}
                      onClick={() => setTheme(t.id)}
                    >
                      <div className="operator-theme-name">{t.name}</div>
                      <div className="operator-theme-desc">{t.desc}</div>
                      {theme === t.id && <div className="operator-theme-check">✓ Active</div>}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <label className="font-bold text-sm text-slate-800 block mb-1">Sparkle & Petals Density</label>
                  <div className="flex gap-3">
                    {['low', 'medium', 'high'].map((d) => (
                      <button
                        key={d}
                        onClick={() => setSparkleDensity(d)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                          sparkleDensity === d ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {d} Density
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
