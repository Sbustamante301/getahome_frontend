import styled from "@emotion/styled";
import { colors,typography } from "../../styles";
import { CreateAccountButton } from "../Button";


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
export default function SectionSignup(){

  return (
    <Section3>
        <Section3Title>Getting someone to rent your apartment has never been this easy
          <CreateAccountButton>Create An Account Now</CreateAccountButton>
        </Section3Title>
    </Section3>
  )
}
