import styled from 'styled-components';

export const MainStyled = styled.div`
  color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto 40px auto;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainClient = styled.img`
  width: 100px;
  height: 50px;
`;

export const MainHero = styled.img`
  width: 500px;
  height: 600px;
`;
