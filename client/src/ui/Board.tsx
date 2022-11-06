import React, { ChangeEvent } from "react";
import Tile from "./Tile";
import { SudokuBoard } from "../types/puzzle";

type BaordProp = {
    puzzle: SudokuBoard;
    grid: SudokuBoard;
    handleChange: (
        row: number,
        col: number,
        e: ChangeEvent<HTMLInputElement>
    ) => void;
};

const Board = ({ puzzle, grid, handleChange }: BaordProp) => {
    return (
        <div className="board">
            {grid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    // const arrayParameter = {row, rowIndex, col, colIndex};
                    const enteredValue = puzzle[rowIndex][colIndex];
                    return (
                        <Tile
                            enteredValue={enteredValue}
                            col={col}
                            colIndex={colIndex}
                            rowIndex={rowIndex}
                            handleChange={handleChange}
                            key={`${rowIndex}-${colIndex}`}
                        />
                    );
                });
            })}
        </div>
    );
};

export default Board;
