type Technology = {
  name: string;
  slug: string;
  logo: string;
  mark: string;
};

const techIconBase = `${import.meta.env.BASE_URL}tech-icons`;

const technologyRows: Technology[][] = [
  [
    { name: "TypeScript", slug: "typescript", logo: "typescript.svg", mark: "TS" },
    { name: "React", slug: "react", logo: "react.svg", mark: "RE" },
    { name: "Vue", slug: "vue", logo: "vue.svg", mark: "VU" },
    { name: "Node.js", slug: "nodejs", logo: "nodejs.svg", mark: "JS" },
    { name: "Laravel", slug: "laravel", logo: "laravel.svg", mark: "LA" },
    { name: "PHP", slug: "php", logo: "php.svg", mark: "PHP" },
    { name: "Python", slug: "python", logo: "python.svg", mark: "PY" },
    { name: "Django", slug: "django", logo: "django.svg", mark: "DJ" },
  ],
  [
    { name: "PostgreSQL", slug: "postgresql", logo: "postgresql.svg", mark: "PG" },
    { name: "MySQL", slug: "mysql", logo: "mysql.svg", mark: "MY" },
    { name: "Redis", slug: "redis", logo: "redis.svg", mark: "RD" },
    { name: "Docker", slug: "docker", logo: "docker.svg", mark: "DK" },
    { name: "AWS", slug: "aws", logo: "aws.svg", mark: "AWS" },
    { name: "Azure", slug: "azure", logo: "azure.svg", mark: "AZ" },
    { name: "GitHub Actions", slug: "github-actions", logo: "github-actions.svg", mark: "GH" },
    { name: "Vite", slug: "vite", logo: "vite.svg", mark: "VI" },
  ],
];

function renderTechnologySet(technologies: Technology[], hidden = false): string {
  return `
    <div class="technology-set" ${hidden ? 'aria-hidden="true"' : ""}>
      ${technologies
        .map(
          (technology) => `
            <span class="technology-pill technology-pill--${technology.slug}">
              <i
                class="technology-pill__logo"
                aria-hidden="true"
                style="--technology-logo: url('${techIconBase}/${technology.logo}')"
              >
                <span>${technology.mark}</span>
              </i>
              <strong>${technology.name}</strong>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRows(): string {
  return technologyRows
    .map(
      (technologies, index) => `
        <div class="technology-marquee technology-marquee--${index === 0 ? "forward" : "reverse"}">
          <div class="technology-track">
            ${renderTechnologySet(technologies)}
            ${renderTechnologySet(technologies, true)}
          </div>
        </div>
      `,
    )
    .join("");
}

export function TechnologyMarquee(): string {
  return `
    <section class="section section--technologies" id="tecnologias" aria-labelledby="technologies-title">
      <div class="shell technology-heading">
        <p class="eyebrow">Tecnologias que utilizamos</p>
        <h2 id="technologies-title">A melhor tecnologia para o problema certo.</h2>
        <p>Stack atual, automa&ccedil;&atilde;o e infraestrutura escolhidas pela necessidade do produto.</p>
      </div>

      <div class="technology-marquees" aria-label="Tecnologias utilizadas pela AR Dev Studio">
        ${renderRows()}
      </div>
    </section>
  `;
}
