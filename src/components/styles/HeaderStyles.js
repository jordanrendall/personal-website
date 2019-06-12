import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: ${props => props.theme.navColourPrimary};
  transform: skew(0, -5deg);
  margin-bottom: 1.45rem;
  border-bottom: 5px solid ${props => props.theme.navColourSecondary};
  border-top: 5px solid ${props => props.theme.navColourSecondary};
  padding: 10px;
`;

const StyledHeaderTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin: 0 auto; */
  /* max-width: 960px; */
  padding: 2rem;
  transform: skew(0, 5deg);
  a {
    color: ${props => props.theme.navColourSecondary};
    &:hover,
    :active,
    :focus {
      color: ${props => props.theme.otherColourSecondary};
    }
    &:visited {
      color: ${props => props.theme.navColourSecondary};
    }
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

export { StyledHeader, StyledHeaderTitle, StyledH1 };
