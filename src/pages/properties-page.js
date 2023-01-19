import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import Filter from "../components/filter";
import { SectionFooter2 } from "../components/sections/sectionFooter";
import Paginated from "../components/pagination";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
padding: 32px 152px;
`

export default function PropertiesPage() {
  const { properties, setCurrentProperty, setProperties, propertyFilter, address } = useAuth();
  const itemsPerPage = 9;
  const [filterAllproperties, setFilterAllproperties] = useState([...properties].filter(property => {
    if (property.property) return property.property.status
  }))

  useEffect(() => {
    console.log("squi tmb")
    let filterProperties = [...properties].filter(property => {
      if (property.property) return property.property.status
    });
    // Filter by address
    filterProperties = filterProperties.filter((property, index) => {
      const addressFilter = address?.filter(add => add.id === property.property.id)
      if (addressFilter) return addressFilter[0]?.address?.includes(propertyFilter?.search)
      return true
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
      if (propertyFilter.types[1]) return property.property.property_type === "apartment"
      if (propertyFilter.types[0]) return property.property.property_type === "house"
    })
    // Filter for type (sale or rent)
    filterProperties = filterProperties.filter(property => {
      if (!(propertyFilter.mode[0] || propertyFilter.mode[1])) return true;
      if (propertyFilter.mode[0] && propertyFilter.mode[1]) return true;
      if (propertyFilter.mode[0]) return property.property.mode === "sale"
      if (propertyFilter.mode[1]) return property.property.mode === "rent"
    })
    setFilterAllproperties(filterProperties)
  }, [propertyFilter, properties])

  return (
    <>
      <Wrapper>
        <Filter />

        <Paginated itemsPerPage={9} filterProperties={filterAllproperties} />,

      </Wrapper>
      <SectionFooter2 />
    </>




  )


}