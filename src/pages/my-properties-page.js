
import { getMyProperties } from "../services/properties-service";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";

import { SectionFooter2 } from "../components/sections/sectionFooter";

import { Link } from "react-router-dom";
import EmptyCard from "../components/empty-card";
import Paginated from "../components/pagination";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left:120px;
margin-right:120px;
width:100%;
min-height:800px;
`;

const ViewOptions = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width:100%;
padding: 0px;
gap: 16px;
margin-bottom:16px;
margin-top: 32px;
justify-content: space-between;
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
  const { myProperty, userType, setMyProperty }= useAuth();
  const [ myStatus, setMyStatus ] = useState("active");
  useEffect(() => {
    if (userType === "landlord") {
      getMyProperties().then(response => {
        setMyProperty(response)
        sessionStorage.setItem("myProperty", JSON.stringify(response))
      }).catch(error => { console.log(error) })
    }

  }, []);
  return(
    <>
    <Wrapper>
      <div >
        <ViewOptions>
        {/* <div style={{display:"flex",flexDirection:"row"}}> */}
          <H1 onClick={()=>setMyStatus("active")} style={{borderBottom:`${myStatus==="active" ? "3px solid #F48FB1" : "0px"}`}}>ACTIVE</H1>
          <H1 onClick={()=>setMyStatus("close")} style={{borderBottom:`${myStatus==="close" ? "3px solid #F48FB1" : "0px"}`}}>CLOSED</H1>
        {/* </div> */}
        {/* <div> */}
          <EmptyCard />
        {/* </div> */}
        </ViewOptions>
        {myProperty.length !== 0 ? myStatus==="active" ? 
           <P1> {myProperty.active.length} Properties found</P1>: 
           <P1> {myProperty.closed.length} Properties found</P1> :
            null
          
          }
      </div>
      
      <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
        {/* { myStatus==="active" ? <EmptyCard/> : null} */}
        {myProperty.length !== 0 ? myStatus === "active" ? 
        <Paginated itemsPerPage={6} filterProperties={myProperty.active} />
        :
        <Paginated itemsPerPage={6} filterProperties={myProperty.closed} />
      : null}
       
      </div>
    </Wrapper>
    <SectionFooter2 />
  </>

  )
}