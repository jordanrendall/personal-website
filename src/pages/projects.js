import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    font-size: 2rem;
    padding: 20px;
    font-weight: bold;
  }
`;

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <StyledDiv>
      <h1>Coming Soon!</h1>
    </StyledDiv>

    <StyledDiv>
      <Link to='/'>Go back to the homepage</Link>
    </StyledDiv>
  </Layout>
);

export default OtherProjectsPage;
