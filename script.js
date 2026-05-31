/* ============================================================
   Mir Mahadi Abbas — portfolio scripts
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: shadow on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 10) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      // small stagger for items in the same row
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.06) + 's';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Safety net: reveal anything near or above the viewport. Runs after load
  // and again whenever scrolling settles, so fast scrollers never hit a blank.
  function revealNearby() {
    reveals.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 150) el.classList.add('in');
    });
  }
  window.addEventListener('load', function () { setTimeout(revealNearby, 500); });
  var sttimer;
  window.addEventListener('scroll', function () {
    clearTimeout(sttimer);
    sttimer = setTimeout(revealNearby, 120);
  }, { passive: true });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImage');
  var lbCap = document.getElementById('lbCaption');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var lbDots = document.getElementById('lbDots');

  var gallery = [];
  var current = 0;
  var caption = '';
  var lastFocused = null;

  function renderDots() {
    lbDots.innerHTML = '';
    if (gallery.length < 2) return;
    gallery.forEach(function (_, i) {
      var d = document.createElement('span');
      if (i === current) d.classList.add('active');
      d.addEventListener('click', function () { show(i); });
      lbDots.appendChild(d);
    });
  }

  function show(i) {
    current = (i + gallery.length) % gallery.length;
    lbImg.src = gallery[current];
    lbImg.alt = caption + (gallery.length > 1 ? ' — image ' + (current + 1) + ' of ' + gallery.length : '');
    lbCap.textContent = caption;
    var multi = gallery.length > 1;
    lbPrev.classList.toggle('hidden', !multi);
    lbNext.classList.toggle('hidden', !multi);
    renderDots();
  }

  function openLightbox(images, title, trigger) {
    gallery = images.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    caption = title || '';
    if (!gallery.length) return;
    lastFocused = trigger || null;
    show(0);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  // Wire up all triggers (competition cards + certificate cards)
  document.querySelectorAll('[data-images]').forEach(function (el) {
    el.addEventListener('click', function () {
      openLightbox(el.getAttribute('data-images'), el.getAttribute('data-title'), el);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', function () { show(current - 1); });
  lbNext.addEventListener('click', function () { show(current + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft' && gallery.length > 1) show(current - 1);
    else if (e.key === 'ArrowRight' && gallery.length > 1) show(current + 1);
  });

  /* ---------- Light deterrent against casual image saving ----------
     NOTE: this is not real protection. Anyone can screenshot or use
     dev tools. It only blocks the most casual right-click / drag. */
  document.addEventListener('contextmenu', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });

})();
