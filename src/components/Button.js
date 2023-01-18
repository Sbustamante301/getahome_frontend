import styled from "@emotion/styled";
import { RiHeartFill } from "react-icons/ri";
import { useAuth } from "../context/auth-context";
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
    width: 100px;
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
export const Button6 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 96px;
    height: 40px;
    border: none;
    border-radius: 16px;
    margin:16px;
`;
export const Button7 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.gray.medium};
    border: 1px solid ${colors.pink.medium};
    width: 130px;
    height: 40px;
    background: ${colors.white};
    border-radius: 16px;
`;
export const Button8 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 218px;
    height: 40px;
    border: none;
    border-radius: 16px;
`;
export const Button9 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 16px;
`;
export const Button10 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 192px;
    height: 40px;
    border: none;
    border-radius: 16px;
`;
export const Button11 = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding:8px 16px;
    gap: 8px;
    margin-top:16px;

    color ${colors.white};
    background: ${colors.pink.medium};
    width: 212px;
    height: 40px;
    border: none;
    border-radius: 16px;
`;

export const Button12 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    color ${ colors.white};
    background: ${ colors.pink.medium};
    width: 192px;
    height: 48px;
    border: none;
    border-radius: 16px;
`;

export const Button13 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 8px;

    color ${ colors.white};
    background: ${ colors.pink.dark};
    width: 84px;
    height: 32px;
    border: none;
`;

export const Button14 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 8px;

    color ${ colors.white};
    background: ${ colors.pink.dark};
    width: 100px;
    height: 32px;
    border: none;
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
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
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

export function JoinButton({ children, onClick }) {
    return (
        <Button3 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.gray.medium} ` }}>
                {Icons.userAdd}
            </LeftIcon>
            <Text2>{children}</Text2>
        </Button3>
    )
};

export function FindButton({ children, onClick }) {
    return (
        <Button5 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.gray.medium} ` }}>
                {Icons.search}
            </LeftIcon>
            <Text2>{children}</Text2>
        </Button5>
    )
};

export function LoginButton({ children, handleLogin }) {

    return (
        <Button4 onClick={handleLogin}>
            <LeftIcon>
                {Icons.userReceived}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button4>
    )
};

export function LoginCardButton({ children, handleLogin }) {

    return (
        <Button11 onClick={handleLogin}>
            <LeftIcon>
                {Icons.userReceived}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button11>
    )
};

export function SearchButton({ children, onClick }) {
    return (
        <Button6 onClick={onClick}>
            <Text3>{children}</Text3>
        </Button6>
    )
};
export function CreateAccountButton({ children, onClick }) {
    return (
        <Button2 onClick={onClick}>
            <Text>{children}</Text>
        </Button2>
    )
};

export function LogoutButton({ children, onClick }) {
    return (
        <Button7 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.gray.medium} ` }}>
                {Icons.logoutCircle}
            </LeftIcon>
            <Text2>{children}</Text2>
        </Button7>
    )
};

export function SaveButton({ children, onClick }) {
    return (
        <Button8 onClick={onClick}>
            <LeftIcon >
                <RiHeartFill style={{ color:`${colors.white} ` }}/>
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button8>
    )
};

export function ProfileButton({ children, onClick }) {
    return (
        <Button9 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.user}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button9>
    )
};

export function MyPropertyButton({ children, onClick }) {
    return (
        <Button10 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.home}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button10>
    )
};

export function ContactAdvertiserButton({ children, onClick }) {
    return (
        <Button11 onClick={onClick}>
            <Text3>{children}</Text3>
        </Button11>
    )
};

export function EditPropertyButton({ children, onClick }) {
    return (
        <Button12 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.edit}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button12>
    )
};

export function EditCardButton({ children }) {
    return (
        <Button13>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.edit}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button13>
    )
}

export function CloseCardButton({ children, onClick }) {
    return (
        <Button13 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.home}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button13>
    )
}

export function RestoreCardButton({ children, onClick }) {
    return (
        <Button13 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.upload}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button13>
    )
}

export function DeleteCardButton({ children, onClick }) {
    return (
        <Button13 onClick={onClick}>
            <LeftIcon style={{ color: `${colors.white} ` }}>
                {Icons.trash}
            </LeftIcon>
            <Text3>{children}</Text3>
        </Button13>
    )
}