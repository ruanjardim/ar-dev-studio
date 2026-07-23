type ServiceTrack = {
  code: string;
  title: string;
  description: string;
};

const serviceTracks: ServiceTrack[] = [
  {
    code: "S01",
    title: "Sistemas e plataformas",
    description:
      "Aplica&ccedil;&otilde;es web para organizar processos, dados, fluxos internos e opera&ccedil;&otilde;es digitais.",
  },
  {
    code: "S02",
    title: "Sites institucionais",
    description:
      "Presen&ccedil;a digital clara, elegante e preparada para representar empresas com credibilidade.",
  },
  {
    code: "S03",
    title: "Experi&ecirc;ncias interativas",
    description:
      "Laborat&oacute;rios, interfaces demonstrativas e experi&ecirc;ncias visuais que aproximam produto e tecnologia.",
  },
  {
    code: "S04",
    title: "Evolu&ccedil;&atilde;o de produtos",
    description:
      "Melhoria, manuten&ccedil;&atilde;o e reorganiza&ccedil;&atilde;o de bases existentes para sustentar novas etapas.",
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
          <p class="eyebrow">O que desenvolvemos</p>
          <h2 id="services-title">Solu&ccedil;&otilde;es digitais com fun&ccedil;&atilde;o real no neg&oacute;cio.</h2>
          <p>
            A AR Dev Studio cria interfaces e sistemas para empresas que
            precisam vender melhor, operar com mais clareza ou evoluir produtos.
          </p>
        </div>

        <div class="service-grid service-grid--compact">
          ${renderServices()}
        </div>
      </div>
    </section>
  `;
}
