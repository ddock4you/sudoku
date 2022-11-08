import React, { ChangeEvent } from "react";
import Tile from "./Tile";
import { SudokuBoard } from "../types/puzzle";
import styled from "styled-components";

type BaordProp = {
    puzzle: SudokuBoard;
    grid: SudokuBoard;
    handleChange: (
        row: number,
        col: number,
        e: ChangeEvent<HTMLInputElement>
    ) => void;
};

const BoardArea = styled.div`
    & {
        display: grid;
        grid-template-columns: repeat(9, 0fr);
        padding: 20px;
    }
`;

const Board = ({ puzzle, grid, handleChange }: BaordProp) => {
    return (
        <BoardArea className="board">
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
        </BoardArea>
    );
};

export default Board;
