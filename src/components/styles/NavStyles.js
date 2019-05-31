import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  transform: skew(0, 5deg);

  a {
    color: white;
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: yellow;
    }
  }
`;

export default NavStyles;
