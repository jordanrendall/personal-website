import React from 'react';
import NavStyles from './NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Nav = () => {
  const data = useStaticQuery(
    graphql`
      query getPages {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `
  );
  console.log(data);
  return (
    <NavStyles>
      {data.allSitePage.nodes.map(i => {
        return !i.path.includes('404') && <Link to={i.path}>{i.path}</Link>;
      })}
    </NavStyles>
  );
};

export default Nav;
