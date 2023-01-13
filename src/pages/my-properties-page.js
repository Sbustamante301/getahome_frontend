
import { getMyProperties } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { SectionFooter2 } from "../components/sections/sectionFooter";


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


export default function MyPropertiesPage(){
  const { myProperty }= useAuth();
  const [ myStatus, setMyStatus ] = useState("active");

  return(
    <Wrapper>
      <div style={{height:"124px",display:"flex",flexDirection:"column",marginLeft:"15px"}}>
        <ViewOptions>
          <H1 onClick={()=>setMyStatus("active")} style={{borderBottom:`${myStatus==="active" ? "3px solid #F48FB1" : "0px"}`}}>ACTIVE</H1>
          <H1 onClick={()=>setMyStatus("close")} style={{borderBottom:`${myStatus==="close" ? "3px solid #F48FB1" : "0px"}`}}>CLOSED</H1>
        </ViewOptions>
        {myProperty ? myStatus==="active" ? 
           <P1> {myProperty.active.length} Properties found</P1>: 
           <P1> {myProperty.closed.length} Properties found</P1> :
            null
          
          }
      </div>
      
      <ContainerList>
        {myProperty ? myStatus === "active" ? myProperty.active.map((status, index)=>{
          return( 
            <PropertyCard key={index} property={status}/>         
          )
        }) :
        myProperty.closed.map((status)=>{
          return( 
            <PropertyCard property={status}/>         
          )
        }) 
      : null}
      </ContainerList>
      <SectionFooter2 />
    </Wrapper>

  )
}