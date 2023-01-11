import styled from "@emotion/styled";
import { getProperties } from "./services/properties-service";
import { NavbarUnAuthenticated, NavbarAuthenticated } from "./components/navbar";

import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/signup-page";
import PropertiesPage from "./pages/properties-page";
import PropertyPage from "./pages/property-page";
import HomePage from "./pages/home-page";

import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
import LoginModal from "./components/login-modal";
import MyPropertiesPage from "./pages/my-properties-page";
import SavedPropertiesPage from "./pages/saved_properties-page";




const Wrapper = styled.div``;

function App() {

  const {setProperties,user, isOpenModal, userType} = useAuth()
  useEffect(() => {
    getProperties().then(response=>{
    setProperties(response)
  
    }).catch(error=>{console.log(error)})
    
  }, []);


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
          <Route path="/my_properties" element= {<MyPropertiesPage />}/>
          <Route path="/saved_properties" element= {<SavedPropertiesPage />}/>

        </Routes>
      }
    </Wrapper>

  );
}

export default App;
