import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: #cf7c2fe2;
  min-height: 50vh;
  padding: 0.5rem;
  border-top: 2px solid #000;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: calc(100vh - 150px);
    flex-direction: column;
  }
`;

export const DetailPart = styled(Flex)`
  max-width: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  flex-direction: row;
  margin: 1rem;
  border-top: 2px solid #000;
  border-radius: 5px;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 75%;
    flex-direction: column;
    overflow-y: scroll;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height: 75%;
    flex-direction: column;
    overflow-y: scroll;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0;
    width: 320px;
    min-width: 280px;
  }
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

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    padding: 5px;
    border-radius: 1px;
    margin: 1rem;
    img {
      border-radius: 5px;
      width: 180px;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 3px;
    border-radius: 1px;
    margin: 1rem;
    img {
      border-radius: 5px;
      width: 150px;
    }
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

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 25%;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    img {
      display: none;
    }

    & > h1 {
      margin-right: 0;
    }
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.2rem;
    width: 280px;
  }
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin-top: 25rem;
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    margin-top: 33rem;
    font-size: 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 280px;
    margin: 0;
    margin-top: 25rem;
    font-size: 1.4rem;
  }
`;
