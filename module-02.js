'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   MODULE 02 · Animal Development
   fertilization → Cleavage → Gastrulation → Organogenesis
═══════════════════════════════════════════════════════════════════════════ */

// ─── SVG: fertilization Cascade ──────────────────────────────────────────────
const SVG_FERT = `
<svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="egg-grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="rgba(100,255,218,0.12)"/>
      <stop offset="80%"  stop-color="rgba(100,255,218,0.04)"/>
      <stop offset="100%" stop-color="rgba(100,255,218,0)"/>
    </radialGradient>
    <filter id="fert-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <!-- Panel 1: Sperm approach -->
  <g transform="translate(10,20)">
    <text x="90" y="15" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(100,255,218,0.5)" text-anchor="middle" letter-spacing="1">STEP 1: CONTACT</text>
    <!-- Zona pellucida -->
    <circle cx="90" cy="100" r="75" fill="none" stroke="rgba(255,209,102,0.3)" stroke-width="8" stroke-dasharray="4,3"/>
    <!-- Egg -->
    <circle cx="90" cy="100" r="58" fill="url(#egg-grad)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5" filter="url(#fert-glow)"/>
    <!-- Egg nucleus -->
    <circle cx="90" cy="100" r="18" fill="none" stroke="rgba(100,255,218,0.25)" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="90" y="104" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.4)" text-anchor="middle">nucleus</text>
    <!-- Cortical granules (small dots inside egg periphery) -->
    <circle cx="50"  cy="80"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="65"  cy="60"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="90"  cy="52"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="115" cy="60"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="130" cy="80"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="135" cy="108" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="125" cy="130" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="90"  cy="148" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="55"  cy="130" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="45"  cy="108" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <!-- Label cortical granules -->
    <text x="160" y="75" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.6)">cortical</text>
    <text x="160" y="85" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.6)">granules</text>
    <line x1="155" y1="78" x2="135" y2="80" stroke="rgba(255,110,199,0.3)" stroke-width="0.8"/>
    <!-- Zona label -->
    <text x="160" y="40" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.7)">zona pellucida</text>
    <line x1="155" y1="40" x2="155" y2="50" stroke="rgba(255,209,102,0.3)" stroke-width="0.8"/>
    <line x1="155" y1="50" x2="140" y2="46" stroke="rgba(255,209,102,0.3)" stroke-width="0.8"/>
    <!-- Sperm -->
    <ellipse cx="50" cy="185" rx="10" ry="5" fill="rgba(167,139,250,0.5)" stroke="#a78bfa" stroke-width="1"/>
    <path d="M60,185 Q75,180 80,175 Q85,165 85,158" stroke="#a78bfa" stroke-width="1.5" fill="none"/>
    <path d="M30,185 Q15,188 0,195" stroke="rgba(167,139,250,0.5)" stroke-width="1.5" fill="none"/>
    <text x="10" y="210" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(167,139,250,0.7)">sperm</text>
  </g>

  <!-- Panel 2: Acrosome reaction -->
  <g transform="translate(220,20)">
    <text x="100" y="15" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(167,139,250,0.5)" text-anchor="middle" letter-spacing="1">STEP 2: ACROSOME RXN</text>
    <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255,209,102,0.3)" stroke-width="8" stroke-dasharray="4,3"/>
    <circle cx="100" cy="100" r="58" fill="url(#egg-grad)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5"/>
    <circle cx="100" cy="100" r="18" fill="none" stroke="rgba(100,255,218,0.25)" stroke-width="1" stroke-dasharray="3,3"/>
    <!-- Cortical granules still present -->
    <circle cx="60"  cy="80"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="75"  cy="58"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="100" cy="52"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="130" cy="78"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="62"  cy="128" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="138" cy="128" r="3.5" fill="rgba(255,110,199,0.6)"/>
    <!-- Sperm at zona with acrosomal process -->
    <ellipse cx="45" cy="168" rx="10" ry="5" fill="rgba(167,139,250,0.6)" stroke="#a78bfa" stroke-width="1"/>
    <line x1="55" y1="164" x2="68" y2="152" stroke="#a78bfa" stroke-width="2"/>
    <!-- Acrosomal enzymes -->
    <circle cx="71" cy="148" r="4" fill="rgba(167,139,250,0.3)" stroke="#a78bfa" stroke-width="1"/>
    <circle cx="62" cy="144" r="3" fill="rgba(167,139,250,0.3)" stroke="#a78bfa" stroke-width="0.8"/>
    <circle cx="75" cy="140" r="3" fill="rgba(167,139,250,0.3)" stroke="#a78bfa" stroke-width="0.8"/>
    <text x="10" y="210" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.7)">acrosome enzymes</text>
    <text x="10" y="220" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.7)">digest zona pellucida</text>
  </g>

  <!-- Panel 3: Fast block (membrane depolarisation) -->
  <g transform="translate(445,20)">
    <text x="100" y="15" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,209,102,0.5)" text-anchor="middle" letter-spacing="1">STEP 3: FAST BLOCK</text>
    <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255,209,102,0.5)" stroke-width="8" stroke-dasharray="4,3"/>
    <!-- Depolarisation flash -->
    <circle cx="100" cy="100" r="65" fill="rgba(255,209,102,0.05)" stroke="rgba(255,209,102,0.4)" stroke-width="2"/>
    <circle cx="100" cy="100" r="58" fill="url(#egg-grad)" stroke="rgba(255,209,102,0.6)" stroke-width="2"/>
    <circle cx="100" cy="100" r="18" fill="none" stroke="rgba(100,255,218,0.25)" stroke-width="1" stroke-dasharray="3,3"/>
    <!-- Cortical granules still -->
    <circle cx="60"  cy="80"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="75"  cy="58"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="100" cy="52"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <circle cx="130" cy="78"  r="3.5" fill="rgba(255,110,199,0.6)"/>
    <!-- Sperm fusing -->
    <ellipse cx="47" cy="162" rx="10" ry="5" fill="rgba(167,139,250,0.7)" stroke="#a78bfa" stroke-width="1"/>
    <line x1="57" y1="158" x2="75" y2="148" stroke="#a78bfa" stroke-width="2.5"/>
    <!-- Na+ flood arrows -->
    <text x="135" y="72" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,209,102,0.8)">Na⁺ →</text>
    <text x="135" y="84" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,209,102,0.8)">influx</text>
    <!-- Membrane potential label -->
    <text x="5" y="210" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.7)">−70mV → +20mV in seconds</text>
    <text x="5" y="222" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.7)">prevents additional sperm binding</text>
  </g>

  <!-- Panel 4: Slow block (cortical reaction) -->
  <g transform="translate(670,20)">
    <text x="100" y="15" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,110,199,0.5)" text-anchor="middle" letter-spacing="1">STEP 4: SLOW BLOCK</text>
    <!-- fertilization envelope raised -->
    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,110,199,0.6)" stroke-width="3"/>
    <circle cx="100" cy="100" r="58" fill="url(#egg-grad)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5"/>
    <circle cx="100" cy="100" r="18" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5"/>
    <text x="100" y="97" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)" text-anchor="middle">pronuclei</text>
    <text x="100" y="107" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)" text-anchor="middle">forming</text>
    <!-- Cortical granules released (arrows outward) -->
    <circle cx="60"  cy="80"  r="3.5" fill="none" stroke="rgba(255,110,199,0.4)" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="56"  y1="76"  x2="43"  y2="64"  stroke="rgba(255,110,199,0.4)" stroke-width="1"/>
    <circle cx="100" cy="52"  r="3.5" fill="none" stroke="rgba(255,110,199,0.4)" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="100" y1="48"  x2="100" y2="33"  stroke="rgba(255,110,199,0.4)" stroke-width="1"/>
    <circle cx="140" cy="80"  r="3.5" fill="none" stroke="rgba(255,110,199,0.4)" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="144" y1="76"  x2="157" y2="63"  stroke="rgba(255,110,199,0.4)" stroke-width="1"/>
    <!-- fertilization envelope label -->
    <text x="183" y="62"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.7)">fertilization</text>
    <text x="183" y="72"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.7)">envelope</text>
    <line x1="180" y1="65" x2="165" y2="60" stroke="rgba(255,110,199,0.3)" stroke-width="0.8"/>
    <!-- Labels -->
    <text x="5"  y="210" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.7)">cortical granule exocytosis</text>
    <text x="5"  y="222" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.7)">raises fertilization envelope</text>
    <text x="5"  y="234" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.7)">Ca²⁺ wave, takes ~60 seconds</text>
  </g>

  <!-- Bottom timeline bar -->
  <rect x="10" y="375" width="870" height="3" rx="1.5" fill="rgba(255,255,255,0.07)"/>
  <rect x="10" y="375" width="217" height="3" rx="0" fill="rgba(100,255,218,0.4)"/>
  <rect x="227" y="375" width="217" height="3" fill="rgba(167,139,250,0.4)"/>
  <rect x="444" y="375" width="217" height="3" fill="rgba(255,209,102,0.4)"/>
  <rect x="661" y="375" width="219" height="3" rx="0" fill="rgba(255,110,199,0.4)"/>
  <text x="118"  y="392" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.6)" text-anchor="middle">contact / binding</text>
  <text x="335"  y="392" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.6)" text-anchor="middle">seconds</text>
  <text x="552"  y="392" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.6)" text-anchor="middle">&lt;1 second</text>
  <text x="770"  y="392" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.6)" text-anchor="middle">~1 minute</text>
</svg>`;

// ─── SVG: Cleavage Stages ────────────────────────────────────────────────────
const SVG_CLEAVAGE = `
<svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cell-g" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="rgba(100,255,218,0.2)"/>
      <stop offset="100%" stop-color="rgba(100,255,218,0.04)"/>
    </radialGradient>
  </defs>

  <!-- Stage labels at top -->
  <text x="82"  y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(100,255,218,0.7)" text-anchor="middle" letter-spacing="1">ZYGOTE</text>
  <text x="242" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(167,139,250,0.7)" text-anchor="middle" letter-spacing="1">2-CELL</text>
  <text x="412" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,110,199,0.7)" text-anchor="middle" letter-spacing="1">4-CELL</text>
  <text x="602" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,209,102,0.7)" text-anchor="middle" letter-spacing="1">MORULA</text>
  <text x="790" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(184,240,137,0.7)" text-anchor="middle" letter-spacing="1">BLASTULA</text>

  <!-- Arrow between stages -->
  <text x="165" y="140" font-family="JetBrains Mono,monospace" font-size="16" fill="rgba(255,255,255,0.2)" text-anchor="middle">→</text>
  <text x="335" y="140" font-family="JetBrains Mono,monospace" font-size="16" fill="rgba(255,255,255,0.2)" text-anchor="middle">→</text>
  <text x="510" y="140" font-family="JetBrains Mono,monospace" font-size="16" fill="rgba(255,255,255,0.2)" text-anchor="middle">→</text>
  <text x="695" y="140" font-family="JetBrains Mono,monospace" font-size="16" fill="rgba(255,255,255,0.2)" text-anchor="middle">→</text>

  <!-- Stage 1: Zygote -->
  <circle cx="82" cy="135" r="68" fill="url(#cell-g)" stroke="rgba(100,255,218,0.5)" stroke-width="1.5"/>
  <circle cx="82" cy="130" r="20" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.3)" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="82" y="134" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.5)" text-anchor="middle">2n</text>
  <text x="82" y="218" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.4)" text-anchor="middle">1 cell · full genome</text>

  <!-- Stage 2: 2-cell -->
  <circle cx="242" cy="135" r="65" fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.2)" stroke-width="1"/>
  <circle cx="220" cy="135" r="42" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.45)" stroke-width="1.5"/>
  <circle cx="264" cy="135" r="42" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.45)" stroke-width="1.5"/>
  <line x1="242" y1="93" x2="242" y2="177" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="242" y="218" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.4)" text-anchor="middle">2 cells · first cleavage</text>

  <!-- Stage 3: 4-cell -->
  <circle cx="412" cy="135" r="65" fill="rgba(255,110,199,0.03)" stroke="rgba(255,110,199,0.15)" stroke-width="1"/>
  <circle cx="390" cy="113" r="35" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <circle cx="434" cy="113" r="35" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <circle cx="390" cy="157" r="35" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <circle cx="434" cy="157" r="35" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <text x="412" y="218" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.4)" text-anchor="middle">4 cells · 2nd cleavage</text>

  <!-- Stage 4: Morula (16+ cells, compact mass) -->
  <circle cx="602" cy="135" r="65" fill="rgba(255,209,102,0.03)" stroke="rgba(255,209,102,0.15)" stroke-width="1"/>
  <!-- Inner cells, compact -->
  <circle cx="585" cy="118" r="22" fill="rgba(255,209,102,0.1)" stroke="rgba(255,209,102,0.4)" stroke-width="1.2"/>
  <circle cx="619" cy="118" r="22" fill="rgba(255,209,102,0.1)" stroke="rgba(255,209,102,0.4)" stroke-width="1.2"/>
  <circle cx="585" cy="152" r="22" fill="rgba(255,209,102,0.1)" stroke="rgba(255,209,102,0.4)" stroke-width="1.2"/>
  <circle cx="619" cy="152" r="22" fill="rgba(255,209,102,0.1)" stroke="rgba(255,209,102,0.4)" stroke-width="1.2"/>
  <circle cx="566" cy="135" r="20" fill="rgba(255,209,102,0.08)" stroke="rgba(255,209,102,0.3)" stroke-width="1"/>
  <circle cx="638" cy="135" r="20" fill="rgba(255,209,102,0.08)" stroke="rgba(255,209,102,0.3)" stroke-width="1"/>
  <circle cx="602" cy="100" r="20" fill="rgba(255,209,102,0.08)" stroke="rgba(255,209,102,0.3)" stroke-width="1"/>
  <circle cx="602" cy="170" r="20" fill="rgba(255,209,102,0.08)" stroke="rgba(255,209,102,0.3)" stroke-width="1"/>
  <text x="602" y="218" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.4)" text-anchor="middle">16–32 cells · solid ball</text>

  <!-- Stage 5: Blastula (hollow sphere with blastocoel) -->
  <circle cx="790" cy="135" r="65" fill="rgba(184,240,137,0.04)" stroke="rgba(184,240,137,0.5)" stroke-width="2"/>
  <!-- Cells around periphery -->
  <circle cx="790" cy="72"  r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="833" cy="87"  r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="849" cy="130" r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="833" cy="173" r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="790" cy="198" r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="747" cy="173" r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="731" cy="130" r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <circle cx="747" cy="87"  r="16" fill="rgba(184,240,137,0.1)" stroke="rgba(184,240,137,0.35)" stroke-width="1"/>
  <!-- Blastocoel (hollow center) -->
  <circle cx="790" cy="135" r="36" fill="rgba(8,11,26,0.6)" stroke="rgba(184,240,137,0.15)" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="790" y="132" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(184,240,137,0.5)" text-anchor="middle">blasto-</text>
  <text x="790" y="142" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(184,240,137,0.5)" text-anchor="middle">coel</text>
  <text x="790" y="218" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.4)" text-anchor="middle">~128 cells · hollow · fluid-filled</text>

  <!-- Cleavage time labels bottom -->
  <text x="450" y="265" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.2)" text-anchor="middle" letter-spacing="1">NO CELL GROWTH BETWEEN DIVISIONS — CELLS GET SMALLER EACH ROUND</text>
</svg>`;

// ─── SVG: Gastrulation Cross-Section ─────────────────────────────────────────
const SVG_GASTRULATION = `
<svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ecto-g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64ffda" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#64ffda" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="meso-g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="endo-g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff6ec7" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#ff6ec7" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <!-- PANEL A: Blastula before gastrulation -->
  <text x="140" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="1">A: BLASTULA</text>
  <!-- Outer circle -->
  <circle cx="140" cy="155" r="115" fill="rgba(100,255,218,0.05)" stroke="rgba(100,255,218,0.35)" stroke-width="2"/>
  <!-- Blastocoel -->
  <circle cx="140" cy="150" r="80" fill="rgba(8,11,26,0.7)" stroke="rgba(100,255,218,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="140" y="153" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.35)" text-anchor="middle">blastocoel</text>
  <!-- Vegetal plate cells (thicker at bottom) -->
  <path d="M50,220 Q140,265 230,220" stroke="rgba(255,110,199,0.5)" stroke-width="3" fill="none"/>
  <text x="140" y="283" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.5)" text-anchor="middle">vegetal plate</text>
  <text x="140" y="296" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.35)" text-anchor="middle">(will invaginate)</text>
  <!-- Animal pole -->
  <text x="140" y="50" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.4)" text-anchor="middle">animal pole</text>
  <!-- Vegetal pole -->
  <text x="140" y="315" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.4)" text-anchor="middle">vegetal pole</text>

  <!-- PANEL B: Early gastrula -->
  <text x="450" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="1">B: EARLY GASTRULA</text>
  <circle cx="450" cy="155" r="115" fill="rgba(100,255,218,0.05)" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <!-- Ectoderm outer layer -->
  <circle cx="450" cy="155" r="115" fill="url(#ecto-g)" opacity="0.3"/>
  <!-- Blastocoel compressed -->
  <ellipse cx="450" cy="135" rx="72" ry="58" fill="rgba(8,11,26,0.6)" stroke="rgba(100,255,218,0.1)" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- Archenteron (invaginating) -->
  <path d="M370,235 Q370,210 400,195 Q425,185 450,200 Q475,215 480,235" fill="rgba(255,110,199,0.2)" stroke="rgba(255,110,199,0.6)" stroke-width="2"/>
  <text x="450" y="228" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.6)" text-anchor="middle">archenteron</text>
  <!-- Blastopore -->
  <ellipse cx="370" cy="235" rx="12" ry="6" fill="rgba(255,110,199,0.5)" stroke="#ff6ec7" stroke-width="1.5"/>
  <text x="330" y="250" font-family="JetBrains Mono,monospace" font-size="7.5" fill="#ff6ec7">blastopore</text>
  <!-- Mesoderm forming between layers -->
  <path d="M340,200 Q390,180 450,178 Q510,180 560,200" stroke="#a78bfa" stroke-width="3" fill="none" opacity="0.6"/>
  <!-- Germ layer label -->
  <text x="250" y="80" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)">ectoderm</text>
  <text x="250" y="175" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.6)">mesoderm</text>
  <text x="250" y="230" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.6)">endoderm</text>

  <!-- PANEL C: Late gastrula with labeled germ layers -->
  <text x="770" y="20" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="1">C: LATE GASTRULA</text>
  <!-- Outer ectoderm -->
  <circle cx="770" cy="155" r="115" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.5)" stroke-width="2.5"/>
  <!-- Mesoderm layer (middle ring) -->
  <circle cx="770" cy="155" r="90" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.4)" stroke-width="2"/>
  <!-- Archenteron / endoderm -->
  <circle cx="770" cy="165" r="55" fill="rgba(255,110,199,0.1)" stroke="rgba(255,110,199,0.5)" stroke-width="2"/>
  <!-- Blastopore opening -->
  <path d="M640,230 Q655,248 770,258 Q885,248 900,230" stroke="rgba(255,110,199,0.5)" stroke-width="2" fill="none"/>
  <!-- Labels -->
  <text x="885" y="85"  font-family="Fraunces,serif" font-size="10" fill="#64ffda" text-anchor="start">Ectoderm</text>
  <text x="885" y="97"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.4)" text-anchor="start">outer layer</text>
  <text x="885" y="130" font-family="Fraunces,serif" font-size="10" fill="#a78bfa" text-anchor="start">Mesoderm</text>
  <text x="885" y="142" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.4)" text-anchor="start">middle layer</text>
  <text x="885" y="175" font-family="Fraunces,serif" font-size="10" fill="#ff6ec7" text-anchor="start">Endoderm</text>
  <text x="885" y="187" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.4)" text-anchor="start">inner layer</text>
  <!-- Lines to labels -->
  <line x1="883" y1="88"  x2="870" y2="80"  stroke="rgba(100,255,218,0.3)" stroke-width="0.8"/>
  <line x1="883" y1="133" x2="860" y2="130" stroke="rgba(167,139,250,0.3)" stroke-width="0.8"/>
  <line x1="883" y1="178" x2="830" y2="170" stroke="rgba(255,110,199,0.3)" stroke-width="0.8"/>
</svg>`;

// ─── SVG: Germ Layer Derivatives ─────────────────────────────────────────────
const SVG_GERMLAYERS = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg">
  <!-- Ectoderm column -->
  <rect x="10"  y="10" width="265" height="300" rx="12" fill="rgba(100,255,218,0.04)" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="10"  y="10" width="265" height="42"  rx="12" fill="rgba(100,255,218,0.12)"/>
  <text x="142" y="31" font-family="Fraunces,serif" font-size="15" fill="#64ffda" text-anchor="middle" font-weight="400">Ectoderm</text>
  <text x="142" y="44" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.5)" text-anchor="middle">outer germ layer</text>
  <!-- Ectoderm items -->
  <text x="30" y="75"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Epidermis (skin, hair, nails)</text>
  <text x="30" y="95"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Nervous system (brain, spinal cord)</text>
  <text x="30" y="115" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Sensory epithelium (eye lens, ear)</text>
  <text x="30" y="135" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Pituitary gland (anterior lobe)</text>
  <text x="30" y="155" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Enamel of teeth</text>
  <text x="30" y="175" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)">→ Lining of mouth and anus</text>
  <rect x="20" y="188" width="245" height="32" rx="6" fill="rgba(100,255,218,0.07)" stroke="rgba(100,255,218,0.2)" stroke-width="1"/>
  <text x="30" y="203" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" font-style="italic">Neural crest cells</text>
  <text x="30" y="215" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.6)">PNS, skull/face bone, melanocytes</text>
  <text x="30" y="240" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)">(derived from dorsal ectoderm —</text>
  <text x="30" y="252" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)">4th &quot;germ layer&quot; of vertebrates)</text>
  <text x="30" y="275" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.35)">Memory cue: ECTOderm = OUTSIDE</text>
  <text x="30" y="287" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.35)">(skin + nervous system interface world)</text>

  <!-- Mesoderm column -->
  <rect x="318" y="10" width="265" height="300" rx="12" fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.3)" stroke-width="1.5"/>
  <rect x="318" y="10" width="265" height="42"  rx="12" fill="rgba(167,139,250,0.12)"/>
  <text x="450" y="31" font-family="Fraunces,serif" font-size="15" fill="#a78bfa" text-anchor="middle" font-weight="400">Mesoderm</text>
  <text x="450" y="44" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(167,139,250,0.5)" text-anchor="middle">middle germ layer</text>
  <!-- Mesoderm items -->
  <text x="335" y="75"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Skeletal muscle</text>
  <text x="335" y="95"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Skeleton (bones, cartilage)</text>
  <text x="335" y="115" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Heart and circulatory system</text>
  <text x="335" y="135" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Kidneys and gonads</text>
  <text x="335" y="155" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Connective tissue (dermis)</text>
  <text x="335" y="175" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Notochord (axial skeleton signal)</text>
  <text x="335" y="195" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Smooth &amp; cardiac muscle</text>
  <text x="335" y="215" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Peritoneum (body cavity lining)</text>
  <text x="335" y="240" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.8)">→ Adrenal cortex</text>
  <text x="335" y="275" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.35)">Memory cue: MESoderm = MIDDLE</text>
  <text x="335" y="287" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.35)">(muscles, skeleton, organs "in between")</text>

  <!-- Endoderm column -->
  <rect x="626" y="10" width="265" height="300" rx="12" fill="rgba(255,110,199,0.04)" stroke="rgba(255,110,199,0.3)" stroke-width="1.5"/>
  <rect x="626" y="10" width="265" height="42"  rx="12" fill="rgba(255,110,199,0.12)"/>
  <text x="758" y="31" font-family="Fraunces,serif" font-size="15" fill="#ff6ec7" text-anchor="middle" font-weight="400">Endoderm</text>
  <text x="758" y="44" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,110,199,0.5)" text-anchor="middle">inner germ layer</text>
  <!-- Endoderm items -->
  <text x="644" y="75"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Gut tube lining (entire GI tract)</text>
  <text x="644" y="95"  font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Liver and pancreas</text>
  <text x="644" y="115" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Lungs (respiratory epithelium)</text>
  <text x="644" y="135" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Thyroid and parathyroid glands</text>
  <text x="644" y="155" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Thymus</text>
  <text x="644" y="175" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Urinary bladder lining</text>
  <text x="644" y="195" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Eustachian tube (ear)</text>
  <text x="644" y="215" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Tonsils</text>
  <text x="644" y="235" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.8)">→ Adrenal medulla (with ecto)</text>
  <text x="644" y="275" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.35)">Memory cue: ENDOderm = INSIDE</text>
  <text x="644" y="287" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.35)">(innermost: gut, glands, lungs)</text>
</svg>`;

// ─── SVG: Neurulation ─────────────────────────────────────────────────────────
const SVG_NEURAL = `
<svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
  <!-- 4 stages of neurulation -->
  <!-- Labels -->
  <text x="110" y="16" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.5)" text-anchor="middle" letter-spacing="1">NEURAL PLATE</text>
  <text x="330" y="16" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.5)" text-anchor="middle" letter-spacing="1">NEURAL FOLDS</text>
  <text x="565" y="16" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.5)" text-anchor="middle" letter-spacing="1">NEURAL GROOVE</text>
  <text x="785" y="16" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.5)" text-anchor="middle" letter-spacing="1">NEURAL TUBE</text>

  <!-- Stage 1: Flat neural plate -->
  <!-- Notochord -->
  <ellipse cx="110" cy="170" rx="38" ry="12" fill="rgba(255,209,102,0.15)" stroke="rgba(255,209,102,0.5)" stroke-width="1.5"/>
  <text x="110" y="174" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.7)" text-anchor="middle">notochord</text>
  <!-- Mesoderm flanking -->
  <rect x="30"  y="150" width="38" height="18" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <rect x="152" y="150" width="38" height="18" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <!-- Neural plate (flat ectoderm) -->
  <rect x="55" y="95" width="112" height="50" rx="6" fill="rgba(100,255,218,0.12)" stroke="rgba(100,255,218,0.5)" stroke-width="2"/>
  <text x="111" y="124" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.7)" text-anchor="middle">neural plate</text>
  <!-- Surface ectoderm -->
  <rect x="25"  y="95" width="30" height="18" rx="4" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.2)" stroke-width="1"/>
  <rect x="167" y="95" width="30" height="18" rx="4" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.2)" stroke-width="1"/>
  <!-- Notochord signal arrow -->
  <line x1="110" y1="155" x2="110" y2="148" stroke="rgba(255,209,102,0.5)" stroke-width="1.5" marker-end="none"/>
  <text x="110" y="205" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.5)" text-anchor="middle">notochord induces</text>
  <text x="110" y="215" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.5)" text-anchor="middle">neural plate</text>

  <!-- Arrows between stages -->
  <text x="225" y="125" font-family="sans-serif" font-size="22" fill="rgba(255,255,255,0.15)" text-anchor="middle">→</text>
  <text x="455" y="125" font-family="sans-serif" font-size="22" fill="rgba(255,255,255,0.15)" text-anchor="middle">→</text>
  <text x="680" y="125" font-family="sans-serif" font-size="22" fill="rgba(255,255,255,0.15)" text-anchor="middle">→</text>

  <!-- Stage 2: Neural folds rising -->
  <ellipse cx="330" cy="170" rx="38" ry="12" fill="rgba(255,209,102,0.15)" stroke="rgba(255,209,102,0.5)" stroke-width="1.5"/>
  <rect x="245" y="150" width="38" height="18" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <rect x="367" y="150" width="38" height="18" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <!-- Folds forming -->
  <path d="M270,140 L260,95 L290,100 L300,130" fill="rgba(100,255,218,0.12)" stroke="rgba(100,255,218,0.5)" stroke-width="2"/>
  <path d="M390,140 L400,95 L370,100 L360,130" fill="rgba(100,255,218,0.12)" stroke="rgba(100,255,218,0.5)" stroke-width="2"/>
  <!-- Groove beginning -->
  <path d="M290,130 Q330,150 370,130" fill="none" stroke="rgba(100,255,218,0.4)" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Neural crest cells forming at fold tips -->
  <circle cx="260" cy="95" r="5" fill="rgba(255,209,102,0.6)" stroke="rgba(255,209,102,0.8)" stroke-width="1"/>
  <circle cx="400" cy="95" r="5" fill="rgba(255,209,102,0.6)" stroke="rgba(255,209,102,0.8)" stroke-width="1"/>
  <text x="330" y="205" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)" text-anchor="middle">folds elevate</text>
  <text x="330" y="215" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.5)" text-anchor="middle">neural crest cells (gold) appear</text>

  <!-- Stage 3: Neural groove deep -->
  <ellipse cx="565" cy="175" rx="38" ry="12" fill="rgba(255,209,102,0.15)" stroke="rgba(255,209,102,0.5)" stroke-width="1.5"/>
  <rect x="482" y="157" width="38" height="16" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <rect x="602" y="157" width="38" height="16" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <!-- Deep groove -->
  <path d="M492,157 L480,75 L510,82 L530,130 L565,155 L600,130 L620,82 L650,75 L638,157" fill="rgba(100,255,218,0.1)" stroke="rgba(100,255,218,0.5)" stroke-width="2"/>
  <!-- Neural crest migrating off folds -->
  <circle cx="480" cy="76" r="5" fill="rgba(255,209,102,0.6)" stroke="rgba(255,209,102,0.8)" stroke-width="1"/>
  <circle cx="650" cy="76" r="5" fill="rgba(255,209,102,0.6)" stroke="rgba(255,209,102,0.8)" stroke-width="1"/>
  <circle cx="463" cy="90" r="4" fill="rgba(255,209,102,0.4)" stroke="rgba(255,209,102,0.6)" stroke-width="0.8"/>
  <circle cx="667" cy="90" r="4" fill="rgba(255,209,102,0.4)" stroke="rgba(255,209,102,0.6)" stroke-width="0.8"/>
  <text x="565" y="210" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)" text-anchor="middle">folds converge midline</text>

  <!-- Stage 4: Neural tube closed -->
  <ellipse cx="785" cy="175" rx="38" ry="12" fill="rgba(255,209,102,0.15)" stroke="rgba(255,209,102,0.5)" stroke-width="1.5"/>
  <rect x="700" y="157" width="38" height="16" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <rect x="820" y="157" width="38" height="16" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <!-- Closed tube -->
  <circle cx="785" cy="115" r="35" fill="rgba(100,255,218,0.1)" stroke="rgba(100,255,218,0.6)" stroke-width="2"/>
  <!-- Lumen inside tube -->
  <circle cx="785" cy="115" r="16" fill="rgba(8,11,26,0.8)" stroke="rgba(100,255,218,0.25)" stroke-width="1"/>
  <text x="785" y="119" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.4)" text-anchor="middle">lumen</text>
  <!-- Surface ectoderm healing over top -->
  <path d="M740,80 Q785,72 830,80" fill="none" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <!-- Neural crest cells migrating away (dorsolateral) -->
  <circle cx="720" cy="95" r="5" fill="rgba(255,209,102,0.7)" stroke="rgba(255,209,102,0.9)" stroke-width="1"/>
  <circle cx="850" cy="95" r="5" fill="rgba(255,209,102,0.7)" stroke="rgba(255,209,102,0.9)" stroke-width="1"/>
  <circle cx="705" cy="115" r="4" fill="rgba(255,209,102,0.5)" stroke="rgba(255,209,102,0.7)" stroke-width="0.8"/>
  <circle cx="865" cy="115" r="4" fill="rgba(255,209,102,0.5)" stroke="rgba(255,209,102,0.7)" stroke-width="0.8"/>
  <text x="785" y="210" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)" text-anchor="middle">tube sealed → spinal cord &amp; brain</text>
  <text x="785" y="220" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.5)" text-anchor="middle">neural crest (gold) migrate away →</text>
</svg>`;

// ─── MODULE HTML ──────────────────────────────────────────────────────────────
window.M02 = {
html: `
<section class="module reveal" id="animal-dev">
  <div class="module-header">
    <div class="module-num">Module 02</div>
    <h2 class="module-title">Animal <em>Development</em></h2>
    <p class="module-tag">From a single fertilised cell to a body with trillions of specialised cells — the four grand acts of animal development.</p>
  </div>

  <div class="objectives reveal">
    <ul>
      <li>Describe the acrosome reaction, fast block, and cortical reaction during fertilization</li>
      <li>Distinguish holoblastic from meroblastic cleavage and explain what determines cleavage pattern</li>
      <li>Trace gastrulation: blastopore, archenteron, and the three primary germ layers</li>
      <li>List the organ derivatives of each germ layer with examples</li>
      <li>Explain neurulation and the role and fate of neural crest cells</li>
      <li>Compare development across model organisms: sea urchin, frog, chick, and human</li>
    </ul>
  </div>

  <!-- ACT I: fertilization -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.1 · Act I</div>
    <h3>fertilization</h3>
    <p>fertilization is far more than sperm meeting egg. It is a precisely orchestrated biochemical cascade that must accomplish three goals simultaneously: trigger egg activation, prevent additional sperm entry (polyspermy), and initiate development.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 2.1 — The fertilization Cascade</div>
      ${SVG_FERT}
      <div class="fig-caption">Four-step sequence of sea urchin fertilization. Step 1: Sperm contacts the zona pellucida (jelly coat in sea urchin / zona pellucida in mammals). Step 2: Acrosome reaction — sperm releases hydrolytic enzymes to penetrate the coat. Step 3: Fast block — membrane depolarisation (Na⁺ influx) instantly prevents additional sperm binding. Step 4: Slow block — cortical granule exocytosis raises a permanent fertilization envelope (Ca²⁺-mediated, takes ~60 s).</div>
    </div>

    <div class="tabs reveal">
      <div class="tab-list">
        <button class="tab-btn active" data-tab="tab-acro">Acrosome Reaction</button>
        <button class="tab-btn" data-tab="tab-fast">Fast Block</button>
        <button class="tab-btn" data-tab="tab-slow">Slow Block (Cortical Rxn)</button>
        <button class="tab-btn" data-tab="tab-activ">Egg Activation</button>
      </div>
      <div id="tab-acro" class="tab-panel active">
        <h4>Acrosome Reaction</h4>
        <p>When sperm contacts molecules in the egg coat (e.g., ZP3 glycoprotein of zona pellucida in mammals, bindin receptor in sea urchins), the acrosome — a specialised vesicle at the sperm tip — fuses with the sperm plasma membrane and releases its contents. These include:</p>
        <ul>
          <li>Hydrolytic enzymes (e.g., acrosin) that digest through the zona pellucida or jelly coat</li>
          <li>Bindin (in sea urchins) — a species-specific protein that mediates attachment to the egg membrane</li>
        </ul>
        <p>In sea urchins, the acrosome reaction also extends an acrosomal process (F-actin polymerisation) that contacts the egg plasma membrane. In mammals, the reaction is triggered by ZP3 binding to sperm receptors, activating phospholipase C and a Ca²⁺ rise in the sperm head.</p>
        <div class="definition"><strong>Acrosome</strong>A modified lysosome-like vesicle at the anterior end of the sperm head. Its exocytosis during the acrosome reaction releases enzymes to penetrate the egg coat. Present in virtually all animals.</div>
      </div>
      <div id="tab-fast" class="tab-panel">
        <h4>Fast Block to Polyspermy</h4>
        <p>Within seconds of the first sperm fusing with the egg membrane, the egg membrane depolarises. The resting membrane potential shifts from approximately <strong>−70 mV to +20 mV</strong>. This rapid change prevents additional sperm from fusing because sperm cannot complete fusion with a positively charged membrane.</p>
        <div class="callout callout-gold">
          <div class="callout-label">◈ Mechanism</div>
          <p>Sperm fusion opens Na⁺ channels in the egg membrane → Na⁺ floods in → membrane depolarises rapidly. The positive membrane potential acts as an electrical barrier to further sperm fusion. This block is fast (seconds) but temporary — lasting only ~1–3 minutes.</p>
        </div>
        <p><strong>Important limitation:</strong> The fast block is not sufficient alone (it is temporary and can be bypassed experimentally at hyperpolarised potentials). It buys time for the slow, permanent block to be established.</p>
        <div class="warn"><strong>Exam note:</strong> The fast block to polyspermy works at the level of the plasma membrane depolarisation — it is an electrical block. Do not confuse it with the acrosome reaction (which gets sperm to the membrane) or the cortical reaction (which establishes a physical barrier).</div>
      </div>
      <div id="tab-slow" class="tab-panel">
        <h4>Slow Block — The Cortical Reaction</h4>
        <p>A calcium (Ca²⁺) wave propagates from the point of sperm entry across the entire egg surface, taking approximately 30–60 seconds to complete. This Ca²⁺ wave triggers <strong>cortical granule exocytosis</strong>:</p>
        <div class="flow">
          <div class="flow-item">
            <div class="flow-icon">1</div>
            <div class="flow-content">
              <h4>Ca²⁺ Wave Propagates</h4>
              <p>IP₃ (inositol trisphosphate) released by PLCγ triggers Ca²⁺ release from the ER. This triggers more Ca²⁺ release (calcium-induced calcium release, CICR), creating a wave from the point of sperm entry across the entire egg.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-icon">2</div>
            <div class="flow-content">
              <h4>Cortical Granules Fuse</h4>
              <p>Thousands of cortical granules (membrane vesicles just beneath the plasma membrane) fuse with the plasma membrane in response to Ca²⁺ and release their contents into the perivitelline space.</p>
            </div>
          </div>
          <div class="flow-item">
            <div class="flow-icon">3</div>
            <div class="flow-content">
              <h4>fertilization Envelope Forms</h4>
              <p>Cortical granule contents include: enzymes that modify zona pellucida glycoproteins (ZP2, ZP3) so sperm can no longer bind; mucopolysaccharides that osmotically draw water in, lifting the envelope; and ovoperoxidase that cross-links the envelope proteins. The raised envelope physically separates from the plasma membrane, preventing further sperm contact.</p>
            </div>
          </div>
        </div>
        <div class="definition"><strong>fertilization Envelope</strong>The hardened, elevated vitelline envelope (sea urchin) or zona pellucida (mammals) that forms the permanent slow block to polyspermy. Raised by the cortical reaction within minutes of fertilization.</div>
      </div>
      <div id="tab-activ" class="tab-panel">
        <h4>Egg Activation</h4>
        <p>fertilization "wakes up" the metabolically dormant egg. Key activation events include:</p>
        <ul>
          <li><strong>Resumption of meiosis:</strong> Most vertebrate eggs are arrested at metaphase II of meiosis. The Ca²⁺ wave triggers completion of meiosis II, releasing the second polar body.</li>
          <li><strong>Metabolic activation:</strong> Protein synthesis and oxygen consumption increase dramatically. mRNAs stored in the egg (maternal mRNAs) begin to be translated.</li>
          <li><strong>Pronucleus formation:</strong> The sperm and egg DNA condense into male and female pronuclei, which fuse to form the diploid zygote nucleus.</li>
          <li><strong>Cortical rotation (frogs):</strong> Sperm entry triggers a rotation of the cortical cytoplasm, relocating the "grey crescent" and establishing the dorsoventral axis.</li>
        </ul>
        <div class="tip">In frogs, the sperm entry point defines the future ventral side. The grey crescent forms opposite the sperm entry point — this becomes the dorsal side, where the Spemann organiser will form. Vegetal pole → endoderm; animal pole → ectoderm.</div>
      </div>
    </div>
  </div>

  <!-- ACT II: CLEAVAGE -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.2 · Act II</div>
    <h3>Cleavage</h3>
    <p>Cleavage is a rapid series of mitotic divisions that partition the large egg cytoplasm into many smaller cells called <strong>blastomeres</strong>, without any overall increase in mass. Unlike normal cell cycles, cleavage cells skip the G1 and G2 gap phases — S phase follows M phase almost immediately. The result is that cells get progressively smaller with each division, rapidly increasing cell number.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 2.2 — Cleavage Progression (Holoblastic Equal)</div>
      ${SVG_CLEAVAGE}
      <div class="fig-caption">Cleavage progression in an isolecithal egg (e.g., sea urchin, human). Each division doubles cell number without growth. The blastula — a hollow, fluid-filled sphere with a central blastocoel — prepares the embryo for the dramatic cell movements of gastrulation.</div>
    </div>

    <div class="keypoint reveal">
      <strong>Key Principle:</strong> The pattern of cleavage is determined by the <em>amount</em> and <em>distribution</em> of yolk in the egg. Yolk physically impedes cell division — where yolk is concentrated, cells divide more slowly and remain larger.
    </div>

    <h4>Cleavage Types by Yolk Distribution</h4>
    <table class="reveal">
      <thead>
        <tr>
          <th>Yolk Type</th>
          <th>Distribution</th>
          <th>Cleavage Pattern</th>
          <th>Example Organisms</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="pill teal">Isolecithal</span></td>
          <td>Little yolk, evenly distributed</td>
          <td><strong>Holoblastic equal</strong> — all cells same size</td>
          <td>Sea urchins, most invertebrates, <em>placental mammals</em></td>
        </tr>
        <tr>
          <td><span class="pill violet">Mesolecithal</span></td>
          <td>Moderate yolk, concentrated at vegetal pole</td>
          <td><strong>Holoblastic unequal</strong> — vegetal cells larger</td>
          <td>Frogs (Xenopus), salamanders, lampreys</td>
        </tr>
        <tr>
          <td><span class="pill rose">Telolecithal</span></td>
          <td>Massive yolk at vegetal pole</td>
          <td><strong>Meroblastic discoidal</strong> — only small disc on top of yolk divides</td>
          <td>Birds, reptiles, bony fishes, sharks</td>
        </tr>
        <tr>
          <td><span class="pill gold">Centrolecithal</span></td>
          <td>Yolk in centre, cytoplasm at periphery</td>
          <td><strong>Meroblastic superficial</strong> — only cortical cytoplasm divides</td>
          <td>Insects (including Drosophila)</td>
        </tr>
      </tbody>
    </table>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Radial Cleavage</h4>
        <p>Cleavage planes are aligned with or perpendicular to the animal-vegetal axis, producing tiers of cells stacked directly on top of one another. Characteristic of <strong>deuterostomes</strong> (echinoderms, hemichordates, chordates including vertebrates). Associated with <em>regulative/conditional</em> development — blastomeres remain pluripotent early on and can regulate if some are removed.</p>
        <div class="pill teal">Deuterostomes</div>
        <div class="pill teal">Regulative</div>
        <div class="pill teal">Sea urchin, frog, human</div>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Spiral Cleavage</h4>
        <p>Cleavage planes are tilted at an angle to the animal-vegetal axis, producing quartets of cells offset from those below. Characteristic of <strong>protostomes</strong> (annelids, molluscs, most flatworms). Associated with <em>mosaic/determinate</em> development — each blastomere's fate is fixed early; removing one cell causes a specific part of the embryo to be missing.</p>
        <div class="pill rose">Protostomes</div>
        <div class="pill rose">Mosaic/determinate</div>
        <div class="pill rose">Snails, clams, worms</div>
      </div>
    </div>

    <div class="example reveal">
      <strong>Example — Human (Mammalian) Cleavage:</strong>
      <p>Mammalian eggs are nearly isolecithal and undergo <strong>rotational cleavage</strong> — the first division is meridional, and the second division has one cell dividing meridionally while the other divides equatorially. Cleavage is extraordinarily slow (one division per ~24 hours, vs. minutes in sea urchins). By day 4–5, the embryo reaches the <strong>blastocyst</strong> stage — equivalent to a blastula but with two distinct regions: the <em>inner cell mass</em> (ICM, which forms the embryo proper) and the <em>trophoblast</em> (which forms the placenta and chorion). The zona pellucida is shed ("hatching") ~5 days after fertilization, allowing implantation.</p>
    </div>

    <div class="example reveal">
      <strong>Example — Frog (Xenopus) Cleavage:</strong>
      <p>Frog eggs are mesolecithal with a heavy yolk-laden vegetal pole and lighter animal pole. Cleavage is holoblastic but <em>unequal</em> — the vegetal pole cells are larger (macromeres) than the animal pole cells (micromeres). The blastula forms a large blastocoel shifted toward the animal pole. The vegetal cells are fated to become endoderm, the animal cells ectoderm, and the marginal zone between them (the equatorial region) becomes mesoderm. Fate is mostly set by cytoplasmic determinants but remains somewhat regulative — identical twins can arise from separation of early blastomeres.</p>
    </div>
  </div>

  <!-- ACT III: GASTRULATION -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.3 · Act III</div>
    <h3>Gastrulation — "The most important time of your life" (Lewis Wolpert)</h3>
    <p>Gastrulation transforms the blastula into a three-layered <strong>gastrula</strong> through dramatic cell movements. It establishes the three primary germ layers (ectoderm, mesoderm, endoderm), defines the body axes, and creates the embryonic blueprint that all subsequent organ development follows.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 2.3 — Gastrulation in Cross-Section</div>
      ${SVG_GASTRULATION}
      <div class="fig-caption">A: Blastula — hollow sphere with blastocoel cavity. The vegetal plate (bottom) will invaginate. B: Early gastrula — vegetal cells invaginate inward, forming the archenteron (primitive gut). The blastopore marks the opening. Mesoderm (violet) begins forming between ectoderm and endoderm. C: Late gastrula — three distinct germ layers established. The archenteron will become the gut; the blastopore fate depends on the phylum (see below).</div>
    </div>

    <div class="compare reveal">
      <div class="compare-col">
        <h4 style="color:var(--teal)">Deuterostomes</h4>
        <ul>
          <li><strong>Blastopore → anus</strong></li>
          <li>Mouth forms second (from a secondary opening)</li>
          <li>Coelom forms by <em>enterocoely</em> (outpocketing of archenteron)</li>
          <li>Radial cleavage; regulative</li>
          <li><strong>Examples:</strong> Echinoderms, hemichordates, chordates (including all vertebrates)</li>
        </ul>
      </div>
      <div class="compare-col">
        <h4 style="color:var(--rose)">Protostomes</h4>
        <ul>
          <li><strong>Blastopore → mouth</strong></li>
          <li>Anus forms second</li>
          <li>Coelom forms by <em>schizocoely</em> (splitting of mesoderm mass)</li>
          <li>Spiral cleavage; mosaic (mostly)</li>
          <li><strong>Examples:</strong> Molluscs, annelids, arthropods, nematodes</li>
        </ul>
      </div>
    </div>

    <h4>Mechanisms of Cell Movement During Gastrulation</h4>
    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Invagination</h4>
        <p>A sheet of cells folds inward, like pushing a finger into a balloon. The primary mechanism in sea urchin gastrulation — the vegetal plate buckles inward to form the archenteron. Driven by changes in cell shape (apical constriction) and changes in cell adhesion.</p>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Ingression</h4>
        <p>Individual cells break away from the epithelium and migrate as individual mesenchyme cells into the blastocoel. In sea urchins, primary mesenchyme cells (PMCs) ingress first, migrate to specific positions, and form the larval skeleton. A key early event before invagination begins.</p>
      </div>
      <div class="card reveal-item delay-3">
        <h4>Involution</h4>
        <p>A sheet of cells turns inward and migrates along the inner surface of the outer layer. The primary mechanism during frog gastrulation — bottle cells form at the dorsal lip of the blastopore, and successive waves of cells involute inward, creating the archenteron and germ layers.</p>
      </div>
      <div class="card reveal-item delay-4">
        <h4>Epiboly</h4>
        <p>A sheet of cells spreads and thins to cover a larger area. In frog gastrulation, animal pole cells (presumptive ectoderm) spread to cover the entire embryo as the vegetal cells involute beneath them. Convergent extension also occurs — cells intercalate to narrow and lengthen an axis.</p>
      </div>
    </div>

    <div class="example reveal">
      <strong>Example — Sea Urchin Gastrulation:</strong>
      <p>Sea urchin gastrulation is the best-studied and most tractable model. It proceeds in distinct steps: (1) Primary mesenchyme cells (PMCs) ingress from the vegetal plate into the blastocoel — driven by loss of E-cadherin and gain of N-cadherin, making them mesenchymal. PMCs migrate to specific positions and secrete the calcite skeletal spicules. (2) The remaining vegetal plate buckles inward (invagination) to form the archenteron, driven by apical constriction of bottle cells. (3) The archenteron extends dramatically by convergent extension and secondary mesenchyme cell filopodia "tugging" the tip toward the animal pole. (4) The tip of the archenteron contacts and fuses with a specific region of ectoderm to form the mouth. The blastopore becomes the anus.</p>
    </div>
  </div>

  <!-- GERM LAYERS -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.4 · Germ Layers</div>
    <h3>The Three Primary Germ Layers</h3>
    <p>Every tissue and organ in your body traces its origin to one of three embryonic germ layers established during gastrulation. Memorising these derivations is essential for anatomy and pathology courses, not just for this exam.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 2.4 — Germ Layer Derivatives</div>
      ${SVG_GERMLAYERS}
      <div class="fig-caption">Comprehensive organ derivations for each of the three germ layers. Colour coding: teal = ectoderm, violet = mesoderm, rose = endoderm. Note that neural crest cells (gold), derived from dorsal ectoderm, are sometimes called the "4th germ layer" given their extensive and diverse contributions.</div>
    </div>

    <div class="callout callout-gold reveal">
      <div class="callout-label">★ Neural Crest Cells — the "4th Germ Layer"</div>
      <p>Neural crest cells are unique to vertebrates. They form at the border of the neural plate and surface ectoderm during neurulation, undergo an <strong>epithelial-to-mesenchymal transition (EMT)</strong>, and migrate throughout the body to form a staggering diversity of structures: peripheral ganglia, Schwann cells, facial and skull bones, melanocytes, smooth muscle of the aorta, the adrenal medulla, dental pulp, and more. Their failure to migrate correctly underlies dozens of congenital defects (neurocristopathies), including cleft palate, Hirschsprung's disease, and DiGeorge syndrome.</p>
    </div>
  </div>

  <!-- ACT IV: ORGANOGENESIS -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.5 · Act IV</div>
    <h3>Organogenesis — Neurulation &amp; the Neural Tube</h3>
    <p>Organogenesis begins immediately after gastrulation as the germ layers begin forming specific organs. The first and most dramatic event in vertebrate organogenesis is <strong>neurulation</strong> — the formation of the neural tube, which gives rise to the entire central nervous system.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 2.5 — Neurulation in Four Stages</div>
      ${SVG_NEURAL}
      <div class="fig-caption">Cross-sectional view of neurulation. The notochord (yellow) is the inducing tissue — it secretes Chordin and Noggin to block BMP signalling in the overlying ectoderm, causing it to adopt neural plate fate. The neural plate (teal) folds up and fuses to form the hollow neural tube — the future spinal cord and brain. Neural crest cells (gold) delaminate from the dorsal neural tube margins and migrate throughout the embryo.</div>
    </div>

    <div class="flow reveal">
      <div class="flow-item reveal-item delay-1">
        <div class="flow-icon">1</div>
        <div class="flow-content">
          <h4>Neural Plate Induction</h4>
          <p>The notochord (a rod of mesodermal cells running along the dorsal midline) secretes BMP inhibitors: <strong>Chordin</strong>, <strong>Noggin</strong>, and <strong>Follistatin</strong>. By blocking BMP4 signalling, these proteins allow the overlying dorsal ectoderm to adopt neural plate fate. Without notochord signalling, BMP4 would instruct the ectoderm to become epidermis. This is the inductive event at the heart of the Spemann organiser's activity.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-2">
        <div class="flow-icon">2</div>
        <div class="flow-content">
          <h4>Neural Plate Folding</h4>
          <p>The neural plate thickens and then its lateral edges (the neural folds) elevate. This is driven by <strong>apical constriction</strong> of neural plate cells (actin-myosin contraction at the apical surface narrows the top of each cell, creating a wedge shape that curves the sheet), and by changes in cell adhesion and the cytoskeleton. The midline of the neural plate becomes the neural groove.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-3">
        <div class="flow-icon">3</div>
        <div class="flow-content">
          <h4>Neural Tube Closure</h4>
          <p>The neural folds elevate further and converge at the dorsal midline, eventually fusing to form the hollow neural tube. Fusion proceeds in a "zipper" fashion from the middle outward toward the anterior and posterior ends. The surface ectoderm also heals over the top. <strong>Failure to close</strong> causes neural tube defects: anencephaly (anterior failure) or spina bifida (posterior failure). Folic acid supplementation dramatically reduces NTD risk.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-4">
        <div class="flow-icon">4</div>
        <div class="flow-content">
          <h4>Neural Crest Delamination &amp; Migration</h4>
          <p>As the neural folds converge, cells at their dorsal margins (the neural crest) undergo an <strong>epithelial-to-mesenchymal transition (EMT)</strong>: they downregulate E-cadherin, upregulate N-cadherin and other markers, and detach from the epithelium. They then migrate along stereotyped pathways throughout the embryo, guided by cell-cell and cell-ECM interactions (fibronectin, laminin). Their extraordinary plasticity and migratory capacity are unique to vertebrates.</p>
        </div>
      </div>
    </div>

    <div class="example reveal">
      <strong>Example — Somitogenesis:</strong>
      <p>Simultaneously with neurulation, the paraxial mesoderm on either side of the neural tube segments into paired blocks of cells called <strong>somites</strong>. Somites form in a strict anterior-to-posterior sequence, with new somites "pinching off" from the presomitic mesoderm approximately every 90 minutes in chick. This is regulated by a <strong>segmentation clock</strong> — oscillating expression of Notch/Wnt/FGF pathway components creates periodic waves of gene expression that, when they hit a determination front, trigger somite boundary formation. Each somite subsequently differentiates into: the <em>sclerotome</em> (vertebrae and ribs), <em>myotome</em> (skeletal muscle), and <em>dermatome</em> (dermis of the back).</p>
    </div>
  </div>

  <!-- Organism Comparison -->
  <div class="section-break reveal">
    <div class="section-label">§ 2.6</div>
    <h3>Model Organisms Comparison</h3>
    <table class="reveal">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Sea Urchin</th>
          <th>Frog (Xenopus)</th>
          <th>Chick</th>
          <th>Human</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Yolk</strong></td>
          <td>Isolecithal (little)</td>
          <td>Mesolecithal (moderate)</td>
          <td>Telolecithal (massive)</td>
          <td>Isolecithal (little)</td>
        </tr>
        <tr>
          <td><strong>Cleavage</strong></td>
          <td>Holoblastic equal, radial</td>
          <td>Holoblastic unequal, radial</td>
          <td>Meroblastic discoidal</td>
          <td>Holoblastic equal, rotational</td>
        </tr>
        <tr>
          <td><strong>Blastula</strong></td>
          <td>Blastula (hollow)</td>
          <td>Blastula (shifted animal)</td>
          <td>Blastodisc (flat disc)</td>
          <td>Blastocyst (ICM + trophoblast)</td>
        </tr>
        <tr>
          <td><strong>Gastrulation</strong></td>
          <td>Invagination + ingression</td>
          <td>Involution + epiboly</td>
          <td>Primitive streak / ingression</td>
          <td>Primitive streak</td>
        </tr>
        <tr>
          <td><strong>Key advantage</strong></td>
          <td>Transparent, external, fast</td>
          <td>Large egg, genetic tools</td>
          <td>Accessible, easy manipulation</td>
          <td>Directly applicable to medicine</td>
        </tr>
      </tbody>
    </table>

    <div class="tip reveal">
      Humans use a <strong>primitive streak</strong> (a thickening of the epiblast) instead of a classic blastopore. Cells migrate through the primitive streak to become mesoderm and endoderm, analogous to involution through the blastopore in frogs. The node (Hensen's node) at the anterior end of the primitive streak is the equivalent of the Spemann organiser — it secretes the same BMP inhibitors.
    </div>
  </div>

  <!-- Q&A -->
  <div class="section-break reveal">
    <div class="section-label">§ Exam Practice</div>
    <h3>Q&amp;A — Module 02</h3>
    <div class="qa-set">
      <div class="qa-item">
        <div class="qa-q">What is the difference between the fast block and the slow block to polyspermy? Why are both necessary? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>The <strong>fast block</strong> is an electrical phenomenon: sperm fusion triggers Na⁺ influx, rapidly depolarising the egg membrane from −70 mV to +20 mV within seconds. The positive membrane potential prevents additional sperm from fusing. However, this block is temporary (lasts 1–3 minutes) — the membrane cannot stay depolarised indefinitely.</p>
          <p>The <strong>slow block (cortical reaction)</strong> is a physical/chemical mechanism: a Ca²⁺ wave propagates across the egg, triggering exocytosis of cortical granules. Their contents harden the vitelline envelope (raising it as a fertilization envelope), chemically modify the egg coat so sperm can no longer bind, and destroy sperm receptors. This takes about 60 seconds but is permanent.</p>
          <p>Both are necessary because: the fast block is immediate (preventing polyspermy in the critical seconds after first sperm entry) but temporary; the slow block is permanent but takes time to set up. Polyspermy is lethal — extra sets of chromosomes create catastrophic mitotic errors.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">A chicken egg has massive yolk concentrated at the vegetal pole. Predict and explain its cleavage pattern. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>The chicken egg is <strong>telolecithal</strong> (heavily yolk-laden, yolk at vegetal pole), so it undergoes <strong>meroblastic discoidal cleavage</strong>. Only the small disc of cytoplasm sitting on top of the yolk mass (the blastodisc) can divide — the yolk mass itself is too dense and nutrient-rich to be cleaved by the mitotic machinery. Division occurs only in this thin cytoplasmic disc, producing a disc-shaped blastoderm sitting atop the undivided yolk. Gastrulation occurs through the formation of a primitive streak in this blastoderm — conceptually analogous to the blastopore but structurally different. The yolk is gradually consumed as the embryo develops.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">What is the notochord, and what is its significance during development? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>The <strong>notochord</strong> is a rod of mesodermal cells that forms along the dorsal midline of all chordate embryos during gastrulation/early organogenesis. It is the defining character of the phylum Chordata. Its developmental roles are:</p>
          <ol>
            <li><strong>Structural support:</strong> The notochord is the primary axial skeleton of early chordates and persists as such in primitive vertebrates (e.g., lancelets). In most vertebrates, it is replaced by the vertebral column and persists only as the nucleus pulposus of intervertebral discs.</li>
            <li><strong>Neural induction:</strong> The notochord secretes BMP inhibitors (Chordin, Noggin, Follistatin) that induce the overlying ectoderm to form the neural plate — the starting point of the entire central nervous system.</li>
            <li><strong>Dorsoventral patterning:</strong> The notochord (via Sonic Hedgehog, Shh) patterns the ventral neural tube — specifying floor plate cells, motor neurons, and interneurons at different Shh concentration thresholds.</li>
          </ol>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">List three tissues derived from neural crest cells and explain why their widespread distribution is clinically significant. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>Neural crest cells are remarkably versatile — they are sometimes called the "4th germ layer." Three key derivatives:</p>
          <ol>
            <li><strong>Peripheral nervous system:</strong> Dorsal root ganglia (sensory neurons), sympathetic ganglia, parasympathetic ganglia, and enteric nervous system ganglia (the "gut brain" — controls peristalsis). Loss of enteric ganglia causes Hirschsprung's disease.</li>
            <li><strong>Craniofacial skeleton:</strong> Most of the skull and face bones, including the jaw, are derived from cranial neural crest, not mesoderm. This is unique to vertebrates. Defects in cranial neural crest migration cause cleft palate and mandibular hypoplasia.</li>
            <li><strong>Melanocytes:</strong> All pigment cells of the skin, hair, and eyes are derived from neural crest cells that migrate dorsolaterally into the skin. Defects cause piebaldism or contribute to melanoma susceptibility.</li>
          </ol>
          <p>Clinical significance: because neural crest cells migrate so extensively, their derivatives are found throughout the body. Diseases of neural crest origin (neurocristopathies) include: Hirschsprung's disease, DiGeorge syndrome (22q11 deletion), neurofibromatosis, melanoma, neuroblastoma, and Waardenburg syndrome. Understanding neural crest biology is key to treating these conditions.</p>
        </div></div>
      </div>
    </div>
  </div>

</section>
`};
