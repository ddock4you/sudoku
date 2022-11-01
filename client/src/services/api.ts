export const REST = {
    getBoard() {
        return fetch(`http://localhost:5000/puzzle`);
    },

    solveBoard(grid) {
        const data = {
            board: grid,
        };
        return fetch(`http://localhost:5000/solve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },

    validateBoard(grid) {
        const data = {
            board: grid,
        };
        return fetch(`http://localhost:5000/validate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
};
