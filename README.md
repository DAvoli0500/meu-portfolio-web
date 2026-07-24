# Meu Portfólio Web

Portfólio pessoal de **Lucas Vital Davoli** — Desenvolvedor Front-End.

## Tecnologias

- HTML5 semântico
- CSS3 (Custom Properties, Grid, Flexbox, Design Responsivo)
- JavaScript puro (Vanilla JS)
- Font Awesome 6
- GitHub Pages (deploy)

## Estrutura

```
├── index.html              # Página principal
├── src/
│   ├── styles/             # CSS modular
│   │   ├── base/           # Variáveis, reset, tipografia
│   │   ├── components/     # Header, nav, cards, contato
│   │   ├── layout/         # Layout geral e responsivo
│   │   └── main.css        # Entry point (agrega módulos)
│   └── scripts/
│       ├── utils/stars.js  # Efeito de estrelas animadas
│       └── main.js         # Entry point JS
├── public/
│   ├── assets/             # Imagens, ícones, fontes
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO
├── css/                    # CSS legado (monolítico)
├── js/                     # JS legado
├── imgs/                   # Imagens legado
└── .github/workflows/      # CI/CD para GitHub Pages
```

## Comandos

```bash
# Servidor local de desenvolvimento
npx live-server . --port=3000 --no-browser
```

## Deploy

O deploy é automático via GitHub Actions ao fazer push na branch `main`.

## Links

- [GitHub](https://github.com/DAvoli0500)
- [LinkedIn](https://www.linkedin.com/in/lucas-vital-davoli-8171a2300/)