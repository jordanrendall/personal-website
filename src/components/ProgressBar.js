import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  height: 10px;
  background: ${props => props.theme.colours.Accent};
  width: ${props => props.scrollPercentage}%;
  position: fixed;
  top: 10%;
`;
const ProgressBar = ({ scrollPercentage }) => {
  return (
    <StyledProgressBar
      className='progress-bar'
      scrollPercentage={scrollPercentage}
    />
  );
};

export default ProgressBar;
