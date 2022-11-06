import React, { ChangeEvent } from "react";

type TileProp = {
    enteredValue: number;
    col: number;
    colIndex: number;
    rowIndex: number;
    handleChange: (
        row: number,
        col: number,
        e: ChangeEvent<HTMLInputElement>
    ) => void;
};

const Tile = ({
    enteredValue,
    col,
    colIndex,
    rowIndex,
    handleChange,
}: TileProp) => {
    return (
        <input
            className={
                enteredValue !== 0
                    ? "initial"
                    : col !== 0
                    ? "tile taken"
                    : "tile"
            }
            type="text"
            value={col === 0 ? "" : col}
            key={rowIndex + " " + colIndex}
            onChange={(e) => handleChange(rowIndex, colIndex, e)}
        />
    );
};

export default Tile;
