import styled from "@emotion/styled";
import logo from "../../assets/Logo.svg"
import { RiHeartFill, RiGithubFill, RiReactjsLine } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
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
  width: 80%;
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

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width:100%;
  gap:4px;
`;

const MemberGit1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;
const MemberGit2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;
const MemberGit3 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;
const MemberGit4 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 188px;
  height: 68px;
`;

const FooterText = styled.p`
  height: 20px;

  ${typography.text.sm};
  letter-spacing: 0.25px;
  color:${colors.gray.medium}
`;

const SubtitleFooter = styled.p`
  width: 98px;
  height: 16px;

  ${typography.text.xs};
  letter-spacing: 0.4px;
  color:${colors.gray.medium}; 
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
              <MembersGrid>
                <a href='https://github.com/JesusBarboza1994' style={{ textDecoration: 'none' }}>
                  <MemberGit1>
                    <RiGithubFill style={{ width: '20px', height: '20px', color: colors.gray.medium }} />
                    <FooterText style={{ marginLeft: '4px' }} >Jesus Barboza</FooterText>
                  </MemberGit1>
                </a>
                <a href='https://github.com/Olesa0896' style={{ textDecoration: 'none' }}>
                  <MemberGit2>
                    <RiGithubFill style={{ width: '20px', height: '20px', color: colors.gray.medium }} />
                    <FooterText style={{ marginLeft: '4px' }} >Olenka Sánchez</FooterText>
                  </MemberGit2>
                </a>
                <a href='https://github.com/Sbustamante301' style={{ textDecoration: 'none' }}>
                  <MemberGit3>
                    <RiGithubFill style={{ width: '20px', height: '20px', color: colors.gray.medium }} />
                    <FooterText style={{ marginLeft: '4px' }} >Sebas Bustamante</FooterText>
                  </MemberGit3>
                </a>
                <a href='https://github.com/titaRuiz1' style={{ textDecoration: 'none' }}>
                  <MemberGit4>
                    <RiGithubFill style={{ width: '20px', height: '20px', color: colors.gray.medium }} />
                    <FooterText style={{ marginLeft: '4px' }} >Tita Ruiz</FooterText>
                  </MemberGit4>
                </a>
              </MembersGrid>
            </MembersContainer>

            <RightContainer>
              <SubtitleFooter>Source code:</SubtitleFooter>
              <FooterText >
                <DiRuby style={{ width: '16px', height: '16px', marginRight: '4px', color: colors.gray.medium }} />
                Ruby on Rails REST API
              </FooterText>
              <FooterText>
                <RiReactjsLine style={{ width: '16px', height: '16px', marginRight: '4px', color: colors.gray.medium }} />
                React Responsive SPA
              </FooterText>
            </RightContainer>

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