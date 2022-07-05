import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import { HeaderStyled } from './header.styled';
import Features from '../../components/features/features';
import Company from '../../components/company/company';
import ArrowUp from '../../assets/images/icon-arrow-up.svg';

const Header = () => {
  const [featureIsOpen, setFeatureIsOpen] = useState(false);
  const [companyIsOpen, setCompanyIsOpen] = useState(false);

  const toggleFeature = () => setFeatureIsOpen(!featureIsOpen);
  const toggleCompany = () => setCompanyIsOpen(!companyIsOpen);

  return (
    <>
      <HeaderStyled>
        <div>
          <div>
            <img src={Logo} alt="Snap Logo" />
          </div>
          <div onClick={toggleFeature}>
            Features
            <img src={ArrowUp} alt="ArrowUp" />
          </div>
          <div onClick={toggleCompany}>Company</div>
          <div>Careers</div>
          <div>About</div>
        </div>
        <div></div>
        <div>
          <div>Login</div>
          <div>Register</div>
        </div>
      </HeaderStyled>
      <div>{featureIsOpen ? '' : <Features />}</div>
      <div>{companyIsOpen ? '' : <Company />}</div>
    </>
  );
};
export default Header;
