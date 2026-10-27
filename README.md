# Portfolio personale – Federica Mastropietro

Sito portfolio personale realizzato come progetto di start2impact.
Sito online: https://federicamastropietro25.github.io/portfolio-federica-mastropietro/

## Pagine
Home, Chi sono, Portfolio, CV, Contatti.

## Tecnologie
- HTML semantico e CSS scritto in Sass (SCSS), compilato in un solo file
- Bootstrap (solo CSS, da CDN) per le colonne della pagina e alcune classi di supporto
- Flexbox e CSS Grid per la disposizione degli elementi
- EmailJS per l'invio del modulo di contatto (unico JavaScript del sito)

## Scelte principali
- Mobile first, con un solo breakpoint a 768px
- Layout fluido: nessuno scatto mentre si ridimensiona la finestra
- Menu hamburger solo CSS, senza JavaScript
- Accessibilità: HTML semantico, ARIA, focus visibile, contrasti AA, rispetto di prefers-reduced-motion
- Immagini WebP in più larghezze (srcset e sizes)
- Design realizzati in Figma

## Struttura
- `index.html`, `chi-sono.html`, `portfolio.html`, `cv.html`, `contatti.html`
- `assets/sass` sorgenti SCSS, `assets/css/style.css` CSS compilato
- `assets/immagini`, `assets/icone`, `assets/favicon`, `assets/pdf`, `assets/js`

Per modificare gli stili si lavora in `assets/sass` e si compila in `assets/css/style.css` (estensione Live Sass Compiler di VS Code).

## Autrice
Federica Mastropietro – https://www.linkedin.com/in/federica-mastropietro/
