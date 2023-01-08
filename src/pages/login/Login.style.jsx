import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const LoginContainer = styled(Flex)`
  height: calc(100vh - 148.6px);
  /* height: 100vh; */
`;

export const FormContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  width: 43rem;
  height: 43rem;
  max-width: 50rem;
  border-radius: 50%;
  border: 10px solid #d27d2da9;
  padding: 0.5rem;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 40rem;
    height: 40rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 35rem;
    height: 35rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 30rem;
    height: 30rem;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor1};
  font-size: 3rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 2.3rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.8rem;
  }
`;

export const SubHeader = styled.h6`
  color: ${({ theme }) => theme.colors.mainColor1};
  font-size: 2rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.3rem;
  }
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.transparentBg};
  color: ${({ theme }) => theme.colors.mainColor2};
  border: none;
  outline: none;
  margin: 1rem;
  text-indent: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.mainColor2};
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 2.8rem;
    width: 14rem;
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height: 2.6rem;
    width: 13rem;
    font-size: 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    height: 2rem;
    width: 10rem;
    font-size: 1.2rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & > p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    & > p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    & > p {
      font-size: 1rem;
    }
  }
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.mainColor1};
  color: ${({ theme }) => theme.colors.mainColor2};
  border: none;
  margin: 1rem;
  padding: 0.7rem 0;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.5rem;
    margin: 0.5rem;
    padding: 0.6rem 0;
    border-radius: 15px;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.2rem;
    margin: 0.2rem 1rem;
    padding: 0.4rem 0;
    border-radius: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 180px;
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 155px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 140px;
    margin: 0;
  }
`;

export const SignUpLink = styled(Link)`
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
`;

export default LoginContainer;
