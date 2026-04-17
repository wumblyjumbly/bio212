'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   MODULE 01 · Principles of Development
═══════════════════════════════════════════════════════════════════════════ */

// ─── SVG: Totipotency → Differentiation Funnel ───────────────────────────────
const SVG_POTENCY = `
<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#64ffda" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ff6ec7" stop-opacity="0.8"/>
    </linearGradient>
    <filter id="glow1"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <!-- Funnel shape -->
  <polygon points="50,20 770,20 600,320 220,320" fill="none" stroke="rgba(100,255,218,0.12)" stroke-width="1"/>
  <!-- Tier backgrounds -->
  <rect x="120" y="25"  width="580" height="55"  rx="8" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.2)" stroke-width="1"/>
  <rect x="170" y="100" width="480" height="55"  rx="8" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.2)" stroke-width="1"/>
  <rect x="230" y="175" width="360" height="55"  rx="8" fill="rgba(255,110,199,0.06)" stroke="rgba(255,110,199,0.2)" stroke-width="1"/>
  <rect x="300" y="250" width="220" height="55"  rx="8" fill="rgba(255,209,102,0.06)" stroke="rgba(255,209,102,0.2)" stroke-width="1"/>
  <!-- Labels left -->
  <text x="50" y="58"  font-family="JetBrains Mono,monospace" font-size="10" fill="#64ffda" letter-spacing="1">TOTIPOTENT</text>
  <text x="50" y="72"  font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(100,255,218,0.5)">can form any cell</text>
  <text x="50" y="133" font-family="JetBrains Mono,monospace" font-size="10" fill="#a78bfa" letter-spacing="1">PLURIPOTENT</text>
  <text x="50" y="147" font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(167,139,250,0.5)">can form any body cell</text>
  <text x="50" y="208" font-family="JetBrains Mono,monospace" font-size="10" fill="#ff6ec7" letter-spacing="1">MULTIPOTENT</text>
  <text x="50" y="222" font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(255,110,199,0.5)">lineage-restricted</text>
  <text x="50" y="283" font-family="JetBrains Mono,monospace" font-size="10" fill="#ffd166" letter-spacing="1">UNIPOTENT</text>
  <text x="50" y="297" font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(255,209,102,0.5)">one cell type only</text>
  <!-- Cell examples in tiers -->
  <!-- Totipotent: zygote, early blastomeres -->
  <circle cx="280" cy="52"  r="22" fill="rgba(100,255,218,0.12)" stroke="#64ffda" stroke-width="1.5" filter="url(#glow1)"/>
  <text   cx="280" cy="49"  font-family="Fraunces,serif" font-size="9"  fill="#64ffda" text-anchor="middle" dominant-baseline="middle">Zygote</text>
  <text   cx="280" cy="61"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)" text-anchor="middle">1-cell</text>
  <circle cx="410" cy="52"  r="22" fill="rgba(100,255,218,0.10)" stroke="#64ffda" stroke-width="1"/>
  <text   cx="410" cy="49"  font-family="Fraunces,serif" font-size="9"  fill="#64ffda" text-anchor="middle" dominant-baseline="middle">Early</text>
  <text   cx="410" cy="61"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)" text-anchor="middle">blastomeres</text>
  <circle cx="540" cy="52"  r="22" fill="rgba(100,255,218,0.08)" stroke="rgba(100,255,218,0.4)" stroke-width="1"/>
  <text   cx="540" cy="52"  font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(100,255,218,0.6)" text-anchor="middle" dominant-baseline="middle">up to ~4-cell</text>
  <!-- Pluripotent: ICM, ESC -->
  <circle cx="320" cy="127" r="22" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1.5"/>
  <text   cx="320" cy="127" font-family="Fraunces,serif" font-size="9"  fill="#a78bfa" text-anchor="middle" dominant-baseline="middle">ICM / ESC</text>
  <circle cx="420" cy="127" r="22" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.4)" stroke-width="1"/>
  <text   cx="420" cy="127" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.6)" text-anchor="middle" dominant-baseline="middle">iPSCs</text>
  <circle cx="520" cy="127" r="22" fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <text   cx="520" cy="127" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(167,139,250,0.6)" text-anchor="middle" dominant-baseline="middle">epiblast</text>
  <!-- Multipotent -->
  <circle cx="360" cy="202" r="22" fill="rgba(255,110,199,0.10)" stroke="#ff6ec7" stroke-width="1.5"/>
  <text   cx="360" cy="199" font-family="Fraunces,serif" font-size="8"  fill="#ff6ec7" text-anchor="middle" dominant-baseline="middle">HSC</text>
  <text   cx="360" cy="211" font-family="JetBrains Mono,monospace" font-size="6" fill="rgba(255,110,199,0.6)" text-anchor="middle">hematopoietic</text>
  <circle cx="460" cy="202" r="22" fill="rgba(255,110,199,0.07)" stroke="rgba(255,110,199,0.35)" stroke-width="1"/>
  <text   cx="460" cy="202" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.6)" text-anchor="middle" dominant-baseline="middle">neural stem</text>
  <!-- Unipotent -->
  <circle cx="410" cy="277" r="20" fill="rgba(255,209,102,0.10)" stroke="#ffd166" stroke-width="1.5"/>
  <text   cx="410" cy="274" font-family="Fraunces,serif" font-size="8"  fill="#ffd166" text-anchor="middle" dominant-baseline="middle">Spermatogonia</text>
  <text   cx="410" cy="286" font-family="JetBrains Mono,monospace" font-size="6" fill="rgba(255,209,102,0.5)" text-anchor="middle">→ sperm only</text>
  <!-- Down arrow -->
  <line x1="410" y1="330" x2="410" y2="340" stroke="rgba(100,255,218,0.3)" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="410" y="330" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.4)" text-anchor="middle">INCREASING SPECIALISATION →</text>
</svg>`;

// ─── SVG: Drosophila Bicoid/Nanos Gradient ───────────────────────────────────
const SVG_BICOID = `
<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-fly" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#64ffda" stop-opacity="0.35"/>
      <stop offset="40%"  stop-color="#64ffda" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#64ffda" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="nos-fly" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ff6ec7" stop-opacity="0"/>
      <stop offset="60%"  stop-color="#ff6ec7" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ff6ec7" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="hb-fly" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#ffd166" stop-opacity="0.6"/>
      <stop offset="50%"  stop-color="#ffd166" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
    </linearGradient>
    <filter id="egg-glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>

  <!-- Embryo egg shape -->
  <ellipse cx="450" cy="195" rx="410" ry="130" fill="rgba(13,17,40,0.7)" stroke="rgba(100,255,218,0.25)" stroke-width="1.5" filter="url(#egg-glow)"/>
  <!-- Inner membrane hint -->
  <ellipse cx="450" cy="195" rx="400" ry="120" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

  <!-- Protein gradient overlays -->
  <ellipse cx="450" cy="195" rx="410" ry="130" fill="url(#bg-fly)" opacity="0.9"/>
  <ellipse cx="450" cy="195" rx="410" ry="130" fill="url(#nos-fly)" opacity="0.9"/>
  <!-- Hunchback mRNA gradient (activated by Bicoid) -->
  <ellipse cx="450" cy="195" rx="410" ry="130" fill="url(#hb-fly)" opacity="0.4"/>

  <!-- Concentration curves (schematic) -->
  <!-- Bicoid curve: high anterior, decays exponentially -->
  <path d="M70,120 C120,80 200,90 300,140 C380,175 450,210 550,250 C650,280 750,300 840,310"
        stroke="#64ffda" stroke-width="2.5" fill="none" opacity="0.9" stroke-dasharray="none"/>
  <!-- Nanos curve: high posterior -->
  <path d="M70,310 C150,300 280,280 380,250 C460,225 550,185 650,145 C730,110 790,90 840,80"
        stroke="#ff6ec7" stroke-width="2.5" fill="none" opacity="0.9"/>

  <!-- Threshold lines -->
  <line x1="280" y1="90" x2="280" y2="330" stroke="rgba(255,209,102,0.6)" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="530" y1="90" x2="530" y2="330" stroke="rgba(167,139,250,0.6)" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Body region bands -->
  <rect x="50"  y="340" width="220" height="22" rx="4" fill="rgba(100,255,218,0.15)" stroke="rgba(100,255,218,0.3)" stroke-width="1"/>
  <rect x="280" y="340" width="250" height="22" rx="4" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <rect x="540" y="340" width="320" height="22" rx="4" fill="rgba(255,110,199,0.15)" stroke="rgba(255,110,199,0.3)" stroke-width="1"/>

  <text x="160"  y="356" font-family="JetBrains Mono,monospace" font-size="10" fill="#64ffda" text-anchor="middle" letter-spacing="1">HEAD &amp; THORAX</text>
  <text x="405"  y="356" font-family="JetBrains Mono,monospace" font-size="10" fill="#a78bfa" text-anchor="middle" letter-spacing="1">THORAX / ABDOMEN</text>
  <text x="700"  y="356" font-family="JetBrains Mono,monospace" font-size="10" fill="#ff6ec7" text-anchor="middle" letter-spacing="1">ABDOMEN &amp; TAIL</text>

  <!-- Labels -->
  <text x="50"  y="82" font-family="Fraunces,serif" font-size="13" fill="#64ffda" font-style="italic">Bicoid</text>
  <text x="50"  y="95" font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(100,255,218,0.55)">transcription factor</text>
  <text x="790" y="72" font-family="Fraunces,serif" font-size="13" fill="#ff6ec7" font-style="italic">Nanos</text>
  <text x="790" y="85" font-family="JetBrains Mono,monospace" font-size="8"  fill="rgba(255,110,199,0.55)">translational repressor</text>

  <!-- Anterior / Posterior labels -->
  <text x="50"  y="200" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(100,255,218,0.7)" letter-spacing="2">ANTERIOR</text>
  <text x="790" y="200" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,110,199,0.7)" letter-spacing="2" text-anchor="end">POSTERIOR</text>

  <!-- Segment indicator dots along egg -->
  <circle cx="120" cy="180" r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="230" cy="170" r="5" fill="#64ffda" opacity="0.6"/>
  <circle cx="330" cy="168" r="5" fill="#a78bfa" opacity="0.6"/>
  <circle cx="430" cy="172" r="5" fill="#a78bfa" opacity="0.6"/>
  <circle cx="530" cy="180" r="5" fill="#a78bfa" opacity="0.6"/>
  <circle cx="630" cy="195" r="5" fill="#ff6ec7" opacity="0.6"/>
  <circle cx="730" cy="210" r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="820" cy="225" r="5" fill="#ff6ec7" opacity="0.7"/>

  <!-- Threshold labels -->
  <text x="270" y="84" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,209,102,0.8)" text-anchor="end">Bcd threshold 1</text>
  <text x="540" y="84" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(167,139,250,0.8)">Bcd threshold 2</text>
</svg>`;

// ─── SVG: Gene Regulatory Cascade ────────────────────────────────────────────
const SVG_CASCADE = `
<svg viewBox="0 0 860 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#64ffda" opacity="0.7"/>
    </marker>
  </defs>
  <!-- Stage boxes -->
  <!-- Maternal -->
  <rect x="10"  y="60" width="140" height="80" rx="10" fill="rgba(100,255,218,0.07)" stroke="rgba(100,255,218,0.4)" stroke-width="1.5"/>
  <text x="80"  y="90" font-family="Fraunces,serif" font-size="12" fill="#64ffda" text-anchor="middle">Maternal-effect</text>
  <text x="80"  y="105" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(100,255,218,0.55)" text-anchor="middle">genes</text>
  <text x="80"  y="120" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.4)" text-anchor="middle">bicoid · nanos</text>
  <text x="80"  y="132" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.4)" text-anchor="middle">oskar · caudal</text>
  <!-- Arrow -->
  <line x1="152" y1="100" x2="178" y2="100" stroke="rgba(100,255,218,0.5)" stroke-width="1.5" marker-end="url(#arrowC)"/>

  <!-- Gap genes -->
  <rect x="182" y="60" width="140" height="80" rx="10" fill="rgba(167,139,250,0.07)" stroke="rgba(167,139,250,0.4)" stroke-width="1.5"/>
  <text x="252" y="90" font-family="Fraunces,serif" font-size="12" fill="#a78bfa" text-anchor="middle">Gap</text>
  <text x="252" y="105" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(167,139,250,0.55)" text-anchor="middle">genes</text>
  <text x="252" y="120" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.4)" text-anchor="middle">hunchback · krüppel</text>
  <text x="252" y="132" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.4)" text-anchor="middle">giant · knirps</text>
  <!-- Arrow -->
  <line x1="324" y1="100" x2="350" y2="100" stroke="rgba(167,139,250,0.5)" stroke-width="1.5" marker-end="url(#arrowC)"/>

  <!-- Pair-rule -->
  <rect x="354" y="60" width="140" height="80" rx="10" fill="rgba(255,110,199,0.07)" stroke="rgba(255,110,199,0.4)" stroke-width="1.5"/>
  <text x="424" y="90" font-family="Fraunces,serif" font-size="12" fill="#ff6ec7" text-anchor="middle">Pair-rule</text>
  <text x="424" y="105" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,110,199,0.55)" text-anchor="middle">genes</text>
  <text x="424" y="120" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.4)" text-anchor="middle">even-skipped</text>
  <text x="424" y="132" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,110,199,0.4)" text-anchor="middle">fushi tarazu</text>
  <!-- Arrow -->
  <line x1="496" y1="100" x2="522" y2="100" stroke="rgba(255,110,199,0.5)" stroke-width="1.5" marker-end="url(#arrowC)"/>

  <!-- Segment polarity -->
  <rect x="526" y="60" width="140" height="80" rx="10" fill="rgba(255,209,102,0.07)" stroke="rgba(255,209,102,0.4)" stroke-width="1.5"/>
  <text x="596" y="90" font-family="Fraunces,serif" font-size="12" fill="#ffd166" text-anchor="middle">Segment polarity</text>
  <text x="596" y="107" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,209,102,0.55)" text-anchor="middle">genes</text>
  <text x="596" y="122" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.4)" text-anchor="middle">engrailed</text>
  <text x="596" y="134" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.4)" text-anchor="middle">wingless</text>
  <!-- Arrow -->
  <line x1="668" y1="100" x2="694" y2="100" stroke="rgba(255,209,102,0.5)" stroke-width="1.5" marker-end="url(#arrowC)"/>

  <!-- Homeotic -->
  <rect x="698" y="60" width="148" height="80" rx="10" fill="rgba(184,240,137,0.07)" stroke="rgba(184,240,137,0.4)" stroke-width="1.5"/>
  <text x="772" y="90" font-family="Fraunces,serif" font-size="12" fill="#b8f089" text-anchor="middle">Homeotic (Hox)</text>
  <text x="772" y="107" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(184,240,137,0.55)" text-anchor="middle">genes</text>
  <text x="772" y="122" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.4)" text-anchor="middle">Antennapedia</text>
  <text x="772" y="134" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(184,240,137,0.4)" text-anchor="middle">Ultrabithorax</text>

  <!-- Bottom label -->
  <text x="430" y="185" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="2">BROAD REGIONS  →  SEGMENTS  →  SEGMENT IDENTITY</text>
</svg>`;

// ─── SVG: Hox Gene Collinearity ──────────────────────────────────────────────
const SVG_HOX = `
<svg viewBox="0 0 840 260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hox-chrom" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#64ffda"/>
      <stop offset="16%"  stop-color="#7dd3fc"/>
      <stop offset="33%"  stop-color="#a78bfa"/>
      <stop offset="50%"  stop-color="#ff6ec7"/>
      <stop offset="66%"  stop-color="#ffd166"/>
      <stop offset="83%"  stop-color="#ff8a8a"/>
      <stop offset="100%" stop-color="#b8f089"/>
    </linearGradient>
  </defs>
  <!-- Chromosome bar -->
  <rect x="80" y="30" width="700" height="26" rx="13" fill="url(#hox-chrom)" opacity="0.85"/>
  <text x="430" y="22" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="2">HOX GENE CLUSTER (chromosome)</text>

  <!-- Individual Hox gene boxes on chromosome -->
  <rect x="87"  y="33" width="38" height="20" rx="5" fill="rgba(100,255,218,0.4)" stroke="#64ffda" stroke-width="1"/>
  <rect x="188" y="33" width="38" height="20" rx="5" fill="rgba(125,211,252,0.4)" stroke="#7dd3fc" stroke-width="1"/>
  <rect x="289" y="33" width="38" height="20" rx="5" fill="rgba(167,139,250,0.4)" stroke="#a78bfa" stroke-width="1"/>
  <rect x="390" y="33" width="38" height="20" rx="5" fill="rgba(255,110,199,0.4)" stroke="#ff6ec7" stroke-width="1"/>
  <rect x="491" y="33" width="38" height="20" rx="5" fill="rgba(255,209,102,0.4)" stroke="#ffd166" stroke-width="1"/>
  <rect x="592" y="33" width="38" height="20" rx="5" fill="rgba(255,138,138,0.4)" stroke="#ff8a8a" stroke-width="1"/>
  <rect x="693" y="33" width="38" height="20" rx="5" fill="rgba(184,240,137,0.4)" stroke="#b8f089" stroke-width="1"/>

  <text x="106"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox1</text>
  <text x="207"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox2</text>
  <text x="308"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox3</text>
  <text x="409"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox4</text>
  <text x="510"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox5</text>
  <text x="611"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox6</text>
  <text x="712"  y="46" font-family="JetBrains Mono,monospace" font-size="7" fill="white" text-anchor="middle">Hox7</text>

  <!-- Arrows showing collinearity -->
  <line x1="106" y1="56" x2="106" y2="90"  stroke="#64ffda" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="207" y1="56" x2="207" y2="90"  stroke="#7dd3fc" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="308" y1="56" x2="308" y2="90"  stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="409" y1="56" x2="409" y2="90"  stroke="#ff6ec7" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="510" y1="56" x2="510" y2="90"  stroke="#ffd166" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="611" y1="56" x2="611" y2="90"  stroke="#ff8a8a" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="712" y1="56" x2="712" y2="90"  stroke="#b8f089" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Body axis -->
  <rect x="80" y="90" width="700" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Color segments along body -->
  <rect x="80"  y="90" width="100" height="40" rx="0" fill="rgba(100,255,218,0.15)"/>
  <rect x="180" y="90" width="100" height="40" fill="rgba(125,211,252,0.15)"/>
  <rect x="280" y="90" width="100" height="40" fill="rgba(167,139,250,0.15)"/>
  <rect x="380" y="90" width="100" height="40" fill="rgba(255,110,199,0.15)"/>
  <rect x="480" y="90" width="100" height="40" fill="rgba(255,209,102,0.15)"/>
  <rect x="580" y="90" width="100" height="40" fill="rgba(255,138,138,0.15)"/>
  <rect x="680" y="90" width="100" height="40" rx="0" fill="rgba(184,240,137,0.15)"/>

  <text x="430" y="115" font-family="Fraunces,serif" font-size="11" fill="rgba(255,255,255,0.5)" text-anchor="middle" font-style="italic">Animal body axis (anterior → posterior)</text>

  <!-- Organism labels -->
  <text x="80"  y="148" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.6)">← anterior</text>
  <text x="780" y="148" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(184,240,137,0.6)" text-anchor="end">posterior →</text>

  <!-- Collinearity label -->
  <rect x="200" y="165" width="460" height="40" rx="8" fill="rgba(255,209,102,0.05)" stroke="rgba(255,209,102,0.25)" stroke-width="1"/>
  <text x="430" y="183" font-family="Fraunces,serif" font-size="11" fill="#ffd166" text-anchor="middle">Spatial Collinearity</text>
  <text x="430" y="197" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,209,102,0.55)" text-anchor="middle">position on chromosome = expression domain along body axis</text>

  <!-- Conservation badge -->
  <text x="430" y="240" font-family="JetBrains Mono,monospace" font-size="8.5" fill="rgba(255,255,255,0.3)" text-anchor="middle" letter-spacing="1">CONSERVED ACROSS ALL BILATERIANS — FLY ↔ MOUSE ↔ HUMAN</text>
</svg>`;

// ─── MODULE HTML ──────────────────────────────────────────────────────────────
window.M01 = {
html: `
<section class="module reveal" id="principles">
  <div class="module-header">
    <div class="module-num">Module 01</div>
    <h2 class="module-title">Principles of <em>Development</em></h2>
    <p class="module-tag">How a single cell becomes a trillion-celled organism — and why every cell has the same DNA yet plays a different role.</p>
  </div>

  <div class="objectives reveal">
    <ul>
      <li>Explain how differential gene expression generates cell diversity from a single genome</li>
      <li>Distinguish determination from differentiation, and cytoplasmic determinants from inductive signals</li>
      <li>Trace the Drosophila body-plan cascade from maternal-effect genes to Hox genes</li>
      <li>Explain what Hox genes are and why their spatial collinearity matters</li>
      <li>Define the potency hierarchy: totipotent → pluripotent → multipotent → unipotent</li>
    </ul>
  </div>

  <!-- SECTION: What is Development? -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.1</div>
    <h3>What is Development?</h3>
    <p>Development is the lifelong process by which a fertilised egg cell (zygote) gives rise to a complex multicellular organism. It encompasses three overlapping processes that operate simultaneously and continuously:</p>

    <div class="grid g3 reveal">
      <div class="card card-glow holo reveal-item delay-1">
        <h4>Growth</h4>
        <p>An increase in cell number (via mitosis) and cell size. Growth is tightly regulated — a human adult has ~37 trillion cells, all derived from one zygote through approximately 47 rounds of cell division.</p>
      </div>
      <div class="card card-glow holo reveal-item delay-2">
        <h4>Cell Differentiation</h4>
        <p>The process by which cells become structurally and functionally specialised. A liver cell and a neuron contain the same genome, but express radically different subsets of genes — producing completely different proteins and behaviours.</p>
      </div>
      <div class="card card-glow holo reveal-item delay-3">
        <h4>Morphogenesis</h4>
        <p>The shaping of the organism's body plan. Cells move, adhere, and die (via apoptosis) in precisely orchestrated patterns. Cell migration, differential adhesion, and programmed cell death sculpt fingers, eyes, and brain folds.</p>
      </div>
    </div>

    <div class="stat-row reveal">
      <div class="stat-card">
        <span class="stat-num" style="color:var(--teal)">~37T</span>
        <span class="stat-label">cells in adult human</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--violet)">~200</span>
        <span class="stat-label">distinct cell types</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--rose)">1</span>
        <span class="stat-label">genome in each cell</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--gold)">19,000+</span>
        <span class="stat-label">protein-coding genes</span>
      </div>
    </div>

    <div class="keypoint reveal">
      <strong>The Central Paradox of Development:</strong> Every somatic cell in your body contains the <em>same</em> 6.4 billion base pairs of DNA. Yet a photoreceptor cell, a T-lymphocyte, and a skeletal muscle fibre look and behave nothing alike. The answer is <strong>differential gene expression</strong> — which genes are switched on or off determines cell identity, not which genes are present.
    </div>
  </div>

  <!-- SECTION: Differential Gene Expression -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.2</div>
    <h3>Differential Gene Expression</h3>
    <p>Every cell uses the same instruction manual (DNA), but different cells read different chapters. Gene expression is controlled at multiple levels:</p>

    <div class="flow reveal">
      <div class="flow-item reveal-item delay-1">
        <div class="flow-icon">1</div>
        <div class="flow-content">
          <h4>Chromatin Remodelling</h4>
          <p>DNA wrapped around histones can be made accessible or inaccessible. Histone acetylation opens chromatin (active); methylation can close it (silenced). This is a major epigenetic mechanism — changes are heritable through cell divisions without altering DNA sequence.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-2">
        <div class="flow-icon">2</div>
        <div class="flow-content">
          <h4>Transcriptional Control</h4>
          <p>Transcription factors bind specific DNA sequences (promoters and enhancers) to activate or repress RNA polymerase. Master transcription factors — like MyoD for muscle, or PAX6 for eyes — can reprogram cell identity. Most of development is controlled here.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-3">
        <div class="flow-icon">3</div>
        <div class="flow-content">
          <h4>Post-transcriptional Control</h4>
          <p>mRNA stability, splicing (alternative splicing can generate multiple proteins from one gene), and translation efficiency are all regulated. Maternal mRNAs stored in the egg are key — they are translated only after fertilisation.</p>
        </div>
      </div>
      <div class="flow-item reveal-item delay-4">
        <div class="flow-icon">4</div>
        <div class="flow-content">
          <h4>Post-translational Control</h4>
          <p>Proteins are modified (phosphorylation, glycosylation, ubiquitination) or targeted for degradation. The proteasome destroys proteins on demand. Many developmental signals work by releasing proteins from inhibitory complexes.</p>
        </div>
      </div>
    </div>

    <div class="example reveal">
      <strong>Example — Gurdon's Nuclear Transfer (1962):</strong>
      <p>John Gurdon transplanted the nucleus from a differentiated frog intestinal cell into an enucleated egg. The resulting nucleus directed the development of a normal tadpole — proving that differentiated cells retain a full, functional genome. This experiment demolished the idea that cells permanently discard unused genes. Gurdon won the Nobel Prize in 2012, shared with Shinya Yamanaka, who showed four transcription factors can reprogramme adult cells back to a pluripotent state (iPSCs).</p>
    </div>
  </div>

  <!-- SECTION: Potency Hierarchy -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.3</div>
    <h3>The Potency Hierarchy</h3>
    <p>As development proceeds, cells progressively <strong>restrict</strong> their developmental potential — a process called <em>determination</em>. A cell that is determined is committed to a particular fate but may not yet look different. <em>Differentiation</em> is the actual expression of that fate.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 1.1 — Potency Hierarchy</div>
      ${SVG_POTENCY}
      <div class="fig-caption">The potency funnel — from totipotency (zygote) to the terminally differentiated specialised cell. Each arrow represents restriction of cell fate. ICM = inner cell mass; ESC = embryonic stem cell; HSC = hematopoietic stem cell.</div>
    </div>

    <div class="tabs reveal">
      <div class="tab-list">
        <button class="tab-btn active" data-tab="tab-toti">Totipotent</button>
        <button class="tab-btn" data-tab="tab-pluri">Pluripotent</button>
        <button class="tab-btn" data-tab="tab-multi">Multipotent</button>
        <button class="tab-btn" data-tab="tab-uni">Unipotent</button>
      </div>
      <div id="tab-toti" class="tab-panel active">
        <h4>Totipotent Cells</h4>
        <p>Can give rise to <em>all</em> cell types — including extraembryonic tissues (placenta, yolk sac). In humans, this applies to the zygote and blastomeres up to approximately the 4-cell stage. Only truly totipotent cells can generate a complete organism when transplanted.</p>
        <div class="definition"><strong>Definition</strong>Capable of forming any cell type, including trophoblast (placenta). The zygote is the archetypal totipotent cell.</div>
      </div>
      <div id="tab-pluri" class="tab-panel">
        <h4>Pluripotent Cells</h4>
        <p>Can form any cell of the body but <em>not</em> extraembryonic tissues. The inner cell mass (ICM) of the blastocyst is pluripotent. Embryonic stem cells (ESCs) are derived from the ICM and maintain pluripotency in culture. Yamanaka's iPSCs are artificially reprogrammed to this state using four transcription factors: Oct4, Sox2, Klf4, and c-Myc.</p>
        <div class="definition"><strong>Definition</strong>Can form any of the three germ layers and their derivatives, but not trophoblast. ESCs and iPSCs are the key examples.</div>
      </div>
      <div id="tab-multi" class="tab-panel">
        <h4>Multipotent Cells</h4>
        <p>Restricted to forming a specific lineage of cell types. Hematopoietic stem cells (HSCs) in bone marrow produce all blood cell types — red blood cells, platelets, and all white blood cells — but cannot form muscle or liver. Neural stem cells produce neurons, astrocytes, and oligodendrocytes.</p>
        <div class="definition"><strong>Definition</strong>Can differentiate into multiple cell types within a particular tissue lineage. Adult stem cells are typically multipotent.</div>
      </div>
      <div id="tab-uni" class="tab-panel">
        <h4>Unipotent Cells</h4>
        <p>Produce only one cell type, but retain the ability to self-renew. Spermatogonial stem cells continuously divide to produce sperm throughout male reproductive life. Epidermis basal cells replenish the skin's squamous epithelium.</p>
        <div class="definition"><strong>Definition</strong>Self-renewing but restricted to producing a single differentiated cell type. Distinguished from terminally differentiated cells by their mitotic activity.</div>
      </div>
    </div>
  </div>

  <!-- SECTION: Cytoplasmic Determinants -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.4</div>
    <h3>Cytoplasmic Determinants</h3>
    <p>The egg is not a uniform bag of cytoplasm. Before fertilisation, maternal mRNAs and proteins are asymmetrically distributed throughout the oocyte. When the zygote cleaves, daughter cells inherit different molecular "addresses" — these are <strong>cytoplasmic determinants</strong> that push cells toward different fates <em>without</em> requiring signals from neighbours.</p>

    <div class="callout callout-teal reveal">
      <div class="callout-label">◈ Key Mechanism</div>
      <p><strong>Cytoplasmic determinants</strong> are maternally deposited mRNAs and proteins distributed asymmetrically in the egg's cytoplasm. Cleavage partitions them unequally into daughter cells, establishing different transcriptional states from the very first division.</p>
    </div>

    <div class="example reveal">
      <strong>Example — P granules in <em>C. elegans</em>:</strong>
      <p>In the roundworm <em>Caenorhabditis elegans</em>, RNA-protein complexes called P granules (germ plasm) are localised to the posterior pole of the fertilised egg. After the first cell division, P granules are inherited exclusively by the posterior daughter cell (P1), which will give rise to the germline (eggs and sperm). The anterior daughter (AB) receives none and becomes somatic. This asymmetric partitioning is driven by PAR proteins that establish anterior-posterior polarity. <em>C. elegans</em> development is so stereotyped that every cell's lineage has been completely mapped — every adult worm has exactly 959 somatic cells (hermaphrodite).</p>
    </div>

    <div class="example reveal">
      <strong>Example — Drosophila pole plasm:</strong>
      <p>The posterior pole of the Drosophila oocyte contains a specialised cytoplasm called <em>pole plasm</em>, rich in nanos mRNA, oskar mRNA, and Vasa protein. Cells that inherit pole plasm at the posterior of the blastoderm become the primordial germ cells (pole cells) — the founders of the germline. Disrupting pole plasm components eliminates the germline entirely.</p>
    </div>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Cell-Autonomous Specification</h4>
        <p>Fate determined by internal cytoplasmic determinants. The cell follows its programme regardless of what neighbours do. The cell's fate can be predicted before any cell-cell communication occurs. Common in mosaic development (e.g., molluscs, C. elegans).</p>
        <ul>
          <li><strong>Key word:</strong> deterministic, invariant lineage</li>
          <li><strong>Example:</strong> P granules in C. elegans</li>
          <li><strong>Disruption:</strong> removing the cell removes that structure</li>
        </ul>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Conditional Specification (Induction)</h4>
        <p>Fate determined by signals from neighbouring cells. The cell's fate depends on where it ends up. Cells can often be transplanted and take on the fate of their new location (up to a critical period). Common in regulative development (e.g., vertebrates, sea urchins).</p>
        <ul>
          <li><strong>Key word:</strong> regulative, conditional</li>
          <li><strong>Example:</strong> Spemann organizer in frogs</li>
          <li><strong>Disruption:</strong> removing the cell is compensated by remaining cells</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SECTION: Inductive Signaling -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.5</div>
    <h3>Inductive Signaling</h3>
    <p>In induction, one group of cells (the <strong>inducer</strong>) releases a signal that causes a neighbouring group of cells (the <strong>responding tissue</strong>) to change their developmental fate. The responding cells must be <strong>competent</strong> — capable of responding to the signal, which requires expression of the appropriate receptor.</p>

    <div class="chain reveal">
      <div class="chain-step reveal-item delay-1">
        <span class="idx">01</span>
        <strong>Inducing tissue</strong>
        <span>Secretes signalling molecule (ligand): e.g., FGF, Wnt, BMP, Shh, Notch ligand</span>
      </div>
      <div class="chain-arrow">→</div>
      <div class="chain-step reveal-item delay-2">
        <span class="idx">02</span>
        <strong>Signal diffuses</strong>
        <span>Can act as a morphogen — concentration gradient specifies different fates at different distances</span>
      </div>
      <div class="chain-arrow">→</div>
      <div class="chain-step reveal-item delay-3">
        <span class="idx">03</span>
        <strong>Competent tissue</strong>
        <span>Receptor binds ligand → intracellular signalling cascade → gene expression changes</span>
      </div>
      <div class="chain-arrow">→</div>
      <div class="chain-step reveal-item delay-4">
        <span class="idx">04</span>
        <strong>New cell fate</strong>
        <span>Responding cells activate new transcription factor programmes → differentiation into new cell type</span>
      </div>
    </div>

    <div class="example reveal">
      <strong>Example — The Spemann Organizer (frog gastrulation):</strong>
      <p>Hans Spemann and Hilde Mangold (1924) showed that a tiny region of the early frog gastrula — the dorsal lip of the blastopore — could, when grafted onto the ventral side of another embryo, induce a complete second body axis including a second head. This "organiser" region secretes inhibitors of BMP (bone morphogenetic protein), namely Chordin, Noggin, and Follistatin. By blocking BMP signalling, the organiser allows ectoderm to adopt neural fate (high BMP → epidermis; low BMP → neural plate). This was one of the landmark experiments of developmental biology, earning Spemann the 1935 Nobel Prize.</p>
    </div>

    <div class="tip reveal">
      Remember: competence is the receiving cell's ability to respond. A cell without the receptor is not competent, even if the signal is present. Competence windows open and close during development — this is why transplantation experiments must be done at precise stages.
    </div>
  </div>

  <!-- SECTION: Drosophila Body Plan -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.6</div>
    <h3>Case Study: The <em>Drosophila</em> Body Plan</h3>
    <p>The fruit fly <em>Drosophila melanogaster</em> is the best-understood model of body-plan specification. Its body plan is established by a hierarchical cascade of transcription factors, each activated by the one before — from broad maternal gradients to precise segment identities.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 1.2 — Bicoid &amp; Nanos Protein Gradients</div>
      ${SVG_BICOID}
      <div class="fig-caption">Bicoid protein (teal) is highest at the anterior pole and decays toward the posterior. Nanos protein (rose) is highest at the posterior. These opposing gradients, established from maternal mRNAs, define the embryo's anterior-posterior axis before the first division. Threshold concentrations of Bicoid activate different gap genes in different regions.</div>
    </div>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Bicoid — the Head Organiser</h4>
        <p>Bicoid protein is a homeodomain transcription factor encoded by a maternal-effect gene. Its mRNA is anchored at the <strong>anterior pole</strong> of the oocyte by the cytoskeleton. After fertilisation, the mRNA is translated, and the protein diffuses away, forming a gradient highest at the anterior. Bicoid activates <em>hunchback</em> (gap gene) and represses <em>caudal</em> mRNA — both actions promote head and thorax development.</p>
        <div class="pill teal">Anterior mRNA → Posterior protein decay</div>
        <div class="pill teal">Transcription factor</div>
        <div class="pill teal">Activates hunchback</div>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Nanos — the Abdomen Organiser</h4>
        <p>Nanos protein is a translational repressor encoded by a maternal-effect gene. Its mRNA is anchored at the <strong>posterior pole</strong>. The Nanos protein diffuses anteriorly from the posterior, repressing <em>hunchback</em> mRNA translation in the posterior half of the embryo — preventing head structures from forming in the abdomen. Without Nanos, extra thoracic segments form posteriorly.</p>
        <div class="pill rose">Posterior mRNA → Anterior decay</div>
        <div class="pill rose">Translational repressor</div>
        <div class="pill rose">Represses hunchback</div>
      </div>
    </div>

    <div class="warn reveal">
      <strong>Common exam confusion:</strong> Bicoid is a <em>transcription factor</em> (acts in the nucleus on DNA). Nanos is a <em>translational repressor</em> (acts in the cytoplasm on mRNA). They both create gradients but by completely different molecular mechanisms.
    </div>
  </div>

  <!-- SECTION: Gene Regulatory Cascade -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.7</div>
    <h3>The Gene Regulatory Cascade</h3>
    <p>Maternal gradients activate a series of successively refined gene expression patterns, narrowing from broad domains to individual segment identities in five hierarchical layers:</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 1.3 — Drosophila Body-Plan Cascade</div>
      ${SVG_CASCADE}
      <div class="fig-caption">Each tier of the cascade is activated by the tier above. Broad maternal gradients define large domains → gap genes refine into ~3-4 regions → pair-rule genes set up 7 stripes (every other segment) → segment polarity genes define anterior/posterior within each segment → homeotic (Hox) genes specify what each segment becomes.</div>
    </div>

    <div class="accordion reveal">
      <div class="accordion-item">
        <button class="accordion-trigger">Gap Genes — defining broad regions <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>Gap genes respond to specific concentrations of Bicoid and Hunchback protein. Each gap gene is expressed in a broad stripe of cells covering 2–4 future segments. Mutants show a "gap" — several consecutive segments are deleted from the body plan.</p>
            <p><strong>Key gap genes:</strong> hunchback (anterior), Krüppel (middle), knirps (posterior), giant. They encode transcription factors and extensively cross-regulate each other, sharpening their boundaries into crisp stripes.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Pair-rule Genes — every-other-segment stripes <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>Pair-rule genes are activated by combinations of gap gene transcription factors and are expressed in 7 transverse stripes, each covering every other segment boundary. Pair-rule mutants lack every other segment.</p>
            <p><strong>Key pair-rule genes:</strong> even-skipped (eve), fushi tarazu (ftz), hairy, runt. The eve stripes are among the best-studied enhancer logic examples — each of the 7 stripes is controlled by a separate cis-regulatory module (enhancer) that integrates gap gene inputs. This is a textbook case of combinatorial gene regulation.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Segment Polarity Genes — anterior/posterior within segments <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>Segment polarity genes establish the anterior-posterior polarity within each individual segment. They are expressed in 14 narrow stripes — one per parasegment. Key signalling pathways operate here: Wingless (Wnt) and Hedgehog (Hh) signals maintain the boundaries between parasegments.</p>
            <p><strong>Key genes:</strong> engrailed (posterior of each segment), wingless (anterior), hedgehog. Engrailed cells secrete Hedgehog protein, which maintains Wingless expression in adjacent cells — a classical reciprocal signalling loop that maintains the compartment boundary.</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Homeotic (Hox) Genes — segment identity <span class="accordion-icon">+</span></button>
        <div class="accordion-body">
          <div class="accordion-content">
            <p>Homeotic genes specify the identity of each segment — what body part it will become. Mutations transform one body part into another (homeosis). The classic example: Antennapedia mutations cause legs to grow where antennae should be. Ultrabithorax mutations cause a second pair of wings to grow where halteres should be.</p>
            <p>Hox genes encode homeodomain transcription factors and are organised in two clusters in Drosophila (ANT-C and BX-C). They are activated by the segment polarity genes and are the final "address" label for each segment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION: Hox Genes -->
  <div class="section-break reveal">
    <div class="section-label">§ 1.8</div>
    <h3>Hox Genes &amp; Spatial Collinearity</h3>
    <p>Hox genes are a family of transcription factor-encoding genes found in virtually all bilaterally symmetrical animals. They share a conserved 180-base-pair DNA sequence — the <strong>homeobox</strong> — that encodes a DNA-binding domain called the homeodomain.</p>

    <div class="figure reveal">
      <div class="fig-label">Fig 1.4 — Hox Gene Collinearity</div>
      ${SVG_HOX}
      <div class="fig-caption">Spatial collinearity: the physical order of Hox genes on the chromosome mirrors their expression domain along the anterior-posterior body axis. Genes at the 3' end are expressed anteriorly; genes at the 5' end are expressed posteriorly. This rule holds from worms to flies to mice to humans.</div>
    </div>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Spatial Collinearity</h4>
        <p>The position of a Hox gene within its cluster directly corresponds to its expression domain along the body axis. 3'-most genes → expressed in anterior structures (head/neck). 5'-most genes → expressed in posterior structures (lumbar/tail). This collinearity is conserved across ~600 million years of animal evolution.</p>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Posterior Prevalence</h4>
        <p>When multiple Hox genes are co-expressed in the same region, the most 5' (most posterior) Hox gene usually dominates in specifying segment identity. This "posterior prevalence" rule means that more posterior Hox genes suppress the activity of more anterior ones — a form of epistasis within the Hox network.</p>
      </div>
    </div>

    <div class="callout callout-violet reveal">
      <div class="callout-label">★ Exam Favourite</div>
      <p>Humans have <strong>39 Hox genes</strong> organised into four clusters (HoxA–D) on four different chromosomes, likely the result of two whole-genome duplications from a single ancestral cluster in the invertebrate ancestor. Despite nearly 600 million years of separation, mouse Hox genes can partially rescue fly Hox mutant phenotypes — demonstrating remarkable conservation of both sequence and function.</p>
    </div>
  </div>

  <!-- Q&A -->
  <div class="section-break reveal">
    <div class="section-label">§ Exam Practice</div>
    <h3>Q&amp;A — Module 01</h3>
    <div class="qa-set">
      <div class="qa-item">
        <div class="qa-q">What is the difference between determination and differentiation? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p><strong>Determination</strong> is the commitment of a cell to a particular developmental fate — the decision is made, but the cell may look identical to uncommitted cells. The commitment is heritable through cell divisions and usually irreversible. <strong>Differentiation</strong> is the actual expression of that fate — when the cell visibly changes its morphology, gene expression pattern, and function. A myoblast is determined (committed to becoming muscle) long before it fuses into a multinucleated myotube (differentiated). You can test determination experimentally: transplant the cell to an abnormal location; if it still follows its original fate, it is determined.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Why does Bicoid act as a morphogen but Nanos does not? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>A <strong>morphogen</strong> is a signalling molecule whose concentration gradient specifies different cell fates at different threshold concentrations. Bicoid acts as a morphogen: it is a transcription factor, and different target genes respond to different concentration thresholds — high Bicoid activates hunchback (head), medium Bicoid activates other gap genes (thorax). Nanos, however, is a translational repressor that suppresses hunchback mRNA — it <em>prevents</em> a fate (abdomen) rather than specifying multiple distinct fates across a gradient. Most textbooks classify Bicoid as a morphogen and Nanos as a modifier/permissive signal.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Explain how the same genome can produce 200+ different cell types. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>All 37 trillion somatic cells contain the same ~19,000 protein-coding genes, but <strong>differential gene expression</strong> determines which genes are transcribed and translated in each cell type. This is controlled by: (1) <em>Transcription factors</em> — combinations of TFs bind specific enhancers to activate or repress gene batteries; (2) <em>Chromatin remodelling</em> — histone modifications and DNA methylation open or close genomic regions; (3) <em>Non-coding RNAs</em> — miRNAs and lncRNAs modulate mRNA stability and translation; (4) <em>Signalling history</em> — the developmental signals a cell has received imprint its gene expression state. The key insight is that transcription factor combinations are combinatorial: 10 TFs used in pairs can specify over 45 distinct combinations, and in reality hundreds of TFs interact in complex networks. Each stable gene-expression pattern is a cell "identity."</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">A student transplants a small group of cells from the dorsal lip of a frog blastopore onto the ventral surface of a host embryo. What happens, and what does it demonstrate? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>This is the <strong>Spemann-Mangold organiser experiment</strong> (1924). The transplanted dorsal lip cells (the organiser) induce a <em>second complete body axis</em> on the ventral side of the host, including a second head, notochord, and neural tube. The induced structures are derived mostly from host cells (shown using pigmented/unpigmented embryo combinations), not the transplanted cells. This demonstrates: (1) <strong>Inductive signalling</strong> — a small group of cells can respecify the fate of neighbouring cells; (2) <strong>Competence</strong> — the ventral ectoderm was capable of forming neural tissue when given the right signal; (3) The organiser achieves this by secreting BMP inhibitors (Chordin, Noggin, Follistatin) that allow the default neural fate to emerge in cells shielded from BMP signalling.</p>
        </div></div>
      </div>
    </div>
  </div>

</section>
`};
