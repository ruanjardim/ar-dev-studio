type DeliveryStep = {
  title: string;
  description: string;
  output: string;
};

const deliverySteps: DeliveryStep[] = [
  {
    title: "Diagn&oacute;stico",
    description: "Entendemos produto, usu&aacute;rio, c&oacute;digo atual e risco de neg&oacute;cio.",
    output: "Contexto organizado",
  },
  {
    title: "Blueprint",
    description: "Definimos arquitetura, prioridades e o plano da evolu&ccedil;&atilde;o.",
    output: "Dire&ccedil;&atilde;o t&eacute;cnica",
  },
  {
    title: "Constru&ccedil;&atilde;o",
    description: "Implementamos em ciclos curtos, com qualidade e visibilidade.",
    output: "Software funcional",
  },
  {
    title: "Valida&ccedil;&atilde;o",
    description: "Cada marco pode ser apresentado em v&iacute;deo, com decis&otilde;es e evid&ecirc;ncias.",
    output: "Entrega audit&aacute;vel",
  },
  {
    title: "Evolu&ccedil;&atilde;o",
    description: "Medimos, sustentamos e ampliamos o produto sem perder coer&ecirc;ncia.",
    output: "Pr&oacute;ximo ciclo",
  },
];

function renderDeliverySteps(): string {
  return deliverySteps
    .map(
      (step, index) => `
        <li class="delivery-step">
          <span class="delivery-step__index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
            <strong>${step.output}</strong>
          </div>
        </li>
      `,
    )
    .join("");
}

export function ConversionPath(): string {
  return `
    <section class="section section--delivery-path" id="processo" aria-labelledby="delivery-path-title">
      <div class="section__inner shell delivery-path">
        <div class="section-heading section-heading--wide">
          <p class="eyebrow">Processo de entrega</p>
          <h2 id="delivery-path-title">Clareza em cada decis&atilde;o. Evid&ecirc;ncia em cada entrega.</h2>
          <p>Voc&ecirc; acompanha o que foi constru&iacute;do, por que foi decidido e o que vem depois.</p>
        </div>

        <ol class="delivery-track" aria-label="Processo de entrega da AR Dev Studio">
          ${renderDeliverySteps()}
        </ol>
      </div>
    </section>
  `;
}
