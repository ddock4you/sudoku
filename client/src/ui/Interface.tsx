import React from "react";
import styled from "styled-components";

type InterfaceProp = {
    handleInterface: (action: string) => Promise<void>;
    status: string;
};

const InterfaceArea = styled.div`
    & {
        width: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    & .info-interface input {
        width: 250px;
        height: 40px;
        text-align: center;
        font-size: 24px;
        outline: none;
        color: var(--color2-dark);
        background-color: var(--color1);
        border: 2px solid var(--color2-dark);
        margin-bottom: 20px;
    }

    & .action-interface {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    & button {
        background-color: var(--color1);
        padding: 8px 24px;
        border: 2px solid var(--color2-dark);
        border-radius: 8px;
        color: var(--color2-dark);
        font-size: 18px;
        transition: 0.1s all ease-in-out;
    }

    & button:hover {
        cursor: pointer;
        transform: scale(1.05);
        background-color: var(--color1-dark);
    }
`;

const Interface = ({ handleInterface, status }: InterfaceProp) => {
    return (
        <InterfaceArea className="interface">
            <div className="info-interface">
                <input type="text" value={status} readOnly />
            </div>
            <div className="action-interface">
                <select className="select-level">
                    <option value="easy">쉬움</option>
                    <option value="normal">보통</option>
                    <option value="hard">어려움</option>
                </select>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("create")}
                >
                    문제생성
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("validate")}
                >
                    문제제출
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("solve")}
                >
                    답안확인
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("clear")}
                >
                    초기화
                </button>
            </div>
        </InterfaceArea>
    );
};

export default Interface;
