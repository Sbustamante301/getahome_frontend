import { getSaved } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left:120px;
margin-right:120px;

`
const ContainerList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 0px 32px 0px 32px;
row-gap: 32px;
column-gap: 86px;
justify-items:center;
justify-content:center;
`

const ViewOptions = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;
margin-left:20px;
margin-bottom:16px;
margin-top: 32px;
`
const H1 = styled.h1`
${typography.text.md};
color: ${colors.gray.medium};
Padding: 0px 4px 0px 4px;


`
const P1 = styled.p`
${typography.text.xl};
color: ${colors.gray.medium};
margin-left:20px;
letter-spacing: 0.15px;
font-weight: 500;
`


export default function SavedPropertiesPage(){

  const {savedProperty}= useAuth();
  const [ saved, setSaved ] = useState("favorites");
  // const[]
  
  console.log(savedProperty)
  

  return(
    <Wrapper>
      <div style={{height:"124px",display:"flex",flexDirection:"column"}}>
        <ViewOptions>
          <H1 onClick={()=>setSaved("favorites")} style={{borderBottomColor:`${setSaved==="FAVORITES" ? "3px solid #F48FB1" : ""}`}}>FAVORITES</H1>
          <H1 onClick={()=>setSaved("contacts")} style={{borderBottom:`${setSaved==="CONTACTED" ? "3px solid #F48FB1" : ""}`}}>CONTACTED</H1>
        </ViewOptions>
        <P1># Properties found</P1>
      </div>
      <ContainerList>
        {savedProperty ? saved === "favorites" ? savedProperty.favorites.map((saved)=>{
          return( 
            <PropertyCard property={saved}/>         
          )
        }) :
        savedProperty.contacts.map((saved)=>{
          return( 
            <PropertyCard property={saved}/>         
          )
        }) 
      : null}
      </ContainerList>
    </Wrapper>
  )
}