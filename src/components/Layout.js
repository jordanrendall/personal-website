/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PageStyles from './styles/PageStyles';
import './styles/Layout.css';

const ContentWrapper = styled.main`
  display: grid;
  justify-content: space-around;

  /* grid-template-rows: auto 1fr auto; */
`;

const Layout = ({ children }, theme) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <PageStyles>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </PageStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
