import styled from 'styled-components';

const StyledNavTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  /* margin: 0 auto; */
  /* max-width: 960px; */
  /* padding: 2rem; */
  /* transform: skew(0, 5deg); */
  a {
    color: ${props => props.theme.colours.Dominant};
    &:hover,
    :active,
    :focus {
      color: ${props => props.theme.colours.Accent};
    }
    &:visited {
      color: ${props => props.theme.colours.Dominant};
    }
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: ${props => props.theme.colours.Accent};
  /* transform: skew(0, -5deg); */
  /* margin-bottom: 1.45rem; */
  border-bottom: 5px solid ${props => props.theme.colours.Borders};
  border-top: 5px solid ${props => props.theme.colours.Borders};
  padding-right: 10px;

  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-content: space-between; */
  /* justify-self: flex-end; */
  width: 100%;
  /* border-left: 5px solid ${props => props.theme.navColourSecondary}; */
  /* padding-right: 20px; */
  position: fixed;
  top: 0;
  z-index:1;
  /* border-radius: 10px; */
  /* margin: 20px; */
  /* transform: skew(0, 5deg); */
  color: ${props => props.theme.colours.Text};
  list-style-type: none;

  a {
    &:visited {
      color: ${props => props.theme.colours.Dominant};
    }
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: ${props => props.theme.colours.Accent};
    }
  }

`;

const StyledUl = styled.ul`
  display: flex;
  justify-self: flex-end;
  padding-right: 10px;
  li {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default NavStyles;
export { StyledH1, StyledNavTitle, StyledUl };
