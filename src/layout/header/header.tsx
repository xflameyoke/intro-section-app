import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { HeaderStyled } from './header.styled';

const Header = () => (
  <HeaderStyled>
    <div>
      <div>
        <img src={Logo} alt="Snap Logo" />
      </div>
      <div>Features</div>
      <div>Compamny</div>
      <div>Careers</div>
      <div>About</div>
    </div>
    <div>
      <div>Login</div>
      <div>Register</div>
    </div>
  </HeaderStyled>
);

export default Header;
