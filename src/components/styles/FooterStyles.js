import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.navColourPrimary};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.navColourSecondary};
  min-width: 100vw;
  font-size: 1rem;
  align-self: flex-end;
  position: fixed;
  bottom: 0;
  border-top: 2px solid ${props => props.theme.navColourSecondary};
  padding: 10px;
`;

export default StyledFooter;
