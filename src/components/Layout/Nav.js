import React from 'react';
import NavStyles, {
  StyledH1,
  // StyledNavTitle,
  MenuLink,
  StyledUl,
} from './styles/NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import { Link } from 'gatsby-plugin-transition-link'
import ProgressBar from '../ProgressBar';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { ThemeConsumer } from 'styled-components';

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
      <ThemeConsumer>
        {(theme) => (
          <>
            <StyledH1>
              <AniLink
                cover
                duration={0.7}
                direction='down'
                bg={theme.colours.Dominant}
                to='/'
              >
                {data.site.siteMetadata.title}
              </AniLink>
            </StyledH1>
            <StyledUl>
              {data.site.siteMetadata.menuLinks.map((i) => {
                return (
                  <MenuLink key={i.name}>
                    <AniLink
                      cover
                      duration={0.7}
                      to={i.link}
                      direction='up'
                      bg={theme.colours.Dominant}
                    >
                      {i.name}
                    </AniLink>
                  </MenuLink>
                );
              })}
            </StyledUl>

            {onBlog && <ProgressBar scrollPercentage={scrollPercentage} />}
          </>
        )}
      </ThemeConsumer>
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
