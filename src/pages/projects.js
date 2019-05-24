import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <h2>Take a look at what I have been working on!</h2>
    <StyledDiv>
      <a href='https://weddingrsvp.jordanrendall.com'>Wedding RSVP</a>
      <a href='https://training.jordanrendall.com'>Training App</a>
    </StyledDiv>
    
    <StyledDiv>
      <Link to='/'>Go back to the homepage</Link>
     </StyledDiv>
  </Layout>
);

export default OtherProjectsPage;
