import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

    :root{
      --background-color: #202024;
      --background-color-black: #1c1c1c;
      --purple: #8e4cc5;
      --text-color-orange: #ff8e4d;
    }

    *{
        text-decoration: none;
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font-size: 87.5%;
        }
    }
    body{
        min-height: 100vh;
        font-family: "Poppins", sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: var(--background-color);
        color: #ccc;
    }
    #root{
         min-height: 100vh;
    }
    input, textarea, label{
        font-family: "Poppins", sans-serif;
    }
    
`