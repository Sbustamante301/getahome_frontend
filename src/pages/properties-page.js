
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "../components/propertyCard";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Filter from "../components/filter";
import { useEffect } from "react";
import { SectionFooter2 } from "../components/sections/sectionFooter";



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

export default function PropertiesPage() {
  const { properties, setCurrentProperty, propertyFilter } = useAuth();
  console.log(propertyFilter)
  let filterProperties = [...properties].filter(property => property.property.status);

  // Filter by address
  filterProperties = filterProperties.filter(property => {
    return property.property.address.includes(propertyFilter.search)
  })
  // Filter for max and min prices
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.prices.max)) return true;
    return (property.property.price <= propertyFilter.prices.max)
  })
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.prices.min)) return true;
    return (property.property.price >= propertyFilter.prices.min)
  })
  // Filter for min number of bedrooms                      
  filterProperties = filterProperties.filter(property => {
    return (property.property.bedrooms > propertyFilter.beds)
  })
  // Filter for min number of bathrooms                      
  filterProperties = filterProperties.filter(property => {
    return (property.property.bathrooms > propertyFilter.baths)
  })
  // Filter for max and min areas
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.areas.max)) return true;
    return (parseFloat(property.property.area) <= propertyFilter.areas.max)
  })
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.areas.min)) return true;
    return (parseFloat(property.property.area) >= propertyFilter.areas.min)
  })
  // Filter for pet allowed
  filterProperties = filterProperties.filter(property => {
    if (!propertyFilter.petAllowed) return true;
    return (property.property.pet_allowed)
  })
  // Filter for type (house or apartment)
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.types[0] || propertyFilter.types[1])) return true;
    if (propertyFilter.types[0] && propertyFilter.types[1]) return true;
    if (propertyFilter.types[0]) return property.property.property_type === "apartment"
    if (propertyFilter.types[1]) return property.property.property_type === "house"
  })
  // Filter for type (sale or rent)
  filterProperties = filterProperties.filter(property => {
    if (!(propertyFilter.mode[0] || propertyFilter.mode[1])) return true;
    if (propertyFilter.mode[0] && propertyFilter.mode[1]) return true;
    if (propertyFilter.mode[0]) return property.property.mode === "sale"
    if (propertyFilter.mode[1]) return property.property.mode === "rent"
  })
  console.log(filterProperties)

  return (
    <>
      <Wrapper>
        <Filter />
        <ContainerList>
          {filterProperties.map((property, index) => {
            return (
              <Link key={`p${index}`} style={{ textDecoration: "none" }} to={`/properties/${property.property.id}`}>
                <PropertyCard showProperty={() => setCurrentProperty(property)} property={property} />
              </Link>
            )
          })}
        </ContainerList>
      </Wrapper>
      <SectionFooter2 />
    </>




  )


}