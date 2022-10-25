import React from "react";

const Tile = ({ puzzle, grid }) => {
    return grid.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
            return (
                <input
                    className={
                        puzzle[rowIndex][colIndex] !== 0
                            ? "inital"
                            : col !== 0
                            ? "tile taken"
                            : "tile"
                    }
                    type="text"
                    value={col}
                    key={rowIndex + " " + colIndex}
                />
            );
        });
    });
};

export default Tile;
