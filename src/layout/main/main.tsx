import React from 'react';
import { MainClient, MainHero, MainLeft, MainStyled } from './main.styled';
import HeroDesktop from '../../assets/images/image-hero-desktop.png';
import ClientDatabiz from '../../assets/images/client-databiz.svg';
import ClientAudiophile from '../../assets/images/client-audiophile.svg';
import ClientMeet from '../../assets/images/client-meet.svg';
import ClientMaker from '../../assets/images/client-maker.svg';
const Main = () => (
  <MainStyled>
    <MainLeft>
      <div>Make remote work</div>
      <div>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </div>
      <button>Learn more</button>
      <div>
        <MainClient src={ClientDatabiz} alt="ClientDatabiz" />
        <MainClient src={ClientAudiophile} alt="ClientAudiophile" />
        <MainClient src={ClientMeet} alt="ClientMeet" />
        <MainClient src={ClientMaker} alt="ClientMaker" />
      </div>
    </MainLeft>
    <div>
      <MainLeft>
        <MainHero src={HeroDesktop} alt="HeroDesktop" />
      </MainLeft>
    </div>
  </MainStyled>
);

export default Main;
