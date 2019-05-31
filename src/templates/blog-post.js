import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  padding-bottom: 15px;
`;

const StyledLink = styled.span`
  display: flex;
  flex-direction: column;
  width: 80vw;

  #back {
    align-self: center;
  }
`;

const blogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <StyledBlogPost>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
        <hr />
      </StyledBlogPost>
      <StyledLink>
        <Link id='back' to='/blog'>
          Back
        </Link>
      </StyledLink>
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
