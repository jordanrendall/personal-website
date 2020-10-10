import React from 'react';
import styled from 'styled-components';
import { colours, sizes, breakpoints } from '../Utilities';

const StyledButton = styled.button`
  background: ${(props) => (props.active ? colours(0, 0) : `white`)};
  color: ${(props) => (props.active ? `white` : colours(0, 0))};
  border-radius: ${sizes(2)};
  border: 2px solid ${colours(0, 0)};
  margin: ${sizes(0)};
  font-size: ${sizes(3)};
  width: 100%;
  outline: none;
  @media (max-width: ${breakpoints.mobileLg}px) {
    /* width: 80%; */
    width: auto;
  }
`;
const FilterButton = ({ active, filter, set }) => {
  const formattedFilter = filter.slice(0, 1).toUpperCase() + filter.slice(1);
  return (
    <StyledButton onClick={set} active={active}>
      {formattedFilter}
    </StyledButton>
  );
};

export default FilterButton;
