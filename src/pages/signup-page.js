import { colors, typography } from "../styles";
import styled from "@emotion/styled";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import landlord from "../assets/landlord.svg";
import homeseeker from "../assets/homeseeker.svg";
import { useState } from "react";
import { createUser } from "../services/users-service";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 352px;
  padding: 100px;
`;
const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 352px;
`;
const Div = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 143, 177, 0.15) 50%
  );
  width: 100%;
  height: 704px;
`;
const Div2 = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 143, 177, 0.15) 50%
  );
  width: 100%;
  height: 704px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  ${typography.head.sm};
  color: #1d4044;
  width: 520px;
  height: 196px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const SubTitle = styled.div`
  ${typography.head.xl};
  color: #1d4044;
  width: 677.983px;
  height: 88px;
`;

const ImgDiv = styled.div`
  width: 280px;
  height: 274px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  background: ${colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 30px;
  margin-top: -150px;
  padding: 0px;
`;

const Img = styled.img``;

const ImgTitle = styled.div`
  ${typography.head.xs}
  ${colors.gray.dark}
`;

const ImgSubtitle = styled.div`
  ${typography.head.xxxs}
  ${colors.gray.dark}
`;

function Hidden({ HandleComponent }) {
  const { userType, setUserType } = useAuth();
  function AssignUser(typeNumber) {
    setUserType(typeNumber);
  }

  return (
    <Div>
      <Section1>
        <Title>Selecciona el perfil con el que te identificas</Title>
        <SubTitle>Que estas buscando?</SubTitle>
      </Section1>
      <Section2>
        <ImgDiv
          onClick={() => {
            HandleComponent();
            AssignUser("landlord");
          }}
        >
          <Img src={landlord} />
          <ImgTitle>Landlord</ImgTitle>
          <ImgSubtitle>You want to rent or sell a home</ImgSubtitle>
        </ImgDiv>
        <ImgDiv
          onClick={() => {
            HandleComponent();
            AssignUser("seeker");
          }}
        >
          <Img src={homeseeker} />
          <ImgTitle>Homeseeker</ImgTitle>
          <ImgSubtitle>You want to find a home</ImgSubtitle>
        </ImgDiv>
      </Section2>
      <SectionFooter2 />
    </Div>
  );
}

const Form = styled.form`
  background: ${colors.white};
  border-width: thin;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 388px;
  height: 468px;

  padding: 70px;
`;

const DivForm = styled.div`
  background: white;
  border-width: thin;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 388px;
  height: 468px;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  padding: 70px;
  margin: 100px;
  gap: 16px;
`;

const H1 = styled.h1`
  ${typography.head.sm};
  width: 246px;
  height: 32px;
  margin-top: -55px;
`;

function SignupForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { userType, setUserType, setUser } = useAuth();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    user_type: userType,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formdata.passwordConfirmation === formdata.password) {
      setError(null);
      const { passwordConfirmation, ...newForm } = formdata;

      createUser(formdata)
        .then((response) => {
          setUser(response);
          sessionStorage.setItem("user", JSON.stringify(response));
          sessionStorage.setItem(
            "userType",
            JSON.stringify(response.user_type)
          );
        })
        .catch(console.log);
      navigate("/properties");
    } else {
      setError("Passwords must coincide");
    }
  }
  return (
    <Div2>
      <DivForm>
        <form onSubmit={handleSubmit}>
          <H1>Create your Account</H1>
          <Input
            label={"NAME"}
            id="name"
            name="name"
            type="text"
            value={formdata.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <Input
            label={"EMAIL"}
            id="email"
            name="email"
            type="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="user@mail.com"
          />
          <Input
            label={"PHONE"}
            id="phone"
            name="phone"
            type="text"
            value={formdata.phone}
            onChange={handleChange}
            placeholder="999-999-999  "
          />
          <Input
            label={"PASSWORD"}
            id="password"
            name="password"
            type="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="******"
          />
          <P>At least 6 characters</P>
          <Input
            label={"PASSWORD CONFIRMATION"}
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            value={formdata.passwordConfirmation}
            onChange={handleChange}
            placeholder="******"
          />
          <p>{error ? error : null}</p>
          <CreateAccountButton>Create Account</CreateAccountButton>
        </form>
      </DivForm>
    </Div2>
  );
}

const P = styled.p`
  ${typography.text.xs};
  color: ${colors.gray.light};
  margin-left: -60px;
  margin-top: 5px;
`;

export default function SignupPage() {
  const { userType, setUserType } = useAuth();
  const [open, setOpen] = useState(false);
  function HandleComponent() {
    setOpen(!open);
  }
  return open ? <SignupForm /> : <Hidden HandleComponent={HandleComponent} />;
}

function CreateAccountButton({ children, onClick }) {
  return (
    <Button2 onClick={onClick}>
      <Text>{children}</Text>
    </Button2>
  );
}

const Text = styled.div`
  margin-bottom: 4px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Button2 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: none;
  width: 177px;
  height: 40px;

  background: ${colors.pink.medium};
  border-radius: 16px;
  padding: 8px, 16px, 8px, 16px;
  margin-top: 25px;
  margin-left: 35px;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  style: none;
  background-color: white;
  color: ${colors.gray.dark};
  -webkit-appearance: none;
  border: 1px solid ${colors.pink.medium};
  border-radius: 8px;
  width: 356px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: -60px;
  margin-top: 12px;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  onChange,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}
