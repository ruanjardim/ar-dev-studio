type DiagnosticSignal = {
  title: string;
  description: string;
};

const diagnosticSignals: DiagnosticSignal[] = [
  {
    title: "O sistema cresceu sem mapa claro",
    description:
      "Funcionalidades foram sendo adicionadas, mas regras, módulos e integrações já não parecem fáceis de entender ou mudar.",
  },
  {
    title: "A operação depende de processos manuais",
    description:
      "Times repetem rotinas, conferências e repasses que poderiam ser integrados ao fluxo digital do produto.",
  },
  {
    title: "A próxima versão exige base mais sólida",
    description:
      "Antes de escalar produto, equipe ou integrações, é preciso reduzir risco técnico e definir uma direção arquitetural.",
  },
];

function renderDiagnosticSignals(): string {
  return diagnosticSignals
    .map(
      (signal) => `
        <article class="diagnostic-card">
          <h3>${signal.title}</h3>
          <p>${signal.description}</p>
        </article>
      `,
    )
    .join("");
}

export function DiagnosticFit(): string {
  return `
    <section class="section section--diagnostic" id="diagnostico" aria-labelledby="diagnostic-title">
      <div class="section__inner shell diagnostic">
        <div class="section-heading">
          <p class="eyebrow">Diagnóstico</p>
          <h2 id="diagnostic-title">Quando arquitetura deixa de ser detalhe e vira prioridade.</h2>
          <p>
            A AR Dev Studio entra quando o software precisa sustentar decisões de
            negócio, reduzir improviso e criar uma base técnica que acompanhe a evolução.
          </p>
        </div>

        <div class="diagnostic-grid">
          ${renderDiagnosticSignals()}
        </div>
      </div>
    </section>
  `;
}
