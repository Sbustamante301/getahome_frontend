import { BiBath } from "react-icons/bi";
import { RiAddFill } from "react-icons/ri";
import { Icons } from "./utils";
import styled from "@emotion/styled";
import buildings from "./assets/picture.svg"

import { colors, typography } from "./styles";
import { CreateAccountButton } from "./components/Button";
import { PrimaryButton } from "./components/Button";
import { TeamCard } from "./components/teamCard";
import teamMember from "./assets/team.svg";
import { PropertyCard } from "./components/propertyCard"
import Navbar from "./components/navbar";


// padding: 64px 192px;
// gap: 26px;


const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 600px;
  left: 0px;
  top: 1588px;
`

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 600px;
  left: 0px;
  top: 1588px;
`

const TitleContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:8px;
  color:${colors.gray.dark}
`

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  margin-top:64px;
  boder: 1px solid black;

  width: 800px;
  height: 72px;
  left: 320px;
  top: 252px;

  background: ${colors.white};

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 160px;
  height: 56px;
`;

const InputLabel = styled.label`
  ${typography.text.xxs};
  color: ${colors.gray.medium}
`;

const Select = styled.select`
  display: flex;
  justify-content: strech;
  width: 100%;
  ${typography.text.md};
  color: ${colors.gray.dark};
  border: none;
`;


const Section3 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding:64px, 10px, 64px, 10px;
gap: 10px;

height: 312px;
width:100%;

background: ${colors.pink.shallow}


`;
const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;
  height: 486px;
  left: 0px;
  top: 1588px;

  background: ${colors.white}
`;

const Wrapper = styled.div``;

const Section1Title = styled.h1`
  margin: 0px;
  ${typography.head.xl};
`;

const Section1Subtitle = styled.h4`
  margin: 0px;
  ${typography.head.sm};
`;

const Section3Title = styled.div`
${typography.head.md};
color:${colors.gray.dark};
gap: 32px;
width: 823px;
height: 196px;
text-align: center;
letter-spacing: 0.25px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;



`

const Section4Title = styled.div`
${typography.head.lg};
color:${colors.pink.dark};

width: 356px;
height: 59px;
text-align:center;
display:flex;
justify-content:center;
align-items:center;





`


function App() {
  return (
    <Wrapper>
      <Navbar />
      <Section1 style={{ backgroundImage: `url(${buildings})`, backgroundPosition: 'center' }}>
        <TitleContainer>
          <Section1Title> Meet your new home</Section1Title>
          <Section1Subtitle>The easiest way to find where you belong</Section1Subtitle>
        </TitleContainer>
        <FiltersContainer>
          <InputContainer>
            <InputLabel for="lookType">I'M LOOKING FOR</InputLabel>

            <Select name="types" id="lookType">
              <option value="apartment">An Apartment</option>
              <option value="house">A House</option>
            </Select>
          </InputContainer>
          <div></div>
          <div></div>
          <div></div>
        </FiltersContainer>
      </Section1>
      <Section2>
        <PropertyCard propertyPic={'https://www.musicmundial.com/wp-content/uploads/2023/01/Lee-know-de-Stray-Kids-sorprende-a-sus-fans-estadounidenses-por-su-extrema-belleza.jpg'} />
      </Section2>
      <Section3>
        <Section3Title>Getting someone to rent your apartment has never been this easy
      <CreateAccountButton>Create An Account Now</CreateAccountButton>
        </Section3Title>
      </Section3>
      <Section4>
        <Section4Title>Meet the Team</Section4Title>
        <TeamCard />
      </Section4>
    </Wrapper>

  );
}

export default App;
