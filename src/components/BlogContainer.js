import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import FilterSidebar from './FilterSidebar';
import BlogPosts from './BlogPosts';
import styled from 'styled-components';

const StyledBlogContainer = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 4fr;
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
      return node.frontmatter.category;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
    <StyledBlogContainer>
      <FilterSidebar categories={categories} set={setFilters} />
      <BlogPosts filters={selectedFilters} />
    </StyledBlogContainer>
  );
};

export default BlogContainer;
