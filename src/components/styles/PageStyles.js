import styled from 'styled-components';

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colours.Background};
  min-height: 100vh;
  color: ${props => props.theme.colours.TextDark};

  main {
    a {
      color: ${props => props.theme.colours.TextDark};

      &:visited {
        color: ${props => props.theme.colours.TextDark};
      }
      &:hover,
      :focus {
        color: ${props => props.theme.colours.Dominant};
      }
      text-decoration: none;
    }
  }
  /* font-family: 'Source Sans Pro', Roboto, Helvetica, sans-serif; */
`;

export default PageStyles;
