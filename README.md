# Rede de Proteção à Mulher – Caxias do Sul

Site institucional em **HTML, CSS e JavaScript puros** (sem build, sem dependências). Reproduz o mockup de referência: estética minimalista, tons de rosa/malva/vinho, títulos serifados e ícones de traço fino.

## Como abrir

Dê duplo clique em `index.html`, ou use um servidor local (opcional):

```bash
npx serve .
# ou
python -m http.server 8000
```

> As fontes (Newsreader e Montserrat) vêm do Google Fonts; sem internet, o site usa fontes de reserva (Georgia / Segoe UI).

## Estrutura de pastas

```
RedeProtWoman/
├── index.html              Página inicial (hero, 3 caminhos, "Por que existe", 5 cards)
├── pages/
│   ├── violencia.html      Tipos de violência (física, psicológica, sexual, patrimonial, moral)
│   ├── ciclo.html          Ciclo da violência – círculo interativo em 4 etapas
│   ├── contexto.html       Contexto histórico (história, direitos, leis, misoginia, cérebro)
│   ├── rede.html           Rede de proteção – busca + filtros por categoria
│   ├── pesquisas.html      Biblioteca de pesquisas dos estudantes de Direito da UCS
│   └── duvidas.html        FAQ em acordeões, por categoria
├── assets/
│   ├── css/style.css       Todo o visual (tokens de cor no topo, em :root)
│   ├── js/
│   │   ├── main.js         Header, rodapé, nav inferior (mobile), painel "Precisa de ajuda?", ícones
│   │   ├── data.js         **Conteúdo editável**: serviços, pesquisas, perguntas do FAQ
│   │   └── pages.js        Lógica de cada página (ciclo, filtros, busca, acordeão)
│   └── img/                hero.svg, face-line.svg, favicon.svg
└── README.md
```

Cada página define `<body data-page="..." data-root="../">`:
- `data-page` marca o item ativo no menu;
- `data-root` é o caminho até a raiz (`""` na home, `"../"` em `pages/`).

## Como editar o conteúdo

| Quero... | Edite |
|---|---|
| Adicionar/alterar um serviço da rede | `assets/js/data.js` → `SERVICOS` |
| Adicionar uma pesquisa | `assets/js/data.js` → `PESQUISAS` (campo `arquivo` = link do PDF) |
| Alterar perguntas do FAQ | `assets/js/data.js` → `FAQ` |
| Mudar as cores | `assets/css/style.css` → bloco `:root` |
| Mudar o menu | `assets/js/main.js` → lista `LINKS` |
| Textos do ciclo | `assets/js/pages.js` → `STEPS` |

## Funcionalidades

- **Botão "Precisa de ajuda?"**: painel com 4 caminhos rápidos (190, 180, orientação jurídica, direitos) e botão de saída rápida. Disponível no header, no menu mobile e em um botão flutuante no celular.
- **Rede de proteção**: filtros (jurídico, saúde, assistência, acolhimento, segurança, educação), busca por texto e cards com nome, descrição, público, endereço, horário, contato e "Saber mais". Aceita `rede.html?cat=juridico`.
- **Ciclo**: SVG circular com 4 segmentos clicáveis (também por teclado).
- **Responsivo**: desktop (composição do mockup), tablet, e celular com menu hambúrguer, cards em coluna e navegação inferior.
- **Acessibilidade**: link "pular para o conteúdo", foco visível, `aria-*` nos acordeões e no painel, respeito a `prefers-reduced-motion`.

## ⚠️ Pendências antes de publicar

1. **Confirmar dados locais** em `data.js` (endereços, horários e telefones marcados com "confirmar"): DEAM, Defensoria, CREAS, NPJ-UCS etc. Os números nacionais (180, 190, 192) estão corretos.
2. **Substituir as pesquisas de exemplo** (títulos com "EXEMPLO") pelas reais.
3. **Imagem do hero**: `hero.svg` é uma ilustração própria aproximando o mockup. Para usar uma fotografia/arte final, troque o arquivo mantendo o mesmo nome (ou ajuste o `src` em `index.html`).
4. Revisar os textos jurídicos e do "Contexto histórico" com a orientação do projeto.
