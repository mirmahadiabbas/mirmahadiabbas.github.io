/* =========================================================================
   Mir Mahadi Abbas, portfolio.
   Three small jobs: reveal-on-scroll, top bar border on scroll,
   and active nav highlighting based on which section is in view.
   No dependencies. Plain ES, runs after DOMContentLoaded via `defer`.
   ========================================================================= */

(() => {
  'use strict';

  /* -----------------------------
     1. Reveal on scroll.
     Tag every section and entry with .reveal, then IntersectionObserver
     adds .is-visible once. Skipped entirely if the user prefers reduced motion.
     ----------------------------- */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const revealTargets = document.querySelectorAll(
    '.intro, .section, .entry, .achievement'
  );

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Nothing to animate. Make sure everything is visible.
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* -----------------------------
     2. Top bar border on scroll.
     The border only appears once the visitor has scrolled past the intro.
     ----------------------------- */
  const topbar = document.getElementById('topbar');
  const onScroll = () => {
    if (window.scrollY > 24) {
      topbar.classList.add('is-scrolled');
    } else {
      topbar.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case the page is reloaded mid-scroll

  /* -----------------------------
     3. Active nav highlighting.
     Watches each section, marks the corresponding nav link as active.
     Uses a viewport-centred root margin so the active section reflects
     what the visitor is actually reading, not what just touched the top edge.
     ----------------------------- */
  const navLinks = document.querySelectorAll('.topbar__nav a');
  const sections = ['work', 'education', 'achievements', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.dataset.nav === id);
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the centre of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Active when section sits in the middle band of the viewport.
        rootMargin: '-40% 0px -45% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => navObserver.observe(s));
  }
})();
