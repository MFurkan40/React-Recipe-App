import styled from "styled-components";

const ImgDiv = styled.div`
  background-color: #110a0a9d;
  display: flex;
  justify-content: center;
  height: calc(100vh - 400px);
`;

export const HomeDiv = styled.div`
  height: 100%;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;

export const NotFoundImg = styled.img`
  width: 80%;
  max-width: 500px;
`;

export const HeaderText = styled.h1`
  font-size: 2.5rem;
  color: #bd0202;
  background-color: #110a0a9d;
  text-align: center;
`;

export default ImgDiv;
