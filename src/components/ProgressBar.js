import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { colours } from './Utilities';

const StyledProgressBar = styled.div`
  display: grid;
  height: 10px;
  background: ${colours(0, 1)};
  width: ${(props) => props.scrollPercentage}%;
  grid-column: 1/-1;
  position: fixed;
  left: 0;
  /* top: 80px; */
`;
const ProgressBar = ({ scrollPercentage }) => {
  useLayoutEffect(() => {
    const headerHeight = document.getElementsByTagName('nav')[0].clientHeight;
    console.log(headerHeight);
    const progressEl = document.getElementsByClassName('progress-bar')[0];
    progressEl.style.top = `${headerHeight - progressEl.clientHeight / 2}px`;
  }, []);
  return (
    <StyledProgressBar
      className='progress-bar'
      scrollPercentage={scrollPercentage}
    />
  );
};

export default ProgressBar;
