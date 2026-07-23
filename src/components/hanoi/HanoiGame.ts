export function HanoiGame(): string {
  return `
    <section
      class="hanoi-game"
      aria-labelledby="hanoi-board-title"
    >
      <div class="hanoi-game__toolbar">
        <div class="hanoi-game__field">
          <label for="hanoi-disk-count">
            Quantidade de discos
          </label>

          <select id="hanoi-disk-count" name="hanoi-disk-count">
            <option value="3" selected>3 discos</option>
            <option value="4">4 discos</option>
            <option value="5">5 discos</option>
            <option value="6">6 discos</option>
            <option value="7">7 discos</option>
            <option value="8">8 discos</option>
          </select>
        </div>

        <div
          class="hanoi-game__stats"
          aria-label="Estatísticas da partida"
        >
          <div class="hanoi-stat">
            <span class="hanoi-stat__label">
              Tempo
            </span>

            <strong
              id="hanoi-time"
              class="hanoi-stat__value"
            >
              00:00
            </strong>
          </div>

          <div class="hanoi-stat">
            <span class="hanoi-stat__label">
              Movimentos
            </span>

            <strong
              id="hanoi-move-count"
              class="hanoi-stat__value"
            >
              0
            </strong>
          </div>

          <div class="hanoi-stat">
            <span class="hanoi-stat__label">
              Mínimo teórico
            </span>

            <strong
              id="hanoi-minimum-moves"
              class="hanoi-stat__value"
            >
              7
            </strong>
          </div>
        </div>

        <div class="hanoi-game__actions">
          <button
            id="hanoi-undo-button"
            class="button button--secondary"
            type="button"
            disabled
          >
            Desfazer
          </button>

          <button
            id="hanoi-restart-button"
            class="button button--primary"
            type="button"
          >
            Reiniciar
          </button>
        </div>
      </div>

      <div class="hanoi-game__panel">
        <div class="hanoi-game__heading">
          <div>
            <span class="eyebrow">Tabuleiro</span>

            <h2 id="hanoi-board-title">
              Torre de Hanói
            </h2>
          </div>

          <p
            id="hanoi-status"
            class="hanoi-game__status"
            role="status"
            aria-live="polite"
          >
            Arraste o disco superior para outra torre.
          </p>
        </div>

        <div
          id="hanoi-demonstration"
          class="hanoi-demonstration"
          hidden
        >
          <div>
            <strong id="hanoi-demonstration-title">
              Modo demonstração ativo
            </strong>

            <p id="hanoi-demonstration-description">
              Observe como o algoritmo recursivo resolve o problema.
            </p>
          </div>

          <button
            id="hanoi-stop-demonstration"
            class="button button--secondary"
            type="button"
          >
            Encerrar demonstração
          </button>
        </div>

        <div
          id="hanoi-board"
          class="hanoi-board"
          aria-label="Tabuleiro da Torre de Hanói"
        >
          <button
            class="hanoi-tower"
            type="button"
            data-hanoi-tower="0"
            aria-pressed="false"
            aria-label="Haste de origem"
          >
            <span class="hanoi-tower__name">
              Origem
            </span>

            <span class="hanoi-tower__play-area">
              <span
                class="hanoi-tower__disks"
                data-hanoi-disks="0"
              ></span>

              <span
                class="hanoi-tower__rod"
                aria-hidden="true"
              ></span>

              <span
                class="hanoi-tower__base"
                aria-hidden="true"
              ></span>
            </span>
          </button>

          <button
            class="hanoi-tower"
            type="button"
            data-hanoi-tower="1"
            aria-pressed="false"
            aria-label="Haste auxiliar"
          >
            <span class="hanoi-tower__name">
              Auxiliar
            </span>

            <span class="hanoi-tower__play-area">
              <span
                class="hanoi-tower__disks"
                data-hanoi-disks="1"
              ></span>

              <span
                class="hanoi-tower__rod"
                aria-hidden="true"
              ></span>

              <span
                class="hanoi-tower__base"
                aria-hidden="true"
              ></span>
            </span>
          </button>

          <button
            class="hanoi-tower"
            type="button"
            data-hanoi-tower="2"
            aria-pressed="false"
            aria-label="Haste de destino"
          >
            <span class="hanoi-tower__name">
              Destino
            </span>

            <span class="hanoi-tower__play-area">
              <span
                class="hanoi-tower__disks"
                data-hanoi-disks="2"
              ></span>

              <span
                class="hanoi-tower__rod"
                aria-hidden="true"
              ></span>

              <span
                class="hanoi-tower__base"
                aria-hidden="true"
              ></span>
            </span>
          </button>
        </div>
      </div>

      <div
        id="hanoi-completion-modal"
        class="hanoi-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hanoi-completion-title"
        aria-describedby="hanoi-completion-description"
        hidden
      >
        <div
          class="hanoi-modal__backdrop"
          data-hanoi-close-modal
        ></div>

        <div class="hanoi-modal__dialog">
          <div class="hanoi-modal__celebration" aria-hidden="true">
            🏆
          </div>

          <span class="eyebrow">
            Desafio concluído
          </span>

          <h2 id="hanoi-completion-title">
            Parabéns!
          </h2>

          <p
            id="hanoi-completion-description"
            class="hanoi-modal__description"
          >
            Você concluiu a Torre de Hanói.
          </p>

          <div
            class="hanoi-modal__results"
            aria-label="Resultado da partida"
          >
            <div class="hanoi-modal__result">
              <span>Tempo</span>

              <strong id="hanoi-result-time">
                00:00
              </strong>
            </div>

            <div class="hanoi-modal__result">
              <span>Movimentos</span>

              <strong id="hanoi-result-moves">
                0
              </strong>
            </div>

            <div class="hanoi-modal__result">
              <span>Mínimo teórico</span>

              <strong id="hanoi-result-minimum">
                7
              </strong>
            </div>

            <div class="hanoi-modal__result">
              <span>Eficiência</span>

              <strong id="hanoi-result-efficiency">
                100%
              </strong>
            </div>
          </div>

          <div class="hanoi-modal__achievement">
            <span id="hanoi-achievement-icon" aria-hidden="true">
              🥇
            </span>

            <div>
              <strong id="hanoi-achievement-title">
                Solução ótima
              </strong>

              <p id="hanoi-achievement-description">
                Você encontrou o menor número possível de movimentos.
              </p>
            </div>
          </div>

          <div class="hanoi-modal__actions">
            <button
              id="hanoi-replay-button"
              class="button button--secondary"
              type="button"
            >
              Jogar novamente
            </button>

            <button
              id="hanoi-next-level-button"
              class="button button--primary"
              type="button"
            >
              Próximo desafio
            </button>

            <button
              id="hanoi-optimal-solution-button"
              class="button button--secondary"
              type="button"
            >
              Entender a solução ótima
            </button>
          </div>

          <button
            id="hanoi-close-modal-button"
            class="hanoi-modal__close"
            type="button"
            aria-label="Fechar resultado"
          >
            ×
          </button>
        </div>
      </div>
    </section>
  `;
}
