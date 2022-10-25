import React from "react";
import Board from "./ui/Board";
import Interface from "./ui/Interface";

const Sudoku = () => {
    return (
        <div className="Sudoku">
            <Board />
            <Interface />
        </div>
    );
};

export default Sudoku;
