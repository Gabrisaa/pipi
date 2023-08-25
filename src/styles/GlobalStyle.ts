import styles, { createGlobalStyle } from "styled-components"

export const colors = {
    primary: "#586875",
    secondary: "#A5C8CA",
    Título: "#10898B",
    Texto: "#E2D9C2",
    black: "#000000",
    while: "#f0f0f0"

}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.while};
    }

    ul li a{
        
    }
`

