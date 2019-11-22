import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FilterSidebar from './FilterSidebar';
import BlogPosts from './BlogPosts';
import styled from 'styled-components';

const StyledBlogContainer = styled.section`
  display: grid;
  flex-direction: column;
  grid-gap: 40px;
  /* grid-template-columns: 1fr; */
  grid-template-areas: 'filters blog';
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.DesktopSm}) {
    grid-template-areas: 'filters' 'blog';
  }
`;
const BlogContainer = () => {
  const [selectedFilters, setFilters] = useState();
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `
  );
  const categories = data.allMdx.edges
    .map(({ node }) => {
      const category = node.frontmatter.category;

      return category; //category.slice(0, 1).toUpperCase() + category.slice(1);
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    .sort();

  return (
    <StyledBlogContainer>
      <FilterSidebar categories={categories} set={setFilters} />
      <BlogPosts filters={selectedFilters} />
    </StyledBlogContainer>
  );
};

export default BlogContainer;
