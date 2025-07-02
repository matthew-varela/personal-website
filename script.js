/* =============================
 *  Configure your projects here
 *  ===========================*/
const projects = [
  {
    title: "ClubHub",
    // TODO: Add a concise, engaging description of ClubHub.
    description: "Description coming soon.",
    github: "https://github.com/matthew-varela/show_clubhub",
  },
  {
    title: "Profit Curve",
    // TODO: Write a short overview of the Profit Curve project.
    description: "Description coming soon.",
    github: "https://github.com/matthew-varela/profit_curve",
  },
  {
    title: "Money Talks",
    subtitle: "Applied Statistical Methods II (STATS 401) · Final Project",
    // TODO: Summarize the Money Talks project and its goals.
    description: "Description coming soon.",
    github: "https://github.com/matthew-varela/money_talks",
  },
  {
    title: "Population Projection",
    subtitle: "Intro to Statistical Computing (DATASCI 306) · Final Project",
    // TODO: Provide details about the population projection analysis.
    description: "Description coming soon.",
    github: "https://github.com/matthew-varela/datasci306_population_projection",
  },
];

const list = document.getElementById("projects");

projects.forEach((p) => {
  const card = document.createElement("section");
  card.className = "project";

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = p.title;

  // Optional subtitle
  if (p.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.className = "project-subtitle";
    subtitle.textContent = p.subtitle;
    card.appendChild(subtitle);
  }

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = p.description;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = p.github;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "View on GitHub →";

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(link);
  list.appendChild(card);
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear(); 