import styled from 'styled-components';

const PageStyles = styled.div`
  /* Main content area */
  background-color: ${props => props.theme.mustard};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Geneva, Arial;
  * {
    color: ${props => props.theme.black}; /*var(--text-color);*/
  }
  main {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px;
    a {
      color: ${props => props.theme.black};
      text-decoration: none;

      &:visited {
        color: ${props => props.theme.black};
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
