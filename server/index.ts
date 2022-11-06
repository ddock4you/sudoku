import express from "express";
import cors from "cors";
import { Sudoku } from "./Sudoku.js";
import { Util } from "./Util.js";
import { SudokuBoard } from "./types/puzzle.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5001, () => {
    console.log("Server running at port 5001");
});

app.get("/puzzle", (req, res) => {
    console.log("puzzle");
    let sudoku = new Sudoku();
    console.log(sudoku);
    let puzzle = sudoku.puzzle;
    console.log(puzzle);
    res.status(200).send({ game: puzzle });
});

app.get("/solve", (req, res) => {
    let puzzle: SudokuBoard = [];
    Util.copyGrid(req.body.board, puzzle);
    let sudoku = new Sudoku(puzzle);
    let solution = sudoku.isSolvable();
    let solvedSudoku;
    let status;

    if (solution) {
        solvedSudoku = sudoku.solvedPuzzle;
        status = true;
    } else {
        solvedSudoku = req.body.board;
        status = false;
    }

    res.status(200).send({ solution: solvedSudoku, status });
});

app.get("/validate", (req, res) => {
    let puzzle: SudokuBoard = [];
    Util.copyGrid(req.body.board, puzzle);
    let sudoku = new Sudoku(puzzle);
    let status = sudoku.validate();

    res.status(200).send({ status });
});

// tsc-watch --onSuccess 사용 고려
