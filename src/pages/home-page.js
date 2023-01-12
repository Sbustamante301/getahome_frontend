import SectionMeetHome from "../components/sections/sectionMeetHome";
import styled from "@emotion/styled";
import { PropertyCard } from "../components/propertyCard"
import SectionMeetTeam from "../components/sections/sectionmeetTeam";
import { SectionFooter } from "../components/sections/sectionFooter";
import SectionSignup from "../components/sections/sectionSignup";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { colors, typography } from "../styles";

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
`
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
  justify-content:center;
  gap:3rem;
  margin-top:2rem;
`

function HomePage() {
  const { properties } = useAuth();
  const randomProperties = properties.filter((_property, index) => index < 3)

  return (
    <>
      <SectionMeetHome />
      <Section2>
        <TextContainer>
          <PrepTitle>Find an Appartment you Love</PrepTitle>
          <Title>Homes for rent at the best prices</Title>
        </TextContainer>
        <PropertyContainer>
          {randomProperties.map((property, index) => {
            return <PropertyCard key={`r${index}`} property={property} />
          })}
        </PropertyContainer>

      </Section2>
      <SectionSignup />

      <SectionMeetTeam />
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