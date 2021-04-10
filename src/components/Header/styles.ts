import styled from 'styled-components'

export const Container = styled.header` //estilo do tipo componente header
  background: var(--blue); //variavel do estilo global
`

export const Content = styled.div `
  max-width:1120px;
  margin: 0 auto;  //Para centralizar o conteudo de uma div

  padding: 2rem 1rem 12rem;  //2rem em cima /1rem(16px) nas laterais / 16rem(160px) em baixo
  display: flex;
  align-items:center; //Para alinhar verticalmente ao centro
  justify-content: space-between; //espaço entre os elementos que estao dentro do content

  button {
    font-size : 1rem;
    color:#fff;
    background: var(--blue-light);
    border:0; //Botao vem com borda do html, tem que remover
    padding: 0 2rem; //2rem dos lados
    border-radius:0.25rem;
    height:3rem;

    transition: filter 0.2s; // quando

    &:hover {
      filter:brightness(0.9); //Com filtros da pra fazer varias coisas,o brightness escurece o botão
    }
  }
  

`