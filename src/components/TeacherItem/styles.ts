import styled from 'styled-components'

export const Container = styled.article`
  background: ${(props) => props.theme.colors.boxBase};
  border: 1px solid ${(props) => props.theme.colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  header img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  header div {
    margin-left: 2.4rem;
  }

  header div strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: ${(props) => props.theme.colors.textTitle};
  }

  header div span {
    font: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background: ${(props) => props.theme.colors.boxFooter};
    border-top: 1px solid ${(props) => props.theme.colors.lineInWhite};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer p strong {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;
    display: block;
  }

  footer button {
    width: 20rem;
    height: 5.6rem;
    background: ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
  }

  footer button:hover {
    background: ${(props) => props.theme.colors.secundaryDark};
  }

  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }
  }

  > p {
    padding: 0, 3.2rem;
  }

  footer p strong {
    display: initial;
    margin-left: 1.6rem;
  }

  footer button {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;
  }

  footer button img {
    margin-right: 1.6rem;
  }
`
