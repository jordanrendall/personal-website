import React from 'react';
import NavStyles, {
  StyledH1,
  StyledNavTitle,
  StyledUl,
  ThemeButton,
} from './styles/NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';
import SiteContext from '../context/SiteContext';
import Slider from './Slider';
const Nav = ({ siteTitle, scrollPercentage }) => {
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
    <SiteContext.Consumer>
      {context => (
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
            {/* <li>
              <Slider />
              {/* <ThemeButton onClick={context.toggleBlogType}>
                {context.blogType === 'dev'
                  ? 'Software Development'
                  : 'Personal'}{' '}
                →{' '}
                {context.blogType === 'dev'
                  ? 'Personal'
                  : 'Software Development'}
              </ThemeButton> </li>*/}
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
      )}
    </SiteContext.Consumer>
  );
};
Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};
export default Nav;
