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
    transition: box-shadow 0.25s;

  }
  border-radius: 5px;
  grid-area: filters;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 10px;
  @media(min-width:800px){

  position: fixed;
  transform: translateY(100%) translateX(-7vw);
  top:0;
  }
  
`;

const StyledFilter = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-items: center;
  .filter-checkbox:hover {
    box-shadow: 0 0 5px ${props => props.theme.colours.Dominant};
    transition: box-shadow 0.25s;
  }
  .filter-checkbox:hover ~ .filter-label {
    text-decoration: underline;
  }
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
            <label className='filter-label'>
              {category.slice(0, 1).toUpperCase() + category.slice(1)}
            </label>
            <input
              className='filter-checkbox'
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
