import React from 'react';
import { Link, graphql } from 'gatsby';
import SiteContext from '../context/SiteContext';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: grid;
  width: 90vw;

  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'timeToRead .'
    'excerpt excerpt';
  justify-content: space-between;
  padding: 10px;
  h1 {
    display: grid;
    justify-content: flex-start;
    align-items: center;
    height: auto;

    grid-area: title;
    /* font-size: 2rem; */
    font-size: calc(10px + 2.5vw);
    font-weight: bold;
  }
  h2 {
    display: flex;
    grid-area: date;
    justify-content: flex-end;
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
  }
  h3 {
    grid-area: timeToRead;
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
  }

  p {
    grid-area: excerpt;
  }

  &:hover,
  :focus,
  :active {
    outline: 1px solid ${props => props.theme.colours.Borders};
  }
`;

// const StyledButton = styled.button`
//   display: flex;
//   padding: 10px 30px 10px 30px;
//   margin-top: 10px;
//   background: ${props => props.theme.colours.Dominant};
//   font-size: 1rem;
//   border-radius: 10px;
//   justify-content: center;
//   justify-self: center;
//   width: fit-content;
//   border: 2px solid ${props => props.theme.colours.Borders};
//   color: ${props => props.theme.colours.TextLight};
//   margin-bottom: 10px;
//   &:hover,
//   :active,
//   :focus {
//     background: ${props => props.theme.colours.Accent};
//     color: ${props => props.theme.colours.TextDark};
//   }
// `;

const blogPostsPage = props => {
  const data = props.data;
  return (
    <SiteContext.Consumer>
      {context => (
        <Layout>
          <SEO
            title='Blog Posts'
            keywords={[`gatsby`, `application`, `react`]}
          />

          {data.allMdx.edges.map(
            ({ node }) =>
              node.frontmatter.blogType === context.blogType && (
                <Link key={node.id} to={node.fields.slug}>
                  <StyledPost>
                    <h1>{node.frontmatter.title}</h1>
                    <h2>{node.frontmatter.date}</h2>
                    <h3>{node.timeToRead} min</h3>
                    <p>{node.excerpt}</p>
                  </StyledPost>
                </Link>
              )
          )}
        </Layout>
      )}
    </SiteContext.Consumer>
  );
};

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
            blogType
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
