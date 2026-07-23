type Project = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  href: string;
  variant: string;
};

const projects: Project[] = [
  {
    name: "VetFlow",
    category: "Produto digital",
    description:
      "ERP modular para cl&iacute;nicas veterin&aacute;rias, pet shops e opera&ccedil;&otilde;es com m&uacute;ltiplas unidades.",
    highlights: ["Laravel", "Multi-cl&iacute;nica", "Gest&atilde;o integrada"],
    href: "https://github.com/ruanjardim/VetFlow",
    variant: "vetflow",
  },
  {
    name: "H&eacute;lio Chaveiro",
    category: "Site comercial",
    description:
      "Presen&ccedil;a digital voltada a atendimento regional, servi&ccedil;os automotivos e convers&atilde;o direta.",
    highlights: ["Performance", "SEO local", "Convers&atilde;o"],
    href: "https://github.com/ruanjardim/helio-chaveiro",
    variant: "helio",
  },
  {
    name: "Priscila Moraes",
    category: "Site profissional",
    description:
      "Projeto institucional criado para apresentar identidade, trabalho e contato de forma clara.",
    highlights: ["Identidade", "Responsivo", "Institucional"],
    href: "https://github.com/ruanjardim/site-priscila",
    variant: "priscila",
  },
];

function renderProjects(): string {
  return projects
    .map(
      (project, index) => `
        <article class="project-card project-card--${project.variant}">
          <div class="project-card__visual" aria-hidden="true">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${project.name.charAt(0)}</strong>
          </div>

          <div class="project-card__content">
            <span class="project-card__category">${project.category}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <ul class="project-card__tags" aria-label="Destaques de ${project.name}">
              ${project.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
            </ul>
            <a
              class="project-card__link"
              href="${project.href}"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver ${project.name} no GitHub (abre em nova aba)"
            >
              Ver projeto
              <span aria-hidden="true">&nearr;</span>
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

export function Projects(): string {
  return `
    <section class="section section--projects" id="projetos" aria-labelledby="projects-title">
      <div class="section__inner shell">
        <div class="section-heading projects-heading">
          <p class="eyebrow">Projetos em evolu&ccedil;&atilde;o</p>
          <h2 id="projects-title">Produtos constru&iacute;dos com contexto, engenharia e continuidade.</h2>
          <p>Conhe&ccedil;a algumas solu&ccedil;&otilde;es que estamos transformando em produto.</p>
        </div>

        <div class="projects-grid">
          ${renderProjects()}
        </div>
      </div>
    </section>
  `;
}
