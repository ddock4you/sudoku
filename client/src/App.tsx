import React from "react";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Sudoku from "./Sudoku";

function App() {
    return (
        <>
            <GlobalStyle />
            <Sudoku />
        </>
    );
}

export default App;
