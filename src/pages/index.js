import React from 'react';
import Layout from '../components/Layout/Layout';
import ProfilePic from '../components/ProfilePic';
import SEO from '../components/seo';
import styled from 'styled-components';

import { breakpoints } from '../components/Utilities';


const StyledPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 500px;
      height: 500px;
    }

  .gatsby-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 75vw;
    max-width: 500px;
  }
  @media (max-width: ${breakpoints.mobileLg}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <StyledPage>
        <ProfilePic alt='Jordan Rendall Profile Picture' />
        
      </StyledPage>
    </Layout>
  );
};

export default IndexPage;
