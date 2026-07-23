import { HanoiGame } from "../components/hanoi/HanoiGame";

export function HanoiPage(): string {
  return `
    <main class="hanoi-page">
      <section
        class="hanoi-game-section"
        aria-labelledby="hanoi-game-title"
      >
        <div class="shell hanoi-game-section__inner">
          <div class="hanoi-game-section__intro">
            <a
              class="hanoi-back-link"
              href="/logic-lab"
              data-router-link
            >
              <span aria-hidden="true">&larr;</span>
              Voltar ao AR Logic Lab
            </a>

            <div class="hanoi-play-header">
              <div>
                <span class="eyebrow">Torre de Han&oacute;i</span>

                <h1 id="hanoi-game-title">
                  Resolva no menor caminho.
                </h1>
              </div>

              <p>
                Mova os discos entre as hastes, acompanhe tempo e movimentos
                e tente chegar ao m&iacute;nimo te&oacute;rico.
              </p>
            </div>
          </div>

          ${HanoiGame()}
        </div>
      </section>

      <section
        class="hanoi-rules section"
        aria-labelledby="hanoi-rules-title"
      >
        <div class="shell">
          <div class="section-heading">
            <span class="eyebrow">Regras do jogo</span>

            <h2 id="hanoi-rules-title">
              Tr&ecirc;s restri&ccedil;&otilde;es simples, um desafio exponencial.
            </h2>
          </div>

          <div class="hanoi-rules__grid">
            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                01
              </span>

              <h3>Um disco por vez</h3>

              <p>
                Cada movimento transfere apenas o disco superior de uma haste.
              </p>
            </article>

            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                02
              </span>

              <h3>Apenas o topo move</h3>

              <p>
                Discos abaixo de outro disco ficam bloqueados at&eacute; serem
                liberados.
              </p>
            </article>

            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                03
              </span>

              <h3>Menor sobre maior</h3>

              <p>
                Um disco maior nunca pode ser colocado sobre um disco menor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="hanoi-about section"
        aria-labelledby="hanoi-about-title"
      >
        <div class="shell">
          <div class="hanoi-about__grid">
            <article class="hanoi-info-card">
              <span class="eyebrow">Contexto hist&oacute;rico</span>

              <h2 id="hanoi-about-title">
                Uma cria&ccedil;&atilde;o de &Eacute;douard Lucas.
              </h2>

              <p>
                A Torre de Han&oacute;i foi apresentada em 1883 pelo matem&aacute;tico
                franc&ecirc;s &Eacute;douard Lucas. O quebra-cabe&ccedil;a tornou-se
                uma refer&ecirc;ncia para estudar racioc&iacute;nio l&oacute;gico,
                recursividade e resolu&ccedil;&atilde;o estruturada de problemas.
              </p>
            </article>

            <article class="hanoi-info-card hanoi-info-card--accent">
              <span class="eyebrow">Conceito de l&oacute;gica</span>

              <h2>
                O m&iacute;nimo te&oacute;rico de movimentos.
              </h2>

              <p>
                Para uma torre com <strong>n</strong> discos, o menor n&uacute;mero
                poss&iacute;vel de movimentos &eacute; calculado por:
              </p>

              <div
                class="hanoi-formula"
                aria-label="Dois elevado a n menos um"
              >
                2<sup>n</sup> - 1
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  `;
}
