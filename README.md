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
│   ├── por-onde-comecar.html  Passo a passo para buscar ajuda (acolhimento, cível/criminal, medidas protetivas, abrigo)
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
│   └── img/                logo-completa.svg, logo-icone.svg, mulher-traco.svg, hero-mulher.webp, favicon.svg
└── README.md
```

Cada página define `<body data-page="..." data-root="../">`:
- `data-page` marca o item ativo no menu;
- `data-root` é o caminho até a raiz (`""` na home, `"../"` em `pages/`).

## Conteúdo editorial (PDFs)

Os textos das páginas **Violência** e **Ciclo** vêm de PDFs fornecidos pela equipe do projeto. Estão escritos direto no HTML de cada página, com blocos "Fontes" recolhíveis (`<details class="sources">`) no fim de cada seção.

| Página | Seção | PDF de origem |
|---|---|---|
| `pages/violencia.html` | Contexto histórico | Contexto histórico |
| `pages/violencia.html` | Quando as coisas começam a mudar (linha do tempo) | Violência contra a Mulher: quando as coisas começam a mudar |
| `pages/violencia.html` | Diferentes classes sociais | violência contra a mulher: diferentes classes sociais |
| `pages/violencia.html` | Misoginia | Misoginia |
| `pages/ciclo.html` | As quatro fases | Ciclo da violência |

Regras seguidas: texto fiel aos PDFs, sem acrescentar dados, leis ou telefones; resíduos de cópia (como `cite turn0search0`, caracteres `￼` e `?utm_source=chatgpt.com` nos links) removidos.

## Como editar o conteúdo

| Quero... | Edite |
|---|---|
| Adicionar/alterar um serviço da rede | `assets/js/data.js` → `SERVICOS` (o formato está explicado no topo da lista) |
| Adicionar uma pesquisa | `assets/js/data.js` → `PESQUISAS` (campo `arquivo` = link do PDF) |
| Alterar perguntas do FAQ | `assets/js/data.js` → `FAQ` |
| Trocar logo, ilustração ou foto do hero | `assets/img/` (mesmos nomes de arquivo) |
| Mudar as cores | `assets/css/style.css` → bloco `:root` |
| Mudar o menu e os dropdowns | `assets/js/main.js` → constante `NAV` (cada `sub` é uma seção da página; o `id` precisa existir) |
| Textos do ciclo | `assets/js/pages.js` → `STEPS` |

## Funcionalidades

- **Botão "Precisa de ajuda?"**: painel com 4 caminhos rápidos (190, 180, orientação jurídica, direitos) e botão de saída rápida. Disponível no header, no menu mobile e em um botão flutuante no celular.
- **Rede de proteção**: filtros (jurídico, saúde, assistência, acolhimento, segurança, educação), busca por texto e cards com nome, descrição, público, endereço, horário, contato e "Saber mais". Aceita `rede.html?cat=juridico`.
- **Ciclo**: SVG circular com 4 segmentos clicáveis (também por teclado).
- **Responsivo**: desktop (composição do mockup), tablet, e celular com menu hambúrguer, cards em coluna e navegação inferior.
  - Breakpoints: `1080px` (notebook pequeno), `900px` (tablet, menu hambúrguer), `680px` (celular), `380px` (celular pequeno) e modo paisagem.
  - Alvos de toque de 44px ou mais em telas touch, filtros com rolagem horizontal, painel de ajuda como *bottom sheet*, menu que fecha ao tocar fora, suporte a *notch* (`safe-area-inset`) e campos de 16px para evitar zoom no iOS.
- **Acessibilidade**: link "pular para o conteúdo", foco visível, `aria-*` nos acordeões e no painel, respeito a `prefers-reduced-motion`.

## ⚠️ Pendências antes de publicar

1. **Confirmar dados locais** em `data.js` (endereços, horários e telefones marcados com "confirmar"): DEAM, Defensoria, CREAS, NPJ-UCS etc. Os números nacionais (180, 190, 192) estão corretos.
2. **Substituir as pesquisas de exemplo** (títulos com "EXEMPLO") pelas reais.
3. **Imagem do hero**: `assets/img/hero-mulher.webp` tem 448×384 px e fica um pouco suave em telas grandes; se houver uma versão de maior resolução, substitua mantendo o nome do arquivo.
4. Revisar os textos jurídicos e do "Contexto histórico" com a orientação do projeto.

## Dados pendentes: `[A CONFIRMAR]`

Dados ainda não verificados aparecem na tela com um marcador amarelo **A CONFIRMAR**.
Para resolver: troque o texto pelo dado confirmado e apague o marcador. Pendente hoje: o link da **Delegacia Online da Mulher** (em `pages/por-onde-comecar.html`, há um comentário `TODO` com o código para trocar).
Endereço (Google Maps), telefone (`tel:`) e horário dos serviços ficam em `assets/js/data.js`.
