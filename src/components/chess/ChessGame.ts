import { ChessBoard } from "./ChessBoard";

export function ChessGame(): string {
  return `
    <section
      class="chess-game"
      data-chess-game
      aria-labelledby="chess-game-title"
    >
      <header class="chess-game__header">
        <h2
          class="chess-game__screen-title"
          id="chess-game-title"
        >
          Jogue Xadrez agora
        </h2>

        <div
          class="chess-game__status"
          data-chess-status
          role="status"
          aria-live="polite"
        >
          <span
            class="chess-game__status-indicator"
            aria-hidden="true"
          ></span>

          <span
            id="chess-status"
            data-chess-status-message
          >
            Partida pronta. As brancas come&ccedil;am.
          </span>
        </div>
      </header>

      <div class="chess-game__panel">
        <div
          class="chess-game__metrics"
          aria-label="Estado da partida"
        >
          <div class="chess-metric">
            <span>Turno</span>
            <strong
              id="chess-turn"
              data-chess-turn
            >
              Brancas
            </strong>
          </div>

          <div class="chess-metric">
            <span>Movimentos</span>
            <strong
              id="chess-move-count"
              data-chess-move-count
            >
              0
            </strong>
          </div>

          <div class="chess-metric">
            <span>Capturas</span>
            <strong
              id="chess-capture-count"
              data-chess-capture-count
            >
              0
            </strong>
          </div>
        </div>

        <div class="chess-game__stage">
          <div class="chess-board-card">
            <div class="chess-board-card__topline">
              <span class="eyebrow">Tabuleiro</span>
              <span>Movimentos b&aacute;sicos</span>
            </div>

            ${ChessBoard()}
          </div>

          <aside
            class="chess-side-panel"
            aria-labelledby="chess-guide-title"
          >
            <span class="eyebrow">Leitura da partida</span>

            <h3 id="chess-guide-title">
              Como testar
            </h3>

            <p>
              Clique em uma pe&ccedil;a do turno atual. As casas azuis
              indicam movimento e as vermelhas indicam captura.
            </p>

            <ol
              class="chess-move-log"
              id="chess-move-log"
              data-chess-move-log
              aria-live="polite"
            >
              <li>Nenhum movimento ainda.</li>
            </ol>
          </aside>
        </div>

        <div
          class="chess-game__actions"
          aria-label="A&ccedil;&otilde;es do Xadrez"
        >
          <button
            class="button button--secondary chess-action-button"
            type="button"
            id="chess-undo-button"
            disabled
          >
            Desfazer
          </button>

          <button
            class="button button--primary chess-action-button"
            type="button"
            id="chess-reset-button"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </section>
  `;
}
