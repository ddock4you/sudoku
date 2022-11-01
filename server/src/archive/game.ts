const { util } = require("./util");

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const isValidPlace = (grid: number[][], row: number, col: number, number: number) => {
    for (let i = 0; i < 9; i += 1) {
        if (grid[i][col] === number) {
            return false;
        }
    }
    for (let i = 0; i < 9; i += 1) {
        if (grid[row][i] === number) {
            return false;
        }
    }
    let localBoxRow = row - (row % 3);
    let localBoxCol = col - (col % 3);
    for (let i = localBoxRow; i < localBoxRow + 3; i += 1) {
        for (let j = localBoxCol; j < localBoxCol + 3; j += 1) {
            if (grid[i][j] === number) {
                return false;
            }
        }
    }
    return true;
};

const solve = (grid: number[][]) => {
    for (let row = 0; row < 9; row += 1) {
        for (let col = 0; col < 9; col += 1) {
            if (grid[row][col] === 0) {
                for (let guess = 1; guess < 10; guess += 1) {
                    if (isValidPlace(grid, row, col, guess)) {
                        grid[row][col] = guess;
                        if (solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const getRandomSudoku = () => {
    let puzzle = [];
    for (let i = 0; i < 9; i += 1) {
        puzzle[i] = Array(9).fill(0);
    }
    for (let i = 0; i < 8; i += 1) {
        let number = Math.floor(Math.random() * 8) + 1;
        while (!isValidPlace(puzzle, 0, i, number)) {
            number = Math.floor(Math.random() * 8) + 1;
        }
        puzzle[0][i] = number;
    }
    return puzzle;
};

const createPuzzle = () => {
    // let puzzle = [];
    // for (let i = 0; i < 9; i += 1) {
    //     puzzle[i] = Array(9).fill(0);
    // }
    let puzzle = getRandomSudoku();
    solve(puzzle);
    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            if (Math.random() > 0.7) puzzle[i][j] = 0;
        }
    }
    return puzzle;
};

let solution: number[][] = [];
let puzzle = createPuzzle();
util.copyGrid(board, solution);
util.print2DArray(puzzle);
// solve(puzzle);
// util.print2DArray(puzzle);
