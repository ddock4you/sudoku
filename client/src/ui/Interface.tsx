import React from "react";

type InterfaceProp = {
    handleInterface: (action: string) => Promise<void>;
    status: string;
};

const Interface = ({ handleInterface, status }: InterfaceProp) => {
    return (
        <div className="interface">
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
        </div>
    );
};

export default Interface;
