import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StyledHeader, StyledHeaderTitle, StyledH1 } from './HeaderStyles';

const Header = ({ siteTitle }) => (
  <StyledHeader>
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
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
