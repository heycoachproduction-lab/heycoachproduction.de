document.addEventListener('DOMContentLoaded', () => {

  // === SCROLL REVEAL ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // === NAV SCROLL ===
  const nav = document.querySelector('.nav');
  const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });

  // === HERO VIDEO PLAY/PAUSE ===
  const heroVideo  = document.getElementById('heroVideo');
  const toggleBtn  = document.getElementById('heroVideoToggle');
  if (heroVideo && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        toggleBtn.classList.remove('paused');
      } else {
        heroVideo.pause();
        toggleBtn.classList.add('paused');
      }
    });
  }

  // === MOBILE NAV ===
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }));

  // === STATS COUNTER ===
  // Note: .hero-stat-number uses hardcoded strings and is intentionally excluded.
  // Only .stat-number elements (in the stats-bar) are animated.
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const dur    = 1800;
      const step   = 16;
      const inc    = target / (dur / step);
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.textContent = prefix + Math.floor(cur) + suffix;
        if (cur >= target) clearInterval(timer);
      }, step);
      statObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number, .parallax-stat-number').forEach(el => statObs.observe(el));

  // === FAQ ACCORDION ===
  // Closes siblings within the same .faq-panel only (not across tabs).
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item      = btn.parentElement;
      const wasActive = item.classList.contains('active');
      (item.closest('.faq-panel') || item.closest('.faq-list'))
          ?.querySelectorAll('.faq-item')
          .forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });

  // === FAQ TABS ===
  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const panel = tab.dataset.panel;
      document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.faq-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(panel)?.classList.add('active');
    });
  });

  // === VIDEO TRAILER TOGGLE ===
  document.querySelectorAll('.video-wrapper').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const iframeWrap = wrap.querySelector('.video-iframe-wrap');
      const overlay    = wrap.querySelector('.video-overlay');
      if (!iframeWrap) return;
      iframeWrap.classList.add('active');
      if (overlay) overlay.style.display = 'none';
      const iframe = iframeWrap.querySelector('iframe');
      if (iframe && !iframe.src.includes('autoplay')) {
        iframe.src += '&autoplay=1';
      }
    });
  });

  // === REVIEWS CAROUSEL ===
  const reviewsTrack = document.getElementById('reviews-track');
  const reviewsPrev  = document.getElementById('reviews-prev');
  const reviewsNext  = document.getElementById('reviews-next');
  if (reviewsTrack && reviewsPrev && reviewsNext) {
    const getCardWidth = () => {
      const card = reviewsTrack.querySelector('.review-card');
      if (!card) return 360;
      return card.offsetWidth + parseInt(getComputedStyle(reviewsTrack).gap || '20');
    };
    reviewsPrev.addEventListener('click', () =>
      reviewsTrack.scrollBy({ left: -getCardWidth(), behavior: 'smooth' }));
    reviewsNext.addEventListener('click', () =>
      reviewsTrack.scrollBy({ left: getCardWidth(), behavior: 'smooth' }));
  }

});
