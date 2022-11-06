import React, { useRef, useState, ChangeEvent } from "react";
import Board from "./ui/Board";
import Interface from "./ui/Interface";
import { REST } from "./services/api";
import { SudokuBoard } from "./types/puzzle";

const copy2DArray = (from: SudokuBoard, to: SudokuBoard) => {
    for (let i = 0; i < from.length; i += 1) {
        to[i] = [...from[i]];
    }
};

const getGrid = () => {
    let grid: SudokuBoard = [];
    for (let i = 0; i < 9; i += 1) {
        grid.push(Array(9).fill(0));
    }
    return grid;
};

const Sudoku = () => {
    const [grid, setGrid] = useState(getGrid);
    const [puzzleStatus, setPuzzleStatus] = useState("");
    const initialGrid = useRef(getGrid());

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
            console.log(response);
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
                setPuzzleStatus(` SOLVED `);
                return data.solution;
            } else {
                setPuzzleStatus(` UNSOLVABLE `);
                return grid;
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
                copy2DArray(newGrid, initialGrid.current);
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
            case "clear":
                newGrid = getGrid();
                copy2DArray(newGrid, initialGrid.current);
                setGrid(newGrid);

                setPuzzleStatus("");
                break;
            default:
                throw Error("INVALID ACTION");
        }
    };

    const handleChange = (
        row: number,
        col: number,
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const re = /^[0-9\b]+$/;
        const value = e.target.value;
        if (value === "" || re.test(value)) {
            if (Number(value) < 10 && initialGrid.current[row][col] === 0) {
                const newGrid = [...grid];
                newGrid[row][col] = Number(value);
                setGrid(newGrid);
            }
        }
    };

    return (
        <div className="Sudoku">
            <Board
                puzzle={initialGrid.current}
                grid={grid}
                handleChange={handleChange}
            />
            <Interface
                handleInterface={handleInterface}
                status={puzzleStatus}
            />
        </div>
    );
};

export default Sudoku;
