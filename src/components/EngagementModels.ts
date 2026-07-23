type EngagementModel = {
  code: string;
  title: string;
  description: string;
  ideal: string;
};

const engagementModels: EngagementModel[] = [
  {
    code: "01",
    title: "Projeto fechado",
    description: "Escopo, entregas e responsabilidade definidos para resolver um objetivo claro.",
    ideal: "Ideal para: produto ou evolu&ccedil;&atilde;o com fronteira definida",
  },
  {
    code: "02",
    title: "Squad dedicada",
    description: "Capacidade multidisciplinar integrada ao seu contexto, com lideran&ccedil;a e cad&ecirc;ncia.",
    ideal: "Ideal para: roadmap cont&iacute;nuo e m&uacute;ltiplas frentes",
  },
  {
    code: "03",
    title: "Consultoria especializada",
    description: "Apoio s&ecirc;nior para arquitetura, auditoria, decis&otilde;es cr&iacute;ticas e desbloqueio t&eacute;cnico.",
    ideal: "Ideal para: diagn&oacute;stico, review e dire&ccedil;&atilde;o",
  },
];

function renderModels(): string {
  return engagementModels
    .map(
      (model) => `
        <article class="engagement-card">
          <span>${model.code}</span>
          <h3>${model.title}</h3>
          <p>${model.description}</p>
          <strong>${model.ideal}</strong>
        </article>
      `,
    )
    .join("");
}

export function EngagementModels(): string {
  return `
    <section class="section section--engagement" id="modelos" aria-labelledby="engagement-title">
      <div class="section__inner shell">
        <div class="section-heading section-heading--wide">
          <p class="eyebrow">Terceiriza&ccedil;&atilde;o e capacidade t&eacute;cnica</p>
          <h2 id="engagement-title">Terceirize a execu&ccedil;&atilde;o, n&atilde;o a responsabilidade.</h2>
          <p>Escolhemos o formato que melhor se encaixa no momento do produto e no resultado esperado.</p>
        </div>

        <div class="engagement-grid">
          ${renderModels()}
        </div>

        <div class="specialty-strip" aria-label="Especialidades dispon&iacute;veis">
          <span>Full-stack</span><i></i><span>Front-end</span><i></i><span>Back-end</span><i></i>
          <span>QA</span><i></i><span>UX/UI</span><i></i><span>DevOps</span><i></i><span>Arquitetura</span>
        </div>
      </div>
    </section>
  `;
}
