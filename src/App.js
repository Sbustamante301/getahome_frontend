import { BiBath } from "react-icons/bi";
import { RiAddFill } from "react-icons/ri";
import { Icons } from "./utils";
import styled from "@emotion/styled";
import { colors } from "./styles";
import { CreateAccButton } from "./components/Button";

const Section3 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 64px 10px;
gap: 10px;

position: absolute;
height: 312px;
left: 0px;
right: 0px;
top: 1276px;
background: ${colors.pink.shallow}


`;
const Section4 = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 64px 192px;
gap: 26px;

position: absolute;
width: 1440px;
height: 486px;
left: 0px;
top: 1588px;
background: ${colors.white}`

const Wrapper = styled.div``;


function App() {
  return (
    <Wrapper>
    {/* <Section3> */}
       <CreateAccButton>BUTTON</CreateAccButton>
       
       
    {/* </Section3> */}
    </Wrapper>

  );
}

export default App;
