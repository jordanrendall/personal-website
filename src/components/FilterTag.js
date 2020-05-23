import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colours, sizes } from './Utilities';

const InputTagStyles = styled.article`
  background: ${colours(0, 0)};
  border: 1px solid #d6d6d6;
  border-radius: ${sizes(1)};
  display: flex;
  flex-wrap: wrap;
  padding: ${sizes(0)} ${sizes(0)} ${sizes(0)} ${sizes(0)};
  border: none;
  width: 50%;
  margin: ${sizes(1)};

  .tagList {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .tagList li {
    align-items: center;
    background: ${colours(0, 1)};
    border-radius: 2px;
    color: ${colours(0, 0)};
    display: flex;
    font-weight: 300;
    list-style: none;
    /* margin-bottom: 5px; */
    margin-left: 2.5px;
    margin-right: 2.5px;
    padding: 5px 10px;
  }

  .tagList li button {
    align-items: center;
    appearance: none;
    background: ${colours(0, 0)};
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: ${sizes(2)};
    height: ${sizes(3)};
    justify-content: center;
    line-height: 0;
    margin-left: 8px;
    padding: 0;
    transform: rotate(45deg);
    /* transform: translateX(1px); */
    width: ${sizes(3)};
    outline: none;
    :hover {
      background: ${colours(0, 1)};
      border: 1px solid ${colours(0, 0)};
      color: ${colours(0, 0)};
    }
  }

  .tagListInput {
    background: none;
    flex-grow: 1;
    padding: 0;
  }
`;

const FitlerTag = ({ name, tags, setTags }) => {
  // Using the State hook to declare our tags variable and setTags to update the variable.
  //   const [tags, setTags] = useState(['Tags', 'Input']);
  console.log('rendering');
  const tagsExist = typeof tags !== 'undefined';

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (
        tagsExist &&
        tags.find((tag) => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      setTags([...tags, val]);
      //   tagInput.value = null;
    } else if (tagsExist && e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <InputTagStyles className='input-tag'>
        <ul className='tagList'>
          {tagsExist &&
            tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                <button
                  type='button'
                  onClick={() => {
                    removeTag(i);
                  }}
                >
                  +
                </button>
              </li>
            ))}
          <li className='tagListInput'>
            <input
              type='text'
              name={name}
              id={`taglist-input-${name}`}
              onKeyDown={inputKeyDown}
              // ref={(c) => {
              //   tagInput = c;
              // }}
            />
          </li>
        </ul>
      </InputTagStyles>
    </>
  );
};

export default FitlerTag;
