import styled from 'styled-components';

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.contentColourPrimary};
  min-height: 100vh;
  font-family: 'Source Sans Pro', Roboto, Helvetica, sans-serif;

  * {
    color: ${props => props.theme.contentColourSecondary};
    line-height: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 3rem;
  }

  main {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px;

    a {
      color: ${props => props.theme.contentColourSecondary};
      text-decoration: none;

      &:visited {
        color: ${props => props.theme.contentColourSecondary};
      }
      &:hover,
      :focus {
        color: ${props => props.theme.otherColourPrimary};
      }
    }
  }
`;

export default PageStyles;
