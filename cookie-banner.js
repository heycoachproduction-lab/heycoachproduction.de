/**
 * DSGVO Cookie-Banner — Hey Coach Production GmbH
 * Self-contained: injects HTML + CSS on load.
 * Stores consent in localStorage.
 */
(function () {
  'use strict';
  if (localStorage.getItem('hc_cookie_consent')) return;

  /* ── CSS ── */
  var css = document.createElement('style');
  css.textContent =
    '.cb-overlay{position:fixed;inset:0;z-index:99998;background:rgba(6,8,26,.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}' +
    '.cb-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#0C1228;border-top:1px solid rgba(184,124,26,.25);padding:28px 24px;font-family:"Outfit",sans-serif;color:#B0B8D0;font-size:14px;line-height:1.65;box-shadow:0 -8px 40px rgba(0,0,0,.5)}' +
    '.cb-inner{max-width:1100px;margin:0 auto;display:flex;align-items:flex-start;gap:28px;flex-wrap:wrap}' +
    '.cb-text{flex:1;min-width:280px}' +
    '.cb-text h3{color:#fff;font-size:16px;font-weight:700;margin-bottom:8px}' +
    '.cb-text a{color:#D4A040;text-decoration:underline;text-underline-offset:2px}' +
    '.cb-text a:hover{color:#B87C1A}' +
    '.cb-buttons{display:flex;gap:12px;align-items:center;flex-shrink:0;flex-wrap:wrap}' +
    '.cb-btn{border:none;border-radius:10px;padding:12px 24px;font-family:"Outfit",sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s,opacity .2s;white-space:nowrap}' +
    '.cb-accept{background:#B87C1A;color:#fff}' +
    '.cb-accept:hover{background:#D4A040}' +
    '.cb-necessary{background:rgba(255,255,255,.08);color:#B0B8D0;border:1px solid rgba(255,255,255,.12)}' +
    '.cb-necessary:hover{background:rgba(255,255,255,.12);color:#fff}' +
    '@media(max-width:600px){.cb-inner{flex-direction:column;gap:16px}.cb-buttons{width:100%}.cb-btn{flex:1;text-align:center}}';
  document.head.appendChild(css);

  /* ── HTML ── */
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
        '<p>Wir verwenden Cookies und externe Dienste (z.&thinsp;B. Google Fonts), ' +
        'um dir die bestm\u00f6gliche Nutzererfahrung zu bieten. ' +
        'Einige davon sind technisch notwendig, andere helfen uns, unsere Website zu verbessern. ' +
        'Mehr erf\u00e4hrst du in unserer <a href="datenschutz.html">Datenschutzerkl\u00e4rung</a>.</p>' +
      '</div>' +
      '<div class="cb-buttons">' +
        '<button class="cb-btn cb-accept" id="cb-accept">Alle akzeptieren</button>' +
        '<button class="cb-btn cb-necessary" id="cb-necessary">Nur notwendige</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);
  document.body.appendChild(banner);

  /* ── Events ── */
  function closeConsent(level) {
    localStorage.setItem('hc_cookie_consent', level);
    localStorage.setItem('hc_cookie_date', new Date().toISOString());
    banner.remove();
    overlay.remove();
  }

  document.getElementById('cb-accept').addEventListener('click', function () {
    closeConsent('all');
  });

  document.getElementById('cb-necessary').addEventListener('click', function () {
    closeConsent('necessary');
  });
})();
