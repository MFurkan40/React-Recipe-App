import { createGlobalStyle } from "styled-components";
import recipeBg from "../../assets/recipe.jfif";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Girassol", cursive;
}

body{
    background-image: url(${recipeBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    font-size: 1.5rem;
    z-index: -100;
    #root{
      height: 100%;
    }
}
`;
