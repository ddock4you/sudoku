import { SudokuBoard } from "./types/puzzle.js";

export const Util = {
    print2DArray(grid: SudokuBoard) {
        for (let i = 0; i < grid.length; i += 1) {
            console.log(...grid[i]);
        }
        console.log();
    },
    copyGrid(from: SudokuBoard, to: SudokuBoard) {
        for (let i = 0; i < from.length; i += 1) {
            to[i] = [...from[i]];
        }
    },
};
