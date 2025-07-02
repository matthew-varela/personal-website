/* =============================
 *  Configure your projects here
 *  ===========================*/
const projects = [
  {
    title: "ClubHub",
    // TODO: Add a concise, engaging description of ClubHub.
    description: "A campus-club discovery engine built from the ground up. ClubHub lets Wolverines browse every registered student org, get instant matches based on interests, and track attendance metrics. Dual Java / Python micro-services power a snappy React UI, while Docker and GitHub Actions keep deployments effortless.",
    github: "https://github.com/matthew-varela/show-clubhub",
  },
  {
    title: "Profit Curve",
    // TODO: Write a short overview of the Profit Curve project.
    description: "Profit Curve ingests SEC filings and price data, distills 200+ financial indicators, and feeds them into a TensorFlow model that forecasts two-month excess returns. The modular ETL-to-ML pipeline is fully automated; daily cron runs refresh features, retrain, and push signals to an S3-backed API.",
    github: "https://github.com/matthew-varela/profit-curve",
  },
  {
    title: "Money Talks",
    subtitle: "Applied Statistical Methods II (STATS 401) · Final Project",
    // TODO: Summarize the Money Talks project and its goals.
    description: "In this applied-statistics capstone, we modeled FIFA 23 player wages using a log-linear regression enriched with footedness interactions. The model explains a third of salary variance and reveals that creative skills—passing and dribbling—are the true pay drivers, not raw pace.",
    github: "https://github.com/matthew-varela/money-talks",
  },
  {
    title: "Population Projection",
    subtitle: "Intro to Statistical Computing (DATASCI 306) · Final Project",
    // TODO: Provide details about the population projection analysis.
    description: "Our five-person data-story dug into the UN’s 2024 population revision. After rigorous cleaning we replicated official charts, added 12 novel visual insights, and built a baseline forecast challenging the UN median, spotlighting how fertility decline could keep 2100 population below 9 B.",
    github: "https://github.com/matthew-varela/population-projection",
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