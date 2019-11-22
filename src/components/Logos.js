import React from 'react';
import GitHubLogo from './GitHubLogo';
import LinkedInLogo from './LinkedInLogo';
import styled from 'styled-components';

const StyledLogos = styled.article`
  grid-area: logos;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .logo {
    margin: 10px;
  }
  img {
    padding: 5px;
    width: 150px;
    height: 150px;
  }
`;
const Logos = () => {
  return (
    <StyledLogos>
      <GitHubLogo size={50} />
      <LinkedInLogo size={50} />
    </StyledLogos>
  );
};

export default Logos;
