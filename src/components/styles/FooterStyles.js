import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colours.Dominant};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colours.TextLight};
  min-width: 100vw;
  font-size: 1rem;
  align-self: flex-end;
  position: fixed;
  bottom: 0;
  border-top: 2px solid ${props => props.theme.colours.Borders};
  padding: 2px;
  /* font-weight:; */
`;

export default StyledFooter;
