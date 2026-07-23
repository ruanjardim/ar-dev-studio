type FaceId =
  | "U"
  | "D"
  | "L"
  | "R"
  | "F"
  | "B";

type CubeDirection =
  | "clockwise"
  | "counterclockwise";

type CubeColor =
  | "white"
  | "yellow"
  | "red"
  | "orange"
  | "blue"
  | "green";

type Vector3 = {
  x: number;
  y: number;
  z: number;
};

type FaceOrientation = {
  normal: Vector3;
  row: Vector3;
  column: Vector3;
  color: CubeColor;
  label: string;
};

type Sticker = {
  id: string;
  color: CubeColor;
  position: Vector3;
  normal: Vector3;
};

type CubeMove = {
  face: FaceId;
  direction: CubeDirection;
};

type CubeState = {
  stickers: Sticker[];
  history: CubeMove[];
  lastMove: string;
};

type FaceSlot = {
  face: FaceId;
  index: number;
};

type CubeElements = {
  status: HTMLElement;
  state: HTMLElement;
  moveCount: HTMLElement;
  lastMove: HTMLElement;
  undoButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  shuffleButton: HTMLButtonElement;
  moveButtons: HTMLButtonElement[];
  faceButtons: HTMLButtonElement[];
  stickers: HTMLElement[];
  previewObject: HTMLElement;
};

const FACE_ORIENTATIONS: Record<FaceId, FaceOrientation> = {
  U: {
    normal: { x: 0, y: 1, z: 0 },
    row: { x: 0, y: 0, z: 1 },
    column: { x: 1, y: 0, z: 0 },
    color: "white",
    label: "topo",
  },
  D: {
    normal: { x: 0, y: -1, z: 0 },
    row: { x: 0, y: 0, z: -1 },
    column: { x: 1, y: 0, z: 0 },
    color: "yellow",
    label: "base",
  },
  L: {
    normal: { x: -1, y: 0, z: 0 },
    row: { x: 0, y: -1, z: 0 },
    column: { x: 0, y: 0, z: 1 },
    color: "orange",
    label: "esquerda",
  },
  R: {
    normal: { x: 1, y: 0, z: 0 },
    row: { x: 0, y: -1, z: 0 },
    column: { x: 0, y: 0, z: -1 },
    color: "red",
    label: "direita",
  },
  F: {
    normal: { x: 0, y: 0, z: 1 },
    row: { x: 0, y: -1, z: 0 },
    column: { x: 1, y: 0, z: 0 },
    color: "green",
    label: "frente",
  },
  B: {
    normal: { x: 0, y: 0, z: -1 },
    row: { x: 0, y: -1, z: 0 },
    column: { x: -1, y: 0, z: 0 },
    color: "blue",
    label: "trás",
  },
};

const FACE_IDS: FaceId[] = [
  "U",
  "D",
  "L",
  "R",
  "F",
  "B",
];

const SHUFFLE_LENGTH = 14;

function addVector(
  first: Vector3,
  second: Vector3,
): Vector3 {
  return {
    x: first.x + second.x,
    y: first.y + second.y,
    z: first.z + second.z,
  };
}

function scaleVector(
  vector: Vector3,
  amount: number,
): Vector3 {
  return {
    x: vector.x * amount,
    y: vector.y * amount,
    z: vector.z * amount,
  };
}

function dotVector(
  first: Vector3,
  second: Vector3,
): number {
  return first.x * second.x + first.y * second.y + first.z * second.z;
}

function crossVector(
  first: Vector3,
  second: Vector3,
): Vector3 {
  return {
    x: first.y * second.z - first.z * second.y,
    y: first.z * second.x - first.x * second.z,
    z: first.x * second.y - first.y * second.x,
  };
}

function roundVector(vector: Vector3): Vector3 {
  return {
    x: Math.round(vector.x),
    y: Math.round(vector.y),
    z: Math.round(vector.z),
  };
}

function vectorKey(vector: Vector3): string {
  return `${vector.x},${vector.y},${vector.z}`;
}

function stickerKey(
  position: Vector3,
  normal: Vector3,
): string {
  return `${vectorKey(position)}|${vectorKey(normal)}`;
}

function positionForIndex(
  face: FaceId,
  index: number,
): Vector3 {
  const orientation = FACE_ORIENTATIONS[face];
  const row = Math.floor(index / 3);
  const column = index % 3;

  return addVector(
    addVector(
      orientation.normal,
      scaleVector(
        orientation.row,
        row - 1,
      ),
    ),
    scaleVector(
      orientation.column,
      column - 1,
    ),
  );
}

function createSlotLookup(): Map<string, FaceSlot> {
  const lookup = new Map<string, FaceSlot>();

  FACE_IDS.forEach((face) => {
    const orientation = FACE_ORIENTATIONS[face];

    Array.from({ length: 9 }, (_, index) => {
      lookup.set(
        stickerKey(
          positionForIndex(
            face,
            index,
          ),
          orientation.normal,
        ),
        {
          face,
          index,
        },
      );
    });
  });

  return lookup;
}

const SLOT_LOOKUP = createSlotLookup();

function createInitialStickers(): Sticker[] {
  return FACE_IDS.flatMap((face) => {
    const orientation = FACE_ORIENTATIONS[face];

    return Array.from({ length: 9 }, (_, index) => ({
      id: `${face}-${index}`,
      color: orientation.color,
      position: positionForIndex(
        face,
        index,
      ),
      normal: {
        ...orientation.normal,
      },
    }));
  });
}

function createInitialState(): CubeState {
  return {
    stickers: createInitialStickers(),
    history: [],
    lastMove: "-",
  };
}

function rotateVector(
  vector: Vector3,
  axis: Vector3,
  direction: CubeDirection,
): Vector3 {
  const angle = direction === "clockwise"
    ? -Math.PI / 2
    : Math.PI / 2;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const axisCrossVector = crossVector(
    axis,
    vector,
  );
  const axisDotVector = dotVector(
    axis,
    vector,
  );

  return roundVector(
    addVector(
      addVector(
        scaleVector(
          vector,
          cos,
        ),
        scaleVector(
          axisCrossVector,
          sin,
        ),
      ),
      scaleVector(
        axis,
        axisDotVector * (1 - cos),
      ),
    ),
  );
}

function getStickerSlot(sticker: Sticker): FaceSlot {
  const slot = SLOT_LOOKUP.get(
    stickerKey(
      sticker.position,
      sticker.normal,
    ),
  );

  if (!slot) {
    throw new Error(`Invalid cube sticker position: ${sticker.id}`);
  }

  return slot;
}

function moveLabel(move: CubeMove): string {
  return move.direction === "clockwise"
    ? move.face
    : `${move.face}'`;
}

function inverseDirection(direction: CubeDirection): CubeDirection {
  return direction === "clockwise"
    ? "counterclockwise"
    : "clockwise";
}

function applyMoveToStickers(
  stickers: Sticker[],
  move: CubeMove,
): void {
  const axis = FACE_ORIENTATIONS[move.face].normal;

  stickers.forEach((sticker) => {
    if (
      dotVector(
        sticker.position,
        axis,
      ) !== 1
    ) {
      return;
    }

    sticker.position = rotateVector(
      sticker.position,
      axis,
      move.direction,
    );
    sticker.normal = rotateVector(
      sticker.normal,
      axis,
      move.direction,
    );
  });
}

function getFaceColors(state: CubeState): Record<FaceId, CubeColor[]> {
  const faceColors = FACE_IDS.reduce(
    (accumulator, face) => {
      accumulator[face] = Array.from({ length: 9 }) as CubeColor[];

      return accumulator;
    },
    {} as Record<FaceId, CubeColor[]>,
  );

  state.stickers.forEach((sticker) => {
    const slot = getStickerSlot(sticker);
    faceColors[slot.face][slot.index] = sticker.color;
  });

  return faceColors;
}

function isSolved(state: CubeState): boolean {
  const faceColors = getFaceColors(state);

  return FACE_IDS.every((face) => {
    const colors = faceColors[face];

    return colors.every((color) => color === colors[0]);
  });
}

function getElements(): CubeElements | null {
  const status = document.querySelector<HTMLElement>("#cube-status");
  const state = document.querySelector<HTMLElement>("#cube-state");
  const moveCount =
    document.querySelector<HTMLElement>("#cube-move-count");
  const lastMove =
    document.querySelector<HTMLElement>("#cube-last-move");
  const undoButton =
    document.querySelector<HTMLButtonElement>("#cube-undo-button");
  const resetButton =
    document.querySelector<HTMLButtonElement>("#cube-reset-button");
  const shuffleButton =
    document.querySelector<HTMLButtonElement>("#cube-shuffle-button");
  const moveButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-cube-move]"),
  );
  const faceButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-cube-face-turn]"),
  );
  const stickers = Array.from(
    document.querySelectorAll<HTMLElement>(
      "[data-cube-net-sticker], [data-cube-preview-sticker]",
    ),
  );
  const previewObject =
    document.querySelector<HTMLElement>(".cube-preview__object");

  if (
    !status ||
    !state ||
    !moveCount ||
    !lastMove ||
    !undoButton ||
    !resetButton ||
    !shuffleButton ||
    !previewObject ||
    moveButtons.length !== 12 ||
    faceButtons.length !== 6 ||
    stickers.length !== 81
  ) {
    return null;
  }

  return {
    status,
    state,
    moveCount,
    lastMove,
    undoButton,
    resetButton,
    shuffleButton,
    moveButtons,
    faceButtons,
    stickers,
    previewObject,
  };
}

function setStatus(
  elements: CubeElements,
  message: string,
): void {
  const messageElement = elements.status.querySelector<HTMLElement>(
    "[data-cube-status-message]",
  );

  if (messageElement) {
    messageElement.textContent = message;
  }
}

function render(
  elements: CubeElements,
  state: CubeState,
): void {
  const faceColors = getFaceColors(state);
  const solved = isSolved(state);

  elements.state.textContent = solved ? "Resolvido" : "Misturado";
  elements.moveCount.textContent = String(state.history.length);
  elements.lastMove.textContent = state.lastMove;
  elements.undoButton.disabled = state.history.length === 0;

  elements.stickers.forEach((stickerElement) => {
    const face = stickerElement.dataset.cubeFace as FaceId | undefined;
    const index = Number(stickerElement.dataset.cubeIndex);

    if (!face || !Number.isInteger(index)) {
      return;
    }

    const color = faceColors[face][index];
    stickerElement.dataset.cubeColor = color;
  });
}

let turnAnimationId = 0;

function animateTurn(
  elements: CubeElements,
  face: FaceId,
): void {
  turnAnimationId += 1;

  const currentAnimationId = turnAnimationId;
  const faceButton = elements.faceButtons.find(
    (button) => button.dataset.cubeFaceTurn === face,
  );

  elements.faceButtons.forEach((button) => {
    button.classList.remove("is-turning");
  });
  elements.previewObject.classList.remove("is-rotating");

  void elements.previewObject.offsetWidth;

  elements.previewObject.classList.add("is-rotating");
  faceButton?.classList.add("is-turning");

  window.setTimeout(() => {
    if (currentAnimationId !== turnAnimationId) {
      return;
    }

    elements.previewObject.classList.remove("is-rotating");
    faceButton?.classList.remove("is-turning");
  }, 280);
}

function applyMove(
  elements: CubeElements,
  state: CubeState,
  move: CubeMove,
  record = true,
): void {
  applyMoveToStickers(
    state.stickers,
    move,
  );

  if (record) {
    state.history.push(move);
  }

  state.lastMove = moveLabel(move);

  setStatus(
    elements,
    isSolved(state)
      ? "Cubo resolvido."
      : `Giro ${state.lastMove} aplicado.`,
  );
  render(
    elements,
    state,
  );
  animateTurn(
    elements,
    move.face,
  );
}

function undoMove(
  elements: CubeElements,
  state: CubeState,
): void {
  const move = state.history.pop();

  if (!move) {
    return;
  }

  const inverseMove: CubeMove = {
    face: move.face,
    direction: inverseDirection(move.direction),
  };

  applyMoveToStickers(
    state.stickers,
    inverseMove,
  );
  state.lastMove = `${moveLabel(move)} desfeito`;

  setStatus(
    elements,
    "Último giro desfeito.",
  );
  render(
    elements,
    state,
  );
  animateTurn(
    elements,
    inverseMove.face,
  );
}

function shuffleCube(
  elements: CubeElements,
  state: CubeState,
): void {
  let previousFace: FaceId | null = null;

  Array.from({ length: SHUFFLE_LENGTH }).forEach(() => {
    const availableFaces = FACE_IDS.filter((face) => face !== previousFace);
    const face = availableFaces[
      Math.floor(Math.random() * availableFaces.length)
    ];
    const direction: CubeDirection = Math.random() > 0.5
      ? "clockwise"
      : "counterclockwise";

    previousFace = face;

    applyMoveToStickers(
      state.stickers,
      {
        face,
        direction,
      },
    );
  });

  state.history = [];
  state.lastMove = "Embaralhado";

  setStatus(
    elements,
    "Cubo embaralhado. Comece a resolver pelos giros.",
  );
  render(
    elements,
    state,
  );
  if (previousFace) {
    animateTurn(
      elements,
      previousFace,
    );
  }
}

function resetCube(
  elements: CubeElements,
  state: CubeState,
): void {
  const freshState = createInitialState();

  state.stickers = freshState.stickers;
  state.history = freshState.history;
  state.lastMove = freshState.lastMove;

  setStatus(
    elements,
    "Cubo reiniciado.",
  );
  render(
    elements,
    state,
  );
}

export function setupCubeGame(): void {
  const elements = getElements();

  if (!elements) {
    return;
  }

  const state = createInitialState();

  elements.moveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const face = button.dataset.cubeMove as FaceId | undefined;
      const direction = button.dataset.cubeDirection as
        | CubeDirection
        | undefined;

      if (!face || !direction) {
        return;
      }

      applyMove(
        elements,
        state,
        {
          face,
          direction,
        },
      );
    });
  });

  elements.faceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const face = button.dataset.cubeFaceTurn as FaceId | undefined;

      if (!face) {
        return;
      }

      applyMove(
        elements,
        state,
        {
          face,
          direction: "clockwise",
        },
      );
    });
  });

  elements.undoButton.addEventListener("click", () => {
    undoMove(
      elements,
      state,
    );
  });

  elements.resetButton.addEventListener("click", () => {
    resetCube(
      elements,
      state,
    );
  });

  elements.shuffleButton.addEventListener("click", () => {
    shuffleCube(
      elements,
      state,
    );
  });

  render(
    elements,
    state,
  );
}
