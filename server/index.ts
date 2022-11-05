import express from "express";
import cors from "cors";
import { Sudoku } from "./Sudoku";
import { Util } from "./Util";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Server running at port 5000");
});

app.get("/puzzle", (req, res) => {
    let sudoku = new Sudoku();
    let puzzle = sudoku.puzzle;
    res.status(200).send({ game: puzzle });
});

app.get("/solve", (req, res) => {
    let puzzle = [];
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
    let puzzle = [];
    Util.copyGrid(req.body.board, puzzle);
    let sudoku = new Sudoku(puzzle);
    let status = sudoku.validate();

    res.status(200).send({ status });
});
