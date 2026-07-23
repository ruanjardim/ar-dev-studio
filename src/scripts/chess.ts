import { createInitialPosition } from "../components/chess/initialPosition";
import {
  FILES,
  findPiece,
  square,
  type ChessMove,
  type ChessPiece,
  type File,
  type PieceColor,
  type PieceType,
  type Rank,
  type Square,
} from "../components/chess/model";

type ChessElements = {
  board: HTMLElement;
  squares: HTMLButtonElement[];
  status: HTMLElement;
  turn: HTMLElement;
  moveCount: HTMLElement;
  captureCount: HTMLElement;
  moveLog: HTMLElement;
  undoButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
};

type AppliedMove = ChessMove & {
  movedPieceSnapshot: ChessPiece;
  capturedPiece?: ChessPiece;
  notation: string;
  previousTurn: PieceColor;
};

type ChessState = {
  pieces: ChessPiece[];
  turn: PieceColor;
  selectedSquare: Square | null;
  legalMoves: Square[];
  history: AppliedMove[];
};

const PIECE_SYMBOLS: Record<PieceColor, Record<PieceType, string>> = {
  white: {
    king: "&#9812;",
    queen: "&#9813;",
    rook: "&#9814;",
    bishop: "&#9815;",
    knight: "&#9816;",
    pawn: "&#9817;",
  },
  black: {
    king: "&#9818;",
    queen: "&#9819;",
    rook: "&#9820;",
    bishop: "&#9821;",
    knight: "&#9822;",
    pawn: "&#9823;",
  },
};

const PIECE_LABELS: Record<PieceType, string> = {
  king: "rei",
  queen: "dama",
  rook: "torre",
  bishop: "bispo",
  knight: "cavalo",
  pawn: "peão",
};

const COLOR_LABELS: Record<PieceColor, string> = {
  white: "branco",
  black: "preto",
};

const TURN_LABELS: Record<PieceColor, string> = {
  white: "Brancas",
  black: "Pretas",
};

const ASCENDING_RANKS: readonly Rank[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];

function getElements(): ChessElements | null {
  const board = document.querySelector<HTMLElement>("#chess-board");
  const status = document.querySelector<HTMLElement>("#chess-status");
  const turn = document.querySelector<HTMLElement>("#chess-turn");
  const moveCount =
    document.querySelector<HTMLElement>("#chess-move-count");
  const captureCount =
    document.querySelector<HTMLElement>("#chess-capture-count");
  const moveLog = document.querySelector<HTMLElement>("#chess-move-log");
  const undoButton =
    document.querySelector<HTMLButtonElement>("#chess-undo-button");
  const resetButton =
    document.querySelector<HTMLButtonElement>("#chess-reset-button");
  const squares = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-chess-square]"),
  );

  if (
    !board ||
    !status ||
    !turn ||
    !moveCount ||
    !captureCount ||
    !moveLog ||
    !undoButton ||
    !resetButton ||
    squares.length !== 64
  ) {
    return null;
  }

  return {
    board,
    squares,
    status,
    turn,
    moveCount,
    captureCount,
    moveLog,
    undoButton,
    resetButton,
  };
}

function clonePiece(piece: ChessPiece): ChessPiece {
  return {
    ...piece,
  };
}

function getInitialState(): ChessState {
  return {
    pieces: createInitialPosition(),
    turn: "white",
    selectedSquare: null,
    legalMoves: [],
    history: [],
  };
}

function isFile(value: string): value is File {
  return FILES.includes(value as File);
}

function isRank(value: number): value is Rank {
  return ASCENDING_RANKS.includes(value as Rank);
}

function toSquare(
  fileIndex: number,
  rank: number,
): Square | null {
  const file = FILES[fileIndex];

  if (!file || !isRank(rank)) {
    return null;
  }

  return square(
    file,
    rank,
  );
}

function parseSquare(target: Square): {
  fileIndex: number;
  rank: Rank;
} {
  const file = target[0];
  const rank = Number(target[1]);

  if (!isFile(file) || !isRank(rank)) {
    throw new Error(`Invalid square: ${target}`);
  }

  return {
    fileIndex: FILES.indexOf(file),
    rank,
  };
}

function getPieceAt(
  state: ChessState,
  target: Square,
): ChessPiece | undefined {
  return findPiece(
    state.pieces,
    target,
  );
}

function isOpponentPiece(
  piece: ChessPiece | undefined,
  color: PieceColor,
): boolean {
  return Boolean(piece && piece.color !== color);
}

function getPawnMoves(
  state: ChessState,
  piece: ChessPiece,
): Square[] {
  const moves: Square[] = [];
  const { fileIndex, rank } = parseSquare(piece.square);
  const direction = piece.color === "white" ? 1 : -1;
  const startRank = piece.color === "white" ? 2 : 7;
  const oneStep = toSquare(
    fileIndex,
    rank + direction,
  );

  if (oneStep && !getPieceAt(state, oneStep)) {
    moves.push(oneStep);

    const twoStep = toSquare(
      fileIndex,
      rank + direction * 2,
    );

    if (
      rank === startRank &&
      twoStep &&
      !getPieceAt(state, twoStep)
    ) {
      moves.push(twoStep);
    }
  }

  [-1, 1].forEach((fileOffset) => {
    const target = toSquare(
      fileIndex + fileOffset,
      rank + direction,
    );

    if (
      target &&
      isOpponentPiece(
        getPieceAt(
          state,
          target,
        ),
        piece.color,
      )
    ) {
      moves.push(target);
    }
  });

  return moves;
}

function getSteppedMoves(
  state: ChessState,
  piece: ChessPiece,
  offsets: Array<[number, number]>,
): Square[] {
  const moves: Square[] = [];
  const { fileIndex, rank } = parseSquare(piece.square);

  offsets.forEach(([fileOffset, rankOffset]) => {
    const target = toSquare(
      fileIndex + fileOffset,
      rank + rankOffset,
    );

    if (!target) {
      return;
    }

    const targetPiece = getPieceAt(
      state,
      target,
    );

    if (!targetPiece || targetPiece.color !== piece.color) {
      moves.push(target);
    }
  });

  return moves;
}

function getSlidingMoves(
  state: ChessState,
  piece: ChessPiece,
  directions: Array<[number, number]>,
): Square[] {
  const moves: Square[] = [];
  const { fileIndex, rank } = parseSquare(piece.square);

  directions.forEach(([fileDirection, rankDirection]) => {
    let nextFileIndex = fileIndex + fileDirection;
    let nextRank = rank + rankDirection;
    let target = toSquare(
      nextFileIndex,
      nextRank,
    );

    while (target) {
      const targetPiece = getPieceAt(
        state,
        target,
      );

      if (!targetPiece) {
        moves.push(target);
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push(target);
        }

        break;
      }

      nextFileIndex += fileDirection;
      nextRank += rankDirection;
      target = toSquare(
        nextFileIndex,
        nextRank,
      );
    }
  });

  return moves;
}

function getLegalMoves(
  state: ChessState,
  piece: ChessPiece,
): Square[] {
  if (piece.type === "pawn") {
    return getPawnMoves(
      state,
      piece,
    );
  }

  if (piece.type === "knight") {
    return getSteppedMoves(
      state,
      piece,
      [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
      ],
    );
  }

  if (piece.type === "king") {
    return getSteppedMoves(
      state,
      piece,
      [
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
      ],
    );
  }

  const diagonalDirections: Array<[number, number]> = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];

  const straightDirections: Array<[number, number]> = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  if (piece.type === "bishop") {
    return getSlidingMoves(
      state,
      piece,
      diagonalDirections,
    );
  }

  if (piece.type === "rook") {
    return getSlidingMoves(
      state,
      piece,
      straightDirections,
    );
  }

  return getSlidingMoves(
    state,
    piece,
    [
      ...diagonalDirections,
      ...straightDirections,
    ],
  );
}

function renderCoordinate(target: Square): string {
  const file = target[0];
  const rank = Number(target[1]);
  const fileLabel = rank === 1
    ? `
      <span
        class="chess-square__file"
        aria-hidden="true"
      >
        ${file}
      </span>
    `
    : "";

  const rankLabel = file === "a"
    ? `
      <span
        class="chess-square__rank"
        aria-hidden="true"
      >
        ${rank}
      </span>
    `
    : "";

  return `${rankLabel}${fileLabel}`;
}

function renderPiece(piece?: ChessPiece): string {
  if (!piece) {
    return "";
  }

  return `
    <span
      class="chess-piece chess-piece--${piece.color}"
      data-chess-piece-id="${piece.id}"
      data-chess-piece-color="${piece.color}"
      data-chess-piece-type="${piece.type}"
      aria-hidden="true"
    >
      ${PIECE_SYMBOLS[piece.color][piece.type]}
    </span>
  `;
}

function getSquareLabel(
  target: Square,
  piece?: ChessPiece,
): string {
  if (!piece) {
    return `Casa ${target}, vazia`;
  }

  return `${PIECE_LABELS[piece.type]} ${COLOR_LABELS[piece.color]} em ${target}`;
}

function setStatus(
  elements: ChessElements,
  message: string,
): void {
  elements.status.textContent = message;
}

function renderMoveLog(
  elements: ChessElements,
  history: AppliedMove[],
): void {
  if (history.length === 0) {
    elements.moveLog.innerHTML = "<li>Nenhum movimento ainda.</li>";
    return;
  }

  const visibleMoves = history.slice(-8);
  const firstVisibleMoveNumber = history.length - visibleMoves.length + 1;

  elements.moveLog.innerHTML = visibleMoves
    .map((move, index) => `
      <li>
        <span>${firstVisibleMoveNumber + index}.</span>
        <strong>${move.notation}</strong>
      </li>
    `)
    .join("");
}

function render(
  elements: ChessElements,
  state: ChessState,
): void {
  elements.turn.textContent = TURN_LABELS[state.turn];
  elements.moveCount.textContent = String(state.history.length);
  elements.captureCount.textContent = String(
    state.history.filter((move) => move.capturedPiece).length,
  );
  elements.undoButton.disabled = state.history.length === 0;

  elements.squares.forEach((squareElement) => {
    const target = squareElement.dataset.chessSquare as Square;
    const piece = getPieceAt(
      state,
      target,
    );
    const isSelected = state.selectedSquare === target;
    const isLegalTarget = state.legalMoves.includes(target);
    const isCaptureTarget = Boolean(
      isLegalTarget &&
      piece &&
      piece.color !== state.turn,
    );

    squareElement.classList.toggle(
      "is-selected",
      isSelected,
    );
    squareElement.classList.toggle(
      "is-legal-target",
      isLegalTarget && !isCaptureTarget,
    );
    squareElement.classList.toggle(
      "is-capture-target",
      isCaptureTarget,
    );
    squareElement.setAttribute(
      "aria-pressed",
      String(isSelected),
    );
    squareElement.setAttribute(
      "aria-label",
      getSquareLabel(
        target,
        piece,
      ),
    );
    squareElement.innerHTML = `
      ${renderCoordinate(target)}
      ${renderPiece(piece)}
    `;
  });

  renderMoveLog(
    elements,
    state.history,
  );
}

function selectPiece(
  elements: ChessElements,
  state: ChessState,
  piece: ChessPiece,
): void {
  state.selectedSquare = piece.square;
  state.legalMoves = getLegalMoves(
    state,
    piece,
  );

  if (state.legalMoves.length === 0) {
    setStatus(
      elements,
      "Esta peça não tem movimento livre agora.",
    );
  } else {
    setStatus(
      elements,
      `${PIECE_LABELS[piece.type]} ${COLOR_LABELS[piece.color]} selecionado.`,
    );
  }

  render(
    elements,
    state,
  );
}

function clearSelection(state: ChessState): void {
  state.selectedSquare = null;
  state.legalMoves = [];
}

function getMoveNotation(
  piece: ChessPiece,
  from: Square,
  to: Square,
  capturedPiece?: ChessPiece,
): string {
  const capture = capturedPiece ? "x" : "-";

  return `${PIECE_LABELS[piece.type]} ${from}${capture}${to}`;
}

function applyMove(
  elements: ChessElements,
  state: ChessState,
  from: Square,
  to: Square,
): void {
  const movingPiece = getPieceAt(
    state,
    from,
  );

  if (!movingPiece) {
    return;
  }

  const capturedPiece = getPieceAt(
    state,
    to,
  );
  const movingPieceSnapshot = clonePiece(movingPiece);
  const previousTurn = state.turn;

  if (capturedPiece) {
    state.pieces = state.pieces.filter(
      (piece) => piece.id !== capturedPiece.id,
    );
  }

  movingPiece.square = to;
  movingPiece.hasMoved = true;

  state.history.push({
    from,
    to,
    pieceId: movingPiece.id,
    capturedPieceId: capturedPiece?.id,
    movedPieceSnapshot: movingPieceSnapshot,
    capturedPiece: capturedPiece
      ? clonePiece(capturedPiece)
      : undefined,
    notation: getMoveNotation(
      movingPiece,
      from,
      to,
      capturedPiece,
    ),
    previousTurn,
  });

  state.turn = state.turn === "white" ? "black" : "white";
  clearSelection(state);

  setStatus(
    elements,
    `${TURN_LABELS[state.turn]} jogam agora.`,
  );
  render(
    elements,
    state,
  );
}

function handleSquareClick(
  elements: ChessElements,
  state: ChessState,
  target: Square,
): void {
  const targetPiece = getPieceAt(
    state,
    target,
  );

  if (state.selectedSquare) {
    const selectedPiece = getPieceAt(
      state,
      state.selectedSquare,
    );

    if (!selectedPiece) {
      clearSelection(state);
      render(
        elements,
        state,
      );
      return;
    }

    if (target === state.selectedSquare) {
      clearSelection(state);
      setStatus(
        elements,
        `${TURN_LABELS[state.turn]} seguem no turno.`,
      );
      render(
        elements,
        state,
      );
      return;
    }

    if (targetPiece?.color === state.turn) {
      selectPiece(
        elements,
        state,
        targetPiece,
      );
      return;
    }

    if (state.legalMoves.includes(target)) {
      applyMove(
        elements,
        state,
        selectedPiece.square,
        target,
      );
      return;
    }

    setStatus(
      elements,
      "Movimento bloqueado nesta versão básica.",
    );
    return;
  }

  if (!targetPiece) {
    setStatus(
      elements,
      `Escolha uma peça ${COLOR_LABELS[state.turn]}.`,
    );
    return;
  }

  if (targetPiece.color !== state.turn) {
    setStatus(
      elements,
      `Agora é o turno das ${TURN_LABELS[state.turn].toLowerCase()}.`,
    );
    return;
  }

  selectPiece(
    elements,
    state,
    targetPiece,
  );
}

function undoMove(
  elements: ChessElements,
  state: ChessState,
): void {
  const lastMove = state.history.pop();

  if (!lastMove) {
    return;
  }

  const movedPiece = state.pieces.find(
    (piece) => piece.id === lastMove.pieceId,
  );

  if (movedPiece) {
    Object.assign(
      movedPiece,
      clonePiece(lastMove.movedPieceSnapshot),
    );
  }

  if (lastMove.capturedPiece) {
    state.pieces.push(
      clonePiece(lastMove.capturedPiece),
    );
  }

  state.turn = lastMove.previousTurn;
  clearSelection(state);

  setStatus(
    elements,
    "Jogada desfeita.",
  );
  render(
    elements,
    state,
  );
}

function resetGame(
  elements: ChessElements,
  state: ChessState,
): void {
  const freshState = getInitialState();

  state.pieces = freshState.pieces;
  state.turn = freshState.turn;
  state.selectedSquare = freshState.selectedSquare;
  state.legalMoves = freshState.legalMoves;
  state.history = freshState.history;

  setStatus(
    elements,
    "Partida reiniciada. As brancas começam.",
  );
  render(
    elements,
    state,
  );
}

export function setupChessGame(): void {
  const elements = getElements();

  if (!elements) {
    return;
  }

  const state = getInitialState();

  elements.squares.forEach((squareElement) => {
    squareElement.addEventListener("click", () => {
      const target = squareElement.dataset.chessSquare as Square | undefined;

      if (!target) {
        return;
      }

      handleSquareClick(
        elements,
        state,
        target,
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
    resetGame(
      elements,
      state,
    );
  });

  render(
    elements,
    state,
  );
}
