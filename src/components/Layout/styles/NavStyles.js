import styled from 'styled-components';
import { sizes, breakpoints } from '../../Utilities';
// const StyledNavTitle = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   padding-left: ${sizes(3)}px;
//   align-items: center;
//   height: auto;
//   a {
//     font-weight: 500;

//     color: ${(props) => props.theme.colours.TextLight};
//     &:hover,
//     :active,
//     :focus {
//       color: ${(props) => props.theme.colours.TextDark};
//     }
//     &:visited {
//       color: ${(props) => props.theme.colours.TextLight};
//     }
//   }
//   transition: opacity 2s;
// `;

const StyledH1 = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${sizes(2)};
  a {
    text-decoration: none;
  }
  :after {
    content: '';
    width: 0px;
    /* height: calc(2px + 0.15vw); */
    display: block;
    background: ${(props) => props.theme.colours.TextLight};
    transition: 300ms;
  }
  :hover:after {
    width: 100%;
  }
`;

const NavStyles = styled.nav`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  @supports not (display: grid) {
    display: flex;
    justify-content: space-between;
  }
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: ${(props) => props.theme.colours.Dominant};
  color: ${(props) => props.theme.colours.TextLight};

  border-bottom: 5px solid ${(props) => props.theme.colours.Borders};
  padding-right: ${sizes(3)}px;
  list-style-type: none;

  a {
    &:visited {
      color: ${(props) => props.theme.colours.TextLight};
    }
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: ${(props) => props.theme.colours.TextLight};
    }
  }
  .menu-icon,
  .toggled-nav {
    display: none;
  }
  @media (max-width: ${breakpoints.mobileLg}px) {
    ul[orientation='horizontal'] {
      display: none;
    }
    .menu-icon,
    .toggled-nav {
      display: flex;
    }
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-self: flex-end;
  justify-content: space-around;
  padding: 0;
  @media (max-width: ${breakpoints.mobileLg}px) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobileLg}px) {
    width: 65%;
  }
`;

const MenuLink = styled.li`
  /* font-weight: 500; */
  /* transform: translateY(5px); */
  align-self: center;
  display: flex;
  /* margin: ${sizes(3)}; */
    font-size: ${sizes(4)};
  /* padding: ${sizes(4)}px; */
  /* font-size: calc(1.4rem + 1.4vw); */
  a,
  a:visited {
    color: ${(props) => props.theme.colours.TextLight};
  }
  a:after {
    content: '';
    width: 0px;
    height: ${sizes(0)};
    /* height: calc(2px + 0.15vw); */
    display: block;
    background: ${(props) => props.theme.colours.TextLight};
    transition: 300ms;
    transform:translateY(-${sizes(0)});
  }
  a:hover:after {
    width: 100%;
  }
`;
// const ThemeButton = styled.button`
//   display: flex;
//   padding: 2px;
//   background: ${props => props.theme.colours.Dominant};
//   font-size: 1rem;
//   margin: 0px;
//   border-radius: ${sizes(3)}px;
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
export { StyledH1, StyledUl, MenuLink };
// export { StyledH1, StyledNavTitle, StyledUl };
