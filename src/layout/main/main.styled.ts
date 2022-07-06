import styled from 'styled-components';

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  max-height: 100vh;
  margin: 70px auto 40px auto;
`;

export const MainLeft = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.25fr 0.1fr auto;
  grid-template-columns: 1fr;
  margin-right: 100px;
`;

export const MainRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
`;

export const MainHeader = styled.h1`
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-size: 84px;
`;

export const MainQuote = styled.p`
  width: 400px;
  margin: -20px 0 60px 0;
  color: grey;
  font-size: 18px;
`;
export const MainIcon = styled.img`
  width: 100px;
  height: 40px;
  margin-right: 25px;
`;

export const MainButton = styled.button`
  width: 150px;
  height: 50px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: white;
    background: black;
  }
`;

export const MainHero = styled.img`
  width: 500px;
  height: 600px;
`;

export const MainClients = styled.div`
  margin-top: 120px;
`;
