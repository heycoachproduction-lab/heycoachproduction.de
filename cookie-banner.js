/**
 * DSGVO Cookie-Banner — Hey Coach Production GmbH
 * Self-contained: injects HTML + CSS on load.
 * Stores consent in localStorage.
 * Adds a "Cookie-Einstellungen" link to footer for re-opening.
 */
(function () {
  'use strict';

  /* ── CSS ── */
  var css = document.createElement('style');
  css.textContent =
    '.cb-overlay{position:fixed;inset:0;z-index:99998;background:rgba(6,8,26,.45);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);pointer-events:none}' +
    '.cb-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#0C1228;border-top:1px solid rgba(184,124,26,.25);padding:28px 24px;font-family:"Outfit",sans-serif;color:#B0B8D0;font-size:14px;line-height:1.65;box-shadow:0 -8px 40px rgba(0,0,0,.5)}' +
    '.cb-inner{max-width:1100px;margin:0 auto;display:flex;align-items:flex-start;gap:28px;flex-wrap:wrap}' +
    '.cb-text{flex:1;min-width:280px}' +
    '.cb-text h3{color:#fff;font-size:16px;font-weight:700;margin-bottom:8px}' +
    '.cb-text a{color:#D4A040;text-decoration:underline;text-underline-offset:2px}' +
    '.cb-text a:hover{color:#B87C1A}' +
    '.cb-buttons{display:flex;gap:12px;align-items:center;flex-shrink:0;flex-wrap:wrap}' +
    '.cb-btn{border:none;border-radius:10px;padding:12px 24px;font-family:"Outfit",sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s,opacity .2s;white-space:nowrap}' +
    '.cb-accept{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.18)}' +
    '.cb-accept:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.3)}' +
    '.cb-necessary{background:rgba(255,255,255,.08);color:#B0B8D0;border:1px solid rgba(255,255,255,.18)}' +
    '.cb-necessary:hover{background:rgba(255,255,255,.14);color:#fff;border-color:rgba(255,255,255,.3)}' +
    '@media(max-width:600px){.cb-inner{flex-direction:column;gap:16px}.cb-buttons{width:100%}.cb-btn{flex:1;text-align:center}}';
  document.head.appendChild(css);

  /* ── Banner HTML builder ── */
  function createBanner() {
    var overlay = document.createElement('div');
    overlay.className = 'cb-overlay';

    var banner = document.createElement('div');
    banner.className = 'cb-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie-Einstellungen');
    banner.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-text">' +
          '<h3>Cookie-Einstellungen</h3>' +
          '<p>Wir verwenden ausschlie\u00dflich technisch notwendige Cookies f\u00fcr den Betrieb dieser Website. ' +
          'Unser CDN-Anbieter Cloudflare (USA) verarbeitet deine IP-Adresse zur Auslieferung der Inhalte. ' +
          'Mehr erf\u00e4hrst du in unserer <a href="datenschutz.html">Datenschutzerkl\u00e4rung</a>.</p>' +
        '</div>' +
        '<div class="cb-buttons">' +
          '<button class="cb-btn cb-accept" data-cb="accept">Alle akzeptieren</button>' +
          '<button class="cb-btn cb-necessary" data-cb="necessary">Nur notwendige</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(banner);

    function closeConsent(level) {
      localStorage.setItem('hc_cookie_consent', level);
      localStorage.setItem('hc_cookie_date', new Date().toISOString());
      banner.remove();
      overlay.remove();
      applyConsent(level);
    }

    banner.querySelector('[data-cb="accept"]').addEventListener('click', function () {
      closeConsent('all');
    });

    banner.querySelector('[data-cb="necessary"]').addEventListener('click', function () {
      closeConsent('necessary');
    });
  }

  /* ── Apply consent: no external services to load (fonts self-hosted) ── */
  function applyConsent(level) {
    // All assets (fonts, images, scripts) are self-hosted.
    // Consent is recorded for transparency; no third-party loading triggered here.
  }

  /* ── Footer link: "Cookie-Einstellungen" ── */
  function addFooterLink() {
    var footers = document.querySelectorAll('footer');
    if (!footers.length) return;

    var footer = footers[footers.length - 1];
    // Find or create a footer-links container
    var linksContainer = footer.querySelector('.footer-links, .footer_links, p:last-child');

    var link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Cookie-Einstellungen';
    link.style.cssText = 'cursor:pointer;margin-left:10px;';
    link.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('hc_cookie_consent');
      localStorage.removeItem('hc_cookie_date');
      createBanner();
    });

    if (linksContainer) {
      // Add separator + link
      var sep = document.createTextNode(' \u00B7 ');
      linksContainer.appendChild(sep);
      linksContainer.appendChild(link);
    }
  }

  /* ── Init ── */
  if (!localStorage.getItem('hc_cookie_consent')) {
    createBanner();
  }
  addFooterLink();
})();
