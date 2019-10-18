import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import SiteContext from '../context/SiteContext';
import styled, { ThemeConsumer } from 'styled-components';

const StyledBlogPosts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledPost = styled.div`
  display: grid;
  width: 90vw;
  border-radius: 5px;

  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'banner banner'
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
    /* outline: 1px solid ${props => props.theme.colours.Borders}; */
    box-shadow: 0px 0px 10px ${props => props.theme.colours.Dominant};

  }

  .banner {
    grid-area: banner;
  }
  img {
    display: grid;
    /* grid-column: 1/3; */
    justify-content: center;
    align-items: center;
    width: 100%;
    /* grid-area: banner; */
  }
`;

const BlogPosts = ({ filters }) => {
  const data = useStaticQuery(
    graphql`
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
                category
                banner {
                  absolutePath
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
    `
  );
  let posts = data.allMdx.edges;

  if (Object.values(filters).includes(true)) {
    posts = posts.filter(({ node }) => {
      return filters[node.frontmatter.category];
    });
  }
  return (
    <SiteContext.Consumer>
      {context => (
        <StyledBlogPosts>
          {posts.map(({ node }) => {
            return (
              <Link key={node.id} to={node.fields.slug}>
                <StyledPost className={node.frontmatter.category}>
                  {node.frontmatter.banner && (
                    <Img
                      className='banner'
                      fluid={node.frontmatter.banner.childImageSharp.fluid}
                      alt={`${node.frontmatter.title} Banner Image`}
                    />
                  )}
                  <h1>{node.frontmatter.title}</h1>
                  <h2>{node.frontmatter.date}</h2>
                  <h3>{node.timeToRead} min</h3>
                  <p>{node.excerpt}</p>
                </StyledPost>
              </Link>
            );
          })}
        </StyledBlogPosts>
      )}
    </SiteContext.Consumer>
  );
};

export default BlogPosts;
