import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  justify-self: flex-start;
  border-left: 5px solid ${props => props.theme.navColourSecondary};
  padding-left: 20px;
  border-radius: 10px;
  margin: 20px;
  transform: skew(0, 5deg);
  color: ${props => props.theme.navColourSecondary};
  list-style-type: none;

  a {
    &:visited {
      color: ${props => props.theme.navColourSecondary};
    }
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: ${props => props.theme.otherColourSecondary};
    }
  }
  li {
    display: flex;
    flex-direction: column;
    /* align-self: center; */
    justify-content: center;
    /* padding: 10px; */
  }
`;

export default NavStyles;
