import React from 'react';
import Layout from '../components/Layout/Layout';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

const usesPage = ({ data }) => {
  const post = data.allMdx.edges[0].node;

  return (
    <Layout>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default usesPage;

export const query = graphql`
  query getUsesQuery {
    allMdx(filter: { frontmatter: { title: { eq: "Uses" } } }) {
      edges {
        node {
          body
        }
      }
    }
  }
`;
