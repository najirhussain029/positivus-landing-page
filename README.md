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

## Deploy to GitHub Pages

The included GitHub Actions workflow deploys the static site when changes are pushed to `main`.

1. Open the repository's **Settings → Pages**.
2. Set the build and deployment source to **GitHub Actions**.
3. Push a change to `main` or manually run the **Deploy to GitHub Pages** workflow from the **Actions** tab.

After the first successful deployment, GitHub Pages will show the published site URL in **Settings → Pages**.

## Notes

The contact and newsletter forms are front-end demos. They show a confirmation message but do not send or store submissions.
