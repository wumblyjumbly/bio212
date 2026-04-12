'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   BIO 212 · THE LIVING CODEX · app.js
   Orchestrator — assembles modules, fires interactions & simulations
═══════════════════════════════════════════════════════════════════════════ */

function boot () {
  // 1. Inject all module HTML
  const root = document.getElementById('content-root');
  if (root) {
    root.innerHTML = [
      window.M01, window.M02, window.M03, window.M04, window.M05
    ].map(m => m ? m.html : '').join('');
  }

  // 2. Generate star field
  generateStars();

  // 3. UI behaviours
  if (typeof initInteractions === 'function') initInteractions();

  // 4. Canvas simulations (needs DOM ready)
  requestAnimationFrame(() => {
    if (typeof initSimulations === 'function') initSimulations();
  });
}

function generateStars () {
  // Create a richer, randomised star field in JS
  const container = document.getElementById('stars');
  if (!container) return;
  const count = 120;
  const colors = ['#fff', '#a78bfa', '#64ffda', '#ff6ec7', '#ffd166', '#7dd3fc'];
  let html = '';
  for (let i = 0; i < count; i++) {
    const x  = Math.random() * 100;
    const y  = Math.random() * 100;
    const s  = (Math.random() * 2 + 0.5).toFixed(1);
    const c  = colors[Math.floor(Math.random() * colors.length)];
    const d  = (Math.random() * 8).toFixed(1);
    const op = (Math.random() * 0.5 + 0.3).toFixed(2);
    html += `<span style="position:absolute;left:${x}%;top:${y}%;width:${s}px;height:${s}px;border-radius:50%;background:${c};opacity:${op};animation:twinkle ${3 + Math.random()*5}s ${d}s ease-in-out infinite alternate;pointer-events:none;"></span>`;
  }
  container.innerHTML = html;
  container.style.cssText = 'position:fixed;inset:0;z-index:-2;overflow:hidden;';
}

document.addEventListener('DOMContentLoaded', boot);
