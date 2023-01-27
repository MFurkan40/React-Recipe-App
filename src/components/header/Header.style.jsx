import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

const HeaderContianer = styled(Flex)`
  background: ${({ theme }) => theme.colors.transparentBg2};
  color: ${({ theme }) => theme.colors.mainColor1};
  margin-top: 1.5rem;
  flex-direction: column;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 1.5rem;
  }
`;

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.transparentBg};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.mainColor2};
  border-radius: 3px;
  margin: 20px;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0;
  }
`;

export const FoodInput = styled.input`
  background: ${({ theme }) => theme.colors.mainColor2};
  color: ${({ theme }) => theme.colors.mainColor1};
  height: 3rem;
  width: 15rem;
  outline: none;
  border: none;
  padding: 10px 20px;
  text-indent: 3px;
  font-size: 1.5rem;
  margin: 5px;

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 12rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: 8rem;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.transparentBg};
  color: ${({ theme }) => theme.colors.mainColor2};
  padding: 10px 20px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentBg2};
    color: ${({ theme }) => theme.colors.mainColor1};
    transition: all 0.1s ease-in;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    padding: 5px 10px;
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 4px 8px;
    font-size: 1.2rem;
  }
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.transparentBg};
  color: ${({ theme }) => theme.colors.mainColor2};
  height: 3rem;
  border-radius: 3px;
  padding: 5px 20px;
  border: none;
  margin: 5px;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.3rem;
    padding: 2.5px 10px;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: 1.5px 3px;
    font-size: 1.2rem;
    width: 5rem;
    option {
      font-size: 0.8rem;
    }
  }
`;

export default HeaderContianer;
