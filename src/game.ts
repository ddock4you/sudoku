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
    for (let i = 0; i < localBoxRow + 3; i += 1) {
        for (let j = 0; j < localBoxCol + 3; j += 1) {
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

solve(board);
console.log(board);
