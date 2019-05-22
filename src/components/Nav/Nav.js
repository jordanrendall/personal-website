import React from 'react';
import NavStyles from './NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Nav = () => {
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
  console.log(data);
  return (
    <NavStyles>
      {data.site.siteMetadata.menuLinks.map(i => {
        return <Link to={i.link}>{i.name}</Link>;
      })}
    </NavStyles>
  );
};

export default Nav;
