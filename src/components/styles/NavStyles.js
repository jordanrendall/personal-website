import styled from 'styled-components';

const StyledNavTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  height: auto;
  a {
    font-weight: 500;

    color: ${props => props.theme.colours.TextLight};
    &:hover,
    :active,
    :focus {
      color: ${props => props.theme.colours.TextDark};
    }
    &:visited {
      color: ${props => props.theme.colours.TextLight};
    }
  }
  transition: opacity 2s;
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  transform: translateY(5px);
  :hover {
    transform: translateY(6px);
    border-bottom: 2px solid;
  }
`;

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  grid-template-rows: auto 10px;
  background: ${props => props.theme.colours.Dominant};
  border-bottom: 5px solid ${props => props.theme.colours.Borders};
  /* border-bottom: 5px solid linear-gradient(${props =>
    props.theme.colours.Borders},${props => props.theme.colours.Background}); */
  /* border-top: 5px solid ${props => props.theme.colours.Borders}; */
  padding-right: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  color: ${props => props.theme.colours.TextLight};
  list-style-type: none;

  a {
    &:visited {
      color: ${props => props.theme.colours.TextLight};
    }
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: ${props => props.theme.colours.TextLight};
      
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  justify-self: flex-end;
  padding-right: 10px;
  li {
    font-weight: 500;
    /* transform: translateY(5px); */
    align-self: center;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    :hover,
    :active,
    :focus {
      /* transform: translateY(-2px); */
      border-bottom: 2px solid;
      margin: 0px;
    }
  }
`;

// const ThemeButton = styled.button`
//   display: flex;
//   padding: 2px;
//   background: ${props => props.theme.colours.Dominant};
//   font-size: 1rem;
//   margin: 0px;
//   border-radius: 10px;
//   justify-content: center;
//   justify-self: center;
//   width: fit-content;
//   border: 2px solid ${props => props.theme.colours.Borders};
//   color: ${props => props.theme.colours.TextLight};
//   &:hover,
//   :active,
//   :focus {
//     background: ${props => props.theme.colours.Accent};
//     color: ${props => props.theme.colours.TextDark};
//   }
// `;

export default NavStyles;
export { StyledH1, StyledNavTitle, StyledUl };
