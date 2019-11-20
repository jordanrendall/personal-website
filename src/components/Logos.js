import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import GithubLogo from './GithubLogo';
import LinkedInLogo from './LinkedInLogo';
import styled from 'styled-components';

const StyledLogos = styled.article`
  grid-area: logos;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    padding: 5px;
    width: 150px;
    height: 150px;
  }
`;
const Logos = () => {
  return (
    <StyledLogos>
      <GithubLogo />
      <LinkedInLogo />
    </StyledLogos>

    // <Img
    //   loading='lazy'
    //   alt={props.alt}
    //   fluid={logosQuery.fileName.childImageSharp.fluid}
    // />
  );
};

export default Logos;
