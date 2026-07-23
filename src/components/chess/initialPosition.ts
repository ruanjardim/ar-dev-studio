import {
  ChessPiece,
  PieceColor,
  PieceType,
  Square,
} from "./model";

type PieceDefinition = {
  type: PieceType;
  square: Square;
};

function createPiece(
  color: PieceColor,
  type: PieceType,
  square: Square,
  index = 0,
): ChessPiece {
  return {
    id: `${color}-${type}-${index}-${square}`,
    color,
    type,
    square,
    hasMoved: false,
  };
}

const majorPieces: PieceDefinition[] = [
  { type: "rook", square: "a1" },
  { type: "knight", square: "b1" },
  { type: "bishop", square: "c1" },
  { type: "queen", square: "d1" },
  { type: "king", square: "e1" },
  { type: "bishop", square: "f1" },
  { type: "knight", square: "g1" },
  { type: "rook", square: "h1" },
];

const files = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
] as const;

export function createInitialPosition(): ChessPiece[] {
  const pieces: ChessPiece[] = [];

  majorPieces.forEach((piece, index) => {
    pieces.push(
      createPiece(
        "white",
        piece.type,
        piece.square,
        index,
      ),
    );
  });

  files.forEach((file, index) => {
    pieces.push(
      createPiece(
        "white",
        "pawn",
        `${file}2`,
        index,
      ),
    );
  });

  majorPieces.forEach((piece, index) => {
    pieces.push(
      createPiece(
        "black",
        piece.type,
        piece.square.replace("1", "8") as Square,
        index,
      ),
    );
  });

  files.forEach((file, index) => {
    pieces.push(
      createPiece(
        "black",
        "pawn",
        `${file}7`,
        index,
      ),
    );
  });

  return pieces;
}