/* ============================================================
   Hey Coach — Unified mobile navigation (self-contained)
   One file, injected on every page. Namespaced .hcmm-* so no
   legacy CSS can override it.
   02.10.2026: auf dem Handy ein einheitlicher Header auf allen Seiten
   (64 px, Navy, Logo · Button · Menü auf einer Linie), Menü klappt
   unter dem Header auf, mit Schnellzugriff auf die Hauptkurse.
   ============================================================ */
(function () {
  'use strict';
  if (window.__hcMenuLoaded) return;
  window.__hcMenuLoaded = true;

  var MOBILE = 860;          // gleiche Grenze wie bisher
  var BTN = 44;              // Burger = Tap-Ziel 44 × 44
  var GUTTER = 20;           // Seitenrand links/rechts auf dem Handy

  // Same link set as the desktop homepage nav, absolute so it works from any page.
  var LINKS = [
    { label: 'Trainer',       href: 'index.html#trainer' },
    { label: 'Blog',          href: 'blog.html' },
    { label: 'Über uns',      href: 'ueber-uns.html' },
    { label: 'Bewertungen',   href: 'index.html#bewertungen' },
    { label: 'Partner werden',href: 'index.html#partner' },
    { label: 'FAQ',           href: 'index.html#faq' }
  ];
  // Schnellzugriff «Unsere Kurse» (kein «Beliebte» — unbelegte Behauptung, UWG): die Kurse, die man heute kaufen kann (ohne Preise — die stehen mit MwSt.-Hinweis auf den Kursseiten)
  var COURSES = [
    { label: 'Kickboxen Komplettkurs', sub: 'alle 7 Gürtel',      href: 'kurs-kickboxen-v2.html' },
    { label: 'Muay Thai Komplettkurs', sub: 'mit Marlon',          href: 'kurs-muay-thai.html' },
    { label: 'Physio-Training',        sub: 'mit Elsa',            href: 'trainer-elsa.html' },
    { label: '7-Tage-FitStart',        sub: 'der Einstieg',        href: 'kurs-fitstart.html' }
  ];
  var ALL = { label: 'Alle Kurse', href: 'kurse.html' };
  var CTA = { label: 'Kurse entdecken', href: 'index.html#kurse' };
  var MAIL = 'heycoachproduction@gmail.com';

  var NAVY = '6,8,26';
  var CSS = [
    /* --- Burger --- */
    '.hcmm-burger{position:fixed;top:10px;right:' + GUTTER + 'px;z-index:100001;width:' + BTN + 'px;height:' + BTN + 'px;',
      'display:none;align-items:center;justify-content:center;flex-direction:column;gap:5px;padding:0;margin:0;cursor:pointer;',
      'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;',
      '-webkit-tap-highlight-color:transparent;transition:background .2s ease,border-color .2s ease;}',
    '.hcmm-burger:active{background:rgba(255,255,255,.12);}',
    '.hcmm-burger:focus-visible{outline:2px solid #D4A040;outline-offset:2px;}',
    '.hcmm-burger span{display:block;width:20px;height:2px;border-radius:2px;background:#fff;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .2s ease;}',
    '.hcmm-burger.hcmm-open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.hcmm-burger.hcmm-open span:nth-child(2){opacity:0;}',
    '.hcmm-burger.hcmm-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

    /* --- Drawer: klappt UNTER dem Header auf (Logo bleibt stehen, kein Doppel-Logo) --- */
    '.hcmm-drawer{position:fixed;left:0;right:0;bottom:0;top:var(--hcmm-top,64px);z-index:100000;',
      'display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;text-align:left;gap:0;margin:0;height:auto;width:auto;box-sizing:border-box;padding:16px ' + GUTTER + 'px calc(28px + env(safe-area-inset-bottom,0px));',
      'background:rgb(' + NAVY + ');overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;',
      'opacity:0;visibility:hidden;transform:translateY(-8px);',
      'transition:opacity .26s cubic-bezier(.2,.8,.2,1),transform .26s cubic-bezier(.2,.8,.2,1),visibility .26s;}',
    '.hcmm-drawer.hcmm-open{opacity:1;visibility:visible;transform:none;}',
    '.hcmm-drawer .hcmm-logo{display:none;}',
    '.hcmm-drawer.hcmm-nonav .hcmm-logo{display:block;height:40px;width:auto;margin:4px 0 18px;}',
    '.hcmm-drawer a{-webkit-tap-highlight-color:transparent;}',
    '.hcmm-drawer a:focus-visible{outline:2px solid #D4A040;outline-offset:3px;border-radius:8px;}',
    '.hcmm-label{font-family:"Outfit",sans-serif;font-size:.75rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.45);margin:0 0 10px;}',
    /* Kurse-Kacheln 2 × 2 */
    '.hcmm-courses{display:grid;grid-template-columns:1fr 1fr;gap:10px;}',
    '.hcmm-course{display:flex;flex-direction:column;justify-content:space-between;gap:4px;min-height:64px;padding:11px 14px;border-radius:14px;',
      'background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);text-decoration:none;transition:background .2s ease,border-color .2s ease;}',
    '.hcmm-course:active,.hcmm-course:hover{background:rgba(212,160,64,.10);border-color:rgba(212,160,64,.45);}',
    '.hcmm-course b{font-family:"Outfit",sans-serif;font-weight:600;font-size:.95rem;line-height:1.25;color:#fff;}',
    '.hcmm-course span{font-family:"Outfit",sans-serif;font-size:.78rem;color:rgba(255,255,255,.55);}',
    '.hcmm-all{display:flex;align-items:center;justify-content:space-between;min-height:46px;margin:10px 0 16px;padding:0 16px;border-radius:12px;',
      'border:1px solid rgba(212,160,64,.55);color:#D4A040;font-family:"Outfit",sans-serif;font-weight:600;font-size:.95rem;text-decoration:none;}',
    '.hcmm-all:active,.hcmm-all:hover{background:rgba(212,160,64,.10);}',
    /* Seiten-Links als Liste mit Haarlinien */
    '.hcmm-links{display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.08);}',
    '.hcmm-link{display:flex;align-items:center;justify-content:space-between;min-height:50px;border-bottom:1px solid rgba(255,255,255,.08);',
      'font-family:"Syne","Outfit",sans-serif;font-size:1.12rem;font-weight:600;letter-spacing:.01em;color:#fff;text-decoration:none;transition:color .2s ease;}',
    '.hcmm-link::after{content:"";width:8px;height:8px;border-right:1.6px solid rgba(255,255,255,.35);border-top:1.6px solid rgba(255,255,255,.35);transform:rotate(45deg);margin-right:4px;transition:border-color .2s ease;}',
    '.hcmm-link:active,.hcmm-link:hover,.hcmm-link[aria-current="page"]{color:#D4A040;}',
    '.hcmm-link:hover::after,.hcmm-link[aria-current="page"]::after{border-color:#D4A040;}',
    '.hcmm-cta{display:flex;align-items:center;justify-content:center;min-height:54px;margin-top:24px;border-radius:12px;background:#B87C1A;color:#fff !important;',
      'font-family:"Syne",sans-serif;font-weight:700;font-size:1rem;letter-spacing:.03em;text-decoration:none;box-shadow:0 10px 28px -8px rgba(184,124,26,.55);}',
    '.hcmm-cta:active,.hcmm-cta:hover{background:#D4A040;}',
    '.hcmm-mail{margin:16px 0 0;text-align:center;font-family:"Outfit",sans-serif;font-size:.82rem;color:rgba(255,255,255,.5);}',
    '.hcmm-mail a{color:rgba(255,255,255,.75);text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.25);}',
    'body.hcmm-lock{overflow:hidden !important;}',

    /* --- Handy: ein Header-Format auf allen Seiten --- */
    '@media(max-width:' + MOBILE + 'px){',
      '.hcmm-burger{display:flex;}',
      '.nav-hamburger,#navHamburger,#hamburger{display:none !important;}',
      '.hcmm-nav{height:64px !important;min-height:64px !important;padding-top:0 !important;padding-bottom:0 !important;box-sizing:border-box !important;',
        'display:flex !important;align-items:center !important;',
        'background:rgb(' + NAVY + ') !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;',
        'border-bottom:1px solid rgba(255,255,255,.07) !important;box-shadow:none;transition:box-shadow .35s ease !important;}',
      '.hcmm-nav.hcmm-raised{box-shadow:0 12px 30px -14px rgba(0,0,0,.75) !important;}',
      '.hcmm-nav.hcmm-menu-open{box-shadow:none !important;border-bottom-color:rgba(255,255,255,.10) !important;}',
      '.hcmm-row{width:100% !important;max-width:none !important;height:64px !important;margin:0 !important;box-sizing:border-box !important;',
        'display:flex !important;align-items:center !important;padding:0 ' + (GUTTER + BTN + 10) + 'px 0 ' + GUTTER + 'px !important;}',
      '.hcmm-nav .nav-logo img,.hcmm-nav .nav-logo-link img{height:44px !important;width:auto !important;}',
      '.hcmm-nav .nav-logo{display:flex !important;align-items:center;margin:0 !important;}',
      /* Buttons im Header gleich hoch wie der Burger */
      '.hcmm-nav .nav-kurse-m,.hcmm-nav .btn-nav{min-height:' + BTN + 'px !important;box-sizing:border-box;display:inline-flex !important;align-items:center;justify-content:center;',
        'padding:0 16px !important;border-radius:12px !important;margin:0 0 0 auto !important;line-height:1;}',
      '.hcmm-nav .nav-links{display:none !important;}',  // Tablet 769–860 px: sonst Desktop-Links UND Burger gleichzeitig
      '.hcmm-nav .nav-right{margin-left:auto;}',
      '.hcmm-nav .nav-right .btn-nav{margin-left:0 !important;}',
      '.hcmm-nav .nav-back{padding-top:12px !important;padding-bottom:12px !important;}',
    '}',
    '@media(min-width:' + (MOBILE + 1) + 'px){.hcmm-burger,.hcmm-drawer{display:none !important;}',
      /* Desktop: oben über dem Video bleibt alles wie bisher; beim Scrollen solides Navy statt schwarz-transparent (kein Durchscheinen) */
      '.hcmm-nav.hcmm-raised{background:rgb(' + NAVY + ') !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;',
        'border-bottom:1px solid rgba(255,255,255,.07) !important;box-shadow:0 12px 30px -14px rgba(0,0,0,.75) !important;}',
    '}',
    '@media(prefers-reduced-motion:reduce){.hcmm-drawer,.hcmm-burger span{transition:none !important;}}'
  ].join('');

  /* Header der Seite finden: die fixierte/sticky Leiste ganz oben, die das Logo trägt */
  function findNav() {
    var cands = document.querySelectorAll('#mainNav, nav.nav, body > nav, header nav, body > header');
    for (var i = 0; i < cands.length; i++) {
      var n = cands[i];
      if (n.classList.contains('hcmm-drawer')) continue;
      var pos = getComputedStyle(n).position;
      if ((pos === 'fixed' || pos === 'sticky') && n.querySelector('img, .nav-logo')) return n;
    }
    return null;
  }

  function fileOf(href) {
    var p = (href || '').split('#')[0].split('?')[0];
    p = p.substring(p.lastIndexOf('/') + 1);
    return p || 'index.html';
  }

  function build() {
    if (document.querySelector('.hcmm-burger')) return;

    var style = document.createElement('style');
    style.setAttribute('data-hcmm', '');
    style.textContent = CSS;
    document.head.appendChild(style);

    var nav = findNav();
    if (nav) {
      nav.classList.add('hcmm-nav');
      var logo = nav.querySelector('.nav-logo, .nav-logo-link') || (nav.querySelector('img') || {}).parentElement;
      var row = logo && logo.parentElement;
      if (row) row.classList.add('hcmm-row');
    }

    var burger = document.createElement('button');
    burger.type = 'button';
    burger.className = 'hcmm-burger';
    burger.setAttribute('aria-label', 'Menü öffnen');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'hcmm-drawer');
    burger.innerHTML = '<span></span><span></span><span></span>';

    var here = fileOf(location.pathname);
    var drawer = document.createElement('div');   // kein <nav>: alte Seiten stylen «nav» global (Impressum, AGB …)
    drawer.className = 'hcmm-drawer' + (nav ? '' : ' hcmm-nonav');
    drawer.id = 'hcmm-drawer';
    drawer.setAttribute('role', 'navigation');
    drawer.setAttribute('aria-label', 'Hauptmenü');
    var html = '<img class="hcmm-logo" src="images/logo-white.svg" alt="Hey Coach Production">';
    html += '<p class="hcmm-label">Unsere Kurse</p><div class="hcmm-courses">';
    COURSES.forEach(function (c) {
      html += '<a class="hcmm-course" href="' + c.href + '"' + (fileOf(c.href) === here ? ' aria-current="page"' : '') + '><b>' + c.label + '</b><span>' + c.sub + '</span></a>';
    });
    html += '</div><a class="hcmm-all" href="' + ALL.href + '">' + ALL.label + '<span aria-hidden="true">›</span></a>';
    html += '<div class="hcmm-links">';
    LINKS.forEach(function (l) {
      var cur = l.href.indexOf('#') < 0 && fileOf(l.href) === here;
      html += '<a class="hcmm-link" href="' + l.href + '"' + (cur ? ' aria-current="page"' : '') + '>' + l.label + '</a>';
    });
    html += '</div><a class="hcmm-cta" href="' + CTA.href + '">' + CTA.label + '</a>';
    html += '<p class="hcmm-mail">Fragen? <a href="mailto:' + MAIL + '">' + MAIL + '</a></p>';
    drawer.innerHTML = html;

    document.body.appendChild(burger);
    document.body.appendChild(drawer);

    /* Burger exakt auf die Mittellinie des Headers setzen, Menü direkt darunter */
    var ticking = false;
    function place() {
      ticking = false;
      if (nav) nav.classList.toggle('hcmm-raised', (window.scrollY || window.pageYOffset) > 8);
      if (window.innerWidth > MOBILE) return;
      if (nav) {
        var r = nav.getBoundingClientRect();
        burger.style.top = Math.round(r.top + (r.height - BTN) / 2) + 'px';
        drawer.style.setProperty('--hcmm-top', Math.max(0, Math.round(r.bottom)) + 'px');
      } else {
        drawer.style.setProperty('--hcmm-top', '0px');
      }
    }
    function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(place); } }
    place();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    if (nav && window.ResizeObserver) new ResizeObserver(schedule).observe(nav);
    if (nav && window.MutationObserver) new MutationObserver(schedule).observe(nav, { attributes: true, attributeFilter: ['class', 'style'] });

    function open() {
      place();
      drawer.classList.add('hcmm-open');
      burger.classList.add('hcmm-open');
      if (nav) nav.classList.add('hcmm-menu-open');
      document.body.classList.add('hcmm-lock');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Menü schließen');
    }
    function close(keepFocus) {
      drawer.classList.remove('hcmm-open');
      burger.classList.remove('hcmm-open');
      if (nav) nav.classList.remove('hcmm-menu-open');
      document.body.classList.remove('hcmm-lock');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menü öffnen');
      if (keepFocus) burger.focus();
    }
    burger.addEventListener('click', function () {
      drawer.classList.contains('hcmm-open') ? close() : open();
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { close(); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('hcmm-open')) close(true);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > MOBILE && drawer.classList.contains('hcmm-open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
