import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color1: rgb(233, 181, 172);
        --color1-dark: rgb(201, 153, 145);
        --color1-darker: rgb(170, 129, 122);
        --color2: rgb(139, 125, 171);
        --color2-dark: rgb(103, 93, 128);
        --color2-darker: rgb(68, 61, 85);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
