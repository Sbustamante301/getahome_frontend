import { BiBath } from "react-icons/bi";
import { RiAddFill } from "react-icons/ri";
import { Icons } from "./utils";
import styled from "@emotion/styled";
import buildings from "./assets/picture.svg"

import { colors, typography } from "./styles";
import { CreateAccountButton } from "./components/Button";
import { PrimaryButton } from "./components/Button";


// padding: 64px 192px;
// gap: 26px;


const Section1 = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 600px;
  left: 0px;
  top: 1588px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  position: absolute;
  width: 800px;
  height: 72px;
  left: 320px;
  top: 252px;

  /* White */

  background: #FFFFFF;
  /* Elevation1 */

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;


const Section3 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 64px 10px;
gap: 10px;

position: absolute;
height: 312px;
left: 0px;
right: 0px;
top: 1276px;
background: ${colors.pink.shallow}


`;
const Section4 = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 64px 192px;
gap: 26px;

position: absolute;
width: 1440px;
height: 486px;
left: 0px;
top: 1588px;
background: ${colors.white}`

const Wrapper = styled.div``;

const Section1Title = styled.h1`
  ${typography.head.xl};
`;

const Section1Subtitle = styled.h4`
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


function App() {
  return (
    <Wrapper>
      <Section1 style={{ backgroundImage:`url(${buildings})`, width: '100%'}}>
        <TitleContainer>
          <Section1Title> Meet your new home</Section1Title>
          <Section1Subtitle>The easiest way to find where you belong</Section1Subtitle>
        </TitleContainer>
      </Section1>
     <Section3>
      <Section3Title>Getting someone to rent your apartment has never been this easy
      <CreateAccountButton>Create An Account Now</CreateAccountButton>
      </Section3Title>
       
       
       
     </Section3>
    </Wrapper>

  );
}

export default App;
