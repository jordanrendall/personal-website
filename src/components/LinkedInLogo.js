import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledLogo = styled.article`
  width: 50px;
  /* filter: contrast(0%); */
`;
const LinkedInLogo = props => {
  const imageQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "linkedInLogo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxHeight: 120) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledLogo>
      <a href='https://linkedIn.com/in/jordanrendall'>
        <Img
          loading='lazy'
          alt={props.alt}
          fluid={imageQuery.fileName.childImageSharp.fluid}
        />
      </a>
    </StyledLogo>
  );
};

export default LinkedInLogo;
