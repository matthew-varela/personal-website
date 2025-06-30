/* =============================
 *  Configure your projects here
 *  ===========================*/
const projects = [
  {
    title: "Projects", // Example entry
    description: "Source code and design notes for this portfolio site.",
    github: "https://github.com/matthew-varela/personal-website",
  },
  {
    title: "Some ML Stuff",
    description: "An exploration of machine learning techniques for time-series data.",
    github: "https://github.com/matthew-varela/profit_curve",
  },
  // Add more projects as desired ⬆️
];

const list = document.getElementById("projects");

projects.forEach((p) => {
  const card = document.createElement("section");
  card.className = "project";

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = p.title;

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