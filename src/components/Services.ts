type ServiceTrack = {
  code: string;
  title: string;
  description: string;
  outcomes: string[];
};

const serviceTracks: ServiceTrack[] = [
  {
    code: "S01",
    title: "Sistemas web sob medida",
    description:
      "Construção de aplicações web com arquitetura modular, interfaces consistentes e base preparada para evolução contínua.",
    outcomes: ["Front-end escalável", "Fluxos de negócio", "Integrações"],
  },
  {
    code: "S02",
    title: "Arquitetura e evolução",
    description:
      "Diagnóstico, desenho técnico e reorganização de sistemas para reduzir complexidade e liberar crescimento com segurança.",
    outcomes: ["Mapeamento técnico", "Refatoração", "Roadmap evolutivo"],
  },
  {
    code: "S03",
    title: "Automação e operação",
    description:
      "Integrações, rotinas e painéis que conectam dados, processos e times sem depender de trabalho manual repetitivo.",
    outcomes: ["APIs", "Rotinas internas", "Observabilidade"],
  },
];

function renderServices(): string {
  return serviceTracks
    .map(
      (service) => `
        <article class="service-card">
          <span class="service-card__code">${service.code}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="service-card__outcomes" aria-label="Entregáveis de ${service.title}">
            ${service.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

export function Services(): string {
  return `
    <section class="section section--services" id="servicos" aria-labelledby="services-title">
      <div class="section__inner shell">
        <div class="section-heading">
          <p class="eyebrow">Serviços</p>
          <h2 id="services-title">Construímos software como infraestrutura de crescimento.</h2>
          <p>
            A entrega combina produto, engenharia e operação para criar sistemas
            que continuam úteis depois da primeira versão.
          </p>
        </div>

        <div class="service-grid">
          ${renderServices()}
        </div>
      </div>
    </section>
  `;
}
