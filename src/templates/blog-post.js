import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90vw;
  padding-top: 15px;

  hr {
    height: 2px;
    width: 100%;
    border: none;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colours.Background} 0%,
      ${props => props.theme.colours.Text} 50%,
      ${props => props.theme.colours.Background} 100%
    );
  }
`;

const StyledLink = styled.span`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-bottom: 15px;

  .back-btn {
    align-self: center;
  }
`;

const blogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <StyledLink>
        <Link className='back-btn' to='/blog'>
          Back
        </Link>
      </StyledLink>
      <StyledBlogPost>
        <hr />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
        <hr />
      </StyledBlogPost>
      <StyledLink>
        <Link className='back-btn' to='/blog'>
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
        banner {
          childImageSharp {
            fluid(maxHeight: 340) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`;
