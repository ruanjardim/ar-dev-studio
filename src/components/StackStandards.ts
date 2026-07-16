type StackStandard = {
  layer: string;
  principles: string[];
};

const stackStandards: StackStandard[] = [
  {
    layer: "Interface",
    principles: ["HTML semântico", "CSS modular", "Acessibilidade", "Mobile first"],
  },
  {
    layer: "Aplicação",
    principles: ["TypeScript estrito", "Componentização", "Contratos claros", "Estado simples"],
  },
  {
    layer: "Operação",
    principles: ["Build previsível", "Versionamento", "Documentação", "Evolução incremental"],
  },
];

function renderStackStandards(): string {
  return stackStandards
    .map(
      (standard) => `
        <article class="stack-column">
          <h3>${standard.layer}</h3>
          <ul>
            ${standard.principles.map((principle) => `<li>${principle}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

export function StackStandards(): string {
  return `
    <section class="section section--stack" id="stack" aria-labelledby="stack-title">
      <div class="section__inner shell stack">
        <div class="section-heading">
          <p class="eyebrow">Stack e padrões</p>
          <h2 id="stack-title">Tecnologia escolhida para manter o sistema compreensível.</h2>
          <p>
            A stack não é exibida como vitrine. Ela funciona como contrato de qualidade:
            menos dependência desnecessária, mais previsibilidade e base clara para evolução.
          </p>
        </div>

        <div class="stack-board" aria-label="Padrões técnicos da AR Dev Studio">
          ${renderStackStandards()}
        </div>
      </div>
    </section>
  `;
}
