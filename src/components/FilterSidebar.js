import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.section`
  h2 {
    /* background: ${props => props.theme.colours.Dominant}; */
    height: auto;
    /* opacity: 0.3; */
  }
  :hover,
  :active,
  :focus {
    box-shadow: 0px 0px 10px ${props => props.theme.colours.Dominant};
  }
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 10px;
  position: relative;
`;

const FilterSidebar = ({ filters }) => {
  return (
    <StyledSidebar>
      <h2>Filter by:</h2>
      {filters.map((filter, i) => {
        return (
          <article>
            <label>{filter}</label>
            <input type='checkbox' />
          </article>
        );
      })}
    </StyledSidebar>
  );
};

export default FilterSidebar;
