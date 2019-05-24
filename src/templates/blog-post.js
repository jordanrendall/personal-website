import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo'

const blogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <SEO title={post.frontmatter.title} />

      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default blogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
