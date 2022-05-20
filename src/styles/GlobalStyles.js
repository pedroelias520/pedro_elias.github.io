import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    
    
    :root {
        --blue: #8400ff;

        --dark: #130F16;

        --gray-light: #c4c4c4;
        --gray: #1C1C1C ;

        --white: #FFFFFF;        
    }    
        
    @font-face {
        font-family: 'Tom';
        src: url('src/fonts/MTMedium.otf');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: var(--dark);
        user-select: none;
    }

    html{
        scroll-behavior: smooth;
    }

`