import styled from "styled-components";
import { StyledButton } from "../login/Login.style";

const AboutContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.transparentBg2};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  min-height: 70vh;
  width: 95%;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    background-color: ${({ theme }) => theme.screens.transparentBg2};
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.screens.transparentBg2};
  padding: 2rem;
  width: 90%;
  color: ${({ theme }) => theme.colors.mainColor2};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin-top: 50px;
    flex-direction: column;
    width: 90%;
  }
`;

export const Info = styled.div`
  width: 50%;
  & > p {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin-top: 40px;
    width: 90%;
  }
`;

export const AboutButton = styled(StyledButton)`
  width: 20%;
  border-radius: 35px;
  padding: 15px 0;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.5rem;
    border-radius: 30px;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.3rem;
    padding: 0.7rem 0;
    border-radius: 25px;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    border-radius: 20px;
  }
`;

export default AboutContainer;
