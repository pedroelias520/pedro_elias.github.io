import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

    
    
    :root {
        --blue: #8400ff;        
        --blue-dark: #4c0093;
        --dark: #130F16;
        --gray-light: #c4c4c4;
        --gray: #1C1C1C ;
        --white: #FFFFFF;
        --yellow: #ffd500;        
        --light-yellow: #ffe356;
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

    ::-webkit-scrollbar {
        width: 10px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {         
        border-radius: 10px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--blue); 
        border-radius: 10px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
      }
`