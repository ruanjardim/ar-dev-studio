type TechnicalDifferential = {
  label: string;
  title: string;
  description: string;
};

const technicalDifferentials: TechnicalDifferential[] = [
  {
    label: "Manutenção",
    title: "Estrutura legível para novos ciclos",
    description:
      "Componentes, estilos e decisões técnicas são organizados para reduzir custo de mudança e facilitar continuidade.",
  },
  {
    label: "Escala",
    title: "Crescimento sem ruptura da base",
    description:
      "A arquitetura favorece modularidade, contratos claros e expansão gradual de funcionalidades.",
  },
  {
    label: "Operação",
    title: "Entrega pensada para uso real",
    description:
      "Performance, acessibilidade, responsividade e previsibilidade fazem parte da entrega, não de uma etapa posterior.",
  },
];

function renderTechnicalDifferentials(): string {
  return technicalDifferentials
    .map(
      (item) => `
        <article class="technical-card">
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

export function TechnicalDifferentials(): string {
  return `
    <section class="section section--technical" aria-labelledby="technical-title">
      <div class="section__inner shell">
        <div class="section-heading">
          <p class="eyebrow">Diferenciais técnicos</p>
          <h2 id="technical-title">Decisões que protegem a evolução do produto.</h2>
        </div>

        <div class="technical-grid">
          ${renderTechnicalDifferentials()}
        </div>
      </div>
    </section>
  `;
}
