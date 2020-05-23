import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import ProfilePic from '../components/ProfilePic';
import SEO from '../components/seo';
import styled from 'styled-components';
import Logos from '../components/Logos';
import { breakpoints } from '../components/Utilities';

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colours.Dominant};
    border: 2px solid ${(props) => props.theme.colours.Borders};
    border-radius: 10px;
    padding: 1vw 2.25vw 1vw 2.25vw;
    margin: 10px;
    font-size: 2rem;
    width: 8rem;
    height: 8rem;
    /* font-size: 1.5rem; */
    color: ${(props) => props.theme.colours.TextLight};
  text-align: center;
    &:hover,
    :focus,
    :active {
      /* background: ${(props) => props.theme.colours.Borders}; */
      transform: translateY(-1px);
      box-shadow: 0px 0px 20px ${(props) => props.theme.colours.Borders}
    }

    @media (max-width: ${(props) => props.theme.breakpoints.MobileLg}) {
      font-size: 2rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.MobileSm}) {
      font-size: 1.75rem;
    }
`;

const StyledPage = styled.section`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-areas: 'image other';

    justify-content: center;
    align-items: center;
  }

  @supports not (display: grid) {
    display: flex;
    justify-content: space-between;
  }

  img {
    grid-area: image;
    max-width: 500px;
    max-height: 500px;
  }
  .gatsby-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.mobileLg}px) {
    grid-template-areas: 'other' 'image';
    grid-template-columns: 1fr;
    display: grid;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.article`
  grid-area: other;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  padding: 20px;
  margin: 10px 10px;
  h1 {
    font-weight: 400;
    margin: 20px;
    text-align: center;
    line-height: 4rem;
  }

  .main-cta-group {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 100%;
    > {
      padding: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobileLg}px) {
    margin: 0;
    h1 {
      margin-top: -20px;
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <StyledPage>
        <ProfilePic alt='Jordan Rendall Profile Picture' />
        <Title>
          <p>Welcome!</p>
          <p>Feel free to check out</p>
          <div className='main-cta-group'>
            <Link to={'/blog'}>
              <StyledButton>My Blog</StyledButton>
            </Link>
            <Link to={'/projects'}>
              <StyledButton>My Current Projects</StyledButton>
            </Link>
          </div>

          <p>Or connect @</p>
          <Logos />
        </Title>
      </StyledPage>
    </Layout>
  );
};

export default IndexPage;
