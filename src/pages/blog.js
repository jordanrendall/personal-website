import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import SiteContext from '../context/SiteContext';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled, { ThemeConsumer } from 'styled-components';

const Filters = styled.div`
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
`;
const StyledCategories = styled.div`
  display: flex;
  justify-content: space-around;
  .category {
    height: auto;
    width: auto;
    font-size: 1rem;
    padding: 5px 20px 5px 20px;
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
const StyledPost = styled.div`
  display: grid;
  width: 90vw;

  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title date'
    'banner banner'
    'timeToRead .'
    'excerpt excerpt';
  justify-content: space-between;
  padding: 10px;
  h1 {
    display: grid;
    justify-content: flex-start;
    align-items: center;
    height: auto;

    grid-area: title;
    /* font-size: 2rem; */
    font-size: calc(10px + 2.5vw);
    font-weight: bold;
  }
  h2 {
    display: flex;
    grid-area: date;
    justify-content: flex-end;
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
  }
  h3 {
    grid-area: timeToRead;
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
  }

  p {
    grid-area: excerpt;
  }

  &:hover,
  :focus,
  :active {
    outline: 1px solid ${props => props.theme.colours.Borders};
  }

  img {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    grid-area: banner;
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

class blogPostsPage extends Component {
  state = {
    categories: {},
    loaded: false,
  };
  // updateCategoriesDOM = () => {};
  componentWillMount = async () => {
    const data = this.props.data;
    let categoryList = {};
    const map = await data.allMdx.edges.map(({ node }) => {
      if (!Object.keys(categoryList).includes(node.frontmatter.category)) {
        this.setState(prevState => ({
          categories: {
            ...prevState.categories,
            [node.frontmatter.category]: true,
          },
        }));
      }
    });

    // this.updateCategoriesDOM();
  };

  updateFilters = event => {
    event.preventDefault();
    let updatedState = {};

    if (!this.state.loaded) {
      Object.keys(this.state.categories).map(category => {
        if (category === event.target.id) {
          updatedState[category] = true;
          event.target.setAttribute('selected', true);
        } else {
          updatedState[category] = false;
          event.target.setAttribute('selected', false);
        }
      });
    } else {
      updatedState[event.target.id] = !this.state.categories[event.target.id];
      event.target.setAttribute(
        'selected',
        !this.state.categories[event.target.id]
      );
    }
    this.setState(prevState => ({
      categories: { ...prevState.categories, ...updatedState },
      loaded: true,
    }));
    Object.keys(this.state.categories).map(category => {
      const queriedPosts = document.getElementsByClassName(category);
      [].forEach.call(queriedPosts, post => {
        if (this.state.categories[category]) {
          post.removeAttribute('display');
        } else {
          post.setAttribute('display', 'none');
        }
      });
    });
  };
  render() {
    const data = this.props.data;

    return (
      <SiteContext.Consumer>
        {context => (
          <Layout>
            <SEO
              title='Blog Posts'
              keywords={[`gatsby`, `application`, `react`]}
            />
            <ThemeButton onClick={context.toggleBlogType}>
              {context.blogType === 'dev' ? 'Software Development' : 'Personal'}{' '}
              →{' '}
              {context.blogType === 'dev' ? 'Personal' : 'Software Development'}
            </ThemeButton>

            <Filters>
              <p>Filters:</p>
              <ThemeConsumer>
                {theme => (
                  <StyledCategories id='categories'>
                    {Object.keys(this.state.categories).map((category, i) => {
                      if (category) {
                        if (
                          (context.blogType === 'dev' &&
                            category === 'software') ||
                          (context.blogType !== 'dev' &&
                            category !== 'software')
                        ) {
                          return (
                            <button
                              key={`${i}-category-button`}
                              className='category'
                              id={category}
                              onClick={this.updateFilters}
                              style={{
                                backgroundColor: this.state.categories[category]
                                  ? theme.colours.Borders
                                  : theme.colours.Dominant,
                              }}
                            >
                              {category.toUpperCase()}
                            </button>
                          );
                        }
                      }
                    })}
                  </StyledCategories>
                )}
              </ThemeConsumer>
            </Filters>
            {data.allMdx.edges.map(({ node }) => {
              if (node.frontmatter.blogType === context.blogType) {
                if (this.state.categories[node.frontmatter.category]) {
                  return (
                    <Link key={node.id} to={node.fields.slug}>
                      <StyledPost className={node.frontmatter.category}>
                        {node.frontmatter.banner && (
                          <img
                            src={node.frontmatter.banner}
                            alt={`${node.frontmatter.title} Banner Image`}
                          />
                        )}
                        <h1>{node.frontmatter.title}</h1>
                        <h2>{node.frontmatter.date}</h2>
                        <h3>{node.timeToRead} min</h3>
                        <p>{node.excerpt}</p>
                      </StyledPost>
                    </Link>
                  );
                }
              }
            })}
          </Layout>
        )}
      </SiteContext.Consumer>
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
            category
            # banner # {
            # #   childImageSharp {
            # #     fluid(maxHeight: 340) {
            # #       ...GatsbyImageSharpFluid
            # #     }
            # #   }
            # # }
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
