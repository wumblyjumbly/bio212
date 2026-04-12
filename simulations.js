'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   BIO 212 · THE LIVING CODEX · simulations.js
   Hardy-Weinberg bar chart + Genetic Drift line simulation
   All canvas-based, no external dependencies.
═══════════════════════════════════════════════════════════════════════════ */

function initSimulations () {
  hwSimulation();
  driftSimulation();
}

// ── COLOUR HELPERS ───────────────────────────────────────────────────────────
const C = {
  teal:   '#64ffda',
  violet: '#a78bfa',
  rose:   '#ff6ec7',
  gold:   '#ffd166',
  lime:   '#b8f089',
  ink:    'rgba(238,242,255,0.9)',
  inkDim: 'rgba(122,134,184,0.8)',
  line:   'rgba(167,139,250,0.18)',
  bg:     'rgba(8,11,26,0.85)',
};

function dpr () {
  return Math.min(window.devicePixelRatio || 1, 2);
}

function setupCanvas (canvas) {
  const d  = dpr();
  const w  = canvas.clientWidth  || canvas.offsetWidth  || 900;
  const h  = canvas.clientHeight || canvas.offsetHeight;
  canvas.width  = w * d;
  canvas.height = h * d;
  const ctx = canvas.getContext('2d');
  ctx.scale(d, d);
  return { ctx, w, h };
}

// ════════════════════════════════════════════════════════════════════════════
// HARDY-WEINBERG SIMULATION
// ════════════════════════════════════════════════════════════════════════════
function hwSimulation () {
  const canvas = document.getElementById('canvas-hw');
  if (!canvas) return;

  const slider = document.getElementById('hw-p');
  const valEl  = document.getElementById('hw-p-val');
  if (!slider) return;

  canvas.style.height = '280px';

  function drawHW () {
    const { ctx, w, h } = setupCanvas(canvas);
    const p = Number(slider.value) / 100;
    const q = 1 - p;

    if (valEl) valEl.textContent = p.toFixed(2);

    const pp  = p * p;
    const tpq = 2 * p * q;
    const qq  = q * q;

    // Background
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 0.8;
    for (let i = 0; i <= 5; i++) {
      const y = h - 50 - (i / 5) * (h - 90);
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(w - 20, y);
      ctx.stroke();
      ctx.fillStyle = C.inkDim;
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText((i * 0.2).toFixed(1), 55, y + 4);
    }

    // Bars
    const barData = [
      { label: 'p²  (AA)',  val: pp,  color: C.teal,   glow: 'rgba(100,255,218,0.25)' },
      { label: '2pq (Aa)', val: tpq, color: C.violet, glow: 'rgba(167,139,250,0.25)' },
      { label: 'q²  (aa)',  val: qq,  color: C.rose,   glow: 'rgba(255,110,199,0.25)' },
    ];

    const barW   = Math.min(140, (w - 120) / 3 - 20);
    const gap    = ((w - 120) - barData.length * barW) / (barData.length + 1);
    const chartH = h - 90;
    const baseY  = h - 50;

    barData.forEach((bar, i) => {
      const x   = 70 + gap * (i + 1) + barW * i;
      const bh  = bar.val * chartH;
      const y   = baseY - bh;

      // Glow effect
      const gradient = ctx.createLinearGradient(x, y, x, baseY);
      gradient.addColorStop(0, bar.color);
      gradient.addColorStop(1, bar.glow);

      ctx.shadowColor  = bar.color;
      ctx.shadowBlur   = 18;
      ctx.fillStyle    = gradient;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, bh, [6, 6, 0, 0]);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Border
      ctx.strokeStyle = bar.color;
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, bh, [6, 6, 0, 0]);
      ctx.stroke();

      // Value label on top of bar
      ctx.fillStyle  = bar.color;
      ctx.font       = 'bold 13px JetBrains Mono, monospace';
      ctx.textAlign  = 'center';
      ctx.fillText(bar.val.toFixed(3), x + barW / 2, Math.max(y - 8, 14));

      // x-axis label
      ctx.fillStyle = C.inkDim;
      ctx.font      = '11px JetBrains Mono, monospace';
      ctx.fillText(bar.label, x + barW / 2, baseY + 18);
    });

    // Allele freq display
    ctx.fillStyle = C.ink;
    ctx.font      = '12px Fraunces, Georgia, serif';
    ctx.textAlign = 'left';
    ctx.fillText(`p = ${p.toFixed(2)}   q = ${q.toFixed(2)}   (p + q = 1.00)`, 70, 22);

    // Y-axis label
    ctx.save();
    ctx.translate(14, h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = C.inkDim;
    ctx.font      = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Genotype Frequency', 0, 0);
    ctx.restore();

    // Horizontal check: p² + 2pq + q² = 1
    ctx.fillStyle = 'rgba(100,255,218,0.4)';
    ctx.font      = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`p² + 2pq + q² = ${(pp + tpq + qq).toFixed(3)}`, w - 22, 22);
  }

  // Initial draw
  drawHW();

  // Update on slider change
  slider.addEventListener('input', drawHW);

  // Redraw on resize
  const ro = new ResizeObserver(drawHW);
  ro.observe(canvas.parentElement || canvas);
}

// ════════════════════════════════════════════════════════════════════════════
// GENETIC DRIFT SIMULATION
// ════════════════════════════════════════════════════════════════════════════
function driftSimulation () {
  const canvas   = document.getElementById('canvas-drift');
  if (!canvas) return;

  const nSlider  = document.getElementById('drift-n');
  const p0Slider = document.getElementById('drift-p0');
  const nValEl   = document.getElementById('drift-n-val');
  const p0ValEl  = document.getElementById('drift-p0-val');
  const runBtn   = document.getElementById('drift-run');
  const resetBtn = document.getElementById('drift-reset');

  if (!nSlider || !p0Slider) return;

  canvas.style.height = '320px';

  const NUM_POPS  = 8;
  const NUM_GEN   = 100;
  const COLORS    = [C.teal, C.violet, C.rose, C.gold, C.lime,
                     '#7dd3fc', '#ff8a8a', 'rgba(255,255,255,0.6)'];

  let histories   = [];
  let animFrame   = null;
  let currentGen  = 0;
  let isRunning   = false;

  function binomialSample (N, p) {
    // Draw allele freq for next generation using binomial sampling
    let successes = 0;
    for (let i = 0; i < 2 * N; i++) {
      if (Math.random() < p) successes++;
    }
    return successes / (2 * N);
  }

  function runDrift () {
    const N  = Number(nSlider.value);
    const p0 = Number(p0Slider.value) / 100;
    histories = [];
    for (let pop = 0; pop < NUM_POPS; pop++) {
      const hist = [p0];
      let p = p0;
      for (let g = 1; g <= NUM_GEN; g++) {
        if (p <= 0) { hist.push(0); continue; }
        if (p >= 1) { hist.push(1); continue; }
        p = binomialSample(N, p);
        hist.push(p);
      }
      histories.push(hist);
    }
  }

  function drawFrame (upToGen) {
    const { ctx, w, h } = setupCanvas(canvas);
    const N  = Number(nSlider.value);
    const p0 = Number(p0Slider.value) / 100;

    // Background
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, w, h);

    const padL = 65, padR = 20, padT = 30, padB = 50;
    const chartW = w - padL - padR;
    const chartH = h - padT - padB;

    // Grid lines (p = 0, 0.25, 0.5, 0.75, 1.0)
    ctx.strokeStyle = C.line;
    ctx.lineWidth   = 0.8;
    [0, 0.25, 0.5, 0.75, 1.0].forEach(pv => {
      const y = padT + chartH - pv * chartH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();
      ctx.fillStyle  = C.inkDim;
      ctx.font       = '10px JetBrains Mono, monospace';
      ctx.textAlign  = 'right';
      ctx.fillText(pv.toFixed(2), padL - 6, y + 4);
    });

    // x-axis labels (generations)
    ctx.fillStyle = C.inkDim;
    ctx.font      = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    [0, 25, 50, 75, 100].forEach(g => {
      const x = padL + (g / NUM_GEN) * chartW;
      ctx.fillText(g, x, h - padB + 18);
    });

    // x-axis title
    ctx.fillStyle = C.inkDim;
    ctx.font      = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Generation', padL + chartW / 2, h - 10);

    // Starting p0 dashed line
    const p0Y = padT + chartH - p0 * chartH;
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth   = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(padL, p0Y);
    ctx.lineTo(w - padR, p0Y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Fixed (1.0) and Lost (0.0) zones
    ctx.fillStyle = 'rgba(100,255,218,0.04)';
    ctx.fillRect(padL, padT, chartW, 14);
    ctx.fillStyle = 'rgba(255,110,199,0.04)';
    ctx.fillRect(padL, padT + chartH - 14, chartW, 14);

    ctx.font       = '9px JetBrains Mono, monospace';
    ctx.fillStyle  = 'rgba(100,255,218,0.5)';
    ctx.textAlign  = 'right';
    ctx.fillText('FIXED (p = 1)', w - padR - 4, padT + 11);
    ctx.fillStyle  = 'rgba(255,110,199,0.5)';
    ctx.fillText('LOST (p = 0)', w - padR - 4, padT + chartH - 4);

    // Draw each population history
    histories.forEach((hist, popIdx) => {
      const color = COLORS[popIdx % COLORS.length];
      ctx.strokeStyle = color;
      ctx.lineWidth   = 1.8;
      ctx.shadowColor = color;
      ctx.shadowBlur  = 6;
      ctx.beginPath();
      const limit = Math.min(upToGen + 1, hist.length);
      for (let g = 0; g < limit; g++) {
        const x = padL + (g / NUM_GEN) * chartW;
        const y = padT + chartH - hist[g] * chartH;
        if (g === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Endpoint dot
      if (limit > 1) {
        const gEnd = limit - 1;
        const x    = padL + (gEnd / NUM_GEN) * chartW;
        const y    = padT + chartH - hist[gEnd] * chartH;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Title
    ctx.shadowBlur = 0;
    ctx.fillStyle  = C.ink;
    ctx.font       = '11px Fraunces, Georgia, serif';
    ctx.textAlign  = 'left';
    ctx.fillText(`N = ${N}   p₀ = ${p0.toFixed(2)}   ${NUM_POPS} independent populations`, padL, 22);

    // Count fixed / lost
    if (upToGen >= NUM_GEN && histories.length > 0) {
      const fixed = histories.filter(h => h[NUM_GEN] >= 1).length;
      const lost  = histories.filter(h => h[NUM_GEN] <= 0).length;
      ctx.fillStyle = C.inkDim;
      ctx.font      = '10px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`Fixed: ${fixed}   Lost: ${lost}   Polymorphic: ${NUM_POPS - fixed - lost}`,
                    w - padR, 22);
    }
  }

  function animate () {
    if (currentGen > NUM_GEN) {
      isRunning = false;
      return;
    }
    drawFrame(currentGen);
    currentGen++;
    animFrame = requestAnimationFrame(animate);
  }

  function start () {
    if (isRunning) return;
    cancelAnimationFrame(animFrame);
    runDrift();
    currentGen = 0;
    isRunning  = true;
    animate();
  }

  function reset () {
    cancelAnimationFrame(animFrame);
    isRunning  = false;
    histories  = [];
    currentGen = 0;
    const { ctx, w, h } = setupCanvas(canvas);
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = C.inkDim;
    ctx.font      = '12px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Press ▶ Run Simulation to begin', w / 2, h / 2);
  }

  // Sync slider labels
  nSlider.addEventListener('input', () => {
    if (nValEl) nValEl.textContent = nSlider.value;
  });
  p0Slider.addEventListener('input', () => {
    if (p0ValEl) p0ValEl.textContent = (Number(p0Slider.value) / 100).toFixed(2);
  });

  if (runBtn)   runBtn.addEventListener('click', start);
  if (resetBtn) resetBtn.addEventListener('click', reset);

  // Draw initial idle state
  reset();

  // Redraw on resize
  const ro = new ResizeObserver(() => {
    if (!isRunning && currentGen === 0) reset();
  });
  ro.observe(canvas.parentElement || canvas);
}
