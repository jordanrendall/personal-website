import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.green};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.black};
  min-width: 100vw;
  font-size: 0.8rem;
  align-self: flex-end;
  position: fixed;
  bottom: 0;
`;

export default StyledFooter;
