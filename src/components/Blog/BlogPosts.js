import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby-plugin-transition-link'
import Img from 'gatsby-image';
import styled from 'styled-components';
import {  colours, sizes } from '../Utilities';

const StyledBlogPosts = styled.section`
  display: flex;
  flex-wrap: wrap;
  grid-area: blog;
  padding: ${sizes(3)};
  /* justify-content: center; */

  @media (max-width: 635px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledPostHeader = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .post-title {
    font-size: ${sizes(4)};
    text-align: center;
  }
`;
const StyledBanner = styled.article`
  display: flex;
`;
const StyledMinutes = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledExcerpt = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;
const StyledPost = styled.article`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${sizes(2)};
  padding: ${sizes(3)};
  margin: ${sizes(2)};
  border: 2px solid ${colours(0, 0)};
  /* box-shadow: 0px 0px 10px ${colours(0, 0)}; */
  outline: none;
  max-width: 250px;
  height: 500px;
  justify-content: space-between;

  &:hover,
  :focus,
  :active {
    box-shadow: 0px 0px 10px ${(props) => props.theme.colours.Dominant};
    transform: translateY(-10px);
    transition: box-shadow trasform 0.25s;
  }

  img {
    display: grid;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
  overflow: hidden;

  @media (max-width: 635px) {
    max-width: 100%;
    width:100%;
    margin: ${sizes(2)} 0 0 0;
    
  }
`;

const BlogPosts = ({ filters }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
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
                  # absolutePath
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
                <StyledPostHeader>
                  <h1 className='post-title'>{node.frontmatter.title}</h1>
                </StyledPostHeader>
                <h2 className='post-date'>{node.frontmatter.date}</h2>
                {node.frontmatter.banner && (
                  <StyledBanner>
                    <Img
                      className='post-banner'
                      fluid={node.frontmatter.banner.childImageSharp.fluid}
                      alt={`${node.frontmatter.title} Banner Image`}
                    />
                  </StyledBanner>
                )}
                <StyledMinutes>
                  <h3 className='post-minutes'>{node.timeToRead} min</h3>
                </StyledMinutes>
                <StyledExcerpt>
                  <p className='post-excerpt'>{node.excerpt}</p>
                </StyledExcerpt>
              </StyledPost>
            </Link>
          );
      })}
    </StyledBlogPosts>
  );
};

export default BlogPosts;
