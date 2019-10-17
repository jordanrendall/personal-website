import React, { useRef } from 'react';
import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import SEO from '../components/seo';
import styled from 'styled-components';
import { useSpring, animated, useChain } from 'react-spring';
import AnimatedButton from '../components/AnimatedButton';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: 'image other';
  img {
    grid-area: image;
    box-shadow: 1px 1px 5px ${props => props.theme.colours.Borders};
    /* border: 3px solid ${props => props.theme.colours.Borders}; */
  }

  @media (max-width: 860px) {
    grid-template-areas: 'other' 'image';
    grid-template-columns: 1fr;
  }
  /* padding: 10px;
  display: grid;
  justify-items: center;
  align-content: center; */
  /* @media (max-width: 700px) {
    grid-template-columns: 1fr;
  } */
`;

const Title = styled.span`
  grid-area: other;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 3vw;
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
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: 860px) {
    margin: 0;
    h1 {
      margin-top: -20px;
    }
  }
`;

const IndexPage = ({ data }) => {
  const welcomeRef = useRef();
  const welcomeSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 100,
    friction: 100,
    ref: welcomeRef,
  });
  const secondaryRef = useRef();
  const secondarySpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 100,
    friction: 100,
    ref: secondaryRef,
  });
  const button1Ref = useRef();
  const Button1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 0,
    friction: 100,
    ref: button1Ref,
  });
  const button2Ref = useRef();
  const Button2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 50,
    friction: 100,
    ref: button2Ref,
  });

  const chain = useChain([welcomeRef, secondaryRef, button1Ref, button2Ref]);
  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <StyledDiv>
        <ProfilePic alt='Jordan Rendall Profile Picture' />
        <Title>
          <animated.h1 style={welcomeSpring}>Welcome!</animated.h1>
          <animated.h1 style={secondarySpring}>
            Feel free to check out
          </animated.h1>
          <div className='main-cta-group'>
            <AnimatedButton to={'/blog'} text={'My Blog'} spring={Button1} />
            <AnimatedButton
              to={'/projects'}
              text={'My Current Projects'}
              spring={Button2}
            />
          </div>
        </Title>
      </StyledDiv>
    </Layout>
  );
};

export default IndexPage;
