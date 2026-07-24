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
├── css/                    # CSS modular
│   ├── main.css            # Entry point (importa módulos)
│   ├── _variables.css      # Custom properties
│   ├── _reset.css          # Reset
│   ├── _typography.css     # Tipografia
│   ├── _star.css           # Efeito estrelas
│   ├── _header.css         # Header
│   ├── _nav.css            # Navegação
│   ├── _card.css           # Cards de projetos
│   ├── _contact.css        # Contato
│   ├── _backtotop.css      # Voltar ao topo
│   ├── _layout.css         # Layout geral
│   └── _responsive.css     # Media queries
├── js/
│   ├── main.js             # Entry point JS
│   └── stars.js            # Animação de estrelas
├── imgs/                   # Imagens
├── public/
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO
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