import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import React from 'react';
import Nav from './Nav';
import { StyledHeader } from './styles/HeaderStyles';

const Header = ({ siteTitle, scrollPercentage }) => (
  <StyledHeader>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{siteTitle}</title>
      <link rel='canonical' href='https://blog.jordanrendall.com' />
    </Helmet>
    <Nav siteTitle={siteTitle} scrollPercentage={scrollPercentage} />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
