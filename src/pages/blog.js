import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/seo';
import styled from 'styled-components';

const StyledPost = styled.div`
  display: grid;
  width: 80vw;

  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'timeToRead .'
    'excerpt excerpt';
  justify-content: space-between;
  padding: 10px;
  h1 {
    grid-area: title;
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    grid-area: date;
    font-size: 1rem;
    font-weight: bold;
  }
  h3 {
    grid-area: timeToRead;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    grid-area: excerpt;
  }

  &:hover,
  :focus,
  :active {
    outline: 1px solid black;
    color: black;
  }
`;

const StyledButton = styled.button`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  background: var(--greenSheen);
  font-size: 1rem;
  border-radius: 10px;
  justify-content: center;

  &:hover,
  :active,
  :focus {
    background: hsla(170, 40%, 60%, 0.8);
  }
`;

class blogPostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogType: 'dev',
    };
  }
  changeBlogType = e => {
    e.preventDefault();
    this.setState({
      blogType: this.state.blogType === 'dev' ? 'personal' : 'dev',
    });
  };
  render() {
    const data = this.props.data;
    return (
      <Layout>
        <SEO title='Blog Posts' keywords={[`gatsby`, `application`, `react`]} />
        <StyledButton onClick={this.changeBlogType}>
          {this.state.blogType === 'dev' ? 'Software Development' : 'Personal'}{' '}
          ->{' '}
          {this.state.blogType === 'dev' ? 'Personal' : 'Software Development'}
        </StyledButton>
        {data.allMdx.edges.map(
          ({ node }) =>
            node.frontmatter.blogType === this.state.blogType && (
              <Link key={node.id} to={node.fields.slug}>
                <StyledPost>
                  <h1>{node.frontmatter.title}</h1>
                  <h2>{node.frontmatter.date}</h2>
                  <h3>{node.timeToRead} min</h3>
                  <p>{node.excerpt}</p>
                </StyledPost>
              </Link>
            )
        )}
      </Layout>
    );
  }
}

export default blogPostsPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            blogType
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
