/* ==========================================================
   main.js – componentes compartilhados (header, rodapé, nav
   inferior, painel de ajuda, ícones).
   Cada página define <body data-page="..." data-root="../">.
   ========================================================== */
(function () {
  const body = document.body;
  const ROOT = body.dataset.root || "";
  const PAGE = body.dataset.page || "";
  const IS_HOME = PAGE === "inicio";
  // termo vindo de um resultado da pesquisa (?destaque=palavra): é destacado na página de destino
  const HL_TERM = IS_HOME ? "" : (new URLSearchParams(location.search).get("destaque") || "").trim();

  /* ---------- Ícones (traço fino, estilo do mockup) ---------- */
  const P = {
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M12 15s-3-1.8-3-4a1.7 1.7 0 013-1 1.7 1.7 0 013 1c0 2.2-3 4-3 4z"/>',
    heart: '<path d="M12 20s-8-4.8-8-10.5A4.5 4.5 0 0112 7a4.5 4.5 0 018 2.5C20 15.200 12 20 12 20z"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',
    megaphone: '<path d="M3 10v4h3l8 4V6L6 10z"/><path d="M17 9a4 4 0 010 6M19 6.500a8 8 0 010 11"/>',
    cycle: '<path d="M20 11a8 8 0 00-14-4L4 9M4 5v4h4M4 13a8 8 0 0014 4l2-2M20 19v-4h-4"/>',
    book: '<path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2zM22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z"/>',
    chart: '<path d="M5 21V12M12 21V4M19 21V9"/><path d="M3 21h18"/>',
    chat: '<path d="M21 12a8 8 0 01-11.500 7.200L4 20l1-4.500A8 8 0 1121 12z"/><path d="M8.500 12h.01M12 12h.01M15.500 12h.01"/>',
    home: '<path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
    users: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.500"/><path d="M3 20c0-3.500 3-6 6-6s6 2.500 6 6M15 14.500c3 0 6 1.500 6 5.500"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 114 2c-1 .8-1.500 1.200-1.500 2.500M12 17v.01"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    phone: '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    scale: '<path d="M12 3v18M6 21h12M5 7h14"/><path d="M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    brain: '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3V4zM15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3V4z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M14.500 9a2.500 2.500 0 00-5 0c0 3 5 2 5 5a2.500 2.500 0 01-5 0M12 6v12"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    fist: '<path d="M7 11V7a2 2 0 014 0v3m0-1a2 2 0 014 0v2m0-1a2 2 0 014 0v5a6 6 0 01-6 6h-2a6 6 0 01-5-3l-3-5a2 2 0 013-2l2 2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    file: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'
  };
  window.icon = (n, cls) => `<svg class="ico ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;
  const fill = (root) => root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); el.removeAttribute("data-icon"); });

  /* ---------- Navegação ----------
     NAV é a única fonte do menu: gera o header em todas as páginas.
     "sub" = seções da página (links com âncora). Sem "sub" = sem dropdown
     (ex.: Pesquisas, que não tem seções). Cada id precisa existir na página. */
  const NAV = [
    { key: "inicio", label: "Início", href: "index.html", sub: [
      ["Por que este espaço existe?", "index.html#por-que-existe"],
      ["Estou vivendo uma situação de violência", "index.html#caminho-violencia"],
      ["Quero entender o que estou vivendo", "index.html#caminho-entender"],
      ["Preciso encontrar um serviço", "index.html#caminho-servico"] ] },
    { key: "comecar", label: "Por onde começar?", href: "pages/por-onde-comecar.html", sub: [
      ["1. Acolhimento e orientação", "pages/por-onde-comecar.html#passo-1"],
      ["2. Caminho adequado", "pages/por-onde-comecar.html#passo-2"],
      ["3. Medidas protetivas", "pages/por-onde-comecar.html#passo-3"],
      ["Se ele descumprir", "pages/por-onde-comecar.html#passo-4"],
      ["Se não tiver para onde ir", "pages/por-onde-comecar.html#passo-5"] ] },
    { key: "violencia", label: "Violência", href: "pages/violencia.html", sub: [
      ["Contexto histórico", "pages/violencia.html#contexto"],
      ["Evolução das leis (linha do tempo)", "pages/violencia.html#evolucao"],
      ["Diferentes classes sociais", "pages/violencia.html#classes"],
      ["Misoginia", "pages/violencia.html#misoginia"],
      ["Tipos de violência", "pages/violencia.html#tipos"] ] },
    { key: "ciclo", label: "Ciclo", href: "pages/ciclo.html", sub: [
      ["Encantamento", "pages/ciclo.html#encantamento"],
      ["Aumento da tensão", "pages/ciclo.html#aumento-da-tensao"],
      ["Ato de violência", "pages/ciclo.html#ato-de-violencia"],
      ["Arrependimento", "pages/ciclo.html#arrependimento"],
      ["Violentômetro", "pages/ciclo.html#violentometro"] ] },
    { key: "rede", label: "Rede de Proteção", href: "pages/rede.html", sub: [
      ["Serviços de atendimento", "pages/rede.html"],
      ["Composição da rede", "pages/rede-composicao.html"] ] },
    { key: "noticias", label: "Notícias", href: "pages/noticias.html", sub: [
      ["Notícias", "pages/noticias.html"],
      ["Decisões", "pages/decisoes.html"] ] },
    { key: "pesquisas", label: "Pesquisas", href: "pages/pesquisas.html" },
    { key: "duvidas", label: "Dúvidas", href: "pages/duvidas.html", sub: [
      ["Violência", "pages/duvidas.html#violencia"],
      ["Filhos", "pages/duvidas.html#filhos"],
      ["Separação / Divórcio", "pages/duvidas.html#separacao-divorcio"],
      ["Medidas protetivas", "pages/duvidas.html#medidas-protetivas"],
      ["Direitos", "pages/duvidas.html#direitos"],
      ["Rede de proteção", "pages/duvidas.html#rede-de-protecao"] ] }
  ];
  const LINKS = NAV.map(n => [n.key, n.label, n.href]); // rodapé
  const cur = (k) => (k === PAGE ? ' aria-current="page"' : "");

  const navItem = (n) => {
    const link = `<a class="nav-link" href="${ROOT}${n.href}"${cur(n.key)}>${n.label}</a>`;
    if (!n.sub) return `<div class="nav-item">${link}</div>`;
    const id = "sub-" + n.key;
    return `<div class="nav-item has-sub" data-label="${n.label}">${link}
      <button class="nav-toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="${id}" aria-label="Abrir submenu de ${n.label}">${icon("down")}</button>
      <ul class="subnav" id="${id}" role="menu" aria-label="${n.label}: seções">
        ${n.sub.map(s => `<li role="none"><a role="menuitem" href="${ROOT}${s[1]}">${s[0]}</a></li>`).join("")}
      </ul></div>`;
  };

  /* ---------- Header ---------- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="wrap header-inner">
      <a class="brand" href="${ROOT}index.html" aria-label="Rede de Proteção à Mulher – página inicial">
        <img class="brand-full" src="${ROOT}assets/img/logo-completa.svg" alt="Rede de Proteção à Mulher – Caxias do Sul">
        <img class="brand-icon" src="${ROOT}assets/img/logo-icone.svg" alt="">
        <span class="brand-text">Rede de Proteção<br>à Mulher<small>Caxias do Sul</small></span>
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Principal">
        ${NAV.map(navItem).join("")}
        <button class="btn nav-help" data-open-help type="button">${icon("alert")} Precisa de ajuda?</button>
      </nav>
      ${IS_HOME ? `<button class="find-toggle" id="find-toggle" type="button" aria-label="Pesquisar no site" title="Pesquisar no site" aria-expanded="false" aria-controls="find-bar">${icon("search")}</button>` : ""}
      <button class="btn help-btn help-btn--header" data-open-help type="button">${icon("alert")} Precisa de ajuda? ${icon("arrow")}</button>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav">${icon("menu")}</button>
    </div>
    ${IS_HOME ? `
    <div class="find-bar" id="find-bar" hidden>
      <div class="wrap find-inner" role="search">
        <label class="find-field">
          ${icon("search")}
          <span class="sr-only">Pesquisar em todo o site</span>
          <input type="search" placeholder="Pesquisar em todo o site…" autocomplete="off" spellcheck="false" enterkeyhint="search" aria-controls="find-results">
          <span class="find-count" aria-live="polite"></span>
        </label>
        <button class="find-btn find-close" type="button" aria-label="Fechar pesquisa" title="Fechar">${icon("close")}</button>
      </div>
      <div class="wrap find-results" id="find-results" hidden></div>
    </div>` : HL_TERM ? `
    <div class="find-bar find-bar--hl" id="find-bar">
      <div class="wrap find-inner">
        <p class="find-hl">${icon("search")}<span>Resultado da pesquisa: <b></b></span></p>
        <span class="find-count" aria-live="polite"></span>
        <div class="find-nav">
          <button class="find-btn" type="button" data-find="prev" aria-label="Ocorrência anterior" title="Anterior">${icon("up")}</button>
          <button class="find-btn" type="button" data-find="next" aria-label="Próxima ocorrência" title="Próxima">${icon("down")}</button>
          <button class="find-btn find-close" type="button" aria-label="Limpar destaque da pesquisa" title="Limpar">${icon("close")}</button>
        </div>
      </div>
    </div>` : ""}`;
  body.prepend(header);

  /* ---------- Atalhos com ícones (só no celular/tablet, onde o menu vira "hambúrguer") ----------
     Faixa que rola para o lado, logo abaixo do cabeçalho, com todas as páginas do menu. */
  const QUICK_ICONS = { inicio: "home", comecar: "pin", violencia: "megaphone", ciclo: "cycle", rede: "users", noticias: "file", pesquisas: "chart", duvidas: "help" };
  const quick = document.createElement("nav");
  quick.className = "quick-nav"; quick.setAttribute("aria-label", "Atalhos para as páginas");
  quick.innerHTML = `<div class="quick-track">${NAV.map(n =>
    `<a class="quick-link" href="${ROOT}${n.href}"${cur(n.key)}>${icon(QUICK_ICONS[n.key] || "file")}<span>${n.label}</span></a>`).join("")}</div>`;
  header.after(quick);
  const curQuick = quick.querySelector('[aria-current="page"]');
  if (curQuick) requestAnimationFrame(() => { const t = quick.firstElementChild; t.scrollLeft = curQuick.offsetLeft - (t.clientWidth - curQuick.offsetWidth) / 2; });

  const skip = document.createElement("a");
  skip.className = "skip"; skip.href = "#conteudo"; skip.textContent = "Ir para o conteúdo";
  body.prepend(skip);

  const toggle = header.querySelector("#menu-toggle");
  const nav = header.querySelector("#main-nav");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.innerHTML = icon(open ? "close" : "menu");
    if (!open) closeAll();
  };

  /* ---------- Dropdowns ----------
     Desktop: abre ao passar o mouse (fecha com atraso de 150ms) e ao clicar (o clique "fixa").
     Teclado: Enter/Espaço/↓ abrem; ↑ ↓ Home End navegam; Esc fecha e devolve o foco; ← → trocam de item.
     Mobile (≤1280px): vira acordeão; um aberto por vez. */
  const mobileMq = window.matchMedia("(max-width: 1280px)");
  const items = [...header.querySelectorAll(".nav-item.has-sub")];
  const links = [...header.querySelectorAll(".nav-link")];
  function setOpen(item, open, pin) {
    const btn = item.querySelector(".nav-toggle"), panel = item.querySelector(".subnav");
    if (open) {
      closeAll(item);
      panel.classList.remove("align-right");
      if (!mobileMq.matches) { // não deixa o painel sair da tela: itens à direita alinham pela direita
        const r = panel.getBoundingClientRect();
        if (r.right > window.innerWidth - 12 || item === items[items.length - 1]) panel.classList.add("align-right");
      }
    }
    item.dataset.pinned = open && pin ? "1" : "";
    item.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", (open ? "Fechar" : "Abrir") + " submenu de " + item.dataset.label);
  }
  function closeAll(except) { items.forEach(i => { clearTimeout(i._t); if (i !== except && i.classList.contains("open")) setOpen(i, false); }); }

  items.forEach(item => {
    const btn = item.querySelector(".nav-toggle"), panel = item.querySelector(".subnav");
    const subLinks = () => [...panel.querySelectorAll("a")];
    item.addEventListener("pointerenter", e => {
      if (mobileMq.matches || e.pointerType !== "mouse") return;
      clearTimeout(item._t);
      if (!item.classList.contains("open")) setOpen(item, true, false);
    });
    item.addEventListener("pointerleave", e => {
      if (mobileMq.matches || e.pointerType !== "mouse" || item.dataset.pinned) return;
      item._t = setTimeout(() => setOpen(item, false), 150);
    });
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      if (mobileMq.matches) setOpen(item, !isOpen, true);
      else if (!isOpen) setOpen(item, true, true);
      else if (!item.dataset.pinned) item.dataset.pinned = "1"; // abriu por hover: o clique fixa
      else setOpen(item, false);
    });
    item.addEventListener("keydown", e => {
      const a = document.activeElement, subs = subLinks(), inPanel = subs.includes(a);
      if (e.key === "Escape" && item.classList.contains("open")) {
        e.preventDefault(); e.stopPropagation(); setOpen(item, false); btn.focus(); return;
      }
      if (!inPanel) {
        if (e.key === "ArrowDown") { e.preventDefault(); setOpen(item, true, true); subs[0].focus(); }
        else if (!mobileMq.matches && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
          e.preventDefault();
          const i = links.indexOf(item.querySelector(".nav-link")) + (e.key === "ArrowRight" ? 1 : -1);
          if (links[i]) links[i].focus();
        }
        return;
      }
      const i = subs.indexOf(a);
      if (e.key === "ArrowDown") { e.preventDefault(); subs[(i + 1) % subs.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); (i === 0 ? btn : subs[i - 1]).focus(); }
      else if (e.key === "Home") { e.preventDefault(); subs[0].focus(); }
      else if (e.key === "End") { e.preventDefault(); subs[subs.length - 1].focus(); }
    });
    item.addEventListener("focusout", e => { // Tab para fora fecha (desktop)
      if (!mobileMq.matches && !item.contains(e.relatedTarget) && item.classList.contains("open")) setOpen(item, false);
    });
  });
  // setas ←/→ também nos itens sem dropdown
  links.forEach((l, i) => l.addEventListener("keydown", e => {
    if (mobileMq.matches || l.closest(".has-sub")) return;
    if (e.key === "ArrowRight" && links[i + 1]) { e.preventDefault(); links[i + 1].focus(); }
    if (e.key === "ArrowLeft" && links[i - 1]) { e.preventDefault(); links[i - 1].focus(); }
  }));

  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  // clicar em qualquer link do menu fecha dropdown e menu mobile; o botão do acordeão não fecha
  nav.addEventListener("click", e => { if (e.target.closest("a, .nav-help")) { closeAll(); setMenu(false); } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-item.has-sub")) closeAll();
    if (!header.contains(e.target)) setMenu(false);
  });
  const onBp = () => { closeAll(); if (!mobileMq.matches) setMenu(false); };
  mobileMq.addEventListener ? mobileMq.addEventListener("change", onBp) : mobileMq.addListener(onBp);

  /* ---------- Pesquisa no site ----------
     A lupa só aparece na página inicial, mas a pesquisa varre o site inteiro:
     - textos fixos de cada página (lidos do próprio HTML, por seção com id);
     - conteúdo que vem de data.js (serviços, composição da rede, notícias, dúvidas).
     Não diferencia maiúsculas nem acentos ("violencia" acha "violência").
     Ao clicar num resultado, a página de destino abre com ?destaque=palavra:
     as ocorrências ficam destacadas e uma barra permite ir de uma a outra.
     Para incluir uma página nova na pesquisa, acrescente-a em SITE_PAGES. */
  const fold = (t) => t.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  const escH = (t) => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const foldMap = (text) => { // texto sem acentos + posição de cada letra no texto original
    let norm = ""; const map = [];
    for (let i = 0; i < text.length; i++) { const f = fold(text[i]); for (let k = 0; k < f.length; k++) { norm += f[k]; map.push(i); } }
    return [norm, map];
  };
  const smoothScroll = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const findBar = header.querySelector("#find-bar");

  /* destaque das ocorrências na página atual */
  let hits = [], hitIdx = -1, hlTerm = "";
  function clearHits() {
    document.querySelectorAll("mark.find-hit").forEach(m => {
      const p = m.parentNode; if (!p) return;
      p.replaceChild(document.createTextNode(m.textContent), m); p.normalize();
    });
    hits = []; hitIdx = -1;
  }
  function highlight(term) {
    clearHits(); hlTerm = term;
    const q = fold(term), root = document.getElementById("conteudo") || document.querySelector("main");
    if (q.length < 2 || !root) return 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => {
      const el = n.parentElement;
      if (!n.nodeValue.trim() || !el || el.closest("script, style, svg, noscript, .hidden, [hidden], .chip")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    } });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const text = node.nodeValue, [norm, map] = foldMap(text);
      const frag = document.createDocumentFragment(); let last = 0, from = 0, pos, found = false;
      while ((pos = norm.indexOf(q, from)) !== -1) {
        const st = map[pos], en = map[pos + q.length - 1] + 1;
        if (st > last) frag.append(text.slice(last, st));
        const m = document.createElement("mark"); m.className = "find-hit"; m.textContent = text.slice(st, en);
        frag.append(m); hits.push(m); last = en; from = pos + q.length; found = true;
      }
      if (!found) return;
      if (last < text.length) frag.append(text.slice(last));
      node.parentNode.replaceChild(frag, node);
    });
    return hits.length;
  }
  function revealHit(el) { // abre pergunta / "Ler mais" que esconde a ocorrência; true = abriu algo
    let opened = false;
    for (let d = el.closest("details"); d; d = d.parentElement && d.parentElement.closest("details")) if (!d.open) { d.open = true; opened = true; }
    const ans = el.closest(".faq-a"), q = ans && ans.previousElementSibling;
    if (q && q.getAttribute("aria-expanded") !== "true") { q.setAttribute("aria-expanded", "true"); opened = true; }
    const svc = el.closest(".service");
    if (svc && el.closest(".more") && !svc.classList.contains("open")) {
      const b = svc.querySelector("button.btn[aria-expanded]");
      b ? b.click() : svc.classList.add("open"); opened = true;
    }
    return opened;
  }
  function goHit(i, onDone) {
    if (!hits.length) return;
    if (!hits[0].isConnected && !highlight(hlTerm)) return onDone && onDone(); // a página redesenhou o conteúdo
    if (hits[hitIdx]) hits[hitIdx].classList.remove("is-current");
    hitIdx = (i + hits.length) % hits.length;
    const h = hits[hitIdx];
    const opened = revealHit(h); h.classList.add("is-current");
    const scroll = () => h.scrollIntoView({ block: "center", inline: "nearest", behavior: smoothScroll() ? "smooth" : "auto" });
    opened ? setTimeout(scroll, 320) : scroll();
    if (onDone) onDone();
  }

  /* página de destino: destaca a palavra pesquisada */
  if (HL_TERM && findBar) {
    const count = findBar.querySelector(".find-count");
    const [prev, next] = findBar.querySelectorAll("[data-find]");
    const show = () => { count.textContent = hits.length ? `${hitIdx + 1} de ${hits.length}` : "Nenhuma ocorrência"; prev.disabled = next.disabled = hits.length < 1; };
    findBar.querySelector(".find-hl b").textContent = `“${HL_TERM}”`;
    prev.addEventListener("click", () => goHit(hitIdx - 1, show));
    next.addEventListener("click", () => goHit(hitIdx + 1, show));
    findBar.querySelector(".find-close").addEventListener("click", () => {
      clearHits(); findBar.remove();
      history.replaceState(null, "", location.pathname + location.hash);
    });
    // espera data.js/pages.js montarem o conteúdo da página
    document.addEventListener("DOMContentLoaded", () => {
      highlight(HL_TERM);
      const id = decodeURIComponent(location.hash.slice(1));
      const target = id && document.getElementById(id);
      const start = target ? Math.max(0, hits.findIndex(h => target.contains(h))) : 0;
      if (hits.length) goHit(start, show); else show();
    });
  }

  /* página inicial: pesquisa em todo o site */
  if (IS_HOME && findBar) {
    const SITE_PAGES = [
      ["index.html", "Início"],
      ["pages/por-onde-comecar.html", "Por onde começar?"],
      ["pages/violencia.html", "Violência"],
      ["pages/contexto.html", "Contexto histórico"],
      ["pages/ciclo.html", "Ciclo da violência"],
      ["pages/rede.html", "Rede de Proteção"],
      ["pages/rede-composicao.html", "Composição da rede"],
      ["pages/noticias.html", "Notícias"],
      ["pages/decisoes.html", "Decisões"],
      ["pages/pesquisas.html", "Pesquisas"],
      ["pages/pesquisa-drogas.html", "Pesquisas"],
      ["pages/pesquisa-saude-mental.html", "Pesquisas"],
      ["pages/pesquisa-homotransfobia.html", "Pesquisas"],
      ["pages/pesquisa-aborto.html", "Pesquisas"],
      ["pages/pesquisa-corrupcao.html", "Pesquisas"],
      ["pages/pesquisa-mulheres-negras-indigenas.html", "Pesquisas"],
      ["pages/duvidas.html", "Dúvidas"]
    ];
    const ordOf = (path) => SITE_PAGES.findIndex(p => p[0] === path);
    const findBtn = header.querySelector("#find-toggle");
    const input = findBar.querySelector("input");
    const count = findBar.querySelector(".find-count");
    const results = findBar.querySelector("#find-results");
    let entries = null, indexing = null, timer;

    const add = (list, ord, label, path, anchor, title, text) => {
      text = String(text || "").replace(/\s+/g, " ").trim(); title = String(title || "").replace(/\s+/g, " ").trim();
      if (!text && !title) return;
      const [n, m] = foldMap(text);
      list.push({ ord, label, path, anchor, title: title || label, text, n, m, nt: fold(title) });
    };
    // junta todos os textos de um item de data.js, sem links, telefones de discagem e imagens
    const flat = (v) => v == null ? "" : typeof v === "object" ? Object.values(v).map(flat).join(" ")
      : /^(https?:|tel:|mailto:|#)|\.(png|jpe?g|svg|webp)$/i.test(String(v)) ? "" : String(v);

    function parsePage(list, html, path, label) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const main = doc.querySelector("main"); if (!main) return;
      const ord = ordOf(path);
      main.querySelectorAll("script, style, svg, noscript, .crumbs, .chip").forEach(e => e.remove());
      main.querySelectorAll("*").forEach(e => e.append(" ")); // evita palavras grudadas entre blocos
      const secs = [...main.querySelectorAll("[id]")].filter(e => e.id !== "conteudo" && !/^t-/.test(e.id) && e.querySelector("h1, h2, h3, h4"));
      secs.forEach(e => e.setAttribute("data-sx", ""));
      secs.forEach(e => {
        const c = e.cloneNode(true); c.querySelectorAll("[data-sx]").forEach(x => x.remove());
        const h = c.querySelector("h1, h2, h3, h4");
        add(list, ord, label, path, e.id, h ? h.textContent : label, c.textContent);
      });
      const rest = main.cloneNode(true); rest.querySelectorAll("[data-sx]").forEach(x => x.remove());
      const h1 = rest.querySelector("h1");
      add(list, ord, label, path, "", h1 ? h1.textContent : label, rest.textContent);
    }
    function addData(list) {
      const cats = window.CATEGORIAS || {};
      (window.SERVICOS || []).forEach(s => add(list, ordOf("pages/rede.html"), "Rede de Proteção", "pages/rede.html", s.id, s.nome,
        flat({ ...s, id: "", nome: "", categoria: cats[s.categoria] || "" })));
      (window.REDE_ORGAOS || []).forEach(o => add(list, ordOf("pages/rede-composicao.html"), "Composição da rede", "pages/rede-composicao.html", o.id, o.nome,
        flat({ ...o, id: "", nome: "" })));
      (window.NOTICIAS || []).forEach(n => add(list, ordOf("pages/noticias.html"), "Notícias", "pages/noticias.html", "", n.titulo,
        flat({ fonte: n.fonte, resumo: n.resumo, pontos: n.pontos, botao: n.botao && n.botao[0] })));
      // mesmos ids de grupo usados em pages.js (FAQ_ID)
      const FAQ_ID = { violencia: "violencia", filhos: "filhos", separacao: "separacao-divorcio", medidas: "medidas-protetivas", direitos: "direitos", rede: "rede-de-protecao" };
      Object.entries(window.FAQ || {}).forEach(([k, g]) => g.itens.forEach(i =>
        add(list, ordOf("pages/duvidas.html"), "Dúvidas · " + g.titulo, "pages/duvidas.html", FAQ_ID[k] || k, i[0], i[1])));
    }
    function buildIndex() {
      if (indexing) return indexing;
      const list = [];
      indexing = Promise.all(SITE_PAGES.map(([path, label]) =>
        fetch(ROOT + path).then(r => r.ok ? r.text() : "").then(html => html && parsePage(list, html, path, label)).catch(() => {})
      )).then(() => { addData(list); list.sort((a, b) => a.ord - b.ord); entries = list; return list; });
      return indexing;
    }

    // marca as ocorrências dentro de um trecho de texto (já escapando o HTML)
    function markText(text, q) {
      const [norm, map] = foldMap(text); let out = "", last = 0, from = 0, pos;
      while ((pos = norm.indexOf(q, from)) !== -1) {
        const st = map[pos], en = map[pos + q.length - 1] + 1;
        out += escH(text.slice(last, st)) + "<mark>" + escH(text.slice(st, en)) + "</mark>";
        last = en; from = pos + q.length;
      }
      return out + escH(text.slice(last));
    }
    function snippet(e, first, q) {
      const t = e.text;
      if (first < 0) return escH(t.slice(0, 150)) + (t.length > 150 ? "…" : "");
      const s = e.m[first];
      let a = Math.max(0, s - 70), b = Math.min(t.length, s + q.length + 110);
      if (a > 0) { const sp = t.indexOf(" ", a); if (sp > -1 && sp < s) a = sp + 1; }
      if (b < t.length) { const sp = t.lastIndexOf(" ", b); if (sp > s + q.length) b = sp; }
      return (a > 0 ? "…" : "") + markText(t.slice(a, b), q) + (b < t.length ? "…" : "");
    }
    function search() {
      const raw = input.value.trim(), q = fold(raw);
      if (q.length < 2) { count.textContent = ""; results.hidden = true; results.innerHTML = ""; return; }
      if (!entries) {
        count.textContent = "Buscando…";
        buildIndex().then(() => { if (fold(input.value.trim()) === q) search(); });
        return;
      }
      const found = [];
      entries.forEach(e => {
        let c = 0, first = -1, p = -1;
        while ((p = e.n.indexOf(q, p + 1)) !== -1) { if (first < 0) first = p; c++; }
        const inTitle = e.nt.includes(q);
        if (c || inTitle) found.push({ e, c, first, score: c + (inTitle ? 10 : 0) });
      });
      found.sort((x, y) => y.score - x.score || x.e.ord - y.e.ord);
      const total = found.reduce((s, r) => s + Math.max(r.c, 1), 0);
      count.textContent = found.length ? `${found.length} ${found.length === 1 ? "resultado" : "resultados"}` : "Nenhum resultado";
      results.hidden = false;
      results.innerHTML = found.length ? `
        <p class="find-sum">${total} ${total === 1 ? "ocorrência" : "ocorrências"} de <b>“${escH(raw)}”</b> no site</p>
        <ul class="find-list">${found.slice(0, 60).map(r => {
          const href = ROOT + r.e.path + "?destaque=" + encodeURIComponent(raw) + (r.e.anchor ? "#" + encodeURIComponent(r.e.anchor) : "");
          return `<li><a class="find-res" href="${escH(href)}">
            <span class="find-res-top"><span class="find-res-page">${escH(r.e.label)}</span>${r.c > 1 ? `<span class="find-res-n">${r.c} ocorrências</span>` : ""}</span>
            <b class="find-res-title">${markText(r.e.title, q)}</b>
            <span class="find-res-snip">${snippet(r.e, r.first, q)}</span>
          </a></li>`; }).join("")}</ul>`
        : `<p class="find-empty">Nada encontrado para <b>“${escH(raw)}”</b>. Tente outra palavra ou escreva de outro jeito.</p>`;
      results.scrollTop = 0;
    }
    function setFind(open) {
      findBar.hidden = !open;
      findBtn.classList.toggle("on", open);
      findBtn.setAttribute("aria-expanded", open);
      findBtn.setAttribute("aria-label", open ? "Fechar pesquisa" : "Pesquisar no site");
      if (open) { setMenu(false); buildIndex(); input.focus(); input.select(); if (input.value.trim()) search(); }
      else { clearTimeout(timer); clearHits(); }
    }
    findBtn.addEventListener("click", () => setFind(findBar.hidden));
    findBar.querySelector(".find-close").addEventListener("click", () => { setFind(false); findBtn.focus(); });
    input.addEventListener("input", () => { clearTimeout(timer); clearHits(); timer = setTimeout(search, 180); });
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") { // Enter abre o primeiro resultado
        e.preventDefault(); clearTimeout(timer); search();
        const first = results.querySelector(".find-res"); if (first) first.click();
      } else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); setFind(false); findBtn.focus(); }
    });
    // resultado da própria página inicial: destaca aqui mesmo, sem recarregar
    results.addEventListener("click", e => {
      const a = e.target.closest(".find-res"); if (!a) return;
      const url = new URL(a.href, location.href);
      const base = (p) => p.replace(/index\.html$/, "");
      if (base(url.pathname) !== base(location.pathname)) return;
      e.preventDefault();
      results.hidden = true;
      highlight(input.value.trim());
      const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
      const start = target ? Math.max(0, hits.findIndex(h => target.contains(h))) : 0;
      goHit(start);
    });
    input.addEventListener("focus", () => { if (results.innerHTML && input.value.trim()) results.hidden = false; });
    document.addEventListener("click", e => { if (!findBar.hidden && !header.contains(e.target)) results.hidden = true; });
  }

  /* ---------- Rodapé + nav inferior (mobile) ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap">
      <section class="footer-form" aria-labelledby="footer-form-t">
        <span class="footer-form-ico">${icon("chat")}</span>
        <div class="footer-form-txt">
          <h3 id="footer-form-t">Sugestões, reclamações e propostas</h3>
          <p>Este espaço é destinado ao envio de sugestões, reclamações, elogios e propostas de integração com a Rede de Proteção à Mulher. Sua participação contribui para aprimorar o atendimento e fortalecer a articulação entre os serviços.</p>
        </div>
        <a class="footer-form-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSetIliGzu6Aidbf4knC2DnAxemHfL6sYmn8mPO0-aoDGAR2fA/viewform" target="_blank" rel="noopener">Enviar mensagem ${icon("arrow")}</a>
      </section>
    </div>
    <div class="wrap footer-grid">
      <div><h3>Rede de Proteção à Mulher</h3>
        <p>Informação também é uma forma de proteção. Projeto de extensão com estudantes de Direito da UCS – Caxias do Sul.</p></div>
      <div><h3>Páginas</h3>${LINKS.map(l => `<a href="${ROOT}${l[2]}">${l[1]}</a>`).join("")}<a href="${ROOT}pages/contexto.html">Contexto histórico</a></div>
      <div><h3>Em emergência</h3><a href="tel:190">190 – Polícia</a><a href="tel:180">180 – Central da Mulher</a><a href="tel:192">192 – SAMU</a></div>
    </div>
    <div class="wrap copy">Este site tem caráter informativo e não substitui orientação jurídica ou atendimento profissional.</div>`;
  body.append(footer);

  const bn = [["inicio", "home", "Início", "index.html"], ["ciclo", "book", "Ciclo", "pages/ciclo.html"], ["rede", "users", "Rede", "pages/rede.html"], ["pesquisas", "chart", "Pesquisas", "pages/pesquisas.html"], ["duvidas", "help", "Dúvidas", "pages/duvidas.html"]];
  const bottom = document.createElement("nav");
  bottom.className = "bottom-nav"; bottom.setAttribute("aria-label", "Navegação inferior");
  bottom.innerHTML = bn.map(b => `<a href="${ROOT}${b[3]}"${cur(b[0])}>${icon(b[1])}<span>${b[2]}</span></a>`).join("");
  body.append(bottom);

  const fab = document.createElement("button");
  fab.className = "fab-help"; fab.type = "button"; fab.setAttribute("aria-label", "Precisa de ajuda?");
  fab.setAttribute("data-open-help", ""); fab.innerHTML = icon("alert");
  body.append(fab);

  /* ---------- Painel "Preciso de ajuda" ---------- */
  const overlay = document.createElement("div");
  overlay.className = "help-overlay";
  overlay.innerHTML = `
    <div class="help-panel" role="dialog" aria-modal="true" aria-labelledby="help-title">
      <button class="help-close" type="button" aria-label="Fechar">${icon("close")}</button>
      <h2 id="help-title">Você não está sozinha.</h2>
      <p>Escolha o caminho que faz mais sentido agora.</p>
      <div class="help-list">
        <a class="help-opt help-opt--urgent" href="tel:190">${icon("alert")}<span><b>Estou em perigo agora</b><small>Ligue 190 (Polícia). Se puder, vá para um lugar seguro.</small></span></a>
        <a class="help-opt" href="tel:180">${icon("chat")}<span><b>Quero conversar com alguém</b><small>Ligue 180 – gratuito, sigiloso, 24 horas.</small></span></a>
        <a class="help-opt" href="${ROOT}pages/rede.html?cat=juridico">${icon("scale")}<span><b>Preciso de orientação jurídica</b><small>Veja Defensoria, DEAM e atendimento gratuito.</small></span></a>
        <a class="help-opt" href="${ROOT}pages/duvidas.html?cat=direitos">${icon("book")}<span><b>Quero entender meus direitos</b><small>Perguntas e respostas sobre seus direitos.</small></span></a>
      </div>
      <p class="help-exit">Precisa sair rápido? <a href="https://www.google.com" id="quick-exit">Sair do site agora</a></p>
    </div>`;
  body.append(overlay);
  let lastFocus = null;
  const openHelp = () => { lastFocus = document.activeElement; overlay.classList.add("open"); body.classList.add("no-scroll"); overlay.querySelector(".help-close").focus(); };
  const closeHelp = () => { overlay.classList.remove("open"); body.classList.remove("no-scroll"); if (lastFocus) lastFocus.focus(); };
  document.addEventListener("click", e => { if (e.target.closest("[data-open-help]")) openHelp(); });
  overlay.querySelector(".help-close").addEventListener("click", closeHelp);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeHelp(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeHelp(); });
  overlay.querySelector("#quick-exit").addEventListener("click", e => { e.preventDefault(); location.replace("https://www.google.com"); });

  /* Dificulta "pegar" imagens marcadas com data-protect: só nelas, sem afetar o resto do site */
  document.querySelectorAll("[data-protect]").forEach(el => {
    ["contextmenu", "dragstart", "selectstart"].forEach(ev => el.addEventListener(ev, e => e.preventDefault()));
  });

  fill(document);
})();
