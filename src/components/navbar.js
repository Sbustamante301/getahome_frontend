import styled from "@emotion/styled";
import logo from "../assets/Logo.svg"
import { JoinButton, LoginButton, FindButton, LogoutButton, SaveButton, ProfileButton, MyPropertyButton } from "../components/Button"
import { useAuth } from "../context/auth-context";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); 
  function handleLogin(event){
    event.preventDefault();
    setIsOpenModal(true)
  }

  function handleSignUp(event){
    event.preventDefault();
    navigate("/signup");    
  }

  function handleShowProperties(event){
    event.preventDefault();
    navigate("/properties");
  }

  return (
    <NavbarContainer>
      <FormWrapp>
        <Link to="/home">
          <img src={logo} alt="image1"/>
        </Link>
        <Form>
          <Input
            name="query"
          // value={query}
          // onChange={(event) => setQuery(event.target.value)}
          />
          <FindButton onClick={handleShowProperties}>
            Find a Home
          </FindButton>
        </Form>
        <JoinButton onClick={handleSignUp}>Join</JoinButton>
        <LoginButton handleLogin={handleLogin}>Login</LoginButton>

      </FormWrapp>
    </NavbarContainer>
  );
}

export function NavbarAuthenticated() {
  const navigate = useNavigate(); 
  const {userType, logout} = useAuth();
  function handleLogout(){
    logout();
  }
  function handleMyProperties(event){
    event.preventDefault();
    navigate("/my_properties")
  }
  function handleSavedProperties(event){
    event.preventDefault();
    navigate("/saved_properties")
  }
  function handleShowProperties(event){
    event.preventDefault();
    navigate("/properties");
  }

  return (
    <NavbarContainer>
      <FormWrapp>
        <Link to="/home">
          <img src={logo} alt={"image2"}/>
        </Link>
        <Form2>
          <Input2
            name="query"
      
          />
          <FindButton onClick={handleShowProperties}>
            Find a Home
          </FindButton>
        </Form2>
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        {userType === "landlord" ? <MyPropertyButton onClick={handleMyProperties}>MY PROPERTIES</MyPropertyButton> 
                        : <SaveButton onClick={handleSavedProperties}>SAVED PROPERTIES</SaveButton>}
        
        <ProfileButton>PROFILE</ProfileButton>

      </FormWrapp>
    </NavbarContainer>
  );
};

