import React, { useState } from "react";
import Board from "./ui/Board";
import Interface from "./ui/Interface";
import { REST } from "./services/api";

const getGrid = () => {
    let grid = [];
    for (let i = 0; i < 9; i += 1) {
        grid.push(Array(9).fill(0));
    }
    return grid;
};

const Sudoku = () => {
    const [grid, setGrid] = useState(getGrid);
    const [puzzleStatus, setPuzzleStatus] = useState("");

    const handleCreate = async () => {
        try {
            const response = await REST.getBoard();
            const data = await response.json();
            return data.game;
        } catch (error) {
            console.log(error);
        }
    };

    const handleValidate = async () => {
        try {
            const response = await REST.validateBoard(grid);
            const data = await response.json();
            return data.status;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSolve = async () => {
        try {
            const response = await REST.solveBoard(grid);
            const data = await response.json();
            if (data.status) {
                return data.solution;
                setPuzzleStatus(` SOLVED `);
            } else {
                return grid;
                setPuzzleStatus(` UNSOLVABLE `);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInterface = async (action: string) => {
        let newGrid;
        switch (action) {
            case "create":
                newGrid = await handleCreate();
                setPuzzleStatus("");
                setGrid(newGrid);
                break;
            case "solve":
                newGrid = await handleSolve();
                setGrid(newGrid);
                break;
            case "validate":
                const status = await handleValidate();
                const puzzStats = status ? ` SOLVED ` : ` UNSOLVABLE `;
                setPuzzleStatus(puzzStats);
                break;
            default:
                throw Error("INVALID ACTION");
        }
    };

    return (
        <div className="Sudoku">
            <Board />
            <Interface handleInterface={handleInterface} status={puzzleStatus} />
        </div>
    );
};

export default Sudoku;
