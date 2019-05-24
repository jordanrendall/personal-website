import styled from 'styled-components';

const PageStyles = styled.div`
  background: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 100px;
  min-height: 100vh;
  font-family: Geneva, Arial;

  main {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px;
    * a {
    color: black;
    text-decoration: none;
    
    &:visited {
      color: black;
    }
    &:hover {
      color: grey
      ;
    }
  }

  /* grid-template-columns: 1fr auto; */
`;

export default PageStyles;
