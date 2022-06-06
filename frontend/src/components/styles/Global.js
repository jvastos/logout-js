import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: #6e5494;
        font-family: 'Kanit', sans-serif;
    }
`;

export default GlobalStyles;
