import React, { Component } from 'react';
import SiteContext from '../context/SiteContext';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled, { ThemeConsumer } from 'styled-components';
import BlogContainer from '../components/BlogContainer';
import BlogPosts from '../components/BlogPosts';

const StyledPageTitle = styled.h1`
  text-align: center;
`;

const Filters = styled.section`
  width: 90vw;
  padding: 10px;
  p {
    height: auto;
    font-size: 1rem;

    text-align: center;
    :hover {
      text-decoration: underline;

      text-decoration-color: ${props => props.theme.colours.TextDark};
    }
  }
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;
const StyledCategories = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 540px) {
    flex-direction: column;
  }
  .category {
    line-height: 1rem;
    height: auto;
    width: auto;
    margin: 5px;

    font-size: 1rem;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.colours.Borders};
    outline: none;

    background: ${props =>
      props.selected === true
        ? props.theme.colours.Borders
        : props.theme.colours.Dominant};
    color: ${props => props.theme.colours.TextLight};
    :active,
    :hover {
      background: ${props => props.theme.colours.Borders};
    }
  }
`;
const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colours.Dominant};
  border: 2px solid ${props => props.theme.colours.Borders};
  border-radius: 5px;
  padding: 0.75vw 2vw 0.75vw 2vw;
  margin: 10px;
  font-size: 3vw;
  /* font-size: 1.5rem; */
  color: ${props => props.theme.colours.TextLight};

  &:hover,
  :focus {
    background: ${props => props.theme.colours.Borders};
    transform: translateY(-1px);
  }

  @media (max-width: 750px) {
    font-size: 4vw;
  }
`;
// const StyledButton = styled.button`
//   display: flex;
//   padding: 10px 30px 10px 30px;
//   margin-top: 10px;
//   background: ${props => props.theme.colours.Dominant};
//   font-size: 1rem;
//   border-radius: 10px;
//   justify-content: center;
//   justify-self: center;
//   width: fit-content;
//   border: 2px solid ${props => props.theme.colours.Borders};
//   color: ${props => props.theme.colours.TextLight};
//   margin-bottom: 10px;
//   &:hover,
//   :active,
//   :focus {
//     background: ${props => props.theme.colours.Accent};
//     color: ${props => props.theme.colours.TextDark};
//   }
// `;

const blogPostsPage = () => {
  return (
    <Layout>
      <SEO title='Blog Posts' keywords={[`gatsby`, `application`, `react`]} />
      <StyledPageTitle>Blog</StyledPageTitle>
      <BlogContainer />
    </Layout>
  );
};
export default blogPostsPage;
