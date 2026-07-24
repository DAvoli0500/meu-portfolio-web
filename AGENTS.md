# AGENTS.md

## Stack

- Vanilla HTML/CSS/JS — no framework, no build step.
- Hosted on GitHub Pages via `https://davoli0500.github.io/meu-portfolio-web/`.

## Entrypoints

- `index.html` — única página.
- `src/styles/main.css` — entry point CSS (agrega módulos via `@import`).
- `src/scripts/main.js` — entry point JS (carrega `stars.js` que define `criarEstrelas()`).

## Dev Commands

```bash
# Local dev server
npx live-server . --port=3000 --no-browser
```

## Structure

```
index.html                 # Página principal
src/styles/                # CSS modular (base/, components/, layout/)
src/scripts/               # JS modular (utils/stars.js)
public/                    # Manifest, robots.txt, assets
.github/workflows/         # Deploy automático no push para main
```

## Conventions

- CSS usa Custom Properties (`:root` em `_variables.css`).
- JS é carregado com múltiplos `<script>` tags (sem ES modules).
- TODAS as imagens são PNG — nenhum WebP/AVIF usado.
- Ícones via Font Awesome (CDN, preconnect configurado).
- Links externos usam `target="_blank"` e `rel="noopener"`.
- Seções HTML têm `aria-label` para acessibilidade.

## Deployment

- Push para `main` → GitHub Actions deploya para GitHub Pages.
- Workflow em `.github/workflows/deploy.yml`.
- Nenhum build step necessário (site puramente estático).