import styled from 'styled-components';

const PageStyles = styled.div`
  *::selection {
    background: ${props => props.theme.colours.Dominant};
    color: ${props => props.theme.colours.TextLight};
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.colours.Background};
  min-height: 100vh;
  /* height: 100%; */
  color: ${props => props.theme.colours.TextDark};
  flex: 1 0 auto;

  /* font-size: 2vw; */
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
