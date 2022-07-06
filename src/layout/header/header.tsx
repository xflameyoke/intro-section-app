import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import { Arrow, HeaderLogo, HeaderStyled, Register } from './header.styled';
import Features from '../../components/features/features';
import Company from '../../components/company/company';
import ArrowUp from '../../assets/images/icon-arrow-up.svg';
import ArrowDown from '../../assets/images/icon-arrow-down.svg';

const Header = () => {
  const [featureIsOpen, setFeatureIsOpen] = useState(true);
  const [companyIsOpen, setCompanyIsOpen] = useState(true);

  const toggleFeature = () => setFeatureIsOpen(!featureIsOpen);
  const toggleCompany = () => setCompanyIsOpen(!companyIsOpen);

  return (
    <>
      <HeaderStyled>
        <HeaderLogo src={Logo} alt="Snap Logo" />
        <div>
          <div onClick={toggleFeature}>
            Features
            <div>
              {featureIsOpen ? (
                <Arrow src={ArrowUp} alt="ArrowUp" />
              ) : (
                <Arrow src={ArrowDown} alt="ArrowDown" />
              )}
            </div>
          </div>
          <div onClick={toggleCompany}>
            Company
            <div>
              {companyIsOpen ? (
                <Arrow src={ArrowUp} alt="ArrowUp" />
              ) : (
                <Arrow src={ArrowDown} alt="ArrowDown" />
              )}
            </div>
          </div>
          <div>Careers</div>
          <div>About</div>
        </div>
        <div></div>
        <div>
          <div>Login</div>
          <Register>Register</Register>
        </div>
      </HeaderStyled>
      <div>{featureIsOpen ? '' : <Features />}</div>
      <div>{companyIsOpen ? '' : <Company />}</div>
    </>
  );
};
export default Header;
