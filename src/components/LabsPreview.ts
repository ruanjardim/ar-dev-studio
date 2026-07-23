type LabItem = {
  title: string;
  description: string;
  status: string;
  href: string;
  kind: "system" | "site" | "lab";
};

const labItems: LabItem[] = [
  {
    title: "VetFlow",
    description:
      "Plataforma para gest&atilde;o veterin&aacute;ria, desenhada para organizar rotina, atendimento e opera&ccedil;&atilde;o.",
    status: "Sistema operacional",
    href: "#contato",
    kind: "system",
  },
  {
    title: "H&eacute;lio Chaveiro",
    description:
      "Site institucional direto, local e comercial, com foco em confian&ccedil;a e contato r&aacute;pido.",
    status: "Presen&ccedil;a digital",
    href: "#contato",
    kind: "site",
  },
  {
    title: "AR Logic Lab",
    description:
      "Vitrine interativa com jogos e experimentos que demonstram l&oacute;gica, engenharia e experi&ecirc;ncia.",
    status: "Experi&ecirc;ncia interativa",
    href: "/logic-lab",
    kind: "lab",
  },
];

function renderLabItems(): string {
  return labItems
    .map(
      (item) => `
        <article class="lab-card">
          <span
            class="lab-card__visual lab-card__visual--${item.kind}"
            aria-hidden="true"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span class="lab-card__status">${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="lab-card__link" href="${item.href}" data-router-link>
            Ver capacidade
          </a>
        </article>
      `,
    )
    .join("");
}

export function LabsPreview(): string {
  return `
    <section class="section section--labs" id="projetos" aria-labelledby="labs-title">
      <div class="section__inner shell labs-preview">
        <div class="section-heading">
          <p class="eyebrow">Projetos e provas de capacidade</p>
          <h2 id="labs-title">Trabalhos que mostram como a engenharia aparece na experi&ecirc;ncia.</h2>
          <p>
            Em vez de listar tecnologia por tecnologia, a vitrine apresenta
            solu&ccedil;&otilde;es com contexto, clareza visual e potencial de evolu&ccedil;&atilde;o.
          </p>
        </div>

        <div class="labs-grid" aria-label="Projetos e experi&ecirc;ncias da AR Dev Studio">
          ${renderLabItems()}
        </div>
      </div>
    </section>
  `;
}
