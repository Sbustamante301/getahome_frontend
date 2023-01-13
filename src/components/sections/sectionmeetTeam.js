import Jesus from "../../assets/members/MiLord.jpeg";
import olenka from "../../assets/members/olenka.jpeg";
import Sebastian from "../../assets/members/Sebastian.jpeg";
import Tita from "../../assets/members/Tita.jpeg"
import { TeamCard } from "../teamCard";

import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

const Div = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  gap:30px;;
 
`;
const Section4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;
  padding:64px;
  background: ${colors.white}
`;

const Section4Title = styled.div`
${typography.head.lg};
color:${colors.pink.dark};
height: 59px;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
`
export default function SectionMeetTeam(){
  const Miembros=[{
    name:'Jesus Barboza',
    img:`${Jesus}`,
  },
  {
    name:'Sebas Bustamante',
    img:`${Sebastian}`,
  },
  {
    name:'Olenka Sánchez',
    img:`${olenka}`,
  },
  {
    name:'Tita Ruiz',
    img:`${Tita}`,
  }];

  return(
    <Section4>
        <Section4Title>Meet the Team</Section4Title>
        <Div>
          {Miembros.map((miembro, index) => {
            return (
              <TeamCard miembro={miembro} key={index} />)
          })}
        </Div>

      </Section4>

  )
}