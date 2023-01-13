import styled from "@emotion/styled";
import { colors,typography } from "../styles";
import { Icons } from "../utils";



const TeamCardContainer = styled.div`
    width:180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    
  



`

const LeftIcon=styled.div`
color:${colors.gray.medium};
width:20px;
height:19.51px;
display:flex;
flex-direction:row;
justify-content:center;
padding:2px;




`;
const RightIcon=styled.div`
color:${colors.gray.medium};
width:18px;
height:18px;

`;
const Text = styled.div`
${typography.head.sm};
width:229px;
text-align:center;
`
const Div = styled.div`
margin:0px;
width:84px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;

`;

const Img = styled.img`
border-radius:100px;
background:${colors.backgroundLight};
height:180px;
width:180px;

`;



export function TeamCard({miembro}){
    return(
        
        <TeamCardContainer>
            <Img src={miembro.img}/>
            <Text>{miembro.name}</Text>
            <Div>
                
            <LeftIcon>
                {Icons.github}
            </LeftIcon>
            <RightIcon>
                {Icons.linkedinBox}
            </RightIcon>
            
            </Div>
         </TeamCardContainer>


    )
}