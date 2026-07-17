export function LogicLab(): string {
  return `
    <section class="section" aria-labelledby="logic-lab-title">
      <div class="shell">
        <div class="section-heading">
          <span class="eyebrow">AR Logic Lab</span>

          <h1 id="logic-lab-title">
            Lógica, matemática e engenharia interativa.
          </h1>

          <p>
            Um laboratório experimental para explorar algoritmos,
            raciocínio, estratégia e resolução de problemas por meio
            de experiências visuais e interativas.
          </p>
        </div>

        <div class="card-grid">
          <article class="card">
            <span class="eyebrow">Experimento 01</span>

            <h2>Torre de Hanói</h2>

            <p>
              Um desafio clássico de recursão, planejamento e análise
              de movimentos.
            </p>

            <a
              class="button button--primary"
              href="/logic-lab/torre-de-hanoi"
              data-router-link
            >
              Abrir experimento
            </a>
          </article>

          <article class="card">
            <span class="eyebrow">Experimento 02</span>

            <h2>Cubo Mágico</h2>

            <p>
              Uma experiência visual sobre padrões, algoritmos e
              percepção espacial.
            </p>

            <span class="badge">Em desenvolvimento</span>
          </article>
        </div>
      </div>
    </section>
  `;
}