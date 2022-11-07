import { SudokuBoard } from "../types/puzzle";

export const REST = {
    getBoard(level = "normal") {
        console.log({ level });
        return fetch(`http://localhost:5001/puzzle/${level}`);
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
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
};
