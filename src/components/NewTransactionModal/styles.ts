import styled from "styled-components";

export const Container = styled.form`
  color: var(--text-title);
  font-size:1.5rem;
  margin-bottom:2rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius:0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight:400;
    font-size:1rem;

    &::placeholder {
    color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  

  #button-submit{
    width: 100%;
    padding: 0 1.5rem;
    height:4rem;
    background: var(--green);
    border-radius:0.25rem;
    border:0;
    font-size:1.5rem;
    margin-top:1.5rem;
    color: #FFF;
    font-weight:600;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }

`;