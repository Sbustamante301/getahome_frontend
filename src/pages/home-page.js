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

function HomePage(){

  return (
    <>
      <SectionMeetHome/>
      <Section2>
        <PropertyCard propertyPic={'https://www.musicmundial.com/wp-content/uploads/2023/01/Lee-know-de-Stray-Kids-sorprende-a-sus-fans-estadounidenses-por-su-extrema-belleza.jpg'} />
      </Section2>
      
      <SectionMeetTeam/>
      <SectionFooter/>
    </>
  )
}


export default HomePage;