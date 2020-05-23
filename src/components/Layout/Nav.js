import React, { useLayoutEffect } from 'react';
import NavStyles, {
  StyledH1,
  // StyledNavTitle,
  MenuLink,
  StyledUl,
} from './styles/NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ProgressBar from '../ProgressBar';
import PropTypes from 'prop-types';
import Hamburger from '../Hamburger';

const Nav = ({ scrollPercentage, page }) => {
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
  // let onBlog = false;

  // useLayoutEffect(() => {
  const regex = /blog\/(\w)*/g;
  const onBlog =
    typeof window !== 'undefined' ? window.location.href.match(regex) : false;
  // }, []);

  return (
    <NavStyles id='navbar' style={{ opacity }}>
      {/* <StyledNavTitle> */}
      <StyledH1>
        <Link to='/'>{data.site.siteMetadata.title}</Link>
      </StyledH1>
      {/* </StyledNavTitle> */}
      <StyledUl>
        {data.site.siteMetadata.menuLinks.map((i) => {
          return (
            <MenuLink key={i.name}>
              <Link to={i.link}>{i.name}</Link>
            </MenuLink>
          );
        })}
      </StyledUl>
      {onBlog && <ProgressBar scrollPercentage={scrollPercentage} />}
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
