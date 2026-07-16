const deliveryCapabilities = [
  "Arquitetura de sistemas web",
  "Produtos digitais sob medida",
  "Integrações e automações",
  "Refatoração estratégica",
  "Front-end enterprise",
  "Bases preparadas para escala",
];

function renderDeliveryCapabilities(): string {
  return deliveryCapabilities
    .map((capability) => `<li>${capability}</li>`)
    .join("");
}

export function Delivery(): string {
  return `
    <section class="section section--delivery" id="entrega" aria-labelledby="delivery-title">
      <div class="section__inner shell delivery">
        <div class="delivery__content">
          <p class="eyebrow">Entrega responsável</p>
          <h2 id="delivery-title">Da decisão técnica à operação confiável.</h2>
          <p>
            Atuamos na concepção, construção e evolução de sistemas web com uma
            abordagem que une clareza de negócio, disciplina técnica e execução
            sustentável.
          </p>
        </div>

        <ul class="capability-list" aria-label="Capacidades da AR Dev Studio">
          ${renderDeliveryCapabilities()}
        </ul>
      </div>
    </section>
  `;
}
