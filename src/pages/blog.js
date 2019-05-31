import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: grid;
  width: 80vw;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'timeToRead .'
    'excerpt excerpt';
  justify-content: space-between;
  padding: 10px;
  h1 {
    grid-area: title;
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    grid-area: date;
    font-size: 1rem;
    font-weight: bold;
  }
  h3 {
    grid-area: timeToRead;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    grid-area: excerpt;
  }

  &:hover,
  :focus,
  :active
   {
    outline: 1px solid black;
    color: black;
  }
`;

const blogPostsPage = ({ data }) => (
  <Layout>
    <SEO title='Blog Posts' keywords={[`gatsby`, `application`, `react`]} />
    {data.allMdx.edges.map(({ node }) => (
      <Link key={node.id} to={node.fields.slug}>
        <StyledPost>
          <h1>{node.frontmatter.title}</h1>
          <h2>{node.frontmatter.date}</h2>
          <h3>{node.timeToRead} min</h3>
          <p>{node.excerpt}</p>
        </StyledPost>
      </Link>
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
