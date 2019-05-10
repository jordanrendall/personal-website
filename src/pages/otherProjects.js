import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/seo';

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Other Projects' />
    <h1>Hi from the second page</h1>
    <p>Welcome to My Other Projects List!</p>
    <Link to='/'>Go back to the homepage</Link>
    <Link to='#'>Wedding RSVP</Link>
    <Link to='#'>Training App</Link>
  </Layout>
);

export default OtherProjectsPage;
