import styled from "@emotion/styled";
import { colors,typography} from "../../styles";
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
const Div2= styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  gap:25px;
`;

const LeftIcon = styled.div``;
const FooterTitle= styled.div`
${colors.gray.dark}
${typography.head.xxxs}

`;

const FooterContainer = styled.div`
  display: flex;
  gap:10px;  
`;


export default function SectionFooter(){

return(
    <Footer>
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

    </Footer>



)

}