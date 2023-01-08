import { Header } from "../login/Login.style";
import RegisterContainer, {
  RegisterButton,
  RegisterForm,
  RegisterFormContainer,
  RegisterInput,
  SignInLink,
} from "./Register.style";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterFormContainer>
        <Header>Register Now</Header>
        <RegisterForm>
          <RegisterInput type="text" placeholder="name" />
          <RegisterInput type="password" placeholder="password" />
          <RegisterInput type="email" placeholder="email address" />
          <RegisterButton>Register</RegisterButton>
          <p>
            Already registered? <SignInLink to={"/Login"}>Sign In</SignInLink>
          </p>
        </RegisterForm>
      </RegisterFormContainer>
    </RegisterContainer>
  );
};

export default Register;
