import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 5px;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: yellow;
    }
  }
`;

export default NavStyles;
