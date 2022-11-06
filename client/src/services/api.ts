import { SudokuBoard } from "../types/puzzle";

export const REST = {
    getBoard() {
        return fetch(`http://localhost:5001/puzzle`);
    },

    solveBoard(grid: SudokuBoard) {
        const data = {
            board: grid,
        };
        return fetch(`http://localhost:5001/solve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },

    validateBoard(grid: SudokuBoard) {
        const data = {
            board: grid,
        };
        return fetch(`http://localhost:5001/validate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
};
