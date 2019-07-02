import React from 'react';
import NavStyles, {
  StyledH1,
  StyledNavTitle,
  StyledUl,
} from './styles/NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';

const Nav = ({ siteTitle }) => {
  const data = useStaticQuery(
    graphql`
      query getMenuLinks {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );
  return (
    <NavStyles>
      <StyledNavTitle>
        <StyledH1>
          <Link
            to='/'
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </StyledH1>
      </StyledNavTitle>
      <StyledUl>
        {data.site.siteMetadata.menuLinks.map(i => {
          return (
            <li key={i.name}>
              <Link to={i.link}>{i.name}</Link>
            </li>
          );
        })}
      </StyledUl>
      <ProgressBar />
    </NavStyles>
  );
};
Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};
export default Nav;
