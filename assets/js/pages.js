/* ==========================================================
   pages.js – comportamento específico de cada página.
   Cada bloco só roda se o elemento correspondente existir.
   ========================================================== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const params = new URLSearchParams(location.search);
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  /* ---------- CICLO DA VIOLÊNCIA ----------
     O círculo é um índice visual das 4 fases. O texto vem do HTML (conteúdo dos PDFs):
     clicar numa fase leva ao card correspondente e o destaca. */
  const cycleArt = $("#cycle-art");
  if (cycleArt) {
    const STEPS = [
      { t: "Encantamento", c: "#b98a91" },
      { t: "Aumento da tensão", c: "#9b6670" },
      { t: "Ato de violência", c: "#6e2b4a" },
      { t: "Arrependimento", c: "#8a4a62" }
    ];
    const cx = 200, cy = 200, R = 176, r = 78;
    const pt = (rad, a) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
    let svg = '<svg viewBox="0 0 400 400" role="group" aria-label="Círculo do ciclo da violência dividido em quatro fases">' +
      '<defs><marker id="arw" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1l8 4-8 4z" fill="#9b6670"/></marker></defs>';
    STEPS.forEach((s, i) => {
      const a0 = -Math.PI / 2 + i * Math.PI / 2 + 0.04, a1 = a0 + Math.PI / 2 - 0.08;
      const [x0, y0] = pt(R, a0), [x1, y1] = pt(R, a1), [x2, y2] = pt(r, a1), [x3, y3] = pt(r, a0);
      const [tx, ty] = pt((R + r) / 2, (a0 + a1) / 2);
      const words = s.t.split(" ");
      svg += `<g class="cycle-seg" tabindex="0" role="link" data-i="${i + 1}" aria-label="Fase ${i + 1}: ${s.t}">
        <path d="M${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${r} ${r} 0 0 0 ${x3} ${y3}Z" fill="${s.c}"/>
        <text x="${tx}" y="${ty - 6 - (words.length - 1) * 8}" text-anchor="middle"><tspan x="${tx}" style="font-size:20px">${i + 1}</tspan>${words.map(w => `<tspan x="${tx}" dy="16">${w}</tspan>`).join("")}</text></g>`;
    });
    // seta externa indicando que o ciclo se repete (sentido horário)
    const [ax, ay] = pt(R + 12, -Math.PI / 2 - 0.9), [bx, by] = pt(R + 12, -Math.PI / 2 - 0.12);
    svg += `<path d="M${ax} ${ay} A${R + 12} ${R + 12} 0 0 1 ${bx} ${by}" fill="none" stroke="#9b6670" stroke-width="2" stroke-dasharray="3 6" marker-end="url(#arw)"/>`;
    svg += `<text x="200" y="196" text-anchor="middle" style="font:600 20px Newsreader,Georgia,serif;fill:#6e2b4a">Ciclo da</text>
            <text x="200" y="220" text-anchor="middle" style="font:600 20px Newsreader,Georgia,serif;fill:#6e2b4a">violência</text></svg>`;
    cycleArt.innerHTML = svg;
    const go = (n) => {
      const card = document.getElementById("fase-" + n);
      if (!card) return;
      document.querySelectorAll(".phase").forEach(p => p.classList.toggle("on", p === card));
      card.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    };
    cycleArt.addEventListener("click", e => { const g = e.target.closest("[data-i]"); if (g) go(+g.dataset.i); });
    cycleArt.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.dataset.i) { e.preventDefault(); go(+e.target.dataset.i); } });
  }

  /* ---------- REDE DE PROTEÇÃO ---------- */
  const list = $("#service-list");
  if (list) {
    const filters = $("#filters"), q = $("#q"), count = $("#count"), empty = $("#empty");
    let cat = params.get("cat") && CATEGORIAS[params.get("cat")] ? params.get("cat") : "todos";
    filters.innerHTML = `<button class="chip" data-cat="todos" type="button">Todos</button>` +
      Object.entries(CATEGORIAS).map(([k, v]) => `<button class="chip" data-cat="${k}" type="button">${v}</button>`).join("");
    const render = () => {
      const term = norm(q.value.trim());
      const res = SERVICOS.filter(s => (cat === "todos" || s.categoria === cat) &&
        (!term || norm([s.nome, s.descricao, s.publico, s.endereco].join(" ")).includes(term)));
      filters.querySelectorAll(".chip").forEach(c => { const on = c.dataset.cat === cat; c.classList.toggle("on", on); c.setAttribute("aria-pressed", on); });
      count.textContent = `${res.length} ${res.length === 1 ? "serviço encontrado" : "serviços encontrados"}`;
      empty.classList.toggle("hidden", res.length > 0);
      list.innerHTML = res.map(s => `
        <article class="service">
          <span class="tag">${CATEGORIAS[s.categoria]}</span>
          <h3>${esc(s.nome)}</h3>
          <p>${esc(s.descricao)}</p>
          <dl>
            <div><dt>${icon("users")}</dt><dd><span class="sr-only">Público: </span>${esc(s.publico)}</dd></div>
            <div><dt>${icon("pin")}</dt><dd><span class="sr-only">Endereço: </span>${esc(s.endereco)}</dd></div>
            <div><dt>${icon("clock")}</dt><dd><span class="sr-only">Horário: </span>${esc(s.horario)}</dd></div>
            <div><dt>${icon("phone")}</dt><dd><span class="sr-only">Contato: </span>${s.link && s.link !== "#" ? `<a href="${esc(s.link)}"><strong>${esc(s.contato)}</strong></a>` : esc(s.contato)}</dd></div>
          </dl>
          <p class="more">${esc(s.mais)}</p>
          <button class="btn btn--ghost" type="button" aria-expanded="false">Saber mais ${icon("arrow")}</button>
        </article>`).join("");
    };
    filters.addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (b) { cat = b.dataset.cat; render(); } });
    q.addEventListener("input", render);
    list.addEventListener("click", e => {
      const b = e.target.closest(".btn"); if (!b) return;
      const open = b.closest(".service").classList.toggle("open");
      b.setAttribute("aria-expanded", open);
      b.firstChild.textContent = open ? "Mostrar menos " : "Saber mais ";
    });
    render();
  }

  /* ---------- PESQUISAS ---------- */
  const plist = $("#research-list");
  if (plist) {
    const areas = [...new Set(PESQUISAS.map(p => p.area))];
    const f = $("#research-filters"), q = $("#rq"), count = $("#rcount");
    let area = "todas";
    f.innerHTML = `<button class="chip" data-a="todas" type="button">Todas</button>` + areas.map(a => `<button class="chip" data-a="${esc(a)}" type="button">${esc(a)}</button>`).join("");
    const render = () => {
      const t = norm(q.value.trim());
      const res = PESQUISAS.filter(p => (area === "todas" || p.area === area) && (!t || norm(p.titulo + p.autor + p.resumo).includes(t)));
      f.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.a === area));
      count.textContent = `${res.length} ${res.length === 1 ? "pesquisa" : "pesquisas"}`;
      plist.innerHTML = res.map(p => `
        <article class="service"><span class="tag">${esc(p.area)} · ${p.ano}</span>
          <h3>${esc(p.titulo)}</h3><p>${esc(p.resumo)}</p>
          <p><small>${esc(p.autor)}</small></p>
          <a class="btn btn--ghost" href="${esc(p.arquivo)}">${icon("file")} Ler pesquisa</a></article>`).join("") || '<div class="empty">Nenhuma pesquisa encontrada.</div>';
    };
    f.addEventListener("click", e => { const b = e.target.closest("[data-a]"); if (b) { area = b.dataset.a; render(); } });
    q.addEventListener("input", render);
    render();
  }

  /* ---------- DÚVIDAS (FAQ) ---------- */
  const faq = $("#faq");
  if (faq) {
    const f = $("#faq-filters");
    let cat = params.get("cat") && FAQ[params.get("cat")] ? params.get("cat") : "todas";
    f.innerHTML = `<button class="chip" data-c="todas" type="button">Todas</button>` + Object.entries(FAQ).map(([k, v]) => `<button class="chip" data-c="${k}" type="button">${v.titulo}</button>`).join("");
    let n = 0;
    faq.innerHTML = Object.entries(FAQ).map(([k, g]) => `
      <section class="faq-group" data-c="${k}"><h2>${g.titulo}</h2>
      ${g.itens.map(i => { n++; return `<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false" aria-controls="fa${n}" id="fq${n}">${esc(i[0])}${icon("down")}</button>
        <div class="faq-a" id="fa${n}" role="region" aria-labelledby="fq${n}"><div><p>${esc(i[1])}</p></div></div></div>`; }).join("")}</section>`).join("");
    const apply = () => {
      f.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.c === cat));
      faq.querySelectorAll(".faq-group").forEach(g => g.classList.toggle("hidden", cat !== "todas" && g.dataset.c !== cat));
    };
    f.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { cat = b.dataset.c; apply(); } });
    faq.addEventListener("click", e => { const b = e.target.closest(".faq-q"); if (b) b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true"); });
    apply();
  }
})();
