type QualificationProfile = {
  code: string;
  title: string;
  description: string;
  signals: string[];
};

const qualificationProfiles: QualificationProfile[] = [
  {
    code: "Q01",
    title: "Sistema com papel operacional",
    description:
      "Quando o software precisa organizar fluxo, dados e decis&otilde;es que impactam a rotina da empresa.",
    signals: ["Processo recorrente", "Regra de neg&oacute;cio", "Uso por time"],
  },
  {
    code: "Q02",
    title: "Produto que precisa evoluir",
    description:
      "Quando a primeira vers&atilde;o n&atilde;o basta e a base precisa suportar novas features, integra&ccedil;&otilde;es e escala.",
    signals: ["Roadmap ativo", "M&oacute;dulos futuros", "Base extens&iacute;vel"],
  },
  {
    code: "Q03",
    title: "Base existente com risco t&eacute;cnico",
    description:
      "Quando um sistema j&aacute; funciona, mas a evolu&ccedil;&atilde;o ficou lenta, fr&aacute;gil ou dependente de improvisos.",
    signals: ["D&iacute;vida t&eacute;cnica", "Integra&ccedil;&otilde;es", "Refatora&ccedil;&atilde;o"],
  },
];

function renderQualificationProfiles(): string {
  return qualificationProfiles
    .map(
      (profile) => `
        <article class="qualification-card">
          <span class="qualification-card__code">${profile.code}</span>
          <h3>${profile.title}</h3>
          <p>${profile.description}</p>
          <ul class="qualification-card__signals" aria-label="Sinais de ${profile.title}">
            ${profile.signals.map((signal) => `<li>${signal}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

export function ProjectQualification(): string {
  return `
    <section class="section section--qualification" id="perfil" aria-labelledby="qualification-title">
      <div class="section__inner shell qualification">
        <div class="section-heading">
          <p class="eyebrow">Perfil de projeto</p>
          <h2 id="qualification-title">A melhor conversa come&ccedil;a quando existe responsabilidade de sistema.</h2>
          <p>
            A AR Dev Studio atua melhor quando a decis&atilde;o n&atilde;o &eacute; apenas visual,
            mas envolve arquitetura, continuidade e impacto real na opera&ccedil;&atilde;o.
          </p>
        </div>

        <div class="qualification-board">
          ${renderQualificationProfiles()}
        </div>

        <aside class="qualification-note" aria-label="Como iniciamos um projeto">
          <span>Antes do or&ccedil;amento</span>
          <p>
            O diagn&oacute;stico inicial organiza contexto, risco e prioridade para transformar a
            conversa em dire&ccedil;&atilde;o t&eacute;cnica clara.
          </p>
        </aside>
      </div>
    </section>
  `;
}
