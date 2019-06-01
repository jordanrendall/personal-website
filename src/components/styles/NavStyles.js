import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  transform: skew(0, 5deg);
  color: ${props => props.theme.black};
  list-style-type: none;

  a {
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      color: ${props => props.theme.mustard};
    }
  }
  li {
    padding-bottom: 10px;
  }
`;

export default NavStyles;
