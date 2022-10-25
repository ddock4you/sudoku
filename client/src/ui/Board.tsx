import React from "react";
import Tile from "./Tile";

const Board = ({ puzzle, grid }) => {
    return (
        <div className="board">
            <Tile puzzle={puzzle} grid={grid} />
        </div>
    );
};

export default Board;
