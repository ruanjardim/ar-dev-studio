type Service = {
  code: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
};

const services: Service[] = [
  {
    code: "S01",
    title: "Produtos web e SaaS",
    description: "Do MVP ao produto operacional, com experi&ecirc;ncia consistente e base extens&iacute;vel.",
    items: ["Sistemas sob medida", "Pain&eacute;is e portais", "Plataformas SaaS"],
    icon: '<path d="M4 5h16v11H4zM8 20h8M10 16v4M14 16v4" />',
  },
  {
    code: "S02",
    title: "Apps e experi&ecirc;ncias m&oacute;veis",
    description: "Interfaces responsivas, PWAs e aplicativos preparados para uso real em campo.",
    items: ["PWA", "Mobile first", "Design de produto"],
    icon: '<rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M10 5h4M11 18.5h2" />',
  },
  {
    code: "S03",
    title: "Auditoria e valida&ccedil;&atilde;o",
    description: "Revis&atilde;o t&eacute;cnica de MVPs, c&oacute;digo gerado por IA e sistemas em produ&ccedil;&atilde;o.",
    items: ["Code review", "Auditoria em v&iacute;deo", "Plano de corre&ccedil;&atilde;o"],
    icon: '<path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z" /><path d="m9 12 2 2 4-5" />',
  },
  {
    code: "S04",
    title: "Arquitetura e refatora&ccedil;&atilde;o",
    description: "Organiza&ccedil;&atilde;o de sistemas que cresceram r&aacute;pido e precisam voltar a evoluir com seguran&ccedil;a.",
    items: ["Blueprint", "Refatora&ccedil;&atilde;o", "Moderniza&ccedil;&atilde;o"],
    icon: '<path d="M4 8h6V3H4zM14 21h6v-5h-6zM4 21h6v-5H4zM14 8h6V3h-6zM7 8v8M17 8v8M10 5h4M10 18h4" />',
  },
  {
    code: "S05",
    title: "Integra&ccedil;&otilde;es e automa&ccedil;&atilde;o",
    description: "APIs, fluxos e rotinas que conectam ferramentas e eliminam opera&ccedil;&atilde;o manual repetitiva.",
    items: ["APIs", "Automa&ccedil;&otilde;es", "Integra&ccedil;&otilde;es de dados"],
    icon: '<path d="M8 7h8M8 17h8M5 4v6M19 14v6M5 10l4-3-4-3M19 14l-4 3 4 3" />',
  },
  {
    code: "S06",
    title: "Cloud, dados e opera&ccedil;&atilde;o",
    description: "Infraestrutura, bancos de dados e observabilidade para manter o produto dispon&iacute;vel e mensur&aacute;vel.",
    items: ["Cloud e deploy", "Banco de dados", "Observabilidade"],
    icon: '<path d="M7 18h10a4 4 0 0 0 .4-8A6 6 0 0 0 6 8.5 4.8 4.8 0 0 0 7 18Z" /><path d="M9 13h6M12 10v6" />',
  },
];

function renderServices(): string {
  return services
    .map(
      (service) => `
        <article class="service-showcase-card">
          <div class="service-showcase-card__top">
            <span class="service-showcase-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">${service.icon}</svg>
            </span>
            <span class="service-showcase-card__code">${service.code}</span>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul aria-label="Entregas de ${service.title}">
            ${service.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

export function ServicesShowcase(): string {
  return `
    <section class="section section--service-showcase" id="servicos" aria-labelledby="services-showcase-title">
      <div class="section__inner shell">
        <div class="section-heading section-heading--wide">
          <p class="eyebrow">Servi&ccedil;os</p>
          <h2 id="services-showcase-title">Engenharia completa para produtos que precisam funcionar de verdade.</h2>
          <p>Entramos no ponto em que o projeto est&aacute; e assumimos o caminho t&eacute;cnico necess&aacute;rio.</p>
        </div>

        <div class="service-showcase-grid">
          ${renderServices()}
        </div>
      </div>
    </section>
  `;
}
