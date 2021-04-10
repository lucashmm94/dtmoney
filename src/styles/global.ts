import { createGlobalStyle } from 'styled-components' //Para usar css dentro do javascript

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;  // cor definida no figma
    --red: #E52E40;
    --blue: #5429CC;
    
    --blue-light: #6933FF;

    --text-tile: #363F5F;
    --text-body: #969CB3;

    --shape:#FFFFFF;

  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;  // border-box que indica que o tamanho agora levará em conta até a borda 
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;      //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%;      //14px
    }
    //Usar % para não fixar o tamanho quando der zoom
    
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //Para qm usa o engine do chrome para que as fontes ficam mais nitidas
  }

  body, input, textarea, button { // Por padrão os botaos.. eles usam suas próprias fontes
    font-family: 'Poppins', sans-serif; //Popins é a font baixada do google
    font-weight: 400; //Por padrão é 500 a fonte regular do html, ai precisa definir
  }

  button{
    cursor: pointer; //para deixar o botão clicável
  }

  [disabled] {
    opacity: 0.6; //Deixar mais claro, campos desabilitados
    cursor: not-allowed; // Deixar campos desabilitados com o curso de proibido
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:600; // tamanho da fonte baixada da google
  }



`