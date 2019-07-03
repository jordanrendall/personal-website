import React from 'react';
import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import TypeAnimation from '../components/TypeAnimation';

const StyledDiv = styled.div`
  padding: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Title = styled.span`
  font-size: 2rem;
  padding: 20px;
  font-weight: bold;
`;

const StyledImg = styled(Img)`
  filter: invert(1);

  &:hover,
  :focus,
  :active {
    transform: scale(0.9);
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <StyledDiv>
      <ProfilePic />
      <Title>
        {' '}
        <span>
          <TypeAnimation
            textArray={['Welcome!']}
            repeat={false}
            backspace={false}
          />
          <p>
            Jordan is currently:
            <TypeAnimation
              textArray={[
                'Training...',
                'Eating...',
                'Sleeping...',
                'Coding...',
              ]}
              startDelay={2000}
              repeat={true}
              backspace={true}
            />
          </p>
        </span>
      </Title>
      {/* 
      <p>Click the links above to see more.</p>
      <a
        aria-label='github link'
        href='https://github.com/jordanrendall'
        target='_blank'
        rel='noopener noreferrer'
      >
        <StyledImg fixed={data.file.childImageSharp.fixed} />
      </a> */}
    </StyledDiv>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "GitHub-Mark-120px-plus.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
