import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FilterSidebar from './FilterSidebar';
import BlogPosts from './BlogPosts';
import styled from 'styled-components';

const StyledBlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  /* grid-template-columns: 1fr; */
  justify-content: center;
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
