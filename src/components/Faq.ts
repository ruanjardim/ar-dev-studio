type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "A AR Dev Studio cria sites simples?",
    answer:
      "O foco é construir sistemas, produtos digitais e bases web que precisam evoluir. Quando a entrega é institucional, ela ainda nasce com arquitetura e manutenção em mente.",
  },
  {
    question: "Vocês entram em projetos já existentes?",
    answer:
      "Sim. O diagnóstico técnico ajuda a entender a base atual, reduzir riscos e definir um caminho de evolução sem recomeçar tudo sem necessidade.",
  },
  {
    question: "A entrega termina quando a primeira versão fica pronta?",
    answer:
      "Não necessariamente. A filosofia da AR Dev Studio considera evolução, continuidade e operação como parte da qualidade do sistema.",
  },
  {
    question: "Por que evitar dependências visuais pesadas?",
    answer:
      "Menos dependências reduzem acoplamento, melhoram previsibilidade e mantêm a interface sob controle técnico do projeto.",
  },
];

function renderFaqItems(): string {
  return faqItems
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `,
    )
    .join("");
}

export function Faq(): string {
  return `
    <section class="section section--faq" id="faq" aria-labelledby="faq-title">
      <div class="section__inner shell faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2 id="faq-title">Perguntas que alinham expectativa antes do primeiro contato.</h2>
        </div>

        <div class="faq-list">
          ${renderFaqItems()}
        </div>
      </div>
    </section>
  `;
}
