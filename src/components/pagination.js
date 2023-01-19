import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { PropertyCard } from "./propertyCard";
import styled from "@emotion/styled";
import { colors,typography } from "../styles";





const ContainerList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 100px 184px;
row-gap: 32px;
column-gap: 86px;
justify-items:center;
justify-content:center;
`

const StylesPagination= styled(ReactPaginate)`
list-style:none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;


li {
  border: 1px solid rgba(97, 97, 97, 0.15);
  border-radius: 4px;
  width: 31px;
  padding:5px 12px
  height: 31px;
  text-align:center;
  cursor:default;
  background: #FFFFFF;
  color: ${colors.gray.medium};
  ${typography.text.sm};

  &:hover {
    background: rgba(244, 143, 177, 0.15);
    border: 1px solid #BF5F82;
    }
}

`

function Items({ currentItems }) {
  const {setCurrentProperty} = useAuth();

  function handleCurrentProperty(e,property){
    setCurrentProperty(property)
    sessionStorage.setItem("currentProperty", JSON.stringify(property))
  }
  return (
    <ContainerList>
      {currentItems &&
        currentItems.map((property) => ( 
         <PropertyCard showProperty={(e) => handleCurrentProperty(e,property)} property={property} id={property.property.id} />     
        ))}
    </ContainerList>
  );
}


export default function Paginated({itemsPerPage, filterProperties}){
  
  const [itemOffset, setItemOffset] = useState(0);
  //itemOffset = 0
  const endOffset = itemOffset + itemsPerPage;
  //endOffset = 3
  const currentItems = filterProperties.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterProperties.length / itemsPerPage);
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterProperties.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
        <StylesPagination 
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}   
         />
      
    </>
  );

}