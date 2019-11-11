import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colours.Dominant};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colours.TextLight};
  /* min-width: 100vw; */
  font-size: 1.2rem;
  height: auto;
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  /* padding: 20px; */
  /* align-self: flex-end; */
  /* position: fixed; */
  justify-self: flex-end;
  width: 100%;
  /* position: absolute; */
  /* bottom: 0; */
  border-top: 5px solid ${props => props.theme.colours.Borders};
  padding: 1px;
  /* font-weight:; */
`;

export default StyledFooter;
