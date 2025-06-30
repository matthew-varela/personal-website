# Personal Portfolio Website

A minimalistic, brutalist single-page portfolio to showcase your projects.

## 📂 Structure

```
personal_website/
├── index.html      # Main HTML structure
├── styles.css      # Visual design
├── script.js       # Project data + small helpers
└── README.md       # This file
```

## 🚀 Usage

1. Open `index.html` in any modern web browser to view the site locally.
2. To add or edit projects, open `script.js` and modify the `projects` array:
   ```js
   const projects = [
     {
       title: "Project Name",
       description: "Short tagline describing what it does.",
       github: "https://github.com/your-username/project-repo",
     },
     // ...more
   ];
   ```
3. Commit & push these files to a GitHub repository.
4. Enable [GitHub Pages](https://pages.github.com/) (branch: `main`, folder: `/root`) to deploy.

## ✨ Customization Tips

• **Colors & Fonts** — Adjust the `:root` variables at the top of `styles.css`.

• **Dark mode** — This design automatically adapts to the system dark-mode preference.

• **Analytics / Scripts** — Add extra `<script>` tags in `index.html` as needed.

## License

MIT — free to adapt & share.

## ☁️ Deploy to Heroku

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and log in:
   ```bash
   heroku login
   ```
2. From the **root of this project** (`personal_website/` outer folder), create an app:
   ```bash
   heroku create my-portfolio-site
   ```
3. Commit your changes and push to Heroku:
   ```bash
   git add .
   git commit -m "Deploy portfolio to Heroku"
   git push heroku main  # or master depending on your branch name
   ```
4. Open your live site:
   ```bash
   heroku open
   ```

Heroku automatically detects the `package.json`, installs dependencies, and runs `web: node server.js` as specified in the `Procfile`. The Express server serves the static files found in the nested `personal_website/` directory.

--- 