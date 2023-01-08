import { useNavigate } from "react-router-dom";
import LoginContainer, {
  FormContainer,
  Header,
  SignUpLink,
  StyledButton,
  StyledForm,
  StyledImage,
  StyledInput,
  SubHeader,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useState } from "react";

const Login = ({ setAuth }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userInfo = {
    username: "user",
    password: "test123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.toLowerCase() === userInfo.username &&
      password.toLowerCase() === userInfo.password
    ) {
      setAuth(true);
      sessionStorage.setItem("user", JSON.stringify(userInfo));
    }
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImage src={meal} />
        <Header>HAS KEBAB RECIPE</Header>
        <SubHeader>Take the Kebab, Give the Kebab</SubHeader>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Username"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {user || <h6>Wrong Password or Username</h6>} */}
          <StyledButton type="submit">Login</StyledButton>
          <p>
            Register Now <SignUpLink to={"/register"}> Sign Up</SignUpLink>
          </p>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
