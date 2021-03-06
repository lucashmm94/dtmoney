import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top:-10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem; //1.5rem cimabaixo / 2rem laterais
    border-radius:0.25rem;
    color: var(--text-title);

    &.highlight-background {
      background: var(--green);
      
    }

    header {
      display:flex;
      align-items:center;
      justify-content:space-between;
    }

    strong {
      //display block se comporta igual uma div
      display: block; //por padrao o strong é display inline,ai o margin top n funciona
      margin-top: 1rem;
      font-size:2rem;
      font-weight:500;
      line-height: 3rem;
    }

   
  }




`;