import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  /* background-color: #c0c0c09b; */
  padding: 1rem 1.5rem;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Brand = styled(Link)`
  width: 287px;
  padding: 1rem 0;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  & span {
    color: ${({ theme }) => theme.colors.mainColor1};
    font-weight: 400;
  }
`;

export const LogoImage = styled.img`
  width: 85px;
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  font-size: 1.7rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainColor1};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor2};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.transparentBg};
    width: 100%;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.transparentBg};
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.mainColor1};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor2};
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export default Nav;
