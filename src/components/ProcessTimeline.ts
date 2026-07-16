type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos o domínio, os riscos, as integrações e as restrições reais antes de propor qualquer implementação.",
  },
  {
    step: "02",
    title: "Blueprint",
    description:
      "Transformamos decisões em estrutura: módulos, fluxos, contratos, prioridades e critérios técnicos de evolução.",
  },
  {
    step: "03",
    title: "Construção",
    description:
      "Implementamos com componentes claros, CSS organizado, TypeScript estrito e entregas pequenas o suficiente para validar.",
  },
  {
    step: "04",
    title: "Evolução",
    description:
      "Acompanhamos a maturidade do sistema para que novas demandas sejam absorvidas sem desmontar a base existente.",
  },
];

function renderProcessSteps(): string {
  return processSteps
    .map(
      (item) => `
        <li class="process-step">
          <span class="process-step__number">${item.step}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </li>
      `,
    )
    .join("");
}

export function ProcessTimeline(): string {
  return `
    <section class="section section--process" id="processo" aria-labelledby="process-title">
      <div class="section__inner shell process">
        <div class="process__content">
          <p class="eyebrow">Processo</p>
          <h2 id="process-title">Da visão técnica ao sistema em evolução.</h2>
          <ol class="process-list">
            ${renderProcessSteps()}
          </ol>
        </div>

        <aside class="architecture-card architecture-card--process" aria-label="Modelo de arquitetura da AR Dev Studio">
          <div class="architecture-card__header">
            <span>System Blueprint</span>
            <strong>AR-CORE</strong>
          </div>

          <div class="architecture-map" aria-hidden="true">
            <span class="architecture-node architecture-node--core">Core</span>
            <span class="architecture-node architecture-node--api">API</span>
            <span class="architecture-node architecture-node--data">Data</span>
            <span class="architecture-node architecture-node--ops">Ops</span>
            <span class="architecture-line architecture-line--api"></span>
            <span class="architecture-line architecture-line--data"></span>
            <span class="architecture-line architecture-line--ops"></span>
          </div>

          <div class="architecture-card__footer">
            <span>Design modular</span>
            <span>Observabilidade</span>
            <span>Entrega contínua</span>
          </div>
        </aside>
      </div>
    </section>
  `;
}
