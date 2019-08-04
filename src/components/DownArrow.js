import React from 'react';
import styled from 'styled-components';

const DownArrowStyles = styled.div`
  border-bottom: 5px solid ${props => props.theme.colours.Borders};
  border-right: 5px solid ${props => props.theme.colours.Borders};
  transform: rotateZ(45deg);
  height: 20px;
  width: 20px;
  justify-self: center;
  margin: 10px;
  :hover {
    transform: rotateZ(45deg) translateY(-5px) translateX(-5px);
  }
`;

const DownArrow = () => {
  return <DownArrowStyles />;
};

export default DownArrow;
