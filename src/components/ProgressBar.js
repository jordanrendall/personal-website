import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  display: grid;
  height: 10px;
  background: ${props => props.theme.colours.Accent};
  width: ${props => props.scrollPercentage}%;
  grid-column: 1/-1;
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
