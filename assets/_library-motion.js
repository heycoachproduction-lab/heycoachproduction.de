/* Kursbibliothek v8 — rows are static HTML (visible to crawlers); this file only adds the running motion. */
(function () {
  const root = document.getElementById("kurse");
  if (!root || !root.classList.contains("hc-lib")) return;
  root.classList.add("hc-lib--running");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const engines = [];
  root.querySelectorAll(".hc-row").forEach((row, i) => {
    row.style.position = "relative";
    const track = row.querySelector(".hc-track");
    const prev = row.querySelector(".prev"), next = row.querySelector(".next");
    if (reduce) { track.parentElement.style.overflowX = "auto"; prev.hidden = next.hidden = true; return; }
    const strip = track.innerHTML;
    const reps = Math.max(2, Math.ceil((window.innerWidth * 1.7) / (track.children.length * 300)));
    track.innerHTML = strip.repeat(reps * 2);
    [...track.children].slice(row.querySelectorAll(".hc-track > *").length / (reps * 2)).forEach(c => c.setAttribute("aria-hidden", "true"));
    const dir = i % 2 === 0 ? 1 : -1;   // 08.10 Heidar: 1. Reihe nach rechts, 2. nach links, abwechselnd
    const eng = {track, x: 0, half: 0, dir, speed: 9 + i * 2, paused: false, drag: 0, init: dir > 0, hold: false, resumeAt: 0};
    const measure = () => { eng.half = track.scrollWidth / 2; if (eng.init && eng.half) { eng.x = -eng.half; eng.init = false; } };
    requestAnimationFrame(measure);
    window.addEventListener("load", measure);
    window.addEventListener("resize", () => requestAnimationFrame(measure));
    row.addEventListener("pointerenter", () => eng.paused = true);
    row.addEventListener("pointerleave", () => eng.paused = false);
    // 01.10: mit Finger/Maus wischen (Handy: Reihen waren nicht wischbar). Vertikales Scrollen bleibt beim Browser.
    const vp = track.parentElement;
    vp.style.touchAction = "pan-y";
    track.querySelectorAll("img").forEach(im => im.draggable = false);
    let down = null;
    vp.addEventListener("pointerdown", ev => {
      if (ev.button > 0) return;
      down = {x: ev.clientX, y: ev.clientY, last: ev.clientX, t: performance.now(), v: 0, moved: false, id: ev.pointerId};
      eng.drag = 0; eng.hold = true;
    });
    vp.addEventListener("pointermove", ev => {
      if (!down || ev.pointerId !== down.id) return;
      if (!down.moved) {
        const ax = Math.abs(ev.clientX - down.x), ay = Math.abs(ev.clientY - down.y);
        if (ay > 10 && ay > ax) { down = null; eng.hold = false; return; }   // vertikal → Browser scrollt
        if (ax < 8 || ax < ay * 1.2) { down.last = ev.clientX; return; }
      }
      if (!down.moved) {
        down.moved = true;
        try { vp.setPointerCapture(ev.pointerId); } catch (_) {}
      }
      if (down.moved) {
        const dx = ev.clientX - down.last, now = performance.now();
        eng.x += dx;
        down.v = 0.7 * down.v + 0.3 * (dx / Math.max(1, now - down.t)) * 16;
        down.t = now;
      }
      down.last = ev.clientX;
    });
    const end = () => {
      if (!down) return;
      if (down.moved) {
        eng.drag = down.v * 14;                                   // Schwung nach dem Loslassen
        vp.dataset.dragged = "1";
        setTimeout(() => delete vp.dataset.dragged, 60);
      }
      down = null; eng.hold = false; eng.resumeAt = performance.now() + 2500;
    };
    vp.addEventListener("pointerup", end);
    vp.addEventListener("pointercancel", end);
    vp.addEventListener("click", ev => { if (vp.dataset.dragged) { ev.preventDefault(); ev.stopPropagation(); } }, true);
    prev.hidden = false;
    const step = () => {                                          // genau eine Karte weiter
      const c = track.children[0]; if (!c) return 300;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 12;
      return c.getBoundingClientRect().width + gap;
    };
    prev.addEventListener("click", () => { eng.drag += step(); eng.resumeAt = performance.now() + 5000; });
    next.addEventListener("click", () => { eng.drag -= step(); eng.resumeAt = performance.now() + 5000; });
    engines.push(eng);
  });
  let last = performance.now();
  (function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    for (const e of engines) {
      if (!e.half) continue;
      if (!e.paused && !e.hold && now >= e.resumeAt) e.x += e.dir * e.speed * dt;
      if (e.drag) { const s = e.drag * Math.min(1, dt * 6); e.x += s; e.drag -= s; if (Math.abs(e.drag) < .5) e.drag = 0; }
      while (e.x <= -e.half) e.x += e.half;
      while (e.x > 0) e.x -= e.half;
      e.track.style.transform = `translate3d(${e.x.toFixed(2)}px,0,0)`;
    }
    requestAnimationFrame(loop);
  })(last);
})();
