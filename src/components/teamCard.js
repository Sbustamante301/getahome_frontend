import styled from "@emotion/styled";
import { colors,typography } from "../styles";
import { Icons } from "../utils";
import teamMember from "../assets/team.svg";

const TeamCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width:240px;
    height:273px;



`

const LeftIcon=styled.div`
color:${colors.gray.medium};
width:20px;
height:20px;
`;
const RightIcon=styled.div`
color:${colors.gray.medium};
width:20px;
height:20px;
`;
const Text = styled.h1`
margin-bottom:4px;

text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;


`

const Img = styled.img`
height:180px;
width:180px;


`;
export function TeamCard(){
    
    return(

        <TeamCardContainer>
            <Img src={teamMember}/>
            <Text>Ruby Ramirez</Text>
            <LeftIcon>
                {Icons.github}
            </LeftIcon>
            <RightIcon>
                {Icons.linkedin}
            </RightIcon>
         </TeamCardContainer>


    )
}