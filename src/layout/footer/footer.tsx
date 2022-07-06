import React from 'react';
import { FooterStyled } from './footer.styled';

const Footer = () => {
  const ActualYear = new Date().getFullYear();

  return (
    <FooterStyled>
      Mateusz Łuczak {ActualYear} @ All rights reserved
    </FooterStyled>
  );
};

export default Footer;
