import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const ProfilePic = (props) => {
  const imageQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Img
      loading='lazy'
      alt={props.alt}
      fluid={imageQuery.fileName.childImageSharp.fluid}
    />
  );
};

export default ProfilePic;
