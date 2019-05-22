import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import React from 'react';
import Nav from '../Nav/Nav';
import { StyledHeader, StyledHeaderTitle, StyledH1 } from './HeaderStyles';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{siteTitle}</title>
      <link rel='canonical' href='https://blog.jordanrendall.com' />
    </Helmet>
    <StyledHeaderTitle>
      <StyledH1>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>
    </StyledHeaderTitle>
    <Nav />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
