import React, { ChangeEvent } from "react";
import styled from "styled-components";

const Input = styled.input`
    &.tile {
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 32px;
        outline: none;
        background-color: var(--color1);
        border: 2px solid black;
        margin-left: -1px;
        margin-top: -1px;
    }

    &.taken {
        background-color: var(--color1-dark);
        color: var(--color2-darker);
    }

    &.initial {
        margin-left: -1px;
        margin-top: -1px;
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 32px;
        outline: none;
        background-color: var(--color1-darker);
        border: 2px solid black;
    }
`;

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
        <Input
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
