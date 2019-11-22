import React from 'react';
import styled from 'styled-components';

const HamburgerStyles = styled.div`
  height: auto;
  margin: 0;
  padding: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: inherit;
  span {
    color: ${props => props.theme.colours.TextDark};
    padding: 5px;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 25px;
      height: 3px;
      background-color: ${props => props.theme.colours.TextDark};
      margin: 2px 0;
    }
  }
  :hover {
    span {
      color: ${props => props.theme.colours.AccentDark};
    }
    .hamburger div {
      background-color: ${props => props.theme.colours.AccentDark};
    }
  }
`;

const Hamburger = ({ toggleNav }) => {
  return (
    <HamburgerStyles className='menu-icon' onClick={() => toggleNav()}>
      <span className='hamburger'>
        <div />
        <div />
        <div />
      </span>
    </HamburgerStyles>
  );
};

export default Hamburger;
