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
      const card = document.querySelectorAll(".phase")[n - 1];
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
    // só mostra categorias que têm pelo menos um serviço cadastrado
    const cats = Object.entries(CATEGORIAS).filter(([k]) => SERVICOS.some(s => s.categoria === k));
    let cat = params.get("cat") && cats.some(([k]) => k === params.get("cat")) ? params.get("cat") : "todos";
    filters.innerHTML = `<button class="chip" data-cat="todos" type="button">Todos</button>` +
      cats.map(([k, v]) => `<button class="chip" data-cat="${k}" type="button">${v}</button>`).join("");
    // texto seguro + marcador visível para dados pendentes
    const tbc = (t) => esc(t).replace(/\[A CONFIRMAR\]/g, '<mark class="tbc">A CONFIRMAR</mark>');
    const ICONS = { publico: "users", endereco: "pin", horario: "clock", contato: "phone", info: "file" };
    const plain = (s) => [s.nome, s.descricao, s.selo, s.aviso, (s.itens || []).map(i => i.join(" ")).join(" "),
      (s.campos || []).map(c => c[1] + " " + c[2]).join(" "), (s.mais || "").replace(/<[^>]+>/g, " ")].join(" ");
    // no card fica só "o que é" (categoria, nome, descrição); o resto vai para "Ler mais informações"
    const card = (s) => {
      const extra = [
        s.itens ? `<ul class="service-list">${s.itens.map(i => `<li><strong>${esc(i[0])}</strong> ${esc(i[1])}</li>`).join("")}</ul>` : "",
        s.campos ? `<dl>${s.campos.map(c => `<div><dt>${icon(ICONS[c[0]] || "file")}</dt><dd><span class="field">${esc(c[1])}</span>${c[3] ? `<a href="${esc(c[3])}"${/^https?:/.test(c[3]) ? ' target="_blank" rel="noopener"' : ""}>${c[0] === "contato" ? `<strong>${tbc(c[2])}</strong>` : tbc(c[2])}</a>` : tbc(c[2])}</dd></div>`).join("")}</dl>` : "",
        s.aviso ? `<p class="service-warn"><strong>Aviso:</strong> ${esc(s.aviso)}</p>` : "",
        s.mais || ""
      ].join("").trim();
      return `
      <article class="service" id="${esc(s.id)}">
        <div class="service-top"><span class="tag">${CATEGORIAS[s.categoria]}</span>${s.selo ? `<span class="seal">${esc(s.selo)}</span>` : ""}</div>
        <h3>${esc(s.nome)}</h3>
        <p>${esc(s.descricao)}</p>
        ${s.link ? `<a class="btn service-link" href="${esc(s.link[1])}" target="_blank" rel="noopener">${esc(s.link[0])} ${icon("arrow")}</a>` : ""}
        ${extra ? `<div class="more">${extra}</div><button class="btn btn--ghost" type="button" aria-expanded="false"><span class="lbl">Ler mais informações</span> ${icon("arrow")}</button>` : ""}
      </article>`;
    };
    const render = () => {
      const term = norm(q.value.trim());
      const res = SERVICOS.filter(s => (cat === "todos" || s.categoria === cat) && (!term || norm(plain(s)).includes(term)));
      filters.querySelectorAll(".chip").forEach(c => { const on = c.dataset.cat === cat; c.classList.toggle("on", on); c.setAttribute("aria-pressed", on); });
      count.textContent = `${res.length} ${res.length === 1 ? "serviço encontrado" : "serviços encontrados"}`;
      empty.classList.toggle("hidden", res.length > 0);
      list.innerHTML = res.map(card).join("");
    };
    filters.addEventListener("click", e => { const b = e.target.closest("[data-cat]"); if (b) { cat = b.dataset.cat; render(); } });
    q.addEventListener("input", render);
    // âncoras para cards gerados por JS: rola até o card (limpando filtro/busca se ele estiver escondido)
    const goHash = (first) => {
      const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
      const target = SERVICOS.find(x => x.id === id); if (!target) return;
      if (!document.getElementById(id)) { cat = "todos"; q.value = ""; render(); }
      const el = document.getElementById(id); if (!el) return;
      el.scrollIntoView({ behavior: first ? "instant" : "smooth", block: "start" });
      el.classList.remove("is-target"); void el.offsetWidth; el.classList.add("is-target");
    };
    window.addEventListener("hashchange", () => goHash(false));
    list.addEventListener("click", e => {
      const b = e.target.closest("button.btn"); if (!b) return;
      const open = b.closest(".service").classList.toggle("open");
      b.setAttribute("aria-expanded", open);
      b.querySelector(".lbl").textContent = open ? "Mostrar menos" : "Ler mais informações";
    });
    render();
    goHash(true);
  }

  /* ---------- PESQUISAS (todas juntas, sem divisão por área) ---------- */
  const plist = $("#research-list");
  if (plist) {
    const q = $("#rq"), count = $("#rcount");
    const render = () => {
      const t = norm(q.value.trim());
      const res = PESQUISAS.filter(p => !t || norm(p.titulo + " " + p.ano + " " + p.autor + " " + p.resumo).includes(t));
      count.textContent = `${res.length} ${res.length === 1 ? "pesquisa" : "pesquisas"}`;
      plist.innerHTML = res.map(p => `
        <article class="service">${p.ano ? `<span class="tag">${esc(p.ano)}</span>` : ""}
          <h3>${esc(p.titulo)}</h3><p>${esc(p.resumo)}</p>
          <p><small>${esc(p.autor)}</small></p>
          <a class="btn btn--ghost" href="${esc(p.arquivo)}">${icon("file")} Ler pesquisa</a></article>`).join("") || '<div class="empty">Nenhuma pesquisa encontrada.</div>';
    };
    q.addEventListener("input", render);
    render();
  }

  /* ---------- COMPOSIÇÃO DA REDE ---------- */
  const compAt = $("#comp-atendimento"), compOrg = $("#comp-orgaos");
  if (compAt) {
    compAt.innerHTML = SERVICOS.map(s => `
      <article class="service comp">
        <div class="service-top"><span class="tag">${CATEGORIAS[s.categoria]}</span></div>
        <h3>${esc(s.nome)}</h3>
        <p>${esc(s.descricao)}</p>
        <a class="inline-link" href="rede.html#${esc(s.id)}">Ver contatos e informações</a>
      </article>`).join("");
  }
  if (compOrg) {
    compOrg.innerHTML = (window.REDE_ORGAOS || []).map(o => `
      <article class="service comp" id="${esc(o.id)}">
        <div class="service-top"><span class="tag tag--alt">${esc(o.vinculo)}</span></div>
        <h3>${esc(o.nome)}</h3>
        <p>${esc(o.descricao)}</p>
        ${o.relacionado ? `<a class="inline-link" href="${esc(o.relacionado[1])}">${esc(o.relacionado[0])}</a>` : ""}
      </article>`).join("");
  }

  /* ---------- NOTÍCIAS, DECISÕES E EVENTOS ----------
     Tudo vem de window.NOTICIAS (data.js). O tipo de cada item:
     tipo: "evento" (com evento: { dia, hora, local, nome }), ou "decisao" quando tem o campo decisao; senão é notícia. */
  const tipoDe = (n) => n.tipo || (n.decisao ? "decisao" : n.evento ? "evento" : "noticia");
  const TIPO_NOME = { noticia: "Notícia", decisao: "Decisão", evento: "Evento" };
  const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const dataDe = (iso) => { const [a, m, d] = iso.split("-").map(Number); return new Date(a, m - 1, d); };
  const isoDe = (dt) => `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  const fmt = (d) => { const [a, m, dia] = d.split("-"); return `${dia}/${m}/${a}`; };
  const porExtenso = (iso) => { const dt = dataDe(iso); return `${SEMANA[dt.getDay()]}, ${dt.getDate()} de ${MESES[dt.getMonth()]}`; };
  const hoje = isoDe(new Date());
  const rootN = document.body.dataset.root || "";

  const carrossel = (imgs, titulo) => `
      <div class="nc" role="region" aria-roledescription="carrossel" aria-label="${esc("Imagens: " + titulo)}">
        <div class="nc-track" tabindex="0">
          ${imgs.map((im, i) => `<a class="nc-slide" href="${esc(rootN + "assets/img/" + im[0])}" target="_blank" rel="noopener" aria-label="${esc(`Imagem ${i + 1} de ${imgs.length}: abrir em tamanho grande`)}"><img src="${esc(rootN + "assets/img/" + im[0])}" alt="${esc(im[1])}" loading="${i ? "lazy" : "eager"}" width="1024" height="1280"></a>`).join("")}
        </div>
        <button class="nc-btn nc-prev" type="button" aria-label="Imagem anterior">${icon("arrow")}</button>
        <button class="nc-btn nc-next" type="button" aria-label="Próxima imagem">${icon("arrow")}</button>
        <div class="nc-foot"><div class="nc-dots">${imgs.map((_, i) => `<button type="button" class="nc-dot" aria-label="Ir para a imagem ${i + 1}"></button>`).join("")}</div><span class="nc-count" aria-live="polite">1 / ${imgs.length}</span></div>
      </div>`;

  const cartao = (n, { mostrarTipo = false, id = "" } = {}) => {
    const t = tipoDe(n);
    const ev = n.evento;
    // no evento, "Quando" e "Onde" já aparecem no quadro de data/hora/local
    const pontos = (n.pontos || []).filter(p => !(ev && /^(Quando|Onde):/.test(p)));
    return `
      <article class="service news news--${t}${n.imagens ? " news--carousel" : n.imagem ? " news--img" : ""}"${id ? ` id="${esc(id)}"` : ""}>
        ${n.imagens ? carrossel(n.imagens, n.titulo) : ""}
        ${!n.imagens && n.imagem ? `<img class="news-img" src="${esc(rootN + "assets/img/" + n.imagem[0])}" alt="${esc(n.imagem[1])}" loading="lazy">` : ""}
        <div class="news-body">
        <div class="service-top"><span class="news-tags">${mostrarTipo ? `<span class="tag tag--tipo tag--${t}">${TIPO_NOME[t]}</span>` : ""}<span class="tag">${esc(n.fonte)}</span></span><time class="news-date" datetime="${esc(n.data)}">${fmt(n.data)}</time></div>
        <h3>${esc(n.titulo)}</h3>
        ${ev ? `<div class="ev-info${ev.dia < hoje ? " ev-info--passado" : ""}">
          <span>${icon("calendar")}<b>${esc(porExtenso(ev.dia))}</b>${ev.dia < hoje ? " (já aconteceu)" : ""}</span>
          ${ev.hora ? `<span>${icon("clock")}${esc(ev.hora)}</span>` : ""}
          ${ev.local ? `<span>${icon("pin")}${esc(ev.local)}</span>` : ""}
        </div>` : ""}
        <p>${esc(n.resumo)}</p>
        ${pontos.length ? `<ul class="service-list">${pontos.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        <div class="news-actions">
          ${n.botao ? `<a class="btn" href="${esc(n.botao[1])}" target="_blank" rel="noopener">${esc(n.botao[0])} ${icon("arrow")}</a>` : ""}
          ${n.decisao ? `<a class="btn" href="decisoes.html#${esc(n.decisao)}">Ler a decisão completa ${icon("arrow")}</a>` : ""}
          ${n.link ? `<a class="btn btn--ghost" href="${esc(n.link)}" target="_blank" rel="noopener">Ver publicação original ${icon("arrow")}</a>` : ""}
          ${n.relacionado ? `<a class="inline-link" href="${esc(n.relacionado[1])}">${esc(n.relacionado[0])}</a>` : ""}
        </div>
        </div>
      </article>`;
  };

  // carrosséis: deslizar com o dedo, setas, bolinhas e teclado
  const ativarCarrosseis = (box) => box.querySelectorAll(".nc").forEach(c => {
    const track = c.querySelector(".nc-track");
    const slides = [...track.children];
    const dots = [...c.querySelectorAll(".nc-dot")];
    const count = c.querySelector(".nc-count");
    const prev = c.querySelector(".nc-prev"), next = c.querySelector(".nc-next");
    let atual = 0;
    const ir = (i) => { i = Math.max(0, Math.min(slides.length - 1, i)); track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: "smooth" }); };
    const marcar = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i === atual && count.dataset.ok) return;
      atual = i; count.dataset.ok = "1";
      dots.forEach((d, k) => { d.classList.toggle("on", k === i); d.setAttribute("aria-current", k === i ? "true" : "false"); });
      count.textContent = `${i + 1} / ${slides.length}`;
      prev.disabled = i === 0; next.disabled = i === slides.length - 1;
    };
    let t; track.addEventListener("scroll", () => { clearTimeout(t); t = setTimeout(marcar, 60); }, { passive: true });
    prev.addEventListener("click", () => ir(atual - 1));
    next.addEventListener("click", () => ir(atual + 1));
    dots.forEach((d, k) => d.addEventListener("click", () => ir(k)));
    track.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); ir(atual + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); ir(atual - 1); }
    });
    marcar();
  });

  // abas: "Todas" (noticias.html) e "Notícias" (noticias.html?tipo=noticia) ficam na mesma página
  const nlist = $("#news-list");
  if (nlist) {
    const filtro = params.get("tipo") === "noticia" ? "noticia" : "";
    document.querySelectorAll(".subpages [data-f]").forEach(a => {
      const on = a.dataset.f === filtro;
      a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (filtro) {
      const h1 = $(".page-hero h1"); if (h1) h1.textContent = "Notícias";
      const p = $(".page-hero p"); if (p) p.textContent = "Novidades sobre as iniciativas de Caxias do Sul no enfrentamento à violência contra a mulher.";
    }
    const itens = [...(window.NOTICIAS || [])]
      .filter(n => !filtro || tipoDe(n) === filtro)
      .sort((a, b) => b.data.localeCompare(a.data));
    nlist.innerHTML = itens.map(n => cartao(n, { mostrarTipo: !filtro })).join("") || '<div class="empty">Nenhuma notícia publicada ainda.</div>';
    ativarCarrosseis(nlist);
  }

  /* ---------- EVENTOS: calendário + lista ---------- */
  const cal = $("#ev-cal");
  if (cal) {
    const eventos = (window.NOTICIAS || []).filter(n => tipoDe(n) === "evento" && n.evento)
      .map((n, i) => ({ n, dia: n.evento.dia, id: `evento-${n.evento.dia}-${i}` }))
      .sort((a, b) => a.dia.localeCompare(b.dia));
    const porDia = {};
    eventos.forEach(e => (porDia[e.dia] = porDia[e.dia] || []).push(e));
    const lista = $("#ev-list");
    const titulo = $("#ev-list-title");
    const limpar = $("#ev-clear");
    const proximo = eventos.find(e => e.dia >= hoje);
    const inicio = dataDe(proximo ? proximo.dia : hoje);
    let ano = inicio.getFullYear(), mes = inicio.getMonth();
    let diaSel = "";

    const desenharLista = () => {
      let html = "";
      if (diaSel) {
        titulo.textContent = `Eventos em ${porExtenso(diaSel)}`;
        html = (porDia[diaSel] || []).map(e => cartao(e.n, { id: e.id })).join("");
        limpar.hidden = false;
      } else {
        titulo.textContent = "Próximos eventos";
        const futuros = eventos.filter(e => e.dia >= hoje);
        const passados = eventos.filter(e => e.dia < hoje).reverse();
        html = futuros.map(e => cartao(e.n, { id: e.id })).join("") || '<div class="empty">Nenhum evento marcado por enquanto.</div>';
        if (passados.length) html += `<h2 class="ev-sub">Eventos que já aconteceram</h2>` + passados.map(e => cartao(e.n, { id: e.id })).join("");
        limpar.hidden = true;
      }
      lista.innerHTML = html;
      ativarCarrosseis(lista);
    };

    const desenharCal = () => {
      const primeiro = new Date(ano, mes, 1);
      const diasNoMes = new Date(ano, mes + 1, 0).getDate();
      let cel = "";
      for (let i = 0; i < primeiro.getDay(); i++) cel += `<span class="ev-day ev-day--vazio" aria-hidden="true"></span>`;
      for (let d = 1; d <= diasNoMes; d++) {
        const iso = isoDe(new Date(ano, mes, d));
        const evs = porDia[iso] || [];
        const cls = ["ev-day", iso === hoje ? "ev-day--hoje" : "", evs.length ? "ev-day--tem" : "", iso < hoje ? "ev-day--passou" : "", iso === diaSel ? "on" : ""].filter(Boolean).join(" ");
        cel += evs.length
          ? `<button type="button" class="${cls}" data-dia="${iso}" aria-pressed="${iso === diaSel}" aria-label="${esc(`${d} de ${MESES[mes]}: ${evs.map(e => e.n.evento.nome || e.n.titulo).join("; ")}`)}"><b>${d}</b><i></i><small>${esc(evs[0].n.evento.nome || "")}${evs.length > 1 ? ` +${evs.length - 1}` : ""}</small></button>`
          : `<span class="${cls}"${iso === hoje ? ' aria-current="date"' : ""}><b>${d}</b></span>`;
      }
      const temNoMes = eventos.filter(e => { const dt = dataDe(e.dia); return dt.getFullYear() === ano && dt.getMonth() === mes; }).length;
      cal.innerHTML = `
        <div class="ev-cal-head">
          <button type="button" class="ev-nav" data-mv="-1" aria-label="Mês anterior">${icon("arrow")}</button>
          <h2 aria-live="polite">${MESES[mes][0].toUpperCase() + MESES[mes].slice(1)} de ${ano}</h2>
          <button type="button" class="ev-nav" data-mv="1" aria-label="Próximo mês">${icon("arrow")}</button>
        </div>
        <div class="ev-week" aria-hidden="true"><span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span></div>
        <div class="ev-grid">${cel}</div>
        <p class="ev-cal-foot">${temNoMes ? `${temNoMes} evento${temNoMes > 1 ? "s" : ""} neste mês. Toque no dia marcado para ver.` : "Nenhum evento neste mês."}</p>`;
    };

    cal.addEventListener("click", e => {
      const mv = e.target.closest("[data-mv]");
      if (mv) { mes += Number(mv.dataset.mv); if (mes < 0) { mes = 11; ano--; } if (mes > 11) { mes = 0; ano++; } desenharCal(); return; }
      const b = e.target.closest("[data-dia]");
      if (b) {
        diaSel = diaSel === b.dataset.dia ? "" : b.dataset.dia;
        desenharCal(); desenharLista();
        if (diaSel) titulo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    limpar.addEventListener("click", () => { diaSel = ""; desenharCal(); desenharLista(); });
    desenharCal(); desenharLista();
  }

  /* ---------- CAIXAS QUE ABREM (details): abre a caixa quando um link aponta para ela ---------- */
  const abrirAlvo = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el && el.tagName === "DETAILS") { el.open = true; el.scrollIntoView({ block: "start" }); }
  };
  abrirAlvo();
  window.addEventListener("hashchange", abrirAlvo);

  /* ---------- DÚVIDAS (FAQ) ---------- */
  const faq = $("#faq");
  if (faq) {
    const f = $("#faq-filters");
    let cat = params.get("cat") && FAQ[params.get("cat")] ? params.get("cat") : "todas";
    f.innerHTML = `<button class="chip" data-c="todas" type="button">Todas</button>` + Object.entries(FAQ).map(([k, v]) => `<button class="chip" data-c="${k}" type="button">${v.titulo}</button>`).join("");
    let n = 0;
    const FAQ_ID = { violencia: "violencia", filhos: "filhos", separacao: "separacao-divorcio", medidas: "medidas-protetivas", direitos: "direitos", rede: "rede-de-protecao" };
    faq.innerHTML = Object.entries(FAQ).map(([k, g]) => `
      <section class="faq-group" id="${FAQ_ID[k] || k}" data-c="${k}"><h2>${g.titulo}</h2>
      ${g.itens.map(i => { n++; return `<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false" aria-controls="fa${n}" id="fq${n}">${esc(i[0])}${icon("down")}</button>
        <div class="faq-a" id="fa${n}" role="region" aria-labelledby="fq${n}"><div><p>${esc(i[1])}</p></div></div></div>`; }).join("")}</section>`).join("");
    const apply = () => {
      f.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.c === cat));
      faq.querySelectorAll(".faq-group").forEach(g => g.classList.toggle("hidden", cat !== "todas" && g.dataset.c !== cat));
    };
    f.addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { cat = b.dataset.c; apply(); } });
    faq.addEventListener("click", e => { const b = e.target.closest(".faq-q"); if (b) b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true"); });
    apply();
    // âncoras para os grupos (#violencia, #filhos...): mostra todos e rola até o grupo
    const goHash = (first) => {
      const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
      const el = document.getElementById(id); if (!el || !el.classList.contains("faq-group")) return;
      if (cat !== "todas") { cat = "todas"; apply(); }
      el.scrollIntoView({ behavior: first ? "instant" : "smooth", block: "start" });
      el.classList.remove("is-target"); void el.offsetWidth; el.classList.add("is-target");
    };
    window.addEventListener("hashchange", () => goHash(false));
    goHash(true);
  }
})();
