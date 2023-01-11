import styled from "@emotion/styled";
import { getProperties } from "./services/properties-service";
import { NavbarUnAuthenticated, NavbarAuthenticated } from "./components/navbar";

import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/signup-page";
import PropertiesPage from "./pages/properties-page";
import PropertyPage from "./pages/property-page";
import HomePage from "./pages/home-page";
import { useAuth } from "./context/auth-context";
import LoginModal from "./components/login-modal";



const Wrapper = styled.div``;

function App() {
  const {user, isOpenModal, userType} = useAuth()
  console.log("User",user)
  console.log("UserType",userType)
  getProperties().then(response=>{
    console.log(response)
  })
  return (
    <Wrapper>
      { !user ? <NavbarUnAuthenticated /> : <NavbarAuthenticated /> }
      {
        isOpenModal ? <LoginModal/> :
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element= {<HomePage />}/>
          <Route path="/signup" element= {<SignupPage />}/>
          <Route path="/properties" element= {<PropertiesPage />}/>
          <Route path="/properties/:id" element= {<PropertyPage />}/>

        </Routes>
      }
    </Wrapper>

  );
}

export default App;
