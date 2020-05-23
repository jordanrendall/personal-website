import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FilterSidebar from './FilterSidebar';
import BlogPosts from './BlogPosts';
import styled from 'styled-components';
import { sizes, breakpoints } from '../Utilities';

const StyledBlogContainer = styled.section`
  display: grid;
  /* flex-direction: column; */
  grid-gap: ${sizes(4)};
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 'filters blog';
  justify-content: center;
  @media (max-width: ${breakpoints.mobileLg}px) {
    grid-template-columns: 1fr;

    grid-template-areas: 'filters' 'blog';
  }
`;
const BlogContainer = () => {
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

      return category;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    .sort();
  const [selectedFilters, setFilters] = useState(categories);

  return (
    <StyledBlogContainer>
      <FilterSidebar
        selected={selectedFilters}
        categories={categories}
        set={setFilters}
      />
      <BlogPosts filters={selectedFilters} />
    </StyledBlogContainer>
  );
};

export default BlogContainer;
