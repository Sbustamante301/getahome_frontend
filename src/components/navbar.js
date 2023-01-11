import styled from "@emotion/styled";
import logo from "../assets/Logo.png"
import { Icons } from "../utils";
import { JoinButton, LoginButton, FindButton } from "../components/Button"

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
function Navbar() {

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

export default Navbar;