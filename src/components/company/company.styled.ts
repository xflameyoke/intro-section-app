import styled from 'styled-components';

export const CompanyStyled = styled.div`
  position: absolute;
  top: 80px;
  left: 380px;
  height: 150px;
  width: 100px;
  border-radius: 15px;
  box-shadow: 8px 12px 38px 0px rgba(66, 68, 90, 0.44);
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 5px;
    cursor: pointer;
  }
`;
