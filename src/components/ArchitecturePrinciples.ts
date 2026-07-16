type ArchitecturePrinciple = {
  title: string;
  description: string;
};

const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: "Base técnica deliberada",
    description:
      "Antes de implementar, definimos limites, responsabilidades e fluxos para reduzir acoplamento e proteger a evolução do produto.",
  },
  {
    title: "Código como consequência",
    description:
      "A implementação nasce de decisões arquiteturais claras, com componentes simples, legíveis e preparados para mudança.",
  },
  {
    title: "Evolução mensurável",
    description:
      "Cada entrega considera manutenção, performance, observabilidade e continuidade, não apenas a primeira versão em produção.",
  },
];

function renderArchitecturePrinciples(): string {
  return architecturePrinciples
    .map(
      (principle) => `
        <article class="principle-card">
          <h3>${principle.title}</h3>
          <p>${principle.description}</p>
        </article>
      `,
    )
    .join("");
}

export function ArchitecturePrinciples(): string {
  return `
    <section class="section" id="arquitetura" aria-labelledby="architecture-title">
      <div class="section__inner shell">
        <div class="section-heading">
          <p class="eyebrow">Engenharia aplicada</p>
          <h2 id="architecture-title">Sistemas com estrutura para continuar evoluindo.</h2>
        </div>

        <div class="principle-grid">
          ${renderArchitecturePrinciples()}
        </div>
      </div>
    </section>
  `;
}
