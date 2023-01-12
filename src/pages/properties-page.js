
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Filter from "../components/filter";
import { useEffect } from "react";



const ContainerList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 132px 184px 132px 184px;
row-gap: 32px;
column-gap: 86px;
justify-items:center;
justify-content:center;

// overflow-y: scroll;
// overflow-x:hidden;
`
const Wrapper = styled.div`
padding: 32px 152px;
`

export default function PropertiesPage(){
  const {properties, setCurrentProperty, propertyFilter}= useAuth();
  useEffect(() => {
    console.log(propertyFilter)
  
  }, [propertyFilter])
  
  
  // const filterProperties = 
  return(
    <Wrapper>
      <Filter/>
      <ContainerList>
        {properties.map((property, index)=>{
          return(
            <Link key={`p${index}`} style={{textDecoration:"none"}} to={`/properties/${property.property.id}`}>
              <PropertyCard  showProperty={()=>setCurrentProperty(property)} property={property}/>
            </Link>
          ) 
        })} 
      </ContainerList>
    </Wrapper>
  
    )


}