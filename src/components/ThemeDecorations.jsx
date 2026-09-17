import React, { useEffect, useRef, useState } from 'react';

/* ============================================================
   THEME DECORATIONS — INDIAN FESTIVAL EDITION
   ============================================================
   - 'festival'  → Indian marigold garlands, lotus, jasmine, rangoli petals
   - 'sparkle'   → Indian crackers: anar, chakri, rockets, phuljhadi
   - Both start at MAXIMUM intensity on load → fade to MINIMUM after 60s
   ============================================================ */

/* ---------- INTENSITY HOOK ---------- */
// Returns a value from 1.0 (max) → 0.15 (min) over 60 seconds
function useIntensity(durationMs = 60000) {
  const [intensity, setIntensity] = useState(1.0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const MIN = 0.15;
    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic for smooth fade
      const eased = 1 - Math.pow(progress, 2);
      setIntensity(MIN + eased * (1 - MIN));
    };
    const id = setInterval(tick, 200);
    return () => clearInterval(id);
  }, [durationMs]);

  return intensity;
}

/* ================================================================
   FESTIVAL THEME — AUTHENTIC INDIAN MARIGOLD GARLANDS & TORAN
   ================================================================
   Detailed SVG Genda (Marigold), Mogra (Jasmine), Mango Leaves,
   Golden Brass Bells (Ghanti), and Top Bandhanwar Door Festoon.
   Long cascading strands extending down the viewport with gentle sway.
   ================================================================ */

// SVG Component for Realistic Marigold (Genda Phool)
function MarigoldSvg({ size = 36, type = 'orange', flowerId }) {
  const gradId = `genda-grad-${type}-${flowerId}`;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="marigold-svg-flower" aria-hidden="true">
      <defs>
        {type === 'orange' && (
          <radialGradient id={gradId} cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="20%" stopColor="#FFC107" />
            <stop offset="50%" stopColor="#FF9800" />
            <stop offset="82%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>
        )}
        {type === 'yellow' && (
          <radialGradient id={gradId} cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="22%" stopColor="#FFF59D" />
            <stop offset="52%" stopColor="#FFEE58" />
            <stop offset="82%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#F57F17" />
          </radialGradient>
        )}
        {type === 'saffron' && (
          <radialGradient id={gradId} cx="42%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="25%" stopColor="#FF9800" />
            <stop offset="55%" stopColor="#FF5722" />
            <stop offset="85%" stopColor="#D84315" />
            <stop offset="100%" stopColor="#4A148C" />
          </radialGradient>
        )}
      </defs>

      <g className="marigold-flower-group">
        {/* Layer 1: Outer ruffled petals */}
        <path
          d="M 50 6 C 59 6 65 14 70 8 C 75 2 85 8 84 17 C 83 26 93 28 89 37 C 85 46 94 54 87 62 C 80 70 87 81 78 85 C 69 89 67 97 57 95 C 47 93 41 100 32 94 C 23 88 16 92 12 84 C 8 76 -1 70 5 62 C 11 54 2 43 8 35 C 14 27 8 17 18 13 C 28 9 34 15 41 11 Z"
          fill={`url(#${gradId})`}
        />
        {/* Layer 2: Middle offset petals */}
        <path
          d="M 50 14 C 57 14 63 21 67 16 C 71 11 79 16 78 24 C 77 32 85 34 81 42 C 77 50 84 57 78 64 C 72 71 77 80 69 83 C 61 86 59 93 50 91 C 41 89 36 95 28 90 C 20 85 14 88 11 81 C 8 74 0 69 5 61 C 10 53 2 44 7 37 C 12 30 7 21 16 18 C 25 15 30 21 37 17 Z"
          fill={`url(#${gradId})`}
          opacity="0.96"
        />
        {/* Layer 3: Inner bloom core */}
        <circle cx="50" cy="50" r="28" fill={`url(#${gradId})`} opacity="0.9" />
        <circle cx="50" cy="50" r="21" fill={`url(#${gradId})`} />
        {/* Blossom center seed cluster */}
        <circle cx="50" cy="50" r="9" fill="#E65100" />
        <circle cx="48" cy="48" r="6" fill="#BF360C" />
        <circle cx="50" cy="50" r="3" fill="#3E2723" opacity="0.8" />
        {/* Tiny golden stamen highlights */}
        <circle cx="46" cy="46" r="1.5" fill="#FFE082" />
        <circle cx="53" cy="47" r="1.2" fill="#FFE082" />
        <circle cx="48" cy="53" r="1.3" fill="#FFE082" />
        <circle cx="52" cy="52" r="1" fill="#FFE082" />
      </g>
    </svg>
  );
}

// SVG Component for Mango Leaf (Amba Paan)
function MangoLeafSvg({ width = 14, height = 30, angle = 0 }) {
  return (
    <svg
      viewBox="0 0 30 70"
      width={width}
      height={height}
      style={{ transform: `rotate(${angle}deg)` }}
      className="mango-leaf-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="35%" stopColor="#2E7D32" />
          <stop offset="85%" stopColor="#1B5E20" />
          <stop offset="100%" stopColor="#0D3B0E" />
        </linearGradient>
      </defs>
      <path
        d="M 15 2 C 26 18 28 45 15 68 C 2 45 4 18 15 2 Z"
        fill="url(#mangoLeafGrad)"
        stroke="#1B5E20"
        strokeWidth="0.8"
      />
      <path d="M 15 2 Q 15 35 15 67" stroke="#A5D6A7" strokeWidth="1.2" fill="none" opacity="0.75" />
      <path
        d="M 15 15 Q 21 12 23 10 M 15 15 Q 9 12 7 10 M 15 30 Q 22 26 25 24 M 15 30 Q 8 26 5 24 M 15 45 Q 21 41 23 39 M 15 45 Q 9 41 7 39"
        stroke="#81C784"
        strokeWidth="0.7"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

// SVG Component for Metallic Indian Brass Bell (Ghanti / Ghungroo)
function BrassBellSvg({ size = 24 }) {
  return (
    <svg viewBox="0 0 60 70" width={size} height={size * 1.15} className="brass-bell-svg" aria-hidden="true">
      <defs>
        <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF59D" />
          <stop offset="25%" stopColor="#FFD54F" />
          <stop offset="55%" stopColor="#FFB300" />
          <stop offset="85%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#B78103" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="8" r="5" fill="none" stroke="url(#brassGrad)" strokeWidth="3" />
      <path
        d="M 18 15 C 18 15 30 13 42 15 C 44 26 52 42 54 48 C 55 52 5 52 6 48 C 8 42 16 26 18 15 Z"
        fill="url(#brassGrad)"
      />
      <path d="M 4 48 C 4 48 30 54 56 48 L 54 52 C 54 52 30 58 6 52 Z" fill="#FFA000" />
      <path d="M 18 24 Q 30 22 42 24" stroke="#B78103" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M 14 36 Q 30 33 46 36" stroke="#B78103" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="30" cy="58" r="4.5" fill="#FFE082" stroke="#FF6F00" strokeWidth="1" />
    </svg>
  );
}

// SVG Component for White Mogra / Jasmine Bud
function JasmineSvg({ size = 15 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className="jasmine-svg" aria-hidden="true">
      <path d="M 20 38 L 16 28 L 24 28 Z" fill="#388E3C" />
      <path
        d="M 20 4 C 23 14 32 16 32 22 C 32 28 20 28 20 28 C 20 28 8 28 8 22 C 8 16 17 14 20 4 Z"
        fill="#FFFFFF"
        stroke="#FFF9C4"
        strokeWidth="1"
      />
      <path d="M 20 8 C 21 16 26 18 26 22 C 26 25 20 26 20 26 Z" fill="#FFFDE7" />
    </svg>
  );
}

// Long primary garland flower array — 18 flowers per strand (~700px length)
const PRIMARY_GARLAND_FLOWERS = [
  { size: 36, type: 'orange', leaf: true },
  { size: 40, type: 'yellow' },
  { size: 36, type: 'saffron' },
  { size: 38, type: 'orange', mogra: true },
  { size: 36, type: 'yellow' },
  { size: 40, type: 'orange', leaf: true },
  { size: 36, type: 'saffron' },
  { size: 38, type: 'yellow', mogra: true },
  { size: 40, type: 'orange' },
  { size: 36, type: 'saffron', leaf: true },
  { size: 38, type: 'yellow' },
  { size: 36, type: 'orange', mogra: true },
  { size: 40, type: 'yellow' },
  { size: 36, type: 'saffron', leaf: true },
  { size: 38, type: 'orange' },
  { size: 34, type: 'yellow', mogra: true },
  { size: 32, type: 'saffron' },
  { size: 30, type: 'orange' },
];

// Secondary inner garland strand — 12 flowers (~420px length)
const SECONDARY_GARLAND_FLOWERS = [
  { size: 32, type: 'yellow' },
  { size: 36, type: 'orange' },
  { size: 34, type: 'saffron', mogra: true },
  { size: 36, type: 'yellow', leaf: true },
  { size: 32, type: 'orange' },
  { size: 34, type: 'saffron' },
  { size: 36, type: 'yellow', mogra: true },
  { size: 32, type: 'orange', leaf: true },
  { size: 34, type: 'yellow' },
  { size: 30, type: 'saffron' },
  { size: 28, type: 'orange' },
  { size: 26, type: 'yellow' },
];

// Toran bead colours — green, orange, red repeating
const TORAN_BEADS = [
  '#2E7D32', '#EF6C00', '#C62828', '#FFB300',
  '#2E7D32', '#EF6C00', '#C62828', '#FFB300',
  '#2E7D32', '#EF6C00', '#C62828', '#FFB300',
  '#2E7D32', '#EF6C00', '#C62828', '#FFB300',
  '#2E7D32', '#EF6C00', '#C62828', '#FFB300',
  '#2E7D32', '#EF6C00', '#C62828',
];

// Top Doorway Toran (Bandhanwar) spanning header width
function TopToranBandhanwar() {
  return (
    <div className="top-toran-container" aria-hidden="true">
      <div className="top-toran-string" />
      {/* 9 Scalloped Mango Leaf & Marigold knots across header */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="toran-knot-item" style={{ left: `${(i + 0.5) * (100 / 9)}%` }}>
          <div className="toran-mango-pair">
            <MangoLeafSvg width={11} height={24} angle={-30} />
            <MangoLeafSvg width={11} height={24} angle={30} />
          </div>
          <MarigoldSvg size={22} type={i % 2 === 0 ? 'orange' : 'yellow'} flowerId={`toran-${i}`} />
        </div>
      ))}
    </div>
  );
}

// Curved Scalloped Festoon Garland hanging under the header bar
function HeaderFestoonGarland() {
  // 4 curved festoon arches across the width (0-25%, 25-50%, 50-75%, 75-100%)
  const arches = [
    { start: 0, end: 25 },
    { start: 25, end: 50 },
    { start: 50, end: 75 },
    { start: 75, end: 100 },
  ];

  return (
    <div className="header-festoon-container" aria-hidden="true">
      {/* SVG Canvas for smooth catenary U-curved marigold threads */}
      <svg className="header-festoon-svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="festoonStringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E65100" />
            <stop offset="25%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#2E7D32" />
            <stop offset="75%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
        </defs>

        {arches.map((arch, idx) => {
          const x1 = arch.start * 10;
          const x2 = arch.end * 10;
          const xMid = (x1 + x2) / 2;
          return (
            <path
              key={idx}
              d={`M ${x1} 4 Q ${xMid} 75 ${x2} 4`}
              stroke="url(#festoonStringGrad)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Flowers positioned along each U-shaped curve */}
      {arches.map((arch, archIdx) => {
        const tValues = [0.18, 0.36, 0.50, 0.64, 0.82];
        return (
          <React.Fragment key={archIdx}>
            {tValues.map((t, fIdx) => {
              const leftPct = arch.start + t * (arch.end - arch.start);
              // Quadratic parabola dip equation: y = 4 * maxDip * t * (1 - t)
              const topPx = 4 * 44 * t * (1 - t);
              const flowerType = fIdx % 2 === 0 ? 'orange' : 'yellow';

              return (
                <div
                  key={fIdx}
                  className="header-festoon-flower"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPx}px`,
                  }}
                >
                  <MarigoldSvg
                    size={fIdx === 2 ? 28 : 24}
                    type={flowerType}
                    flowerId={`festoon-${archIdx}-${fIdx}`}
                  />
                </div>
              );
            })}

            {/* Center Hanging Floral Drop (Apex of U-curve at t = 0.5) */}
            <div
              className="header-festoon-center-drop"
              style={{
                left: `${(arch.start + arch.end) / 2}%`,
                top: `44px`,
              }}
            >
              <div className="festoon-drop-thread" />
              <JasmineSvg size={13} />
              <MarigoldSvg size={22} type="saffron" flowerId={`festoon-drop-${archIdx}`} />
              <BrassBellSvg size={18} />
            </div>
          </React.Fragment>
        );
      })}

      {/* Attachment Knots at 0%, 25%, 50%, 75%, 100% attached to header bottom */}
      {[0, 25, 50, 75, 100].map((posPct, kIdx) => (
        <div key={kIdx} className="header-festoon-knot" style={{ left: `${posPct}%` }}>
          <div className="festoon-knot-leaves">
            <MangoLeafSvg width={11} height={24} angle={-35} />
            <MangoLeafSvg width={13} height={28} angle={0} />
            <MangoLeafSvg width={11} height={24} angle={35} />
          </div>
          <MarigoldSvg size={28} type={kIdx % 2 === 0 ? 'orange' : 'saffron'} flowerId={`festoon-knot-${kIdx}`} />
        </div>
      ))}
    </div>
  );
}

// Single Garland Strand Component
function GarlandStrand({ flowers, isSecondary = false, side = 'left' }) {
  return (
    <div className={`garland-strand ${isSecondary ? 'garland-strand--secondary' : 'garland-strand--primary'}`}>
      <div className="marigold-thread" />
      {flowers.map((f, i) => (
        <React.Fragment key={i}>
          {/* Leaf cluster above flower if flagged */}
          {f.leaf && (
            <div className="mango-leaf-inline-cluster">
              <MangoLeafSvg width={11} height={24} angle={-25} />
              <MangoLeafSvg width={11} height={24} angle={25} />
            </div>
          )}

          {/* Jasmine Mogra bud before marigold if flagged */}
          {f.mogra && (
            <div className="mogra-bud-wrapper">
              <JasmineSvg size={14} />
            </div>
          )}

          {/* Marigold flower */}
          <div className="marigold-flower-item" style={{ width: f.size, height: f.size }}>
            <MarigoldSvg size={f.size} type={f.type} flowerId={`${side}-${isSecondary ? 'sec' : 'pri'}-${i}`} />
          </div>
        </React.Fragment>
      ))}

      {/* Bottom Tip with lush mango leaf spray & traditional brass bell */}
      <div className="garland-bottom-tip">
        <div className="mango-leaf-spray">
          <MangoLeafSvg width={13} height={28} angle={-32} />
          <MangoLeafSvg width={15} height={33} angle={0} />
          <MangoLeafSvg width={13} height={28} angle={32} />
        </div>
        <div className="brass-bell-hanging">
          <BrassBellSvg size={22} />
        </div>
      </div>
    </div>
  );
}

function GarlandCorner({ side }) {
  return (
    <div className={`garland-corner garland-corner--${side}`} aria-hidden="true">
      <div className="garland-sway-container">
        {/* Main outer long garland strand (18 flowers) */}
        <GarlandStrand flowers={PRIMARY_GARLAND_FLOWERS} isSecondary={false} side={side} />

        {/* Inner secondary garland strand (12 flowers) */}
        <GarlandStrand flowers={SECONDARY_GARLAND_FLOWERS} isSecondary={true} side={side} />

        {/* Toran bead string alongside */}
        <div className="toran-bead-string">
          <div className="toran-thread" />
          {TORAN_BEADS.map((color, i) => (
            <div key={i} className="toran-bead" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FestivalTheme() {
  return (
    <>
      <TopToranBandhanwar />
      <HeaderFestoonGarland />
      <GarlandCorner side="left" />
      <GarlandCorner side="right" />
    </>
  );
}

/* ================================================================
   HYPER-REALISTIC OPTICAL STARDUST & AMBIENT LIGHT ENGINE
   ================================================================
   Realistic specular lens flares, optical stardust embers, and
   champagne bokeh rendered with additive light blending ('lighter').
   ================================================================ */

const SPARKLER_PALETTE = [
  { head: '#FFFFFF', body: '#FFF59D', glow: 'rgba(255, 245, 157, 0.6)', tail: 'rgba(255, 179, 0, 0)' },   // Incandescent Gold Phuljhadi
  { head: '#FFFFFF', body: '#FFB74D', glow: 'rgba(255, 183, 77, 0.6)', tail: 'rgba(230, 81, 0, 0)' },    // Warm Amber Pyrotechnic
  { head: '#FFFFFF', body: '#E0F7FA', glow: 'rgba(224, 247, 250, 0.7)', tail: 'rgba(255, 255, 255, 0)' }, // Diamond Crystal Flare
  { head: '#FFF8E1', body: '#FFE082', glow: 'rgba(255, 224, 130, 0.6)', tail: 'rgba(255, 111, 0, 0)' },   // Champagne Sparkler
  { head: '#FFFFFF', body: '#FF8A80', glow: 'rgba(255, 138, 128, 0.5)', tail: 'rgba(194, 24, 91, 0)' },   // Rose Gold Shimmer
];

const DENSITY_SETTINGS = {
  low: { fountains: 2, embers: 30, glints: 8, opacityMult: 0.45 },
  medium: { fountains: 4, embers: 55, glints: 16, opacityMult: 0.7 },
  high: { fountains: 7, embers: 90, glints: 26, opacityMult: 0.95 },
};

function SparkleBlastTheme({ density = 'medium' }) {
  const cfg = DENSITY_SETTINGS[density] || DENSITY_SETTINGS.medium;
  const canvasRef = useRef(null);
  const animFrame = useRef(null);
  const intensity = useIntensity(60000);
  const intensityRef = useRef(intensity);

  useEffect(() => { intensityRef.current = intensity; }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isMobile = window.innerWidth < 640;
    const fountainCount = Math.max(1, Math.round(cfg.fountains * (isMobile ? 0.5 : 1)));
    const emberCount = Math.round(cfg.embers * (isMobile ? 0.5 : 1));
    const glintCount = Math.round(cfg.glints * (isMobile ? 0.5 : 1));

    // Dynamic Sparkler Sparks Array
    const activeSparks = [];
    const mouseSparks = [];
    let mousePos = { x: -100, y: -100, speed: 0, active: false };

    // Track mouse speed for interactive sparkler wand
    let prevMouse = { x: 0, y: 0, time: Date.now() };

    const handleMouseMove = (e) => {
      const now = Date.now();
      const dt = Math.max(1, now - prevMouse.time);
      const curX = e.clientX;
      const curY = e.clientY + window.scrollY;

      const dx = curX - prevMouse.x;
      const dy = curY - prevMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.min(dist / dt, 18);

      mousePos = { x: curX, y: curY, speed, active: true };
      prevMouse = { x: curX, y: curY, time: now };

      // Spawn realistic sparkler shower under cursor on mouse move
      const count = Math.min(8, Math.floor(speed * 0.9) + 2);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = 1.8 + Math.random() * (4.5 + speed * 0.6);
        mouseSparks.push({
          x: curX,
          y: curY,
          vx: Math.cos(angle) * spd + (dx * 0.12),
          vy: Math.sin(angle) * spd + (dy * 0.12),
          gravity: 0.07 + Math.random() * 0.05,
          length: 5 + Math.random() * 12,
          width: 1.2 + Math.random() * 1.6,
          life: 1.0,
          decay: 0.018 + Math.random() * 0.022,
          color: SPARKLER_PALETTE[Math.floor(Math.random() * SPARKLER_PALETTE.length)],
          hasBranched: false,
        });
      }

      if (mouseSparks.length > 100) mouseSparks.splice(0, mouseSparks.length - 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 1. Emitters (Anar / Fountain Emitters positioned at bottom)
    const fountainEmitters = Array.from({ length: fountainCount }, (_, i) => ({
      x: ((i + 1) / (fountainCount + 1)) * canvas.width,
      spawnTimer: 0,
      spawnInterval: 2 + Math.floor(Math.random() * 3),
    }));

    // 2. Ambient Floating Glowing Stardust Embers
    const embers = Array.from({ length: emberCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(0.25 + Math.random() * 0.55),
      size: 0.9 + Math.random() * 2.2,
      alpha: Math.random(),
      fadeSpeed: 0.006 + Math.random() * 0.012,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      swayFreq: 0.005 + Math.random() * 0.01,
      swayAmp: 0.3 + Math.random() * 0.5,
      color: SPARKLER_PALETTE[Math.floor(Math.random() * SPARKLER_PALETTE.length)],
    }));

    // 3. Twinkling Specular Diamond Star Glints (Lens shimmer flares)
    const glints = Array.from({ length: glintCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 2.8 + Math.random() * 4.5,
      phase: Math.random() * Math.PI * 2,
      speed: 0.018 + Math.random() * 0.03,
      rotation: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      points: Math.random() > 0.35 ? 4 : 6,
      color: SPARKLER_PALETTE[Math.floor(Math.random() * SPARKLER_PALETTE.length)],
    }));

    // Helper: Draw single realistic sparkler streak with glowing bloom head and fading tail
    const drawSparklerStreak = (spark, currIntensity) => {
      if (spark.life <= 0) return;

      const alpha = Math.max(0, Math.min(1, spark.life * currIntensity));
      if (alpha <= 0.01) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Tail end coordinates based on velocity drag
      const tailX = spark.x - spark.vx * (spark.length * 0.45);
      const tailY = spark.y - spark.vy * (spark.length * 0.45);

      // Gradient along velocity streak line
      const lineGrad = ctx.createLinearGradient(spark.x, spark.y, tailX, tailY);
      lineGrad.addColorStop(0, spark.color.head);
      lineGrad.addColorStop(0.35, spark.color.body);
      lineGrad.addColorStop(1, spark.color.tail);

      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = spark.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(spark.x, spark.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      // Photorealistic Head Halo Core Glow
      const haloR = spark.width * 3.5;
      const headGlow = ctx.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, haloR);
      headGlow.addColorStop(0, '#FFFFFF');
      headGlow.addColorStop(0.4, spark.color.glow);
      headGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(spark.x, spark.y, haloR, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Helper: Draw Specular Lens Star Glint (4-Point & 6-Point Diamond Flare)
    const drawStarGlint = (g, currIntensity) => {
      g.phase += g.speed;
      g.rotation += g.rotSpeed;

      const alpha = Math.max(0, (Math.sin(g.phase) * 0.5 + 0.5) * 0.75 * currIntensity);
      if (alpha <= 0.01) return;

      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(g.rotation);
      ctx.globalAlpha = alpha;

      const outerR = g.size * 2.8;
      const innerR = g.size * 0.22;
      const pts = g.points;

      // Outer radial aura halo
      const aura = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR * 1.2);
      aura.addColorStop(0, '#FFFFFF');
      aura.addColorStop(0.3, g.color.glow);
      aura.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(0, 0, outerR * 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Diamond Star Needle Rays
      ctx.beginPath();
      for (let i = 0; i < pts * 2; i++) {
        const r = (i % 2 === 0) ? outerR : innerR;
        const angle = (i * Math.PI) / pts;
        if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.45, g.color.body);
      grad.addColorStop(1, g.color.tail);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    };

    /* ----- MAIN RENDER LOOP ----- */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currIntensity = intensityRef.current;

      // Additive light blending for photorealistic pyrotechnic lens bloom
      ctx.globalCompositeOperation = 'lighter';

      // 1. Spawn Pyrotechnic Fountain Sparks (Anar / Phuljhadi)
      fountainEmitters.forEach((emitter) => {
        emitter.spawnTimer++;
        if (emitter.spawnTimer >= emitter.spawnInterval) {
          emitter.spawnTimer = 0;
          // Launch golden sparks upward in parabolic fountain arc
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.65;
          const spd = 4.5 + Math.random() * 7.5;
          activeSparks.push({
            x: emitter.x + (Math.random() - 0.5) * 45,
            y: canvas.height + 10,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            gravity: 0.11 + Math.random() * 0.04,
            length: 7 + Math.random() * 14,
            width: 1.3 + Math.random() * 1.7,
            life: 1.0,
            decay: 0.014 + Math.random() * 0.015,
            color: SPARKLER_PALETTE[Math.floor(Math.random() * SPARKLER_PALETTE.length)],
            hasBranched: false,
          });
        }
      });

      // Limit max active fountain sparks
      if (activeSparks.length > 140) activeSparks.splice(0, activeSparks.length - 140);

      // 2. Update & Render Fountain Sparks with Micro-Branching
      for (let i = activeSparks.length - 1; i >= 0; i--) {
        const s = activeSparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.985; // Air drag
        s.vy *= 0.985;
        s.vy += s.gravity; // Gravity pull
        s.life -= s.decay;

        // Branching crackle (sub-sparks split off naturally)
        if (!s.hasBranched && s.life < 0.6 && Math.random() < 0.18) {
          s.hasBranched = true;
          for (let b = 0; b < 2; b++) {
            activeSparks.push({
              x: s.x,
              y: s.y,
              vx: s.vx * 0.45 + (Math.random() - 0.5) * 2.2,
              vy: s.vy * 0.45 + (Math.random() - 0.5) * 2.2,
              gravity: 0.08,
              length: 3 + Math.random() * 6,
              width: 1.0,
              life: 0.5,
              decay: 0.035,
              color: SPARKLER_PALETTE[Math.floor(Math.random() * SPARKLER_PALETTE.length)],
              hasBranched: true,
            });
          }
        }

        if (s.life <= 0 || s.y > canvas.height + 25) {
          activeSparks.splice(i, 1);
          continue;
        }

        drawSparklerStreak(s, currIntensity);
      }

      // 3. Update & Render Interactive Mouse Sparks
      for (let i = mouseSparks.length - 1; i >= 0; i--) {
        const ms = mouseSparks[i];
        ms.x += ms.vx;
        ms.y += ms.vy;
        ms.vx *= 0.97;
        ms.vy *= 0.97;
        ms.vy += ms.gravity;
        ms.life -= ms.decay;

        if (ms.life <= 0) {
          mouseSparks.splice(i, 1);
          continue;
        }

        drawSparklerStreak(ms, currIntensity);
      }

      // Render interactive sparkler wand tip glow under mouse
      if (mousePos.active && mousePos.speed > 0.5) {
        ctx.save();
        ctx.globalAlpha = Math.min(0.9, mousePos.speed * 0.1) * currIntensity;
        const wandGlow = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 18);
        wandGlow.addColorStop(0, '#FFFFFF');
        wandGlow.addColorStop(0.4, 'rgba(255, 215, 64, 0.8)');
        wandGlow.addColorStop(1, 'rgba(255, 179, 0, 0)');
        ctx.fillStyle = wandGlow;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Update & Render Floating Stardust Embers
      embers.forEach((e) => {
        e.y += e.vy;
        e.x += e.vx + Math.sin(e.y * e.swayFreq) * e.swayAmp;
        e.alpha += e.fadeSpeed * e.fadeDir;
        if (e.alpha >= 0.88) e.fadeDir = -1;
        if (e.alpha <= 0.08) e.fadeDir = 1;

        if (e.y < -20) {
          e.y = canvas.height + 20;
          e.x = Math.random() * canvas.width;
        }

        const alpha = Math.max(0, e.alpha * currIntensity);
        ctx.save();
        ctx.globalAlpha = alpha;
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2.2);
        grad.addColorStop(0, e.color.head);
        grad.addColorStop(0.45, e.color.body);
        grad.addColorStop(1, e.color.tail);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 5. Render Twinkling Specular Diamond Star Glints
      glints.forEach((g) => drawStarGlint(g, currIntensity));

      ctx.globalCompositeOperation = 'source-over';
      animFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [density, cfg]);

  return (
    <>
      <canvas ref={canvasRef} className="theme-sparkle-canvas" aria-hidden="true" />
      <div
        className="theme-cracker-glow"
        aria-hidden="true"
        style={{ opacity: intensity * cfg.opacityMult }}
      />
    </>
  );
}

/* ---------- MAIN EXPORT ---------- */

export default function ThemeDecorations({ theme }) {
  if (theme === 'festival') return <FestivalTheme />;
  return null;
}
