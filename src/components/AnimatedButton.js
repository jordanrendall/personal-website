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
    border-radius: 5px;
    padding: 0.75vw 2vw 0.75vw 2vw;
    margin: 10px;
    font-size: 3vw;
    /* font-size: 1.5rem; */
    color: ${props => props.theme.colours.TextLight};

    &:hover,
    :focus,
    :active {
      background: ${props => props.theme.colours.Borders};
      transform: translateY(-1px);
    }

    @media (max-width: 750px) {
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