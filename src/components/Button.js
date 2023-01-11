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

export const Button3 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.gray.medium};
    border: 1px solid ${colors.pink.medium};
    width: 101px;
    height: 40px;
    background: ${colors.white};
    border-radius: 16px;
`;

export const Button4 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 101px;
    height: 40px;
    border: none;
    border-radius: 16px;
`;

export const Button5 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.gray.medium};
    background: ${colors.white};
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 16px;
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
`;

const Text2 = styled.div`
    margin-bottom:4px;
    color:${colors.gray.medium};
    ${typography.text.button}
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

const Text3 = styled.div`
    margin-bottom:4px;
    color:${colors.white};
    ${typography.text.button}
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;


export function PrimaryButton({ children, Icon }) {
    return (
        <Button>
            <LeftIcon>
                {Icon}
            </LeftIcon>
            <Text>{children}</Text>
            <RightIcon>{Icons.arrowDown}</RightIcon>
        </Button>
    )

}

export function JoinButton({ children }) {
    return (
        <Button3>
            <LeftIcon style={{ color: `${colors.gray.medium}` }}>
                {Icons.userAdd}
            </LeftIcon>
            <Text2>{children}</Text2>
        </Button3>
    )
};

export function SearchButton({ children }) {
    return (
        <Button5>
            <LeftIcon style={{ color: `${colors.gray.medium}` }}>
                {Icons.search}
            </LeftIcon>
            <Text2>{children}</Text2>
        </Button5>
    )
};

export function LoginButton({ children }) {
    return (
        <Button4>
            <LeftIcon>
                {Icons.userReceived}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button4>
    )
};

export function CreateAccountButton({ children }) {
    return (
        <Button2>
            <Text>{children}</Text>
        </Button2>

    )

}
