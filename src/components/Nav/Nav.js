import React from 'react';
import NavStyles from './NavStyles';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Nav = () => {
  const data = useStaticQuery(
    graphql`
      query getPages {
        allSitePage {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );
  return (
    <NavStyles>
      {data.allSitePage.edges.map(i => (
        <Link to='/' key={i.node.id}>
          {i.node.id}
        </Link>
      ))}
    </NavStyles>
  );
};

export default Nav;
