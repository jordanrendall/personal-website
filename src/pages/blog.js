import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';

const blogPostsPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title} </h3>
          <span>- {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
);

export default blogPostsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        }
      }
    }
  }
`;
