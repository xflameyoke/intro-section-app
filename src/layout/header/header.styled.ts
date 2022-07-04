import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
`;
