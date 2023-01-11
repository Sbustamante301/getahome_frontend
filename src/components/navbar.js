import styled from "@emotion/styled";
import logo from "../assets/Logo.png"
import { Icons } from "../utils";
import { JoinButton, LoginButton, FindButton, LogoutButton, SaveButton, ProfileButton, MyPropertyButton } from "../components/Button"


// width: 1200px;
// width: 100%;
// height: 72px;
// box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

// width: 1136px;
const NavbarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;

  width: 1200px;
  height: 72px;
`;

const FormWrapp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 1136px;
  height: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:756px;
  height: 40px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  width: 586px;
  height: 40px;

  border: none;
  justify-content: center;
`;
const Form2 = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:476px;
  height: 40px;
`;

const Input2 = styled.input`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  width: 306px;
  height: 40px;

  border: none;
  justify-content: center;
`;

export function NavbarUnAuthenticated() {

  return (
    <NavbarContainer>
      <FormWrapp>
        <img src={logo} />
        <Form>
          <Input
            name="query"
          // value={query}
          // onChange={(event) => setQuery(event.target.value)}
          />
          <FindButton>
            Find a Home
          </FindButton>
        </Form>
        <JoinButton>Join</JoinButton>
        <LoginButton>Login</LoginButton>

      </FormWrapp>
    </NavbarContainer>
  );
}

export function NavbarSeeker() {
  return (
    <NavbarContainer>
      <FormWrapp>
        <img src={logo} />
        <Form2>
          <Input2
            name="query"
          // value={query}
          // onChange={(event) => setQuery(event.target.value)}
          />
          <FindButton>
            Find a Home
          </FindButton>
        </Form2>
        <LogoutButton>LOGOUT</LogoutButton>
        <SaveButton>SAVE PROPERTIES</SaveButton>
        <ProfileButton>PROFILE</ProfileButton>

      </FormWrapp>
    </NavbarContainer>
  );
};

export function NavbarLandLord() {
  return (
    <NavbarContainer>
      <FormWrapp>
        <img src={logo} />
        <Form2>
          <Input2
            name="query"
          // value={query}
          // onChange={(event) => setQuery(event.target.value)}
          />
          <FindButton>
            Find a Home
          </FindButton>
        </Form2>
        <LogoutButton>LOGOUT</LogoutButton>
        <MyPropertyButton>MY PROPERTIES</MyPropertyButton>
        <ProfileButton>PROFILE</ProfileButton>

      </FormWrapp>
    </NavbarContainer>
  );
};

