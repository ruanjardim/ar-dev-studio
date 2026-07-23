function renderChessSquares(): string {
  return Array.from({ length: 64 }, (_, index) => {
    const row = Math.floor(index / 8);
    const squareColor = index % 2 === row % 2 ? "light" : "dark";
    const pieces: Record<number, string> = {
      3: "&#9820;",
      12: "&#9822;",
      27: "&#9819;",
      36: "&#9812;",
      51: "&#9817;",
      60: "&#9821;",
    };

    return `
      <span class="logic-chess-square logic-chess-square--${squareColor}">
        ${pieces[index] ?? ""}
      </span>
    `;
  }).join("");
}

function renderCubeTiles(): string {
  return Array.from({ length: 9 }, (_, index) => `
    <span class="logic-cube-tile logic-cube-tile--${index + 1}"></span>
  `).join("");
}

export function LogicLab(): string {
  return `
    <div class="logic-lab-page">
      <section
        class="logic-hero section"
        aria-labelledby="logic-lab-title"
      >
        <div class="logic-hero__grid shell">
          <div class="logic-hero__content">
            <span class="eyebrow">AR Logic Lab</span>

            <h1 id="logic-lab-title">
              Jogos interativos para testar racioc&iacute;nio, estrat&eacute;gia e engenharia.
            </h1>

            <p>
              Uma vitrine curta de l&oacute;gica aplicada, com experi&ecirc;ncias
              jog&aacute;veis que mostram estado, intera&ccedil;&atilde;o e arquitetura.
            </p>

            <div
              class="logic-hero__actions"
              aria-label="A&ccedil;&otilde;es do AR Logic Lab"
            >
              <a class="button button--primary" href="#experimentos">
                Ver experimentos
              </a>
            </div>
          </div>

          <div
            class="logic-hero__visual"
            aria-hidden="true"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section
        class="logic-showcase section"
        id="experimentos"
        aria-labelledby="logic-experiments-title"
      >
        <div class="shell">
          <div class="section-heading logic-showcase__heading">
            <span class="eyebrow">Experi&ecirc;ncias principais</span>

            <h2 id="logic-experiments-title">
              Escolha uma experi&ecirc;ncia e entre no jogo.
            </h2>

            <p>
              Torre de Han&oacute;i, Xadrez e Cubo M&aacute;gico agora entram como
              experi&ecirc;ncias jog&aacute;veis do laborat&oacute;rio.
            </p>
          </div>

          <div class="logic-experience-grid">
            <article class="logic-experience logic-experience--hanoi">
              <div
                class="logic-experience__preview logic-experience__preview--hanoi"
                aria-hidden="true"
              >
                <span class="logic-hanoi-rod logic-hanoi-rod--one"></span>
                <span class="logic-hanoi-rod logic-hanoi-rod--two"></span>
                <span class="logic-hanoi-rod logic-hanoi-rod--three"></span>
                <span class="logic-hanoi-base logic-hanoi-base--one"></span>
                <span class="logic-hanoi-base logic-hanoi-base--two"></span>
                <span class="logic-hanoi-base logic-hanoi-base--three"></span>
                <span class="logic-hanoi-disk logic-hanoi-disk--large"></span>
                <span class="logic-hanoi-disk logic-hanoi-disk--medium"></span>
                <span class="logic-hanoi-disk logic-hanoi-disk--small"></span>
              </div>

              <div class="logic-experience__content">
                <div class="logic-experience__header">
                  <span class="logic-status logic-status--available">
                    Dispon&iacute;vel
                  </span>

                  <h3>Torre de Han&oacute;i</h3>
                </div>

                <p>
                  Um desafio interativo de recurs&atilde;o, planejamento
                  e leitura de movimentos m&iacute;nimos.
                </p>

                <div class="logic-experience__facts">
                  <div>
                    <span>Demonstra</span>
                    <p>Estrat&eacute;gia, sequenciamento e decomposi&ccedil;&atilde;o de problemas.</p>
                  </div>

                  <div>
                    <span>Como funciona</span>
                    <p>Mova discos entre hastes sem colocar um disco maior sobre um menor.</p>
                  </div>

                  <div>
                    <span>Conceitos</span>
                    <p>Recurs&atilde;o, estado de jogo, feedback visual e menor caminho.</p>
                  </div>
                </div>

                <a
                  class="button button--primary"
                  href="/logic-lab/torre-de-hanoi"
                  data-router-link
                >
                  Experimentar agora
                </a>
              </div>
            </article>

            <article class="logic-experience logic-experience--chess">
              <div
                class="logic-experience__preview logic-experience__preview--chess"
                aria-hidden="true"
              >
                ${renderChessSquares()}
              </div>

              <div class="logic-experience__content">
                <div class="logic-experience__header">
                  <span class="logic-status logic-status--progress">
                    Dispon&iacute;vel
                  </span>

                  <h3>Xadrez</h3>
                </div>

                <p>
                  Um ambiente para evoluir sele&ccedil;&atilde;o de pe&ccedil;as,
                  tabuleiro visual, turnos e regras b&aacute;sicas controladas.
                </p>

                <div class="logic-experience__facts">
                  <div>
                    <span>Demonstra</span>
                    <p>Tomada de decis&atilde;o, antecipa&ccedil;&atilde;o e modelagem de regras.</p>
                  </div>

                  <div>
                    <span>Como funciona</span>
                    <p>A primeira etapa organiza tabuleiro, pe&ccedil;as e intera&ccedil;&atilde;o.</p>
                  </div>

                  <div>
                    <span>Conceitos</span>
                    <p>Estado, coordenadas, turnos, movimento v&aacute;lido e arquitetura incremental.</p>
                  </div>
                </div>

                <a
                  class="button button--secondary"
                  href="/logic-lab/xadrez"
                  data-router-link
                >
                  Experimentar agora
                </a>
              </div>
            </article>

            <article
              id="cubo-magico"
              class="logic-experience logic-experience--future"
            >
              <div
                class="logic-experience__preview logic-experience__preview--cube"
                aria-hidden="true"
              >
                ${renderCubeTiles()}
              </div>

              <div class="logic-experience__content">
                <div class="logic-experience__header">
                  <span class="logic-status logic-status--available">
                    Dispon&iacute;vel
                  </span>

                  <h3>Cubo M&aacute;gico</h3>
                </div>

                <p>
                  Um experimento colorido para girar faces, acompanhar estado
                  e testar sequ&ecirc;ncias de movimento.
                </p>

                <div class="logic-experience__facts">
                  <div>
                    <span>Demonstra</span>
                    <p>Visualiza&ccedil;&atilde;o espacial, padr&otilde;es e transforma&ccedil;&atilde;o de estado.</p>
                  </div>

                  <div>
                    <span>Como funciona</span>
                    <p>Gire faces, embaralhe o cubo e acompanhe todas as cores no mapa completo.</p>
                  </div>

                  <div>
                    <span>Conceitos</span>
                    <p>Coordenadas 3D, sequ&ecirc;ncia de opera&ccedil;&otilde;es, revers&atilde;o e mem&oacute;ria visual.</p>
                  </div>
                </div>

                <a
                  class="button button--primary"
                  href="/logic-lab/cubo-magico"
                  data-router-link
                >
                  Experimentar agora
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  `;
}
