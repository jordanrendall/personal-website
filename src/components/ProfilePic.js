import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';

const ProfilePic = props => {
  const imageQuery = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 720, maxHeight: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img alt={props.alt} fluid={imageQuery.fileName.childImageSharp.fluid} />
  );
};

export default ProfilePic;
