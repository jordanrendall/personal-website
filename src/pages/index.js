import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <StyledDiv>
      <h3>Welcome!</h3>
      <p>Click the links above to see more.</p>
      <a href='https://github.com/jordanrendall' target='_blank'>
        <Img fixed={data.file.childImageSharp.fixed} />
      </a>
    </StyledDiv>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "GitHub-Mark-120px-plus.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
