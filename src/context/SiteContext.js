import React, { Component } from 'react';

const defaultState = {
  blogType: 'personal',
  toggleBlogType: () => {},
};

export const SiteContext = React.createContext(defaultState);

export const SiteProvider = ({ children }) => {
  return (
    <SiteContext.Provider value={{ defaultState }}>
      {children}
    </SiteContext.Provider>
  );
};
