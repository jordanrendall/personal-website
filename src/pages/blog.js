import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';
import styled from 'styled-components';

const StyledTitle = styled.span`
  display: flex;
  justify-content: space-between;
`;

const blogPostsPage = ({ data }) => (
  <Layout>
    <SEO title='Blog Posts' keywords={[`gatsby`, `application`, `react`]} />
    {data.allMdx.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <StyledTitle>
            <h3>{node.frontmatter.title} </h3>
            <h5>{node.frontmatter.date}</h5>
          </StyledTitle>
          <h6>{node.timeToRead} min</h6>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
);

export default blogPostsPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
