import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 20px 40px;
        font-family: 'Roboto Condensed', 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media screen and (max-width: 560px) {
            padding: 20px 0;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    a {
        color: black;
        text-decoration: none;
        font-weight: bold;

        :visited {
            color: black;
        }
    }

`;
