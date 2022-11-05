import { Util } from "./Util.js";
import { SudokuUtil } from "./SudokuUtil.js";
import { SudokuBoard } from "./types/puzzle.js";

export class Sudoku {
    sudoku: SudokuBoard;
    solvedSudoku: SudokuBoard;
    isValidSudoku: boolean;
    isSolved: boolean;

    constructor(sudoku: SudokuBoard = []) {
        if (sudoku.length === 0) {
            this.sudoku = createPuzzle();
        } else {
            this.sudoku = sudoku;
        }
        this.solvedSudoku = [];
        this.isValidSudoku = false;
        this.isSolved = false;
    }

    /*
        * getter method for random sudoku (랜덤 스도쿠 문제 가져오기)
        ? params
            none
        ? returns
            this.sudoku  
    */
    get puzzle() {
        return this.sudoku;
    }

    /*
        * getter method for solution of the sudoku. (문제 풀이 가져오기)
        ? params
            none
        ? returns
            this.solvedSudoku
    */
    get solvedPuzzle() {
        return this.solvedSudoku;
    }

    /*
        * method to validate solution of the sudoku.
        ? params
            none
        ? returns
            true if the solved puzzle is valid false otherwise
    */
    validate() {
        return isValidSolution(this.sudoku);
    }

    /*
        * method to validate solution of the sudoku
        ? params
            none
        ? returns
            true of the puzzle is valid - saves the solution to this.solvedSudoku
            false if the puzzle is invalid or valid but doesn't have any solution
    */
    isSolvable() {
        this.isValidSudoku = isValidPuzzle(this.sudoku);

        if (!this.isValidSudoku) return false;

        Util.copyGrid(this.sudoku, this.solvedSudoku);
        return solve(this.solvedSudoku);
    }
}

const isValidPuzzle = (grid: SudokuBoard) => {
    if (!SudokuUtil.isValidPuzzle(grid)) return false;

    return true;
};

const isValidSolution = (grid: SudokuBoard) => {
    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            if (grid[i][j] === 0) {
                return false;
            }
        }
    }
    return SudokuUtil.isValidPuzzle(grid);
};

const solve = (grid: SudokuBoard) => {
    for (let row = 0; row < 9; row += 1) {
        for (let col = 0; col < 9; col += 1) {
            if (grid[row][col] === 0) {
                for (
                    let possibleNumber = 1;
                    possibleNumber <= 9;
                    possibleNumber == 1
                ) {
                    if (
                        SudokuUtil.isValidPlace(grid, row, col, possibleNumber)
                    ) {
                        grid[row][col] = possibleNumber;
                        if (solve(grid)) return true;
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const createPuzzle = () => {
    let puzzle = getRandomSudoku();
    let solution = solve(puzzle);
    if (solution) {
        for (let i = 0; i < 9; i += 1) {
            for (let j = 0; j < 9; j += 1) {
                if (Math.random() > 0.3) puzzle[i][j] = 0;
            }
        }
    }
    return puzzle;
};

const getRandomSudoku = () => {
    const randomSudoku: SudokuBoard = [];
    for (let i = 0; i < 9; i += 1) {
        randomSudoku[i] = Array(9).fill(0);
    }
    for (let i = 0; i < 8; i += 1) {
        let number = Math.floor(Math.random() * 8) + 1;
        while (!SudokuUtil.isValidPlace(randomSudoku, 0, i, number)) {
            number = Math.floor(Math.random() * 8) + 1;
        }
        if (SudokuUtil.isValidPlace(randomSudoku, 0, i, number)) {
            randomSudoku[0][i] = number;
        }
    }
    return randomSudoku;
};
