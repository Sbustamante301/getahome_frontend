import { BiBath } from "react-icons/bi";
import { RiAddFill } from "react-icons/ri";
import { Icons } from "./utils";
import styled from "@emotion/styled";
import buildings from "./assets/picture.svg"

import { colors, typography } from "./styles";
import { CreateAccountButton, SearchButton } from "./components/Button";
import { PrimaryButton } from "./components/Button";
import { TeamCard } from "./components/teamCard";

import teamMember from "./assets/team.svg"
import { getProperties } from "./services/properties-service";

import { PropertyCard } from "./components/propertyCard"
import { NavbarUnAuthenticated, NavbarSeeker, NavbarLandLord } from "./components/navbar";

import SectionMeetHome from "./components/sections/sectionMeetHome";
import SectionMeetTeam from "./components/sections/sectionmeetTeam";
import SectionFooter from "./components/sections/sectionFooter";
import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/signup-page";
import PropertiesPage from "./pages/properties-page";
import PropertyPage from "./pages/property-page";
import HomePage from "./pages/home-page";



const Wrapper = styled.div``;

function App() {
  getProperties().then(response=>{
    console.log(response)
  })
  return (
    <Wrapper>
      <NavbarUnAuthenticated />
      {/* <NavbarSeeker /> */}
      {/* <NavbarLandLord /> */}
      
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element= {<HomePage />}/>
        <Route path="/signup" element= {<SignupPage />}/>
        <Route path="/properties" element= {<PropertiesPage />}/>
        <Route path="/properties/:id" element= {<PropertyPage />}/>

      </Routes>

    </Wrapper>

  );
}

export default App;
