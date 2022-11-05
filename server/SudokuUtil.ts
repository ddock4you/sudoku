import { SudokuBoard } from "./types/puzzle.js";

export const SudokuUtil = {
    isValidPuzzle(grid: SudokuBoard) {
        for (let i = 0; i < grid.length; i += 1) {
            if (!isValidRow(grid, i)) {
                return false;
            }
            if (!isValidCol(grid, i)) {
                return false;
            }
        }
        if (!isValidBox(grid)) {
            return false;
        }
        return true;
    },

    isValidPlace(grid, row, column, number) {
        for (let i = 0; i < 9; i += 1) {
            if (grid[i][column] === number) {
                return false;
            }
        }
        for (let i = 0; i < 9; i += 1) {
            if (grid[row][i] === number) {
                return false;
            }
        }
        let localBoxRow = row - (row % 3);
        let localBoxCol = column - (column % 3);
        for (let i = localBoxRow; i < localBoxRow + 3; i += 1) {
            for (let j = localBoxCol; j < localBoxCol + 3; j += 1) {
                if (grid[i][j] === number) {
                    return false;
                }
            }
        }
        return true;
    },

    isValidCol(grid, col) {
        let set = new Set();
        for (let i = 0; i < 9; i += 1) {
            let number = grid[i][col];
            if (number < 0 || number > 9) {
                return false;
            }
            if (set.has(number)) {
                return false;
            }
            number !== 0 && set.add(number);
        }
        return true;
    },

    isValidBox(grid) {
        for (let row = 0; row < grid.length; row += 3) {
            for (let column = 0; column < grid.length; column += 3) {
                let set = new Set();
                for (let subRow = 0; subRow < 3; subRow += 1) {
                    for (let subCol = 0; subCol < 3; subCol += 1) {
                        let number = grid[subRow][subCol];
                        if (number < 0 || number > 9) {
                            return false;
                        }
                        if (set.has(number)) {
                            return false;
                        }
                        number !== 0 && set.add(number);
                    }
                }
            }
        }
        return true;
    },
};
