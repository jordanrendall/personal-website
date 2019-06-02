import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  height: 0px;
  width: 0px;
  background: red;
  clip-path: circle(25%);
`;

const ProfilePic = () => {
  return <StyledSvg />;
};

export default ProfilePic;
