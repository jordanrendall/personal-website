import React from 'react';
import NavStyles, {
  StyledH1,
  StyledNavTitle,
  StyledUl,
} from './styles/NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ProgressBar from '../ProgressBar';
import PropTypes from 'prop-types';
import Hamburger from '../Hamburger';

const Nav = ({ scrollPercentage }) => {
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
  const opacity = scrollPercentage > 0 ? 0.4 : 1;

  return (
    <NavStyles id='navbar' style={{ opacity }}>
      <StyledNavTitle>
        <StyledH1>
          <Link
            to='/'
            style={{
              textDecoration: `none`,
            }}
          >
            {data.site.siteMetadata.title}
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
      <ProgressBar scrollPercentage={scrollPercentage} />
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
