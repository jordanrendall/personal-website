import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
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

const OtherProjectsPage = () => (
  <Layout>
    <SEO title='Projects' />
    <StyledProjects>
      <StyledProject>
        <h1>Did you feed the cat?</h1>
        <p>
          A fun application that explores the use of #NextJS, #Apollo, #MongoDB,
          and #Graphql. The application quickly displays the last time a pet was
          fed.
        </p>
        <p>
          <a
            target='_blank'
            className='project-link'
            href='https://didyoufeedthecat.jordanrendall.com'
          >
            Check it out
          </a>
        </p>
      </StyledProject>
    </StyledProjects>
  </Layout>
);

export default OtherProjectsPage;
