import styled from "@emotion/styled";
import logo from "../assets/Logo.svg"
import { JoinButton, LoginButton, FindButton, LogoutButton, SaveButton, ProfileButton, MyPropertyButton } from "../components/Button"
import { useAuth } from "../context/auth-context";
import { Link, useNavigate } from "react-router-dom";

const NavbarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 100%;
  height: 72px;
`;

const Form2 = styled.form`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  min-width:700px;
  height: 40px;
`;

const DivNav = styled.div`
  display:flex;
  gap: 16px;
`

export function NavbarUnAuthenticated() {
  const {setIsOpenModal} = useAuth();
  const { userType, setUserType,open,setOpen } = useAuth();
  const navigate = useNavigate(); 
  function handleLogin(event){
    event.preventDefault();
    setIsOpenModal(true)
  }

  function handleSignUp(event){
    event.preventDefault();
    navigate("/signup");
    setUserType(null);
    setOpen(false)
  }

  function handleShowProperties(event){
    event.preventDefault();
    navigate("/properties");
  }

  // function handleFunctions(event){
    
  //    handleSignUp(event);
  //     setUserType(null);
    
  // }

  return (
    <NavbarContainer>
        <Link to="/home">
          <img src={logo} alt="image1"/>
        </Link>
        <DivNav>
          <FindButton onClick={handleShowProperties}>
            Find a Home
          </FindButton>
          <JoinButton onClick={handleSignUp}>Join</JoinButton>
          <LoginButton handleLogin={handleLogin}>Login</LoginButton>
        </DivNav>
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
  function handleProfile(event){
    event.preventDefault();
    navigate("/profile");
  }

  return (
    <NavbarContainer>
      <Link to="/home">
        <img src={logo} alt={"image2"}/>
      </Link>
      <Form2>
        <FindButton onClick={handleShowProperties}>
          Find a Home
        </FindButton>
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        {userType === "landlord" ? <MyPropertyButton onClick={handleMyProperties}>MY PROPERTIES</MyPropertyButton> 
                        : <SaveButton onClick={handleSavedProperties}> SAVED PROPERTIES</SaveButton>}
        
        <ProfileButton onClick={handleProfile}>PROFILE</ProfileButton>
      </Form2>
    </NavbarContainer>
  );
};

