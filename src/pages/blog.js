import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import BlogContainer from '../components/Blog/BlogContainer';

const StyledPageTitle = styled.h1`
  text-align: center;
`;

const blogPostsPage = () => {
  return (
    <Layout>
      <SEO title='Blog Posts' keywords={[`gatsby`, `application`, `react`]} />
      <StyledPageTitle>Blog</StyledPageTitle>
      <BlogContainer />
    </Layout>
  );
};
export default blogPostsPage;
