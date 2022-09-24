import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Urbanist', sans-serif;
        margin: 0;
        color: #343434;
    }
`;

export default GlobalStyle;
