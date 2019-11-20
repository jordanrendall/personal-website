import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90vw;
  padding-top: 15px;
  p > a {
    color: ${props => props.theme.colours.TextDark};
    text-decoration: underline;
    :hover {
      color: ${props => props.theme.colours.Dominant};
    }
  }
  hr {
    height: 2px;
    width: 100%;
    border: none;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.colours.Background} 0%,
      ${props => props.theme.colours.TextDark} 50%,
      ${props => props.theme.colours.Background} 100%
    );
  }
  blockquote {
    border-left: 3px solid ${props => props.theme.colours.Dominant};
    padding-left: 20px;
  }
`;

const StyledLink = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 15px;

  .back-btn {
    align-self: center;
  }
`;

const blogPost = ({ data }) => {
  const post = data.allMdx.edges[0].node;
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
          {/* <Img fluid={post.frontmatter.banner.childImageSharp.fluid} /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
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
  query getPosts($slug: String!) {
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            banner {
              publicURL
              childImageSharp {
                fluid(maxHeight: 340) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          body
          fields {
            slug
          }
        }
      }
    }
  }
`;
