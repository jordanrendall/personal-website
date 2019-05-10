import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/image';
import SEO from '../components/SEO/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <Image />
    </div>
    <Link to='/other-projects/'>Take a 👀 @ what I have been working on!</Link>
  </Layout>
);

export default IndexPage;
