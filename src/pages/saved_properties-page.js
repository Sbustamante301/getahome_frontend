
import { getSaved } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import Paginated from "../components/pagination";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
min-height:740px;
margin-left:120px;
margin-right:120px;

`

const ViewOptions = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;
margin-bottom:16px;
margin-top: 32px;
`
const H1 = styled.h1`
${typography.text.md};
color: ${colors.gray.medium};
Padding: 0px 4px 0px 4px;
cursor: pointer;

`
const P1 = styled.p`
${typography.text.xl};
color: ${colors.gray.medium};
letter-spacing: 0.15px;
font-weight: 500;
`


export default function SavedPropertiesPage() {

  const { savedProperty, userType, setSavedProperty } = useAuth();
  const [saved, setSaved] = useState("favorites");

  useEffect(() => {
    if (userType === "seeker") {
      getSaved().then(response => {
        setSavedProperty(response)
        sessionStorage.setItem("savedProperty", JSON.stringify(response))
      }).catch(error => { console.log(error) })
    }

  }, []);

  return (
    <>
      <Wrapper>
        <div style={{ height: "124px", display: "flex", flexDirection: "column", marginLeft: "15px" }}>
          <ViewOptions>
            <H1 onClick={() => setSaved("favorites")} style={{ borderBottom: `${saved === "favorites" ? "3px solid #F48FB1" : "0px"}` }}>FAVORITES</H1>
            <H1 onClick={() => setSaved("contacts")} style={{ borderBottom: `${saved === "contacts" ? "3px solid #F48FB1" : "0px"}` }}>CONTACTED</H1>
          </ViewOptions>
          {savedProperty.length !== 0 ? saved === "favorites" ?
            <P1> {savedProperty.favorites.length} Properties found</P1> :
            <P1> {savedProperty.contacts.length} Properties found</P1> :
            null

          }
        </div>

        <ContainerList>
          {savedProperty.length !== 0 ? saved === "favorites" ? savedProperty.favorites.map((saved, index) => {
            return (
              <PropertyCard key={index} property={saved} id={saved.property.id} />
            )
          }) :
            savedProperty.contacts.map((saved, index) => {
              return (
                <PropertyCard key={index} property={saved} id={saved.property.id} />
              )
            })
            : null}
        </ContainerList>
        <Paginated />
        <SectionFooter2 />


      </Wrapper>

    </>

  )
}