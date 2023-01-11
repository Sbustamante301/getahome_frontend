
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";



const ContainerList = styled.div`
display:grid
grid-template-columns: 1fr 1fr 1fr;
row-gap: 16px;
height: 800px;
justify-items:center;
justify-content:center;
// overflow-y: scroll;
// overflow-x:hidden;
`

export default function PropertiesPage(){
  const {properties, setCurrentProperty}= useAuth();
  
  return(
    <ContainerList>
      {properties.map((property, index)=>{
        return(
          <Link key={`p${index}`} style={{textDecoration:"none"}} to={`/properties/${property.property.id}`}>
            <PropertyCard  showProperty={()=>setCurrentProperty(property)} property={property}/>
          </Link>
        ) 
      })} 
    </ContainerList>
  
    )


}