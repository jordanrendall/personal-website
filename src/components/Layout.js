/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import SiteContext from '../context/SiteContext';
import Header from './Header';
import Footer from './Footer';
import PageStyles from './styles/PageStyles';
import './styles/Layout.css';

const colorTheme = {
  liver: '#50514F',
  orange: '#F25F5C',
  mustard: '#FFE066',
  lazuli: '#247BA0',
  green: '#70C1B3',
  black: '#393939',
};

const ContentWrapper = styled.main`
  display: grid;
  justify-content: space-around;

  /* grid-template-rows: auto 1fr auto; */
`;

const Layout = ({ children }) => {
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
    <SiteContext.Consumer>
      {context => (
        <div className={context.blogType ? 'dev' : 'personal'}>
          <ThemeProvider theme={colorTheme}>
            <PageStyles>
              <Header siteTitle={data.site.siteMetadata.title} />
              <ContentWrapper>{children}</ContentWrapper>
              <Footer />
            </PageStyles>
          </ThemeProvider>
        </div>
      )}
    </SiteContext.Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
