/* «Alle Kurse» — filter chips (the full catalogue is static HTML; without JS everything stays visible). */
(function () {
  const root = document.getElementById("alle-kurse");
  if (!root) return;
  const chips = [...root.querySelectorAll(".kc-chip")];
  const secs = [...root.querySelectorAll(".kc-sec")];
  const apply = key => {
    chips.forEach(c => c.setAttribute("aria-pressed", String(c.dataset.filter === key)));
    secs.forEach(sec => {
      if (sec.dataset.sec === "planung") { sec.hidden = !(key === "all" || key === "soon"); return; }
      let shown = 0;
      sec.querySelectorAll(".kc-card").forEach(card => {
        const ok = key === "all" || card.dataset.status === key || card.dataset.dir === key;
        card.classList.toggle("is-filtered", !ok);
        if (ok) shown++;
      });
      sec.hidden = shown === 0;
    });
    try { history.replaceState(null, "", key === "all" ? location.pathname : "#" + key); } catch (e) {}
  };
  chips.forEach(c => c.addEventListener("click", () => apply(c.dataset.filter)));
  const start = location.hash.slice(1);
  if (chips.some(c => c.dataset.filter === start)) apply(start);
})();
