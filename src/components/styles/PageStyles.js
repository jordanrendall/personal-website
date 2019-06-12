import styled from 'styled-components';

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.contentColourPrimary};
  min-height: 100vh;
  color: ${props => props.theme.contentColourSecondary};

  main {
    a {
      color: ${props => props.theme.contentColourSecondary};

      &:visited {
        color: ${props => props.theme.contentColourSecondary};
      }
      &:hover,
      :focus {
        color: ${props => props.theme.contentColourSecondary};
      }
      text-decoration: none;
    }
  }
  /* font-family: 'Source Sans Pro', Roboto, Helvetica, sans-serif; */
`;

export default PageStyles;
