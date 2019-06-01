import styled from 'styled-components';

const PageStyles = styled.div`
  background-color: var(--content-bg-1);
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 100px;
  min-height: 100vh;
  font-family: Geneva, Arial;
  * {
    color: var(--text-color);
  }
  main {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px;
    a {
      color: black;
      text-decoration: none;

      &:visited {
        color: black;
      }
      &:hover,
      :focus {
        color: grey;
      }
    }
  }

  /* grid-template-columns: 1fr auto; */
`;

export default PageStyles;
