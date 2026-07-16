type LabItem = {
  title: string;
  description: string;
  status: string;
};

const labItems: LabItem[] = [
  {
    title: "Torre de Hanoi",
    description:
      "Um jogo matematico direto para demonstrar logica, estrategia e pensamento recursivo.",
    status: "Primeiro jogo planejado",
  },
  {
    title: "Xadrez online",
    description:
      "Uma experiencia de estrategia para evoluir regras, estado de jogo e interacao em tempo real.",
    status: "Evolucao futura",
  },
  {
    title: "Cubo magico",
    description:
      "Um laboratorio mais avancado para trabalhar movimentos, visualizacao e resolucao interativa.",
    status: "Pesquisa tecnica",
  },
];

function renderLabItems(): string {
  return labItems
    .map(
      (item) => `
        <article class="lab-card">
          <span class="lab-card__status">${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
}

export function LabsPreview(): string {
  return `
    <section class="section section--labs" id="labs" aria-labelledby="labs-title">
      <div class="section__inner shell labs-preview">
        <div class="section-heading">
          <p class="eyebrow">Labs</p>
          <h2 id="labs-title">A complexidade fica em experiencias separadas da apresentacao principal.</h2>
          <p>
            A Home apresenta a AR Dev Studio para clientes. Jogos matematicos e experimentos
            interativos entram em uma area propria, como vitrine tecnica e produto paralelo.
          </p>
        </div>

        <div class="labs-grid" aria-label="Experimentos planejados da AR Dev Studio">
          ${renderLabItems()}
        </div>
      </div>
    </section>
  `;
}
