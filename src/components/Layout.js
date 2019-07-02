/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react';
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

  /*Complementary Blue-Orange Palette*/
  grayBlue: '#4A6770',
  midBlue: '#128DB3',
  lightBlue: '#6BDCFF',
  orange: '#F07800',
  lightOrange: '#FFCC5D',
  lightBrown: '#BC9A78',
  white: '#ffffff',

  /*Tetrad blue-green,blue,orange,yellow */
  /* Palette URL: http://paletton.com/#uid=73r0s0kszzThMJ9n6CPyLsIAvmm */
  colorprimary0: '#1980AC',
  colorprimary1: '#5FAACA',
  colorprimary2: '#3992B8',
  colorprimary3: '#066690',
  colorprimary4: '#045070',

  colorsecondary10: '#2842B8',
  colorsecondary11: '#6C7ED2',
  colorsecondary12: '#475DC2',
  colorsecondary13: '#122A9C',
  colorsecondary14: '#0C207A',

  colorsecondary20: '#FFBC1B',
  colorsecondary21: '#FFD571',
  colorsecondary22: '#FFC947',
  colorsecondary23: '#E5A200',
  colorsecondary24: '#B27E00',

  colorcomplement0: '#FF941B',
  colorcomplement1: '#FFBC71',
  colorcomplement2: '#FFA847',
  colorcomplement3: '#E57900',
  colorcomplement4: '#B25E00',

  contentFont: "'Roboto', sans-serif",
  headingFont: "'Source Sans Pro', sans-serif",
  init: function() {
    this.colours = {
      Dominant: this.midBlue,
      Accent: this.orange,
      TextDark: this.grayBlue,
      TextLight: this.white,
      Background: this.white,
      Borders: this.grayBlue,
    };
    this.fonts = {
      Content: this.contentFont,
      Headings: this.headingFont,
    };

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
  // state = {
  //   scrollPercentage: '0',
  // };

  const [scrollPercentage] = useState(50);
  //need to move out into functional component
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
              <Header
                scrollPercentage={scrollPercentage}
                siteTitle={data.site.siteMetadata.title}
              />
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
