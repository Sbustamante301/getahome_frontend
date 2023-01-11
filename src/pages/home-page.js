import SectionMeetHome from "../components/sections/sectionMeetHome";
import styled from "@emotion/styled";
import { PropertyCard } from "../components/propertyCard"
import SectionMeetTeam from "../components/sections/sectionmeetTeam";
import SectionFooter from "../components/sections/sectionFooter";

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  left: 0px;
  top: 1588px;
`

function HomePage(property){
 

  return (
    <>
      <SectionMeetHome/>
      <Section2>
        {/* <PropertyCard property={property} /> */}
      </Section2>
      
      <SectionMeetTeam/>
      <SectionFooter/>
    </>
  )
}


export default HomePage;