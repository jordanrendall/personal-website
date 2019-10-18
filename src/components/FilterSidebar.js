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

const StyledFilter = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const FilterSidebar = ({ categories, set }) => {
  const updateFilters = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    set(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };
  return (
    <StyledSidebar>
      <h2>Filter by:</h2>
      {categories.map((category, i) => {
        return (
          <StyledFilter key={`filter-${i}`}>
            <label>{category}</label>
            <input
              type='checkbox'
              name={category}
              onClick={e => updateFilters(e)}
            />
          </StyledFilter>
        );
      })}
    </StyledSidebar>
  );
};

export default FilterSidebar;
