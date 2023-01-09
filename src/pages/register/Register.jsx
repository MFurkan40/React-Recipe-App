import RegisterContainer, {
  RegisterButton,
  RegisterForm,
  RegisterFormContainer,
  RegisterHeader,
  RegisterInput,
  SignInLink,
} from "./Register.style";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterFormContainer>
        <RegisterHeader>Register Now</RegisterHeader>
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
