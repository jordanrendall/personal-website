import React, { Component } from 'react';

const defaultState = {
  blogType: 'personal',
  toggleBlogType: () => {},
};

const SiteContext = React.createContext(defaultState);

class SiteContextProvider extends Component {
  state = {
    blogType: 'dev',
  };

  toggleBlogType = () => {
    let blogType = this.state.blogType === 'dev' ? 'personal' : 'dev';

    localStorage.setItem('blogType', JSON.stringify(blogType));
    this.setState({ blogType });
  };
  componentDidMount() {
    //get blogType from local localStorage
    // const lsBlogType = JSON.parse(localStorage.getItem('blogType'));
    // this.setState({ blogType: lsBlogType });
    this.setState({ blogType: 'personal' });
  }

  render() {
    const { children } = this.props;
    const { blogType } = this.state;
    return (
      <SiteContext.Provider
        value={{ blogType, toggleBlogType: this.toggleBlogType }}
      >
        {children}
      </SiteContext.Provider>
    );
  }
}

export default SiteContext;

export { SiteContextProvider };
