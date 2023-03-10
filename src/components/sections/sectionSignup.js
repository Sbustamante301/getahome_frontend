import styled from "@emotion/styled";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { colors,typography } from "../../styles";
import { CreateAccountButton } from "../Button";


const Section3 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding:64px;
gap: 10px;
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
  const {user} = useAuth()
  const navigate = useNavigate();
  function handleSubmit(event){
    event.preventDefault();
    navigate("/signup");
  }
  return (
    <Section3>
        <Section3Title>Getting someone to rent your apartment has never been this easy
          {user ? null : <CreateAccountButton onClick={handleSubmit}>Create An Account Now</CreateAccountButton>}
        </Section3Title>
    </Section3>
  )
}
