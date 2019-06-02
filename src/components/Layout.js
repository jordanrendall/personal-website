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

const purpleTheme = {
  /*Purple Palette*/
  darkPurple: '#452884',
  brightPurple: '#692080',
  blue: '#2A3B83',
  darkBlue: '#09164E',
  gentleDarkPurple: '#7C65AF',
  gentleBrightPurple: '#975DA9',
  gentleBlue: '#6674AE',
  contentFont: "'Roboto', sans-serif",
  headingFont: "'Source Sans Pro', sans-serif",
  init: function() {
    this.navColourPrimary = this.darkPurple;
    this.navColourSecondary = 'white';
    this.contentColourPrimary = this.brightPurple;
    this.contentColourSecondary = 'white';
    this.otherColourPrimary = this.blue;
    this.otherColourSecondary = this.gentleBlue;

    return this;
  },
}.init();

const ContentWrapper = styled.main`
  display: grid;
  justify-content: space-around;
  margin-bottom: 40px;
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
          <ThemeProvider theme={purpleTheme}>
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
