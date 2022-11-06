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
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("create")}
                >
                    Create
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("validate")}
                >
                    Validate
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("solve")}
                >
                    Solve
                </button>
                <button
                    className="generate-btn btn"
                    onClick={() => handleInterface("clear")}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Interface;
