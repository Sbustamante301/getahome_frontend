import styled from "@emotion/styled";
import logo from "../assets/Logo.svg"
import { Icons } from "../utils";
import { JoinButton, LoginButton, FindButton, LogoutButton, SaveButton, ProfileButton, MyPropertyButton } from "../components/Button"
import { useAuth } from "../context/auth-context";

const NavbarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 100%;
  height: 72px;
`;

const FormWrapp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 100%;
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
  const {setIsOpenModal} = useAuth();

  function handleLogin(event){
    event.preventDefault();
    setIsOpenModal(true)
  }
  return (
    <NavbarContainer>
      <FormWrapp>
        <img src={logo} alt="image1"/>
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
        <LoginButton handleLogin={handleLogin}>Login</LoginButton>

      </FormWrapp>
    </NavbarContainer>
  );
}

export function NavbarAuthenticated() {
  const {userType, logout} = useAuth();
  function handleLogout(){
    logout();
  }

  return (
    <NavbarContainer>
      <FormWrapp>
        <img src={logo} alt={"image2"}/>
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
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        {userType === 1 ? <MyPropertyButton>MY PROPERTIES</MyPropertyButton> : <SaveButton>SAVED PROPERTIES</SaveButton>}
        
        <ProfileButton>PROFILE</ProfileButton>

      </FormWrapp>
    </NavbarContainer>
  );
};

