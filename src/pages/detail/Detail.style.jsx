import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  /* color: ${({ theme }) => theme.colors.mainColor2}; */
  background: #cf7c2fe2;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
  border-top: 2px solid #000;
`;

export const DetailPart = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  flex-direction: row;
  margin: 1rem;
  border-top: 2px solid #000;
  border-radius: 5px;
`;

export const ImgContainer = styled.div`
  background: ${({ theme }) => theme.colors.transparentBg};
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(Flex)`
  margin: 25px;
  img {
    width: 200px;
  }

  & > h1 {
    margin-right: 50px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
