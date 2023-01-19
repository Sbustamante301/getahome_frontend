import styled from "@emotion/styled";

import { getMyProperties, getProperties, showProperty } from "./services/properties-service";
import { NavbarUnAuthenticated, NavbarAuthenticated } from "./components/navbar";
import { getSaved } from "./services/properties-service";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
import SignupPage from "./pages/signup-page";
import PropertiesPage from "./pages/properties-page";
import PropertyPage from "./pages/property-page";
import HomePage from "./pages/home-page";
import LoginModal from "./components/login-modal";
import MyPropertiesPage from "./pages/my-properties-page";
import SavedPropertiesPage from "./pages/saved_properties-page";

import PropertyFormPage from "./pages/property-form-page";


import EditPropertyPage from "./pages/edit-property-page";
import CheckboxF from "./components/sections/checkbox";
import ProfilePage from "./pages/profile-page";
import SimpleSlider from "./components/sections/image-carousel";




const Wrapper = styled.div`
  min-height:800px;
`;

function App() {

  const { setProperties, user, isOpenModal, userType, setSavedProperty, setMyProperty, setCurrentProperty } = useAuth()
  const {id} = useParams();

  useEffect(() => {
    getProperties().then(response => {
      setProperties(response)

    }).catch(error => { console.log(error) })

  }, []);

  useEffect(()=>{
    showProperty(id).then(response=>{
        setCurrentProperty(response)
      }
    
    )
  },[id])


  useEffect(() => {
    if(userType === "landlord"){
      getMyProperties().then(response => {
        setMyProperty(response)
        sessionStorage.setItem("myProperty", JSON.stringify(response))
  
      }).catch(error => { console.log(error) })
    }else if (userType === "seeker"){
      getSaved().then(response => {
        setSavedProperty(response)
        sessionStorage.setItem("savedProperty", JSON.stringify(response))
  
      }).catch(error => { console.log(error) })
    }

  }, []);

  useEffect(() => {
    
    getMyProperties().then(response=>{
    setMyProperty(response)
    }).catch(error=>{console.log(error)})
    
  },[]);


  return (
    <Wrapper>
      {!user ? <NavbarUnAuthenticated /> : <NavbarAuthenticated />}
      {


        isOpenModal ? <LoginModal /> :
          <Routes>
            <Route index element={<Navigate to="home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/property/new" element={<PropertyFormPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyPage />} />
            <Route path="/my_properties" element={<MyPropertiesPage />} />
            <Route path="/saved_properties" element={<SavedPropertiesPage />} />
            <Route path="/properties/edit/:id" element={<EditPropertyPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/slider" element={<SimpleSlider />} />
            
          </Routes>


      }
    </Wrapper>

  );
}

export default App;
