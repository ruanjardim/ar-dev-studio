import { createInitialPosition } from "./initialPosition";
import {
  FILES,
  RANKS,
  findPiece,
  square,
  type ChessPiece,
  type File,
  type PieceColor,
  type PieceType,
  type Rank,
} from "./model";

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

function getSquareTone(
  fileIndex: number,
  rank: Rank,
): "light" | "dark" {
  return (fileIndex + rank) % 2 === 0 ? "light" : "dark";
}

function getSquareLabel(
  target: string,
  piece?: ChessPiece,
): string {
  if (!piece) {
    return `Casa ${target}, vazia`;
  }

  return `${PIECE_LABELS[piece.type]} ${COLOR_LABELS[piece.color]} em ${target}`;
}

function renderCoordinate(
  file: File,
  rank: Rank,
): string {
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

function renderSquare(
  pieces: ChessPiece[],
  file: File,
  rank: Rank,
  fileIndex: number,
): string {
  const target = square(
    file,
    rank,
  );

  const tone = getSquareTone(
    fileIndex,
    rank,
  );

  const piece = findPiece(
    pieces,
    target,
  );

  return `
    <button
      class="chess-square chess-square--${tone}"
      type="button"
      role="gridcell"
      data-chess-square="${target}"
      data-square-tone="${tone}"
      aria-label="${getSquareLabel(target, piece)}"
      aria-pressed="false"
    >
      ${renderCoordinate(file, rank)}
      ${renderPiece(piece)}
    </button>
  `;
}

export function ChessBoard(): string {
  const pieces = createInitialPosition();

  return `
    <div
      class="chess-board"
      id="chess-board"
      role="grid"
      aria-label="Tabuleiro de xadrez"
    >
      ${RANKS.map((rank) =>
        FILES.map((file, fileIndex) =>
          renderSquare(
            pieces,
            file,
            rank,
            fileIndex,
          ),
        ).join(""),
      ).join("")}
    </div>
  `;
}
