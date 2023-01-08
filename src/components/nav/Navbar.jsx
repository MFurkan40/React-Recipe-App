import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav, {
  Brand,
  Hamburger,
  LogoImage,
  Menu,
  MenuLink,
} from "./Navbar.style";
import meal from "../../assets/meal.svg";

const Navbar = ({ setAuth, auth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    setAuth(false);
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <LogoImage src={meal} />
        <span>RECIPE</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to={"/"}>Home</MenuLink>
        <MenuLink to={"/about"}>About</MenuLink>
        <MenuLink to={"/register"}>Register</MenuLink>
        <MenuLink to={"/login"} onClick={() => logout()}>
          {auth ? "Logout" : "Login"}
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
