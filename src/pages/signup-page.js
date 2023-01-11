import { colors,typography} from "../styles"
import styled from "@emotion/styled"
import SectionFooter from "../components/sections/sectionFooter"
import landlord from "../assets/landlord.svg"
import homeseeker from "../assets/homeseeker.svg"

const Section1 = styled.div`
    background:${colors.pink.shallow};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 352px;
    padding:100px;
    
`;

const Section2 = styled.div`
    background:${colors.white};
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 352px;
    
`;

const Div= styled.div``;

const Title = styled.div`
${typography.head.sm};
color:#1D4044;


width: 520px;
height: 196px;
text-align: center;
display:flex;
align-items:center;
flex-direction:row;
`;
const SubTitle = styled.div`
${typography.head.xl};
color:#1D4044;
width:677.983px;
height:88px;

`;

const Img= styled.img`
`;

const ImgDiv= styled.div`
width:280px;
height:274px;
display:flex;
flex-direction:column;
align-items:center;
padding: 16px 20px;
gap: 8px;
background:${colors.white};
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
margin:30px;
margin-top:-150px;
padding:0px;

`;

const ImgTitle=styled.div`
${typography.head.xs}
${colors.gray.dark}

`;

const ImgSubtitle=styled.div`
${typography.head.xxxs}
${colors.gray.dark}
`;



export default function SignupPage(){
    return(
        <Div>
        <Section1>
            <Title>Selecciona el perfil con el que te identificas</Title>
                <SubTitle>Que estas buscando?</SubTitle>
        </Section1>
        <Section2>
            <ImgDiv>
                <Img src={landlord}/>
                <ImgTitle>Landlord</ImgTitle>
                <ImgSubtitle>You want to rent or sell a home</ImgSubtitle>
            </ImgDiv>
            <ImgDiv>
                <Img src={homeseeker}/>
                <ImgTitle>Homeseeker</ImgTitle>
                <ImgSubtitle>You want to find a home</ImgSubtitle>
            </ImgDiv>
        </Section2>
        <SectionFooter/>
        </Div>
    )
}