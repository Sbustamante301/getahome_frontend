import SectionMeetHome from "../components/sections/sectionMeetHome";
import styled from "@emotion/styled";
import { PropertyCard } from "../components/propertyCard"
import SectionMeetTeam from "../components/sections/sectionmeetTeam";
import { SectionFooter } from "../components/sections/sectionFooter";
import SectionSignup from "../components/sections/sectionSignup";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors, typography } from "../styles";
import { getMyProperties, getSaved } from "../services/properties-service";
import { getUser } from "../services/users-service";

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding:64px;
`
const Div = styled.div`
width:100%;
min-height:800px;

`;
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const PrepTitle = styled.p`
  ${typography.text.button};
  color: ${colors.gray.dark};
  letter-spacing: 0.1px;
  margin-top:64px;
`;
const Title = styled.h1`
  ${typography.head.md};
  color: ${colors.pink.dark};
  margin: 0;
`;
const PropertyContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:3rem;
  margin-top:2rem;
`

function HomePage() {
  const { userType, properties, setSavedProperty, setUser, setMyProperty } = useAuth();
  const randomProperties = properties.filter((_property, index) => index < 3)
  useEffect(() => {
    if (userType === "seeker") {
      getSaved().then(response => {
        setSavedProperty(response)
        sessionStorage.setItem("savedProperty", JSON.stringify(response))
      }).catch(error => { console.log(error) })
    } else if (userType === "landlord") {
      getMyProperties().then(response => {
        setMyProperty(response)
        sessionStorage.setItem("myProperty", JSON.stringify(response))
      }).catch(error => { console.log(error) })
    }
    getUser()
      .then(response => {
        setUser(response);

      })
      .catch((error) => console.log(error));

  }, []);
  return (
    <>
      <Div>
        <SectionMeetHome />
        <Section2>
          <TextContainer>
            <PrepTitle>Find an Appartment you Love</PrepTitle>
            <Title>Homes for rent at the best prices</Title>
          </TextContainer>
          <PropertyContainer>
            {randomProperties.map((property, index) => {
              return <PropertyCard key={`r${index}`} property={property} id={property.property.id} />
            })}
          </PropertyContainer>
        </Section2>
        <SectionSignup />

        <SectionMeetTeam />
      </Div>
      <SectionFooter />
    </>
  )
}

function getRandomValues(array, count) {
  const copy = array.slice();
  return new Array(count).fill().map(() => {
    const randomIndex = Math.floor(Math.random() * copy.length);
    return copy.splice(randomIndex, 1)[0];
  });
}

export default HomePage;