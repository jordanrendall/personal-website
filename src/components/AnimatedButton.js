import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledButton = styled.div`
  .animated-button {
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colours.Dominant};
    border: 2px solid ${props => props.theme.colours.Borders};
    border-radius: 10px;
    padding: 1vw 2.25vw 1vw 2.25vw;
    margin: 10px;
    font-size: 3vw;
    /* font-size: 1.5rem; */
    color: ${props => props.theme.colours.TextLight};

    &:hover,
    :focus,
    :active {
      /* background: ${props => props.theme.colours.Borders}; */
      transform: translateY(-1px);
      box-shadow: 0px 0px 20px ${props => props.theme.colours.Borders}
    }

    @media (max-width: ${props => props.theme.breakpoints.MobileLg}) {
      font-size: 4vw;
    }
  }
`;
const AnimatedButton = props => {
  return (
    <StyledButton>
      <Link to={props.to}>
        <animated.button className='animated-button' style={props.spring}>
          {props.text}
        </animated.button>
      </Link>
    </StyledButton>
  );
};

export default AnimatedButton;
