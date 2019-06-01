import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.theme.green};
  transform: skew(0, -5deg);
  margin-bottom: 1.45rem;
  border-bottom: 5px solid ${props => props.theme.black};
  border-top: 5px solid ${props => props.theme.black};
  padding: 10px;
`;

const StyledHeaderTitle = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
  transform: skew(0, 5deg);
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

export { StyledHeader, StyledHeaderTitle, StyledH1 };
