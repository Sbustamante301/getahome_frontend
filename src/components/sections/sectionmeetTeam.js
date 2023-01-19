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
  const github=[`https://github.com/JesusBarboza1994`, `https://github.com/Sbustamante301`, `https://github.com/Olesa0896`, `https://github.com/titaRuiz1`];
  const linkedin = [`https://www.linkedin.com/in/jesus-barboza/`, "https://www.linkedin.com/in/sebastian-bustamante-82423a25b/" , `https://www.linkedin.com/in/olenka-sanchez-aguilar/`, `https://www.linkedin.com/in/asuntita-ruiz/`];
  return(
    <Section4>
        <Section4Title>Meet the Team</Section4Title>
        <Div>
          {Miembros.map((miembro, index) => {
            return (
              <TeamCard miembro={miembro} key={index} github={github[index]} linkedin={linkedin[index]}/>)
          })}
        </Div>

      </Section4>

  )
}