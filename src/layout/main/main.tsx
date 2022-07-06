import React from 'react';
import {
  MainButton,
  MainClients,
  MainHeader,
  MainHero,
  MainIcon,
  MainLeft,
  MainQuote,
  MainRight,
  MainStyled,
} from './main.styled';
import HeroDesktop from '../../assets/images/image-hero-desktop.png';
import ClientDatabiz from '../../assets/images/client-databiz.svg';
import ClientAudiophile from '../../assets/images/client-audiophile.svg';
import ClientMeet from '../../assets/images/client-meet.svg';
import ClientMaker from '../../assets/images/client-maker.svg';
const Main = () => (
  <MainStyled>
    <MainLeft>
      <MainHeader>
        <span>Make</span>remote work
      </MainHeader>
      <MainQuote>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </MainQuote>
      <MainButton>Learn more</MainButton>
      <MainClients>
        <MainIcon src={ClientDatabiz} alt="ClientDatabiz" />
        <MainIcon src={ClientAudiophile} alt="ClientAudiophile" />
        <MainIcon src={ClientMeet} alt="ClientMeet" />
        <MainIcon src={ClientMaker} alt="ClientMaker" />
      </MainClients>
    </MainLeft>
    <MainRight>
      <MainHero src={HeroDesktop} alt="HeroDesktop" />
    </MainRight>
  </MainStyled>
);

export default Main;
