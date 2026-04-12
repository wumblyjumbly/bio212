'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   BIO 212 · THE LIVING CODEX · interactions.js
   Progress bar, scroll reveal, tabs, accordions, Q&A toggles, active nav
═══════════════════════════════════════════════════════════════════════════ */

function initInteractions () {
  initProgressBar();
  initScrollReveal();
  initAccordions();
  initTabs();
  initQA();
  initActiveNav();
}

// ─── READING PROGRESS ────────────────────────────────────────────────────────
function initProgressBar () {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function initScrollReveal () {
  const opts = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, opts);
  document.querySelectorAll('.reveal, .reveal-item').forEach(el => io.observe(el));
}

// ─── ACCORDIONS ──────────────────────────────────────────────────────────────
function initAccordions () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // close siblings in same accordion
      const parent = btn.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-trigger.open').forEach(ob => {
          ob.classList.remove('open');
          ob.nextElementSibling.classList.remove('open');
        });
      }
      if (!isOpen) {
        btn.classList.add('open');
        body.classList.add('open');
      }
    });
  });
}

// ─── TABS ────────────────────────────────────────────────────────────────────
function initTabs () {
  document.querySelectorAll('.tab-list').forEach(list => {
    list.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabs = list.closest('.tabs');
        tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = tabs.querySelector('#' + btn.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });
  });
}

// ─── Q&A TOGGLES ─────────────────────────────────────────────────────────────
function initQA () {
  document.querySelectorAll('.qa-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.qa-item');
      const ans  = item.querySelector('.qa-a');
      const isOpen = q.classList.contains('open');
      // close all in same set
      const set = q.closest('.qa-set');
      if (set) {
        set.querySelectorAll('.qa-q.open').forEach(oq => {
          oq.classList.remove('open');
          oq.closest('.qa-item').querySelector('.qa-a').classList.remove('open');
        });
      }
      if (!isOpen) {
        q.classList.add('open');
        ans.classList.add('open');
      }
    });
  });
}

// ─── ACTIVE NAV ──────────────────────────────────────────────────────────────
function initActiveNav () {
  const sections = document.querySelectorAll('.module[id]');
  const navLinks = document.querySelectorAll('.topnav a[href^="#"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.topnav a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.25 });
  sections.forEach(s => io.observe(s));
}
