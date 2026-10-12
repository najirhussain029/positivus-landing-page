# Positivus Landing Page

A responsive digital marketing agency landing page built with HTML, CSS, and vanilla JavaScript.

## Features

- Responsive navigation for desktop and mobile
- Hero section, service cards, and case studies
- Interactive working-process accordion
- Team profiles and testimonial slider
- Contact and newsletter forms with demo confirmation messages
- Custom SVG illustrations and team portraits
- No build step or third-party JavaScript dependencies

## Run locally

Open the repository with Visual Studio Code and start an HTTP server from the project root, for example with the Live Server extension. Then open the local URL it provides.

Serving the page over HTTP is recommended because the JavaScript files use ES modules.

## Project structure

```text
.
├── index.html
├── css/
│   ├── style.css
│   ├── base.css
│   ├── components.css
│   ├── header.css
│   ├── hero.css
│   ├── services.css
│   ├── cta.css
│   ├── case-studies.css
│   ├── process.css
│   ├── team.css
│   ├── testimonials.css
│   ├── contact.css
│   ├── footer.css
│   └── responsive.css
├── images/
└── js/
    ├── script.js
    ├── menu.js
    ├── accordion.js
    ├── testimonials.js
    ├── contact-form.js
    └── newsletter.js
```

`style.css` and `script.js` are the entry files. They load the corresponding section styles and JavaScript modules.

## Live Demo

https://positivus-landing-page-orcin.vercel.app/

## Deployment

The site is deployed on Vercel and connected to this GitHub repository. Every push to the `main` branch automatically triggers a new deployment. No build step is required because the project is plain HTML, CSS, and JavaScript.

## Notes

- The contact and newsletter forms are front-end demos. They show a confirmation message but do not send or store submissions.
- Design reference: Positivus landing page (Figma), built as a practice task.
