type MaturitySignal = {
  value: string;
  label: string;
  description: string;
};

const maturitySignals: MaturitySignal[] = [
  {
    value: "Menos retrabalho",
    label: "Decisões explícitas",
    description:
      "Arquitetura documentada reduz dependência de memória individual e deixa o próximo ciclo mais previsível.",
  },
  {
    value: "Mais autonomia",
    label: "Componentes claros",
    description:
      "Estruturas pequenas e nomeadas permitem evolução por partes, sem reabrir a página inteira a cada mudança.",
  },
  {
    value: "Melhor continuidade",
    label: "Base operacional",
    description:
      "Build, versionamento e documentação sustentam manutenção, onboarding e novas entregas com menos ruído.",
  },
];

function renderMaturitySignals(): string {
  return maturitySignals
    .map(
      (signal) => `
        <article class="maturity-card">
          <strong>${signal.value}</strong>
          <span>${signal.label}</span>
          <p>${signal.description}</p>
        </article>
      `,
    )
    .join("");
}

export function MaturitySignals(): string {
  return `
    <section class="section section--maturity" id="maturidade" aria-labelledby="maturity-title">
      <div class="section__inner shell">
        <div class="section-heading">
          <p class="eyebrow">Maturidade</p>
          <h2 id="maturity-title">O valor aparece quando o sistema precisa mudar.</h2>
        </div>

        <div class="maturity-grid">
          ${renderMaturitySignals()}
        </div>
      </div>
    </section>
  `;
}
