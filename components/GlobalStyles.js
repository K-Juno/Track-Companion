import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Urbanist', sans-serif;
        margin: 0;
        color: #343434;
        background-image: linear-gradient(39deg, #eaf5fc 25%, #e5fffa 25%, #e5fffa 50%, #eaf5fc 50%, #eaf5fc 75%, #e5fffa 75%, #e5fffa 100%);
background-size: 3.18px 2.57px;
    }
`;

export default GlobalStyle;
