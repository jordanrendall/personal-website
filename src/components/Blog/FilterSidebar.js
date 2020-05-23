import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import { breakpoints, colours, sizes } from '../Utilities';

const StyledSidebar = styled.section`
  h2 {
    height: auto;
    width: 50%;
  }

  border-radius: ${sizes(2)};
  grid-area: filters;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content:flex-start; */
  padding: ${sizes(2)};
  width: 100%;

  @media (max-width: ${breakpoints.mobileLg}px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${breakpoints.mobileLg}px) {
    @supports (display: grid) {
      position: fixed;
      flex-direction: column;
      width: 25%;
      transform: translateY(50%);
      top: 0;
      left: 0;
      justify-self: center;
    }
    @supports not (display: grid) {
      flex-direction: row;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

const FilterSidebar = ({ selected, categories, set }) => {
  const updateFilters = (category) => {
    // const name = e.target;
    // const checked = e.target;
    set((prevState) => ({
      ...prevState,
      [category]: selected ? !selected[category] : true,
    }));
  };
  return (
    <>
      <StyledSidebar>
        <h2>Filters</h2>
        {categories.map((category, i) => {
          return (
            <FilterButton
              key={`filter-button-${i}`}
              filter={category}
              set={() => updateFilters(category)}
              active={selected ? selected[category] : false}
            />
          );
        })}
      </StyledSidebar>
    </>
  );
};

export default FilterSidebar;
