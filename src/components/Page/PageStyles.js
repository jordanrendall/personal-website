import styled from 'styled-components';

const PageStyles = styled.div`
  background: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  main > * a {
    color: black;
    text-decoration: none;

    &:visited {
      color: black;
    }
    &:hover {
      color: red;
    }
  }
  /* grid-template-columns: 1fr auto; */
`;

export default PageStyles;
