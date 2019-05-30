import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';

const blogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default blogPost;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
