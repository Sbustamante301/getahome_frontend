import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { Icons } from "../utils";
export const Button = styled.button`

display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
gap: 12px;

border:none;
width: 177px;
height: 56px;
left: 8px;
top: 263px;
background: ${colors.pink.medium};
border-radius: 16px;
padding:16px;
`;


const LeftIcon = styled.div`
color:${colors.white};


`
const RightIcon = styled.div`
color:${colors.white}

`
const Text = styled.div`
margin-bottom:4px;
${typography.text.button};
color:${colors.white};


`


export  function CreateAccButton({children}){
    return(
        <Button>
        <LeftIcon>
        {Icons.user}
        </LeftIcon>
        <Text>{children}</Text>
        <RightIcon>{Icons.arrowDown}</RightIcon>
        </Button>

    )

}