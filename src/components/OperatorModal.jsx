import React, { useState, useRef } from 'react';

/* ============================================================
   OPERATOR PORTAL MODAL
   ============================================================
   Admin panel to manage carousel slides and website theme.
   Features:
     - PIN gate (0081)
     - Upload images & videos for slides
     - Add / Edit / Delete / Reorder slides
     - Website theme switcher
     - Data persists in localStorage
   ============================================================ */

const OPERATOR_PIN = '0081';

/* Available website themes */
const THEMES = [
  { id: 'default', name: '🏪 Default', desc: 'Clean cream professional look' },
  { id: 'festival', name: '🌸 Festival', desc: 'Hanging flowers & diyas with falling petals' },
];

export default function OperatorModal({ isOpen, onClose, slides, setSlides, theme, setTheme, sparkleDensity = 'medium', setSparkleDensity }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ media: '', mediaType: 'image', title: '', badge: '' });
  const [activeTab, setActiveTab] = useState('slides'); // 'slides' or 'theme'
  const fileInputRef = useRef(null);

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
    setEditingIndex(null);
    setForm({ media: '', mediaType: 'image', title: '', badge: '' });
    onClose();
  };

  /* Handle file upload (image or video) */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');
    if (!isVideo && !isImage) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, media: reader.result, mediaType: isVideo ? 'video' : 'image' });
    };
    reader.readAsDataURL(file);
  };

  /* Add a new slide */
  const handleAdd = () => {
    if (!form.title.trim()) return;
    const updated = [
      ...slides,
      { media: form.media, image: form.media, mediaType: form.mediaType, title: form.title, badge: form.badge },
    ];
    setSlides(updated);
    setForm({ media: '', mediaType: 'image', title: '', badge: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  /* Start editing a slide */
  const handleEdit = (index) => {
    setEditingIndex(index);
    const s = slides[index];
    setForm({
      media: s.media || s.image || '',
      mediaType: s.mediaType || 'image',
      title: s.title || '',
      badge: s.badge || '',
    });
  };

  /* Save edits */
  const handleSave = () => {
    if (editingIndex === null) return;
    const updated = [...slides];
    updated[editingIndex] = {
      media: form.media,
      image: form.media,
      mediaType: form.mediaType,
      title: form.title,
      badge: form.badge,
    };
    setSlides(updated);
    setEditingIndex(null);
    setForm({ media: '', mediaType: 'image', title: '', badge: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  /* Cancel editing */
  const handleCancel = () => {
    setEditingIndex(null);
    setForm({ media: '', mediaType: 'image', title: '', badge: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  /* Delete a slide */
  const handleDelete = (index) => {
    const updated = slides.filter((_, i) => i !== index);
    setSlides(updated);
    if (editingIndex === index) handleCancel();
  };

  /* Move slide up/down */
  const handleMove = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= slides.length) return;
    const updated = [...slides];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setSlides(updated);
  };

  /* Remove current media from form */
  const handleRemoveMedia = () => {
    setForm({ ...form, media: '', mediaType: 'image' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  /* Get display media src — supports both old (image) and new (media) format */
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
            <p className="operator-pin-label">Enter Operator PIN</p>
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
            <button type="submit" className="operator-pin-btn">Unlock</button>
          </form>
        ) : (
          /* Dashboard */
          <div className="operator-dashboard">

            {/* Tab switcher */}
            <div className="operator-tabs">
              <button className={`operator-tab ${activeTab === 'slides' ? 'active' : ''}`} onClick={() => setActiveTab('slides')}>
                📢 Advertisements
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
                  <h3>Current Slides ({slides.length})</h3>
                  {slides.length === 0 && (
                    <p className="operator-empty">No slides yet. Add one below.</p>
                  )}
                  <div className="operator-slide-list">
                    {slides.map((slide, i) => (
                      <div key={i} className={`operator-slide-item ${editingIndex === i ? 'editing' : ''}`}>
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
                          <div className="operator-slide-title">
                            {getMediaType(slide) === 'video' ? '🎬 ' : '🖼️ '}
                            {slide.title}
                          </div>

                        </div>
                        <div className="operator-slide-actions">
                          <button onClick={() => handleMove(i, -1)} title="Move up" disabled={i === 0}>↑</button>
                          <button onClick={() => handleMove(i, 1)} title="Move down" disabled={i === slides.length - 1}>↓</button>
                          <button onClick={() => handleEdit(i)} title="Edit" className="edit-btn">✏️</button>
                          <button onClick={() => handleDelete(i)} title="Delete" className="delete-btn">🗑️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add / Edit form */}
                <div className="operator-section">
                  <h3>{editingIndex !== null ? `Edit Slide #${editingIndex + 1}` : 'Add New Slide'}</h3>
                  <div className="operator-form">

                    {/* File upload */}
                    <div className="operator-field">
                      <label>Upload Image or Video</label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileUpload}
                        className="operator-file-input"
                      />
                      {form.media && (
                        <div className="operator-media-preview">
                          {form.mediaType === 'video' ? (
                            <video src={form.media} controls muted className="operator-media-thumb" />
                          ) : (
                            <img src={form.media} alt="uploaded" className="operator-media-thumb" />
                          )}
                          <button onClick={handleRemoveMedia} className="operator-media-remove" title="Remove">✕</button>
                        </div>
                      )}
                    </div>

                    <div className="operator-field">
                      <label>Offer Title *</label>
                      <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="Fresh Ice Cream Combo Offer"
                      />
                    </div>

                    <div className="operator-field">
                      <label>Discount / Offer Badge (Optional)</label>
                      <input
                        type="text"
                        value={form.badge || ''}
                        onChange={(e) => setForm({ ...form, badge: e.target.value })}
                        placeholder="e.g. 20% OFF or ₹30 Only"
                      />
                    </div>

                    {/* Live preview */}
                    {form.title && (
                      <div className="operator-preview">
                        <span className="operator-preview-label">Preview</span>
                        <div className="operator-preview-card">
                          {form.media && (
                            form.mediaType === 'video' ? (
                              <video src={form.media} muted autoPlay loop className="operator-preview-vid" />
                            ) : (
                              <img src={form.media} alt="preview" />
                            )
                          )}
                          <div className="operator-preview-overlay">
                            <span className="operator-preview-title">{form.title}</span>
                            {form.badge && <span className="operator-preview-badge">{form.badge}</span>}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="operator-form-actions">
                      {editingIndex !== null ? (
                        <>
                          <button onClick={handleSave} className="operator-btn-primary">Save Changes</button>
                          <button onClick={handleCancel} className="operator-btn-secondary">Cancel</button>
                        </>
                      ) : (
                        <button onClick={handleAdd} className="operator-btn-primary" disabled={!form.title.trim()}>+ Add Slide</button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ==================== THEME TAB ==================== */}
            {activeTab === 'theme' && (
              <div className="operator-section">
                <h3>Choose Website Theme</h3>
                <p className="operator-theme-hint">Select a theme to change the look and feel of the entire website.</p>
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
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
