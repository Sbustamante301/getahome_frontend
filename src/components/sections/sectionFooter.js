import styled from "@emotion/styled";
import logo from "../../assets/Logo.svg"
import { RiHeartFill } from "react-icons/ri";
import { useAuth } from "../../context/auth-context";
import { colors, typography } from "../../styles";
import { Icons } from "../../utils";

const Footer = styled.div`
  border-style: solid none none none;
  border-width: thin;
  border-color: ${colors.pink.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;
  background: ${colors.background}
`;

const Div1 = styled.div`
  display:flex;
  justify-content:space-evenly;
  width:100%;
`;
const Div2 = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  gap:25px;
`;

const Footer2 = styled.div`
  border-style: solid none none none;
  border-width: thin;
  border-color: ${colors.pink.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  width: 100%;
  background: ${colors.background}
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;

  height: 124px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 247px;
  height: 92px;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 364px;
  height: 68px;
`;

const FooterText = styled.p`
  height: 20px;

  ${typography.text.sm};
  letter-spacing: 0.25px;
  color:${colors.gray.dark}
`;

const SubtitleFooter = styled.p`
  width: 98px;
  height: 16px;

  ${typography.text.xs};
  letter-spacing: 0.4px;
  color:${colors.gray.dark}; 
`;

const LeftIcon = styled.div``;
const FooterTitle = styled.div`
${colors.gray.dark}
${typography.head.xxxs}

`;

const FooterContainer = styled.div`
  display: flex;
  gap:10px;  
`;


export default function SectionFooter() {
  const { user } = useAuth();

  return (
    <>
      {user ?
        (<Footer2>
          <FooterInfoContainer>
            <LeftContainer>
              <img src={logo} alt="image1" />
              <FooterText>© 202X-Find that Home</FooterText>
              <FooterText>Codeable - Cohort8 Final Project</FooterText>
            </LeftContainer>

            <MembersContainer>
              <SubtitleFooter>Build with <RiHeartFill style={{ color: colors.pink.dark }} /> by:</SubtitleFooter>
            </MembersContainer>

          </FooterInfoContainer>
        </Footer2>)
        :
        (<Footer>
          <Div1>
            <FooterTitle>© 202X-Find that Home</FooterTitle>
            <FooterTitle>Source Code</FooterTitle>
            <FooterTitle>Codeable-Cohort X Final Project</FooterTitle>
          </Div1>
          <Div2>
            <FooterContainer>
              <LeftIcon>{Icons.ruby}</LeftIcon>
              <FooterTitle>Ruby on Rails REST API</FooterTitle>
            </FooterContainer>

            <FooterContainer>
              <LeftIcon>{Icons.react}</LeftIcon>
              <FooterTitle>React Responsive SPA</FooterTitle>
            </FooterContainer>

          </Div2>
        </Footer>)}
    </>
  )
}