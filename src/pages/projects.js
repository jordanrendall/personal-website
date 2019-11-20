import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 2rem;
    padding: 20px;
    font-weight: bold;
  }
`;

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <StyledProjects>
      <h1>Coming Soon!</h1>
      <Link to='/'>Go back to the homepage</Link>
    </StyledProjects>
  </Layout>
);

export default OtherProjectsPage;
