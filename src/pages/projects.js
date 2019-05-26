import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <StyledDiv>
      <h2>Coming Soon!</h2>
    </StyledDiv>

    <StyledDiv>
      <Link to='/'>Go back to the homepage</Link>
    </StyledDiv>
  </Layout>
);

export default OtherProjectsPage;
