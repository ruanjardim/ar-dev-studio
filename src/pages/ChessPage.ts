import { ChessGame } from "../components/chess/ChessGame";

export function ChessPage(): string {
  return `
    <main class="chess-page">
      <section
        class="chess-play-section"
        aria-labelledby="chess-page-title"
      >
        <div class="shell chess-play-section__inner">
          <div class="chess-play-section__intro">
            <a
              class="chess-back-link"
              href="/logic-lab"
              data-router-link
            >
              <span aria-hidden="true">&larr;</span>
              Voltar ao AR Logic Lab
            </a>

            <div class="chess-play-section__copy">
              <span class="eyebrow">Xadrez</span>

              <h1 id="chess-page-title">
                Escolha uma pe&ccedil;a e teste racioc&iacute;nio em um
                tabuleiro vivo.
              </h1>

              <p>
                Uma primeira vers&atilde;o jog&aacute;vel do AR Logic Lab para
                praticar posi&ccedil;&atilde;o, captura e altern&acirc;ncia de turno
                sem afastar o jogo da chamada.
              </p>
            </div>
          </div>

          ${ChessGame()}
        </div>
      </section>

      <section
        class="chess-context-section"
        aria-labelledby="chess-context-title"
      >
        <div class="shell chess-context-section__inner">
          <div class="section-heading">
            <span class="eyebrow">Estrat&eacute;gia e hist&oacute;ria</span>

            <h2 id="chess-context-title">
              Um jogo pequeno no espa&ccedil;o e enorme nas possibilidades.
            </h2>
          </div>

          <div class="chess-context-grid">
            <article class="chess-context-card">
              <span>01</span>
              <h3>Origem</h3>
              <p>
                O xadrez moderno descende de jogos de estrat&eacute;gia
                praticados h&aacute; mais de mil anos, com forte rela&ccedil;&atilde;o
                com planejamento militar e tomada de decis&atilde;o.
              </p>
            </article>

            <article class="chess-context-card">
              <span>02</span>
              <h3>Racioc&iacute;nio</h3>
              <p>
                Cada movimento muda o estado do sistema. Por isso, o jogo
                treina antecipa&ccedil;&atilde;o, leitura de padr&otilde;es e escolha sob
                restri&ccedil;&otilde;es.
              </p>
            </article>

            <article class="chess-context-card">
              <span>03</span>
              <h3>Pr&oacute;xima evolu&ccedil;&atilde;o</h3>
              <p>
                Esta etapa prioriza movimento e captura. Xeque, roque,
                promo&ccedil;&atilde;o completa e engine podem entrar depois como
                camadas controladas.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  `;
}
