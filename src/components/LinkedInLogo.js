import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledLogo = styled.a`
  width: 3.25rem;
  height: auto;
  svg {
    :hover {
      transform: translateY(-1px);
      box-shadow: 0px 0px 20px ${props => props.theme.colours.Borders};
      border-radius: 5px;
    }
  }
  path {
    fill: ${props => props.theme.colours.Dominant};
  }
`;
const LinkedInLogo = () => {
  return (
    <StyledLogo
      className='logo'
      href='https://linkedIn.com/in/jordanrendall'
      target='_blank'
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 65 65'>
        <path
          d='M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67'
          transform='translate(-903.776 -57.355)'
        />
      </svg>
    </StyledLogo>
  );
};

export default LinkedInLogo;
