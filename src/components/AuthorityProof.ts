type AuthorityProofItem = {
  marker: string;
  title: string;
  description: string;
};

const authorityProofItems: AuthorityProofItem[] = [
  {
    marker: "A1",
    title: "Decisões documentadas",
    description:
      "Critérios, limites e responsabilidades ficam explícitos para reduzir dependência de interpretação informal.",
  },
  {
    marker: "A2",
    title: "Entregáveis auditáveis",
    description:
      "Cada etapa gera material técnico verificável: blueprint, componentes, contratos, padrões e critérios de aceite.",
  },
  {
    marker: "A3",
    title: "Evolução planejada",
    description:
      "A primeira versão não encerra a arquitetura. Ela cria a base para próximos módulos, integrações e ajustes de produto.",
  },
  {
    marker: "A4",
    title: "Qualidade operacional",
    description:
      "Build, versionamento, documentação e responsividade entram como parte da entrega, não como acabamento tardio.",
  },
];

function renderAuthorityProofItems(): string {
  return authorityProofItems
    .map(
      (item) => `
        <article class="authority-card">
          <span>${item.marker}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

export function AuthorityProof(): string {
  return `
    <section class="section section--authority" id="autoridade" aria-labelledby="authority-title">
      <div class="section__inner shell authority">
        <div class="section-heading">
          <p class="eyebrow">Prova de autoridade</p>
          <h2 id="authority-title">Sem promessa vazia: maturidade aparece nos artefatos.</h2>
          <p>
            A confiança não depende de discurso. Ela nasce quando cada decisão técnica
            deixa rastros claros para implementação, manutenção e evolução.
          </p>
        </div>

        <div class="authority-grid">
          ${renderAuthorityProofItems()}
        </div>
      </div>
    </section>
  `;
}
