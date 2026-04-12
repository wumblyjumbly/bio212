'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   MODULE 04 · Speciation & The History of Life
═══════════════════════════════════════════════════════════════════════════ */

// ─── SVG: Allopatric vs Sympatric Speciation ─────────────────────────────────
const SVG_SPECIATION = `
<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pop-grad-a" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64ffda" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#64ffda" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="pop-grad-b" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff6ec7" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#ff6ec7" stop-opacity="0.05"/>
    </linearGradient>
    <marker id="arr-spec" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="rgba(255,255,255,0.3)"/>
    </marker>
  </defs>

  <!-- === ALLOPATRIC SPECIATION === -->
  <text x="222" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(100,255,218,0.7)" text-anchor="middle" letter-spacing="1">ALLOPATRIC SPECIATION</text>
  <text x="222" y="30" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">geographic isolation → divergence → reproductive isolation</text>

  <!-- Step 1: One population -->
  <text x="45" y="55" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.35)">1. One population</text>
  <ellipse cx="85" cy="120" rx="60" ry="45" fill="url(#pop-grad-a)" stroke="rgba(100,255,218,0.4)" stroke-width="1.5"/>
  <text x="85" y="118" font-family="Fraunces,serif" font-size="11" fill="rgba(100,255,218,0.7)" text-anchor="middle">Population</text>
  <text x="85" y="130" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.45)" text-anchor="middle">one species</text>

  <!-- Arrow down -->
  <line x1="85" y1="167" x2="85" y2="192" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" marker-end="url(#arr-spec)"/>

  <!-- Step 2: Geographic barrier forms -->
  <text x="45" y="210" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.35)">2. Barrier forms</text>
  <ellipse cx="55"  cy="255" rx="38" ry="30" fill="url(#pop-grad-a)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5"/>
  <ellipse cx="120" cy="255" rx="38" ry="30" fill="url(#pop-grad-b)" stroke="rgba(255,110,199,0.35)" stroke-width="1.5"/>
  <!-- Barrier (mountain range) -->
  <path d="M87,228 L93,215 L99,228 L105,212 L111,228" fill="none" stroke="rgba(255,209,102,0.6)" stroke-width="2" stroke-linejoin="round"/>
  <text x="98" y="295" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.6)" text-anchor="middle">barrier</text>
  <!-- Different environments icons -->
  <text x="55"  cy="255" y="253" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.6)" text-anchor="middle">A</text>
  <text x="120" cy="255" y="253" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,110,199,0.6)" text-anchor="middle">B</text>

  <!-- Arrow down -->
  <line x1="85" y1="287" x2="85" y2="310" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" marker-end="url(#arr-spec)"/>
  <text x="128" y="304" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">evolve independently</text>
  <text x="128" y="316" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">(mutations, drift, selection)</text>

  <!-- Step 3: Two species -->
  <text x="45" y="330" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.35)">3. Two species!</text>
  <ellipse cx="55"  cy="360" rx="38" ry="18" fill="url(#pop-grad-a)" stroke="rgba(100,255,218,0.5)" stroke-width="2"/>
  <ellipse cx="135" cy="360" rx="38" ry="18" fill="url(#pop-grad-b)" stroke="rgba(255,110,199,0.5)" stroke-width="2"/>
  <text x="55"  y="363" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.7)" text-anchor="middle">Sp. A</text>
  <text x="135" y="363" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.7)" text-anchor="middle">Sp. B</text>
  <!-- Cannot interbreed X -->
  <text x="95" y="367" font-family="sans-serif" font-size="14" fill="rgba(255,110,199,0.5)" text-anchor="middle">✗</text>

  <!-- Example -->
  <rect x="10" y="378" width="225" height="0" rx="4" fill="rgba(100,255,218,0.04)" stroke="rgba(100,255,218,0.15)" stroke-width="1"/>

  <!-- Vertical separator -->
  <line x1="275" y1="0" x2="275" y2="380" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- === SYMPATRIC SPECIATION: POLYPLOIDY === -->
  <text x="580" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(167,139,250,0.7)" text-anchor="middle" letter-spacing="1">SYMPATRIC — POLYPLOIDY</text>
  <text x="580" y="30" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">no geographic isolation — genome duplication drives instant speciation</text>

  <!-- Parent species A (2n) -->
  <text x="360" y="55" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.5)">Species A</text>
  <rect x="300" y="62" width="100" height="60" rx="8" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.4)" stroke-width="1.5"/>
  <text x="350" y="92" font-family="Fraunces,serif" font-size="13" fill="#64ffda" text-anchor="middle">AA</text>
  <text x="350" y="107" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.4)" text-anchor="middle">2n = 14</text>

  <text x="725" y="55" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,110,199,0.5)">Species B</text>
  <rect x="760" y="62" width="100" height="60" rx="8" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <text x="810" y="92" font-family="Fraunces,serif" font-size="13" fill="#ff6ec7" text-anchor="middle">BB</text>
  <text x="810" y="107" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,110,199,0.4)" text-anchor="middle">2n = 18</text>

  <!-- Hybridisation arrows -->
  <line x1="405" y1="92" x2="490" y2="92" stroke="rgba(167,139,250,0.3)" stroke-width="1.5"/>
  <text x="450" y="87" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.5)" text-anchor="middle">interbreed</text>
  <line x1="755" y1="92" x2="670" y2="92" stroke="rgba(167,139,250,0.3)" stroke-width="1.5"/>

  <!-- F1 Hybrid (sterile) -->
  <rect x="498" y="62" width="165" height="75" rx="8" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.35)" stroke-width="1.5"/>
  <text x="580" y="85" font-family="Fraunces,serif" font-size="12" fill="#a78bfa" text-anchor="middle">AB hybrid</text>
  <text x="580" y="100" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.6)" text-anchor="middle">n = 7+9 = 16</text>
  <text x="580" y="115" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.5)" text-anchor="middle">⚠ STERILE — chromosomes</text>
  <text x="580" y="126" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.5)" text-anchor="middle">can't pair in meiosis</text>

  <!-- Genome duplication arrow -->
  <line x1="580" y1="140" x2="580" y2="168" stroke="rgba(184,240,137,0.5)" stroke-width="2" marker-end="url(#arr-spec)"/>
  <text x="595" y="157" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(184,240,137,0.6)">genome duplication</text>
  <text x="595" y="168" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(184,240,137,0.6)">(error in mitosis/meiosis)</text>

  <!-- Allotetraploid (new species, fertile!) -->
  <rect x="478" y="175" width="205" height="80" rx="10" fill="rgba(184,240,137,0.06)" stroke="rgba(184,240,137,0.5)" stroke-width="2"/>
  <text x="580" y="198" font-family="Fraunces,serif" font-size="13" fill="#b8f089" text-anchor="middle">AABB allotetraploid</text>
  <text x="580" y="215" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(184,240,137,0.7)" text-anchor="middle">4n = 32 — FERTILE!</text>
  <text x="580" y="232" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.5)" text-anchor="middle">can self-fertilise; reproductively</text>
  <text x="580" y="244" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.5)" text-anchor="middle">isolated from both parents</text>

  <!-- New species badge -->
  <rect x="490" y="257" width="182" height="22" rx="6" fill="rgba(184,240,137,0.12)" stroke="rgba(184,240,137,0.4)" stroke-width="1"/>
  <text x="580" y="272" font-family="JetBrains Mono,monospace" font-size="8.5" fill="#b8f089" text-anchor="middle">★ NEW SPECIES — INSTANTANEOUS!</text>

  <!-- Examples -->
  <text x="580" y="310" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">Real examples: Tragopogon (goatsbeard) allotetraploids,</text>
  <text x="580" y="322" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">wheat (hexaploid — 3 genomes!), cotton, tobacco</text>
  <text x="580" y="340" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(167,139,250,0.4)" text-anchor="middle">~70% of flowering plant species have polyploidy in their history</text>
</svg>`;

// ─── SVG: Reproductive Barriers ──────────────────────────────────────────────
const SVG_BARRIERS = `
<svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="450" y="20" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="2">REPRODUCTIVE ISOLATION BARRIERS</text>

  <!-- Timeline bar: sperm meets egg -->
  <line x1="40" y1="80" x2="860" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <!-- Fertilisation event marker -->
  <line x1="500" y1="60" x2="500" y2="100" stroke="rgba(255,209,102,0.5)" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="500" y="53" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,209,102,0.7)" text-anchor="middle">FERTILISATION</text>

  <!-- PRE-ZYGOTIC region -->
  <rect x="30" y="30" width="455" height="20" rx="4" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.25)" stroke-width="1"/>
  <text x="255" y="44" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.7)" text-anchor="middle" letter-spacing="1">PRE-ZYGOTIC (before fertilisation)</text>

  <!-- POST-ZYGOTIC region -->
  <rect x="510" y="30" width="360" height="20" rx="4" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.25)" stroke-width="1"/>
  <text x="690" y="44" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.7)" text-anchor="middle" letter-spacing="1">POST-ZYGOTIC (after fertilisation)</text>

  <!-- PRE-ZYGOTIC BARRIERS (5 types) -->
  <!-- 1: Habitat -->
  <line x1="70" y1="80" x2="70" y2="110" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="28" y="112" width="85" height="60" rx="6" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.3)" stroke-width="1"/>
  <text x="70" y="130" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" text-anchor="middle">Habitat</text>
  <text x="70" y="143" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">Same region,</text>
  <text x="70" y="154" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">different microhabitat</text>
  <text x="70" y="167" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. apple maggot fly</text>

  <!-- 2: Temporal -->
  <line x1="165" y1="80" x2="165" y2="110" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="123" y="112" width="85" height="60" rx="6" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.3)" stroke-width="1"/>
  <text x="165" y="130" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" text-anchor="middle">Temporal</text>
  <text x="165" y="143" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">Different breeding</text>
  <text x="165" y="154" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">seasons or times</text>
  <text x="165" y="167" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. spring vs fall</text>
  <text x="165" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">flowering plants</text>

  <!-- 3: Behavioural -->
  <line x1="260" y1="80" x2="260" y2="110" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="218" y="112" width="85" height="60" rx="6" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.4)" stroke-width="1.5"/>
  <text x="260" y="130" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" text-anchor="middle">Behavioural</text>
  <text x="260" y="143" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.65)" text-anchor="middle">Different courtship</text>
  <text x="260" y="154" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.65)" text-anchor="middle">displays / calls</text>
  <text x="260" y="167" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">Most important in</text>
  <text x="260" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">animals (★ exam fav)</text>

  <!-- 4: Mechanical -->
  <line x1="358" y1="80" x2="358" y2="110" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="316" y="112" width="85" height="60" rx="6" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.3)" stroke-width="1"/>
  <text x="358" y="130" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" text-anchor="middle">Mechanical</text>
  <text x="358" y="143" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">Incompatible</text>
  <text x="358" y="154" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">genitalia or flowers</text>
  <text x="358" y="167" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. flower shape</text>
  <text x="358" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">in sage species</text>

  <!-- 5: Gametic -->
  <line x1="455" y1="80" x2="455" y2="110" stroke="rgba(100,255,218,0.3)" stroke-width="1.5"/>
  <rect x="415" y="112" width="77" height="60" rx="6" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.3)" stroke-width="1"/>
  <text x="453" y="130" font-family="Fraunces,serif" font-size="9.5" fill="#64ffda" text-anchor="middle">Gametic</text>
  <text x="453" y="143" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">Gametes can't</text>
  <text x="453" y="154" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.55)" text-anchor="middle">fuse or survive</text>
  <text x="453" y="167" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. sea urchin</text>
  <text x="453" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">bindin specificity</text>

  <!-- POST-ZYGOTIC BARRIERS (3 types) -->
  <!-- 6: Hybrid inviability -->
  <line x1="570" y1="80" x2="570" y2="110" stroke="rgba(255,110,199,0.3)" stroke-width="1.5"/>
  <rect x="522" y="112" width="100" height="60" rx="6" fill="rgba(255,110,199,0.06)" stroke="rgba(255,110,199,0.3)" stroke-width="1"/>
  <text x="572" y="128" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Hybrid</text>
  <text x="572" y="140" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Inviability</text>
  <text x="572" y="153" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.55)" text-anchor="middle">Hybrid embryo</text>
  <text x="572" y="164" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.55)" text-anchor="middle">doesn't develop</text>
  <text x="572" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. some frog</text>
  <text x="572" y="187" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">and salamander crosses</text>

  <!-- 7: Hybrid sterility -->
  <line x1="700" y1="80" x2="700" y2="110" stroke="rgba(255,110,199,0.3)" stroke-width="1.5"/>
  <rect x="648" y="112" width="105" height="60" rx="6" fill="rgba(255,110,199,0.08)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <text x="700" y="128" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Hybrid</text>
  <text x="700" y="140" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Sterility</text>
  <text x="700" y="153" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.65)" text-anchor="middle">Viable hybrid</text>
  <text x="700" y="164" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.65)" text-anchor="middle">but can't reproduce</text>
  <text x="700" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">★ Mule (horse × donkey)</text>
  <text x="700" y="187" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">Liger (lion × tiger)</text>

  <!-- 8: Hybrid breakdown -->
  <line x1="830" y1="80" x2="830" y2="110" stroke="rgba(255,110,199,0.3)" stroke-width="1.5"/>
  <rect x="778" y="112" width="105" height="60" rx="6" fill="rgba(255,110,199,0.06)" stroke="rgba(255,110,199,0.3)" stroke-width="1"/>
  <text x="830" y="128" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Hybrid</text>
  <text x="830" y="140" font-family="Fraunces,serif" font-size="9.5" fill="#ff6ec7" text-anchor="middle">Breakdown</text>
  <text x="830" y="153" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.55)" text-anchor="middle">F1 fertile, but</text>
  <text x="830" y="164" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.55)" text-anchor="middle">F2 reduced fitness</text>
  <text x="830" y="177" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">e.g. some rice and</text>
  <text x="830" y="187" font-family="JetBrains Mono,monospace" font-size="6.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">cotton hybrids</text>

  <!-- Bottom note -->
  <text x="450" y="235" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.25)" text-anchor="middle">Barriers can act at multiple stages. The first effective barrier encountered stops the reproductive interaction.</text>
  <text x="450" y="248" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.25)" text-anchor="middle">Prezygotic barriers are generally considered more efficient because they prevent costly hybrid production.</text>
  <text x="450" y="265" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,209,102,0.45)" text-anchor="middle">★ Reinforcement: when hybrids have reduced fitness, selection strengthens prezygotic barriers further (Dobzhansky–Muller)</text>
</svg>`;

// ─── SVG: Geological Time Scale ──────────────────────────────────────────────
const SVG_GEO = `
<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="450" y="18" font-family="JetBrains Mono,monospace" font-size="9.5" fill="rgba(255,255,255,0.35)" text-anchor="middle" letter-spacing="2">GEOLOGICAL TIME SCALE — 4.6 BILLION YEARS OF EARTH HISTORY</text>

  <!-- ── PRECAMBRIAN (4600 - 541 Ma) ── (takes up most space) -->
  <!-- Hadean -->
  <rect x="30" y="30" width="108" height="300" rx="0" fill="rgba(255,110,199,0.12)" stroke="rgba(255,110,199,0.25)" stroke-width="1"/>
  <text x="84" y="52" font-family="Fraunces,serif" font-size="11" fill="rgba(255,110,199,0.8)" text-anchor="middle">Hadean</text>
  <text x="84" y="66" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.5)" text-anchor="middle">4600–4000 Ma</text>
  <text x="84" y="105" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Heavy meteor</text>
  <text x="84" y="116" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">bombardment</text>
  <text x="84" y="128" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">No life</text>
  <text x="84" y="200" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Moon forms</text>

  <!-- Archean -->
  <rect x="140" y="30" width="110" height="300" rx="0" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.25)" stroke-width="1"/>
  <text x="195" y="52" font-family="Fraunces,serif" font-size="11" fill="rgba(167,139,250,0.8)" text-anchor="middle">Archean</text>
  <text x="195" y="66" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.5)" text-anchor="middle">4000–2500 Ma</text>
  <text x="195" y="105" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">First life</text>
  <text x="195" y="116" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">~3.8–3.5 Ga</text>
  <text x="195" y="128" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Prokaryotes</text>
  <text x="195" y="200" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Stromatolites</text>
  <text x="195" y="212" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">(cyanobacteria)</text>

  <!-- Proterozoic -->
  <rect x="252" y="30" width="108" height="300" rx="0" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.2)" stroke-width="1"/>
  <text x="306" y="52" font-family="Fraunces,serif" font-size="11" fill="rgba(100,255,218,0.7)" text-anchor="middle">Proterozoic</text>
  <text x="306" y="66" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.45)" text-anchor="middle">2500–541 Ma</text>
  <text x="306" y="105" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">First eukaryotes</text>
  <text x="306" y="116" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">~2.1 Ga</text>
  <text x="306" y="128" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">First multicellular</text>
  <text x="306" y="140" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">~0.6 Ga (Ediacaran)</text>
  <text x="306" y="200" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">O₂ atmosphere</text>
  <text x="306" y="212" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Snowball Earth</text>

  <!-- PHANEROZOIC bracket -->
  <rect x="362" y="30" width="508" height="300" rx="0" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="616" y="20" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="1">PHANEROZOIC EON (541 Ma – present)</text>

  <!-- PALEOZOIC -->
  <rect x="364" y="32" width="246" height="296" rx="0" fill="rgba(125,211,252,0.06)" stroke="rgba(125,211,252,0.2)" stroke-width="1"/>
  <text x="487" y="50" font-family="Fraunces,serif" font-size="12" fill="rgba(125,211,252,0.7)" text-anchor="middle">Paleozoic</text>
  <text x="487" y="63" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(125,211,252,0.45)" text-anchor="middle">541 – 252 Ma</text>
  <!-- Periods within Paleozoic -->
  <rect x="366" y="72" width="240" height="30" rx="3" fill="rgba(100,255,218,0.1)" stroke="rgba(100,255,218,0.2)" stroke-width="0.8"/>
  <text x="486" y="91" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.8)" text-anchor="middle">★ Cambrian Explosion 541–520 Ma</text>
  <text x="486" y="120" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Most animal phyla appear in fossil record</text>
  <text x="486" y="133" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Ordovician → first vertebrates (jawless fish)</text>
  <text x="486" y="146" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Silurian → plants colonise land</text>
  <text x="486" y="159" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Devonian → Age of Fishes; first forests</text>
  <text x="486" y="172" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Carboniferous → Age of Amphibians; coal swamps</text>
  <text x="486" y="185" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Permian → first reptiles dominate</text>
  <!-- Mass extinction markers -->
  <rect x="366" y="196" width="240" height="22" rx="3" fill="rgba(255,110,199,0.1)" stroke="rgba(255,110,199,0.3)" stroke-width="1"/>
  <text x="486" y="211" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.8)" text-anchor="middle">☠ End-Permian Extinction 252 Ma</text>
  <text x="486" y="234" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.5)" text-anchor="middle">96% of species lost — "The Great Dying"</text>
  <text x="486" y="248" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Also: End-Ordovician (86% sp) | Late Devonian (75%)</text>

  <!-- MESOZOIC -->
  <rect x="612" y="32" width="168" height="200" rx="0" fill="rgba(184,240,137,0.06)" stroke="rgba(184,240,137,0.2)" stroke-width="1"/>
  <text x="696" y="50" font-family="Fraunces,serif" font-size="12" fill="rgba(184,240,137,0.7)" text-anchor="middle">Mesozoic</text>
  <text x="696" y="63" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.45)" text-anchor="middle">252 – 66 Ma</text>
  <text x="696" y="88" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Triassic: first dinosaurs,</text>
  <text x="696" y="100" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">first mammals</text>
  <text x="696" y="118" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Jurassic: dinosaurs</text>
  <text x="696" y="130" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">dominate; first birds</text>
  <text x="696" y="148" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Cretaceous: flowering</text>
  <text x="696" y="160" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">plants; peak dino diversity</text>
  <!-- K-Pg extinction -->
  <rect x="614" y="176" width="164" height="22" rx="3" fill="rgba(255,110,199,0.1)" stroke="rgba(255,110,199,0.3)" stroke-width="1"/>
  <text x="696" y="191" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.8)" text-anchor="middle">☠ K-Pg Extinction 66 Ma</text>
  <text x="696" y="215" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.5)" text-anchor="middle">76% sp; asteroid impact</text>
  <text x="696" y="229" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Chicxulub crater, Yucatán</text>

  <!-- CENOZOIC -->
  <rect x="782" y="32" width="85" height="296" rx="0" fill="rgba(255,209,102,0.08)" stroke="rgba(255,209,102,0.25)" stroke-width="1"/>
  <text x="824" y="50" font-family="Fraunces,serif" font-size="11" fill="rgba(255,209,102,0.8)" text-anchor="middle">Cenozoic</text>
  <text x="824" y="63" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.45)" text-anchor="middle">66 Ma–now</text>
  <text x="824" y="95" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Age of</text>
  <text x="824" y="106" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">Mammals</text>
  <text x="824" y="135" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Paleogene:</text>
  <text x="824" y="146" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">mammal rad.</text>
  <text x="824" y="175" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Neogene:</text>
  <text x="824" y="186" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Hominin line</text>
  <text x="824" y="215" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Quaternary:</text>
  <text x="824" y="226" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Ice ages</text>
  <text x="824" y="237" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">Homo sapiens</text>
  <text x="824" y="248" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.25)" text-anchor="middle">~300 kya</text>

  <!-- Timeline scale bar at bottom -->
  <text x="30"  y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">4600 Ma</text>
  <text x="180" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">4000 Ma</text>
  <text x="300" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">2500 Ma</text>
  <text x="400" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">541 Ma</text>
  <text x="600" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">252 Ma</text>
  <text x="750" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">66 Ma</text>
  <text x="850" y="355" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)">NOW</text>
  <line x1="30" y1="345" x2="870" y2="345" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Note: not to scale label -->
  <text x="450" y="372" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.2)" text-anchor="middle">* Not to scale — Phanerozoic eon (541 Ma) is exaggerated relative to 4 billion years of Precambrian</text>
</svg>`;

// ─── MODULE HTML ──────────────────────────────────────────────────────────────
window.M04 = {
html: `
<section class="module reveal" id="speciation">
  <div class="module-header">
    <div class="module-num">Module 04</div>
    <h2 class="module-title">Speciation &amp; the <em>History of Life</em></h2>
    <p class="module-tag">How one species becomes two — and how 3.8 billion years of life's history has been recorded in the rock and DNA of the living world.</p>
  </div>

  <div class="objectives reveal">
    <ul>
      <li>Define the biological species concept and explain its limitations</li>
      <li>Distinguish prezygotic from postzygotic reproductive barriers with examples</li>
      <li>Compare allopatric and sympatric speciation, and explain how polyploidy can cause instant speciation</li>
      <li>Interpret a phylogenetic tree: identify clades, synapomorphies, outgroups</li>
      <li>Place major evolutionary events on the geological time scale</li>
      <li>Explain the Cambrian explosion and its significance</li>
      <li>List the five major mass extinctions and their approximate causes</li>
    </ul>
  </div>

  <!-- SECTION: Species Concepts -->
  <div class="section-break reveal">
    <div class="section-label">§ 4.1</div>
    <h3>What is a Species?</h3>
    <p>Defining "species" is one of biology's most persistently debated problems. Over 30 species concepts exist; three are most commonly used:</p>

    <div class="accordion reveal">
      <div class="accordion-item">
        <button class="accordion-trigger">Biological Species Concept (BSC) — Ernst Mayr, 1942 <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>A species is a group of populations whose members can <strong>interbreed</strong> (actually or potentially) and produce <strong>fertile offspring</strong>, and who are reproductively isolated from other groups.</p>
            <p><strong>Strengths:</strong> Conceptually clean; ties species identity to reproductive isolation; widely used in zoology.</p>
            <p><strong>Limitations:</strong></p>
            <ul>
              <li>Cannot be applied to <strong>asexual organisms</strong> (bacteria, most archaea, many plants by parthenogenesis)</li>
              <li>Cannot be applied to <strong>fossils</strong> — we can't observe mating behaviour in extinct species</li>
              <li>Many "good" species produce fertile hybrids in the lab but don't mate in nature — the concept becomes ambiguous</li>
              <li>Doesn't handle the continuum of speciation — populations in the middle of diverging</li>
              <li>Ring species (like Ensatina salamanders) violate the concept: adjacent populations interbreed, but the terminal populations of the ring do not</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Morphological Species Concept <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>A species is defined by <strong>shared structural and morphological features</strong> that distinguish it from other groups. Historically the most-used concept (pre-Darwin) and still practical for taxonomy, especially for fossils and asexual organisms.</p>
            <p><strong>Limitations:</strong> Morphologically identical populations may be reproductively isolated (cryptic species — e.g., many insect and frog species identified by mating calls, not anatomy). Highly variable populations (sexual dimorphism, juvenile vs. adult) create confusion. Convergent evolution can make unrelated species morphologically similar.</p>
            <div class="example" style="margin:0.5rem 0;">
              <strong>Cryptic species:</strong> The malaria mosquito <em>Anopheles gambiae</em> was long thought to be one species. Molecular and mating studies revealed it is actually a complex of ~8 morphologically identical but reproductively isolated sibling species — with different vector capacities for malaria. This discovery was medically critical.
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Phylogenetic / Lineage Species Concept <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>A species is the <strong>smallest monophyletic group</strong> (clade) — a group consisting of an ancestor and all of its descendants that share at least one unique derived character (synapomorphy). Defined by genealogical exclusivity and evolutionary history.</p>
            <p><strong>Strengths:</strong> Applies to asexual organisms; consistent with cladistic methodology; can be applied to fossils using molecular clocks.</p>
            <p><strong>Limitations:</strong> Tends to "oversplit" — recognises many more species than BSC (e.g., gorillas: 1 BSC species → 2–4 phylogenetic species). Debated whether shared ancestry alone is sufficient without reproductive isolation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION: Reproductive Isolation -->
  <div class="section-break reveal">
    <div class="section-label">§ 4.2</div>
    <h3>Reproductive Isolation Barriers</h3>
    <p>Speciation requires <strong>reproductive isolation</strong> — mechanisms that prevent gene flow between populations. These barriers are classified by whether they act before or after fertilisation:</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 4.1 — Reproductive Isolation Barriers</div>
      ${SVG_BARRIERS}
      <div class="fig-caption">Reproductive barriers form a sequential gauntlet. Prezygotic barriers act before fertilisation and are generally more efficient (less costly). Postzygotic barriers require the energetic investment of producing a hybrid, only to fail. Natural selection generally reinforces barriers over time when hybrids are less fit (character displacement, reinforcement).</div>
    </div>

    <div class="keypoint reveal">
      <strong>The Mule Test:</strong> The mule (horse ♀ × donkey ♂) is the textbook example of hybrid sterility — it is a healthy, strong animal but infertile because horse (2n=64) and donkey (2n=62) chromosomes cannot pair properly in meiosis. The hinny (donkey ♀ × horse ♂) is the reciprocal cross — also sterile, but with slightly different characteristics due to genomic imprinting differences. These are classical postzygotic isolating mechanisms.
    </div>
  </div>

  <!-- SECTION: Speciation Modes -->
  <div class="section-break reveal">
    <div class="section-label">§ 4.3</div>
    <h3>Modes of Speciation</h3>

    <div class="figure reveal">
      <div class="fig-label">Fig 4.2 — Allopatric &amp; Sympatric Speciation</div>
      ${SVG_SPECIATION}
      <div class="fig-caption">Left: Allopatric speciation — the most common mode. Geographic separation prevents gene flow; independent evolution creates divergence; eventually reproductive isolation accumulates even if barriers are removed. Right: Sympatric speciation via allopolyploidy — two related species hybridise and produce a sterile F1 hybrid. If the hybrid's genome doubles (4n), it can self-fertilise and is immediately reproductively isolated from both parent species. This is the most common mode of sympatric speciation and is especially prevalent in plants.</div>
    </div>

    <div class="tabs reveal">
      <div class="tab-list">
        <button class="tab-btn active" data-tab="tab-allo">Allopatric</button>
        <button class="tab-btn" data-tab="tab-sym-poly">Sympatric — Polyploidy</button>
        <button class="tab-btn" data-tab="tab-sym-sel">Sympatric — Selection</button>
        <button class="tab-btn" data-tab="tab-examples">Case Studies</button>
      </div>
      <div id="tab-allo" class="tab-panel active">
        <h4>Allopatric Speciation</h4>
        <p><strong>The most common mode of speciation.</strong> A population is divided by a geographic barrier (mountain range, ocean, river, ice sheet, deforestation) that prevents gene flow. The isolated subpopulations evolve independently through mutation, selection, and genetic drift. Over time, they accumulate enough genetic differences that, if the barrier is removed and they come back into contact, they can no longer interbreed — they are reproductively isolated and have become distinct species.</p>
        <div class="grid g2">
          <div class="card">
            <h4>Vicariance</h4>
            <p>A barrier splits a previously continuous population. The population doesn't move — the landscape changes. Example: The uplift of the Andes mountains split populations of birds, leading to the high species diversity on each slope. Continental drift split Gondwana, separating populations that became marsupials (Australia) and placentals (other continents).</p>
          </div>
          <div class="card">
            <h4>Dispersal + Isolation</h4>
            <p>A small number of individuals colonise a new area (founder effect) and become geographically isolated. Example: Darwin's finches — a small flock from mainland South America colonised the Galápagos, diversified into 13+ species on different islands with different ecological niches. Hawaiian honeycreepers — one colonist diversified into 50+ species (now many extinct).</p>
          </div>
        </div>
      </div>
      <div id="tab-sym-poly" class="tab-panel">
        <h4>Sympatric Speciation — Allopolyploidy</h4>
        <p>Allopolyploidy is hybridisation between two species followed by genome doubling. It produces a new species <strong>instantaneously</strong> — within a single generation — without any geographic separation. This is the dominant mode of sympatric speciation and is extremely common in plants.</p>
        <div class="example">
          <strong>Tragopogon (goatsbeard):</strong> In the early 1900s, three European Tragopogon species were introduced to North America. In Washington state, two allotetraploid species (T. mirus and T. miscellus) arose in the 20th century — we can observe this speciation event happening in the present day. Each is fertile within itself, sterile when crossed with the parent species.
        </div>
        <div class="example">
          <strong>Common wheat (Triticum aestivum):</strong> Hexaploid (6n = 42 chromosomes) — contains three ancestral diploid genomes (AA + BB + DD). Result of two successive hybridisation + polyploidy events over ~10,000 years. Modern wheat could not exist without these speciation events.
        </div>
        <div class="callout callout-lime">
          <div class="callout-label">◈ Autopolyploidy vs Allopolyploidy</div>
          <p><strong>Autopolyploidy:</strong> Genome duplication within one species (4n from 2n). Produces an autotetraploid. Chromosomes pair in sets of 4 — often slightly reduced fertility. Less common as a speciation mechanism but occurs in plants like potatoes (4n). <strong>Allopolyploidy:</strong> Hybridisation between species + genome duplication. Each chromosome set has a partner for meiosis → full fertility. Far more important evolutionarily.</p>
        </div>
      </div>
      <div id="tab-sym-sel" class="tab-panel">
        <h4>Sympatric Speciation — Disruptive Selection</h4>
        <p>When disruptive selection favours two extreme phenotypes within a population (occupying two different niches), and if individuals with those phenotypes preferentially mate with each other (<strong>assortative mating</strong>), speciation can occur without geographic isolation. This is theoretically possible but harder to demonstrate empirically than allopatric speciation.</p>
        <div class="example">
          <strong>Apple maggot fly (Rhagoletis pomonella):</strong> Originally bred only on hawthorn. In the 1860s, after apples were introduced to North America, some flies began breeding on apples. Apple flies and hawthorn flies now breed on different trees at different times, creating habitat and temporal isolation. They show genetic differences consistent with early-stage speciation — without geographic separation. This is one of the best-documented cases of incipient sympatric speciation in animals.
        </div>
        <div class="example">
          <strong>Cichlid fish in Lake Victoria:</strong> ~500 species evolved in approximately 15,000 years — one of the most explosive adaptive radiations known. Speciation driven largely by sexual selection (female preference for male coloration) and disruptive ecological selection (different feeding niches). High gene flow within the lake yet rapid speciation — demonstrates sympatric mechanisms at work.
        </div>
      </div>
      <div id="tab-examples" class="tab-panel">
        <h4>Key Case Studies</h4>
        <div class="grid g2">
          <div class="card">
            <h4>Ensatina Salamanders — Ring Species</h4>
            <p>Ensatina eschscholtzii forms a ring of populations around California's Central Valley. Adjacent populations interbreed freely, but the two end populations (that complete the "ring" in southern California) coexist without interbreeding — they are effectively different species. Ring species demonstrate that species divergence is a continuum, not a discrete threshold. They are problematic for the BSC but beautiful illustrations of evolution in progress.</p>
          </div>
          <div class="card">
            <h4>Galápagos Finches — Adaptive Radiation</h4>
            <p>14 species of Darwin's finches all descended from one South American finch ancestor. Allopatric speciation on different islands, followed by secondary contact. Diverged primarily in bill morphology to exploit different food sources: large seeds (large ground finches), cactus flowers (cactus finches), insects (warbler finches), blood (vampire finch). Peter &amp; Rosemary Grant's 40+ year study documented natural selection on bill size during a 1977 drought — finches with larger bills survived better when only large, hard seeds remained.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION: Phylogenetics -->
  <div class="section-break reveal">
    <div class="section-label">§ 4.4</div>
    <h3>Reading Phylogenetic Trees</h3>
    <p>A phylogenetic tree (cladogram) is a hypothesis about evolutionary relationships. Each branch point (node) represents a common ancestor; each tip represents a living or fossil species. Trees are read by topology, not branch length (unless explicitly scaled).</p>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Key Terms</h4>
        <ul>
          <li><strong style="color:var(--teal)">Clade (monophyletic group)</strong> — An ancestor and ALL of its descendants. The only natural grouping in cladistics.</li>
          <li><strong style="color:var(--teal)">Synapomorphy</strong> — A shared derived character that defines a clade. The trait evolved once in the common ancestor. Used to identify monophyletic groups.</li>
          <li><strong style="color:var(--teal)">Outgroup</strong> — A more distantly related taxon used to root the tree and determine which characters are ancestral (plesiomorphic) vs. derived.</li>
          <li><strong style="color:var(--teal)">Parsimony</strong> — The preferred tree is the one requiring the fewest evolutionary changes. More complex trees are rejected unless there is strong evidence otherwise.</li>
          <li><strong style="color:var(--rose)">Paraphyletic</strong> — Includes an ancestor and SOME but not all descendants (e.g., "reptiles" excluding birds). Not natural.</li>
          <li><strong style="color:var(--rose)">Polyphyletic</strong> — Groups organisms from different ancestors based on shared convergent traits (e.g., "flying vertebrates"). Artificial.</li>
        </ul>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Molecular Clocks</h4>
        <p>Neutral mutations accumulate at approximately constant rates over time (the <strong>molecular clock hypothesis</strong>). By comparing DNA sequences between species and calibrating with fossil dates, we can estimate when lineages diverged.</p>
        <ul>
          <li>Different genes tick at different rates — highly conserved genes (rRNA) tick slowly; pseudogenes and introns tick faster</li>
          <li>Mitochondrial DNA evolves ~10× faster than nuclear DNA → used for recent divergences (populations, species)</li>
          <li>Ribosomal RNA evolves slowly → used for deep phylogenies (kingdoms, phyla)</li>
          <li>Human/chimp divergence: ~6–8 Ma (from molecular clock + fossil calibration)</li>
          <li>Horizontal gene transfer in bacteria violates the clock and makes bacterial phylogenetics "tree of life" more of a "web of life"</li>
        </ul>
        <div class="tip" style="margin:0.5rem 0;">The "tree of life" as traditionally drawn assumes a strictly bifurcating tree. But HGT (horizontal gene transfer) between bacteria — including transfer of entire metabolic pathways — means the early tree is really more of a network or "ring."</div>
      </div>
    </div>
  </div>

  <!-- SECTION: History of Life / Geological Time -->
  <div class="section-break reveal">
    <div class="section-label">§ 4.5</div>
    <h3>The History of Life</h3>

    <div class="figure reveal">
      <div class="fig-label">Fig 4.3 — Geological Time Scale</div>
      ${SVG_GEO}
      <div class="fig-caption">Earth is ~4.6 billion years old. Life began ~3.8 billion years ago (simple prokaryotes). The Phanerozoic eon (last 541 million years) contains all the familiar macroscopic life — and most of the fossil record. Note that 88% of Earth's history is "Precambrian." The last million years in which Homo sapiens has existed is a tiny sliver at the right edge of this scale.</div>
    </div>

    <div class="callout callout-teal reveal">
      <div class="callout-label">★ The Cambrian Explosion (~541–520 Ma)</div>
      <p>In geologically rapid time (~20 million years — a blink in geological terms), most major animal body plans (phyla) appeared in the fossil record for the first time. The Burgess Shale (British Columbia, Canada) and Chengjiang (China) preserve extraordinary soft-body fossils from this explosion. Before the Cambrian, the Ediacaran fauna (~635–541 Ma) had strange, soft-bodied organisms unlike anything living today. The Cambrian explosion may have been triggered by: rising oxygen levels, ecological feedback loops (arms races between predators and prey), the evolution of vision, and/or developmental innovations (Hox genes).</p>
    </div>

    <h4>The Five Major Mass Extinctions</h4>
    <table class="reveal">
      <thead>
        <tr>
          <th>Extinction Event</th>
          <th>Time (Ma)</th>
          <th>% Species Lost</th>
          <th>Likely Cause(s)</th>
          <th>Key Consequence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>End-Ordovician</strong></td>
          <td>~443</td>
          <td>~86%</td>
          <td>Glaciation + sea-level drop; ocean anoxia</td>
          <td>Marine invertebrate diversity crash</td>
        </tr>
        <tr>
          <td><strong>Late Devonian</strong></td>
          <td>~375–360</td>
          <td>~75%</td>
          <td>Ocean anoxia; climate cooling; multiple pulses</td>
          <td>Reef ecosystems destroyed; fish lineages pruned</td>
        </tr>
        <tr>
          <td><strong>End-Permian</strong> ("The Great Dying")</td>
          <td>~252</td>
          <td>~96%</td>
          <td>Siberian Traps volcanism → global warming, acidification, anoxia</td>
          <td>Near-total collapse of marine and terrestrial ecosystems; opened niches for archosaurs → dinosaurs</td>
        </tr>
        <tr>
          <td><strong>End-Triassic</strong></td>
          <td>~201</td>
          <td>~80%</td>
          <td>CAMP volcanism (Central Atlantic Magmatic Province)</td>
          <td>Eliminated competitors → dinosaurs dominated Jurassic</td>
        </tr>
        <tr>
          <td><strong>End-Cretaceous</strong> (K-Pg)</td>
          <td>~66</td>
          <td>~76%</td>
          <td>Chicxulub asteroid + Deccan Traps volcanism</td>
          <td>Non-avian dinosaurs extinct; mammal adaptive radiation</td>
        </tr>
      </tbody>
    </table>

    <div class="callout callout-rose reveal">
      <div class="callout-label">◈ The 6th Mass Extinction?</div>
      <p>Many biologists argue we are in the middle of a <strong>sixth mass extinction</strong>, driven by human activity. Current extinction rates are estimated at 100–1,000× background rates. Unlike the previous five — caused by geological or astronomical events — this one is biogenic. Species are lost primarily through: <strong>habitat destruction</strong> (dominant factor), invasive species, overexploitation, pollution, and climate change (increasingly important). The IUCN estimates ~41% of amphibian species, ~25% of mammals, and ~14% of birds are threatened with extinction.</p>
    </div>
  </div>

  <!-- Q&A -->
  <div class="section-break reveal">
    <div class="section-label">§ Exam Practice</div>
    <h3>Q&amp;A — Module 04</h3>
    <div class="qa-set">
      <div class="qa-item">
        <div class="qa-q">A new plant species (4n) is discovered that can interbreed with neither of the two diploid species that inhabit the same meadow. Which type of speciation does this represent, and what mechanism most likely produced it? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>This is <strong>sympatric speciation</strong> via <strong>allopolyploidy</strong>. The 4n plant is most likely an <em>allotetraploid</em> — produced when two different diploid species (each 2n) hybridised to produce a sterile F1 hybrid (because the two parental chromosome sets couldn't pair at meiosis), and then the hybrid's genome was accidentally doubled during a failed cell division. The resulting 4n plant has two sets from each parent, allowing proper chromosome pairing in meiosis → it is fertile. Because it has a different ploidy from both parent species, it cannot produce viable offspring with either parent (chromosomes would not pair correctly) → it is reproductively isolated → it is a new species. This process can occur in a single generation — one of the fastest possible modes of speciation.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Why is behavioural (ethological) isolation considered the most important prezygotic barrier in animals? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>Behavioural isolation is considered most important in animals because: (1) <strong>It acts first</strong> — mating requires active selection of a partner, and mate choice is the primary filter. Animals must find each other, recognise each other as conspecific, perform and respond to species-specific displays, calls, chemical signals (pheromones) or dances. If these signals don't match, mating doesn't begin. (2) <strong>It is highly species-specific and rapidly diverges</strong> — courtship signals are often under intense sexual selection, which drives rapid divergence. (3) <strong>It is efficient</strong> — no energy is wasted producing gametes or (worse) a hybrid offspring. Habitat, temporal, mechanical, and gametic barriers also occur, but behavioural isolation is typically the primary barrier in most animal groups studied. In contrast, plants rely more on mechanical (flower structure) and temporal barriers, since they can't behaviourally "choose" mates.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Place these events in chronological order: first land plants, first mammals, Cambrian explosion, first eukaryotes, end-Permian extinction, first dinosaurs. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <ol>
            <li><strong>First eukaryotes</strong> — ~2.1 billion years ago (Proterozoic)</li>
            <li><strong>Cambrian explosion</strong> — ~541–520 million years ago (early Paleozoic)</li>
            <li><strong>First land plants</strong> — ~470–450 Ma (Ordovician-Silurian transition; first vascular plants Silurian ~430 Ma)</li>
            <li><strong>End-Permian extinction</strong> — ~252 Ma ("The Great Dying")</li>
            <li><strong>First dinosaurs</strong> — ~240–230 Ma (early-middle Triassic)</li>
            <li><strong>First mammals</strong> — ~225–210 Ma (late Triassic, contemporaneous with early dinosaurs; both groups arose from therapsids after the end-Permian extinction opened ecological niches)</li>
          </ol>
          <p>Note: Mammals and dinosaurs both arose in the Triassic, but dinosaurs dominated until the K-Pg extinction 66 Ma, after which mammals diversified explosively.</p>
        </div></div>
      </div>
    </div>
  </div>

</section>
`};
