import React from 'react';
import StyledFooter from './styles/FooterStyles';

const Footer = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} Jordan Rendall</StyledFooter>
  );
};

export default Footer;
