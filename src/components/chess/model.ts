/**
 * ==========================================================
 * AR Logic Lab
 * Chess Engine - Domain Model
 * ==========================================================
 */

export type PieceColor =
  | "white"
  | "black";

export type PieceType =
  | "king"
  | "queen"
  | "rook"
  | "bishop"
  | "knight"
  | "pawn";

export type File =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h";

export type Rank =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;

export type Square =
  `${File}${Rank}`;

export interface ChessPiece {

  /**
   * Identificador único.
   * Ex.: white-king
   */
  id: string;

  /**
   * Tipo da peça.
   */
  type: PieceType;

  /**
   * Cor.
   */
  color: PieceColor;

  /**
   * Casa atual.
   */
  square: Square;

  /**
   * Já movimentou?
   */
  hasMoved: boolean;
}

export interface ChessMove {

  from: Square;

  to: Square;

  pieceId: string;

  capturedPieceId?: string;

  promotion?: PieceType;

  isCastle?: boolean;

  isEnPassant?: boolean;

  isCheck?: boolean;

  isCheckMate?: boolean;
}

export interface ChessPosition {

  pieces: ChessPiece[];

  turn: PieceColor;

  selectedSquare: Square | null;

  legalMoves: Square[];

  history: ChessMove[];
}

export interface ChessGameState {

  position: ChessPosition;

  winner: PieceColor | null;

  check: boolean;

  checkMate: boolean;

  stalemate: boolean;

  halfMoveClock: number;

  fullMoveNumber: number;
}

/**
 * Arquivos do tabuleiro.
 */

export const FILES: readonly File[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
];

/**
 * Linhas do tabuleiro.
 */

export const RANKS: readonly Rank[] = [
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
];

/**
 * Constrói uma coordenada.
 */

export function square(
  file: File,
  rank: Rank,
): Square {

  return `${file}${rank}`;
}

/**
 * Procura uma peça em determinada casa.
 */

export function findPiece(
  pieces: ChessPiece[],
  target: Square,
): ChessPiece | undefined {

  return pieces.find(
    (piece) => piece.square === target,
  );
}

/**
 * Verifica se uma casa está ocupada.
 */

export function isOccupied(
  pieces: ChessPiece[],
  target: Square,
): boolean {

  return findPiece(
    pieces,
    target,
  ) !== undefined;
}