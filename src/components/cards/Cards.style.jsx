import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const MainContainer = styled(Flex)`
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 24rem;
  width: 24rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 3px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const Image = styled.img`
  height: 12rem;
  border-radius: 10px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor1};
  color: ${({ theme }) => theme.colors.mainColor2};
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 1rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;
