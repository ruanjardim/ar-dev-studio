type ConversionStep = {
  title: string;
  description: string;
};

const conversionSteps: ConversionStep[] = [
  {
    title: "Entender",
    description:
      "Mapeamos objetivo, p&uacute;blico, opera&ccedil;&atilde;o e restri&ccedil;&otilde;es do projeto.",
  },
  {
    title: "Desenhar",
    description:
      "Organizamos escopo, arquitetura, interface e prioridades de entrega.",
  },
  {
    title: "Construir",
    description:
      "Desenvolvemos a solu&ccedil;&atilde;o com base clara, responsiva e sustent&aacute;vel.",
  },
  {
    title: "Evoluir",
    description:
      "Ajustamos, mantemos e preparamos novas etapas sem perder organiza&ccedil;&atilde;o.",
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
          <p class="eyebrow">Processo resumido</p>
          <h2 id="conversion-title">Arquitetura antes do c&oacute;digo. Evolu&ccedil;&atilde;o al&eacute;m da entrega.</h2>
          <p>
            O processo completo pode ganhar uma p&aacute;gina pr&oacute;pria depois.
            Na Home, ele aparece como uma linha simples de trabalho.
          </p>
        </div>

        <ol class="conversion-list" aria-label="Caminho de trabalho da AR Dev Studio">
          ${renderConversionSteps()}
        </ol>
      </div>
    </section>
  `;
}
