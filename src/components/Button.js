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

export const Button2 = styled.button`

display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
gap: 8px;
border:none;
width: 264px;
height: 56px;
left: 279.5px;
top: 128px;
background: ${colors.pink.medium};
border-radius: 16px;
padding:16px, 24px, 16px, 24px;

`;

const LeftIcon = styled.div`
color:${colors.white};


`
const RightIcon = styled.div`
color:${colors.white}

`
const Text = styled.div`
margin-bottom:4px;
color:${colors.white};
text-align: center;
letter-spacing: 1.25px;
text-transform: uppercase;


`


export  function PrimaryButton({children,Icon}){
    return(
        <Button>
        <LeftIcon>
        {Icon}
        </LeftIcon>
        <Text>{children}</Text>
        <RightIcon>{Icons.arrowDown}</RightIcon>
        </Button>

    )

}


export  function CreateAccountButton({children}){
    return(
        <Button2>
        <Text>{children}</Text>
        </Button2>

    )

}
