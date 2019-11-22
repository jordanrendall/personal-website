import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { ThemeConsumer } from 'styled-components';

const StyledBlogPosts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-area: blog;
`;

const StyledPost = styled.div`
  display: grid;
  width: 75vw;
  border-radius: 5px;
  padding: 5px;

  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'banner banner'
    'timeToRead .'
    'excerpt excerpt';
  justify-content: space-between;
  @media(min-width:${props => props.theme.breakpoints.DesktopSm}){

  transform: translateX(10%);
}
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
    align-items: center;
    text-align: right;
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
    transition: box-shadow 0.25s;
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
                series
                seriesIndex
                banner {
                  absolutePath
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
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

  if (filters && Object.values(filters).includes(true)) {
    posts = posts.filter(({ node }) => {
      return filters[node.frontmatter.category];
    });
  }
  return (
    <StyledBlogPosts>
      {posts.map(({ node }) => {
        if (
          (node.frontmatter.series && node.frontmatter.seriesIndex === 0) ||
          !node.frontmatter.series
        )
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
  );
};

export default BlogPosts;
