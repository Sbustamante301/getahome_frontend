import { getMyProperties } from "../services/properties-service";
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

  const { MyProperty}= useAuth();
  const [ myStatus, setMyStatus ] = useState("active");
  

  return(
    <Wrapper>
      <div style={{height:"124px",display:"flex",flexDirection:"column",marginLeft:"15px"}}>
        <ViewOptions>
          <H1 onClick={()=>setMyStatus("active")} style={{borderBottom:`${myStatus==="active" ? "3px solid #F48FB1" : "0px"}`}}>ACTIVE</H1>
          <H1 onClick={()=>setMyStatus("close")} style={{borderBottom:`${myStatus==="close" ? "3px solid #F48FB1" : "0px"}`}}>CLOSED</H1>
        </ViewOptions>
        {MyProperty ? myStatus==="active" ? 
           <P1> {MyProperty.active.length} Properties found</P1>: 
           <P1> {MyProperty.close.length} Properties found</P1> :
            "0"
          
          }
      </div>
      
      <ContainerList>
        {MyProperty ? myStatus === "active" ? MyProperty.active.map((status, index)=>{
          return( 
            <PropertyCard key={index} property={status}/>         
          )
        }) :
        MyProperty.close.map((status)=>{
          return( 
            <PropertyCard property={status}/>         
          )
        }) 
      : null}
      </ContainerList>
    </Wrapper>
  )
}