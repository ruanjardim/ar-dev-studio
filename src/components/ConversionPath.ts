type ConversionStep = {
  title: string;
  description: string;
};

const conversionSteps: ConversionStep[] = [
  {
    title: "Contexto",
    description:
      "Você apresenta o produto, sistema atual, operação e principal tensão técnica.",
  },
  {
    title: "Diagnóstico",
    description:
      "Mapeamos riscos, prioridades, integrações, limites e pontos de evolução.",
  },
  {
    title: "Blueprint",
    description:
      "Transformamos o diagnóstico em direção arquitetural e plano de execução.",
  },
  {
    title: "Entrega",
    description:
      "Implementamos a primeira evolução com critérios claros e base preparada para continuidade.",
  },
];

function renderConversionSteps(): string {
  return conversionSteps
    .map(
      (step, index) => `
        <li class="conversion-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        </li>
      `,
    )
    .join("");
}

export function ConversionPath(): string {
  return `
    <section class="section section--conversion" id="caminho" aria-labelledby="conversion-title">
      <div class="section__inner shell conversion">
        <div class="section-heading">
          <p class="eyebrow">Caminho de trabalho</p>
          <h2 id="conversion-title">O primeiro contato já começa organizando decisão.</h2>
        </div>

        <ol class="conversion-list" aria-label="Caminho de trabalho da AR Dev Studio">
          ${renderConversionSteps()}
        </ol>
      </div>
    </section>
  `;
}
