type CubeFace = {
  id: string;
  label: string;
};

const CUBE_FACES: CubeFace[] = [
  { id: "U", label: "Topo" },
  { id: "L", label: "Esquerda" },
  { id: "F", label: "Frente" },
  { id: "R", label: "Direita" },
  { id: "B", label: "Trás" },
  { id: "D", label: "Base" },
];

const CUBE_MOVES: CubeFace[] = [
  { id: "U", label: "Topo" },
  { id: "D", label: "Base" },
  { id: "L", label: "Esquerda" },
  { id: "R", label: "Direita" },
  { id: "F", label: "Frente" },
  { id: "B", label: "Trás" },
];

function renderFaceTiles(
  face: CubeFace,
  target: "net" | "preview",
): string {
  return Array.from({ length: 9 }, (_, index) => `
    <span
      class="cube-sticker"
      data-cube-${target}-sticker
      data-cube-face="${face.id}"
      data-cube-index="${index}"
      aria-hidden="true"
    ></span>
  `).join("");
}

function renderPreviewFace(face: CubeFace): string {
  return `
    <div
      class="cube-preview__face cube-preview__face--${face.id.toLowerCase()}"
      data-cube-preview-face="${face.id}"
      aria-hidden="true"
    >
      ${renderFaceTiles(face, "preview")}
    </div>
  `;
}

function renderNetFace(face: CubeFace): string {
  return `
    <section
      class="cube-net-face cube-net-face--${face.id.toLowerCase()}"
      data-cube-net-face="${face.id}"
    >
      <button
        class="cube-net-face__button"
        type="button"
        data-cube-face-turn="${face.id}"
        aria-label="Girar face ${face.label}"
      >
        <span class="cube-net-face__label">
          ${face.id}
        </span>

        <span class="cube-net-face__grid">
          ${renderFaceTiles(face, "net")}
        </span>
      </button>
    </section>
  `;
}

function renderMoveButton(face: CubeFace): string {
  return `
    <div class="cube-move-pair">
      <button
        class="button button--secondary cube-move-button"
        type="button"
        data-cube-move="${face.id}"
        data-cube-direction="clockwise"
        aria-label="Girar face ${face.label} no sentido horário"
      >
        ${face.label}
      </button>

      <button
        class="button button--secondary cube-move-button cube-move-button--inverse"
        type="button"
        data-cube-move="${face.id}"
        data-cube-direction="counterclockwise"
        aria-label="Girar face ${face.label} no sentido anti-horário"
      >
        ${face.id}&prime;
      </button>
    </div>
  `;
}

export function CubeGame(): string {
  return `
    <section
      class="cube-game"
      data-cube-game
      aria-labelledby="cube-game-title"
    >
      <header class="cube-game__header">
        <h2
          class="cube-game__screen-title"
          id="cube-game-title"
        >
          Jogar Cubo Mágico
        </h2>

        <div
          class="cube-game__status"
          id="cube-status"
          role="status"
          aria-live="polite"
        >
          <span
            class="cube-game__status-indicator"
            aria-hidden="true"
          ></span>

          <span data-cube-status-message>
            Cubo resolvido. Escolha uma face para girar.
          </span>
        </div>
      </header>

      <div class="cube-game__panel">
        <div
          class="cube-game__metrics"
          aria-label="Estado do cubo"
        >
          <div class="cube-metric">
            <span>Estado</span>
            <strong id="cube-state">Resolvido</strong>
          </div>

          <div class="cube-metric">
            <span>Movimentos</span>
            <strong id="cube-move-count">0</strong>
          </div>

          <div class="cube-metric">
            <span>&Uacute;ltimo giro</span>
            <strong id="cube-last-move">-</strong>
          </div>
        </div>

        <div
          class="cube-controls"
          aria-label="Giros do Cubo M&aacute;gico"
        >
          ${CUBE_MOVES.map(renderMoveButton).join("")}
        </div>

        <div class="cube-game__stage">
          <div class="cube-preview-card">
            <div class="cube-preview-card__topline">
              <span class="eyebrow">Cubo visual</span>
              <span>Cores padr&atilde;o premium</span>
            </div>

            <div
              class="cube-preview"
              aria-hidden="true"
            >
              <div class="cube-preview__object">
                ${renderPreviewFace({ id: "F", label: "Frente" })}
                ${renderPreviewFace({ id: "R", label: "Direita" })}
                ${renderPreviewFace({ id: "U", label: "Topo" })}
              </div>
            </div>
          </div>

          <div
            class="cube-net-card"
            aria-labelledby="cube-net-title"
          >
            <div class="cube-net-card__topline">
              <div>
                <span class="eyebrow">Mapa completo</span>
                <h3 id="cube-net-title">Todas as faces</h3>
              </div>

              <span>Clique para girar</span>
            </div>

            <div class="cube-net">
              ${CUBE_FACES.map(renderNetFace).join("")}
            </div>
          </div>
        </div>

        <div
          class="cube-game__actions"
          aria-label="A&ccedil;&otilde;es do Cubo M&aacute;gico"
        >
          <button
            class="button button--secondary cube-action-button"
            type="button"
            id="cube-shuffle-button"
          >
            Misturar
          </button>

          <button
            class="button button--secondary cube-action-button"
            type="button"
            id="cube-undo-button"
            disabled
          >
            Desfazer
          </button>

          <button
            class="button button--primary cube-action-button"
            type="button"
            id="cube-reset-button"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </section>
  `;
}
