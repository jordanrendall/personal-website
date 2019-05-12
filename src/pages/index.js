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
      <Link to='/projects/'>
        Take a
        <span role='img' aria-label='googly eyes emoji'>
          👀
        </span>
        @ what I have been working on!
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
