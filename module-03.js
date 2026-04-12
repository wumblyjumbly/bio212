'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   MODULE 03 · Evolutionary Processes
   Hardy-Weinberg · Natural Selection · Genetic Drift · Gene Flow · Mutation
═══════════════════════════════════════════════════════════════════════════ */

// ─── SVG: Natural Selection Bell Curves ──────────────────────────────────────
const SVG_SELECTION = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bell-before" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.15)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
    </linearGradient>
    <linearGradient id="bell-dir" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(100,255,218,0.3)"/>
      <stop offset="100%" stop-color="rgba(100,255,218,0.05)"/>
    </linearGradient>
    <linearGradient id="bell-stab" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(167,139,250,0.3)"/>
      <stop offset="100%" stop-color="rgba(167,139,250,0.05)"/>
    </linearGradient>
    <linearGradient id="bell-dis" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,110,199,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,110,199,0.05)"/>
    </linearGradient>
  </defs>

  <!-- Column headers -->
  <text x="150" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(100,255,218,0.7)" text-anchor="middle" letter-spacing="1">DIRECTIONAL</text>
  <text x="450" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(167,139,250,0.7)" text-anchor="middle" letter-spacing="1">STABILISING</text>
  <text x="750" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(255,110,199,0.7)" text-anchor="middle" letter-spacing="1">DISRUPTIVE</text>

  <!-- ── DIRECTIONAL ── -->
  <!-- x-axis -->
  <line x1="30" y1="240" x2="272" y2="240" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="151" y="255" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">← trait value →</text>
  <!-- Before curve (grey) -->
  <path d="M40,238 C55,238 70,180 100,80 C115,38 130,28 150,28 C170,28 185,38 200,80 C230,180 245,238 262,238 Z"
        fill="url(#bell-before)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <!-- After curve (shifted right, teal) -->
  <path d="M80,238 C95,238 110,200 135,110 C148,68 162,48 182,48 C202,48 216,68 230,110 C255,200 265,238 272,238 Z"
        fill="url(#bell-dir)" stroke="rgba(100,255,218,0.6)" stroke-width="2"/>
  <!-- Arrow showing shift -->
  <line x1="150" y1="28" x2="175" y2="48" stroke="rgba(100,255,218,0.5)" stroke-width="1.5" marker-end="none"/>
  <text x="185" y="43" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.7)">→ shifted</text>
  <!-- Favoured region indicator -->
  <rect x="170" y="240" width="100" height="5" rx="2" fill="rgba(100,255,218,0.3)"/>
  <text x="220" y="268" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)" text-anchor="middle">favoured</text>
  <!-- Description -->
  <text x="151" y="285" font-family="Fraunces,serif" font-size="9.5" fill="rgba(100,255,218,0.6)" text-anchor="middle">Favours one extreme</text>
  <text x="151" y="298" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">e.g. antibiotic resistance,</text>
  <text x="151" y="309" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">peppered moth, beak size</text>

  <!-- ── STABILISING ── -->
  <line x1="330" y1="240" x2="572" y2="240" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="451" y="255" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">← trait value →</text>
  <!-- Before curve (grey, wider) -->
  <path d="M338,238 C348,238 358,200 378,110 C390,68 403,45 430,32 C450,28 470,28 478,32 C508,45 522,68 534,110 C554,200 564,238 572,238 Z"
        fill="url(#bell-before)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <!-- After curve (narrower, taller, violet) -->
  <path d="M375,238 C390,238 404,195 418,120 C428,80 438,52 451,38 C464,52 474,80 484,120 C498,195 512,238 525,238 Z"
        fill="url(#bell-stab)" stroke="rgba(167,139,250,0.6)" stroke-width="2"/>
  <!-- Favoured: middle -->
  <rect x="380" y="240" width="142" height="5" rx="2" fill="rgba(167,139,250,0.3)"/>
  <!-- X marks at extremes -->
  <text x="342" y="225" font-family="sans-serif" font-size="14" fill="rgba(255,110,199,0.5)" text-anchor="middle">✗</text>
  <text x="566" y="225" font-family="sans-serif" font-size="14" fill="rgba(255,110,199,0.5)" text-anchor="middle">✗</text>
  <text x="451" y="268" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(167,139,250,0.5)" text-anchor="middle">favoured (intermediate)</text>
  <text x="451" y="285" font-family="Fraunces,serif" font-size="9.5" fill="rgba(167,139,250,0.6)" text-anchor="middle">Favours intermediate — reduces variation</text>
  <text x="451" y="298" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">e.g. human birth weight (3.4 kg optimal),</text>
  <text x="451" y="309" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">clutch size in birds</text>

  <!-- ── DISRUPTIVE ── -->
  <line x1="630" y1="240" x2="872" y2="240" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="751" y="255" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">← trait value →</text>
  <!-- Before curve (grey) -->
  <path d="M638,238 C648,238 660,198 685,110 C698,68 710,45 738,32 C758,28 778,28 783,32 C808,45 820,68 835,110 C855,198 862,238 872,238 Z"
        fill="url(#bell-before)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <!-- After curve: bimodal (rose) -->
  <path d="M638,238 C648,238 655,210 665,145 C672,100 680,65 695,50 C710,65 718,100 724,145 C730,175 735,200 751,238 Z"
        fill="url(#bell-dis)" stroke="rgba(255,110,199,0.6)" stroke-width="2"/>
  <path d="M751,238 C767,200 772,175 778,145 C784,100 792,65 808,50 C823,65 832,100 838,145 C848,210 855,238 872,238 Z"
        fill="url(#bell-dis)" stroke="rgba(255,110,199,0.6)" stroke-width="2"/>
  <!-- X mark at middle (disfavoured) -->
  <text x="751" y="225" font-family="sans-serif" font-size="14" fill="rgba(255,110,199,0.4)" text-anchor="middle">✗</text>
  <!-- Favoured: extremes -->
  <rect x="635" y="240" width="85"  height="5" rx="2" fill="rgba(255,110,199,0.3)"/>
  <rect x="780" y="240" width="90"  height="5" rx="2" fill="rgba(255,110,199,0.3)"/>
  <text x="680"  y="268" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.5)" text-anchor="middle">favoured</text>
  <text x="826"  y="268" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,110,199,0.5)" text-anchor="middle">favoured</text>
  <text x="751" y="285" font-family="Fraunces,serif" font-size="9.5" fill="rgba(255,110,199,0.6)" text-anchor="middle">Favours both extremes — increases variation</text>
  <text x="751" y="298" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">e.g. beak sizes (seed size bimodal),</text>
  <text x="751" y="309" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.3)" text-anchor="middle">oyster shell size, sickle-cell in malaria zones</text>
</svg>`;

// ─── SVG: Genetic Drift Scenarios ────────────────────────────────────────────
const SVG_DRIFT = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
  <!-- BOTTLENECK -->
  <text x="220" y="20" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(255,209,102,0.7)" text-anchor="middle" letter-spacing="1">BOTTLENECK EFFECT</text>

  <!-- Original large population -->
  <rect x="30" y="40" width="120" height="180" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="90" y="57" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.4)" text-anchor="middle">large pop.</text>
  <!-- Allele dots (diverse) -->
  <circle cx="50"  cy="75"  r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="65"  cy="75"  r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="80"  cy="75"  r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="95"  cy="75"  r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="110" cy="75"  r="5" fill="#a78bfa" opacity="0.8"/>
  <circle cx="125" cy="75"  r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="50"  cy="95"  r="5" fill="#ffd166" opacity="0.8"/>
  <circle cx="65"  cy="95"  r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="80"  cy="95"  r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="95"  cy="95"  r="5" fill="#a78bfa" opacity="0.8"/>
  <circle cx="110" cy="95"  r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="125" cy="95"  r="5" fill="#b8f089" opacity="0.8"/>
  <circle cx="50"  cy="115" r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="65"  cy="115" r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="80"  cy="115" r="5" fill="#ffd166" opacity="0.8"/>
  <circle cx="95"  cy="115" r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="110" cy="115" r="5" fill="#a78bfa" opacity="0.8"/>
  <circle cx="125" cy="115" r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="50"  cy="135" r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="65"  cy="135" r="5" fill="#b8f089" opacity="0.8"/>
  <circle cx="80"  cy="135" r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="95"  cy="135" r="5" fill="#64ffda" opacity="0.8"/>
  <circle cx="110" cy="135" r="5" fill="#ff6ec7" opacity="0.8"/>
  <circle cx="125" cy="135" r="5" fill="#a78bfa" opacity="0.8"/>
  <text x="90" y="165" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">high diversity</text>
  <text x="90" y="177" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.3)" text-anchor="middle">multiple alleles</text>

  <!-- Bottleneck funnel -->
  <path d="M155,80 L195,130 L195,155 L155,205" fill="none" stroke="rgba(255,209,102,0.4)" stroke-width="1.5"/>
  <path d="M155,80 L155,205" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <!-- Disaster icon -->
  <text x="175" y="125" font-family="sans-serif" font-size="20" fill="rgba(255,110,199,0.6)" text-anchor="middle">⚡</text>
  <text x="175" y="145" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.5)" text-anchor="middle">catastrophe</text>

  <!-- Survivors (small box) -->
  <rect x="198" y="110" width="48" height="70" rx="6" fill="rgba(255,209,102,0.06)" stroke="rgba(255,209,102,0.4)" stroke-width="1.5"/>
  <text x="222" y="126" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.6)" text-anchor="middle">few</text>
  <text x="222" y="136" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.6)" text-anchor="middle">survivors</text>
  <!-- Only teal survived by chance -->
  <circle cx="210" cy="155" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="222" cy="155" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="234" cy="155" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="210" cy="167" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="222" cy="167" r="5" fill="#a78bfa" opacity="0.9"/>

  <!-- Arrow to recovery -->
  <line x1="250" y1="145" x2="278" y2="145" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <text x="264" y="139" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,255,255,0.2)" text-anchor="middle">recover</text>

  <!-- Post-bottleneck population -->
  <rect x="280" y="80" width="120" height="130" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,209,102,0.3)" stroke-width="1.5"/>
  <text x="340" y="97" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,209,102,0.5)" text-anchor="middle">recovered pop.</text>
  <text x="340" y="109" font-family="JetBrains Mono,monospace" font-size="7" fill="rgba(255,209,102,0.4)" text-anchor="middle">low diversity!</text>
  <!-- Mostly teal, some violet -->
  <circle cx="300" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="315" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="330" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="345" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="360" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="375" cy="125" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="300" cy="143" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="315" cy="143" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="330" cy="143" r="5" fill="#a78bfa" opacity="0.9"/>
  <circle cx="345" cy="143" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="360" cy="143" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="375" cy="143" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="300" cy="161" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="315" cy="161" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="330" cy="161" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="345" cy="161" r="5" fill="#a78bfa" opacity="0.9"/>
  <circle cx="360" cy="161" r="5" fill="#64ffda" opacity="0.9"/>
  <circle cx="375" cy="161" r="5" fill="#64ffda" opacity="0.9"/>

  <!-- Real example -->
  <text x="220" y="260" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.3)" text-anchor="middle">Real examples: Cheetahs (Near-Extinct ~10kya),</text>
  <text x="220" y="272" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.3)" text-anchor="middle">Northern elephant seal, Florida panther</text>

  <!-- FOUNDER EFFECT -->
  <text x="680" y="20" font-family="JetBrains Mono,monospace" font-size="10" fill="rgba(100,255,218,0.7)" text-anchor="middle" letter-spacing="1">FOUNDER EFFECT</text>

  <!-- Source population -->
  <rect x="480" y="40" width="110" height="160" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="535" y="57" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(255,255,255,0.4)" text-anchor="middle">source pop.</text>
  <!-- Diverse dots -->
  <circle cx="498" cy="75"  r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="513" cy="75"  r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="528" cy="75"  r="5" fill="#a78bfa" opacity="0.7"/>
  <circle cx="543" cy="75"  r="5" fill="#ffd166" opacity="0.7"/>
  <circle cx="558" cy="75"  r="5" fill="#b8f089" opacity="0.7"/>
  <circle cx="573" cy="75"  r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="498" cy="95"  r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="513" cy="95"  r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="528" cy="95"  r="5" fill="#ffd166" opacity="0.7"/>
  <circle cx="543" cy="95"  r="5" fill="#a78bfa" opacity="0.7"/>
  <circle cx="558" cy="95"  r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="573" cy="95"  r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="498" cy="115" r="5" fill="#b8f089" opacity="0.7"/>
  <circle cx="513" cy="115" r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="528" cy="115" r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="543" cy="115" r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="558" cy="115" r="5" fill="#ffd166" opacity="0.7"/>
  <circle cx="573" cy="115" r="5" fill="#a78bfa" opacity="0.7"/>
  <circle cx="498" cy="135" r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="513" cy="135" r="5" fill="#a78bfa" opacity="0.7"/>
  <circle cx="528" cy="135" r="5" fill="#64ffda" opacity="0.7"/>
  <circle cx="543" cy="135" r="5" fill="#b8f089" opacity="0.7"/>
  <circle cx="558" cy="135" r="5" fill="#ff6ec7" opacity="0.7"/>
  <circle cx="573" cy="135" r="5" fill="#64ffda" opacity="0.7"/>

  <!-- Migration arrow -->
  <path d="M595,100 Q630,75 655,80" fill="none" stroke="rgba(100,255,218,0.4)" stroke-width="1.5"/>
  <text x="618" y="72" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.5)" text-anchor="middle">few</text>
  <text x="618" y="84" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(100,255,218,0.5)" text-anchor="middle">migrate</text>
  <!-- Island icon -->
  <ellipse cx="730" cy="240" rx="80" ry="18" fill="rgba(100,255,218,0.06)" stroke="rgba(100,255,218,0.15)" stroke-width="1"/>

  <!-- Founder colony (small, non-representative sample) -->
  <rect x="655" y="70" width="90" height="100" rx="8" fill="rgba(100,255,218,0.05)" stroke="rgba(100,255,218,0.35)" stroke-width="1.5"/>
  <text x="700" y="87" font-family="JetBrains Mono,monospace" font-size="7.5" fill="rgba(100,255,218,0.5)" text-anchor="middle">new colony</text>
  <!-- Only rose and gold survived by chance (founders carried these) -->
  <circle cx="672" cy="105" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="688" cy="105" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="704" cy="105" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="720" cy="105" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="736" cy="105" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="672" cy="123" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="688" cy="123" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="704" cy="123" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="720" cy="123" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="736" cy="123" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="672" cy="141" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="688" cy="141" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="704" cy="141" r="5" fill="#ff6ec7" opacity="0.9"/>
  <circle cx="720" cy="141" r="5" fill="#ffd166" opacity="0.9"/>
  <circle cx="736" cy="141" r="5" fill="#ff6ec7" opacity="0.9"/>

  <text x="680" y="260" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.3)" text-anchor="middle">Real examples: Amish (Ellis-van Creveld),</text>
  <text x="680" y="272" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,0.3)" text-anchor="middle">Galapagos finches, island colonisers</text>
</svg>`;

// ─── MODULE HTML ──────────────────────────────────────────────────────────────
window.M03 = {
html: `
<section class="module reveal" id="evolution">
  <div class="module-header">
    <div class="module-num">Module 03</div>
    <h2 class="module-title">Evolutionary <em>Processes</em></h2>
    <p class="module-tag">Evolution is change in allele frequencies over time. Five forces drive that change — and one famous equation tells us when it's not happening.</p>
  </div>

  <div class="objectives reveal">
    <ul>
      <li>State Hardy-Weinberg equilibrium conditions and use p² + 2pq + q² = 1 to solve population genetics problems</li>
      <li>Identify which conditions of H-W are violated for each of the five agents of evolution</li>
      <li>Distinguish directional, stabilising, and disruptive natural selection with examples</li>
      <li>Explain genetic drift, and distinguish the bottleneck effect from the founder effect</li>
      <li>Describe gene flow and its effect on population divergence</li>
      <li>Explain why mutation is the ultimate source of genetic variation</li>
    </ul>
  </div>

  <!-- SECTION: Evolution defined -->
  <div class="section-break reveal">
    <div class="section-label">§ 3.1</div>
    <h3>What is Evolution?</h3>
    <p>In its most precise biological definition, evolution is a <strong>change in allele frequencies in a population over generations</strong>. It is not the change in an individual — individuals do not evolve. Populations evolve.</p>

    <div class="callout callout-teal reveal">
      <div class="callout-label">◈ Core Definition</div>
      <p><strong>Microevolution:</strong> Changes in allele frequencies within a population over generations. <strong>Macroevolution:</strong> Large-scale evolutionary changes over long time periods, including speciation and the origin of higher taxa. All macroevolution is the cumulative result of microevolutionary processes.</p>
    </div>

    <div class="stat-row reveal">
      <div class="stat-card">
        <span class="stat-num" style="color:var(--teal)">5</span>
        <span class="stat-label">agents of evolution</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--violet)">5</span>
        <span class="stat-label">H-W conditions</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--rose)">3</span>
        <span class="stat-label">types of nat. selection</span>
      </div>
      <div class="stat-card">
        <span class="stat-num" style="color:var(--gold)">1</span>
        <span class="stat-label">source of new alleles</span>
      </div>
    </div>
  </div>

  <!-- SECTION: Hardy-Weinberg -->
  <div class="section-break reveal">
    <div class="section-label">§ 3.2</div>
    <h3>Hardy-Weinberg Equilibrium</h3>
    <p>The Hardy-Weinberg principle (1908) describes the conditions under which a population is <em>not</em> evolving — it is the null hypothesis of population genetics. When a population meets all five conditions, allele frequencies remain constant generation after generation (equilibrium). Deviation from H-W indicates evolution is occurring.</p>

    <!-- Interactive HW simulation container -->
    <div class="sim-box reveal" id="hw-sim-container">
      <div class="sim-title">Hardy-Weinberg Interactive Calculator</div>
      <div class="sim-desc">Adjust the frequency of allele <em>p</em> to see how genotype frequencies change. The bars show p² (AA), 2pq (Aa), and q² (aa) in real time.</div>
      <canvas id="canvas-hw" width="900" height="280"></canvas>
      <div class="sim-controls">
        <div class="sim-control">
          <label>Allele frequency <em>p</em> (dominant) <span id="hw-p-val">0.60</span></label>
          <input type="range" id="hw-p" min="0" max="100" value="60">
        </div>
      </div>
      <div class="sim-legend">
        <div class="sim-legend-item"><div class="sim-legend-dot" style="background:#64ffda"></div> p² = AA (homozygous dominant)</div>
        <div class="sim-legend-item"><div class="sim-legend-dot" style="background:#a78bfa"></div> 2pq = Aa (heterozygous)</div>
        <div class="sim-legend-item"><div class="sim-legend-dot" style="background:#ff6ec7"></div> q² = aa (homozygous recessive)</div>
      </div>
    </div>

    <div class="formula reveal">
      <div>p + q = 1 &nbsp;&nbsp;&nbsp;&nbsp; p² + 2pq + q² = 1</div>
      <span class="formula-label">Hardy-Weinberg genotype frequency equation · p = freq(A allele) · q = freq(a allele)</span>
    </div>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>The Five Equilibrium Conditions</h4>
        <p>H-W equilibrium holds only when <em>all five</em> of the following conditions are met simultaneously — in reality, rarely achieved in nature:</p>
        <ol style="color:var(--ink-soft); padding-left:1.5rem; font-weight:300;">
          <li style="margin:0.6rem 0;"><strong style="color:var(--teal)">Very large population size</strong> — so random sampling effects (genetic drift) are negligible</li>
          <li style="margin:0.6rem 0;"><strong style="color:var(--teal)">Random mating</strong> — every individual equally likely to mate with any other (panmixia)</li>
          <li style="margin:0.6rem 0;"><strong style="color:var(--teal)">No mutation</strong> — alleles don't change form</li>
          <li style="margin:0.6rem 0;"><strong style="color:var(--teal)">No migration (gene flow)</strong> — no alleles enter or leave the population</li>
          <li style="margin:0.6rem 0;"><strong style="color:var(--teal)">No natural selection</strong> — all genotypes have equal reproductive success (fitness = 1)</li>
        </ol>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Solving H-W Problems (Step-by-Step)</h4>
        <div class="example" style="margin:0.5rem 0;">
          <strong>Example:</strong>
          <p>In a population, 16% of individuals are albino (aa). What are the allele and genotype frequencies?</p>
          <ol style="color:var(--ink-soft); padding-left:1.5rem; font-weight:300; font-size:0.9em;">
            <li>q² = 0.16 → <strong style="color:var(--teal)">q = √0.16 = 0.4</strong></li>
            <li>p = 1 − q = 1 − 0.4 = <strong style="color:var(--teal)">p = 0.6</strong></li>
            <li>p² = 0.6² = <strong style="color:var(--violet)">0.36 (36% AA)</strong></li>
            <li>2pq = 2(0.6)(0.4) = <strong style="color:var(--rose)">0.48 (48% Aa)</strong></li>
            <li>Check: 0.36 + 0.48 + 0.16 = 1.00 ✓</li>
          </ol>
        </div>
        <div class="tip" style="margin:0.5rem 0;">Always start with q² (the recessive homozygote) — it's the only genotype you can directly measure from phenotype alone.</div>
      </div>
    </div>

    <div class="keypoint reveal">
      <strong>H-W is the null hypothesis:</strong> Finding a population is <em>not</em> in H-W equilibrium tells you that evolution is occurring, but doesn't tell you which force is responsible. You need additional evidence to distinguish selection, drift, gene flow, mutation, or non-random mating.
    </div>
  </div>

  <!-- SECTION: Agents of Evolution -->
  <div class="section-break reveal">
    <div class="section-label">§ 3.3</div>
    <h3>The Five Agents of Evolution</h3>

    <!-- Agent 1: Natural Selection -->
    <div class="glass reveal holo">
      <h4>1 · Natural Selection</h4>
      <p><strong>Natural selection</strong> is the differential survival and reproduction of individuals due to differences in phenotype. It is the only mechanism that consistently produces <em>adaptations</em> — traits that increase reproductive success in a given environment. Selection acts on <em>phenotype</em> but changes <em>allele frequencies</em>. A genotype must produce a phenotype to be "seen" by selection.</p>

      <div class="definition reveal">
        <strong>Fitness (w)</strong>The reproductive success of a genotype relative to others in the population. Fitness = 1 means maximum reproductive success; fitness = 0 means no reproduction. Selection increases the frequency of alleles that confer higher fitness.
      </div>

      <div class="figure reveal">
        <div class="fig-label">Fig 3.1 — The Three Modes of Natural Selection</div>
        ${SVG_SELECTION}
        <div class="fig-caption">Grey curves = ancestral phenotype distribution. Coloured curves = post-selection distribution. Arrow indicates direction of selection pressure. Directional: mean shifts. Stabilising: variance decreases (intermediate favoured). Disruptive: variance increases (bimodal distribution develops, may lead to speciation).</div>
      </div>

      <div class="grid g3 reveal">
        <div class="card bg-ecto reveal-item delay-1">
          <h4>Directional Selection</h4>
          <p>Favours individuals at one extreme of the phenotypic range. The mean shifts toward the favoured extreme over generations. Most common form of selection.</p>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Examples:</strong>
            <ul style="font-size:0.9em;">
              <li>Peppered moth (<em>Biston betularia</em>) during industrialisation — dark form selected for</li>
              <li>Antibiotic resistance in bacteria</li>
              <li>Galapagos ground finch (<em>Geospiza fortis</em>) — larger beak size during drought (Peter &amp; Rosemary Grant's long-term study)</li>
            </ul>
          </div>
        </div>
        <div class="card bg-meso reveal-item delay-2">
          <h4>Stabilising Selection</h4>
          <p>Favours intermediate phenotypes and selects against both extremes. Reduces phenotypic variance but doesn't shift the mean. Maintains the status quo — most common when environment is stable.</p>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Examples:</strong>
            <ul style="font-size:0.9em;">
              <li>Human birth weight — ~3.4 kg optimal (too small: poor temperature regulation; too large: birth canal injury)</li>
              <li>Clutch size in birds — intermediate number of eggs maximises fledgling survival</li>
              <li>Stabilises most existing well-adapted traits</li>
            </ul>
          </div>
        </div>
        <div class="card bg-endo reveal-item delay-3">
          <h4>Disruptive Selection</h4>
          <p>Favours both extremes over intermediate phenotypes. Increases variance and can lead to a bimodal distribution. May drive sympatric speciation if extreme phenotypes mate assortatively.</p>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Examples:</strong>
            <ul style="font-size:0.9em;">
              <li>Beak sizes in black-bellied seedcracker (<em>Pyrenestes ostrinus</em>) — either large or small beaks process different seeds more efficiently</li>
              <li>Sickle-cell: in malaria regions, both HbS/HbS (die of sickle-cell) and HbA/HbA (die of malaria) selected against — Hb S /Hb A heterozygotes have highest fitness (heterozygote advantage)</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="callout callout-gold reveal">
        <div class="callout-label">★ The Peppered Moth — a Complete Story</div>
        <p>Before the Industrial Revolution, the peppered moth (<em>Biston betularia</em>) population in England was predominantly the pale, speckled form (typica), well-camouflaged against light-coloured lichen on tree bark. The dark (melanic) form (carbonaria) was rare. As industrial pollution killed lichens and coated bark with black soot, the dark form gained a camouflage advantage against bird predators. By the late 19th century, carbonaria comprised over 90% of the population in industrial areas — a dramatic and measurable example of directional selection. Since the Clean Air Act (1956), carbonaria frequency has declined again as lichens return. This is <strong>microevolution in real time</strong>, directly observed and measured.</p>
      </div>
    </div>

    <!-- Agent 2: Genetic Drift -->
    <div class="glass reveal holo" style="margin-top:2rem;">
      <h4>2 · Genetic Drift</h4>
      <p><strong>Genetic drift</strong> is random fluctuation in allele frequencies caused by chance sampling effects in small populations. Unlike selection, drift is undirected — it can fix beneficial, neutral, or harmful alleles by chance. Its effects are most dramatic in small populations because random sampling errors are proportionally larger.</p>

      <div class="figure reveal">
        <div class="fig-label">Fig 3.2 — Bottleneck &amp; Founder Effects</div>
        ${SVG_DRIFT}
        <div class="fig-caption">Both the bottleneck effect (population crash) and founder effect (small group colonises new area) result in a non-representative sample of the original population's genetic variation. The surviving/founding individuals carry only a subset of the original alleles, and the new population may have fixed (frequency = 1.0) some alleles and lost others entirely — by chance, not by selection.</div>
      </div>

      <!-- Drift simulation -->
      <div class="sim-box reveal" id="drift-sim-container">
        <div class="sim-title">Genetic Drift Simulation</div>
        <div class="sim-desc">Watch allele frequency (p) change over 100 generations in multiple populations. Small populations drift faster — alleles are fixed or lost by chance alone.</div>
        <canvas id="canvas-drift" width="900" height="320"></canvas>
        <div class="sim-controls">
          <div class="sim-control">
            <label>Population size (N) <span id="drift-n-val">50</span></label>
            <input type="range" id="drift-n" min="10" max="500" value="50" step="10">
          </div>
          <div class="sim-control">
            <label>Starting frequency p₀ <span id="drift-p0-val">0.50</span></label>
            <input type="range" id="drift-p0" min="5" max="95" value="50">
          </div>
        </div>
        <div class="sim-btn-row">
          <button class="sim-btn" id="drift-run">▶ Run Simulation</button>
          <button class="sim-btn rose" id="drift-reset">↺ Reset</button>
        </div>
        <div class="sim-legend">
          <div class="sim-legend-item"><div class="sim-legend-line" style="background:#64ffda"></div> Each line = one independent population</div>
          <div class="sim-legend-item"><div class="sim-legend-line" style="background:rgba(255,255,255,0.3); border-top:2px dashed rgba(255,255,255,0.3);"></div> Starting frequency p₀</div>
        </div>
      </div>

      <div class="compare reveal">
        <div class="compare-col">
          <h4 style="color:var(--gold)">Bottleneck Effect</h4>
          <p>A catastrophic reduction in population size due to an environmental event (disease, natural disaster, habitat destruction). The surviving individuals represent a random, non-representative sample of the original gene pool. Even if the population recovers in numbers, genetic diversity is permanently reduced.</p>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Cheetahs:</strong> All living cheetahs are so genetically similar that skin grafts can be exchanged between unrelated individuals without rejection. Population crashed ~10,000 years ago (possibly during the last Ice Age). Consequence: high disease susceptibility, low sperm quality, low fertility.
          </div>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Northern elephant seal:</strong> Hunted to ~20–100 individuals in the late 1800s. Now recovered to 150,000+ individuals, but virtually no genetic variation at allozyme loci — a living bottleneck signature.
          </div>
        </div>
        <div class="compare-col">
          <h4 style="color:var(--teal)">Founder Effect</h4>
          <p>A form of genetic drift where a small number of individuals leave a population and establish a new colony elsewhere (island, isolated valley). The founders carry a random and often non-representative sample of alleles from the original population. The new population is founded with low diversity.</p>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Amish (Lancaster County, PA):</strong> Founded by ~200 immigrants in the 1700s. Today, Ellis-van Creveld syndrome (EVC) — a rare form of dwarfism — occurs at 1,000× higher frequency than in other populations, because one of the founders happened to carry the allele.
          </div>
          <div class="example" style="margin:0.5rem 0;">
            <strong>Galapagos finches:</strong> Descended from a small founding flock that colonised from mainland South America. The founding alleles were a random subset, and subsequent drift and selection drove rapid diversification into 13+ species.
          </div>
        </div>
      </div>
    </div>

    <!-- Agent 3: Gene Flow -->
    <div class="glass reveal holo" style="margin-top:2rem;">
      <h4>3 · Gene Flow</h4>
      <p><strong>Gene flow</strong> (also called migration) is the movement of alleles between populations through the movement of individuals or gametes. Gene flow homogenises allele frequencies between populations — it opposes population divergence and thus opposes speciation.</p>

      <div class="grid g2 reveal">
        <div class="card reveal-item delay-1">
          <h4>Effects of Gene Flow</h4>
          <ul>
            <li>Introduces new alleles into a recipient population</li>
            <li>Increases genetic variation within populations</li>
            <li>Decreases genetic differences <em>between</em> populations</li>
            <li>Can counteract local adaptation by introducing "foreign" alleles</li>
            <li>Can rescue small inbred populations (genetic rescue)</li>
          </ul>
        </div>
        <div class="card reveal-item delay-2">
          <h4>Examples of Gene Flow</h4>
          <ul>
            <li><strong>Pollen dispersal</strong> in plants — can travel kilometres, linking distant populations</li>
            <li><strong>Bird migration</strong> — breeding in one range, wintering in another, mixing genes between regions</li>
            <li><strong>Human migration</strong> — historical gene flow between continents; Neanderthal introgression into modern human genomes (~2% of non-African genomes)</li>
            <li><strong>Oceanic larvae</strong> — marine invertebrates with pelagic larval stages disperse widely, maintaining high gene flow across ocean basins</li>
          </ul>
        </div>
      </div>

      <div class="warn reveal">
        <strong>Exam tip:</strong> Gene flow and genetic drift both change allele frequencies without adaptation. But gene flow tends to <em>reduce</em> differences between populations (homogenising), while genetic drift <em>increases</em> differences (diverging populations by chance). High gene flow between populations can prevent speciation even when selection pressures differ.
      </div>
    </div>

    <!-- Agent 4: Mutation -->
    <div class="glass reveal holo" style="margin-top:2rem;">
      <h4>4 · Mutation</h4>
      <p>Mutation is the <strong>only source of new alleles</strong> — the ultimate raw material for evolution. All other evolutionary forces merely change the frequencies of existing alleles; only mutation creates new ones. However, mutations occur at very low rates (~10⁻⁸ per base pair per generation in humans), so mutation alone causes only tiny changes in allele frequency per generation.</p>

      <div class="grid g3 reveal">
        <div class="card reveal-item delay-1">
          <h4>Types of Mutations</h4>
          <ul>
            <li><strong>Point mutations:</strong> Substitution, insertion, deletion of individual nucleotides</li>
            <li><strong>Chromosomal mutations:</strong> Deletions, duplications, inversions, translocations</li>
            <li><strong>Polyploidy:</strong> Entire genome duplication — major in plant evolution</li>
          </ul>
        </div>
        <div class="card reveal-item delay-2">
          <h4>Effects of Mutations</h4>
          <ul>
            <li><strong>Most are neutral</strong> — in non-coding DNA, synonymous codons, or producing slightly different proteins with no fitness effect</li>
            <li><strong>Some are harmful</strong> — disrupting important proteins (most coding mutations)</li>
            <li><strong>Rarely beneficial</strong> — but these rare mutations are the fuel for adaptive evolution</li>
          </ul>
        </div>
        <div class="card reveal-item delay-3">
          <h4>Mutation + Selection</h4>
          <p>Mutations provide the raw material; selection sorts them. A beneficial mutation starts at frequency 1/(2N) — usually lost quickly by drift even if beneficial. The probability a new beneficial mutation is eventually fixed ≈ 2s (where s = selection coefficient). Most beneficial mutations are lost before selection can act on them.</p>
        </div>
      </div>
    </div>

    <!-- Agent 5: Non-random mating -->
    <div class="glass reveal holo" style="margin-top:2rem;">
      <h4>5 · Non-Random Mating</h4>
      <p>When individuals choose mates non-randomly (inbreeding, assortative mating, or sexual selection), genotype frequencies deviate from H-W predictions but allele frequencies don't change — non-random mating alone is not evolution in the strictest sense. However, it has major evolutionary consequences by altering the availability of alleles for selection.</p>

      <div class="grid g2 reveal">
        <div class="card reveal-item delay-1">
          <h4>Inbreeding</h4>
          <p>Mating between relatives. Increases homozygosity — exposes recessive deleterious alleles to selection. Reduces heterozygosity below H-W predictions. Consequence: <em>inbreeding depression</em> — reduced fitness due to expression of recessive harmful alleles. Self-fertilising plants are extreme inbreeders.</p>
        </div>
        <div class="card reveal-item delay-2">
          <h4>Assortative Mating &amp; Sexual Selection</h4>
          <p>Assortative mating: preference for phenotypically similar mates (positive) or dissimilar mates (negative). <em>Sexual selection</em> (a form of natural selection): differential success in acquiring mates. Intrasexual selection (male-male competition → elephant seal dominance fights). Intersexual selection (female choice → peacock feathers, bird-of-paradise displays). Can drive rapid trait evolution independent of survival value.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Q&A -->
  <div class="section-break reveal">
    <div class="section-label">§ Exam Practice</div>
    <h3>Q&amp;A — Module 03</h3>
    <div class="qa-set">
      <div class="qa-item">
        <div class="qa-q">In a population, you find that the frequency of blood type B (genotype I^B I^B or I^B i) is 19% and type O (ii) is 49%. Test whether this population is in H-W equilibrium for the i allele. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>First, find allele frequencies from the type O class (ii = q²): q² = 0.49, so <strong>q = 0.7</strong> (freq of i allele), and <strong>p = 0.3</strong> (freq of I^B allele, assuming only I^B and i here for simplicity).</p>
          <p>H-W prediction for I^B I^B: p² = 0.09 (9%). H-W prediction for I^B i: 2pq = 2(0.3)(0.7) = 0.42 (42%). But we observe I^B types at only 19%. This could indicate: violation of random mating, non-representative sampling, or (more likely) ignoring the I^A allele. Full ABO analysis requires a three-allele H-W calculation. The key lesson: always start with q² from phenotype.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Why is natural selection the only evolutionary mechanism that produces adaptations? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>An <strong>adaptation</strong> is a heritable trait that increases an organism's fitness in its environment — it appears purposefully designed for a function. Natural selection is the only mechanism that consistently and non-randomly favours alleles based on their effect on survival and reproduction. The other agents:</p>
          <ul>
            <li><strong>Genetic drift</strong> is random — it can fix maladaptive alleles by chance, it has no direction, and its effects are not consistently aligned with environmental demands</li>
            <li><strong>Gene flow</strong> introduces alleles from elsewhere — they may or may not be adaptive in the new environment, and their spread is driven by migration, not fitness</li>
            <li><strong>Mutation</strong> is random — mutations arise regardless of whether they are beneficial; mutation pressure alone doesn't consistently increase average fitness</li>
            <li><strong>Non-random mating</strong> changes genotype frequencies but not allele frequencies — it exposes alleles to selection but doesn't itself increase fitness</li>
          </ul>
          <p>Only selection has a consistent, directional effect: alleles that increase reproductive success become more common. Over many generations, this produces the appearance of design.</p>
        </div></div>
      </div>
      <div class="qa-item">
        <div class="qa-q">Explain why the bottleneck effect often leads to inbreeding depression in the recovered population. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>After a bottleneck, the surviving population has drastically reduced genetic diversity — many alleles from the original population are absent. The surviving individuals are more closely related to each other than members of the original large population. When the population recovers, the small founder group means most matings are between relatives (even if not intentionally) — this is inbreeding by necessity. Inbreeding increases homozygosity across the genome. Recessive deleterious alleles, which were usually "hidden" in heterozygotes in the large population, become homozygous and are exposed to selection. The result is <strong>inbreeding depression</strong> — reduced fertility, viability, and overall fitness. This is why zoos carefully manage studbooks and avoid pairings between relatives, and why small captive populations face genetic management challenges.</p>
        </div></div>
      </div>
    </div>
  </div>

</section>
`};
