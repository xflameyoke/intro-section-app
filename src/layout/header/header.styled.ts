import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 50px;
  padding: 80px;
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.5fr 0.5fr;
  grid-template-rows: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }
`;

export const HeaderLogo = styled.img`
  width: 100px;
`;

export const Arrow = styled.img`
  height: 8px;
  width: 14px;
`;

export const Register = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
`;
