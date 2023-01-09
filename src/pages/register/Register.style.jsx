import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginContainer, {
  FormContainer,
  Header,
  StyledButton,
  StyledForm,
  StyledInput,
} from "../login/Login.style";

export const RegisterContainer = styled(LoginContainer)`
  height: calc(100vh - 148.6px);
`;

export const RegisterFormContainer = styled(FormContainer)``;

export const RegisterForm = styled(StyledForm)`
  margin-top: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    & > p {
      font-size: 0.9rem;
    }
  }
`;

export const RegisterHeader = styled(Header)`
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.9rem;
  }
`;

export const RegisterInput = styled(StyledInput)`
  height: 2.7rem;
  font-size: 1.5rem;
  width: 16rem;
  margin: 1.2rem;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 2.6rem;
    width: 14rem;
    font-size: 1.4rem;
    margin: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height: 2.5rem;
    width: 13rem;
    font-size: 1.3rem;
    margin: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    height: 2rem;
    width: 10rem;
    margin: 0.8rem;
    font-size: 1.1rem;
  }
`;

export const RegisterButton = styled(StyledButton)`
  margin: 1.3rem 1rem;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0.6rem 1rem;
    margin-bottom: 1.1rem;
  }
`;

export const SignInLink = styled(Link)`
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
`;
export default RegisterContainer;
