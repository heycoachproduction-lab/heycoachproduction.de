/* ============================================================
   Hey Coach — Unified mobile navigation (self-contained)
   One file, injected on every page. Namespaced .hcmm-* so no
   legacy CSS can override it. Adds a fixed top-right burger and
   a full-screen drawer that works identically site-wide.
   ============================================================ */
(function () {
  'use strict';
  if (window.__hcMenuLoaded) return;
  window.__hcMenuLoaded = true;

  // Same link set as the desktop homepage nav, absolute so it works from any page.
  var LINKS = [
    { label: 'Kurse',         href: 'index.html#kurse' },
    { label: 'Trainer',       href: 'index.html#trainer' },
    { label: 'Blog',          href: 'blog.html' },
    { label: 'Über uns',      href: 'index.html#ueber-uns' },
    { label: 'Bewertungen',   href: 'index.html#bewertungen' },
    { label: 'Partner werden',href: 'index.html#partner' },
    { label: 'FAQ',           href: 'index.html#faq' }
  ];
  var CTA = { label: 'Kurse entdecken', href: 'index.html#kurse' };

  var CSS = [
    '.hcmm-burger{position:fixed;top:14px;right:16px;z-index:100001;width:46px;height:46px;',
      'display:none;align-items:center;justify-content:center;flex-direction:column;gap:5px;',
      'background:rgba(6,8,26,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);',
      'border:1px solid rgba(255,255,255,.14);border-radius:12px;cursor:pointer;padding:0;}',
    '.hcmm-burger span{display:block;width:22px;height:2px;border-radius:2px;background:#fff;transition:transform .28s ease,opacity .2s ease;}',
    '.hcmm-burger.hcmm-open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.hcmm-burger.hcmm-open span:nth-child(2){opacity:0;}',
    '.hcmm-burger.hcmm-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',
    '.hcmm-drawer{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;',
      'align-items:center;justify-content:center;gap:6px;padding:88px 24px 40px;',
      'background:rgba(6,8,26,.985);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);',
      'opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;overflow-y:auto;-webkit-overflow-scrolling:touch;}',
    '.hcmm-drawer.hcmm-open{opacity:1;visibility:visible;}',
    '.hcmm-drawer a.hcmm-link{font-family:"Syne","Outfit",sans-serif;font-size:1.5rem;font-weight:600;',
      'color:#fff;text-decoration:none;letter-spacing:.01em;padding:.5rem 1rem;opacity:.92;transition:color .2s ease,opacity .2s ease;}',
    '.hcmm-drawer a.hcmm-link:hover,.hcmm-drawer a.hcmm-link:active{color:#D4A040;opacity:1;}',
    '.hcmm-drawer .hcmm-cta{margin-top:1.4rem;background:#B87C1A;color:#fff !important;',
      'font-family:"Syne",sans-serif;font-weight:700;font-size:1.05rem;letter-spacing:.03em;',
      'padding:.95rem 2.4rem;border-radius:12px;text-decoration:none;box-shadow:0 8px 30px rgba(184,124,26,.35);}',
    '.hcmm-drawer .hcmm-cta:hover{background:#D4A040;}',
    '.hcmm-drawer .hcmm-logo{position:absolute;top:24px;left:24px;height:34px;opacity:.9;}',
    'body.hcmm-lock{overflow:hidden !important;}',
    /* show our burger on mobile, hide every legacy burger so there is exactly one */
    '@media(max-width:860px){.hcmm-burger{display:flex;}.nav-hamburger,#navHamburger,#hamburger{display:none !important;}}',
    '@media(min-width:861px){.hcmm-burger,.hcmm-drawer{display:none !important;}}'
  ].join('');

  function build() {
    if (document.querySelector('.hcmm-burger')) return;

    var style = document.createElement('style');
    style.setAttribute('data-hcmm', '');
    style.textContent = CSS;
    document.head.appendChild(style);

    var burger = document.createElement('button');
    burger.className = 'hcmm-burger';
    burger.setAttribute('aria-label', 'Menü öffnen');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span><span></span><span></span>';

    var drawer = document.createElement('nav');
    drawer.className = 'hcmm-drawer';
    drawer.setAttribute('aria-label', 'Hauptmenü');
    var html = '<img class="hcmm-logo" src="images/logo-white.svg" alt="Hey Coach Production">';
    LINKS.forEach(function (l) {
      html += '<a class="hcmm-link" href="' + l.href + '">' + l.label + '</a>';
    });
    html += '<a class="hcmm-cta" href="' + CTA.href + '">' + CTA.label + '</a>';
    drawer.innerHTML = html;

    document.body.appendChild(burger);
    document.body.appendChild(drawer);

    function open() {
      drawer.classList.add('hcmm-open');
      burger.classList.add('hcmm-open');
      document.body.classList.add('hcmm-lock');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Menü schließen');
    }
    function close() {
      drawer.classList.remove('hcmm-open');
      burger.classList.remove('hcmm-open');
      document.body.classList.remove('hcmm-lock');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menü öffnen');
    }
    burger.addEventListener('click', function () {
      drawer.classList.contains('hcmm-open') ? close() : open();
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('hcmm-open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
