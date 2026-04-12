'use strict';
/* ═══════════════════════════════════════════════════════════════════════
   BIO 212 · THE LIVING CODEX · shared.js  v2
   Loads on every page. Call initPage(opts) from each HTML file.
═══════════════════════════════════════════════════════════════════════ */

function initPage (opts) {
  opts = opts || {};
  generateStars();
  initProgressBar();
  initScrollReveal();
  initLearningGoals();
  initAccordions();
  initTabs();
  initQA();
  initStepThrough();
  initActiveNav();
  if (opts.simulations) initSimulations();
  if (opts.selectionViz) initSelectionViz();
  if (opts.bicoidSim)   initBicoidSim();
  if (opts.timeline)    initTimeline();
}

/* ── STARS ─────────────────────────────────────────────────────────── */
function generateStars () {
  const c = document.getElementById('stars');
  if (!c) return;
  const cols = ['#fff','#a78bfa','#64ffda','#ff6ec7','#ffd166','#7dd3fc'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 150; i++) {
    const s = document.createElement('div');
    const sz = (Math.random()*2.5+0.4).toFixed(1);
    const dur = (Math.random()*7+3).toFixed(1);
    const del = (Math.random()*10).toFixed(2);
    const col = cols[Math.floor(Math.random()*cols.length)];
    s.style.cssText =
      `position:absolute;left:${(Math.random()*100).toFixed(2)}%;`+
      `top:${(Math.random()*100).toFixed(2)}%;`+
      `width:${sz}px;height:${sz}px;background:${col};border-radius:50%;`+
      `opacity:${(Math.random()*0.7+0.15).toFixed(2)};`+
      `animation:twinkle ${dur}s ease-in-out ${del}s infinite alternate;`;
    frag.appendChild(s);
  }
  c.appendChild(frag);
}

/* ── PROGRESS BAR ──────────────────────────────────────────────────── */
function initProgressBar () {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const update = () => {
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (dh>0 ? (window.scrollY/dh)*100 : 0)+'%';
  };
  window.addEventListener('scroll', update, {passive:true});
  update();
}

/* ── SCROLL REVEAL ─────────────────────────────────────────────────── */
function initScrollReveal () {
  const els = document.querySelectorAll('.reveal, .reveal-item');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }});
  }, {threshold:0.07, rootMargin:'0px 0px -30px 0px'});
  els.forEach(el => io.observe(el));
}

/* ── LEARNING GOALS TIERS ──────────────────────────────────────────── */
function initLearningGoals () {
  document.querySelectorAll('.lg-tier-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const tier = hdr.closest('.lg-tier');
      tier.classList.toggle('open');
    });
  });
  // Open tier-1 by default
  document.querySelectorAll('.lg-tier.tier-1').forEach(t => t.classList.add('open'));
}

/* ── ACCORDIONS ────────────────────────────────────────────────────── */
function initAccordions () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const open = btn.classList.toggle('open');
      if (body) body.classList.toggle('open', open);
    });
  });
}

/* ── TABS ──────────────────────────────────────────────────────────── */
function initTabs () {
  document.querySelectorAll('.tab-list').forEach(list => {
    const group = list.closest('.tabs');
    if (!group) return;
    list.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        list.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const t = group.querySelector('[data-tab="'+btn.dataset.tab+'"]');
        if (t) t.classList.add('active');
      });
    });
  });
}

/* ── Q&A BLOCKS ────────────────────────────────────────────────────── */
function initQA () {
  document.querySelectorAll('.qa-q').forEach(q => {
    q.addEventListener('click', () => {
      const a = q.nextElementSibling;
      q.classList.toggle('open');
      if (a) a.classList.toggle('open', q.classList.contains('open'));
    });
  });
}

/* ── STEP-THROUGH PANELS ───────────────────────────────────────────── */
function initStepThrough () {
  document.querySelectorAll('.step-container').forEach(sc => {
    const panels = sc.querySelectorAll('.step-panel');
    const btns   = sc.querySelectorAll('.step-btn[data-step]');
    const counter = sc.querySelector('.step-counter');
    if (!panels.length) return;
    let cur = 0;
    function show(idx) {
      cur = Math.max(0, Math.min(panels.length-1, idx));
      panels.forEach((p,i) => p.classList.toggle('active', i===cur));
      btns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.step)===cur));
      if (counter) counter.textContent = `${cur+1} / ${panels.length}`;
    }
    btns.forEach(b => b.addEventListener('click', () => show(parseInt(b.dataset.step))));
    // prev/next
    sc.querySelectorAll('[data-prev]').forEach(b => b.addEventListener('click', () => show(cur-1)));
    sc.querySelectorAll('[data-next]').forEach(b => b.addEventListener('click', () => show(cur+1)));
    show(0);
  });
}

/* ── ACTIVE NAV ────────────────────────────────────────────────────── */
function initActiveNav () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.module-nav .nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href').split('/').pop() === path);
  });
}

/* ══════════════════════════════════════════════════════════════════════
   SIMULATIONS
══════════════════════════════════════════════════════════════════════ */
const C = {
  teal:'#64ffda', violet:'#a78bfa', rose:'#ff6ec7', gold:'#ffd166',
  lime:'#b8f089', sky:'#7dd3fc', ink:'rgba(238,242,255,0.9)',
  inkDim:'rgba(122,134,184,0.8)', line:'rgba(167,139,250,0.18)',
  bg:'rgba(8,11,26,0.85)',
};
function dpr () { return Math.min(window.devicePixelRatio||1,2); }
function setupCanvas (canvas) {
  const d=dpr(), w=canvas.clientWidth||900, h=canvas.clientHeight||300;
  canvas.width=w*d; canvas.height=h*d;
  const ctx=canvas.getContext('2d'); ctx.scale(d,d);
  return {ctx,w,h};
}

function initSimulations () { hwSim(); driftSim(); }

/* Hardy-Weinberg */
function hwSim () {
  const canvas=document.getElementById('canvas-hw');
  if (!canvas) return;
  const slider=document.getElementById('hw-p');
  const valEl=document.getElementById('hw-p-val');
  if (!slider) return;
  canvas.style.height='280px';
  function draw () {
    const {ctx,w,h}=setupCanvas(canvas);
    const p=Number(slider.value)/100, q=1-p;
    if (valEl) valEl.textContent=p.toFixed(2);
    const pp=p*p, tpq=2*p*q, qq=q*q;
    ctx.fillStyle=C.bg; ctx.fillRect(0,0,w,h);
    ctx.strokeStyle=C.line; ctx.lineWidth=0.8;
    for (let i=0;i<=5;i++) {
      const y=h-50-(i/5)*(h-90);
      ctx.beginPath(); ctx.moveTo(60,y); ctx.lineTo(w-20,y); ctx.stroke();
      ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace';
      ctx.textAlign='right'; ctx.fillText((i*0.2).toFixed(1),55,y+4);
    }
    const bars=[
      {label:'p² (AA)',val:pp, color:C.teal,  glow:'rgba(100,255,218,0.25)'},
      {label:'2pq (Aa)',val:tpq,color:C.violet,glow:'rgba(167,139,250,0.25)'},
      {label:'q² (aa)',val:qq, color:C.rose,  glow:'rgba(255,110,199,0.25)'},
    ];
    const barW=Math.min(140,(w-120)/3-20);
    const gap=((w-120)-bars.length*barW)/(bars.length+1);
    const chartH=h-90, baseY=h-50;
    bars.forEach((bar,i)=>{
      const x=70+gap*(i+1)+barW*i, bh=bar.val*chartH, y=baseY-bh;
      const g=ctx.createLinearGradient(x,y,x,baseY);
      g.addColorStop(0,bar.color); g.addColorStop(1,bar.glow);
      ctx.shadowColor=bar.color; ctx.shadowBlur=18;
      ctx.fillStyle=g; ctx.beginPath(); ctx.roundRect(x,y,barW,bh,[6,6,0,0]); ctx.fill();
      ctx.shadowBlur=0; ctx.strokeStyle=bar.color; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.roundRect(x,y,barW,bh,[6,6,0,0]); ctx.stroke();
      ctx.fillStyle=bar.color; ctx.font='bold 13px JetBrains Mono,monospace';
      ctx.textAlign='center'; ctx.fillText(bar.val.toFixed(3),x+barW/2,Math.max(y-8,14));
      ctx.fillStyle=C.inkDim; ctx.font='11px JetBrains Mono,monospace';
      ctx.fillText(bar.label,x+barW/2,baseY+18);
    });
    ctx.fillStyle=C.ink; ctx.font='12px Fraunces,Georgia,serif'; ctx.textAlign='left';
    ctx.fillText(`p = ${p.toFixed(2)}   q = ${q.toFixed(2)}   (p+q=1)`,70,22);
    ctx.save(); ctx.translate(14,h/2); ctx.rotate(-Math.PI/2);
    ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace';
    ctx.textAlign='center'; ctx.fillText('Genotype Frequency',0,0); ctx.restore();
    ctx.fillStyle='rgba(100,255,218,0.45)'; ctx.font='10px JetBrains Mono,monospace';
    ctx.textAlign='right'; ctx.fillText(`p²+2pq+q²=${(pp+tpq+qq).toFixed(3)}`,w-22,22);
  }
  draw(); slider.addEventListener('input',draw);
  new ResizeObserver(draw).observe(canvas.parentElement||canvas);
}

/* Genetic Drift */
function driftSim () {
  const canvas=document.getElementById('canvas-drift');
  if (!canvas) return;
  const nSl=document.getElementById('drift-n');
  const p0Sl=document.getElementById('drift-p0');
  const nV=document.getElementById('drift-n-val');
  const p0V=document.getElementById('drift-p0-val');
  const runBtn=document.getElementById('drift-run');
  const resetBtn=document.getElementById('drift-reset');
  if (!nSl||!p0Sl) return;
  canvas.style.height='320px';
  const NUM_POPS=8, NUM_GEN=100;
  const COLS=[C.teal,C.violet,C.rose,C.gold,C.lime,C.sky,'#ff8a8a','rgba(255,255,255,0.55)'];
  let hist=[], af=null, cur=0, running=false;
  function binom(N,p){let s=0;for(let i=0;i<2*N;i++) if(Math.random()<p) s++;return s/(2*N);}
  function run(){
    const N=+nSl.value, p0=+p0Sl.value/100; hist=[];
    for(let pop=0;pop<NUM_POPS;pop++){
      const h=[p0];let p=p0;
      for(let g=1;g<=NUM_GEN;g++){if(p<=0){h.push(0);continue;}if(p>=1){h.push(1);continue;}p=binom(N,p);h.push(p);}
      hist.push(h);
    }
  }
  function drawFrame(up){
    const {ctx,w,h}=setupCanvas(canvas);
    const N=+nSl.value, p0=+p0Sl.value/100;
    ctx.fillStyle=C.bg; ctx.fillRect(0,0,w,h);
    const pL=65,pR=20,pT=30,pB=50,cW=w-pL-pR,cH=h-pT-pB;
    ctx.strokeStyle=C.line; ctx.lineWidth=0.8;
    [0,0.25,0.5,0.75,1].forEach(v=>{
      const y=pT+cH-v*cH; ctx.beginPath(); ctx.moveTo(pL,y); ctx.lineTo(w-pR,y); ctx.stroke();
      ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace'; ctx.textAlign='right';
      ctx.fillText(v.toFixed(2),pL-6,y+4);
    });
    ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace'; ctx.textAlign='center';
    [0,25,50,75,100].forEach(g=>ctx.fillText(g,pL+(g/NUM_GEN)*cW,h-pB+18));
    ctx.fillText('Generation',pL+cW/2,h-10);
    const p0y=pT+cH-p0*cH;
    ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=1.2; ctx.setLineDash([5,4]);
    ctx.beginPath(); ctx.moveTo(pL,p0y); ctx.lineTo(w-pR,p0y); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='rgba(100,255,218,0.04)'; ctx.fillRect(pL,pT,cW,14);
    ctx.fillStyle='rgba(255,110,199,0.04)'; ctx.fillRect(pL,pT+cH-14,cW,14);
    ctx.font='9px JetBrains Mono,monospace'; ctx.textAlign='right';
    ctx.fillStyle='rgba(100,255,218,0.5)'; ctx.fillText('FIXED (p=1)',w-pR-4,pT+11);
    ctx.fillStyle='rgba(255,110,199,0.5)'; ctx.fillText('LOST (p=0)',w-pR-4,pT+cH-4);
    hist.forEach((hh,pi)=>{
      const col=COLS[pi%COLS.length];
      ctx.strokeStyle=col; ctx.lineWidth=1.8; ctx.shadowColor=col; ctx.shadowBlur=5;
      ctx.beginPath();
      const lim=Math.min(up+1,hh.length);
      for(let g=0;g<lim;g++){const x=pL+(g/NUM_GEN)*cW,y=pT+cH-hh[g]*cH;g===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
      ctx.stroke(); ctx.shadowBlur=0;
      if(lim>1){const ge=lim-1,x=pL+(ge/NUM_GEN)*cW,y=pT+cH-hh[ge]*cH;ctx.fillStyle=col;ctx.beginPath();ctx.arc(x,y,3.5,0,Math.PI*2);ctx.fill();}
    });
    ctx.shadowBlur=0; ctx.fillStyle=C.ink; ctx.font='11px Fraunces,Georgia,serif'; ctx.textAlign='left';
    ctx.fillText(`N=${N}   p₀=${p0.toFixed(2)}   ${NUM_POPS} populations`,pL,22);
    if(up>=NUM_GEN&&hist.length){
      const fx=hist.filter(h=>h[NUM_GEN]>=1).length, lo=hist.filter(h=>h[NUM_GEN]<=0).length;
      ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace'; ctx.textAlign='right';
      ctx.fillText(`Fixed:${fx}  Lost:${lo}  Poly:${NUM_POPS-fx-lo}`,w-pR,22);
    }
  }
  function anim(){if(cur>NUM_GEN){running=false;return;}drawFrame(cur);cur++;af=requestAnimationFrame(anim);}
  function start(){if(running)return;cancelAnimationFrame(af);run();cur=0;running=true;anim();}
  function reset(){
    cancelAnimationFrame(af);running=false;hist=[];cur=0;
    const {ctx,w,h}=setupCanvas(canvas);
    ctx.fillStyle=C.bg; ctx.fillRect(0,0,w,h);
    ctx.fillStyle=C.inkDim; ctx.font='13px JetBrains Mono,monospace'; ctx.textAlign='center';
    ctx.fillText('Press ▶ Run to begin',w/2,h/2);
  }
  nSl.addEventListener('input',()=>{if(nV) nV.textContent=nSl.value;});
  p0Sl.addEventListener('input',()=>{if(p0V) p0V.textContent=(+p0Sl.value/100).toFixed(2);});
  if(runBtn) runBtn.addEventListener('click',start);
  if(resetBtn) resetBtn.addEventListener('click',reset);
  reset();
  new ResizeObserver(()=>{if(!running&&cur===0) reset();}).observe(canvas.parentElement||canvas);
}

/* ── SELECTION VISUALIZER ──────────────────────────────────────────── */
function initSelectionViz () {
  const canvas = document.getElementById('canvas-selection');
  if (!canvas) return;
  canvas.style.height = '380px';
  let current = 'directional';

  const types = {
    directional: {
      color: C.teal, label: 'Directional',
      before: {mu:0, sigma:1},
      after:  {mu:1.4, sigma:0.9},
      arrow: 'right',
      example: 'Antibiotic resistance — bacteria with resistance gene survive and reproduce → allele frequency shifts.',
      effect: '↓ genetic diversity — one extreme favored'
    },
    stabilizing: {
      color: C.violet, label: 'Stabilizing',
      before: {mu:0, sigma:1.2},
      after:  {mu:0, sigma:0.55},
      arrow: 'in',
      example: 'Human birth weight — very small OR very large babies have lower survival; intermediate size is optimal.',
      effect: '↓ genetic diversity — intermediate favored'
    },
    balancing: {
      color: C.gold, label: 'Balancing',
      before: {mu:0, sigma:1},
      after:  {mu:0, sigma:1.3, bimodal:true, sep:1.4},
      arrow: 'both',
      example: 'Sickle-cell anemia — HbA/HbS heterozygotes are protected from malaria (heterozygote advantage).',
      effect: '↑ genetic diversity — multiple alleles maintained'
    },
    disruptive: {
      color: C.rose, label: 'Disruptive',
      before: {mu:0, sigma:1},
      after:  {mu:0, sigma:1, bimodal:true, sep:2.2, dip:true},
      arrow: 'out',
      example: 'Beak size in seed-cracker finches (Pyrenestes) — large beaks crack hard seeds, small beaks crack soft seeds; intermediates starve.',
      effect: '↑ genetic diversity — both extremes favored'
    },
  };

  function gaussian(x, mu, sigma) {
    return Math.exp(-0.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI));
  }

  function drawCurve(ctx, mu, sigma, chartH, padL, padT, cW, color, alpha, scale) {
    const pts=120;
    ctx.beginPath();
    ctx.strokeStyle=color; ctx.lineWidth=2.5; ctx.globalAlpha=alpha;
    ctx.shadowColor=color; ctx.shadowBlur=10;
    for(let i=0;i<=pts;i++){
      const x=-4+i*8/pts;
      const y=gaussian(x,mu,sigma);
      const cx=padL+(x+4)*cW/8;
      const cy=padT+chartH-(y/(1/(sigma*Math.sqrt(2*Math.PI))))*chartH*scale;
      i===0?ctx.moveTo(cx,cy):ctx.lineTo(cx,cy);
    }
    ctx.stroke();
    ctx.globalAlpha=1; ctx.shadowBlur=0;
  }

  function draw(type) {
    const {ctx,w,h}=setupCanvas(canvas);
    const info=types[type];
    ctx.fillStyle=C.bg; ctx.fillRect(0,0,w,h);
    const padL=50,padR=20,padT=20,padB=60,cW=w-padL-padR,chartH=h-padT-padB;

    // Axes
    ctx.strokeStyle=C.line; ctx.lineWidth=0.8;
    ctx.beginPath(); ctx.moveTo(padL,padT+chartH); ctx.lineTo(w-padR,padT+chartH); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(padL,padT); ctx.lineTo(padL,padT+chartH); ctx.stroke();
    ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace';
    ctx.textAlign='center'; ctx.fillText('Phenotype Value',padL+cW/2,h-12);
    ctx.save(); ctx.translate(14,padT+chartH/2); ctx.rotate(-Math.PI/2);
    ctx.fillText('Frequency',0,0); ctx.restore();

    const b=info.before, a=info.after;
    const maxY=1/(b.sigma*Math.sqrt(2*Math.PI));

    // Before curve (ghost)
    drawCurve(ctx,b.mu,b.sigma,chartH,padL,padT,cW,'rgba(255,255,255,0.25)',0.5,0.82/maxY);

    // After curve
    if(a.bimodal){
      drawCurve(ctx,-a.sep/2,a.sigma,chartH,padL,padT,cW,info.color,0.9,0.82/maxY);
      drawCurve(ctx, a.sep/2,a.sigma,chartH,padL,padT,cW,info.color,0.9,0.82/maxY);
    } else {
      drawCurve(ctx,a.mu,a.sigma,chartH,padL,padT,cW,info.color,0.9,0.82/maxY);
    }

    // Arrow / shading indicator
    const baseY=padT+chartH;
    if(a.arrow==='right'||a.arrow==='out'||type==='directional') {
      // Shading on right
      ctx.fillStyle='rgba(100,255,218,0.08)';
      const fx=padL+(4.5+4)*cW/8-20;
      ctx.fillRect(fx,padT,w-padR-fx,chartH);
    }

    // Labels
    ctx.fillStyle=info.color;
    ctx.font='bold 14px Fraunces,Georgia,serif';
    ctx.textAlign='center'; ctx.fillText(info.label+' Selection',padL+cW/2,padT+16);
    ctx.fillStyle=C.inkDim; ctx.font='10px JetBrains Mono,monospace';
    ctx.fillText('— before   ─── after',padL+cW/2,padT+30);

    // Effect badge
    ctx.fillStyle=info.color+'88';
    const eff=info.effect;
    ctx.font='10px JetBrains Mono,monospace'; ctx.textAlign='right';
    ctx.fillText(eff,w-padR,h-6);
  }

  // Info div
  const infoDiv=document.getElementById('sel-info');
  function setType(type) {
    current=type;
    draw(type);
    if(infoDiv){
      const info=types[type];
      infoDiv.innerHTML=`<strong style="color:${info.color}">${info.label}</strong> — ${info.example}`;
    }
    document.querySelectorAll('.sel-btn').forEach(b=>b.classList.toggle('active',b.dataset.sel===type));
    document.querySelectorAll('.sel-btn').forEach(b=>{
      b.classList.remove('directional','stabilizing','balancing','disruptive');
      if(b.classList.contains('active')) b.classList.add(type);
    });
  }
  document.querySelectorAll('.sel-btn').forEach(b=>{
    b.addEventListener('click',()=>setType(b.dataset.sel));
  });
  setType('directional');
  new ResizeObserver(()=>draw(current)).observe(canvas.parentElement||canvas);
}

/* ── BICOID GRADIENT INTERACTIVE ───────────────────────────────────── */
function initBicoidSim () {
  const canvas = document.getElementById('canvas-bicoid');
  if (!canvas) return;
  const diffSlider = document.getElementById('bicoid-diffusion');
  const posSlider  = document.getElementById('bicoid-pos');
  const posLabel   = document.getElementById('bicoid-pos-label');
  const diffLabel  = document.getElementById('bicoid-diffusion-val');
  const readout    = document.getElementById('bicoid-readout');
  canvas.style.height = '340px';

  // Gap gene zones: [name, minConc, maxConc, color, description]
  const GENES = [
    { name:'hunchback (hb)', min:0.55, max:1.0,  color:C.gold,   region:'~0–45% from anterior', role:'Head + thorax identity · activated by HIGH [Bcd]' },
    { name:'Krüppel (Kr)',   min:0.25, max:0.55, color:C.violet, region:'~45–60% (mid-embryo)',  role:'Middle thorax/abdomen · repressed by VERY HIGH [Bcd]' },
    { name:'knirps (kni)',   min:0.08, max:0.25, color:C.rose,   region:'~60–75% from anterior', role:'Posterior abdomen · activated by LOW [Bcd]' },
    { name:'giant (gt)',     min:0.0,  max:0.08, color:'#7dd3fc', region:'~75–100% (far posterior)', role:'Terminal abdomen · [Bcd] essentially zero' },
  ];

  function getBcd(xFrac, k) {
    return Math.exp(-xFrac * 3.8 / k) * 0.98;
  }

  function getActiveGene(conc) {
    return GENES.find(g => conc >= g.min && conc <= g.max) || null;
  }

  function draw() {
    const {ctx, w, h} = setupCanvas(canvas);
    const k = diffSlider ? Number(diffSlider.value) / 100 : 0.5;
    const posFrac = posSlider ? Number(posSlider.value) / 100 : 0.5;

    ctx.fillStyle = 'rgba(8,11,26,0.95)';
    ctx.fillRect(0, 0, w, h);

    const padL = 72, padR = 28, padT = 28, padB = 100;
    const embryoH = 90;
    const plotT = padT + embryoH + 30;
    const plotH = h - plotT - padB;
    const cW = w - padL - padR;

    // ── Embryo silhouette (elongated oval) ──────────────────────────
    const eY = padT + embryoH / 2;
    const eRx = cW / 2, eRy = embryoH / 2;
    const eCx = padL + cW / 2;

    // Gradient wash over embryo showing Bcd concentration
    const embryoGrad = ctx.createLinearGradient(padL, 0, padL + cW, 0);
    embryoGrad.addColorStop(0,   'rgba(100,255,218,0.55)');
    embryoGrad.addColorStop(0.35,'rgba(100,255,218,0.25)');
    embryoGrad.addColorStop(0.6, 'rgba(100,255,218,0.06)');
    embryoGrad.addColorStop(1,   'rgba(100,255,218,0.01)');

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(eCx, eY, eRx, eRy, 0, 0, Math.PI * 2);
    ctx.fillStyle = embryoGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();

    // Gene expression color bands overlaid on embryo
    GENES.forEach(gene => {
      // Find x-range where this gene is expressed
      let x1 = padL + cW, x2 = padL;
      for (let i = 0; i <= 200; i++) {
        const xf = i / 200;
        const c = getBcd(xf, k);
        if (c >= gene.min && c <= gene.max) {
          const px = padL + xf * cW;
          if (px < x1) x1 = px;
          if (px > x2) x2 = px;
        }
      }
      if (x2 > x1) {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(eCx, eY, eRx, eRy, 0, 0, Math.PI * 2);
        ctx.clip();
        const col = gene.color.replace('#','');
        const r = parseInt(col.slice(0,2),16), g2 = parseInt(col.slice(2,4),16), b2 = parseInt(col.slice(4,6),16);
        ctx.fillStyle = `rgba(${r},${g2},${b2},0.22)`;
        ctx.fillRect(x1, padT, x2 - x1, embryoH);
        ctx.restore();
        // Label band on top of embryo
        const mx = (x1 + x2) / 2;
        ctx.fillStyle = gene.color;
        ctx.font = 'bold 9px JetBrains Mono,monospace';
        ctx.textAlign = 'center';
        ctx.shadowColor = gene.color; ctx.shadowBlur = 6;
        ctx.fillText(gene.name, mx, padT + embryoH / 2 + 4);
        ctx.shadowBlur = 0;
      }
    });

    // Axis labels on embryo
    ctx.font = 'bold 10px JetBrains Mono,monospace'; ctx.textAlign = 'left';
    ctx.fillStyle = C.teal; ctx.shadowColor = C.teal; ctx.shadowBlur = 8;
    ctx.fillText('ANTERIOR', padL, padT - 8);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(100,255,218,0.4)'; ctx.textAlign = 'right';
    ctx.fillText('POSTERIOR', padL + cW, padT - 8);

    // mRNA anchors
    ctx.fillStyle = C.teal; ctx.font = '8px JetBrains Mono,monospace'; ctx.textAlign = 'center';
    ctx.fillText('⬆ bicoid mRNA', padL + 24, padT + embryoH + 10);
    ctx.fillStyle = 'rgba(255,110,199,0.7)';
    ctx.fillText('nanos mRNA ⬆', padL + cW - 24, padT + embryoH + 10);

    // ── Gradient curve plot ──────────────────────────────────────────
    // Background fill under curve
    const pts = 200;
    ctx.beginPath();
    ctx.moveTo(padL, plotT + plotH);
    for (let i = 0; i <= pts; i++) {
      const xf = i / pts;
      const conc = getBcd(xf, k);
      const px = padL + xf * cW;
      const py = plotT + plotH - conc * plotH;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.lineTo(padL + cW, plotT + plotH);
    ctx.closePath();
    const fillGrad = ctx.createLinearGradient(padL, 0, padL + cW, 0);
    fillGrad.addColorStop(0,   'rgba(100,255,218,0.22)');
    fillGrad.addColorStop(0.5, 'rgba(100,255,218,0.08)');
    fillGrad.addColorStop(1,   'rgba(100,255,218,0.01)');
    ctx.fillStyle = fillGrad;
    ctx.fill();

    // Curve stroke
    ctx.beginPath();
    ctx.strokeStyle = C.teal; ctx.lineWidth = 2.5;
    ctx.shadowColor = C.teal; ctx.shadowBlur = 10;
    for (let i = 0; i <= pts; i++) {
      const xf = i / pts;
      const conc = getBcd(xf, k);
      const px = padL + xf * cW;
      const py = plotT + plotH - conc * plotH;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke(); ctx.shadowBlur = 0;

    // Threshold lines for each gene boundary
    const boundaries = [
      { conc: 0.55, label: 'hb ON threshold',  color: C.gold   },
      { conc: 0.25, label: 'Kr ON threshold',  color: C.violet },
      { conc: 0.08, label: 'kni ON threshold', color: C.rose   },
    ];
    boundaries.forEach(b => {
      const y = plotT + plotH - b.conc * plotH;
      ctx.strokeStyle = b.color + '66'; ctx.lineWidth = 1; ctx.setLineDash([5, 3]);
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + cW, y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = b.color; ctx.font = '8px JetBrains Mono,monospace'; ctx.textAlign = 'left';
      ctx.fillText(b.label, padL + 4, y - 3);
    });

    // Position cursor (vertical line at selected position)
    const cursorX = padL + posFrac * cW;
    const cursorConc = getBcd(posFrac, k);
    const activeGene = getActiveGene(cursorConc);
    const cursorColor = activeGene ? activeGene.color : 'rgba(255,255,255,0.4)';

    ctx.strokeStyle = cursorColor; ctx.lineWidth = 2;
    ctx.shadowColor = cursorColor; ctx.shadowBlur = 12;
    ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(cursorX, padT); ctx.lineTo(cursorX, plotT + plotH + 10); ctx.stroke();
    ctx.shadowBlur = 0;

    // Dot on curve at cursor position
    const dotY = plotT + plotH - cursorConc * plotH;
    ctx.beginPath(); ctx.arc(cursorX, dotY, 6, 0, Math.PI * 2);
    ctx.fillStyle = cursorColor; ctx.shadowColor = cursorColor; ctx.shadowBlur = 16;
    ctx.fill(); ctx.shadowBlur = 0;

    // Also mark position on embryo
    ctx.save();
    ctx.beginPath(); ctx.ellipse(eCx, eY, eRx, eRy, 0, 0, Math.PI * 2); ctx.clip();
    ctx.strokeStyle = cursorColor; ctx.lineWidth = 2.5; ctx.shadowColor = cursorColor; ctx.shadowBlur = 10;
    ctx.beginPath(); ctx.moveTo(cursorX, padT); ctx.lineTo(cursorX, padT + embryoH); ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, plotT); ctx.lineTo(padL, plotT + plotH); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(padL, plotT + plotH); ctx.lineTo(padL + cW, plotT + plotH); ctx.stroke();

    // Y-axis ticks
    [0, 0.25, 0.5, 0.75, 1].forEach(v => {
      const y = plotT + plotH - v * plotH;
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + cW, y); ctx.stroke();
      ctx.fillStyle = C.inkDim; ctx.font = '9px JetBrains Mono,monospace'; ctx.textAlign = 'right';
      ctx.fillText(v.toFixed(2), padL - 6, y + 3);
    });

    ctx.save(); ctx.translate(14, plotT + plotH / 2); ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = C.inkDim; ctx.font = '9px JetBrains Mono,monospace'; ctx.textAlign = 'center';
    ctx.fillText('[Bicoid] concentration', 0, 0); ctx.restore();
    ctx.fillStyle = C.inkDim; ctx.font = '9px JetBrains Mono,monospace'; ctx.textAlign = 'center';
    ctx.fillText('← Anterior · Position along A-P axis · Posterior →', padL + cW / 2, plotT + plotH + 20);

    // Readout
    if (readout) {
      const pct = Math.round(posFrac * 100);
      const concPct = Math.round(cursorConc * 100);
      if (activeGene) {
        readout.innerHTML =
          `<strong style="color:${activeGene.color}">At ${pct}% from anterior</strong> — [Bcd] = ${concPct}% max<br>` +
          `Active gap gene: <strong style="color:${activeGene.color}">${activeGene.name}</strong><br>` +
          `Region: ${activeGene.region}<br>` +
          `Function: ${activeGene.role}`;
      } else {
        readout.innerHTML = `At ${pct}% from anterior — [Bcd] = ${concPct}% max. No major gap gene active at this concentration.`;
      }
    }
    if (posLabel) posLabel.textContent = `${Math.round(posFrac * 100)}% from anterior`;
    const rates = ['slow','slow-medium','medium','medium-fast','fast'];
    const ri = Math.round((Number(diffSlider?.value||50) - 20) / 70 * 4);
    if (diffLabel) diffLabel.textContent = rates[Math.max(0,Math.min(4,ri))];
  }

  draw();
  if (diffSlider) diffSlider.addEventListener('input', draw);
  if (posSlider)  posSlider.addEventListener('input', draw);
  new ResizeObserver(draw).observe(canvas.parentElement || canvas);
}

/* ── GEOLOGICAL TIMELINE ───────────────────────────────────────────── */
function initTimeline () {
  const canvas = document.getElementById('canvas-timeline');
  if (!canvas) return;

  const EVENTS = [
    { mya: 4600, label: 'Earth forms',            color: '#ffd166', y: 0.18 },
    { mya: 3800, label: 'First life',              color: '#ffd166', y: 0.35 },
    { mya: 2700, label: 'Cyanobacteria / O₂',     color: '#64ffda', y: 0.18 },
    { mya: 1500, label: 'First eukaryotes',        color: '#64ffda', y: 0.52 },
    { mya:  600, label: 'Ediacaran animals',       color: '#64ffda', y: 0.18 },
    { mya:  540, label: 'Cambrian Explosion',      color: '#64ffda', y: 0.68 },
    { mya:  530, label: 'First vertebrates',       color: '#a78bfa', y: 0.35 },
    { mya:  450, label: 'Ordovician extinction',   color: '#ff6ec7', y: 0.52 },
    { mya:  375, label: 'First tetrapods',         color: '#a78bfa', y: 0.18 },
    { mya:  310, label: 'First amniotes',          color: '#a78bfa', y: 0.68 },
    { mya:  250, label: 'P-T extinction',          color: '#ff6ec7', y: 0.35 },
    { mya:  225, label: 'Dinosaurs & mammals',     color: '#a78bfa', y: 0.52 },
    { mya:  150, label: 'Archaeopteryx',           color: '#a78bfa', y: 0.18 },
    { mya:   66, label: 'K-Pg extinction',         color: '#ff6ec7', y: 0.68 },
    { mya:  0.3, label: 'Homo sapiens',            color: '#a78bfa', y: 0.35 },
  ];

  const EONS = [
    { start: 4600, end: 4000, label: 'Hadean',     color: 'rgba(255,100,80,0.18)' },
    { start: 4000, end: 2500, label: 'Archean',    color: 'rgba(255,160,60,0.15)' },
    { start: 2500, end:  541, label: 'Proterozoic',color: 'rgba(100,200,120,0.12)' },
    { start:  541, end:    0, label: 'Phanerozoic', color: 'rgba(100,180,255,0.12)' },
  ];

  function draw () {
    const { ctx, w, h } = setupCanvas(canvas);
    const pL = 10, pR = 10, pT = 38, pB = 34;
    const cW = w - pL - pR, cH = h - pT - pB;
    const MAX_MYA = 4600;

    function xOf (mya) { return pL + (mya / MAX_MYA) * cW; }

    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, w, h);

    // Eon bands
    EONS.forEach(e => {
      const x1 = xOf(e.end), x2 = xOf(e.start);
      ctx.fillStyle = e.color;
      ctx.fillRect(x1, pT, x2 - x1, cH);
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(e.label, (x1 + x2) / 2, pT + 12);
    });

    // Axis line
    const axY = pT + cH;
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(pL, axY); ctx.lineTo(pL + cW, axY); ctx.stroke();

    // Tick marks & labels
    [4600, 4000, 3500, 3000, 2500, 2000, 1500, 1000, 500, 250, 100, 0].forEach(m => {
      const x = xOf(m);
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, axY); ctx.lineTo(x, axY + 6); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = '8px JetBrains Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(m === 0 ? 'Now' : m, x, axY + 16);
    });

    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '9px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('mya →', pL + cW / 2, axY + 28);

    // Events
    EVENTS.forEach(ev => {
      const x = xOf(ev.mya);
      const dotY = pT + cH * ev.y;

      // Vertical stem
      ctx.strokeStyle = ev.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.45;
      ctx.beginPath(); ctx.moveTo(x, axY); ctx.lineTo(x, dotY + 7); ctx.stroke();
      ctx.globalAlpha = 1;

      // Dot
      ctx.beginPath();
      ctx.arc(x, dotY, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = ev.color;
      ctx.shadowColor = ev.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label
      ctx.fillStyle = '#fff';
      ctx.font = `bold 9px Inter, sans-serif`;
      ctx.textAlign = 'center';
      const labelY = dotY - 10;
      ctx.fillText(ev.label, x, labelY);

      // mya sub-label
      ctx.fillStyle = ev.color;
      ctx.font = '8px JetBrains Mono, monospace';
      ctx.fillText(ev.mya + ' mya', x, labelY - 10);
    });
  }

  draw();
  new ResizeObserver(draw).observe(canvas.parentElement || canvas);
}
