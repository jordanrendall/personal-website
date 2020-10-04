import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import SEO from '../components/seo';
import styled from 'styled-components';
import { colours, sizes } from '../components/Utilities';
const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 2rem;
    padding: ${sizes(4)};
    text-align: center;
    font-weight: bold;
  }

  .project-link {
    padding: ${sizes(2)};
    border-radius: ${sizes(2)};
    &:hover {
      background: ${colours(0, 0)};
      color: white;
    }
  }
`;

const OtherProjectsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              body
              frontmatter {
                title
                # date(formatString: "DD MMMM, YYYY")
                link
                linkText
              }
            }
          }
        }
      }
    `
  );
  let projects = data.allMdx.edges;
  return (
    <Layout>
      <SEO title='Projects' />
      <StyledProjects>
        {projects.map(({ node }) => {
          return (
            <StyledProject>
              <h1>{node.frontmatter.title}</h1>
              <MDXRenderer>{node.body}</MDXRenderer>
              <a
                target='_blank'
                rel='noreferrer'
                rel='noopener'
                className='project-link'
                href={node.frontmatter.link}
              >
                {node.frontmatter.linkText}
              </a>
            </StyledProject>
          );
        })}
      </StyledProjects>
    </Layout>
  );
};
export default OtherProjectsPage;
